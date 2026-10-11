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
