/* ──────────────────────────────────────────────────────────────
   Automatify · dokumenty towarzyszące — warstwa nawigacji
   Nie zmienia żadnej liczby ani etykiety: czyta to, co jest
   w dokumencie, i buduje z tego skróty oraz oznaczenia kolumn.
   ────────────────────────────────────────────────────────────── */
(function () {
  var EN = (document.documentElement.lang || 'pl').toLowerCase().indexOf('en') === 0;
  var T = EN
    ? { jump: 'Sections', idxH: 'All twenty questions', idxS: 'Click a question to jump straight to the answer. The dot marks the uncomfortable ones.', fte: 'headcount', cost: 'cost', src: 'source cell in the model', expand: 'expand' }
    : { jump: 'Sekcje', idxH: 'Wszystkie dwadzieścia pytań', idxS: 'Kliknij pytanie, aby przejść od razu do odpowiedzi. Kropka oznacza pytania niewygodne.', fte: 'etaty', cost: 'koszt', src: 'komórka źródłowa w modelu', expand: 'rozwiń' };

  function txt(el) { return (el && el.textContent || '').replace(/\s+/g, ' ').trim(); }
  function slug(s) {
    return s.toLowerCase()
      .replace(/[ąàáâä]/g, 'a').replace(/[ćç]/g, 'c').replace(/[ęèéêë]/g, 'e')
      .replace(/ł/g, 'l').replace(/ń/g, 'n').replace(/[óòôö]/g, 'o')
      .replace(/ś/g, 's').replace(/[żź]/g, 'z').replace(/[ûùü]/g, 'u')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
  }

  /* ── 1. wysokość górnego paska → offset dla paska skoków ── */
  var topbar = document.querySelector('.topbar');
  function setTb() {
    var h = topbar ? Math.round(topbar.getBoundingClientRect().height) : 56;
    document.documentElement.style.setProperty('--tb', h + 'px');
  }
  setTb();
  window.addEventListener('resize', setTb);

  /* ── 2. pasek skoków po sekcjach ── */
  var secs = [].slice.call(document.querySelectorAll('.sec'));
  var entries = [];
  secs.forEach(function (s) {
    var t = s.querySelector('.sec-t');
    if (!t) return;
    var n = s.querySelector('.sec-n');
    if (!s.id) s.id = 's-' + slug(txt(t));
    entries.push({ el: s, id: s.id, n: txt(n), name: txt(t) });
  });

  if (entries.length > 2) {
    var bar = document.createElement('div');
    bar.className = 'jump';
    var inner = document.createElement('div');
    inner.className = 'jump-in';
    inner.innerHTML = '<span class="jump-l">' + T.jump + '</span>';
    entries.forEach(function (e) {
      var a = document.createElement('a');
      a.href = '#' + e.id;
      a.innerHTML = (e.n ? '<span class="jn">' + e.n + '</span>' : '') + e.name;
      inner.appendChild(a);
    });
    bar.appendChild(inner);
    if (topbar && topbar.parentNode) topbar.parentNode.insertBefore(bar, topbar.nextSibling);

    /* podświetlenie sekcji, w której jesteśmy */
    var chips = [].slice.call(inner.querySelectorAll('a'));
    var ticking = false;
    function spy() {
      var probe = 170, best = 0;
      entries.forEach(function (e, i) {
        if (e.el.getBoundingClientRect().top <= probe) best = i;
      });
      chips.forEach(function (c, i) { c.classList.toggle('on', i === best); });
      if (chips[best]) {
        var c = chips[best], r = c.getBoundingClientRect(), ir = inner.getBoundingClientRect();
        if (r.left < ir.left + 20 || r.right > ir.right - 20) {
          inner.scrollLeft += (r.left - ir.left) - inner.clientWidth / 2 + r.width / 2;
        }
      }
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(spy); }
    }, { passive: true });
    spy();
  }

  /* ── 3. aneks: kolumny ludzie / pieniądze / źródło ── */
  var RX = {
    fte: /^(etaty|etat|fte|headcount)$/i,
    cost: /^(koszt|koszt \(zł\)|cost|cost \(pln\)|stawka roczna po mnożniku \(zł\)|annual rate after multiplier \(pln\)|stawka cennikowa \(zł\)|list rate \(pln\)|koszt wg modelu \(zł\)|cost per model \(pln\))$/i,
    costPrimary: /^(koszt|koszt \(zł\)|cost|cost \(pln\))$/i,
    src: /^(komórka|cell|etat: komórka|fte: cell|koszt: wiersz zbiorczy|cost: aggregate row)$/i,
    rowFte: /^(etaty|etaty \(fte\)|fte|obsada lokalna — etaty|centrala — etaty|etaty razem|etaty centrali|local staffing — fte|central — fte|total fte|central fte|local staffing — headcount)/i,
    rowCost: /^(koszt|koszt ludzi|koszt osobowy razem|obsada lokalna — koszt|centrala — koszt|koszt centrali razem|people cost|cost|total people cost|local staffing — cost|central — cost|total central cost)/i
  };

  if (document.body.getAttribute('data-doc') === 'aneks') {
    [].slice.call(document.querySelectorAll('table.tbl')).forEach(function (t) {
      var ths = [].slice.call(t.querySelectorAll('thead th'));
      var map = {}, hit = false, labels = {};
      ths.forEach(function (th, i) {
        var v = txt(th);
        var kind = RX.fte.test(v) ? 'fte' : RX.cost.test(v) ? 'cost' : RX.src.test(v) ? 'src' : null;
        if (!kind) return;
        map[i] = kind; hit = true;
        th.classList.add('c-' + kind);
        if (kind === 'cost' && RX.costPrimary.test(v)) labels.cost = v;
        else if (!labels[kind]) labels[kind] = v;
      });
      var rows = [].slice.call(t.querySelectorAll('tbody tr'));
      var rowHit = false;
      rows.forEach(function (tr) {
        for (var k in map) {
          var c = tr.cells[k];
          if (c && !c.hasAttribute('colspan')) c.classList.add('c-' + map[k]);
        }
        var first = txt(tr.cells[0]);
        if (tr.cells.length > 1 && !tr.cells[0].hasAttribute('colspan')) {
          if (RX.rowFte.test(first)) { tr.classList.add('r-fte'); rowHit = true; if (!labels.fte) labels.fte = T.fte; }
          else if (RX.rowCost.test(first)) { tr.classList.add('r-cost'); rowHit = true; if (!labels.cost) labels.cost = T.cost; }
        }
      });
      if (!hit && !rowHit) return;
      /* tintujemy tylko tam, gdzie naprawdę stoją obok siebie ludzie i pieniądze */
      if (!labels.fte || !labels.cost) {
        [].slice.call(t.querySelectorAll('.c-fte,.c-cost,.c-src')).forEach(function (c) {
          c.classList.remove('c-fte', 'c-cost', 'c-src');
        });
        [].slice.call(t.querySelectorAll('.r-fte,.r-cost')).forEach(function (r) {
          r.classList.remove('r-fte', 'r-cost');
        });
        return;
      }
      t.classList.add('hc');

      var wrap = t.closest('.tbl-wrap') || t.parentNode;
      var prev = wrap.previousElementSibling;
      if (prev && prev.classList.contains('colkey')) return;
      var parts = [];
      if (labels.fte) parts.push('<span><i class="k-fte"></i><b>' + labels.fte + '</b></span>');
      if (labels.cost) parts.push('<span><i class="k-cost"></i><b>' + labels.cost + '</b></span>');
      if (labels.src) parts.push('<span><i class="k-src"></i>' + T.src + '</span>');
      if (parts.length < 2) return;
      var key = document.createElement('div');
      key.className = 'colkey';
      key.innerHTML = parts.join('');
      wrap.parentNode.insertBefore(key, wrap);
    });

    /* ── 4. powtórzone noty metodyczne → zwijane (treść nietknięta) ── */
    var caps = [].slice.call(document.querySelectorAll('.tbl-cap'));
    var sig = {};
    caps.forEach(function (c) {
      var s = txt(c).slice(0, 70);
      (sig[s] = sig[s] || []).push(c);
    });
    Object.keys(sig).forEach(function (s) {
      var group = sig[s];
      if (group.length < 2) return;
      group.forEach(function (c) {
        var b = c.querySelector('b');
        var label = b ? txt(b).replace(/[.:]$/, '') : T.expand;
        var d = document.createElement('details');
        d.className = 'cap';
        var sm = document.createElement('summary');
        sm.textContent = label;
        c.parentNode.insertBefore(d, c);
        d.appendChild(sm);
        d.appendChild(c);
      });
    });
  }

  /* ── 4b. suplement: kolumny „ludzie" kontra „pozostałe" ── */
  if (document.body.getAttribute('data-doc') === 'suplement') {
    var RXP = { fte: /^(ludzie|people)$/i, cost: /^(pozostałe|pozostale|other)$/i };
    [].slice.call(document.querySelectorAll('table.tbl')).forEach(function (t) {
      var ths = [].slice.call(t.querySelectorAll('thead th'));
      var map = {}, labels = {};
      ths.forEach(function (th, i) {
        var v = txt(th);
        var kind = RXP.fte.test(v) ? 'fte' : RXP.cost.test(v) ? 'cost' : null;
        if (!kind) return;
        map[i] = kind;
        th.classList.add('c-' + kind);
        labels[kind] = v;
      });
      if (!labels.fte && !labels.cost) return;
      t.classList.add('hc');
      [].slice.call(t.querySelectorAll('tbody tr')).forEach(function (tr) {
        for (var k in map) {
          var c = tr.cells[k];
          if (c && !c.hasAttribute('colspan')) c.classList.add('c-' + map[k]);
        }
      });
      var wrap = t.closest('.tbl-wrap') || t.parentNode;
      var prev = wrap.previousElementSibling;
      if (prev && prev.classList.contains('colkey')) return;
      var parts = [];
      if (labels.fte) parts.push('<span><i class="k-fte"></i><b>' + labels.fte + '</b> — ' + (EN ? 'salaries and related costs' : 'wynagrodzenia i pochodne') + '</span>');
      if (labels.cost) parts.push('<span><i class="k-cost"></i><b>' + labels.cost + '</b> — ' + (EN ? 'licences, infrastructure, services' : 'licencje, infrastruktura, usługi') + '</span>');
      if (!parts.length) return;
      var key = document.createElement('div');
      key.className = 'colkey';
      key.innerHTML = parts.join('');
      wrap.parentNode.insertBefore(key, wrap);
    });
  }

  /* ── 5. FAQ: indeks dwudziestu pytań ── */
  if (document.body.getAttribute('data-doc') === 'faq') {
    var qas = [].slice.call(document.querySelectorAll('.qa'));
    if (qas.length > 4) {
      var rows2 = [];
      qas.forEach(function (qa, i) {
        var qt = qa.querySelector('.q-t');
        if (!qt) return;
        var n = txt(qa.querySelector('.q-n')) || String(i + 1);
        if (!qa.id) qa.id = 'q' + n;
        var clone = qt.cloneNode(true);
        var tag = clone.querySelector('.tag');
        if (tag) tag.parentNode.removeChild(tag);
        rows2.push({ id: qa.id, n: n, t: txt(clone), hard: qa.classList.contains('hard') });
      });
      var box = document.createElement('div');
      box.className = 'qindex';
      box.innerHTML = '<div class="qindex-h">' + T.idxH + '</div><div class="qindex-s">' + T.idxS + '</div>' +
        '<div class="qindex-grid">' + rows2.map(function (r) {
          return '<a href="#' + r.id + '"' + (r.hard ? ' class="hard"' : '') + '><span class="n">' + r.n + '</span><span>' + r.t + '</span></a>';
        }).join('') + '</div>';
      var kpis = document.querySelector('.kpis');
      if (kpis && kpis.parentNode) kpis.parentNode.appendChild(box);
    }
  }

  /* ── 5. kolumny liczbowe: zwężamy do treści, żeby liczba stała przy nazwie ──
     Po usunięciu kolumn technicznych część tabel ma mniej kolumn, a przeglądarka
     rozciąga wąskie kolumny liczbowe na całą szerokość — liczba odjeżdża od etykiety.
     Nic nie ukrywamy i nie zmieniamy treści: tylko szerokości. */
  var doc = document.body.getAttribute('data-doc');
  if (doc === 'aneks' || doc === 'suplement') {
    var NUM = /^[\s\u00a0]*[−–—-]?[\d\u00a0 .,]+\s*(%|zł|pln|eur|mln|tys\.?|m|bn)?[\s\u00a0]*$/i;
    /* wartość walutowa z prefiksem i przelicznikiem w nawiasie:
       "EUR 87,700 (PLN 380,000)", "PLN 380 000", "EUR 87.700" */
    var CUR = /^[\s\u00a0]*(eur|pln|zł|usd)[\s\u00a0]*[−–—-]?[\d\u00a0 .,]+(\s*\((eur|pln|zł|usd)[\s\u00a0]*[\d\u00a0 .,]+\))?[\s\u00a0]*$/i;
    var DASH = /^[\s\u00a0]*(—|–|-|n\/d|n\/a|0)[\s\u00a0]*$/i;
    [].slice.call(document.querySelectorAll('table.tbl')).forEach(function (t) {
      var ths = [].slice.call(t.querySelectorAll('thead th'));
      var rows = [].slice.call(t.querySelectorAll('tbody tr'));
      if (ths.length < 2 || !rows.length) return;
      if (ths.length === 2) t.classList.add('pair');
      ths.forEach(function (th, i) {
        if (i === 0) return;
        var seen = 0, ok = 0;
        rows.forEach(function (tr) {
          var c = tr.cells[i];
          if (!c || c.colSpan > 1) return;
          var v = txt(c);
          if (!v) return;
          seen++;
          if (NUM.test(v) || CUR.test(v) || DASH.test(v)) ok++;
        });
        if (!seen || ok !== seen) return;
        th.classList.add('num-col');
        rows.forEach(function (tr) {
          var c = tr.cells[i];
          if (c && c.colSpan === 1) c.classList.add('num-col');
        });
      });
    });
  }
})();
