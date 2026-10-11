# Strona dla klienta — wersja testowa: plan realizacji, rozkład treści, realizacja

Polecenie właściciela: „Informacje dla klienta muszą być totalnie inne niż dla inwestora. Dla klienta musimy rozwiązywać
jego problemy (…) jaki klient ma problem, jakie dajemy rozwiązania, jakie korzyści. (…) Use case i wyliczenia.” /
„zawsze musi być problem, rozwiązanie, korzyść, z podziałem na Robotify i Agentify. (…) coś ciekawego, nowoczesnego,
z wizją (…) grafiki, coś co się rusza”.

Zasady: zero treści inwestorskich (rundy, EBITDA, wyceny). Każda liczba dla klienta pochodzi z obecnych materiałów
(pitch, budżet) — wyliczenia liczone na parametrach modelu, oznaczone jako orientacyjne. Strona testowa, nie publikowana.

## Krok 1 — plan realizacji i pomysły

**Idea przewodnia: „Dwa światy, jeden partner”.** Klient trafia na stronę z jednym z dwóch bólów: „w biurze toną
procesy” albo „na hali brakuje ludzi”. Strona od pierwszego ekranu pozwala mu wybrać swój świat — i w każdym prowadzi
tym samym rytmem: **Problem → Rozwiązanie → Korzyść → Przykład z liczbami → Kalkulator**.

Pomysły (ruch i grafika — wszystko w kodzie strony, bez zewnętrznych bibliotek, z poszanowaniem „ogranicz ruch”):

1. **Hero „dwa światy”** — animowana scena SVG: po lewej dokumenty płyną do agenta AI i wracają jako zaksięgowane
   (świat cyfrowy, turkus), po prawej ramię robota przekłada paczki, a AMR jeździ po hali (świat fizyczny, limonka);
   w środku pulsujący HUB. Dwa duże przyciski-wejścia: „Mam problem w biurze” / „Mam problem na hali”.
2. **Liczniki „Znasz to?”** — liczby z rynku odliczane przy przewinięciu (97% MŚP bez robota, 4 mln mniej osób
   w wieku produkcyjnym do 2040, 62% firm zgłasza brak rąk, 15% MŚP używa AI wobec 78% korporacji).
3. **Rytm P → R → K** — w każdym produkcie trzy kolumny połączone animowaną strzałką „przepływu”.
4. **Animacja procesu Agentify** — faktura przechodzi przez OCR → agenta → ERP, po drodze zapalają się punkty kontroli.
5. **Animacja Robotify** — ramię robota i AMR na linii pakowania, licznik godzin pracy robota.
6. **Przypadki użycia jako karty** — każda karta: problem / rozwiązanie / korzyść (hover/klik odsłania szczegóły).
7. **Dwa kalkulatory na żywo** — suwaki, wynik i paski animowane:
   - Agentify: etaty przy powtarzalnych procesach, % automatyzacji, koszt godziny → oszczędność roczna, opłaty
     (licencja, utrzymanie, rata wdrożenia, prowizja 10% od oszczędności netto), **co zostaje u klienta**;
   - Robotify: liczba robotów, kraj, godziny pracy robota → koszt tych godzin w pracy ludzi vs opłata serwisowa
     (1. rok: 95% stawki bazowej); zakup robota po stronie klienta — wyraźnie poza rachunkiem.
8. **Przykład „przeciętnego klienta”** — pasek dzielący oszczędność: ile zostaje u klienta, ile płaci nam.
9. **„Jeden partner” z orbitą** — HUB w środku, agenci i roboty na orbitach; obok makieta Client Portal z „żywym”
   licznikiem godzin (oznaczona jako przykładowy widok).
10. **Oś „Jak działamy”** — 7 kroków rysowanych linią przy przewijaniu, osobne tempo Agentify i Robotify.
11. **Bezpieczeństwo i ryzyko po naszej stronie** — ikony: bez opłaty wstępnej, SLA 99%, hot-swap 24 h, EU AI Act,
    hosting w UE, człowiek w pętli przy decyzjach wysokiego ryzyka.
12. **FAQ klienta** i **CTA**: bezpłatny discovery workshop 4–8 h, mapa procesów i ROI do 2 tygodni, bez zobowiązań.

Technika: jeden samodzielny plik HTML (CSS i JS w środku, logotypy wbudowane, font Manrope z Google Fonts), układ
responsywny (telefon → desktop), kolory marki (granat, turkus Agentify, limonka Robotify).

## Krok 2 — rozkład najważniejszych punktów na stronie

| # | Sekcja | Co klient ma zrozumieć | Najważniejsze treści | Ruch / grafika |
|---|---|---|---|---|
| 0 | Nawigacja | gdzie co jest | Biuro · Hala · Kalkulatory · Jak działamy · Bezpieczeństwo · „Umów discovery” | przyklejona, pasek postępu |
| 1 | Hero | „to o mnie” | Mniej rąk do pracy, więcej pracy do zrobienia; dwa wejścia: biuro / hala | scena SVG dwóch światów |
| 2 | Znasz to? | problem jest powszechny | 97% · 4 mln · 62% · 15% vs 78% (źródła) | liczniki |
| 3 | Agentify — biuro | P → R → K | Problem: ręczne faktury, raporty, BOK; Rozwiązanie: agenci AI + RPA, pakiet w 2–4 tyg., bez opłaty wstępnej; Korzyść: 24/7, mniej błędów, płacisz od efektu | animacja przepływu faktury |
| 3a | Przypadki Agentify | „mój proces” | Faktury → ERP · BOK 24/7 · leady → CRM · raporty zarządcze · reconciliacja · onboarding HR | karty P/R/K |
| 3b | Przykład + kalkulator Agentify | ile zyskam | przeciętny klient: 24,4 etatu, oszczędność 2 635 200 zł/rok, opłaty 626 612 zł/rok, zostaje 2 008 588 zł/rok; wdrożenie 60 000 zł/proces w 48 ratach | pasek podziału, suwaki |
| 4 | Robotify — hala | P → R → K | Problem: brak ludzi, CAPEX, brak integratora; Rozwiązanie: robot + serwis RaaS, SLA, hot-swap; Korzyść: praca 24/7, ok. 7% kosztu pracy za serwis | ramię robota + AMR |
| 4a | Przypadki Robotify | „moja hala” | pick & pack · paletyzacja · kontrola jakości · transport wewnętrzny · hotel/recepcja (humanoidy — kolejny etap) · szpital | karty P/R/K |
| 4b | Przykład + kalkulator Robotify | ile zyskam | 1 robot: 7 000 h ≈ 3,5 etatu; 406 000 zł/rok pracy ludzi vs 28 490 zł/rok serwisu (stawka bazowa, Polska) | słupki, suwaki |
| 5 | Jeden partner | po co hub | jeden kontrakt, jedna faktura, Client Portal | orbita + makieta portalu |
| 6 | Jak działamy | co się wydarzy | 7 kroków; Agentify 4–6 tyg., Robotify pilot 30 dni | linia rysowana przy scrollu |
| 7 | Bezpieczeństwo | ryzyko po naszej stronie | bez opłaty wstępnej, SLA 99%, hot-swap 24 h, EU AI Act, hosting UE | ikony |
| 8 | FAQ | rozwiane obawy | koszty, zespół, AI Act, awaria robota, dotacje, czas do efektu | rozwijane |
| 9 | CTA | następny krok | discovery 4–8 h, ROI do 2 tygodni, bez zobowiązań | pulsujący przycisk |

## Krok 3 — realizacja

Plik: `proces/robocze/strona-klient-TEST/automatify-strona-klient-TEST.html` (samodzielny, ok. 95 KB). Status: wersja
testowa do oceny właściciela; nic nie jest publikowane, obecny `index.html` bez zmian (decyzja 17).

Sprawdzenie (Chromium offline, 1280 px i 390 px): zero błędów JS (jedyny błąd konsoli to Google Fonts zablokowane
offline), zero martwych kotwic, brak przewijania poziomego. Poprawione po pierwszym renderze: orbita wychodziła poza
ekran na telefonie, ramię robota w hero nachodziło na HUB, czcionka w grafikach SVG, odmiana „etat/etaty/etatów”
w kalkulatorach, grupowanie tysięcy, żargon inwestorski w przykładzie („klient ważony, miks 2-6-2”) zastąpiony prostym
opisem, puste miejsce w panelach przykładów zamienione na wezwanie do discovery.

Liczby: przykład Agentify (2 635 200 / 626 612 / 2 008 588 zł) i Robotify (406 000 / 28 490 zł) z modelu; kalkulatory
liczą na tych samych parametrach (licencja 50 583,71 zł/proces/rok, utrzymanie 12 000, rata 15 000, 4,69 etatu na
proces, prowizja 10% od oszczędności netto; Robotify: koszt pracy i stawka bazowa per kraj, 1. rok 95%). Statystyki
rynkowe (97%, 4 mln, 62%, 15%/78%) z pitcha — przed publikacją wymagają podpięcia źródeł. Makieta Client Portal ma
liczby ilustracyjne i jest tak oznaczona.

Do decyzji właściciela po obejrzeniu: kierunek wizualny, hasło główne, kolejność sekcji, czy pokazywać kalkulatory
publicznie, adres kontaktowy w CTA (teraz kontakt@automatify.work).
