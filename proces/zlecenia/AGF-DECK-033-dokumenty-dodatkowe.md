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
