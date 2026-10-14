# WYMAGANIA KOŃCOWE — strona Automatify dla klienta, wersja 3 (dopracowanie wszystkich 4 kierunków)

Ten plik **ma pierwszeństwo** przed `BRIEF.md` wszędzie, gdzie się różnią (BRIEF zbierał decyzje po kolei; tu są ostateczne).
`$S` = `/tmp/claude-0/-home-user-Automatify/c3b60100-f4fc-5952-9d76-b6e32da41b5c/scratchpad`, `$V` = `$S/STRONA-KLIENT-v2`.

## 0. Polecenie właściciela (dosłownie)

> „Sprawdź. Doprowadź je do perfekcji, ponieważ nie mogę w tej chwili się zdecydować, która wersja jest lepsza. Sprawdź wszystkie
> błędy, nieścisłości i to, czego być może brakuje. I najważniejsze, muszą być wykazane korzyści, problem, rozwiązanie, korzyść.”
> Wcześniej: „Informacje dla klienta muszą być totalnie inne niż dla inwestora. (…) jaki klient ma problem, jakie dajemy
> rozwiązania, jakie korzyści. (…) Use case i wyliczenia.” · „Oczywiście, problem, rozwiązanie i korzyść mówimy od strony klienta.”
> „Wygląda zbyt standardowo (…). Wykaż się większą inwencją, a grafiki postaraj się, żeby były bardziej profesjonalne.
> Bardziej biznesowy wygląd.” · „zachowaj też część treści”.

Każdy z 4 kierunków (A raport zarządczy, B rysunek techniczny, C centrum operacyjne, D Twój dzień pracy) ma zostać dopracowany
**we własnym charakterze** do poziomu, który można pokazać klientowi — nie upodabniaj go do innych kierunków. Pomysły z innych
kandydatów (`JURY-UWAGI.md`) wolno przeszczepić tylko wtedy, gdy pasują do charakteru kierunku.

## 1. Treść obowiązkowa — Problem → Rozwiązanie → Korzyść od strony klienta (NAJWAŻNIEJSZE)

Osobno dla **Agentify (biuro)** i **Robotify (hala)**, jawnie nazwane słowami **Problem / Rozwiązanie / Korzyść** (EN: Problem /
Solution / Benefit), widoczne bez klikania. **Korzyść ma być wykazana liczbami** (use case'y niżej, z zyskiem narastająco),
a nie tylko opisana. Także w przypadkach użycia: po 6 dla każdego produktu, każdy z problemem / rozwiązaniem / korzyścią.

**Agentify — Problem:** ludzie płatni ok. 60 zł/h (1 etat biurowy ≈ 108 000 zł rocznie) przepisują faktury i zamówienia między
systemami, sklejają raporty, odpowiadają na te same pytania; klasyczne wdrożenie AI/RPA to 100 000–500 000 zł z góry; brak zespołu
AI i mapy procesów; wielu dostawców, nikt nie odpowiada za wynik.
**Agentify — Rozwiązanie:** agenci AI + roboty RPA pod klucz; discovery 4–8 h, mapa procesów i kalkulator ROI w 2 tygodnie; gotowy
pakiet w 2–4 tygodnie; **0 zł z góry — klient nie płaci za wdrożenie; płaci tylko za robotogodziny** (godzinę pracy agenta
zamiast godziny pracy człowieka); przez pierwsze 4 lata stawka zawiera spłatę wdrożenia, **od 5. roku stawka spada**;
człowiek w pętli przy decyzjach wysokiego ryzyka, każda decyzja agenta zapisana; Client Portal (godziny, oszczędności).
NIE pokazujemy klientowi rozbicia na licencję / utrzymanie / ratę / prowizję ani „success fee” — jedna stawka za robotogodzinę.
**Agentify — Korzyść (use case z budżetu, klient realistyczny: 5 procesów, 18 900 h pracy przejętej rocznie):**

| | Rok 1 | Rok 2 | Rok 3 | Rok 4 |
|---|---|---|---|---|
| Te godziny w pracy ludzi (60 zł/h) | 1,13 mln zł | 1,13 mln zł | 1,13 mln zł | 1,13 mln zł |
| Robotogodziny (19,60 zł/h) | 370 485 zł | 370 485 zł | 370 485 zł | 370 485 zł |
| Zysk klienta w roku | 763 515 zł | 763 515 zł | 763 515 zł | 763 515 zł |
| **Zysk klienta narastająco** | 763 515 zł | 1,53 mln zł | 2,29 mln zł | 3,05 mln zł |

Od 5. roku: 16,03 zł/h, 302 985 zł/rok, zysk 831 015 zł/rok (narastająco po 5 latach 3,89 mln zł). Plus jakościowo: praca 24/7
bez zaległości, mniej błędów, zespół przechodzi do pracy niepowtarzalnej (klienci, decyzje).

**Robotify — Problem:** brak rąk do pracy fizycznej (62% firm ma trudności z rekrutacją; 4 mln mniej osób w wieku produkcyjnym
w Polsce do 2040; 97% średnich firm bez robota); 1 operator ≈ 116 000 zł rocznie (58 zł/h × 2 000 h); robot to inwestycja i ryzyko
technologiczne; brak integratora dla średniej firmy (dobór, BHP, integracja, serwis).
**Robotify — Rozwiązanie:** **robota kupuje klient** (dotacja UE / BGK albo własny budżet); my dobieramy, wdrażamy, integrujemy
i serwisujemy w **stawce za robotogodzinę** (software + integracja + serwis + AI Hours), ok. 7% kosztu pracy w kraju — Polska
4,07 zł/h; w roku wejścia 95% stawki, potem −5% rocznie; site assessment + audyt BHP, pilot 30 dni, umowa 36 mies., SLA 99%,
hot-swap w 24 h, monitoring 24/7 z predykcją awarii; na start coboty i AMR, humanoidy w kolejnym etapie.
**Robotify — Korzyść (use case: 1 cobot w Polsce od 2028, 7 000 h/rok; cena robota 55 tys. EUR × 4,30 zł = 236 500 zł,
rozłożona równo na 4 lata) — zakup i serwis ZAWSZE osobno, potem razem:**

| | Rok 1 | Rok 2 | Rok 3 | Rok 4 | Razem 4 lata |
|---|---|---|---|---|---|
| Praca ludzi (58 zł/h) | 406 000 zł | 406 000 zł | 406 000 zł | 406 000 zł | 1,62 mln zł |
| Zakup robota (÷ 4 lata) | 59 125 zł (8,45 zł/h) | 59 125 zł | 59 125 zł | 59 125 zł | 236 500 zł |
| Serwis Robotify (robotogodziny) | 27 066 zł (3,87 zł/h) | 25 712 zł (3,67) | 24 427 zł (3,49) | 23 205 zł (3,32) | 100 410 zł |
| Robot razem | 86 191 zł (12,31 zł/h) | 84 837 zł (12,12) | 83 552 zł (11,94) | 82 330 zł (11,76) | 336 910 zł |
| Zysk klienta w roku | 319 810 zł | 321 163 zł | 322 448 zł | 323 670 zł | |
| **Zysk klienta narastająco** | 319 810 zł | 640 972 zł | 963 421 zł | 1,29 mln zł | |

Widełki ceny robota (coboty u integratorów 30–80 tys. EUR): zakup 129 000 zł → zysk 1,39 mln zł w 4 lata; 344 000 zł → 1,18 mln zł.
**Przypis obowiązkowy:** pełne wykorzystanie 7 000 h/rok (20 h na dobę, 350 dni); bez energii i bez dotacji (dotacja obniża koszt
zakupu); cena robota orientacyjna (rynkowe widełki), nie część oferty Automatify; w roku 4 składniki po zaokrągleniu mogą różnić się
o 0,01 zł/h. Plus jakościowo: zmiana zawsze obsadzona, stała wydajność, ryzyko technologiczne po naszej stronie, przewidywalny koszt.

## 2. Kalkulatory (oba obowiązkowe, PL i EN)

**Agentify** — wejścia: etaty przy powtarzalnych procesach (domyślnie **15**), % pracy do automatyzacji (domyślnie **70**), koszt
godziny pracy (domyślnie **60 zł/h**). Logika (koszty jednostkowe klienta realistycznego z budżetu, na godzinę):
```
H   = round(etaty × %/100 × 1 800)                     // godziny przejęte rocznie (liczba całkowita)
F14 = 15.11378306878307   // zł/h: licencja + utrzymanie + spłata wdrożenia (lata 1–4) = (150 650,5 + 60 000 + 75 000) / 18 900
F5  = 11.145529100529101  // zł/h: licencja + utrzymanie (od 5. roku) = (150 650,5 + 60 000) / 18 900
r14 = F14 + 0.1 × max(0, stawka − F14)                  // stawka za robotogodzinę, lata 1–4
r5  = F5  + 0.1 × max(0, stawka − F5)                   // od 5. roku
koszt ludzi = H × stawka;  opłata14 = H × r14;  opłata5 = H × r5
zysk w roku = koszt ludzi − opłata14 (lata 1–4);  narastająco po 1, 2, 3, 4 latach (+ rok 5 z opłata5)
```
Przy wartościach domyślnych MUSI wyjść: 18 900 h; 19,60 zł/h; 1,13 mln zł; 370 485 zł; zysk 763 515 zł; narastająco
763 515 zł / 1,53 mln zł / 2,29 mln zł / 3,05 mln zł; od 5. roku 16,03 zł/h. Pokazuj: stawkę za robotogodzinę vs stawkę człowieka,
koszt ludzi, opłatę, zysk w roku i narastająco (1–4 lata). Nie pokazuj rozbicia opłaty. Etaty i godziny jako liczby całkowite.

**Robotify** — wejścia: liczba robotów (domyślnie **1**), godziny pracy robota w roku (domyślnie i maks. **7 000**), kraj, cena
robota w EUR (domyślnie **55 000**, kurs **4,30** zł/EUR). Kraje [koszt pracy zł/h | stawka bazowa zł/h]: Polska 58 | 4,07;
Czechy 71 | 4,99; Niemcy 176 | 12,36; Wielka Brytania 151 | 10,60; Francja 174 | 12,22; Holandia 181 | 12,71.
```
praca ludzi/rok   = n × h × koszt pracy
zakup/rok         = n × cena_EUR × 4,30 / 4                  (lata 1–4)
serwis rok k      = n × h × stawka × 0,95^k   (k = 1..4; klient startuje w roku wejścia Robotify do kraju)
robot razem rok k = zakup/rok + serwis rok k;   za godzinę = ÷ (n × h)
zysk rok k = praca ludzi − robot razem;   narastająco po 1..4 latach
```
Przy domyślnych (Polska) MUSI wyjść tabela z sekcji 1. Zakup i serwis zawsze osobno, potem razem; zysk w roku i narastająco.
Etykieta: „zakładamy start w roku wejścia Robotify do kraju (95% stawki), potem −5% rocznie”.

## 3. Format liczb (decyzje 23–25) — PL i EN

- Kwoty ≥ 1 mln zł: **„X,XX mln zł”** (dwa miejsca, np. 1,13 mln zł; 3,05 mln zł). < 1 mln — pełne złote z odstępem tysięcy
  (763 515 zł). Stawki zł/h z groszami (19,60 zł/h). Procenty bez zmian.
- **Ilości zawsze całkowite**, także średnie — zero „24,4 etatu”, „5,2 procesu”, „3,5 etatu”: „ok. 24 etaty”, „ok. 5 procesów”,
  robot 7 000 h = „ponad 3 etaty”; godziny całkowite. Dane rynkowe z zewnętrznych źródeł — jak w źródle (4 mln osób).
- Polska odmiana liczebników (2 roboty, 5 robotów, 22 etaty, 25 etatów).
- EN: „PLN 1.13m”, „PLN 763,515”, „PLN 19.60/h”, „11.2%”; ilości „about 24 FTEs”.
- Wyniki kalkulatorów formatowane tymi samymi regułami (≥ 1 mln → mln z dwoma miejscami).

## 4. Hasło i marka

- Hasło (decyzja 19), dokładnie: **„Automatyzujemy to, co powtarzalne, aby ludzie zajęli się tym, co niepowtarzalne.”**
  Rozwinięcie: „Wierzymy, że dobrze zaprojektowana automatyzacja nie zastępuje pracy. Uwalnia ją.”
  EN (key visual marki): **„We automate what's repeatable — so people can do what's unrepeatable.”**
  „…automation doesn't replace work. It frees it.” — hasło jest osią strony (hero / okładka), nie ozdobnikiem w stopce.
- Kolory: granat #0E2244 / #081835, turkus Agentify #2EBED9 (#1B7C99), limonka Robotify #C4E847 (#7CB518). Pętla
  Agentify–HUB–Robotify. Materiały: `$V/assets/` (logo przez `@@LOGO_WHITE@@` / `@@LOGO_NAVY@@`, `@@ASSET:…@@`).

## 5. Dwujęzyczność PL / EN (obowiązkowa)

Jeden plik, przełącznik PL | EN w nawigacji (widoczny także na 390 px), PL domyślnie, `<html lang>` przełączany, wybór
zapamiętany (localStorage w try/catch) i/lub `#en`. Przetłumaczone WSZYSTKO: nawigacja, nagłówki, treść, etykiety w SVG, podpisy
rysunków, przypisy, przypadki użycia, FAQ, kalkulatory (etykiety, jednostki, format liczb), title/meta, alt/aria. EN pisane jak
przez native speakera (biznesowy angielski), nie dosłownie. W EN waluta PLN (to polska oferta), przy kalkulatorze Robotify EUR dla
ceny robota. Nazwy własne bez tłumaczenia (Automatify, Agentify, Robotify, Client Portal, RaaS, AMR, cobot, SLA, hot-swap,
Pay-as-you-Save — jeśli występuje).

## 6. Zakazy i jakość

- Zero treści inwestorskich (rundy, EBITDA, wyceny, budżet firmy, marże Automatify, inwestor, fundusz).
- Zero emoji, zero wymyślonych klientów / referencji / logotypów / nagród / liczb. Liczby branżowe w przypadkach użycia
  (60–80%, 30–50%, 2–3 h) z dopiskiem „wg branżowych wdrożeń”. Makieta Client Portal — „przykładowy widok, liczby ilustracyjne”.
  Bez „Subeo 250+ projektów” (brak zgody właściciela).
- Dyskretny znacznik w stopce: „Wersja testowa — wyliczenia orientacyjne na parametrach modelu; źródła danych rynkowych
  zostaną dołączone przed publikacją.” (EN odpowiednik).
- CTA: bezpłatne discovery 4–8 h, mapa procesów i kalkulator ROI w 2 tygodnie, bez zobowiązań; `mailto:kontakt@automatify.work`.
- Treść z v1 zachowana co do sensu: 6 + 6 przypadków użycia, 7 kroków Agentify i 7 Robotify (`$S/STRONA-KLIENT/src.html`, obiekt `TL`),
  bezpieczeństwo, FAQ (zaktualizowane do nowego modelu — np. „Ile to kosztuje?” → robotogodzina, 0 zł z góry; „Co z robotem?” →
  kupuje klient, często z dotacją).
- Polszczyzna: poprawne znaki, twarde spacje po jednoliterowych słowach (`w&nbsp;`, `z&nbsp;`, `i&nbsp;`…, także w etykietach SVG),
  brak sierot w nagłówkach.
- Technika: jeden samodzielny plik HTML, bez zewnętrznych skryptów; budowa `python3 -I $S/tools/inline_build.py src.html out.html`;
  fonty `@@FONTS:…@@` (ogranicz podzbiory/osie, by plik był **< 3 MB**); działa offline; 0 błędów JS; zero przewijania
  poziomego przy 390 / 1024 / 1440; `prefers-reduced-motion` respektowane; kontrast tekstu ≥ 4,5:1 dla treści.
- Kontrola: `python3 -I $S/tools/page_check.py <plik> <katalog> 1440 1024 390` oraz `HASH=en python3 -I … <katalog-en> …` (strona MUSI otwierać wersję EN pod `#en`) — obejrzyj zrzuty WSZYSTKICH sekcji w obu
  językach (przełącz język np. przez `#en` lub skrypt Playwright).

## 7. DECYZJA WŁAŚCICIELA: dopracowujemy tylko kierunek B, w dwóch wariantach

> „Wiesz, zmieniłem zdanie. Dopracujmy tylko i wyłącznie wersję B, ale w dwóch typach: jedna bez tej kratki, a druga z kratką.”

- Kierunek B („Rysunek techniczny / izometria”) dopracowany zgodnie z sekcjami 0–6 i uwagami jury (`kandydat-B/JURY-UWAGI.md`,
  łącznie z listą „do naprawy” dyrektora kreatywnego). Pomysły z A/C/D — tylko gdy pasują do charakteru B (np. aparat raportu z A:
  podpisy „Rys.” z jednozdaniowym wnioskiem, przypisy; taśma dnia z D jako mały rysunek robotogodzin; lemniskata w nawigacji z C).
- **Dwa warianty z jednego źródła** (te same treści, kalkulatory, EN — różni się tylko tło/siatka):
  1. `automatify-klient-B-kratka.html` — z siatką milimetrową (jak dziś; jury: osłabić siatkę pod tabelami i długim tekstem,
     podnieść kontrast tekstu).
  2. `automatify-klient-B-bez-kratki.html` — **bez żadnej siatki/kratki** (także w ciemnych blokach i pod scenami). Ma wyglądać
     na zaprojektowany, nie „z wyłączoną siatką”: czyste tło papieru, rytm i struktura z linii, ramek arkuszy, tabliczek i linii
     wymiarowych; sprawdź, czy bez kratki nic nie traci czytelności (sceny izometryczne, tabliczki ARK., kalkulatory).
- Przełącznik wariantu w kodzie: jeden atrybut/klasa (np. `<html data-grid="on|off">`) ustawiany przy budowie; oba pliki budowane
  jednym poleceniem. Rozmiar każdego < 3 MB.
