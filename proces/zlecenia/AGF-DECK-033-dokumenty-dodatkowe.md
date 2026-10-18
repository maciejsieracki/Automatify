# AGF-DECK-033 — FAQ, suplement budżetowy, teaser i pozostałe elementy zgodne z trzema deckami

Zlecenie utworzone 2026-10-11 przed rozpoczęciem pracy. Rundy, ewaluacje i decyzje dopisuje się poniżej.

## Polecenie właściciela (dosłownie)

> „Zajmij się pozostałymi elementami, czyli FAQ, suplement bundżodowy, teaser i inne elementy dodatkowe.”

## Zakres

Dokumenty PL w obu pakietach (strona WWW i inwestor — samootwieralne HTML): FAQ, Suplement budżetowy, Teaser,
Aneks kadrowy, strona główna (index) — dopasowanie do decków AGF-DECK-032 i decyzji 1–16 z
`proces/zlecenia/AGF-DECK-032-trzy-decki.md` (zasada nadrzędna: budżet zamknięty, opis dopasowany do budżetu).
Wersje EN — po akceptacji PL (analogicznie do decyzji 14). Proces: inwentaryzacja → Operator → Ewaluator niezależny →
Final Control. Granice 1–6. Nic nie wychodzi na zewnątrz bez polecenia właściciela.

## Decyzja 17 — strona główna (index)

Właściciel: „Stronę na razie zostawmy. Informacje dla klienta muszą być totalnie inne niż dla inwestora. Dla klienta
musimy rozwiązywać jego problemy, czyli zastanowić się, jaki klient ma problem, jakie dajemy rozwiązania, jakie
korzyści. I tak musi być wyłożona strona. Use case i wyliczenia. Ale możesz zrobić przykładowy wzór strony, w sensie
testową stronę, zobaczę, jak ci to wyjdzie. Najważniejsze, najpierw skończ pozostałe dokumenty, sprawdź, czy już je
zrobiłeś, a stroną zajmiemy się później.”
Ustalenie: index bez zmian w tym zleceniu; testowa strona dla klienta — osobne zadanie, po dokumentach.

## BŁĄD ORKIESTRATORA (AGF-DECK-032, pytanie 5)

W pytaniu 5 podałem, że stawka serwisowa Robotify w budżecie jest „bez zmian w czasie”. Budżet Robotify („12. Koszty
lokalne per kraj”, w.11): w roku wejścia kraju 95% stawki z „28.”, potem −5% rocznie, bez podłogi cenowej. Liczby
w deckach (4,07 / 12,36 / 16,64 zł/h; 28 490 i 86 520 zł/rok; ≈ 7%; marża 87,5%) to wartości przy stawce bazowej —
do decków dopisuję „stawka bazowa” i krzywą ceny (95%, −5% rocznie). Zakres: AGF-DECK-032 runda 3.

## Runda 1 — Operator (orkiestrator)

Inwentaryzacja: FAQ (kwota funduszu 69,3/86,8 mln zł, TAM/SAM/SOM 250 000/70 000/14 274, DACH, Q13 z liczbami
sierpniowymi, odwołania do numerów sekcji starego decka), Suplement (kafel i akapit (c) z transzami funduszu), Teaser
(pre-seed 7 056 670 zł z kapitałem obrotowym, „400 tys. € zadeklarowane”, transze funduszu, DACH/Skandynawia, podział
70/12/5/5/4/4%), Aneks kadrowy (bez zmian merytorycznych; „PLN” → „zł”), strona główna — poza zakresem (decyzja 17).
Wprowadzone: FAQ 29 edycji + odwołanie do „Partner channel” (Q1 lejek 282 530 / 1,1% / 11,2%; Q8; Q10 — rozkład podpisów
2029 z budżetu, poprawione błędne „nie z przyspieszenia w Polsce”; Q13 wg decyzji 15; Q15–Q17 i Q20 — rundy na rozwój
43 825 650 zł, kapitał obrotowy osobno, plan awaryjny, CIT do III 2029: 2 035 480 zł; Q19; „Jak czytać”); Suplement
4 edycje (kafel 43,8; akapit (c) — rundy i plan awaryjny); Teaser 7 edycji (runda Seed, rundy 2027–2029, koszty 2027,
Pay-as-you-Save wg decyzji 4, kraje wg decyzji 6) + skrócony blok „Aktywna runda”; „PLN” → „zł” we wszystkich PL;
w pakiecie inwestora linki między dokumentami na nazwy plików pakietu. Decki — runda 3: „stawka bazowa” i krzywa ceny
Robotify (95% w roku wejścia, −5% rocznie). Pakiety: WWW (FAQ, Suplement, Aneks, 3 decki) i inwestor (7 plików PL).
Status: przekazane Ewaluatorowi.

## Runda 1 — Ewaluator niezależny: PASS Z UWAGAMI

Raport: E1–E5 istotne, E6–E15 drobne. Zgodne: decyzje 1–16, rundy / kapitał obrotowy / plan awaryjny co do złotówki,
nowe liczby FAQ, Suplement (kwota (c), P&L skonsolidowany), oba pakiety z identycznym tekstem, render bez błędów.

## Runda 2 — Operator (orkiestrator)

Skrypt `edits033r2.py` (54 zmiany, każda dokładnie 1 wystąpienie w każdym pliku):
- E1 FAQ Q6: podwyżka UiPath o 10% = 4,1 mln zł EBITDA 2029 (przed programem motywacyjnym) — tylko licencja
  producenta 41,1 mln zł; maintenance idzie do partnera wdrożeniowego.
- E2 pakiet WWW: usunięty przełącznik EN z FAQ, Suplementu, Aneksu i index.html; z pakietu wycofane wszystkie pliki
  `* (EN).html` (stara treść v3). Wersje EN — po akceptacji PL.
- E3 Suplement: najwyższa stawka — Liechtenstein, 16,64 zł.
- E4 Suplement: tabela „Rynek i plan” wg decyzji 3 (rynek 282 530 → sufit 56 506 w 2039 → plan 2035: Robotify
  30 678 / 10,9%, Agentify 31 677 / 11,2%); bez TAM / SAM / SOM i bez serii potencjału z 2037.
- E5 nazwana baza kosztów 2027: decki H / A / R i Teaser — „koszty stałe 2027 (rachunek wyników Agentify + usługi
  Robotify): 5 395 308 zł”; FAQ Q14 i Suplement — dopisek, że podział stałe / zmienne hubu przenosi koszt pozyskania
  klientów i overhead zależny od przychodu do kosztów zmiennych (5 355 000 z 5 649 816 zł).
- E6 Suplement: „(a) Rozwój biznesu”.
- E8 etykiety „(przed programem motywacyjnym)”: Suplement (wstęp, kafel, sek. 1, sek. 4, nota grupy), FAQ Q19,
  Teaser. Sprawdzone w budżecie Agentify „11.”: podstawa CIT = EBITDA przed programem motywacyjnym − odliczenia.
- E9 Suplement: test 1 000 robotów opisany jako test kontrolny przy 5 zł/h; w modelu marża przy stawce bazowej 87,5%.
- E10 FAQ: „pozycje, które rozwijamy szerzej niż deck”; Robotify na 32 wspólnych rynkach (bez Turcji i Serbii);
  orkiestrator — migracja od 2027, docelowy framework w MVP3 (Round B), spójnie z deckami.
- E11 Teaser: tytuły doradców jak w deckach (Strategic Advisor, Investment Advisor).
- E12 pakiet inwestora: link „Strona główna” — w H wraca na początek, w A i R prowadzi do decku Automatify.
- E14 Teaser: jedno zdanie o planie awaryjnym (69 314 475 zł, XII 2028, wariant A).
- Bez zmian, do decyzji właściciela: E7 (grosze w Suplemencie i Aneksie), E15 (1 937 042 zł; zaokrąglenia 07.8).
  E13 (przewijanie poziome na telefonie) — przy wersji mobilnej.
Pakiety przebudowane; render: 0 błędów JS, 0 martwych linków, teaser mieści się na 2 stronach A4.
Status: przekazane Ewaluatorowi (runda 2).

## Runda 2 — Ewaluator niezależny (dwie perspektywy): PASS Z UWAGAMI

A (poprawki vs budżet): wszystkie 12 pozycji wprowadzone i prawdziwe (przeliczone z budżetów); ISTOTNE: FAQ Q14 — dopisek
E5 w środku wywodu czyta się jak sprzeczność; strona główna (index) w pakiecie WWW ma starą treść (PLN, pakiety, 20%)
— poza zakresem (decyzja 17), do decyzji przed publikacją. B (regresje i spójność): diff r1 → r2 zawiera tylko opisane
zmiany, 0 uszkodzeń HTML, 0 błędów renderu; drobne: samotne „PL” po usunięciu przełącznika, przepełnienie str. 2 Teasera
o 3 px, nazwy w tabeli rynku, etykiety EBITDA, mapy EN, „TAM” i „$…B” w decku A, „DOCX” przy Suplemencie, hasło marki.

## Runda 3 — Operator (orkiestrator) — ostatnia runda

Skrypt `edits033r3.py` + przebudowa pakietów:
- FAQ Q14: uzgodnienie kosztów 2027 przeniesione na koniec odpowiedzi („Uwaga do liczb…”, 40 308 zł w 2027).
- FAQ Q6: rozbicie 61 867 688 zł (licencja 41,1 + maintenance partnera 20,8 mln zł), zdanie o UiPath i orkiestratorze
  rozdzielone; FAQ sek. 8 przeredagowane; FAQ Q19 — pełna podstawa CIT Robotify (R&D i zakup sprzętu).
- Suplement: stawki bazowe w zł/h z krzywą 95% / −5%; „Sufit planu”; Agentify 11,2% z zastrzeżeniem 34 krajów; zdanie
  kontekstowe 154,1 / 104,0 / 19,4 mln (bez etykiety TAM); różnica 40 308 zł rozpisana; etykiety EBITDA w kartach,
  tabeli i słowniku; nota grupy — „amortyzacja i odpisy kosztu wdrożeń”.
- „usługi profesjonalne Robotify” w deckach, FAQ i Suplemencie; decki H i A — „łączna potrzeba … wyniosłaby”;
  deck A — „łączny rynek naszych use-case'ów: ok. 70 mld $”, kwoty „mld $”; decki — „(do wydruku jako PDF)”.
- Teaser: krótszy nagłówek kosztów („koszty stałe 2027: 5 395 308 zł”, baza w wierszach), „2029 — pierwszy rok
  na plusie”, wariant A z opisem, hasło marki w nagłówku (brzmienie z decków); zmniejszone odstępy w nagłówku —
  obie strony A4 bez przepełnienia (pomiar: str. 1 do 1054 px z 1122, str. 2 do 1113 px).
- FAQ, Suplement, Aneks: usunięty przełącznik języka z jedną opcją; pakiet WWW bez map EN; pakiet inwestora —
  deck H: „↑ Początek”, bez martwego linku na ekranie hasła.
- Źródła decków (edits/common.py, nowe/*, base-v4/*) zaktualizowane tak samo jak wynik.
- Do decyzji właściciela: E7 (grosze), E15 (1 937 042 zł; 07.8), biogramy doradców, brzmienie hasła marki,
  strona główna w pakiecie WWW przed publikacją.
Render: 0 błędów JS, 0 martwych linków w obu pakietach. Status: do Final Control.

## Final Control: PASS Z UWAGAMI + poprawki po Final Control

Final Control: wszystkie ustalenia rund 2 należące do Operatora zamknięte; diff r2 → r3 zgodny z opisem; liczby zgodne
z budżetem; Teaser 2 strony A4; render 0 / 0 / 0. Ustalenia: FC-1 (opis 154,1 mln — to gałęzie z pracą fizyczną, 67%
z 230 mln, nie cała gospodarka), FC-2 (Q19 — 40% EBITDA dotyczy tylko R&D), FC-3 (źródła decków bez E5 — przebudowa
cofnęłaby zmianę), FC-4 (zapis kwot w USD), FC-5 (Q1 — 11,2% bez zastrzeżenia 34 krajów).
Poprawione skryptem `edits033fc.py` (13 zmian): FC-1, FC-2, FC-5; FC-4 — jeden zapis „$47,6 mld” jak w deckach
(deck A, deck R „$41,3 mld”, Teaser „$60 bln”); FC-3 — `base-v4/43-budzet.html` i `edits/common.json`; przebudowa decków
ze źródeł daje pliki identyczne bajt w bajt z `www-v4`. Pakiety przebudowane: render 0 błędów, Teaser 2 strony A4.
Zestawienie dla właściciela: `proces/robocze/AGF-DECK-033-bylo-jest.md`. Paczki: AGF-DECK-033-PAKIET-1-Inwestor.zip,
AGF-DECK-033-PAKIET-2-Strona-WWW.zip (zastępują paczki AGF-DECK-032). Status: do akceptacji właściciela.

## Decyzja 18 — strona główna w pakiecie WWW

Pytanie: obecny index.html ma starą treść (PLN, pakiety 1k / 5k / 20k, abonament 20%), decki do niego linkują.
Odpowiedź właściciela: **A — publikacja pakietu WWW dopiero z nową stroną dla klienta**, która zastąpi obecną stronę
główną. Teraz bez zmian w index.html.

## Decyzja 19 — brzmienie hasła marki

Odpowiedź właściciela: **B — „Automatyzujemy to, co powtarzalne, aby ludzie zajęli się tym, co niepowtarzalne.”**
Wprowadzone: manifest marki w 3 deckach (wynik i źródło `base-v4/07-manifest.html`), Teaser (nagłówek), brief nowej
strony dla klienta. Obecny index.html bez zmian (decyzja 18). Przebudowa decków ze źródeł = wynik bajt w bajt;
Teaser — 2 strony A4.

## Nowe polecenia właściciela (2026-10-14)

> „Jak skończysz wersję polską, to potem przygotuj to samo, ale w wersji angielskiej.”
> „Stronę www przygotuj, żeby była dwujęzyczna.”

Ustalenia: (1) wersje EN wszystkich dokumentów PL z obu pakietów (3 decki, FAQ, Suplement, Aneks, Teaser) — osobne
zadanie po zamknięciu decyzji PL, ten sam proces (Operator → Ewaluator → Final Control); (2) nowa strona dla klienta —
dwujęzyczna PL / EN z przełącznikiem języka.

## Decyzje 20–22

- **Decyzja 20 — doradcy (E11):** A — biogramy połączone, wszędzie (decki H / A / R, Teaser, później EN):
  Marcin Olszewski, Strategic Advisor — „24 lata jako CFO i CEO: 14 lat regionalny CFO i CEO ds. rynków wschodzących
  w Fujitsu, 3 lata CEO HP Inc. Polska.”; Maciej Drabek, Investment Advisor — „10+ lat w bankowości inwestycyjnej
  i private equity; transakcje M&A (m.in. w energetyce), nadzór nad spółkami portfelowymi.”
- **Decyzja 21 — grosze (E7):** A — kwoty w Suplemencie i Aneksie w pełnych złotych (zaokrąglenie połówkowe w górę;
  skrypt `grosze.py`: Suplement 45 kwot, Aneks 7). Wyjątki: mnożniki płac (3,034 itd.), stawki zł/h, parametr overheadu
  2,05%. Dodatkowo 4,69 → 4,7 etatu na proces; Aneks — KPI 4,47 → 4,5 mln zł. Sumy w tabelach i rundy zgodne
  (43 825 650 zł jak w deckach). Round B Agentify 1 937 042 zł = 1 937 041,50 po tym samym zaokrągleniu (E15 zamknięte).
- **Decyzja 22 — przykład 07.8 (deck A):** A — pełne złote: licencja 263 035 zł, prowizja 223 177 zł; suma 626 612 zł
  i 2 008 588 zł u klienta bez zmian.
Źródła decków zaktualizowane; przebudowa = wynik bajt w bajt. Pakiety przebudowane.

## Decyzje 23–24 — format liczb (zastępują zasadę „najwyżej 1 miejsce po przecinku” dla kwot)

Właściciel: „Tak naprawdę przy dużych kwotach trzeba je podać po prostu w milionach, ale do dwóch zer po przecinku.”
„Oczywiście, w milionach podajemy kwoty pieniężne, liczbę ludzi i tak dalej; wszystko jest w sztukach.”
- **Decyzja 23 (A):** każda kwota pieniężna ≥ 1 mln zł jako „X,XX mln zł” — w deckach, FAQ, Suplemencie, Aneksie,
  Teaserze, tabelach i na stronie dla klienta; kwoty dziś w mln z jednym miejscem (np. 87,1) przeliczone z budżetu na dwa
  miejsca (nie dopisanie zera); kwoty < 1 mln zł — pełne złote; stawki zł/h bez zmian.
- **Decyzja 24 (A):** ilości (ludzie, klienci, roboty, procesy, podpisy, etaty) — pełne sztuki bez skrótów „tys.”/„mln”,
  zaokrąglone do całości (19,5 → 20 robotów); wskaźniki na jednostkę zostają z przecinkiem (5,2 procesu na klienta,
  3,5 etatu na robota); dane rynkowe z zewnętrznych źródeł — jak w źródle (4 mln osób).
- **Decyzja 25 (doprecyzowanie właściciela):** „Ale wszystkie sztuki w liczbach bez przecinka, żeby nie było na przykład
  24,4.” — także średnie i wskaźniki ilościowe (24,4 etatu, 5,2 procesu, 3,5 etatu, 4,7 etatu na proces) jako liczby
  całkowite („ok. 24 etaty”, „ok. 5 procesów”); tam, gdzie zaokrąglenie psułoby rachunek, pokazujemy całkowitą wielkość,
  która go zachowuje (np. 43 920 h zamiast 24,4 × 1 800 h). Procenty, stawki zł/h i mnożniki płac — bez zmian.

## Decyzja 26 — pakiet inwestora bez haseł

Właściciel: „Wersje standalone, nie te na stronę, tylko te do otwierania dla inwestora, mają być w pełni otwarte, bez
żadnych haseł. Na stronie hasła zostają.”
Wprowadzone w `tools/build_investor_decks.py`: decki pakietu inwestora budowane bez ekranu hasła (`<body>` bez
`data-locked`, usunięty blok i skrypt bramki); FAQ, Suplement, Aneks i Teaser nie miały hasła. Sprawdzenie w czystej
sesji (`tools/open_check.py`): 7/7 plików pakietu inwestora otwiera się od razu, 0 błędów; 3 decki pakietu WWW nadal
z hasłem. Uwaga: hasło strony WWW jest zapisane w kodzie strony (skrypt przeglądarki), więc chroni tylko przed
przypadkowym wejściem — nie jest zabezpieczeniem poufności.

## Decyzja 27 — schemat problem → rozwiązanie → korzyść także w deckach, od strony klienta

Właściciel zapytał, czy decki i strona są według schematu problem, rozwiązanie, korzyść, i doprecyzował: „Oczywiście,
problem, rozwiązanie i korzyść mówimy od strony klienta.”
Stan: strona testowa i 4 nowe projekty — tak (osobno Agentify i Robotify). Decki H / A / R — „Problem” i „Rozwiązanie”
są pisane od strony klienta (MŚP), brak sekcji „Korzyść”. Do zrobienia (po formacie liczb, decyzje 23–25): w każdym
decku sekcja „Korzyść” zaraz po „Rozwiązaniu” — korzyści klienta z liczbami z modelu (Agentify: co zostaje u klienta,
0 zł z góry; Robotify: koszt godzin pracy ludzi vs opłata serwisowa, ryzyko po naszej stronie). Przy okazji: lead
„Rozwiązania” w decku R mówi o czterech odpowiedziach, a pokazuje trzy karty — do ujednolicenia.

## Decyzja 28 — nowy model biznesowy w opisie problem → rozwiązanie → korzyść (decki i strona)

Właściciel: „ten opis problemu, rozwiązania i korzyści jest sprzed zmiany modelu biznesowego. Trzeba uwzględnić nowy model
biznesowy, że klient płaci tylko za roboczogodzinę, zmienioną na robotogodzinę. (…) trzeba to uwzględnić w pitch decku
i na stronie.” oraz „Można też podać konkretny use case naszego budżetu, gdzie mamy konkretnego klienta, i wyliczyć, ile on
zaoszczędza rocznie oraz na dwa, trzy i cztery lata z nami.”
Model wg budżetu (HANDOFF 2026-10-11, rozdz. 1): Agentify — klient nie płaci za wdrożenie, płaci tylko stawkę za
robotogodzinę (godzinę pracy agenta zamiast godziny pracy człowieka, 60 zł/h); w latach 1–4 stawka zawiera spłatę
wdrożenia, od 5. roku spada. Robotify — robota kupuje klient, wdrożenie i serwis rozliczane stawką za robotogodzinę
(Polska 4,07 zł/h; 95% w roku wejścia kraju, potem −5% rocznie).
Stawka za robotogodzinę = roczna opłata klienta („12. Dwie kwoty i klient” w.82–83) ÷ godziny pracy przejęte od ludzi
(zaut. etaty × 1 800 h). Use case — klient realistyczny z budżetu (5 procesów, 18 900 h rocznie): koszt tych godzin
w pracy ludzi 1,13 mln zł/rok; stawka 19,60 zł/h w latach 1–4 (370 485 zł/rok), 16,03 zł/h od 5. roku (302 985 zł/rok);
oszczędność netto 763 515 zł/rok; narastająco: 2 lata 1,53 mln zł, 3 lata 2,29 mln zł, 4 lata 3,05 mln zł; 0 zł z góry.
Klient ważony: 14,27 → 12,67 zł/h; 2,01 mln zł/rok; 4 lata 8,03 mln zł. Robotify, 1 robot w Polsce od 2028 (bez ceny
zakupu robota): 7 000 h × 58 zł/h = 406 000 zł/rok pracy ludzi; opłata 27 066 / 25 712 / 24 427 / 23 205 zł;
narastająco 378 935 zł / 759 222 zł / 1,14 mln zł / 1,52 mln zł.
Rozbieżność do decyzji: HANDOFF podaje dla klienta realistycznego 18,15 → 14,96 zł/h (plik właściciela
„Agentify-Budzet-NOWY-MODEL.xlsx”, arkusz N1 — brak w repozytorium); obecny budżet daje 19,60 → 16,03 zł/h.
Zakres: decki H / A / R (Problem, Rozwiązanie, nowa sekcja Korzyść, model rozliczeniowy i przykład Agentify) i strona.
- **Decyzja 29 — stawka za robotogodzinę Agentify:** A — z obecnego budżetu: klient realistyczny 19,60 zł/h (lata 1–4)
  → 16,03 zł/h (od 5. roku); klient ważony 14,27 → 12,67 zł/h. Wartości z HANDOFF (18,15 → 14,96) nie są używane.

## Decyzja 30 — use case Robotify z kosztem zakupu robota (CAPEX klienta na 4 lata)

Właściciel: „Zysk dla klienta trzeba policzyć z kosztem robota rozbitego na CAPEX na cztery lata, ponieważ ponosi go klient,
i trzeba go porównać realnie z kosztem zakupu robota oraz naszym serwisem, o ile jest to taniej niż roboczogodzina
człowieka. Tych informacji nie potrzeba do budżetu, ale w pitch decku jest to use case, więc tutaj warto byłoby to pokazać.”
Wybór właściciela: **A — cobot 55 tys. EUR (środek przedziału 30–80 tys. EUR z tabeli konkurencji decku R — Universal
Robots u integratorów) + widełki.** Kurs 4,30 zł/EUR (budżet Robotify „07.” A6). Robot 236 500 zł ÷ 4 = 59 125 zł/rok;
serwis (Polska od 2028, 7 000 h) 27 066 / 25 712 / 24 427 / 23 205 zł; pełny koszt 86 191 / 84 837 / 83 552 / 82 330 zł
(12,31 / 12,12 / 11,94 / 11,76 zł/h) vs praca ludzi 406 000 zł/rok (58 zł/h); zostaje u klienta narastająco 319 810 zł /
640 972 zł / 963 421 zł / 1,29 mln zł; widełki: 30 tys. EUR → 1,39 mln zł, 80 tys. EUR → 1,18 mln zł (16,15 zł/h).
Przypis: pełne wykorzystanie 7 000 h/rok (20 h/dobę), bez energii i bez dotacji (dotacja obniża koszt zakupu).
Zakres: decki (sekcja Korzyść i przykład rozliczenia Robotify) i strona; nie dotyczy budżetu.

## Format liczb — wykonanie (decyzje 23–25)

Inwentaryzacja (`tools/num_inventory.py`): 895 kandydatów w 7 dokumentach. Operatorzy per dokument (listy zmian
`AGF-DECK-033/liczby/edits-{H,A,R,T,F,S,K}.json`, każda pozycja z uzasadnieniem: arytmetyka albo komórka budżetu) i kontroler
spójności (`SPOJNOSC.md`): te same wielkości identyczne we wszystkich dokumentach i zgodne z budżetem (np. Seed 5,12 / Round A
21,65 / Round B 17,06 / razem 43,83 mln zł; kapitał obrotowy 42,55 mln zł; plan awaryjny 69,31 mln zł; flota 20 / 338 / 4 323 /
18 228 / 319 051 robotów). Zastosowane: 499 zmian (decki 187, FAQ 40, Suplement 101, Aneks 29, Teaser 18) w obu wersjach.
Decki: nowy skrypt `AGF-DECK-032/build_all.py` = build_decks.py + listy zmian (przebudowa powtarzalna). Dane zewnętrzne o robotach
(Amazon, prognoza dla Polski) zostają jak w źródle (decyzja 24). Do akceptacji: „½” etatu (role wspólne, Aneks), ICP
„20,00–200,00 mln zł”. Niezależna ewaluacja formatu — razem z nowym modelem (perspektywa B).

## Decyzja 31 — w use case Robotify osobno zakup i serwis

Właściciel: „Jedynie rozbij kwoty za serwis i kwoty za zakup.”
Wszędzie, gdzie pokazujemy koszt robota po stronie klienta (tabela, koszt za godzinę, sumy za 4 lata), zakup i serwis
podajemy osobno, a dopiero potem razem: rocznie zakup 59 125 zł (8,45 zł/h) + serwis 27 066 / 25 712 / 24 427 / 23 205 zł
(3,87 / 3,67 / 3,49 / 3,32 zł/h); za 4 lata: zakup 236 500 zł + serwis 100 410 zł = 336 910 zł wobec 1,62 mln zł pracy ludzi
→ zostaje 1,29 mln zł. Widełki: zakup 129 000 zł (30 tys. EUR, 4,61 zł/h) – 344 000 zł (80 tys. EUR, 12,29 zł/h).
Uwaga do rachunku: w roku 4 składniki po zaokrągleniu dają 8,45 + 3,32 = 11,77 zł/h przy pełnym koszcie 11,76 zł/h.

## Decyzja 32 — zysk klienta narastająco w obu use case'ach

Właściciel: „Trzeba też obliczyć zysk narastająco. Dla klienta.”
W tabelach use case'ów (decki — sekcja Korzyść i przykłady; strona — przykłady i kalkulatory) dwa jawne wiersze:
„Zysk klienta w roku” i „Zysk klienta narastająco” (zysk = koszt tych godzin w pracy ludzi − wszystkie koszty klienta).
Agentify, klient realistyczny: w roku 763 515 zł (lata 1–4), 831 015 zł od 5. roku; narastająco 763 515 zł / 1,53 mln zł /
2,29 mln zł / 3,05 mln zł (5 lat: 3,89 mln zł). Robotify, cobot 55 tys. EUR: w roku 319 810 / 321 163 / 322 448 / 323 670 zł;
narastająco 319 810 zł / 640 972 zł / 963 421 zł / 1,29 mln zł.

## Dispatch „model robotogodziny” (wyzwalacz: decyzje 27–32) — rundy 1–3, Final Control, poprawki po FC

- **Operator:** decki H / A / R — Problem (od strony przedsiębiorcy), Rozwiązanie (0 zł za wdrożenie, płatność tylko za
  robotogodziny; Robotify — robot klienta, serwis w stawce), nowa sekcja **04 · Korzyść** w każdym decku (A: klient realistyczny
  19,60 → 16,03 zł/h, zysk 763 515 zł/rok, narastająco 1,53 / 2,29 / 3,05 mln zł; R: cobot 55 tys. EUR — zakup 59 125 zł/rok i serwis
  osobno, 12,31 zł/h vs 58 zł/h, zysk narastająco do 1,29 mln zł, widełki, przypis; H: oba obok siebie), model i przykład Agentify
  jako składniki jednej stawki; Teaser, FAQ, Suplement (obie wersje). Pisownia „robotogodzina”. Skrypty: `model/patch_src.py`,
  `model/patch_docs.py` (od kopii r5), `model/patch_fc.py`; budowa `AGF-DECK-032/build_all.py`.
- **Ewaluator A (treść, rachunki) i B (format liczb, regresje, render), rundy 1–3:** r1 PASS Z UWAGAMI (A: 6 istotnych — resztki
  starego modelu, karta Pay-per-robot-hour, FAQ Q4, Teaser), r2 i r3 — zamknięte do drobnych; r3: 0 istotnych, 9 drobnych.
- **Final Control:** PASS Z UWAGAMI — treść, liczby i budowa gotowe; wszystkie wartości use case'ów zgodne z budżetem
  i decyzjami 29–32; przebudowa ×2 bajt w bajt.
- **Poprawki po FC (`patch_fc.py`):** A3-01 (230 977 zł — suma 556 412 zł), A3-02 (Teaser: „= 86 191 zł, czyli 12,31 zł/h”), A3-03
  („stawka za robotogodzinę” zamiast „stawka serwisowa”), A3-04 („roboty klientów w serwisie Robotify”), A3-05 (lead R = tytuły
  problemów), A3-06 (przypis: rok 4 po przedłużeniu umowy serwisowej na 36 mies.), A3-07 (usunięte „bez gwarancji efektu”),
  A3-09 („u klienta realistycznego z budżetu”). Pakiety przebudowane: render 14/14 bez błędów, pakiet inwestora 7/7 bez hasła,
  Teaser 2 strony A4. Paczki: `wyniki/AGF-DECK-033-PAKIET-1-Inwestor.zip`, `…-PAKIET-2-Strona-WWW.zip`.
- **Do decyzji właściciela:** pilot 30 dni Robotify (czyj robot, kto płaci); karta „Pay-per-robot-hour”; jeden czas uruchomienia
  pakietu Agentify (2–4 tygodnie / 7–14 dni MVP2 / 30 dni). Konwencje przyjęte (do ewentualnej zmiany): ujemne w tabelach decków
  w nawiasach, przypisy o różnicach z zaokrągleń, „ponad 10 etatów” / „ponad 3 etaty”, „robotogodzina”.

## Decyzje 33–35

- **33 — pilotaż Robotify (A):** pilot 30 dni na robocie demonstracyjnym partnera (producent / dystrybutor); klient płaci w tym
  czasie tylko robotogodziny, robota kupuje po udanym pilotażu. Wprowadzone w R (Wyzwania, Rozwiązanie, Model, Korzyść).
- **34 — karta „Pay-per-robot-hour” (A):** usunięta; jedna oferta Robotify.
- **35 — czas uruchomienia pakietu Agentify (C):** wszędzie 4–6 tygodni (było 2–4 tygodnie / 7–14 dni MVP2 / 30 dni) — decki H i A,
  FAQ (obie wersje).
Skrypt `model/patch_dec33.py` (łańcuch: patch_src → patch_docs → patch_fc → patch_dec33 → build_all). Przebudowa powtarzalna,
14/14 plików bez błędów, pakiet inwestora bez hasła, paczki odświeżone. Te same decyzje dopisane do wymagań strony (§8).

## Decyzja 36 — use case'y w decku Automatify: osobno, jeden pod drugim, zaakcentowane (2026-10-14)

Właściciel: „Use case Automatify trzeba bardziej […] podkreślić i ładniej opracować, bo teraz są nadziobdziane i malutkie […].
Nie dawałbym tego po prostu w jedną sklejkę, Agentify i Robotify razem, tylko być może jedno pod drugim […]. Model biznesowy
i use case są najważniejsze w pitch decku, czyli czy to jest odpowiedź na rynek, jakie problemy rozwiązuje, jakie daje
rozwiązania i jakie korzyści.”
- **Wykonanie:** sekcja 04 decku H („Use case i model biznesowy”, `nowe/korzysc-H.section.html`, także `model/src/nowe/`) —
  dwa bloki jeden pod drugim (#uc-agentify, #uc-robotify): pas produktu → triada Problem klienta → Rozwiązanie i model →
  Korzyść klienta z dużymi liczbami (60 → 19,60 zł/h → 3,05 mln zł; 58 → 12,31 zł/h = 8,45 zakup + 3,87 serwis → 1,29 mln zł)
  → pasek „Model biznesowy” (klient płaci / przychód z klienta / marża dla inwestora — tylko liczby z decków A i R) →
  rachunek klienta (godzina człowieka vs robotogodzina, rachunek roczny, zysk narastająco), przypis „Skąd liczby”.
- **Proces:** 3 niezależne projekty → jury (inwestor VC / dyrektor kreatywny / wymagania właściciela; wygrał projekt 3 —
  85,7 pkt) → finalizacja z przeszczepami → recenzje (liczby, wygląd, technika) → poprawki → weryfikacja: GOTOWE (3 drobne,
  2 wdrożone: „zł/h” przy różnicy stawek, wyrównane łamanie nagłówków na telefonie).
- **Przebudowa:** łańcuch patch_src → patch_docs → patch_fc → patch_dec33 → build_all — zmieniły się wyłącznie
  `korzysc-H.section.html` i `Automatify Pitch.html`; decki A i R bez zmian. Pakiety i paczki PL odświeżone (inwestor bez hasła).

## Decyzja 37 — kompendium Automatify na 5 stron (2026-10-14)

Właściciel: „zrób mi spis treści na 5 stron, takie kompendium czym jest Automatify, najważniejsze rzeczy, taki mini pitch deck”.
- **Format (rozstrzygnięty przez orkiestratora):** 5 stron A4 pionowo w rodzinie Teasera; s. 1 ze spisem treści; plik samodzielny
  bez hasła „PL - Kompendium.html” + „PL - Kompendium.pdf” (dokładnie 5 stron) w pakiecie inwestora.
- **Treść:** 1) Automatify w skrócie, 2) odpowiedź na rynek (P→R→K od strony klienta, rynek, przewaga), 3) Agentify — model
  biznesowy i use case, 4) Robotify — model biznesowy i use case, 5) plan i finanse (projekcje, rundy, Seed, ryzyka, zespół,
  kontakt). 161 liczb — każda ze źródła (decki H/A/R, Teaser, FAQ, Suplement, Aneks, decyzje 19–35).
- **Proces:** scenariusz → kontrola liczb i narracji → projekt → recenzje (liczby / inwestor / wygląd i druk) → poprawki →
  weryfikacja: GOTOWE (4 drobne; poprawiona jednostka „zł/h” w przypisach).
- **Rozstrzygnięte bez pytania (do ewentualnej zmiany przez właściciela):** linia „Operacyjnie: CTO / Product Owner / Strategy
  Manager” z decku H; tabela projekcji bez wiersza „Procesy zautomatyzowane” (krój min. 9 pt); liczby rynkowe jak w Teaserze.
- Wersja EN — razem z pozostałymi materiałami EN.

## EN-033 — wersje angielskie (zapis zlecenia; wyzwalacz: „Jak skończysz wersję polską, to potem przygotuj to samo, ale w wersji angielskiej.”)

- **Zakres:** 3 decki, FAQ, Budget Supplement, Headcount Annex, Teaser, Compendium (HTML + PDF) — pakiet inwestora EN bez haseł
  (decyzja 26) i pakiet WWW z przełącznikiem PL | EN w każdym dokumencie (strona główna `index.html` tylko PL — decyzja 18).
- **Proces:** glosariusz (EN-033/GLOSARIUSZ.md) → tłumaczenie 9 porcji + porcja 10 (sekcja 04 decku H, decyzja 36) → budowa
  (`EN-033/build_en.sh`) → r1 recenzje (język decków / język dokumentów / parytet) → poprawki → r2 recenzje → poprawki r3 →
  **Final Control: PASS Z UWAGAMI** (EN-033/FINAL-CONTROL.md): parytet liczb 14/14, 0 polskich słów, 0 błędów JS, 8/8 bez hasła,
  Teaser 2 strony A4, Compendium 5 stron A4, przełączniki 12/12, budowa powtarzalna bajt w bajt.
- **Paczki:** `wyniki/AGF-DECK-033-PAKIET-1-Investor-EN.zip`, `wyniki/AGF-DECK-033-PAKIET-2-Strona-WWW-PL-EN.zip`.

## Łańcuch PL — pełny (stan po decyzjach 36–37 i poprawkach „PL przed EN”)

_Stan po decyzjach 38–46: łańcuch dłuższy o `patch_dec38.py → patch_dec38_docs.py`, strona główna pakietu WWW z `patch_dec38_index.py`
— zob. „Dispatch AKT-38-46”._

`model/patch_src.py → patch_docs.py → patch_fc.py → patch_dec33.py → patch_dec36.py → patch_dec37.py → AGF-DECK-032/build_all.py www-v4` →
pakiety: decki inwestora `tools/build_investor_decks.py`, dokumenty inwestora `tools/build_investor_docs.py` (FAQ, Suplement —
z poprawionymi mapami, Aneks, Teaser), Kompendium `KOMP/build.sh`. `patch_dec36.py`: mapy i nazwa Aneksu w Suplemencie inwestora,
kafle „w skrócie” w decku H (liczby w jednej linii), decyzja 35 w 4 pominiętych miejscach (4–6 tygodni).

## Decyzje 38–40 — roboty humanoidalne na pierwszym planie, Robotify przed Agentify (2026-10-15)

- **38 — humanoidy wyeksponowane, coboty przejściowe.** Właściciel: „w Automatifyu w tematach robotów powinny być wyeksponowane
  roboty humanoidalne. Kuboty są tylko przejściowe; gdy roboty humanoidalne będą zdolne do realnej pracy w fabrykach, przewidujemy,
  że nastąpi to za dwa lata. W tym czasie chcemy wynajmować kuboty. W okresie przejściowym, przez kolejne dwa, czyli cztery lata,
  kuboty będą współpracować z robotami humanoidalnymi, a później będą używane wyłącznie roboty humanoidalne. […] Obecnie brakuje
  informacji o robotach humanoidalnych, a jest to najważniejszy element przyciągający inwestorów.”
  Fazy: ok. 2026–2028 wynajem cobotów → ok. 2028–2030 coboty + humanoidy → od ok. 2030 wyłącznie humanoidy.
  **Uwaga:** „wynajmować coboty” zmienia model z decyzji 28/30/31 (robota kupuje klient, serwis w stawce) — wymaga decyzji właściciela
  co do budżetu Robotify (flota, finansowanie) przed zmianą liczb w materiałach.
- **39 — szeroka paleta zastosowań humanoidów.** Właściciel: „opisać bardzo szeroką paletę rozwiązań, możliwości przyszłości wdrażania
  robotów humanoidalnych […] w różnych gałęziach gospodarki: turystyce, magazynowaniu, fabrykach, na lotniskach – praktycznie wszystko.
  Każda praca fizyczna docelowo może być zastąpiona. Skala i potencjał są gigantyczne i to musi się najpierw [przebijać].”
- **40 — kolejność: najpierw Robotify, potem Agentify** — „w każdym dokumencie najpierw trzeba pokazywać robotify, a później agentify”.
- **Wykonanie:** najpierw research (roboty humanoidalne: producenci, wdrożenia i gotowość, modele wynajmu, bezpieczeństwo i regulacje UE,
  metodyka wdrażania, Polska/CEE, inwestorzy, zastosowania w sektorach) → raport dla właściciela → propozycja zmian w materiałach.
- **41 — Robotify jako integrator niezależny od producenta; europejski nadzór i dane (2026-10-15).** Właściciel: „mówimy też o użyciu
  docelowo amerykańskich i chińskich rozwiązań, jeżeli chodzi o roboty humanoidalne. To nie muszą być europejskie. My jesteśmy
  integratorem i dostawcą. […] korzystać ze wszystkich dostępnych rozwiązań na rynku, z zastrzeżeniem, że oprogramowanie i nadzór
  muszą być europejskie. Ze względów bezpieczeństwa dane powinny być składowane w Europie, a nie lecieć do Chin.”
  Do researchu dołożony wątek: bezpieczeństwo i przepływ danych robotów z USA i Chin, otwartość oprogramowania (praca lokalna,
  własny nadzór), europejska warstwa oprogramowania i chmury, RODO / Data Act / NIS2 / Cyber Resilience Act.
- **42 — akcent nie zmienia planu (2026-10-15).** Właściciel: „musimy eksponować najbardziej Robotify i roboty humanoidalne, bo to przyciągnie
  inwestorów, ale […] to, że akcenty są na roboty humanoidalne, nie oznacza, że nie pracujemy zgodnie z wytycznymi i budżetem, czyli
  najpierw Agentify, a potem Robotify.” → kolejność prezentacji: Robotify i humanoidy pierwsze (decyzja 40); plan, harmonogram i liczby —
  bez zmian, z budżetu (Agentify od 2027, Robotify od 2028).
- **43 — rok 2027 we wszystkich wynikach.** „Brakuje mi […] roku 27 w wynikach. Z reguły wszystko zaczyna się od 28. Trzeba pokazać straty,
  które będą w 27, że to jest start.” Źródło: budżet połączony („1. Hub”, rok 2027: przychód 746 712 zł, EBITDA przed programem motywacyjnym
  −4,90 mln zł, w tym Agentify −4,75 mln zł i Robotify −150 000 zł; zysk netto −5,47 mln zł; 15 etatów).
- **44 — potrzeby kapitałowe rok po roku, osobno dla spółek.** „pokazać przy miejscu dla inwestorów, ile zarówno Agentify, jak i Robotify
  potrzebuje środków na rozwój biznesu w każdym roku, a ile na środki obrotowe.” Źródło: budżety produktowe (Agentify „8. Finansowanie”,
  Robotify P&L / finansowanie).
- **Wykonanie decyzji 38–44 we wszystkich dokumentach (PL, potem EN):** po raporcie z researchu o humanoidach.
- **45 — wynajem cobotów przez partnera leasingowego (B, rekomendacja; 2026-10-15).** Klient „wynajmuje” robota bez wkładu własnego przez
  partnera leasingowego (rata miesięczna), a Robotify pobiera od klienta robotogodziny za dobór, wdrożenie i serwis (zapis poprawiony
  2026-10-16 — brzmienie przyjętej opcji B: „a nam płaci robotogodziny”; wcześniej omyłkowo „Robotify płaci”). Budżet Robotify bez zmian
  (robot nie jest na bilansie Robotify); liczby use case'u zostają (rata ≈ cena ÷ 4 lata, z dopiskiem, że nie obejmuje kosztu finansowania).
- **46 — „humanoid-first” z bramkami (A, rekomendacja; 2026-10-15).** Jako strategia Robotify, nie prognoza rynku: od ok. 2030 nowe wdrożenia
  opieramy na humanoidach, gdy spełnią kryteria (koszt godziny poniżej pracy człowieka, niezawodność, certyfikat); coboty tylko tam, gdzie są
  wyraźnie tańsze. Faza mieszana cobot + humanoid od ok. 2028. Teza „po 2030 wyłącznie humanoidy” nie pada.
- Raport z researchu: `reports/Roboty humanoidalne w Robotify.md` (+ PDF), notatki `research_notes/Roboty humanoidalne w Robotify/`.

## Porządki po Final Control EN-033 (2026-10-15) — `patch_dec37.py`: PASS Z UWAGAMI

FAQ PL: „w 2027 koszty stałe to 94,8% kosztów hubu”, „Wartość wdrożenia wynosi 60 000 zł na proces”; trakcja H/A/R: „zamknięty umową cykliczną”;
karta budżetu 900–1100 px; kolejność kafli „w skrócie” jak w H_AG/H_RO; aria-label Kompendium; tytuły powłoki plików inwestora; index.html
„4–6 tygodni”; strażnik blokady w `build_en.sh`. EN: `EN-033/build/segment_rekey.py` (jednorazowo przed `build_en.sh`). Paczki PL i EN odświeżone.

## Decyzja 47 — strona dla klienta: tylko wersja C, Manrope, czytelniej, strona główna + podstrony (2026-10-15)

Właściciel: „zostajemy już tylko przy nowej wersji C […] tekst tam jest za mały i wszystko jest zbyt nadziubdziane. Użyć czcionki […] i sprawić,
żeby wygląd wszystkich elementów był wyraźniejszy […]. Zawsze trzeba wyeksponować najważniejsze rzeczy, a te mniej istotne mogą być na podstronie.
Czyli minimalnie to, co jest wymagane, skondensowana wiedza i dobrze widoczna, a resztę zobacz więcej i przekierowanie do podstrony. To nie może być
one-pager.” Czcionka: **Manrope** (A, krój marki Automatify). Kierunek B porzucony. Obowiązują też decyzje 38–46 (Robotify i humanoidy pierwsze,
wynajem przez leasing, humanoid-first, europejski nadzór i dane). Na razie PL.

## Decyzja 48 — strona C v4: sprawy otwarte (2026-10-15)

Właściciel: „1 tak, możesz dodać; 2 ok; 3 pomyśl sam; 4 tak, ale jako kierunek i sposób docelowego działania; 5 usunąć”.
1. **Zakup robota jako wariant obok wynajmu** (np. z dotacją UE / BGK) — dodać na stronie (Robotify, FAQ, kalkulator: ta sama kwota = rata albo cena ÷ 4 lata).
2. „4 mln mniej osób w wieku produkcyjnym do 2040” — zostaje (z przypisem; na liście do potwierdzenia w GUS).
3. **Rozliczenie humanoidów (propozycja orkiestratora, zgodna z budżetem i decyzją 45):** jak cobot — rata za robota przez partnera leasingowego
   (albo zakup) + robotogodziny za dobór, wdrożenie, nadzór i serwis; start od pilotażu, w którym klient płaci tylko robotogodziny; stawka po analizie
   zadania, przed pilotażem.
4. Architektura europejskiego nadzoru i danych — opisywana jako kierunek i docelowy sposób działania (nie jako stan obecny).
5. Wideo key visualu (Agentify po lewej) — usunięte ze strony.

## Dispatch AKT-38-46 — wykonanie decyzji 38–46 w materiałach PL (2026-10-15; runda 3 i FC-1 — 2026-10-16): GOTOWE

- **Zakres:** decki H, R, A, FAQ, Suplement, Aneks, Teaser (2 strony), Kompendium (5 stron) — Robotify i humanoidy pierwsze (skala, paleta zastosowań,
  fazy humanoid-first z bramkami, dostęp do producentów USA/Chiny/Europa, europejski nadzór i dane, wynajem cobotów przez leasing), plan i budżet bez
  zmian, rok 2027 w wynikach, rozwój vs środki obrotowe per spółka per rok; usunięte twierdzenia bez źródła wskazane w raporcie.
- **Łańcuch:** … → patch_dec37.py → **patch_dec38.py → patch_dec38_docs.py** → build_all (`AKT-38-46/tools/chain_pl.sh`); pakiety:
  `AKT-38-46/tools/pakiety_pl.sh` — decki i dokumenty inwestora, Kompendium, strona główna pakietu WWW (`model/patch_dec38_index.py`, ze źródła
  `model/src/index38/`), paczki i kontrole (od FC-1 kod wyjścia ≠ 0, gdy kontrola nie przejdzie). Zapisy zmian w źródłach: `r2_src.py`,
  `r3_src.py`, `fc1_src.py`.
- **Proces:** plan i dane z budżetu → kontrola (budżet, narracja VC) → wdrożenie (decki, dokumenty, Kompendium) → recenzje r1 (liczby: 3 istotne;
  narracja: 5 istotnych; technika) → poprawki → weryfikacja **GOTOWE** (V-01 „Moat” w nadtytułach i FAQ, V-02 data ceny NEURA, V-03 ramka kwoty
  w druku Teasera, V-04 „82,8%” przy 390 px w pakiecie WWW) → **runda 3:** V-01…V-04 domknięte, strona główna pakietu WWW przebudowana
  → Final Control FC-d38 (PL i EN) **PASS Z UWAGAMI** → **FC-1** (2026-10-16): „Dlaczego teraz”, Fala 03 w H, R, A — „Te cztery siły”
  (było „trzy” przy czterech wymienionych), „35 mln EUR”, „w Polsce i Europie Środkowej” (było „PL/CE”). Łańcuch od zera: 143/143 plików
  identycznych bajt w bajt.
- **Liczby zewnętrzne o humanoidach:** lista do potwierdzenia u źródła przed wysyłką (`AKT-38-46/DO-POTWIERDZENIA.md`, przekazana właścicielowi).
- **Strona główna pakietu WWW (`index.html`, runda 3):** przebudowana wg decyzji 38–46 (Robotify pierwsze, hasło marki, 135 liczb — każda
  w deckach lub dokumentach, 0 fraz wycofanych, 0 błędów JS, 390 px bez przewijania w poziomie); paczka WWW bez dopisku „NIE-PUBLIKOWAC”
  (dopisek tylko, gdy kontrola strony nie przejdzie). **Do decyzji właściciela (FC-2):** zapis decyzji 18 mówił „Teraz bez zmian w index.html”;
  narracji strony nie recenzował nikt niezależny. Nic nie opublikowano.
- **Strona C v4 (decyzja 47–48):** 8 stron, Manrope, zakup obok wynajmu, rozliczenie humanoidów jak cobota, architektura danych jako kierunek, bez wideo.


## Decyzja 49 — strona główna pakietu WWW: nowa treść zostaje, bez publikacji (2026-10-16)

Pytanie (FC-d38, sprawa 1): `index.html` przebudowany wg decyzji 38–46, wbrew zapisowi decyzji 18 („Teraz bez zmian w index.html”); treści
nikt niezależnie nie zrecenzował. Właściciel: **„A: nowa + nie publikować (Rekomendacja)”** — nowa strona zostaje, paczki WWW (PL i PL-EN)
z dopiskiem „-NIE-PUBLIKOWAC” i plikiem README do czasu (1) recenzji treści strony głównej i (2) nowej strony dla klienta (C v4). Zdjęcie
oznaczenia wyłącznie decyzją właściciela (`PUBLIKACJA_WWW=1` w `pakiety_pl.sh`). Wykonanie: oznaczenie w `pakiety_pl.sh` i `pakiety_en.sh`;
recenzja treści `index.html` (narracja, liczby, decyzje, język, wygląd — z niezależną weryfikacją uwag).

## Decyzja 50 — wdrożenia referencyjne: zespół założycielski w Naster S.A. (2026-10-16)

Pytanie (FC-d38, sprawa 2): kto zrealizował 4 wdrożenia referencyjne z trakcji (2 robotów fizycznych, 2 agentów AI / RPA; 700 000+ zł
oszczędności klientów). Właściciel: **„A: zespół w Naster S.A.”** — w deckach H, R, A i w FAQ dopisek „zrealizowane przez zespół założycielski
w Naster S.A.”; reszta zapisu (przed startem spółek, poza liczbami budżetu, umowy cykliczne) bez zmian. Otwarte: podstawa kwot trakcji
(np. „5 cobotów → 10 operatorów → 350 000 zł” — netto po kosztach robotów?).

## Decyzja 51 — pakiet WWW: stroną główną zostaje strona C v4 (2026-10-16)

Po recenzji treści `index.html` (5 soczewek z weryfikacją; 11 uwag blokujących, m.in. czas teraźniejszy przy ofercie od 2028 r., niewypełniona
klauzula RODO, strona ok. 26 ekranów, treści dla klienta i inwestora razem). Właściciel: **„A: zastąpić stroną C v4 (Rekomendacja)”** — pakiet
WWW = strona C v4 (8 stron dla klienta) + decki i dokumenty dla inwestorów (hasło, decyzja 26); w menu C v4 link „Dla inwestorów” do krótkiej
podstrony (wynik 2027, potrzeby kapitałowe rok po roku z zastrzeżeniami decku H 17, linki do decków). Dotychczasowy `index.html` — archiwum
(`model/src/index38/`, `patch_dec38_index.py`). Uwagi recenzji do treści z decku H wchodzą do decków.
## EN-038 — wersje EN po decyzjach 38–46 (2026-10-16): PASS Z UWAGAMI → FC-1 poprawione

- **Wyzwalacz:** „Daj mi też wersje angielskie, jak będą gotowe.” oraz decyzja 42–44 („zaktualizuj wszystkie dokumenty”, PL, potem EN).
  Start po weryfikacji PL (AKT-38-46 VERIFY-r1: GOTOWE).
- **Proces:** delta PL → EN (3256 segmentów, w tym 1167 nowych, porcje 12–22; zmiany brzmienia PL bez nowego tłumaczenia — `rekey-r4.json`)
  → budowa (`EN-033/build_en.sh`) → recenzje: język (REV-jezyk-d38) i parytet (REV-parytet-d38) → poprawki rundy 5 → **Final Control
  FC-d38: PASS Z UWAGAMI** (PL i EN: Robotify przed Agentify 16/16, liczby z budżetu zgodne, parytet 14/14, 0 polskich słów w EN, 0 błędów
  JS, pakiety inwestora bez hasła 9/9, Teaser 2 strony A4, Kompendium / Compendium 5 stron A4, przełączniki 24/24, budowa odtwarzalna).
- **FC-1 (2026-10-16):** „These four forces” / „Te cztery siły”, „Poland and Central Europe” / „w Polsce i Europie Środkowej”, „35 mln EUR”
  — PL i EN przebudowane, kontrole OK. **FC-3:** ten zapis. **FC-4:** `pakiety_pl.sh` zwraca kod ≠ 0 przy nieudanej kontroli.
- **Otwarte (drobne):** FC-5 (słownik EN w `automatify-docs.js` pakietu PL — budowa EN łata osobno), P-04 / P-05 (pasek nawigacji decku H
  przy 900–930 px, Suplement przy 900 px przewija się w poziomie o ok. 95 px), ścieżka scratchpadu na stałe w skryptach PL.
- **Paczki:** `wyniki/AGF-DECK-033-PAKIET-1-Inwestor.zip`, `…-PAKIET-1-Investor-EN.zip`, `…-PAKIET-2-Strona-WWW.zip`,
  `…-PAKIET-2-Strona-WWW-PL-EN.zip`. Nic nie opublikowano.

## Fakty i budżet — jedna lista pytań A/B/C (2026-10-16)

Polecenie właściciela: pytania zbierać naraz, w formacie A/B/C z rekomendacją; **budżet jest źródłem prawdy**. Przed pytaniami: potwierdzenie
liczb u źródła (decki, dokumenty, Kompendium, strona C v4) i odpowiedzi z budżetu — rozstrzygnięte bez pytania: liczby z budżetu zostają
(m.in. 2 684,19 mln zł opisane jako stan na 31.12.2030, nie szczyt; 104,0 mln pracowników fizycznych = szacunek modelu, nie Eurostat;
„ponad 3 etaty” → „3,5 etatu”; „klient realistyczny” → przykład z 5 procesami); 58 faktów z poprawką u źródła (np. AI Act po „Digital
Omnibus”, WEF 39%, Clio zamiast Thomson Reuters, rynek Agentify ok. 66 mld USD z trzech prognoz Grand View Research); kursy NBP z 13.10.2026.
Pytań: 10 (plik dla właściciela: `PYTANIA-ABC-2026-10-16.md`).

## Decyzje 52–61 — odpowiedzi na pytania A/B/C (2026-10-16)

Właściciel: **„1a, 2a, 3a, 4a, 5a, 6a […], 7b, 8b, 9b, 10”**.

- **52 (1A) — odsetki w rundach:** Round B **18,22 mln zł** (było 17,06), w tym **1,16 mln zł** odsetek od kredytu obrotowego Agentify do
  IV 2029 („odsetki płaci fundusz” — budżet); rundy razem **44,98 mln zł** (szczyt IV 2029); rozwój biznesu (a) **43,83 mln zł** (szczyt
  III 2029) zostaje jako potrzeba rozwojowa. Agentify w rundach 23,40 mln zł (22,25 rozwoju + 1,16 odsetek), Robotify 21,58 mln zł.
  Budżet: połączony „4. Dwie kwoty” K120 / M116 / B25, Agentify E120 / D116.
- **53 (2A) — robot zamienny w 24 h:** z puli serwisowej dystrybutora lub producenta, jako warunek umów z dostawcami — bez zmian.
- **54 (3A) — kamienie Robotify:** 2027 opisowo (producenci, leasing, procedura CE); 2028: 5 klientów, 20 robotów, 136 500 robotogodzin,
  527 777 zł przychodu, 24 etaty; 2029: 65 klientów, 338 robotów, 12,77 mln zł, 72 etaty (budżet Robotify).
- **55 (4A) — program partnerski Agentify:** bez daty — „rola Partnerships / BD od 2028; sprzedaż bezpośrednia i krzyżowa klientom
  Agentify”; usunięte „Round B (MVP3)” przy kanale partnerskim (w budżecie nie ma kanału ani prowizji).
- **56 (5A) — kwoty trakcji:** „netto, po kosztach robotów i usługi”.
- **57 (6A) — „100 000–500 000 zł z góry” zastąpione kontrastem z budżetu:** 60 000 zł na proces; 1 / 5 / 10 procesów → 60 000 / 300 000 /
  600 000 zł z góry w modelu klasycznym; w Agentify 0 zł z góry, spłata w stawce przez 4 lata. **Miks klientów 2-6-2** (na 10 klientów:
  2 z 1 procesem, 6 z 5, 2 z 10; klient ważony 5,2 procesu) — sprawdzony w budżecie (Agentify „1. Panel” B45 = 5,2; liczba klientów =
  procesy aktywne ÷ 5,2) i opisany w materiałach; „klient realistyczny” = przykład z 5 procesami, typ środkowy miksu.
- **58 (7B) — manifest:** mocniej, zgodnie z tezą zastępowania pracy — „zastępuje” zostaje, akapit manifestu: „Wierzymy, że każdą
  powtarzalną pracę docelowo może zastąpić maszyna. Robot i agent AI przejmują zmiany, na które brakuje ludzi, a ludzie zajmują się tym,
  czego maszyna nie zrobi.”; Teaser („replace workers with…”) bez zmian.
- **59 (8B) — hasło EN:** „We automate the repeatable, so people can focus on the unrepeatable.” (zastępuje „We automate what's
  repeatable — so people can do what's unrepeatable.”; decki, Teaser, Compendium).
- **60 (9B) — nazwy plików:** bez numerów.
- **61 (10) — fakty bez potwierdzenia:** „Poszukać najbardziej obiektywnych danych, a jeżeli nie znajdziesz, zostaw te, które są
  w Dokumentach.” — zamienniki ze źródłem tam, gdzie są (np. GUS 22,2 → 13,3–16,6 mln osób w wieku produkcyjnym w 2060 r.; ManpowerGroup
  57% / 61%; PIE: najwyżej 4% MŚP z robotami; ponad 20 000 humanoidów w 2025 r., ok. 10% w realnych zastosowaniach — Interact Analysis;
  Walker S2 30–50% wydajności człowieka — UBTech dla Financial Times); bez zamiennika tekst zostaje (status w `AKT-38-46/DO-POTWIERDZENIA.md`).
- Przy okazji: dopisek decyzji 50 („zrealizowane przez zespół założycielski w Naster S.A.”) we wszystkich miejscach trakcji; etykiety
  budżetu (104,0 mln = szacunek modelu; 3,5 etatu; 2 684,19 mln zł = stan na 31.12.2030).

## Runda 4 PL (AKT-38-46) i runda 6 EN — wykonanie decyzji 52–61 (2026-10-16): GOTOWE

- **PL:** źródła — `AKT-38-46/tools/r4_src.py`, po budowie decków `AGF-DECK-033/model/patch_dec52.py --decks`; łańcuch
  `AKT-38-46/tools/chain_pl.sh` (… → patch_dec38_docs → patch_dec52 → build_all → patch_dec52 --decks) i `tools/pakiety_pl.sh`:
  KONTROLE OK (frazy wycofane rundy 4: 0 w 18 plikach, strona C v4 RUN: ALL OK, decki 390/768/1280 px bez usterek, PAKIET-1 bez hasła 9/9,
  PAKIET-2 z hasłem 3/3, linki 282 + 607 bez błędów, Teaser 2 strony, Kompendium 5 stron).
- **FIT Teasera:** nowa kontrola (pomiar stron `teaser_pages.py`) wykazała, że strona 1 Teasera PL wychodziła o 28,5 px poza A4 (ucięta karta
  „Aktywna runda”; dotychczasowa kontrola liczyła tylko strony PDF). Krótsze brzmienia (kwota rund w jednym wierszu, karta „Brak rąk do
  pracy”, źródła Skali bez nazwy raportu) i nieco mniejsze odstępy; pomiar jest teraz częścią `pakiety_pl.sh` (przepełnienie = FAIL).
- **EN:** 276 + 3 nowe segmenty (porcje 23–29), hasło 8B w poprawkach pamięci, glosariusz §14; Compendium EN skrócone pod 5 stron A4 bez
  utraty faktów; niezależna recenzja tłumaczeń rundy 6 (5 recenzentów + weryfikacja): 34 uwagi, 22 potwierdzone i wprowadzone, 12 odrzuconych.
  `build_en.sh` i `pakiety_en.sh`: 0 problemów (check_en, terms_en, linki, polszczyzna w EN, parytet, 0 błędów JS).
- **Fakty:** 58 korekt wdrożonych; z 28 niepotwierdzonych 24 zastąpione albo usunięte, 4 bez zmian (decyzja 61; do potwierdzenia:
  KSC / NIS2 od 3.04.2026, lista dostawców wysokiego ryzyka, lista FCC, lista platform AMR / cobotów).
- **Paczki:** `wyniki/AGF-DECK-033-PAKIET-1-Inwestor.zip`, `…-PAKIET-1-Investor-EN.zip`, `…-PAKIET-2-Strona-WWW-NIE-PUBLIKOWAC.zip`,
  `…-PAKIET-2-Strona-WWW-PL-EN-NIE-PUBLIKOWAC.zip`; dla właściciela jeden plik `Automatify-materialy-2026-10-16-runda-4.zip` z raportem
  rundy. Nic nie opublikowano (decyzja 49).

## Decyzje 62–63 — po raporcie rundy 4 (2026-10-16)

Właściciel: **„1 zostaw, 2 zdejmij”**.

- **62:** 4 pozycje niepotwierdzone u źródła zostają w materiałach do kolejnego przeglądu (KSC / NIS2 od 3.04.2026, lista dostawców
  wysokiego ryzyka — stan VIII 2026, lista FCC — VII 2026, lista platform Stretch, MiR / AutoStore, UR / Doosan, Locus).
- **63:** zdjęte oznaczenie „NIE-PUBLIKOWAC” z paczek WWW (PL i PL-EN; decyzja 49 przestaje obowiązywać): `pakiety_pl.sh` domyślnie
  `PUBLIKACJA_WWW=1`, paczki `wyniki/AGF-DECK-033-PAKIET-2-Strona-WWW.zip` i `…-PAKIET-2-Strona-WWW-PL-EN.zip` bez README-NIE-PUBLIKOWAC.
  Stopka strony C v4 (9 stron) zgodna z publikacją: „Wyliczenia orientacyjne na parametrach modelu Automatify; źródła danych rynkowych
  podajemy przy wskaźnikach.” (było: „Wersja testowa … źródła … zostaną dołączone przed publikacją”; źródła są przy kaflach) —
  `AKT-38-46/tools/r4_src.py` D63. Publikacji na serwerze nie wykonano (brak dostępu do hostingu) — paczki są gotowe do wgrania.

## Decyzja 64 — strona C v4 po angielsku (2026-10-18)

Właściciel: **„b”** — cała strona C v4 (9 stron) po angielsku, z przełącznikiem PL | EN.

- **Zakres:** tylko paczka PL-EN (`…-PAKIET-2-Strona-WWW-PL-EN.zip`, folder `en/`); zastępuje decyzję 18 dla tej paczki. Paczka WWW PL
  (`…-PAKIET-2-Strona-WWW.zip`) bez zmian: tylko PL, bez przełącznika.
- **Wykonanie:** `EN-033/build/build_c4_en.py` (segmenty z generatora PL, pamięć `EN-033/c4/`: 819 segmentów, 20 poprawek recenzji),
  kalkulatory `STRONA-KLIENT-v2/kandydat-C-v4/gen/theme/site.en.js` (te same obliczenia, formaty EN), przełącznik w nagłówku stron PL i EN,
  „← Homepage” decków EN w paczce WWW → `en/index.html`. Niezależna recenzja (4 recenzentów + 4 weryfikatorów): 26 uwag, 16 potwierdzonych
  i wprowadzonych. Kontrole: strony, linki, czytelność, nagłówek, kalkulatory EN = PL, 0 polskich słów — ALL OK (`EN-033/BUDOWA.md`, runda 7).
- **NAV-1 (rozstrzygnięte samodzielnie, układ):** przy 1200–1365 px logo w nagłówku strony C v4 było ściśnięte albo niewidoczne — pełne menu
  od 1366 px, niżej przycisk „Menu”; obie paczki WWW. Kontrola `kandydat-C-v4/tools/nav_fit.py` (15 szerokości).

## Decyzja 62 — przegląd 4 pozycji (2026-10-18)

- **F-108** KSC / NIS2 od 3.04.2026 — potwierdzone (Dz.U. 2026 poz. 252); **F-109** lista dostawców wysokiego ryzyka — potwierdzone (komunikat
  MC z 6.08.2026: listy nie ma); **F-112** lista FCC — potwierdzone (Public Notice DA 26-786 z 28.07.2026). Teksty bez zmian.
- **F-157** — poprawione: AutoStore to system magazynowy, nie AMR. Deck R: „Boston Dynamics Stretch, MiR / Locus AMR, AutoStore, UR / Doosan
  cobots”; decki H i A: „Coboty (Universal Robots), AMR (MiR) i magazyny AutoStore od 2028” (PL i EN).
- **Paczki:** `wyniki/AGF-DECK-033-PAKIET-1-Inwestor.zip`, `…-PAKIET-2-Strona-WWW.zip`, `…-PAKIET-1-Investor-EN.zip`,
  `…-PAKIET-2-Strona-WWW-PL-EN.zip`; dla właściciela `Automatify-komplet-2026-10-18.zip`. Publikacji nie wykonano (brak dostępu do hostingu).
