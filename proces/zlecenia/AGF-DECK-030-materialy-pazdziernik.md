# AGF-DECK-030 — aktualizacja materiałów do budżetów z 2026-10-11

Zlecenie utworzone 2026-10-11 przed startem prac. Rundy i ewaluacje dopisuje się poniżej, nie nadpisuje.

## Cel

Zaktualizować liczby w materiałach dla inwestora do budżetów obowiązujących od 2026-10-11
(decyzja właściciela 12, ECHO-089). Polecenie właściciela z 2026-10-11: „Trzeba się skupić głównie
na aktualizacji danych, które zmieniły się w każdym budżecie, i to musimy zaktualizować."

## Źródła liczb (jedyne dopuszczalne)

| Budżet | Plik | md5 |
|---|---|---|
| Agentify | `Agentify-Budzet-2026-10-11.xlsx` | `ed8fc7ece4e3a659ecc0164fd69de208` |
| Robotify | `Robotify-Budzet-2026-10-11.xlsx` | `0ea8e14d938be926fb308535a9dcbd4c` |
| Połączony | `Automatify-Budzet-Polaczony-2026-10-11.xlsx` | `f86b272dfd38c5a1208f3ad3e85f31af` |

Opis decyzji i liczb obowiązujących: `HANDOFF-Automatify-2026-10-11.md` (rozdz. 6, 8, 10).

## Allowlista — co wolno zmienić

1. Liczby, które zmieniły się w budżetach z 2026-10-11, oraz kwoty od nich wyliczone (marże, udziały, sumy).
2. Zdania, których treść wynika wprost z tych liczb albo z decyzji 1–13 (rozdz. 6 handoffu), w tym punkty z rozdz. 10.
3. Nic poza tym: układ, style, skrypty, grafiki, nazwy plików i treści marketingowe bez liczb budżetowych zostają.

## Zakres plików

| Dokument | Repo (baza) | Strona WWW | Inwestor (samodzielny) |
|---|---|---|---|
| Pitch PL / EN | `Automatify Pitch*.html` | tak | `PL/EN - Pitch Deck.html` |
| Teaser PL / EN | `Automatify Investment Teaser*.html` | brak na stronie | `PL/EN - Teaser.html` |
| Suplement PL / EN | `Suplement budzetowy*.html` | tak | `PL - Suplement budzetowy.html`, `EN - Budget Supplement.html` |
| FAQ PL / EN | `Automatify FAQ*.html` | tak | `PL/EN - FAQ.html` |
| Aneks kadrowy PL / EN | `Automatify Aneks Kadrowy*.html` | tak | `PL - Aneks kadrowy.html`, `EN - HR Annex.html` |
| Strona główna PL / EN | — | `index*.html` | — |

## Zasady materiału dla inwestora

Bez adresów komórek, kodów ECHO, mechaniki modelu i języka audytu. PL w złotych; EN: cennik
stanowisk w euro, reszta kwot w złotych. Najwyżej jedno miejsce po przecinku; etaty całkowite.
Zakazany szczyt kapitału obrotowego z końca okna prognozy; wymagany szczyt potrzeby kapitału z miesiącem.

## Proces

Operator (lista zmian „było → jest" ze źródłem każdej liczby) → Ewaluator (niezależne przeliczenie
z budżetów, własne skrypty, kontrola liczb pozostawionych) → Final Control → włączenie. Najwyżej 3 rundy.
Granice nienaruszalne 1–6 obowiązują. Nic nie wychodzi na zewnątrz bez polecenia właściciela.

## Rundy

(dopisywane)

### Runda 1–3 (2026-10-11) — wynik

| Grupa | Zmian | Rundy | Werdykt Ewaluatora |
|---|---:|---|---|
| PITCH (PL/EN) | 86 | 1 | PASS |
| SUPLEMENT (PL/EN) | 196 | 2 (334,4 → 334,3; legenda wykresu) | PASS |
| FAQ (PL/EN) | 62 | 2 (etykieta EBITDA Q18, baza 13,8%) | PASS |
| RESZTA — aneks, teaser inwestorski, index (PL/EN) | 76 | 3 (etykieta EBITDA, cennik D1, etaty Agentify 2028 = 41 jak budżet v6 i suplement) | PASS |

Final Control (orkiestrator): 420 zmian naniesionych bez błędów na repo, stronę i pliki inwestorskie (tryb DOM);
tekst trzech wersji identyczny poza znanymi różnicami (key visual strony, ramka rundy teasera); 10 plików inwestorskich
otwiera się offline bez błędów; stare liczby pozostały wyłącznie w FAQ Q13 (DO DECYZJI). Tabela „było → jest",
instrukcja dla designera i lista spraw do decyzji: `proces/robocze/`.

Status: **gotowe do akceptacji właściciela, NIE do wysyłki** — blokują: ramka „Aktywna runda" w teaserze, FAQ Q13.
DEPLOY/PUSH materiałów: NIE WYKONANO.
