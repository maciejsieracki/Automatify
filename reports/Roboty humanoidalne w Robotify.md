# Humanoidy przejmą pracę fizyczną, lecz etapami

Potencjał rynku robotów humanoidalnych uzasadnia polecenie 39. W samej UE siedem sektorów opartych na pracy fizycznej zatrudnia ok. **120 mln pracowników**. Goldman Sachs zakłada, że już ok. 2030 r. świat będzie kupował więcej humanoidów rocznie (ok. 890 000), niż dziś instaluje wszystkich robotów przemysłowych (ok. 600 000), a Morgan Stanley widzi w 2050 r. ponad **1 mld humanoidów** i ok. 5,00 bln USD rocznych przychodów. Zarazem w październiku 2026 r. płatnie i regularnie pracuje tylko mała część robotów: z 13 000–18 000 humanoidów wysłanych w 2025 r. do realnej pracy trafiło ok. **10%**. Udokumentowane wyniki operacyjne mają dwa wdrożenia: Agility u GXO i Figure w BMW. Prawie wszystko to proste przenoszenie pojemników i części u dużych koncernów, a w Polsce nie ma ani jednego wdrożenia. Termin z polecenia 38 („humanoidy zdolne do realnej pracy za dwa lata”) broni się dla wąskich zadań logistyki wewnętrznej, bo Hyundai planuje produkcyjną pracę Atlasa właśnie od 2028 r. Faza mieszana jest trafna, ale potrwa dłużej niż do 2030 r. Tezy „potem wyłącznie humanoidy” nie potwierdza żadne źródło: IFR stwierdza wprost, że humanoidy nie zastąpią obecnych typów robotów. Ekonomika mówi to samo. Humanoid w wynajmie (Agility, ok. 8 500 USD miesięcznie) kosztuje dziś **64–99 zł/h**, wobec 58 zł/h pracy człowieka i 25–35 zł/h wynajętego cobota. Parytet z polską płacą prognozy przesuwają na lata 2028–2030, i to tylko przy wysokim wykorzystaniu robota. Dla Robotify wynikają z tego trzy rzeczy:

1. Start komercyjny w 2028 r. trafia w okno, w którym humanoidy wychodzą poza krąg klientów-inwestorów.
2. Przewagą nie jest sam robot, tylko europejska warstwa wdrożenia, nadzoru i danych. Po lukach w robotach Unitree, zakazie FCC i incydencie w Marynarce Wojennej to realny wyróżnik.
3. Polecenie „wynajmować coboty” kłóci się z budżetem, w którym robota kupuje klient. Wymaga decyzji o modelu i finansowaniu floty, zanim zmienią się liczby.

Inwestorzy w 2026 r. chętnie słuchają o humanoidach, ale wycenę budują podpisane robotogodziny. Humanoidy powinny więc być wizją i mapą drogową na pierwszych slajdach, a coboty i model robotogodziny — silnikiem, który tę wizję finansuje.

## Metodologia: streszczenia wyszukiwarki zamiast stron źródłowych

Raport syntetyzuje dziewięć notatek badawczych z 15.10.2026:

- producenci i produkty,
- wdrożenia i gotowość,
- zastosowania w sektorach wraz z osobną weryfikacją,
- modele wynajmu i RaaS,
- bezpieczeństwo, regulacje i metodyka,
- Polska i CEE,
- inwestorzy i rynek,
- suwerenność danych.

**Badacze nie mogli otwierać stron źródłowych.** Narzędzie pobierania stron zwracało błędy DNS, a serwer pośredniczący odrzucał połączenia (np. do eur-lex.europa.eu, iso.org, sec.gov, bostondynamics.com). W kilku wątkach wyczerpał się też limit wyszukiwań. Każda liczba pochodzi więc ze streszczenia strony w wynikach wyszukiwarki, a nie z lektury samej strony, i należy ją czytać jako „podaje źródło X”.

Jedna notatka sektorowa powstała najpierw z pamięci modelu i została zweryfikowana w drugim przebiegu. Do raportu weszły tylko twierdzenia potwierdzone w weryfikacji albo opatrzone adresem źródła.

Status każdego przykładu rozróżniam tak:

- **wdrożenie** — regularna, płatna praca;
- **płatny pilotaż** — umowa komercyjna lub RaaS na małą skalę;
- **pilotaż** — test w zakładzie, warunki nieujawnione;
- **demonstracja**;
- **plan lub prognoza**.

Deklaracje producentów oznaczam jako deklaracje.

Waluty przeliczam w przybliżeniu po kursie z 13.10.2026 podanym przez comparic.pl: 1 USD ≈ 3,92 zł ≈ 0,89 EUR, 1 EUR ≈ 4,38 zł. Dla juana przyjmuję ok. 7 CNY za 1 USD, czyli 1 CNY ≈ 0,56 zł ≈ 0,13 EUR; to kurs implikowany przez źródła, nieoficjalny. Liczby budżetowe Robotify i treść obecnych materiałów pochodzą z dokumentów w repozytorium Automatify, nie z researchu. Raport zamyka lista twierdzeń do sprawdzenia u źródła.

## Każda praca fizyczna to rynek — 120 mln pracowników w samej UE

Teza z polecenia 39 („każda praca fizyczna docelowo może być zastąpiona”) ma solidne oparcie w danych o pracy i w długoterminowych scenariuszach banków. Pod warunkiem, że podaje się ją z horyzontem czasowym.

**Pula pracy w UE.** Według danych Eurostatu w zestawieniu Statisty (III kw. 2025) pracownicy najemni w sektorach opartych na pracy fizycznej to:

- przetwórstwo przemysłowe — **30,9 mln**,
- handel — 25,9 mln,
- ochrona zdrowia i pomoc społeczna — 22,6 mln,
- budownictwo — 13,8 mln,
- transport i magazynowanie — 10,8 mln,
- zakwaterowanie i gastronomia — 9,6 mln,
- rolnictwo — 6,0 mln.

Razem to ok. 120 mln osób przy ok. 207 mln pracujących w UE ([Statista/Eurostat](https://www.statista.com/statistics/1195197/global-artificial-intelligence-publishing-market-size); [PORDATA](https://www.pordata.pt/en/europe/employment+total+and+by+occupation-3386)). Strona Statisty ma tytuł niezgodny z treścią, a liczby obejmują tylko pracowników najemnych, bez samozatrudnionych — dlatego trafiły na listę do sprawdzenia. Zawody stricte fizyczne (robotnicy wykwalifikowani, operatorzy maszyn, pracownicy przy pracach prostych, ISCO 7–9) to ok. 27% zatrudnienia, czyli ok. **55 mln osób** ([Eurostat](https://ec.europa.eu/eurostat/web/products-eurostat-news/-/ddn-20201113-2)). Ta liczba nie obejmuje opiekunów, kucharzy, sprzątających ani rolników.

**Pula pracy na świecie.** Samo rolnictwo zatrudnia **916 mln osób** (26,1% zatrudnienia w 2023 r.) ([FAO](https://www.fao.org/statistics/highlights-archive/highlights-detail/employment-indicators-2000-2023-%28july-2025-update%29/en)). Z udziałem przemysłu (ok. 24%) daje to ok. 1,75 mld ludzi w sektorach z przewagą pracy fizycznej.

**Długoterminowe scenariusze banków** pokazują ten sam rząd wielkości, ale w horyzoncie 25–35 lat:

| Instytucja | Scenariusz |
|---|---|
| Morgan Stanley — USA | Do 2050 r. ok. 63 mln humanoidów, równowartość ok. **3,00 bln USD** płac. Dotyczy to ok. 75% zawodów i 40% zatrudnionych, w tym do 70% miejsc pracy w budownictwie i 67% w rolnictwie, rybołówstwie i leśnictwie ([Morgan Stanley](https://morganstanley.com/ideas/humanoid-robot-market-outlook-2024)). |
| Morgan Stanley — świat | Ponad 1 mld humanoidów i ok. 5,00 bln USD rocznych przychodów w 2050 r. Ok. 90% floty w zastosowaniach przemysłowych i komercyjnych, gospodarstwa domowe później ([OODA Loop](https://oodaloop.com/briefs/technology/humanoid-robots-seen-as-5-trillion-global-opportunity-at-morgan-stanley/); [humanoid.guide](https://humanoid.guide/morgan-stanley-about-humanoid-robots/)). |
| Citi | Rynek humanoidów 209,00 mld USD w 2035 r. i 7,00 bln USD w 2050 r. Cztery zastosowania o największym potencjale wzrostu to dostawy paczek, budownictwo, dostawy jedzenia i usługi domowe ([Citi GPS](https://www.citigroup.com/global/insights/the-rise-of-ai-robots)). |
| Bank of America | 3 mld humanoidów w użyciu w 2060 r., w tym ok. 62% w domach ([Fortune](https://fortune.com/2026/03/13/bank-of-america-humanoid-robot-forecast-3-billion-2060); [BofA Institute](https://institute.bankofamerica.com/content/dam/transformation/physical-ai-part-2.pdf)). |

**Prognozy na najbliższą dekadę** różnią się dziewięciokrotnie, zależnie od założeń o koszcie i autonomii:

| Źródło | Prognoza |
|---|---|
| Goldman Sachs (wrzesień 2026, po korekcie w górę) | ok. 75 000 sztuk w 2026 r., **ok. 890 000 w 2030 r.**, **6,5 mln sztuk i ok. 138,00 mld USD w 2035 r.** Sam bank zastrzega, że żadne potwierdzone zamówienia nie zbliżają się do tych wolumenów ([24/7 Wall St.](https://247wallst.com/investing/2026/09/13/robots-everywhere-goldman-sachs-now-sees-6-5-million-humanoid-robots-by-2035/)). |
| Interact Analysis (wariant ostrożny) | Ponad 700 000 sztuk i ok. 15,00 mld USD w 2035 r.; komercyjny punkt przegięcia ok. 2032 r. ([Interact Analysis](https://interactanalysis.com/wp-content/uploads/Humanoid-Robot-report-PR-May-2026.pdf)). |
| IDTechEx | ok. 29,50 mld USD w 2036 r. ([IDTechEx](https://www.idtechex.com/en/research-article/humanoid-robots-to-reach-nearly-us-30-billion-by-2036/34443)). |
| McKinsey | Robotyka ogólnego przeznaczenia rośnie z poniżej 1,00 mld USD dziś do ok. 370,00 mld USD w 2040 r. ([McKinsey](https://www.mckinsey.com/industries/industrials/our-insights/will-embodied-ai-create-robotic-coworkers)). |

**Najmocniejsze uczciwe porównanie dla inwestora.** W 2025 r. na świecie zainstalowano ok. 603 000–621 000 robotów przemysłowych, źródła się różnią ([money.pl](https://www.money.pl/gospodarka/nadchodzi-wielka-fala-robotyzacji-europa-ma-jednak-problem-7333192882866400a.html); [Rzeczpospolita](https://pro.rp.pl/raporty-ekonomiczne/art45153461-polski-problem-z-robotami-swiatowy-rynek-rosnie-siedmiokrotnie-szybciej-niz-nasz)). W scenariuszu Goldman Sachs **humanoidy już ok. 2030 r. sprzedają się w większej liczbie niż wszystkie roboty przemysłowe instalowane dziś, a w 2035 r. ok. dziesięciokrotnie więcej**. Nawet ostrożny Interact daje w 2035 r. wolumen zbliżony do dzisiejszego rynku robotów przemysłowych.

Ta skala kontrastuje z dzisiejszymi przychodami. Agility zarobiło w 2025 r. 1,80 mln USD przy stracie operacyjnej ok. 140,00 mln USD ([The Robot Report](https://www.therobotreport.com/agility-robotics-reports-18m-revenue-ahead-of-humanoid-spac/)). Lider chińskiego segmentu przemysłowego, UBTech, miał w I półroczu 2026 r. 590,30 mln CNY (≈ 75,38 mln EUR) przychodu z pełnowymiarowych humanoidów ([Humanoids Daily](https://www.humanoidsdaily.com/news/ubtech-reports-104-revenue-surge-in-h1-2026-as-full-size-humanoids-drive-growth)).

Wniosek: zdanie „każda praca fizyczna docelowo” jest obronne jako teza na lata 2040–2050. Musi jednak iść w parze z ostrożnymi liczbami na lata 2030–2035 i z jasnym opisem, gdzie humanoidy pracują dziś.

### Pilotaże w kilkunastu sektorach, regularna płatna praca głównie w dwóch

Mapa sektorów jest w październiku 2026 r. dużo bogatsza niż rok wcześniej, ale jej kształt się nie zmienił. Tabela pokazuje pełną paletę zastosowań z polecenia 39, ze statusem dowodu i realistycznym horyzontem skalowania. Ostatnia kolumna to synteza analityczna badaczy na podstawie dowodów i prognoz, a nie prognoza konkretnego źródła.

| Sektor | Co humanoidy robią w latach 2025–2026 (przykład, data) | Status | Pula pracy w UE | Realne skalowanie |
|---|---|---|---|---|
| Fabryki | Figure 03 sekwencjonuje części w BMW Spartanburg od VI 2026 ([BMWBlog](https://www.bmwblog.com/2026/06/26/bmw-figure-03-humanoid-robot-spartanburg-plant/)). UBTech Walker S2 u chińskich producentów aut ([PR Newswire](https://www.prnewswire.com/news-releases/ubtech-humanoid-robot-walker-s2-begins-mass-production-and-delivery-with-orders-exceeding-800-million-yuan-302616924.html)). Hexagon AEON w BMW Lipsk (2 szt. od 12.06.2026) ([ad-hoc-news](https://www.ad-hoc-news.de/wissenschaft/bmw-leipzig-humanoider-aeon-roboter-testet-den-einsatz-an-batteriemodulen/70313953)). Renault planuje 350 humanoidów Wandercraft w 18 miesięcy ([Interesting Engineering](https://interestingengineering.com/ai-robotics/france-renault-350-humanoid-robot-factory)). | Wdrożenie (wczesne) | 30,9 mln | 2027–2030 floty u liderów, szerzej po 2030 |
| Magazyny i logistyka | Agility Digit w 9 zakładach klientów, ponad 65 000 h, RaaS u GXO ([SEC S-4/A](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026105334/ea0297114-05.htm)). Rossmann testuje Walker S2 w Burgwedel przez cały 2026 r. ([Wiadomości Handlowe](https://www.wiadomoscihandlowe.pl/retailtech-i-nowe-technologie/robotyzacja-i-automatyzacja/rossmann-testuje-roboty-humanoidalne-pilotaz-w-logistyce-2533900)). | Wdrożenie (wczesne) / pilotaż | 10,8 mln | 2027–2030 |
| Lotniska | JAL i GMO na Hanedzie od V 2026 do 2028: transport kontenerów, później sprzątanie kabin ([Kyodo/Ada Derana](https://www.adaderana.lk/news.php?nid=121852)). San José — humanoid-informator od IV 2026 ([Let's Data Science](https://letsdatascience.com/news/airport-deploys-humanoid-robot-for-passenger-assistance-7bb78036)). Emirates — roboty do odprawy i bagażu od I kw. 2027, forma nieokreślona ([Gulf News](https://gulfnews.com/business/aviation/emirates-to-launch-robots-that-check-in-passengers-and-carry-bags-in-2027-1.500683922)). | Pilotaż / plan | część transportu | ok. 2030 w portach z niedoborem kadr |
| Turystyka i hotele | Konsjerż „Oto” w hotelu Otonomus w Las Vegas od IX 2025 ([Euronews](https://euronews.com/next/2026/01/06/meet-oto-the-robot-concierge-welcoming-guests-at-an-ai-powered-hotel-in-las-vegas)). Hotel obsługiwany przez roboty Pudu w Shenzhen — pokoje testowe pod koniec 2026, otwarcie 2027 ([Hotel Technology News](https://hoteltechnologynews.com/2026/07/china-plans-first-fully-robot-operated-hotel-powered-by-ai-and-robotics/)). Brak płatnego housekeepingu. | Wdrożenie (1 obiekt) / plan | 9,6 mln | recepcja już dziś, housekeeping po 2032 |
| Handel | Salling/Føtex (Dania): nocne uzupełnianie półek, operatorzy prowadzą każdy ruch, cel samodzielnej pracy na początku 2027 ([Euronews](https://www.euronews.com/2026/10/11/denmark-tests-humanoid-robots-in-supermarkets-to-help-to-ease-staff-workload-at-night)). Galbot: apteka w Pekinie od III 2026, autonomiczny sklep w Hongkongu od 1.09.2026 ([CGTN](https://news.cgtn.com/news/2026-03-13/China-s-first-pharmacy-robot-goes-into-service-in-Beijing-1LtZ7juLcZ2/share_amp.html); [Xinhua](https://www.news.cn/gangao/20260831/3c602a3d205c4e52a455d86caa14f55d/c.html)). | Wdrożenie (mikroformat) / pilotaż | 25,9 mln | 2028–2032 nocne uzupełnianie półek |
| Ochrona zdrowia i opieka | Nurabot (Kawasaki i Foxconn) w szpitalu w Taichung, komercjalizacja do III 2027 ([The Register](https://www.theregister.com/2025/07/04/kawasaki_foxconn_/)). Chiński program pilotażowy robotów w opiece senioralnej, dziś głównie towarzystwo ([SCMP](https://www.scmp.com/tech/policy/article/3313739/china-turns-robots-elderly-care-national-pilot-programme)). | Pilotaż | 22,6 mln | logistyka szpitalna ok. 2030, opieka bezpośrednia po 2035 |
| Budownictwo i stocznie | Tilbury Douglas (UK) od IV 2026, dokumentacja postępu prac ([Tilbury Douglas](https://www.tilburydouglas.co.uk/tilbury-douglas-becomes-first-contractor-to-launch-a-humanoid-robot-on-construction-site/)). Shimizu, inspekcja w Tokio ([humanoid.guide](https://humanoid.guide/?p=17925)). Stocznia HD Hyundai Samho w koreańskim pilotażu 20 robotów Robros (14.10.2026) ([Seoul Economic Daily](https://en.sedaily.com/finance/2026/10/14/korea-clears-safety-rules-to-put-20-humanoid-robots-on)). Spawanie z Persona AI — prototypy pod koniec 2026 ([Maritime Executive](https://maritime-executive.com/article/hd-hyundai-moving-forward-with-humanoid-welding-robot-for-shipyards)). | Pilotaż | 13,8 mln | logistyka placu ok. 2030, prace wykończeniowe po 2035 |
| Rolnictwo | Agroz i UBTech: Walker S w farmie wertykalnej w Malezji ([HortiDaily](https://www.hortidaily.com/article/9791498/newly-launched-humanoid-robot-to-work-in-malaysian-vertical-farm)). Próby polowe na plantacjach herbaty w Fujianie ([humanoid.guide](https://humanoid.guide/tea-farm-humanoid-robots-tackle-field-trials-ahead-of-2026-games/)). | Pilotaż / demonstracja | 6,0 mln (najemni) | nisza (farmy wewnętrzne) ok. 2030 |
| Przetwórstwo spożywcze | Nie znaleziono nazwanego pilotażu; barierą są wymogi higieniczne i mycie linii. | Koncepcja | (w przemyśle) | ok. 2030 na liniach pakujących |
| Sprzątanie i facility management | YY Group (Singapur, VI 2026): Unitree G1 w obsłudze obiektów; pracownicy noszą sprzęt do zbierania danych ([Droids Substack](https://droids.substack.com/p/humanoids-enter-facility-management)). | Pilotaż | niezweryfikowana | po 2030 |
| Energetyka, inspekcja, ochrona | UBTech Walker S2 na przejściach granicznych Chiny–Wietnam ([Olhar Digital](https://olhardigital.com.br/2025/11/27/pro/china-vai-usar-robos-humanoides-para-patrulhar-fronteiras/)). Inspekcję podstacji wygrywają dziś roboty kołowe i czworonożne ([Energy Robotics](https://www.energy-robotics.com/about-us)). | Pilotaż (zakup publiczny) | niezweryfikowana | dodatek manipulacyjny po 2030 |
| Dostawy ostatniej mili | „Humanoid park” Amazona do testów doręczeń z furgonetki ([eWeek](https://www.eweek.com/news/amazon-testing-humanoid-delivery-robots/)). Delivery Lab w pilotażu Robros ([Seoul Economic Daily](https://en.sedaily.com/finance/2026/10/14/korea-clears-safety-rules-to-put-20-humanoid-robots-on)). | Demonstracja / pilotaż | (w transporcie) | „ostatnie 50 m” po 2032 |
| Gospodarstwa domowe | 1X NEO: fabryka w Hayward produkuje od 30.04.2026, pierwsze dostawy prywatne do końca 2026 ([Robotics 24/7](https://www.robotics247.com/article/1x-opens-neo-humanoid-robot-factory-in-california); [heise](https://heise.de/-11287205)). Umowa z EQT na do 10 000 sztuk, głównie do przemysłu ([TechCrunch](https://techcrunch.com/?p=3075424)). | Plan przechodzący we wdrożenie | — | wcześni klienci 2027–2030, masowo po 2035 |

**Główny wzorzec.** Branże z ostrym niedoborem kadr (japońskie lotniska i budowy, duński handel nocą, koreańskie stocznie, chińska opieka) testują humanoidy najpierw na zapleczu i na nocnych zmianach, z dala od klientów. Prawie zawsze robot jest teleoperowany albo nadzorowany i pracuje wolniej niż człowiek. Dania musi zmienić prawo, zanim roboty wyjdą między klientów, a Korea potrzebowała piaskownicy regulacyjnej, żeby w ogóle wpuścić 20 maszyn do zakładów ([Euronews](https://www.euronews.com/2026/10/11/denmark-tests-humanoid-robots-in-supermarkets-to-help-to-ease-staff-workload-at-night); [Seoul Economic Daily](https://en.sedaily.com/finance/2026/10/14/korea-clears-safety-rules-to-put-20-humanoid-robots-on)).

**Skala pojedynczych zadań jest konkretna i dobra na slajdy:**

- personel Føtex spędza **40–50% czasu na uzupełnianiu półek**;
- StrongPoint szacuje uzupełnianie półek na ok. 30% roboczogodzin w handlu spożywczym ([StrongPoint](https://www.strongpoint.com/uk/?p=172420));
- JAL ma ok. 4 000 pracowników obsługi naziemnej ([Kyodo/Ada Derana](https://www.adaderana.lk/news.php?nid=121852)).

Te same platformy (klasa Unitree G1, UBTech Walker S, 1X NEO) pracują na lotnisku, w supermarkecie, w fabryce, na farmie i na przejściu granicznym. Żadna wcześniejsza klasa robotów tego nie potrafiła, i to jest najmocniejszy dowód na tezę „jedna platforma, wiele zawodów”.

## W październiku 2026 regularnie pracuje ok. 10% humanoidów, głównie przy pojemnikach

**Wolumeny są duże, praca produkcyjna — niewielka.** Trackery podają dla 2025 r.:

- Omdia — **13 318 sztuk**,
- IDC — ok. 18 000,
- IFR — ok. 7 000 w węższej definicji zastosowań przemysłowych i profesjonalnych

([SCMP](https://www.scmp.com/tech/tech-trends/article/3339346/chinese-firms-outpace-us-rivals-2025-humanoid-robot-shipments-agibot-takes-lead); [Jiemian](https://en.jiemian.com/article/13925066.html); [NextMSC](https://www.nextmsc.com/industry-deep-dive/humanoid-robots-announced-vs-shipped-units)). W I półroczu 2026 r. dostawy wyniosły 19 100–25 000 sztuk, zależnie od trackera. AgiBot ma 35–44% rynku i wyprzedził Unitree, a chińscy producenci odpowiadają za zdecydowaną większość produkcji ([SAG](https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/); [Robotics & Automation News](https://roboticsandautomationnews.com/2026/10/02/idc-data-shows-agibot-led-global-humanoid-robot-shipments-in-h1-2026/105463/)).

Liczba sztuk zawyża jednak gotowość. Interact Analysis ocenia, że do realnej pracy trafiło tylko ok. **10%** humanoidów wyprodukowanych w 2025 r. ([Interact Analysis](https://interactanalysis.com/insight/humanoid-robot-production-surges/)). Morgan Stanley liczy ok. 65% dostaw jako rozrywkę, edukację, badania i zbieranie danych ([Implicator](https://www.implicator.ai/unitree-founder-says-humanoid-robots-chatgpt-moment-is-up-to-10-years-away/)). Fortune pisze wprost, że chińskie humanoidy są „wciąż bardziej pokazowe niż funkcjonalne” ([Fortune](https://fortune.com/2026/06/06/chinese-humanoid-robots-global-market-sales-performative-functional/)).

**Tylko dwa wdrożenia mają potwierdzone wyniki operacyjne** ([Physical AI Journal](https://www.physicalaijournal.org/post/humanoid-deployment-evidence-report-2026)).

Pierwsze to Figure 02 w BMW Spartanburg. Przez ok. 11 miesięcy robot pracował na 10-godzinnych zmianach od poniedziałku do piątku i przepracował **ponad 1 250 h**. Załadował **ponad 90 000 blach** do przyrządów spawalniczych i „przyczynił się” do produkcji ponad 30 000 BMW X3 ([Figure](https://www.figure.ai/news/production-at-bmw)). Lekcje są równie ważne jak wynik:

- pełne zmiany udało się osiągnąć dopiero ok. dziesiątego miesiąca;
- najsłabszym punktem okazało się przedramię, co wymusiło przeprojektowanie robota ([heise](https://www.heise.de/en/news/Humanoid-robot-Figure-02-helps-build-over-30-000-BMW-X3s-11085687.html));
- flotę wycofano „poobijaną” ([Humanoids Daily](https://www.humanoidsdaily.com/news/figure-retires-the-f-02-battle-scarred-robots-30-000-bmws-and-hard-lessons-learned));
- nie opublikowano rzeczywistego czasu cyklu ani liczby interwencji, choć oba wskaźniki były celami pilotażu ([Assembly Magazine](https://www.assemblymag.com/articles/99678-humanoid-robots-complete-trial-project-at-bmw-assembly-plant)).

Drugie to Agility Digit. Robot pracuje u GXO w modelu RaaS od czerwca 2024 r. i przeniósł ponad 100 000 pojemników. Według dokumentów SEC jest wdrożony lub zakontraktowany w **9 zakładach klientów** (Schaeffler, GXO, Toyota Kanada, Mercado Libre) i przepracował **ponad 65 000 h** ([SEC S-4/A](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026105334/ea0297114-05.htm); [Forbes](https://www.forbes.com/sites/johnkoetsier/2026/09/15/agility-launches-digit-5-no-more-safety-cages-300-million-in-orders/)). U Schaefflera w Cheraw jeden Digit pracuje w strefie wygrodzonej ([tracker newmarketpitch](https://newmarketpitch.com/blogs/news/humanoid-robotics-digit-deployment-tracker)). Toyota w Kanadzie podpisała po rocznym pilotażu umowę na 7 robotów ([Embodied Global](https://embodiedglobal.com/en/article/agility-robotics-digit-amazon-toyota-gxo-commercial-deployment-2026)).

**Reszta to pilotaże, szkolenia albo plany:**

- **Apptronik Apollo u Mercedesa** — „jednocyfrowa” liczba robotów w Berlinie-Marienfelde i w Kecskemét na Węgrzech. Startup Fortune wycofał się z wcześniejszej tezy o „pełnych zmianach” ([Humanoids Daily](https://www.humanoidsdaily.com/news/mercedes-apptronik); [Startup Fortune](https://startupfortune.com/apptroniks-apollo-robot-has-left-the-lab-and-is-now-working-factory-shifts-at-mercedes-benz/)).
- **Hyundai i Atlas** — centrum szkoleniowe RMAC działa od września 2026 r. Produkcyjne sekwencjonowanie części zaplanowano na 2028 r., a montaż na 2030 r. ([The Robot Report](https://www.therobotreport.com/boston-dynamics-opens-metaplant-application-center-train-atlas-humanoid-robots/); [Hyundai](https://www.hyundai.com/worldwide/en/newsroom/detail/0000001100)).
- **Tesla Optimus** — Musk przyznał w styczniu 2026 r., że roboty „nie są używane w fabrykach w istotny sposób” ([Electrek](https://electrek.co/2026/01/28/musk-admits-no-optimus-robots-are-doing-useful-work-at-tesla-after-claiming-otherwise/)).
- **Europa:**
  - BMW Lipsk ogłosiło się w lutym 2026 r. pierwszą firmą z humanoidami w produkcji w Niemczech ([BMW Group](https://www.press.bmwgroup.com/poland/article/detail/T0455869PL/bmw-group-jako-pierwsza-wdra%C5%BCa-humanoidalne-roboty-do-produkcji-w-niemczech?language=pl)).
  - Schaeffler podpisał wiążącą umowę z Humanoid (UK) na „czterocyfrową” flotę do 2032 r. Pierwsze roboty trafią do Herzogenaurach i Schweinfurtu jeszcze w 2026 r., walidacja potrwa do połowy 2027 r. ([Humanoid](https://thehumanoid.ai/humanoid-secures-landmark-deal-with-schaeffler-to-deploy-thousands-of-humanoid-robots/)).
  - Humanoid w zakładzie Martur Fompak po raz pierwszy przyjmował zadania z SAP EWM w produkcji na żywo (proof of concept, 30.03.2026) ([The Robot Report](https://www.therobotreport.com/humanoid-completes-live-hmnd-poc-sap-martur-fompak/)).
  - Hexagon miał w kwietniu 2026 r. ok. 10 humanoidów w pilotażach u klientów, m.in. w Pilatusie ([Bloomberg](https://www.bloomberg.com/news/articles/2026-04-01/europe-vies-to-be-humanoid-robot-leader-in-global-tech-race)).
  - **W polskiej fabryce nie znaleziono żadnego pilotażu.**

Duże liczby — 25 000 Atlasów u Hyundaia, „tysiące” u Schaefflera, 1 mln sztuk rocznie u Tesli — to plany mocy produkcyjnych i umowy ramowe uzależnione od kamieni milowych, a nie roboty na hali.

### Producenci i ich możliwości: specyfikacje podobne, dostępność bardzo różna

| Producent (kraj) | Model | Udźwig / praca na baterii | Cena (oryginał → ≈ zł) | Status X 2026 | Dostęp dla integratora w UE |
|---|---|---|---|---|---|
| Agility (USA) | Digit 5 | 22,7 kg; 90 min pracy / 9 min ładowania | RaaS ok. 8 500 USD/mies. + 25 000 USD wdrożenie (ilustracja z S-4) → ok. 33 300 zł/mies. | Wdrożenie (9 zakładów); dostawy Digit 5 od XII 2026 lub 2027 ([Agility](https://www.agilityrobotics.com/content/agility-unveils-digit-5-humanoid-robot-built-for-cooperatively-safe-work-at-scale)) | Sprzedaż bezpośrednia; brak kanału w UE |
| Figure AI (USA) | Figure 03 | 20 kg; 5 h, ładowanie bezprzewodowe | Niepublikowana | Wdrożenie w fazie walidacji (BMW); ponad 350 sztuk dostarczonych do IV 2026, głównie do własnych testów ([Figure](https://www.figure.ai/news/ramping-figure-03-production); [PhysicalAILab](https://physicalailab.io/en/figure-botq-production-fact-check/)) | Bezpośrednio do dużych klientów |
| Boston Dynamics / Hyundai (USA/KR) | Atlas | 50 kg szczytowo / 30 kg ciągle (agregatory); ok. 4 h, sam wymienia baterię | Nieujawniona | Produkcja od I 2026; cały 2026 r. dla Hyundaia i Google DeepMind, kolejni klienci od 2027 ([Boston Dynamics](https://bostondynamics.com/blog/boston-dynamics-unveils-new-atlas-robot-to-revolutionize-industry/)) | Najwcześniej 2027 |
| Apptronik (USA) | Apollo | ok. 25 kg; ok. 4 h, baterie wymienne | Cel ok. 80 000 USD/rok (≈ 313 700 zł) | Pilotaż (Mercedes, GXO, Jabil); zamówienia za ok. 1,00 mld USD oczekiwane od 2027 ([CNBC](https://www.cnbc.com/2026/02/11/apptronik-raises-520-million-at-5-billion-valuation-for-apollo-robot.html)) | Przez programy pilotażowe |
| Tesla (USA) | Optimus | brak danych | brak; 20 000–30 000 USD to długoterminowa aspiracja | Wyłącznie użytek własny; sprzedaż publiczna „do końca 2027”, jeśli robot będzie bezpieczny ([Pillitteri](https://pasqualepillitteri.it/en/news/23022/tesla-optimus-on-sale-2027-price)) | Brak |
| UBTech (CN) | Walker S2 | 15 kg; autonomiczna wymiana baterii w niecałe 3 min | Niepublikowana; z wyników implikowane ok. 641 000 CNY (≈ 359 100 zł) za sztukę | Wdrożenie i płatne pilotaże; 921 sztuk w I poł. 2026 ([BigGo](https://finance.biggo.com/news/cef9b139-8d70-405f-80a3-5583c5254aea)) | Reseller w UE; Rossmann przez integratora Terra Robotics |
| AgiBot (CN) | A2 / G2 / X2 | brak danych | Niepublikowana | Ok. 8 400 sztuk w I poł. 2026; montownia w Serbii od 29.08.2026 ([RAS](https://ras.gov.rs/en/minth-group-launches-europes-first-mass-production-of-humanoid-robots)) | Dystrybutor w UK (Scancom), sojusz z Tekpoint, certyfikaty TÜV Rheinland ([Humanoids Daily](https://www.humanoidsdaily.com/news/agibot-deepens-european-push-at-ifa-2026-with-t-v-rheinland-certification-and-tekpoint-retail-alliance)) |
| Unitree (CN) | G1 / H2 | H2: ok. 7 kg na ramię; ok. 3 h | G1 od 13 500 USD (≈ 52 900 zł), w Polsce ok. 100 000 zł; H2 29 900 USD | Platforma badawcza i pokazowa | Sklepy i dealerzy, w tym x-kom ([Antyweb](https://antyweb.pl/cyberpunk-staje-sie-rzeczywistoscia-roboty-humanoidalne-juz-w-polskim-sklepie)) |
| Kepler (CN) | K2 | 15 kg; do 8 h (deklaracja) | 248 000 CNY (≈ 138 900 zł); w UE ok. 80 000–85 000 EUR | Produkcja ogłoszona IX 2025, brak danych o dostawach ([EnduX](https://endux.co.uk/blog/kepler-k2-industrial-humanoid-review)) | Reseller w UK |
| NEURA (DE) | 4NE1 Gen 3.5 | 20 kg na ramionach | **98 000 EUR (1–19 szt.) / 60 000 EUR (od 20 szt.)** netto → ok. 429 200 / 262 800 zł | Rezerwacje; dostępność „koniec 2026”, termin już raz przesunięty ([NEURA](https://neura-robotics.com/product/4ne1-reservation/)) | Sprzedaż bezpośrednia w UE |
| Humanoid / SKL (UK) | HMND 01 | 15 kg; 4 h (wersja kołowa) | Niepublikowana | Proof of concept w Siemens Erlangen: 60 pojemników/h ([TNW](https://thenextweb.com/news/siemens-nvidia-humanoid-robot-erlangen-factory-trial)). Płatne pilotaże 3–6 mies. od końca 2026, CE dla wersji kołowej w 2027 ([Forbes](https://www.forbes.com/sites/johnkoetsier/2026/07/21/humanoid-raises-152-million-at-135-billion-valuation-europes-newest-robot-unicorn/)) | Aktywnie szuka miejsc na pilotaże |
| Hexagon (SE/CH) | AEON (kołowy) | 3–4 h; wymiana baterii ok. 23–25 s | Niepublikowana | Pilotaż w BMW Lipsk; Schaeffler planuje co najmniej 1 000 sztuk w 7 lat ([Hexagon](https://robotics.hexagon.com/category/news/customer-stories/)) | Europejski dostawca |
| 1X (NO/USA) | NEO (dom) | „25 kg ciągle” (agregator) | 20 000 USD lub 499 USD/mies. (≈ 78 400 zł / 1 960 zł) | Produkcja od 30.04.2026 ([BusinessWire](https://www.businesswire.com/news/home/20251027434628/en/1X-Launches-NEO-The-Robot-Redefining-Life-at-Home)) | Kanał EQT; robot nie jest przeznaczony do ciężkiej pracy w fabryce |

**Wnioski z tabeli.** Parametry są zbieżne: udźwig 15–25 kg, 2–5 h pracy na baterii. Ciągłość pracy zapewnia wymiana baterii (Atlas, Apollo, Walker S2, AEON) albo szybkie ładowanie: Digit 5 przy proporcji 90 min pracy do 9 min ładowania osiąga teoretycznie ok. 91% dostępności. Zachodni liderzy nie publikują cen i obsługują bezpośrednio klientów, którzy często są też ich inwestorami. Realnie kupić i uruchomić w UE w latach 2026–2027 można więc głównie roboty chińskie oraz europejskie (NEURA, Humanoid, Hexagon). W Europie de facto standardem przemysłowym staje się forma kołowa (AEON, HMND 01, „kołowe humanoidy” Schaefflera), co zaciera granicę między humanoidem a mobilnym manipulatorem.

### Co ogranicza humanoidy: bateria, tempo, awaryjność bez danych

**Wydajność.** W 21-dniowym teście UBTech w Zeekr robot osiągał ok. **20% wydajności człowieka** ([People's Daily](https://en.people.cn/n3/2025/0429/c90000-20309191.html)). Sam UBTech w styczniu 2026 r. ocenił Walker S2 na „najwyżej połowę” wydajności pracownika, z celem 80% w 2027 r. ([MERICS](https://merics.org/index%2ephp/en/comment/ubtech-humanoid-robots-future-manufacturing)). Założyciel Unitree przyznał w sierpniu 2026 r., że przy prostym montażu roboty są wolniejsze od ludzi, a każde nowe zadanie wymaga ponownego treningu; kurs akcji spadł wtedy o 16% ([Caixin](https://www.caixinglobal.com/2026-08-20/unitree-shares-decline-as-founder-flags-limits-of-humanoid-robots-102476064.html)).

**Bateria.** Typowe 2–4 h na ładowaniu są „daleko od 8–12 h, których wymagają realne zmiany” ([McKinsey](https://www.mckinsey.com/industries/industrials/our-insights/humanoid-robots-crossing-the-chasm-from-concept-to-commercial-reality); [TrendForce](https://www.trendforce.com/presscenter/news/20260128-12902.html)).

**Koszt.** Koszt jednostkowy musi spaść ze 150 000–500 000 USD dziś do 20 000–50 000 USD, żeby skalowanie miało sens ([McKinsey](https://www.mckinsey.com/industries/industrials/our-insights/humanoid-robots-crossing-the-chasm-from-concept-to-commercial-reality)). Gartner dodaje, że humanoidy kosztują wielokrotnie więcej niż roboty wielozadaniowe, przy niższej przepustowości i dostępności ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-01-21-gartner-predicts-fewer-than-20-companies-will-scale-humanoid-robots-for-manufacturing-and-supply-chain-to-production-stage-by-2028)).

**Brak danych o niezawodności.** Żaden producent nie publikuje średniego czasu między awariami (MTBF), liczby interwencji na godzinę ani udziału teleoperacji. Po dwóch latach głośnych pilotaży samo to milczenie jest sygnałem, że liczby nie są jeszcze korzystne. Raport dowodowy rekomenduje, żeby kupujący żądali w umowie liczby „interwencji człowieka na 1 000 cykli”, z jasną definicją interwencji ([Physical AI Journal](https://www.physicalaijournal.org/post/humanoid-deployment-evidence-report-2026)).

## Humanoid w wynajmie kosztuje dziś 64–99 zł/h, wynajęty cobot 25–35 zł/h

**Jedyna stawka RaaS z dokumentu regulacyjnego.** To ilustracja z formularza S-4 Agility:

- **ok. 8 500 USD miesięcznie** (≈ 33 300 zł) za robota z oprogramowaniem i serwisem,
- plus **25 000 USD opłaty za wdrożenie** (≈ 98 000 zł).

Alternatywą jest zakup: ok. 200 000 USD (≈ 784 000 zł), 20 000 USD za wdrożenie i ok. 36 000 USD rocznie za oprogramowanie i serwis ([The Robot Report](https://www.therobotreport.com/agility-robotics-reports-18m-revenue-ahead-of-humanoid-spac/)). Model zakłada ok. 120 h produktywnej pracy tygodniowo. Krytycy zwracają uwagę, że deklarowany zwrot poniżej roku pomija ok. 15 000 USD kosztów wdrożenia i ok. 15 000 USD rocznie kosztów dostawy na robota ([Humanoids Daily](https://www.humanoidsdaily.com/news/agility-s-numbers-are-in-1-8m-in-sales-a-138m-loss-and-a-backlog-owed-to-an-insider)). Na rynku przemysłowym ceny podaje się za robota miesięcznie, z opłatą wdrożeniową. Nikt poza Formic (coboty) nie rozlicza czysto za godzinę, bo to przerzuca ryzyko wykorzystania na dostawcę.

**Koszt godziny pracy w Polsce, październik 2026** (2 zmiany = 336 h/mies., o ile nie zaznaczono inaczej; obliczenia badaczy na podstawie cytowanych danych):

| Opcja | zł/h | ≈ EUR/h | Podstawa |
|---|---|---|---|
| Pracownik hali produkcyjnej (use case Robotify) | 58 | 13,2 | materiały Automatify |
| Średnia płaca w sektorze przedsiębiorstw, VIII 2026 | ok. 55 brutto; ok. 65–67 z narzutami | — | 9 259,54 zł / ok. 168 h ([Comparic](https://comparic.pl/wzrost-wynagrodzen-w-polsce-hamuje-a-etatow-ubywa-gus-pokazuje-slabszy-rynek-pracy/)); narzut ok. 20% to szacunek |
| Płaca minimalna od 1.01.2027 | 32,30 brutto; ok. 39 z narzutami | — | 4 950 zł/mies. ([pit.pl](https://www.pit.pl/?p=56422)) |
| Use case Robotify: cobot 55 000 EUR, zakup + serwis | 12,31 | — | materiały Automatify |
| Cobot własny, sam koszt | ok. 13–17 | 3–4 | leasing 60 mies. przy 1,99% ([Elmark](https://roboty.elmark.com.pl/leasing)) + 5% rocznie na serwis |
| Cobot w pełnym wynajmie (stawki rynkowe) | ok. 25–35 | 6–8 | 1 950–2 700 EUR/mies.; Formic od 8 USD/h ([Robotics 24/7](https://www.robotics247.com/article/nulogy_formic_partner_provide_software_robotics_service_raas)) |
| Humanoid Agility Digit, RaaS | ok. 99 | 23 | 8 500 USD/mies. |
| Ten sam Digit przy 120 h tygodniowo | ok. 64 | 15 | j.w. |
| Humanoid w przeliczeniu na „godzinę człowieka” | ok. 130–200 | — | dziś ok. 2 humanoidy na wydajność 1 pracownika ([InvestorPlace/JPMorgan](https://investorplace.com/hypergrowthinvesting/2026/08/the-50-trillion-robot-boom-starts-at-10-an-hour/)) |
| Unitree G1 w leasingu operacyjnym (Holandia) | ok. 12,7 | 2,9 | 975 EUR/mies. ([BotLease](https://botlease.nl/prijzen)); wydajność w fabryce niepotwierdzona |
| Humanoid ok. 2030 (prognoza) | poniżej 20 | — | poniżej 5 USD/h przy wysokim wykorzystaniu ([IDTechEx](https://www.idtechex.com/en/research-article/humanoid-robots-show-roi-but-success-depends-on-effective-output/34724)) |

Tabela prowadzi do jednego wniosku: **w 2026 r. z wyraźnym rabatem wobec 58 zł/h da się wynająć tylko cobota.** Przemysłowy humanoid w wynajmie kosztuje tyle co człowiek albo więcej, i to jeszcze przed uwzględnieniem niższej wydajności.

**Krzywa kosztów jest jednak stroma:**

- IDTechEx: średnia cena sprzedaży spada z ok. 114 700 USD (2024) do ok. **37 000 USD w 2030 r.** (−68%), a zwrot inwestycji możliwy jest już dziś w ok. 6 miesięcy przy wysokim wykorzystaniu i ok. 15 miesięcy przy średnim ([IDTechEx](https://www.idtechex.com/en/research-article/humanoid-robots-show-roi-but-success-depends-on-effective-output/34724)).
- BofA: koszt materiałów chińskiego humanoida spada z ok. 35 000 USD (2025) do **poniżej 17 000 USD w 2030 r.**; ponad połowę tego kosztu stanowią aktuatory ([Humanoids Daily](https://www.humanoidsdaily.com/news/the-three-billion-humanoid-milestone-inside-bank-of-america-s-long-term-physical-ai-forecast)).
- Morgan Stanley: robot złożony z chińskich komponentów kosztuje ok. 46 000 USD, a bez nich ok. 130 000 USD ([RobotAIGeek](https://www.robotaigeek.com/ai-robotics/robotics-platforms-ecosystems/humanoid-robot-bom-teardown-china-cost-advantage-2026)).
- Unitree: średnia cena jednostkowa spadła o **72% w dwa lata**, z 593 400 CNY (2023) do 166 400 CNY (2025) ([humanoid.guide](https://humanoid.guide/china-humanoid-prices-plunge-as-unitree-cites-72-drop/)).

Ta deflacja działa w dwie strony. Poprawia zwrot u klienta, ale niszczy wartość rezydualną floty. Chińskie dzienne stawki wynajmu humanoidów na eventy spadły z ponad 10 000 CNY w 2025 r. do poniżej 1 000 CNY w październiku 2026 r., a w ogłoszeniach pojawia się nawet 289 CNY ([GSMGoTech](https://www.gsmgotech.com/2026/10/humanoid-robot-rental-prices-crash-from.html); [CNN](https://edition.cnn.com/2026/06/30/tech/china-humanoid-robot-ai-rental-intl-hnk-dst)). Wynajem bez produktywnego zadania staje się towarem.

**Europejski rynek wynajmu humanoidów to dziś niemal wyłącznie klasa Unitree G1 do badań i eventów.** BotLease oferuje G1 w leasingu operacyjnym za 975–1 295 EUR miesięcznie, z ubezpieczeniem, serwisem, robotem zastępczym w kilka dni i czterotygodniowym pilotażem za 1 695 EUR ([BotLease](https://botlease.nl/prijzen)). Bipedal.de wynajmuje G1 za 3 500 EUR tygodniowo ([bipedal.de](https://www.bipedal.de/humanoide-roboter-mieten-flotte-erweiterung_1)). Niemieccy doradcy spodziewają się pierwszych seryjnych ofert wynajmu przemysłowego dopiero pod koniec 2026 r. ([roboter-spezialist.de](https://roboter-spezialist.de/roboter-mieten-oder-kaufen/)).

**Coboty: dwa kształty cen.** Na rynku RaaS cobotów spotyka się:

- stawkę godzinową — Formic od 8 USD/h, płatne wyłącznie za czas pracy z gwarancją dostępności ([Robotics 24/7](https://www.robotics247.com/article/nulogy_formic_partner_provide_software_robotics_service_raas));
- stałą opłatę miesięczną — Rapid Robotics ok. 2 100 USD przy minimum 3 miesiącach ([Articsledge](https://www.articsledge.com/post/robots-as-a-service-raas)); RobCo „kilka tysięcy dolarów miesięcznie” ([Machine Design](https://www.machinedesign.com/markets/robotics/video/55405168/robco-qa-robco-on-robotics-as-a-service-and-the-move-toward-physical-ai)); polskie poradniki 5 000–15 000 zł miesięcznie ([Polski Przemysł](https://polskiprzemysl.com.pl/wynajem-robotow/)).

Sam leasing ramienia jest wielokrotnie tańszy. Elmark, dystrybutor UR w Polsce, pokazuje cobota za 40 000 EUR za 1 100 EUR miesięcznie przy 0% na 36 miesięcy albo za ok. 693 EUR przy 1,99% na 60 miesięcy, z 1% wartości końcowej ([Elmark](https://roboty.elmark.com.pl/leasing)). Różnica między ratą leasingu a ceną RaaS to marża dostawcy: na integrację, serwis, ubezpieczenie, przestoje i przenoszenie robota.

**Najlepiej udokumentowany model floty ma Formic.** Spółka pozyskała ok. 60,00 mln USD kapitału własnego na oprogramowanie i sprzedaż oraz ok. 250,00 mln USD finansowania pod same roboty. Pięcioletnie umowy z klientami zastawia w bankach, a raty godzinowe obsługują dług ([startupfundraising.com](https://startupfundraising.com/library/articles/saman-farid); [Not Boring](https://www.notboring.co/p/formic-automating-abundance)). Raportuje 97% odnowień i ok. 99,43% dostępności — to deklaracje spółki ([automation.com](https://www.automation.com/article/formic-raises-27-4-million-automation-manufacturer)). Ostrzeżenie daje Locus Robotics: model z flotą na własnym bilansie „wymaga finansowania rosnącej bazy sprzętu kapitałem odzyskiwanym w abonamentach przez wiele lat” ([Autonomy Bridge](https://autonomybridge.com/insights/how-robotics-pricing-models-determine-commercial-viability)).

## Od 20 stycznia 2027 integrator składający stanowisko odpowiada jak producent

**Norm dla humanoidów jeszcze nie ma.** ISO 25785-1 dla dynamicznie stabilnych robotów przemysłowych (nożnych i balansujących na kołach) jest na etapie projektu komitetowego (ISO/CD) i nie ma daty publikacji. Część 1 dotyczy robota, a integrację aplikacji obejmie osobna część 2 ([ISO](https://www.iso.org/standard/91469.html); [i-SCOOP](https://www.i-scoop.eu/iso-25785-1-explained-and-what-it-means-for-humanoid-robot-safety/)). Amerykańskie normy dla robotów przemysłowych i mobilnych według samego A3 nie obejmują humanoidów ([A3](https://www.automate.org/robotics/blogs/safety-by-design-how-humanoid-robots-must-evolve-to-depart-the-walled-garden)).

Obowiązują opublikowane w 2025 r. ISO 10218-1/-2. Wchłonęły dawną ISO/TS 15066 i traktują współpracę jako cechę aplikacji, a nie robota ([A3 FAQ](https://www.automate.org/robotics/blogs/updated-iso-10218-faq); [EVS](https://www.evsint.com/ro/collaborative-robot-safety-standards-2026-iso-10218-2025-ts-15066/)).

**Kluczowa luka techniczna to „fail-passive gap”.** Klasyczne bezpieczne zatrzymanie, czyli odcięcie zasilania, sprawia, że balansujący robot upada. Upadek 60–90 kg maszyny sam jest zagrożeniem, a autorzy studium wykonalności nie deklarują zgodności z najwyższymi poziomami bezpieczeństwa (PL e / SIL 3) dla całego łańcucha ([arXiv 2608.02809](https://arxiv.org/pdf/2608.02809); [Synapticon](https://www.synapticon.com/en/newslist/whitepaper-safety-fur-humanoide-roboter)). Żaden humanoid nie ma publicznej certyfikacji do pracy obok ludzi. Digit 5 dopiero „przyspiesza drogę do certyfikacji” z NVIDIA Halos ([Robotics 24/7](https://www.robotics247.com/article/agility-robotics-debuts-digit-5-humanoid-robot-for-cooperatively-safe-work-at-scale)). W praktyce wdrożenia w latach 2026–2028 to strefy wydzielone albo monitorowane czujnikami bezpieczeństwa. Bezpośrednią współpracę z człowiekiem warto zostawić cobotom, bo dla nich normy są dojrzałe.

**Prawo UE** — poniżej najważniejsze akty i terminy:

| Akt | Kiedy | Co oznacza dla integratora |
|---|---|---|
| Rozporządzenie maszynowe (UE) 2023/1230 | od **20.01.2027**, bez okresu przejściowego ([Baker McKenzie](https://www.globalcompliancenews.com/wp-content/uploads/sites/43/2024/12/Baker-McKenzie-Machinery-Regulation.pdf); [TÜV NORD](https://www.tuev-nord.de/en/services/audit-and-expertise/product-certification/machinery-regulation/)) | Kto istotnie modyfikuje maszynę fizycznie **lub cyfrowo** w sposób nieprzewidziany przez producenta, staje się producentem: ocena zgodności, deklaracja, znak CE (art. 3 pkt 16 i art. 18) ([Unchained Robotics](https://blog.unchainedrobotics.de/en/eu-machinery-regulation-2027-robot-cells); [Noerr](https://www.noerr.com/en/insights/regulation-eu-2023-1230-on-machinery-a-legal-regime-for-machinery-in-europe)). Komponenty bezpieczeństwa uczące się przez uczenie maszynowe wymagają jednostki notyfikowanej. Dochodzą wymogi ochrony przed „uszkodzeniem” oprogramowania, czyli cyberbezpieczeństwo (zał. III 1.1.9) ([Compliance & Risks](https://www.complianceandrisks.com/?p=20887)). |
| AI Act po omnibusie, rozp. (UE) 2026/1744 | w mocy od 27.07.2026; AI w produktach regulowanych od **2.08.2028**; systemy z załącznika III od **2.12.2027** ([Orrick](https://www.orrick.com/en/Insights/2026/07/EU-AI-Act-Update-Digital-Omnibus-Finalizes-8-Compliance-Changes)) | Maszyny przeszły do sekcji B załącznika I, więc wymogi AI dla humanoida przyjdą aktami delegowanymi do rozporządzenia maszynowego ([Mishcon de Reya](https://www.mishcon.com/news/eu-ai-act-simplified-unpacking-the-ai-omnibus-agreement-of-may-2026)). Oprogramowanie, które przydziela zadania pracownikom albo ich ocenia, może być systemem wysokiego ryzyka (obszar zatrudnienia). |
| Dyrektywa o odpowiedzialności za produkt (UE) 2024/2853 | produkty wprowadzone po **8.12.2026** ([Standardy Prawa](https://standardyprawa.pl/akt/629)) | Obejmuje oprogramowanie i AI. Kto istotnie modyfikuje produkt poza kontrolą producenta, odpowiada jak producent ([Rödl & Partner](https://roedl.com/insights/italien/new-product-liability-directive-innovations-ai)). Polski projekt zmian w Kodeksie cywilnym istnieje, etap prac niepotwierdzony ([gov.pl](https://www.gov.pl/attachment/18083081-4ec1-4138-818a-0d4ac4f1c7d2)). |
| Ustawa o systemach sztucznej inteligencji, Dz.U. 2026 poz. 1003 | daty wejścia w życie rozbieżne (sierpień lub 28.10.2026) | Powołuje KRiBSI jako organ nadzoru rynku i daje podstawę piaskownicy regulacyjnej ([ELI](https://eli.gov.pl/api/acts/DU/2026/1003/text/T/D20261003L.pdf)). |
| Kodeks pracy, art. 22² + RODO | obowiązuje | Kamery robota nagrywają pracowników. Monitoring dopuszczalny tylko dla bezpieczeństwa, mienia, kontroli produkcji lub tajemnicy — nie do oceny wydajności ludzi ([UODO](https://www.zut.edu.pl/fileadmin/pliki/2021/iod/1905/UODO-Monitoring_w_miejscu_pracy__1_.pdf)). |
| UDT | obowiązuje | Kryterium dozoru technicznego to mechaniczny napęd podnoszenia. Humanoid z pojemnikiem prawdopodobnie mu nie podlega, autonomiczne wózki z podnoszeniem we flocie mieszanej — tak ([UDT](https://www.udt.gov.pl/images/biuro-prasowe/files/pdf/INSPEKTOR_1_2023_Autonomiczne_wozki_jezdniowe_WCAG.pdf)). |

**Praktyczne konsekwencje dla Robotify:**

1. **Rola zależy od tego, co Robotify robi z robotem.** Robot producenta uruchomiony zgodnie z instrukcją czyni Robotify co najwyżej dystrybutorem albo importerem. Złożenie stanowiska (humanoid + przenośniki + coboty + system bezpieczeństwa + oprogramowanie) czyni Robotify producentem tego zestawu, z pełną odpowiedzialnością cywilną za produkty z 2027 r.
2. **Każda aktualizacja modeli AI na flocie może być „cyfrową” istotną modyfikacją.** Umowy z producentami muszą więc określać zakres aktualizacji przewidzianych w instrukcji, bo modyfikacja przewidziana przez producenta nie jest istotna.
3. **Funkcje bezpieczeństwa najlepiej oprzeć na klasycznych, certyfikowanych czujnikach i sterownikach**, a AI zostawić do wykonywania zadań. Wtedy ścieżką oceny zgodności zostaje samoocena, bez jednostki notyfikowanej.

## Założenia właściciela: rok 2028 się broni, „wyłącznie humanoidy” — nie

Polecenie 38 zawiera trzy tezy o terminach:

1. humanoidy zdolne do realnej pracy w fabrykach za ok. dwa lata, czyli ok. 2028 r.;
2. dwa kolejne lata (do ok. 2030 r.) współpracy cobotów z humanoidami;
3. potem wyłącznie humanoidy.

Tabela zestawia każdą tezę ze źródłami i proponuje sformułowanie, które obroni się przed inwestorem znającym raporty Gartnera, IFR i Interact.

| Teza | Co potwierdzają źródła | Czego nie potwierdzają | Ocena | Sformułowanie bezpieczne dla inwestora |
|---|---|---|---|---|
| 1. Realna praca w fabrykach ok. 2028 | Płatna praca w wąskich zadaniach trwa już od 2024–2025 (Agility: 65 000 h; Figure w BMW: 11 miesięcy). Hyundai planuje sekwencjonowanie Atlasem **od 2028** ([Axios](https://www.axios.com/2026/01/05/hyundai-humanoid-robots-boston-dynamics)). Boston Dynamics i Apptronik otwierają sprzedaż w 2027, Digit 5 trafia do klientów od XII 2026 lub 2027, Tesla zapowiada sprzedaż do końca 2027. ISO 25785-1 oczekiwana w 2026–2027. | Gartner: do 2028 r. mniej niż 20 firm na świecie wdroży humanoidy produkcyjnie w przemyśle i łańcuchu dostaw ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-01-21-gartner-predicts-fewer-than-20-companies-will-scale-humanoid-robots-for-manufacturing-and-supply-chain-to-production-stage-by-2028)). Wydajność 20–50% człowieka; brak danych o awaryjności; brak dowodów ze średnich zakładów; pilotaż trwa 12–18 miesięcy ([AJOT/IDTechEx](https://www.ajot.com/news/fast-growth-of-humanoid-robots-in-the-automotive-and-logistics-industry)). | **Potwierdzone częściowo** — dla wąskich zadań logistyki wewnętrznej, w strefach wydzielonych, u klientów z wysokim wykorzystaniem | „Od 2028 r. humanoidy wykonują u klientów Robotify płatną pracę w zadaniach, w których już dziś pracują u liderów: przenoszenie pojemników, sekwencjonowanie i kompletacja części, zasilanie stanowisk.” |
| 2. Faza mieszana do ok. 2030 | Każde udokumentowane wdrożenie jest hybrydą: Digit przenosi pojemniki między cobotami a przenośnikami ([The Robot Report](https://www.therobotreport.com/agility-robotics-digit-humanoid-lands-first-official-job/)), w BMW humanoid ładuje przyrząd, a spawają roboty przemysłowe. Hyundai planuje montaż Atlasem dopiero od 2030. | Interact widzi punkt przegięcia ok. 2032 ([Interact](https://interactanalysis.com/despite-hype-and-large-addressable-market-humanoid-robot-adoption-will-remain-low/)); Morgan Stanley — powolną adopcję do połowy lat 30. ([Morgan Stanley](https://www.morganstanley.com/insights/articles/humanoid-robot-market-5-trillion-by-2050)); Schaeffler skaluje floty do 2032–2035. | **Faza trafna, czas zbyt krótki** — raczej 2028–2032 i dłużej | „W latach 2028–2032 coboty i humanoidy pracują razem: coboty na stałych, precyzyjnych stanowiskach, humanoidy w przepływie materiału między nimi.” |
| 3. Potem wyłącznie humanoidy | Teza „jedna platforma, wiele zawodów” ma dowody w pilotażach. W scenariuszu Goldman Sachs humanoidy ok. 2030 r. przewyższają liczebnie roczne instalacje robotów przemysłowych. | IFR: humanoidy „nie zastąpią obecnych typów robotów” ([IFR](https://ifr.org/ifr-press-releases/news/new-ifr-position-paper-on-humanoid-robots-published)). Gartner zaleca roboty wielozadaniowe; KUKA uważa formę humanoidalną za zbędną w większości zastosowań ([DirectIndustry](https://emag.directindustry.com/2026/04/02/humanoid-robots-hype-or-the-future-of-automation-insights-from-logimat-2026/)); Brooks przewiduje roboty na kołach ([Boston Globe](https://www.bostonglobe.com/2026/02/24/business/rodney-brooks-ai-robotics-superintelligence/)). Cobot jest dziś 2–4 razy tańszy na godzinę. | **Niepotwierdzone przez żadne źródło** | „Od ok. 2030 r. nowe wdrożenia Robotify projektujemy jako humanoid-first. Coboty zostają tam, gdzie są tańsze i dokładniejsze, a obie formy obsługuje jedna warstwa oprogramowania Robotify. Docelowo, w horyzoncie 2040–2050, humanoidy mogą przejąć większość pracy fizycznej.” |

**Dlaczego to ważne.** Teza 3 w obecnej formie jest dla inwestora czerwoną flagą z dwóch powodów. Przeczy jej każde neutralne źródło. Przeczy jej też ekonomika samego Robotify: wynajęty cobot za 25–35 zł/h nie zniknie z precyzyjnego stanowiska tylko dlatego, że pojawi się droższy i wolniejszy humanoid. Wersja „humanoid-first” oddaje ten sam kierunek strategiczny, a nie da się jej obalić jednym cytatem z IFR. Kolejność sektorów jest wśród analityków niesporna: najpierw fabryki i logistyka (2026–2030), potem usługi częściowo ustrukturyzowane, takie jak handel nocą, lotniska i logistyka szpitalna (2028–2032), na końcu domy, opieka bezpośrednia i rzemiosło budowlane (po 2032–2035).

**Terminy właściciela trzeba też zestawić z budżetem.** Robotify startuje komercyjnie w 2028 r. (w 2027 r. ma tylko ok. −150 000 zł EBITDA). „Wynajmowanie cobotów do czasu, aż humanoidy dojrzeją” nie ma więc przed 2028 r. osobnego okresu. Faza cobotów i pierwszych humanoidów zaczyna się w tym samym roku. To dobra wiadomość, bo kalendarz Robotify zgadza się z rynkiem. Klient podpisany w 2028 r. zacznie pilotaż humanoida w 2028 r., a produktywną flotę będzie miał realnie w 2029 r., bo Figure potrzebował ok. 10 miesięcy do pełnych zmian.

**Proponowany rytm:**

- **2027** — przygotowanie: partnerstwa z producentami, laboratorium, pierwsze listy intencyjne;
- **2028–2030** — coboty jako silnik przychodu, pierwsze płatne pilotaże i małe floty humanoidów;
- **od 2030–2032** — humanoid-first w nowych wdrożeniach.

**Przejścia między fazami warto oprzeć na mierzalnych bramkach, a nie na datach.** Takie bramki inwestor może śledzić sam:

- publikacja ISO 25785-1 albo niezależna certyfikacja robota do pracy w strefie dzielonej;
- dane producenta o interwencjach na 1 000 cykli i o MTBF, gwarantowane w umowie;
- wydajność co najmniej 50% człowieka w zadaniu klienta;
- cena przemysłowego humanoida na poziomie ok. 60 000 EUR — dziś to cena flotowa NEURA;
- koszt godziny „ekwiwalentu człowieka” poniżej alternatywy (człowiek albo cobot z AMR) przy wykorzystaniu, jakie realnie ma klient.

## Europejski nadzór i dane: architektura, którą da się udowodnić

Polecenie 41 („roboty z USA i Chin, ale oprogramowanie i nadzór europejskie, dane w Europie, nie w Chinach”) jest technicznie wykonalne, prawnie coraz bardziej konieczne i rynkowo wyróżniające. Pod jednym warunkiem: zostanie podane jako architektura z dowodem, a nie jako obietnica.

### Co wiadomo o przepływie danych z robotów

Jedynym producentem z publiczną historią poważnych, udokumentowanych luk jest Unitree:

- **Marzec 2025** — w robocie Go1 znaleziono ukrytą usługę zdalnego dostępu „CloudSail” (CVE-2025-2894). Pozwalała ona przejąć sterowanie i obraz z kamer każdemu, kto ma właściwy klucz ([takeonme.org](https://takeonme.org/cves/cve-2025-2894)).
- **Wrzesień 2025** — „UniPwn”: uzyskanie uprawnień administratora (root) przez Bluetooth, bez parowania, z ok. 30 m, w G1, H1, Go2 i B2. Atak może się szerzyć z robota na robota ([Interesting Engineering](https://interestingengineering.com/innovation/security-flaw-unitree-humanoids-china); [INCIBE-CERT](https://www.incibe.es/en/incibe-cert/early-warning/vulnerabilities/cve-2025-35027)).
- **Wrzesień 2025** — Alias Robotics udokumentowała połączenia MQTT z G1 do serwerów 43.175.228.18 i 43.175.229.18 (port 17883) z danymi z czujników ([arXiv 2509.14139](https://arxiv.org/abs/2509.14139)). Unitree tłumaczy to monitoringiem stanu robota „po autoryzacji użytkownika” ([Humanoids Daily](https://www.humanoidsdaily.com/news/unitree-robots-under-scrutiny-for-security-flaws-and-unsolicited-data-transmission)). Alias twierdzi, że telemetria nadal płynie ([humanoid.guide](https://humanoid.guide/unitree-exhibits-g1-at-ifa-amid-unresolved-security-questions/)).
- **Sierpień 2026** — dwa kolejne łańcuchy dające root w G1 EDU (CVE-2026-76639 i 76640), w tym przez usługę AI `chat_go` ([The Hacker News](https://thehackernews.com/2026/08/two-unitree-g1-edu-humanoid-robot-flaws.html); [Security Affairs](https://securityaffairs.com/198085/hacking/hack-one-robot-reach-the-next-unitree-g1-security-flaws.html)).

Dla AgiBot, UBTech, Fourier i Galbot nie znaleziono badań bezpieczeństwa. To brak danych, a nie dowód bezpieczeństwa. Wzorzec jest ważniejszy niż pojedyncze CVE: po każdej poprawce pojawiał się nowy wektor w kanale konfiguracji Bluetooth albo w usługach chmurowych. Chiński robot klasy konsumenckiej lub edukacyjnej trzeba więc traktować jako **niezaufany na poziomie firmware'u**.

**Reakcje państw:**

- **USA, 28.07.2026** — FCC dopisała do Covered List nowe zagraniczne humanoidy i roboty czworonożne. Już autoryzowane modele i zakupione roboty pozostają legalne ([ASIS](https://www.asisonline.org/security-management-magazine/latest-news/today-in-security/2026/august/FCC-Bans-Humanoid-Quadruped-Robots/); [CNN](https://www.cnn.com/2026/07/29/tech/us-china-robot-ban-intl-hnk)). Unitree trafiło na listę 1260H Pentagonu ([RobotToday](https://robottoday.com/article/us-restrictions-on-chinese-humanoid-robots-the-full-map)).
- **UE** — nie ma zakazu ze względu na pochodzenie robota ([machine.news](https://www.machine.news/will-americas-humanoid-robot-crackdown-help-chinese-machines-conquer-europe/)). Projekt nowelizacji aktu o cyberbezpieczeństwie (CSA2, styczeń 2026) tworzy jednak mechanizm „dostawców wysokiego ryzyka” dla 18 sektorów krytycznych ([Industrial Cyber](https://industrialcyber.co/regulation-standards-and-compliance/european-commission-proposes-revised-cybersecurity-act-to-boost-eu-cyber-resilience-secure-ict-supply-chains/)).
- **Polska** — znowelizowana ustawa o KSC pozwala ministrowi cyfryzacji uznać dostawcę za dostawcę wysokiego ryzyka. Podmioty objęte ustawą muszą wtedy wycofać jego produkty w ciągu do 7 lat, bez odszkodowania. 6.08.2026 r. ministerstwo potwierdziło, że takiej listy jeszcze nie ma ([gov.pl](https://www.gov.pl/web/cyfryzacja/nowelizacja-ustawy-o-krajowym-systemie-cyberbezpieczenstwa-ksc---procedura-dot-listy-dostawcow-wysokiego-ryzyka); [Osborne Clarke](https://www.osborneclarke.com/pl/insights/dostawcy-wysokiego-ryzyka-dwr-w-ustawie-o-krajowym-systemie-cyberbezpieczenstwa)).
- **Incydent w Marynarce Wojennej (sierpień 2026)** — „Edward Warchocki”, Unitree G1 z polskim oprogramowaniem, wystąpił w filmie promocyjnym w porcie w Świnoujściu. Wiceminister Tomczyk ocenił, że „zabrakło ostrożności”, a nagranie usunięto w kilka godzin ([RMF24](https://www.rmf24.pl/fakty/polityka/news-wiceszefowa-mon-ws-chinskiego-robota-w-jednostce-wojskowej-f,nIdn,1013545); [Spider's Web](https://spidersweb.pl/2026/08/robot-warchocki-swinoujscie-port-marynarka.html)). W Polsce klienci z obronności, administracji i infrastruktury krytycznej są dziś reputacyjnie niedostępni dla chińskich humanoidów, bez względu na zabezpieczenia techniczne.

### Otwartość producentów wyznacza, ile nadzoru Robotify może przejąć

„Otwarte SDK” i „dane nie opuszczają zakładu” to różne właściwości:

- **Unitree** ma otwarte SDK2 na CycloneDDS z natywnymi komunikatami ROS 2 i sterowaniem pojedynczymi stawami, ale zamknięty firmware i usługi chmurowe — dokładnie tam, gdzie siedziały luki ([GitHub unitree_ros2](https://github.com/unitreerobotics/unitree_ros2)).
- **Boston Dynamics** jako jedyny zachodni producent oferuje zarządzanie flotą u klienta (Orbit na urządzeniu Site Hub lub jako maszyna wirtualna), z kluczami szyfrującymi po stronie klienta ([Boston Dynamics](https://bostondynamics.com/wp-content/uploads/2024/03/spot-and-site-hub-security-white-paper.pdf)).
- **Agility Arc** jest udokumentowany wyłącznie jako chmura SaaS ([Agility](https://agilityrobotics.com/news/agility-robotics-brings-operational-visibility-to-deployment-of-digit-fleets-with-the-launch-of-agility-arc)).
- **Figure** nie publikuje informacji o telemetrii.
- **NEURA** buduje europejską warstwę Neuraverse i kupiła od Bosch Rexroth system zarządzania flotą ACTIVE Fleet Manager ([Logistik Heute](https://logistik-heute.de/news/robotik-neura-robotics-uebernimmt-fts-active-shuttle-von-bosch-rexroth-278675.html)).

Dla sztucznej inteligencji istnieją modele, które mogą działać lokalnie, na komputerze integratora:

- NVIDIA GR00T N1.7 na Jetson Thor, z otwartymi wagami ([Jetson AI Lab](https://www.jetson-ai-lab.com/tutorials/groot_n17_on_thor/)); licencja Apache 2.0 według ActuIA — do potwierdzenia;
- openpi (π0/π0.5) od Physical Intelligence, repozytorium na Apache 2.0, ale z niejasną licencją części wag ([aiwiki](https://aiwiki.ai/wiki/openpi); [Hugging Face](https://huggingface.co/lerobot/pi05_base/commit/975848a74c17ca1f646570aec93c761941f20be2));
- Gemini Robotics On-Device, dostępne tylko dla wybranych testerów ([Google DeepMind](https://deepmind.google/discover/blog/gemini-robotics-on-device-brings-ai-to-local-robotic-devices/)).

Otwarte modele uniezależniają dane od producenta robota. Nadal wiążą jednak z amerykańskim krzemem, więc to suwerenność danych, a nie pełna suwerenność technologiczna.

### Architektura referencyjna: robot jako niezaufane urządzenie OT

| Warstwa | Co to jest | Kto kontroluje | Kluczowe zabezpieczenia |
|---|---|---|---|
| L0 — ciało robota | Sprzęt i firmware producenta (USA, Chiny, UE) | Producent | Wersje deweloperskie (EDU) tam, gdzie to możliwe. Zbędne radia wyłączone lub usunięte (Bluetooth był wektorem root). Agenci chmury producenta wyłączeni albo zablokowani w sieci. |
| L1 — mózg brzegowy Robotify | Komputer integratora na robocie lub przy nim, z aplikacją ROS 2/DDS i otwartym modelem AI dostrojonym na danych klienta | Robotify | Robot producenta obsługiwany tylko przez SDK na zamkniętym łączu lokalnym. Niezależny łańcuch bezpieczeństwa (wyłącznik awaryjny, sterownik bezpieczeństwa). |
| L2 — serwer w zakładzie klienta | Zarządzanie flotą i orkiestracja, lokalny magazyn danych, anonimizacja obrazu | Robotify / klient | Kwarantanna aktualizacji: pobranie, sprawdzenie sumy kontrolnej, test w laboratorium, lokalna dystrybucja. Lokalna tożsamość i dzienniki audytowe. |
| L3 — chmura w UE / PL | Analityka floty, trening modeli, kopie zapasowe, portal klienta | Robotify | Dostawcy z siedzibą w UE lub PL (np. Beyond.pl, Operator Chmury Krajowej) ([IT Europa](https://www.iteuropa.com/news/polish-cloud-and-colo-provider-beyondpl-expands-data-centre); [PIE](https://pie.net.pl/wp-content/uploads/2026/06/Tygodnik-PIE_23-2026.pdf)). AWS European Sovereign Cloud (od 15.01.2026) tylko tam, gdzie klient akceptuje amerykańską spółkę-matkę ([Intelligent CIO](https://www.intelligentcio.com/eu/2026/01/15/aws-launches-european-sovereign-cloud-expands-footprint-across-eu/)). |
| L4 — centrum operacyjne w Polsce | Nadzór i awaryjna teleoperacja przez personel w UE | Robotify | Domyślnie brak zdalnego dostępu producenta. Wsparcie producenta tylko w sesjach pośredniczonych przez Robotify, ograniczonych czasowo i logowanych. |
| Sieć | Strefy i kanały według IEC 62443 ([Fabrico](https://www.fabrico.io/blog/iec-62443-zones-conduits/)) | Robotify / IT klienta | Domyślne blokowanie ruchu wychodzącego; dopuszczony tylko serwer L2. Blokada znanych punktów końcowych. Ciągły monitoring ruchu z alarmem przy każdym adresie spoza UE. |
| Zapewnienie | Testy penetracyjne każdego modelu w laboratorium UE (Alias Robotics badała G1 ([Alias Robotics](https://aliasrobotics.com/case-studies/case-study-humanoid-robot-g1.php))), SBOM od dostawców, proces obsługi podatności zgodny z CRA, okresowy audyt | Robotify + audytor | Raporty i panel monitoringu ruchu jako dowód dla klienta i inwestora |

Zablokowanie chmury producenta wyłączy część funkcji: aplikacje, czat głosowy, zdalną diagnostykę. Robotify musi je zastąpić własnymi usługami. To dodatkowy koszt inżynierski, ale też źródło wartości dodanej i lojalności klienta, bo warstwa oprogramowania Robotify przetrwa każdą zmianę dostawcy robota.

### Polityka dostawców w trzech klasach

| Klasa | Kryterium | Przykłady | Dozwolone miejsca pracy |
|---|---|---|---|
| A — z suwerennością | Otwarte SDK niskiego poziomu lub zarządzanie flotą u klienta; pełna praca na brzegu Robotify bez chmury producenta | Boston Dynamics z Site Hub; roboty w wersji deweloperskiej pod stosem Robotify | Wszystkie zakłady komercyjne po teście penetracyjnym |
| B — do odizolowania | Zamknięty firmware z udokumentowaną komunikacją zewnętrzną; praca offline za strefą blokującą ruch wychodzący, z kwarantanną aktualizacji | Unitree i inni producenci chińscy | Standardowe zakłady przemysłowe i logistyczne. **Bez obronności, administracji, podmiotów kluczowych KSC i zakładów z wrażliwym know-how**, chyba że klient świadomie zaakceptuje ryzyko |
| C — zależne od chmury | Chmura producenta obowiązkowa do orkiestracji lub AI | Agility Arc, prawdopodobnie Figure, dopóki nie zaoferują wariantu w UE lub u klienta | Tylko z umownym hostingiem w UE i audytem przepływu danych |

### Przepisy, które i tak wymuszają dane w Europie

**RODO.** Kamery humanoida przetwarzają dane osobowe pracowników. Każdy strumień telemetrii do Chin to transfer do państwa bez decyzji o adekwatności. Irlandzki organ nadzorczy ukarał TikTok kwotą 530,00 mln EUR m.in. za brak oceny dostępu chińskich służb do danych i nakazał zawieszenie transferów ([The Hacker News](https://thehackernews.com/2025/05/tiktok-slammed-with-530-million-gdpr.html)). Najprostsza zgodna pozycja to techniczny brak transferu — czyli dokładnie polecenie 41.

**Data Act.** Od 12.09.2026 r. produkty wprowadzane na rynek muszą udostępniać użytkownikowi dane „w fazie projektowania” ([DIHK](https://www.dihk.de/en/data-act-next-level-as-of-12-september-2026-174716)). Europejska, eksportowalna warstwa danych jest więc wymogiem i jednocześnie argumentem sprzedażowym.

**KSC (NIS2).** Ustawa obowiązuje od 3.04.2026 r. Podmioty musiały się zarejestrować do 3.10.2026 r., a pełny system zarządzania bezpieczeństwem informacji muszą mieć do 3.04.2027 r. ([LegalGeek](https://legalgeek.pl/en/blog/nis2-ksc-2026-wprowadzenie/)). Klienci Robotify z 18 sektorów przeniosą wymogi łańcucha dostaw na Robotify.

**Cyber Resilience Act.** Obowiązek zgłaszania aktywnie wykorzystywanych podatności działa od 11.09.2026 r., pełne stosowanie od 11.12.2027 r. ([Reed Smith](https://www.reedsmith.com/our-insights/blogs/viewpoints/102mnj2/eu-cybersecurity-regulatory-update-for-2026-and-beyond/)). Oprogramowanie floty Robotify prawdopodobnie będzie „produktem z elementami cyfrowymi”, więc zespół reagowania na podatności (PSIRT) jest potrzebny od pierwszego dnia.

Ryzyko listy dostawców wysokiego ryzyka z KSC to w modelu wynajmu **ryzyko aktywów osieroconych na bilansie Robotify**. Przemawia to za dywersyfikacją floty, krótką amortyzacją chińskich jednostek i klauzulą o prawie do zamiany modelu.

### Sformułowania bezpieczne dla inwestora

| Zamiast | Mówimy | Dlaczego |
|---|---|---|
| „Dane nigdy nie trafiają do Chin” | „Nasza architektura nie daje robotowi żadnej ścieżki sieciowej do adresów spoza UE. Sprawdzamy to ciągłym monitoringiem ruchu, a niezależny audytor to potwierdza.” | Dla zamkniętego firmware'u pierwszego zdania nie da się udowodnić, drugie można pokazać na panelu |
| „Chińskie roboty szpiegują” | „Udokumentowano luki (CVE) i wysyłanie telemetrii do serwerów w Chinach, dlatego każdy robot jest u nas niezaufanym urządzeniem OT” | Intencja producenta nie jest udowodniona |
| „Europejskie oprogramowanie na każdym robocie” | „Europejska warstwa nadzoru, orkiestracji i danych nad robotami z USA, Chin i UE; tam, gdzie pozwala SDK, także własna AI na brzegu” | Firmware zostaje u producenta |
| „Robot certyfikowany do pracy obok ludzi” | „Stanowiska oceniamy według ISO 12100 i ISO 10218-2:2025, funkcje bezpieczeństwa realizujemy certyfikowanymi czujnikami, a ISO 25785-1 śledzimy od etapu projektu” | Norma humanoidalna nie jest opublikowana |
| „Spełniamy AI Act” | „Przygotowujemy się do rozporządzenia maszynowego (od 20.01.2027) i AI Act dla maszyn (od 2.08.2028)” | Wymogi szczegółowe przyjdą aktami delegowanymi |

## Polska i CEE: zero wdrożeń humanoidów i połowa gęstości robotów Czech

**Rynek pracy schłodził się w 2026 r., ale nacisk strukturalny trwa.**

- **Wakaty.** Na koniec II kw. 2026 r. przetwórstwo miało najwięcej wakatów spośród sektorów: **24 700**. Głównie brakowało robotników wykwalifikowanych (38,3%) i operatorów maszyn (28,6%) ([podatki.biz/GUS](https://www.podatki.biz/artykuly/gus-niewielki-spadek-liczby-wakatow-w-ujeciu-kwartalnym_16_63601.htm)).
- **Płace.** W sierpniu 2026 r. przeciętna płaca w sektorze przedsiębiorstw wyniosła 9 259,54 zł (+5,6% r/r), a zatrudnienie spadło o 0,8% r/r ([Comparic](https://comparic.pl/wzrost-wynagrodzen-w-polsce-hamuje-a-etatow-ubywa-gus-pokazuje-slabszy-rynek-pracy/)). Płaca minimalna rośnie do 4 950 zł od 2027 r. ([pit.pl](https://www.pit.pl/?p=56422)).
- **Koszty pracy.** Godzinowe koszty pracy w Polsce wzrosły w 2025 r. o 8,8% w złotych. Średnia UE wynosi 34,9 EUR/h, Węgry 15,2, Rumunia 13,6, Bułgaria 12,0 ([Eurostat](https://ec.europa.eu/eurostat/web/products-euro-indicators/w/3-19032026-bp)). Polska ma ok. 19,10 EUR/h według źródła wtórnego ([getsix](https://getsix.eu/human-resources-payroll-in-poland/labour-costs-in-europe-2026-how-the-minimum-wage-in-poland-in-euro-compares-with-other-eu-countries/)).
- **Demografia.** Liczba osób w wieku produkcyjnym spadnie z 22,2 mln (2022) do 13,3–16,6 mln w 2060 r. ([Rzeczpospolita/GUS](https://www.rp.pl/dane-gospodarcze/art39034781-wstrzasajace-prognozy-gus-ubedzie-7-11-milionow-polakow)).
- **Cudzoziemcy.** W ZUS ubezpieczonych jest ok. 1 289 000 cudzoziemców, z czego 857 000 to Ukraińcy ([Infor/ZUS](https://kadry.infor.pl/wiadomosci/6805152,wysoka-liczba-ubezpieczonych-w-zus-coraz-wiecej-cudzoziemcow-pracuje.html)). To koncentracja ryzyka, którą warto pokazywać operatorom magazynów.

Przekaz dla klienta powinien więc mówić o przewidywalności kosztu i demografii, a mniej o „braku rąk do pracy”.

**Robotyzacja jest niska, a rynek pierwszego robota w MŚP — prawie nietknięty.**

- W 2025 r. Polska zainstalowała ok. 2 400 robotów przemysłowych (+2%), po trzech latach spadków od rekordu ponad 3 500 w 2021 r. ([Rzeczpospolita](https://pro.rp.pl/raporty-ekonomiczne/art45153461-polski-problem-z-robotami-swiatowy-rynek-rosnie-siedmiokrotnie-szybciej-niz-nasz)).
- Gęstość robotyzacji wynosi ok. **102** na 10 000 pracowników przetwórstwa (dane agregatora). Czechy mają 216, Słowacja 210, Węgry 172, średnia UE 231 ([IFR](https://ifr.org/ifr-press-releases/robot-density-surges-in-europe-asia-and-americas); [Roboradar24](https://roboradar24.com/rankings/robot-density)).
- Roboty przemysłowe ma 18% dużych firm i najwyżej **4% MŚP** ([XYZ/PIE](https://xyz.pl/dzieje-sie/pie-w-2024-r-roboty-przemyslowe-mialo-18-proc-duzych-firm-i-tylko-4-proc-msp-3802)).

Instalacje stały w miejscu mimo 50-procentowej ulgi podatkowej. To wskazuje, że barierą jest nakład inwestycyjny i kompetencje integracyjne, a nie podatki — czyli dokładnie problem, który rozwiązuje model usługowy.

**Humanoidy w Polsce są na etapie pokazów:**

- Unitree G1 kosztuje w x-komie ok. 100 000 zł ([Antyweb](https://antyweb.pl/cyberpunk-staje-sie-rzeczywistoscia-roboty-humanoidalne-juz-w-polskim-sklepie));
- MeraRobotics prowadzi robota-influencera na G1 ([Polskie Radio](https://polskieradio.pl/395/7786/Artykul/3690212,balance-humanoid-robotics-in-poland));
- 7.09.2026 r. ok. 30 robotów „protestowało” przed Ministerstwem Cyfryzacji ([Kuwait Times](https://kuwaittimes.com/article/49366/business/robots-protest-rampant-ai-in-poland/)).

Nie znaleziono wiarygodnego dostawcy RaaS dla robotów przemysłowych z publicznym cennikiem. Recuro deklaruje, że było „pierwsze w Polsce”, ale strona jest stara ([Recuro](https://recuro.pl/robot-as-a-service/)). Konkurencją są więc integratorzy z finansowaniem bankowym, leasing producentów (Universal Robots ma w Polsce własny program ([UR](https://www.universal-robots.com/pl/uslugi/leasing-robotow-wspolpracujacych/))) oraz opcja „nic nie robić i brać pracowników z agencji”. Okno pierwszego gracza dla przemysłowego humanoida jako usługi w Polsce jest otwarte, ale bez lokalnej referencji.

**Najbliższy dowód w CEE to Mercedes w Kecskemét.** Firma uzasadnia testy Apollo wieloletnim niedoborem pracowników w węgierskim zakładzie ([Hungary Today](https://hungarytoday.hu/humanoid-robots-put-to-work-at-the-mercedes-factory-in-kecskemet/)). AgiBot z Minth otworzył 29.08.2026 r. montownię humanoidów w serbskim Šabacu (pierwszy etap za 20,00 mln EUR). Serbia nie jest w UE, więc produkty i tak muszą spełnić unijne wymogi zgodności ([RAS](https://ras.gov.rs/en/minth-group-launches-europes-first-mass-production-of-humanoid-robots)).

Różnica kosztów pracy między Polską, krajami DACH (średnia UE to 34,9 EUR/h) a Rumunią i Bułgarią oznacza, że humanoid zwraca się wcześniej na zachodzie rolloutu Robotify niż w Polsce. Pierwsze ekonomicznie uzasadnione wdrożenia humanoidów to więc polskie zakłady niemieckich koncernów (kotwice rynku: Schaeffler, BMW, Mercedes, Siemens, Bosch) oraz wejście na rynek DACH. Obecność tych firm w Polsce nie była weryfikowana w tym researchu.

**Zachęty:**

- **Ulga na robotyzację** (dodatkowe odliczenie 50% kosztów) formalnie wygasa z rokiem podatkowym rozpoczętym w 2026 r. Rząd przyjął 29.09.2026 r. projekt przedłużenia o 10 lat, do 2036 r., ale to jeszcze nie ustawa ([wnp.pl](https://www.wnp.pl/rynki/rzad-przyjal-projekt-przewidujacy-przedluzenie-na-kolejne-10-lat-ulgi-podatkowej-na-robotyzacje,1103952.html); [EY](https://www.ey.com/pl_pl/insights/tax/ulga-na-robotyzacje-przedluzenie-o-10-lat)). W latach 2022–2024 firmy odliczyły z niej 673,00 mln zł ([PARP](https://www.parp.gov.pl/attachments/article/90648/IP_27_05_Obszarowa%20Historia%20Sukcesu_robotyzacja.pdf)). NSA uznał prawo do ulgi przy leasingu operacyjnym z wykupem ([Inovgroup](https://inovgroup.pl/blog/leasing-operacyjny-robota-ulga-robotyzacja-nsa/)).
- **Dotacje** są wąskie. FEPW 1.2 obejmuje tylko Polskę Wschodnią ([PARP](https://www.parp.gov.pl/component/content/article/90799:aktualizacja-nr-4-listy-ocenionych-projektow-w-dzialaniu-1-2-automatyzacja-i-robotyzacja-w-msp)). Ścieżka SMART była przekroczona ponad pięciokrotnie (514,54% alokacji) ([PARP](https://www.parp.gov.pl/component/grants/news/zakonczenie-naboru-wnioskow-w-naborze-nr-feng-01-01-ip-02-001-26-w-ramach-sciezki-smart-feng)).
- **Leasing** jest dojrzały. W I półroczu 2026 r. leasing maszyn i urządzeń wyniósł 13,00 mld zł, a cały rynek ma według prognozy ZPL osiągnąć 129,50 mld zł w 2026 r. ([superauto.pl](https://www.superauto.pl/artykuly/rynek-leasingu-po-i-polroczu-2026-podsumowanie-wnioski)). To naturalny partner do finansowania floty.

## Inwestorzy w 2026 r. finansują humanoidy, ale wyceniają wdrożenia

**Kapitał rośnie skokowo.** Według PitchBooka w 2025 r. w humanoidy zainwestowano 4,60 mld USD, prawie trzy razy więcej niż rok wcześniej ([Forbes](https://www.forbes.com/sites/annatong/2025/12/31/2025-another-year-of-humanoid-hype/)). Dealroom liczy dla 2026 r. do połowy października ok. 11,00 mld USD ([Dealroom](https://dealroom.co/resources/humanoid-robotics/)), a Tracxn — 6,62 mld USD ([Tracxn](https://tracxn.com/d/trending-business-models/startups-in-humanoid-robot/__XaLjGJXRCO_tCHXYL7TDcFDV2Kbfu3MNQXSVaa4xkas)). Definicje się różnią, więc lepiej podawać przedział z nazwą źródła.

**Pieniądze trafiają do kilku platform wycenianych na opcję, nie na przychód:**

- Figure — 39,00 mld USD (wrzesień 2025) ([Teahose](https://www.teahose.com/guides/figure-ai-valuation));
- Skild AI — ponad 14,00 mld USD przy rundzie 1,40 mld USD ([BusinessWire](https://www.businesswire.com/news/home/20260114335623/en/Skild-AI-Raises-$1.4B-Now-Valued-Over-$14B));
- Apptronik — 520,00 mln USD przy ok. 5,00–5,50 mld USD wyceny ([Apptronik](https://apptronik.com/news-collection/apptronik-closes-over-935-million-series-a));
- NEURA — runda do 1,40 mld USD, częściowo warunkowa, przy wycenie ok. 4,00 mld EUR według Bloomberga ([Bloomberg](https://www.bloomberg.com/news/articles/2026-03-04/neura-robotics-raising-1-billion-in-round-backed-by-tether));
- Humanoid (UK) — 152,00 mln USD przy 1,35 mld USD; inwestorami są Schaeffler i Bosch ([Tech.eu](https://tech.eu/2026/07/21/uk-robotics-startup-humanoid-hits-135b-valuation-with-152m-series-a/)).

Prawie w każdej dużej rundzie są inwestorzy strategiczni: NVIDIA, Amazon, Google, SoftBank, Foxconn, Mercedes, Schaeffler i Bosch.

**Jesień 2026 przyniosła jednak korektę:**

- Unitree po debiucie na giełdzie STAR (+487% na zamknięciu pierwszego dnia, wskaźnik C/Z ok. 1 300) do 21.09.2026 r. straciło ok. 55% od szczytu ([Forbes](https://www.forbes.com/sites/johnkoetsier/2026/08/19/unitree-ipos-massive-629-pop-makes-agility-robotics-look-super-cheap/); [RTÉ/Reuters](https://www.rte.ie/news/business/2026/0921/1592325-china-slows-humanoid-robot-ipo-rush/)).
- Chiński regulator nieformalnie spowolnił debiuty humanoidów i bada przychody z centrów zbierania danych finansowanych przez samorządy. Bankier cytowany przez Reutersa mówi, że inwestorzy stają się „bardziej wymagający co do wdrożeń, wolumenów i wycen” ([RTÉ/Reuters](https://www.rte.ie/news/business/2026/0921/1592325-china-slows-humanoid-robot-ipo-rush/)).
- PitchBook pisze, że inwestorzy „nie oceniają już spółek robotycznych po tym, czy technologia działa” ([PitchBook](https://pitchbook.com/news/reports/q1-2026-robotics-physical-ai-vc-trends)).
- K-Scale Labs zamknęło się, bo nie dostarczyło przedsprzedanych zestawów i przegrało cenowo z Unitree G1 ([AIBase](https://news.aibase.com/news/22965)). Sanctuary AI przeszło od humanoida do oprogramowania niezależnego od sprzętu ([The Logic](https://thelogic.co/news/exclusive/sanctuary-ai-humanoid-robot-fundraise-efforts/)).

**Najbliższe Robotify analogie to nie producenci humanoidów, tylko operatorzy RaaS:**

- **Formic** (USA) — rozlicza za godzinę dopiero po pełnym uruchomieniu robota. Runda A wyniosła 26,50 mln USD, do tego ponad 100,00 mln USD długu na sprzęt ([The Robot Report](https://www.therobotreport.com/formic-brings-in-26-5-million-in-series-a-funding/)).
- **RobCo** (Monachium) — RaaS dla MŚP „bez nakładów na start”. W październiku 2026 r. ogłosiło wycenę ponad 1,00 mld USD, głównie przy sprzedaży akcji pracowniczych, po sprzedaży ponad 1 000 robotów ([SiliconANGLE](https://siliconangle.com/2026/10/05/robotics-startup-robco-valued-at-1b-in-40m-funding-round/)).

Obie spółki zbudowały wartość na cobotach i ramionach przemysłowych, nie na humanoidach. Inwestorzy wyceniają takie firmy na:

- przychodzie powtarzalnym i jego mnożnikach,
- przychodzie miesięcznym na robota,
- wykorzystaniu floty,
- marży brutto po serwisie,
- utrzymaniu klientów,
- zwrocie z robota

([Atlanta Business Valuations](https://atlantabusinessvaluations.com/robotics-as-a-service-raas-business-valuation/)). Mediana mnożnika przychodów w robotyce i AI wzrosła w 2025 r. z 2,5 do 3,4, ale to dane agregatora niskiej wiarygodności ([Finerva](https://finerva.com/report/robotics-ai-2026-valuation-multiples/)). Flotę finansuje się długiem lub leasingiem, a platformę — kapitałem własnym.

Wniosek dla polecenia 38 („humanoidy to najważniejszy element przyciągający inwestorów”): humanoid poszerza krąg rozmówców o fundusze tematyczne i korporacje, ale bez godzin humanoida w umowach nie podniesie mnożnika. W październiku 2026 r. narracja humanoidalna bez dowodu wdrożenia jest wręcz dyskontowana.

## Co to znaczy dla Robotify: start w 2028 r. trafia w okno, model floty wymaga decyzji

### Model operacyjny w trzech fazach z bramkami

| Faza | Lata | Flota | Typowe zadania | Co buduje Robotify | Bramka do następnej fazy |
|---|---|---|---|---|---|
| 0 — przygotowanie | 2027 (Robotify ok. −150 000 zł EBITDA w budżecie) | Laboratorium: 1–3 humanoidy (klasa B: deweloperskie, odizolowane), coboty demonstracyjne | Testy w laboratorium, pokazy u klientów kotwicznych | Umowy z producentami z trzech kierunków, prototyp warstwy L1–L2, procedury CE i RODO, listy intencyjne | Pierwsza umowa pilotażowa z klientem |
| 1 — coboty jako silnik, humanoid jako pilot | 2028–2030 | Coboty i AMR w produkcji; humanoidy w płatnych pilotażach i małych flotach (strefy wydzielone) | Coboty: stałe stanowiska (paletyzacja, obsługa maszyn, wkręcanie). Humanoidy: przenoszenie pojemników między przenośnikami, regałami i AMR; sekwencjonowanie; zasilanie stanowisk cobotów | Jedna warstwa integracji: zadania z WMS/MES, orkiestracja, telemetria KPI, centrum operacyjne, europejski nadzór i dane | ISO 25785-1 lub certyfikat producenta; interwencje i MTBF w umowie; wydajność ≥ 50%; koszt ekwiwalentu człowieka poniżej alternatywy |
| 2 — humanoid-first | od ok. 2030–2032 | Humanoidy domyślnie w nowych wdrożeniach mobilnych; coboty na precyzyjnych stanowiskach | Wiele zadań na zmianę między stanowiskami; strefy dzielone z ludźmi | Rozszerzenie na usługi (handel nocą, lotniska, logistyka szpitalna) i rynki DACH | — |

Taki układ zachowuje sens polecenia 38: humanoidy są na pierwszym planie, a coboty są fazą przejściową na stanowiskach mobilnych. Nie wymaga przy tym deklaracji, której nie potwierdza żadne źródło.

### Ścieżki dostępu do producentów: Chiny dziś, Europa od 2027, USA od 2028

| Kierunek | Producenci i kanał | Kiedy realnie | Ryzyka | Czego żądać w umowie |
|---|---|---|---|---|
| Chiny | AgiBot (dystrybutor w UK, Tekpoint, TÜV, montownia w Serbii); UBTech (reseller w UE, integrator Terra Robotics u Rossmanna); Unitree (sklepy, wersje EDU z otwartym SDK); Kepler, Galbot ([Scancom](https://www.scancom.co.uk/pages/agibot); [RobotsEuropa](https://www.robotseuropa.com/UBTECH-Walker-S2.htm)) | Dziś (laboratorium, pilotaże), produkcyjnie 2027–2028 | Klasa B bezpieczeństwa; klienci z ekspozycją na USA i obronność; lista dostawców wysokiego ryzyka KSC; szybka utrata wartości; serwis w UE niezbadany | Wersje deweloperskie, pełny dostęp przez SDK, offline bez utraty funkcji, SBOM, odkup lub gwarancja wartości końcowej, części zamienne w UE |
| Europa | NEURA 4NE1 (cena flotowa 60 000 EUR); Humanoid HMND 01 (płatne pilotaże 3–6 mies. od końca 2026, CE 2027); Hexagon AEON (BMW, Schaeffler, Pilatus); Wandercraft (Renault) | 2027 | Opóźnienia (NEURA już przesunęła termin); małe wolumeny; ceny wyższe niż chińskie | Status partnera lub integratora, udział w pilotażach u kotwic z polskimi zakładami, hosting w UE z definicji |
| USA | Agility (RaaS bezpośrednio, Digit 5 od przełomu 2026/2027); Apptronik (zamówienia od 2027, ok. 80 000 USD/rok); Boston Dynamics (kolejni klienci od 2027, zarządzanie flotą u klienta); Figure (bezpośrednio); Tesla (sprzedaż do końca 2027 „jeśli bezpieczny”) | 2028+ | Brak programów dla integratorów w UE; priorytet dla klientów-inwestorów; chmura producenta (klasa C) | Dostęp do API platformy floty, VDA 5050 dla baz kołowych, hosting w UE lub u klienta, definicja przewidzianych aktualizacji, prawo do zamiany modelu |

**Brak otwartego standardu orkiestracji humanoidów to realne ryzyko uzależnienia od dostawcy.** VDA 5050 w wersji 3.0 (luty–marzec 2026) obejmuje wózki AGV i AMR, a nie humanoidy ([idealworks](https://www.idealworks.com/news/vda5050-300-release-march-2026)). Dlatego warstwa orkiestracji Robotify i klauzule o dostępie do API są ważniejsze niż wybór jednej marki. Przejęcie przez Robotify tej warstwy to także odpowiedź na polecenie 41: Robotify kupuje roboty z USA i Chin, ale wszystko powyżej ciała robota pozostaje europejskie.

### Metodyka wdrożenia u klienta: 4–6 miesięcy do pierwszego robota

| Etap | Czas | Co robimy | Wynik / wskaźnik |
|---|---|---|---|
| 1. Przegląd zadań | 2–4 tyg. | Ocena kandydatów: powtarzalność, ładunek ≤ 15–25 kg, tolerancja na wolniejszy cykl, zmienność, posadzka i schody, obciążenie ergonomiczne, separacja od ruchu osób postronnych | Lista zadań; najlepsze na start: pojemniki, sekwencjonowanie, ładowanie przyrządów, dostawy na linię |
| 2. Ocena zakładu | 1–3 tyg. | Układ hali, szerokość alei, Wi-Fi lub 5G, miejsca ładowania i wymiany baterii, interfejsy (przenośniki, sterowniki PLC, WMS/MES), ruch ludzi, urządzenia pod dozorem UDT | Raport z zakładu |
| 3. Projekt prawny i bezpieczeństwa | 4–8 tyg., równolegle | Ustalenie roli (dystrybutor czy producent zestawu); ocena ryzyka według ISO 12100 z upadkiem robota jako zagrożeniem; strefy z zewnętrznymi funkcjami bezpieczeństwa PL d; DPIA i umowa powierzenia (RODO); regulamin monitoringu (art. 22² KP); konsultacje z pracownikami i związkami (art. 237¹¹ᵃ KP — do sprawdzenia) | Dokumentacja CE / zgodności, DPIA |
| 4. Symulacja | 2–6 tyg. | Czas cyklu i ruch floty mieszanej w modelu cyfrowym | Potwierdzony układ |
| 5. Pilotaż | 3–12 mies. | 1–3 roboty w strefie wydzielonej; stopniowe wydłużanie zmian | Czas cyklu, dokładność ≥ 99%, interwencje na 1 000 cykli, MTBF/MTTR, dostępność, koszt zadania wobec pracy człowieka, incydenty, akceptacja załogi |
| 6. Dane i teleoperacja | w trakcie | Demonstracje i przypadki brzegowe do douczenia; obraz anonimizowany na brzegu | Rosnąca autonomia |
| 7. Integracja | w trakcie | WMS/WES/MES przez API, wymiana sygnałów z PLC przenośników i cobotów, wyłączniki awaryjne stanowiska | Zadania przydzielane z systemu klienta (wzorzec SAP i Humanoid) |
| 8. Decyzja o skali | 12–18 mies. od startu | Dane KPI, całkowity koszt posiadania, wyniki bezpieczeństwa | Umowa flotowa |
| 9. Eksploatacja floty | ciągle | Stacje ładowania lub wymiany baterii, części na znane słabe punkty (nadgarstek, przedramię), centrum operacyjne, kontrola aktualizacji jako potencjalnej istotnej modyfikacji, szkolenia, rejestr incydentów | SLA |
| 10. Zarządzanie zmianą | od początku | Roboty na zadania obciążające ergonomicznie (wzorzec Rossmanna); bez monitoringu wydajności ludzi | Akceptacja załogi |

Czasy wynikają z precedensów: BMW Lipsk przeszło od pierwszego testu w grudniu 2025 r. do zadań produkcyjnych w czerwcu 2026 r. ([Hexagon](https://robotics.hexagon.com/bmw-deploys-aeon-hexagon-robotics-humanoid/)), Figure pracował w BMW 11 miesięcy, Rossmann testuje przez cały rok, a Amazon decyduje o skali po ok. 18 miesiącach ([AJOT/IDTechEx](https://www.ajot.com/news/fast-growth-of-humanoid-robots-in-the-automotive-and-logistics-industry)). W obecnych materiałach Robotify proces ma 12–20 tygodni z „pilotażem 30 dni”. To pasuje do cobota, ale dla humanoida jest za krótkie.

**Przejście cobot → humanoid nie polega na wymianie robotów.** Humanoid wchodzi jako mobilne ogniwo między stanowiskami cobotów i AMR — tak jak u GXO. Potem przejmuje kolejne ręczne punkty przekazania w jednej strefie. Po publikacji ISO 25785-1 i certyfikacji producenta wchodzi do stref dzielonych. Dopiero wtedy przeplanowuje się słabo wykorzystane stanowiska cobotów, a coboty przenosi tam, gdzie liczy się precyzja. Każdy krok zmienia „aplikację”, więc wymaga aktualizacji oceny ryzyka, a niekiedy nowej deklaracji zgodności.

### Wynajem czy zakup przez klienta: napięcie między poleceniem 38 a budżetem

Obecny budżet i materiały (decyzje 28, 30 i 31) zakładają, że **robota kupuje klient**, a Robotify:

- dobiera, integruje i serwisuje robota w stawce serwisowej ok. 7% kosztu pracy w danym kraju (w Polsce 4,07 zł/h);
- liczy do 7 000 h pracy rocznie, czyli 28 490 zł przychodu z robota rocznie w Polsce;
- osiąga 87,5% marży brutto na obsłudze, bez CAPEX po swojej stronie.

Polecenie 38 mówi tymczasem „chcemy wynajmować coboty”. Wynajem w sensie ścisłym oznacza, że właścicielem robota jest Robotify albo podmiot, który go finansuje. Zmienia to wszystko, co inwestor zobaczy w liczbach: kapitał na flotę, finansowanie dłużne, amortyzację, ryzyko pustostanów i wartości końcowej, a także potrzeby kapitałowe Robotify rok po roku z decyzji 44. Notatka w zleceniach (przy decyzji 38) słusznie zastrzega, że przed zmianą liczb potrzebna jest decyzja właściciela.

Kluczowa obserwacja: **dla klienta „wynajem” może oznaczać jedną miesięczną płatność bez nakładu na start, bez robota na bilansie Robotify.** Taki efekt daje leasing operacyjny partnera połączony z serwisem Robotify.

| Wariant | Właściciel robota | Co płaci klient | Konsekwencje dla Robotify | Główne ryzyka | Zgodność z budżetem i decyzjami |
|---|---|---|---|---|---|
| A. Zakup przez klienta + serwis w robotogodzinie (obecny budżet) | Klient | CAPEX (gotówka, kredyt, leasing własny) + stawka serwisowa | Model lekki kapitałowo, wysoka marża procentowa, mały przychód na robota | Bariera wejścia: 4% MŚP z robotami, instalacje stoją mimo ulgi. Ryzyko technologiczne i spadku wartości humanoida po stronie klienta | Zgodny z budżetem; niezgodny z literą polecenia 38 |
| B. Wynajem z flotą Robotify finansowaną leasingiem lub długiem (wzorzec Formic) | Robotify lub spółka celowa | Opłata miesięczna lub godzinowa z minimum | Przychód na robota rośnie o rząd wielkości, ale dochodzą koszt finansowania, amortyzacja, kapitał obrotowy i potrzeba linii dłużnej | Wykorzystanie floty; wartość końcowa (−72% ceny jednostkowej Unitree w dwa lata); aktywa osierocone przy liście dostawców KSC; wpływ na ulgę (właściciel czy klient — do opinii doradcy) | Zgodny z poleceniem 38; wymaga przeliczenia budżetu i potrzeb z decyzji 44 |
| C. Model mieszany | Coboty: klient (zakup lub leasing przez partnera, np. UR z DLL czy Elmark) albo mała flota pilotażowa Robotify. Humanoidy: producent (RaaS back-to-back) | Coboty: jak w A, z opcją wynajmu na pilotaż. Humanoidy: miesięczna opłata RaaS producenta z warstwą Robotify | Bilans ograniczony do floty pilotażowej; marża na humanoidach niższa (pośrednictwo) plus opłata za nadzór i integrację | Zależność od warunków RaaS producentów; mniejsza kontrola nad sprzętem | W większości zgodny z budżetem; wymaga opisania humanoidów jako usługi pośredniczonej |
| D. „Wynajem” przez partnera leasingowego | Leasingodawca | Jedna rata miesięczna (leasing operacyjny + serwis Robotify) | Robotify poza bilansem; przychód jak w A plus ewentualna prowizja aranżacyjna | Potrzebny partner (nie znaleziono dedykowanych programów robotycznych PKO Leasing, Pekao, mLeasing, BNP); wartość końcowa po stronie leasingodawcy podnosi ratę | Zgodny z budżetem i z „wynajmem” w rozumieniu klienta; ulga przy leasingu z wykupem korzystna dla klienta według wyroku NSA |

**Rekomendacja do decyzji właściciela, bez liczb budżetowych:**

1. **Domyślnie C+D.** Klient dostaje ofertę „wynajmu”: jedną ratę bez nakładu na start, dostarczaną przez partnera leasingowego, z serwisem Robotify w stawce z budżetu. Na bilansie Robotify zostaje tylko mała flota pilotażowa i demonstracyjna.
2. **Humanoidy do ok. 2030 r. przez umowy RaaS producentów** (wzorzec Agility: umowy trzyletnie), z warstwą nadzoru Robotify. Robotify nie powinno kupować humanoidów na własność, dopóki ceny i wartości rezydualne się nie ustabilizują.
3. **Wariant B (własna flota na długu) jako opcja na później**, gdy Robotify będzie miało dane o wykorzystaniu. Inwestor będzie wtedy oczekiwał, że kapitał własny finansuje platformę, a dług — roboty.

Niezależnie od wariantu rozliczenie wyłącznie za godzinę przerzuca ryzyko wykorzystania na Robotify. Rynek łagodzi je minimalnym zobowiązaniem (w materiałach Robotify jest już „minimum 200 h”) i opłatą wdrożeniową.

**Rachunek ilustracyjny (autora raportu, nie liczba budżetowa; do przeliczenia w modelu).** Weźmy logikę use case'u cobota (55 000 EUR → 12,31 zł/h z serwisem) i podstawmy humanoida po cenie flotowej NEURA, 60 000 EUR, przy tych samych godzinach i okresie amortyzacji. Wychodzi ok. 13 zł/h. Przy wydajności równej połowie człowieka daje to ok. 26 zł za godzinę „ekwiwalentu człowieka”, nadal poniżej 58 zł/h. Ten sam rachunek przy cenie 98 000 EUR i o połowę niższym wykorzystaniu daje jednak ok. 67 zł/h — powyżej kosztu pracy.

Model „robota kupuje klient” jest więc dla humanoida obronny dopiero wtedy, gdy cena spadnie do ok. 60 000 EUR, a wykorzystanie zbliży się do założeń budżetu. To samo założenie 7 000 h rocznie (ok. 3,5 etatu) jest dla humanoida w 2028 r. niesprawdzone. Rachunek nie obejmuje też opłat wdrożeniowych (Agility: 25 000 USD) ani infrastruktury bezpieczeństwa i baterii.

## Jak pokazać to inwestorom: Robotify i skala najpierw, dowód zaraz potem

**Kolejność przekazu** łączy decyzje 39, 40 i 42 (skala najpierw, Robotify przed Agentify, plan bez zmian) z tym, czego inwestor w 2026 r. oczekuje:

1. **Skala.** Każda praca fizyczna to rynek: 120 mln pracowników w UE, paleta 13 sektorów z etykietami dowodów. W scenariuszu Goldman Sachs humanoidy ok. 2030 r. przewyższają liczebnie dzisiejsze instalacje wszystkich robotów przemysłowych, a w 2050 r. Morgan Stanley widzi ponad 1 mld humanoidów.
2. **Dowód.** Kto już pracuje: Agility 65 000 h w 9 zakładach, Figure 90 000 części w BMW, BMW Lipsk, Schaeffler. Wszystko uczciwie oznaczone etykietami.
3. **Okno.** W latach 2027–2028 producenci otwierają sprzedaż poza krąg klientów-inwestorów, a Hyundai uruchamia Atlasa produkcyjnie. Robotify startuje w 2028 r.
4. **Robotify.** Integrator niezależny od producenta, z dostępem do USA, Chin i Europy oraz jedną europejską warstwą oprogramowania, nadzoru i danych dla cobotów, AMR i humanoidów.
5. **Fazy z bramkami.** Coboty jako silnik 2028–2030, humanoid-first od ok. 2030–2032.
6. **Bezpieczeństwo i zgodność** jako fosa: rozporządzenie maszynowe, dyrektywa o odpowiedzialności za produkt, KSC.
7. **Agentify** — pierwszy przychód od 2027 r. Kolejność prezentacji nie jest kolejnością uruchomienia: Robotify to największy rynek, Agentify to start hubu.
8. **Liczby z budżetu bez zmian:** rok 2027 ze stratą (decyzja 43) i potrzeby kapitałowe osobno dla spółek (decyzja 44), po decyzji o wariancie floty.

**Lista zmian w materiałach (PL, potem EN).** Sprawdziłem wersje HTML w katalogu „Automatify-Materialy-Inwestorskie”; jeśli bieżące buildy różnią się od nich, punkty dotyczą odpowiednich miejsc. Zgodnie z zasadą z mapy decków żadna nowa liczba nie trafia do materiałów bez decyzji właściciela.

| Nr | Materiał | Co zmienić | Uzasadnienie |
|---|---|---|---|
| 1 | Deck H (Automatify) | Otwarcie od Robotify i humanoidów: slajd skali (120 mln pracowników w UE, paleta sektorów z etykietami, przedziały Interact–Goldman Sachs), potem slajd „Kto już pracuje”. Agentify za Robotify, z dopiskiem „pierwszy przychód 2027” | Decyzje 39, 40, 42 |
| 2 | Deck H, Teaser | Zamienić „$6,2 → $25 mld, rynek humanoidów 2025→2030, CAGR 32%” na datowany przedział: 2035 r. — ok. 15,00 mld USD (Interact, V 2026) do ok. 138,00 mld USD (Goldman Sachs, IX 2026) | Brak źródła w notatkach; „6,2 mld USD w 2025 r.” kłóci się z realnymi przychodami sektora (McKinsey: poniżej 1,00 mld USD) |
| 3 | Deck R, slajd „Krzywa kosztu robota” | Usunąć „spadek 40% rocznie”, „< $1/h w 2030”, „2027 $20–25k Tesla — masowa produkcja”, „2030 $10–15k”. Wstawić: Goldman Sachs −40% jednorazowo (2023→2024); IDTechEx −68% ceny 2024–2030 (114 700 → 37 000 USD) i poniżej 5 USD/h ok. 2030 przy wysokim wykorzystaniu; BofA: koszt materiałów poniżej 17 000 USD w 2030 | 10 000–15 000 USD to rząd kosztu materiałów, nie ceny; Tesla nie potwierdziła masowej sprzedaży |
| 4 | Deck R, „Technologie humanoidalne” | „8 h pracy na 1 ładowaniu” → „2–4 h na baterii; praca wielozmianowa dzięki wymianie baterii (AEON ok. 23–25 s, Walker S2 poniżej 3 min) lub szybkiemu ładowaniu (Digit 5: 90/9 min)”. „ISO 13482 … kolaboracja bez ogrodzeń” → ISO 25785-1 w projekcie, strefy wydzielone, ISO 10218:2025. „Nowe zadania po 5–20 pokazach” — sprawdzić (Gemini On-Device: 50–100 demonstracji). Lista modeli VLM do aktualizacji | Notatki: bezpieczeństwo, producenci |
| 5 | Deck R, modele referencyjne i zastosowania | Figure 02 (wycofany) → Figure 03; dodać Digit 5, Atlas, Apollo, Walker S2, AgiBot, 4NE1, HMND 01, AEON. Zastosowania humanoidów: najpierw przepływ materiału w fabrykach i magazynach, dopiero potem hotele, recepcja i opieka, z horyzontami | Obecny slajd przypisuje humanoidom hotelarstwo i opiekę, a logistykę robotom niehumanoidalnym — na najbliższe lata dowody mówią odwrotnie |
| 6 | Deck R, „Figure 02: 56 stopni swobody”, „dojrzałość mechaniczna” | Sprawdzić u Figure (56 DoF agregatory podają dla Atlasa). „Dojrzałość mechaniczną” zastąpić faktami: 11 miesięcy w BMW, przedramię jako słaby punkt | Notatki: producenci, wdrożenia |
| 7 | Deck R, „partnerstwa z humanoid OEM (Figure / 1X / Apptronik) od 2027” | Trzy ścieżki: Chiny dziś (AgiBot, UBTech, Unitree EDU), Europa 2027 (NEURA, Humanoid, Hexagon), USA 2028+ (Agility, Apptronik, Boston Dynamics) | Liderzy z USA nie mają kanału dla integratorów w UE; 1X to robot domowy |
| 8 | Deck R, „1 robot = 3,5 FTE, praca 24/7” | Zostawić dla cobota; dla humanoida dodać „dziś 20–50% wydajności człowieka, cel UBTech 80% w 2027” | Notatki: wdrożenia |
| 9 | Deck R, porównanie kosztu godziny | Uzgodnić „pracownik PL 35–45 PLN/h” z 58 zł/h z use case'u; dodać tabelę: cobot 25–35 zł/h w wynajmie, humanoid 64–99 zł/h dziś, poniżej 20 zł/h ok. 2030 | Niespójność wewnętrzna; notatki: wynajem |
| 10 | Deck R, „Proces wdrożenia” | Dla humanoida: pilotaż 3–12 mies., decyzja o skali po 12–18 mies.; zostawić 12–20 tyg. i 30 dni dla cobota | Precedensy BMW, Amazon, Rossmann |
| 11 | Deck R, nowy slajd „Europejski nadzór i dane” | Architektura L0–L4, polityka klas A/B/C, sformułowania z tabeli „Zamiast / Mówimy” | Decyzja 41 |
| 12 | Deck R, nowy slajd „Fazy i bramki” | Trzy fazy z bramkami zamiast „od 2030 wyłącznie humanoidy” | Rozdział o terminach |
| 13 | Deck R, „Konkurencja” | Dodać RobCo i Formic (wzorce RaaS) oraz model GXO–Agility | Notatki: inwestorzy |
| 14 | Deck R, model rozliczeniowy | Po decyzji właściciela: wariant A/C/D albo B. Do tego czasu bez nowych liczb, tylko opis „wynajem dla klienta przez partnera leasingowego” | Napięcie: polecenie 38 a budżet |
| 15 | Deck A (Agentify) | Treść bez zmian. W pakiecie i spisach za deckiem R. Odesłanie: „Agentify startuje w 2027 r., Robotify w 2028 r.” | Decyzje 40 i 42 |
| 16 | Kompendium (5 stron A4) | Str. 1: skala i Robotify. Str. 2: dowody i fazy humanoidów. Str. 3: model Robotify i europejski nadzór. Str. 4: Agentify. Str. 5: liczby z budżetu, rok 2027, potrzeby kapitałowe per spółka | Decyzje 40, 43, 44 |
| 17 | Teaser | Pierwsza linia o Robotify. „60 bln $ globalny rynek wynagrodzeń” — sprawdzić albo zastąpić „120 mln pracowników UE w sektorach pracy fizycznej”. Źródła „Goldman Sachs Humanoid Robot Report”, „Tesla AI Day” → konkretne raporty z datami. W „Przewadze” dodać europejski nadzór i dane | Notatki: sektory, inwestorzy |
| 18 | FAQ | Nowe pytania: „Czy humanoidy są gotowe do pracy?”, „Dlaczego coboty najpierw?”, „Skąd roboty i gdzie trafiają dane?”, „Co, jeśli producent trafi na listę dostawców wysokiego ryzyka?”, „Kto odpowiada prawnie po 20.01.2027?”, „Kto finansuje roboty?”, „Ile humanoidów pracuje dziś naprawdę?”, „Czym Robotify różni się od producenta humanoidów?” | Pytania, które zada każdy inwestor z branży |
| 19 | Suplement budżetowy | Liczby bez zmian. Pozycję „R&D humanoid (40% EBITDA od 2031)” opisać, jeśli właściciel się zgodzi, jako rozwój warstwy oprogramowania i nadzoru Robotify dla humanoidów, zgodnie z rolą integratora. Po decyzji o wariancie dopisać jego wpływ na potrzeby kapitałowe | Decyzje 41, 44 |
| 20 | Strona klienta / www | Paleta sektorów z etykietami, strona „Europejski nadzór i dane”, „Jak wdrażamy” z uczciwymi czasami pilotażu; usunąć „24/7” przy humanoidach | Spójność z deckami |
| 21 | Aneks kadrowy | Tylko jako propozycja do decyzji, bez liczby etatów: kompetencje zgodności CE (rozporządzenie maszynowe), bezpieczeństwa OT (IEC 62443), centrum operacyjnego i teleoperacji | Architektura i zgodność |
| 22 | Wersje EN | Po zatwierdzeniu PL | Kolejność pracy z zadania 14 |

**Czego nie mówić inwestorowi** — powtarzają to wszystkie notatki:

- nie sugerować wycen na poziomie producentów humanoidów;
- nie otwierać bilionowym TAM-em na 2050 r. bez ostrożnego przedziału obok;
- nie pokazywać wynajmu eventowego jako trakcji;
- nie opierać się na jednym chińskim dostawcy bez planu na ryzyko regulacyjne i reputacyjne;
- nie mówić, że humanoidy zastąpią coboty.

**Czego inwestor będzie chciał zobaczyć przed rundą, która powoła się na humanoidy:**

- podpisany pilotaż albo list intencyjny z klientem;
- pisemny status partnera lub dystrybutora u co najmniej jednego producenta;
- ścieżkę zgodności CE dla stanowiska;
- plan finansowania floty;
- model ekonomiki na robota z ryzykiem utraty wartości.

## Wnioski

Najważniejsze przesunięcie perspektywy: wąskim gardłem rynku humanoidów nie jest już sam robot, tylko warstwa wdrożenia. Integracja z systemami klienta, zgodność CE po 20.01.2027 r., izolacja danych, finansowanie floty i serwis to dokładnie to, czego banki nie wyceniają osobno w swoich TAM-ach, a McKinsey uznaje za warunek swojego scenariusza bazowego. Robotify, które będzie właścicielem tej warstwy dla cobotów, AMR i humanoidów jednocześnie, wygrywa niezależnie od tego, czyje ciało robota zwycięży: amerykańskie, chińskie czy europejskie, na nogach czy na kołach. To zamienia emocjonalną tezę „humanoidy przyciągną inwestorów” w biznes, którego nie podważy ani korekta wycen producentów, ani opóźnienie Tesli, ani lista dostawców wysokiego ryzyka.

Drugie przesunięcie dotyczy czasu i modelu. Kalendarz Robotify (start w 2028 r.) jest zgodny z rynkiem lepiej, niż sugeruje polecenie 38. Faza cobotów nie jest objazdem, tylko sposobem na zbudowanie warstwy wdrożeniowej, danych i referencji, zanim humanoidy staną się tańsze i certyfikowane. Teza „wyłącznie humanoidy” warto zastąpić formułą humanoid-first z mierzalnymi bramkami. Inwestor może je śledzić sam, a każda spełniona bramka staje się kolejnym argumentem w rundzie. Z kolei „wynajem” dla klienta nie musi oznaczać robota na bilansie Robotify: wariant z partnerem leasingowym spełnia polecenie, nie rozsadzając budżetu. Decyzja w tej sprawie powinna jednak zapaść przed przeliczeniem potrzeb kapitałowych z decyzji 44.

## Do sprawdzenia u źródła przed użyciem w materiałach dla inwestorów

Badacze nie mieli dostępu do stron źródłowych (blokada sieci) i pracowali na streszczeniach wyszukiwarki. Każdą liczbę poniżej trzeba potwierdzić w źródle pierwotnym, zanim trafi do decku, Teasera, FAQ, Kompendium lub na stronę. Pozycje 50–53 dotyczą twierdzeń z obecnych materiałów Automatify, których notatki nie potwierdzają.

| Nr | Twierdzenie lub liczba | Dlaczego sprawdzić | Gdzie sprawdzić |
|---|---|---|---|
| 1 | Zatrudnienie w UE według sektorów (30,9 / 25,9 / 22,6 / 13,8 / 10,8 / 9,6 / 6,0 mln, III kw. 2025) i suma ok. 120 mln | Strona Statisty o niezgodnym tytule; tylko pracownicy najemni | Eurostat lfsq_eegan2 / lfsa_egan2 |
| 2 | ISCO 7–9 ≈ 27% zatrudnienia UE, ok. 55 mln osób | Udziały z 2020 r. nałożone na sumę z 2024 r. | Eurostat lfsa_egai2d |
| 3 | 207,2 mln pracujących w UE (2024); 916 mln w rolnictwie na świecie (26,1%) | Dane z serwisów pośrednich | Eurostat; FAO/ILOSTAT |
| 4 | Morgan Stanley: 63 mln humanoidów i 3,00 bln USD płac w USA do 2050 r.; 75% zawodów; 70% budownictwa, 67% rolnictwa | Cytat ze streszczenia | Raport Morgan Stanley (2024) |
| 5 | Morgan Stanley: ponad 1 mld humanoidów, ok. 5,00 bln USD w 2050 r.; 90% w przemyśle i usługach; Europa i Azja Centralna 16% (słabe źródło) | Źródła wtórne | Raporty Morgan Stanley 2025 i XII 2025 |
| 6 | Citi: 209,00 mld USD w 2035, 7,00 bln USD w 2050; „648 mln humanoidów” | Rozbieżne źródła | Citi GPS „The Rise of AI Robots” |
| 7 | Goldman Sachs IX 2026: 75 000 / 890 000 / 6,5 mln sztuk i 138,00 mld USD | Tylko omówienia | Raport GS „Physical AI” (IX 2026) |
| 8 | BofA: 3 mld humanoidów w 2060; 1,2 mln w 2030 (z drugiej ręki); koszt materiałów 35 000 → poniżej 17 000 USD | Częściowo z drugiej ręki | BofA „Physical AI part 2” (PDF) |
| 9 | Interact: ponad 700 000 sztuk i 15,00 mld USD w 2035; przegięcie 2032; ok. 10% wdrożonych w 2025; 50% wydajności człowieka do 2032 (wpis na X) | Część z mediów społecznościowych | Raport Interact Analysis 2026 |
| 10 | Dostawy 2025 (13 318 / 18 000 / ok. 7 000) i I poł. 2026 (19 100 / 22 000 / 25 000) | Różne definicje trackerów | Omdia, IDC, IFR, Counterpoint, SAG |
| 11 | Instalacje robotów przemysłowych na świecie w 2025 (603 000 czy 621 000) | Rozbieżność | IFR World Robotics 2026 |
| 12 | Agility: 9 zakładów, ponad 65 000 h, 8 500 USD/mies., 25 000 USD wdrożenia, 200 000 USD zakupu; przychód 2025: 1,80 mln USD (inne źródło: 37,20 mln USD); strata ok. 140,00 mln USD | Dane ilustracyjne; sprzeczne przychody | S-4/A w SEC EDGAR |
| 13 | Figure w BMW: 11 mies., 1 250 h, 90 000 części, 30 000 X3; liczba Figure 03 w BMW; „1 000 sztuk do VII 2026” | Dane firmowe; część niepotwierdzona | Figure, BMW Group |
| 14 | GXO: ponad 100 000 pojemników; stawka RaaS nieujawniona | Liczba niezweryfikowana ponownie | Agility, GXO |
| 15 | UBTech: 921 sztuk w I poł. 2026, 590,30 mln CNY; implikowana cena ok. 641 000 CNY; zamówienia ponad 800,00 mln CNY czy 1,40 mld CNY | Rozbieżności | Raport śródroczny UBTech (HKEX) |
| 16 | UBTech „najwyżej 50%” wydajności (I 2026), cel 80% w 2027; Zeekr ok. 20% | Źródło pośrednie | MERICS, People's Daily, UBTech |
| 17 | BMW Lipsk: 2 roboty AEON od 12.06.2026; „regularna produkcja” do końca 2026 | Źródła niskiej jakości dla liczby sztuk | BMW Group, Hexagon |
| 18 | Mercedes: mniej niż 10 Apollo w Berlinie i Kecskemét | Stan z 2025 r. | Mercedes-Benz, Apptronik |
| 19 | Siemens Erlangen: 60 pojemników/h; ponad 8 h (TNW) czy ponad 30 min autonomii (Humanoid) | Sprzeczne dane | Humanoid, Siemens |
| 20 | Umowy Schaefflera: Humanoid (czterocyfrowa liczba do 2032), Hexagon (co najmniej 1 000 w 7 lat, źródło wtórne), NEURA (połowa czterech cyfr do 2035) | Umowy ramowe, źródła wtórne | Schaeffler IR |
| 21 | Renault–Wandercraft: 350 robotów w 18 miesięcy (data ogłoszenia) | Brak daty | Renault, Wandercraft |
| 22 | Hyundai: sekwencjonowanie 2028, montaż 2030, 30 000 sztuk rocznie, 25 000 Atlasów | Plany | Hyundai Motor Group |
| 23 | Gartner: mniej niż 20 firm w produkcji do 2028 | Podstawa rozdziału o terminach | Komunikat Gartnera z 21.01.2026 |
| 24 | McKinsey: 150 000–500 000 USD → 20 000–50 000 USD; 370,00 mld USD w 2040 | Cytat ze streszczenia | McKinsey (IV 2026, VI 2025) |
| 25 | IDTechEx: 114 700 → 37 000 USD; poniżej 5 USD/h; zwrot 6 / 15 mies.; 29,50 mld USD w 2036 | Cytat ze streszczenia | IDTechEx „Humanoid Robots 2026–2036” |
| 26 | Goldman Sachs: koszt materiałów 27 700 → 13 500 USD; Morgan Stanley: 46 000 wobec 130 000 USD | Pojedyncze źródła wtórne | Raporty bankowe |
| 27 | JPMorgan: 2 humanoidy ≈ 1 pracownik, 1,2–1,3 w 2030 | Newsletter inwestycyjny | Notatka JPMorgan |
| 28 | NEURA: 98 000 / 60 000 EUR, dostępność koniec 2026 | Termin już przesunięty | Strona rezerwacji NEURA |
| 29 | Ceny Unitree G1 (13 500 / 16 000 / 21 600 USD), x-kom ok. 100 000 zł; −72% średniej ceny | Rozbieżne ceny | Sklep Unitree, x-kom, prospekt emisyjny |
| 30 | Ceny wynajmu w Chinach i 5 500 zamówień SHAREBOT | Media | CNN, Notebookcheck, AgiBot |
| 31 | Formic: 8 USD/h, ok. 60,00 mln USD kapitału, ok. 250,00 mln USD finansowania floty, 97% odnowień, 99,43% dostępności | Deklaracje spółki | Formic |
| 32 | RobCo: ponad 1,00 mld USD (głównie sprzedaż akcji pracowniczych), ponad 1 000 robotów | Wycena ogłoszona przez spółkę | SiliconANGLE, Dealroom |
| 33 | Ceny cobotów w RaaS (Rapid 2 100 USD; Olmia 1 950 EUR — strona ok. 5 lat; polski poradnik 5 000–15 000 zł) | Stare lub niskiej wiarygodności | Dostawcy |
| 34 | Warunki leasingu Elmark (0% / 1,99%, 1% wartości końcowej) i data oferty | Data niewidoczna | Elmark |
| 35 | Ulga na robotyzację: etap projektu przedłużenia, 673,00 mln zł, prawo właściciela floty lub klienta do ulgi | Kluczowe dla wyboru wariantu | MF, RCL, doradca podatkowy (interpretacja indywidualna) |
| 36 | Koszt pracy w Polsce: ok. 19,10 EUR/h (źródło wtórne) | Poziom nie z Eurostatu | Eurostat lc_lci_lev |
| 37 | Gęstość robotyzacji Polski ok. 102 | Agregator | IFR World Robotics |
| 38 | Rozporządzenie maszynowe: stosowanie od 20.01.2027; art. 3 pkt 16, art. 18; numeracja załącznika I część A | Tekstu nie czytano | EUR-Lex |
| 39 | Omnibus AI 2026/1744: daty 2.12.2027 i 2.08.2028; maszyny w sekcji B; rozbieżność co do terminu aktów delegowanych | Źródła kancelarii | Dziennik Urzędowy UE |
| 40 | Dyrektywa o odpowiedzialności za produkt: granica 8/9.12.2026; etap polskiej transpozycji | Tekstu nie czytano | EUR-Lex, Sejm |
| 41 | Status ISO 25785-1 (CD czy WD, ankieta DIS po IX 2026) | Etykiety niespójne | Katalog ISO |
| 42 | Ustawa o systemach AI (Dz.U. 2026 poz. 1003): daty wejścia w życie (sierpień czy 28.10.2026) | Rozbieżne | ISAP / ELI |
| 43 | KSC: Dz.U. 2026 poz. 252, w mocy od 3.04 (lub 2.04) 2026; wycofanie w 4–7 lat; brak listy na 6.08.2026 | Rozbieżne | gov.pl, ISAP |
| 44 | Luki Unitree: CVE, adresy IP MQTT, interwał 300 s, poprawka w firmware 1.5.5.0 | Pełnych tekstów nie czytano | Rejestry CVE, arXiv 2509.14139 |
| 45 | FCC DA 26-786 (28.07.2026) i zwolnienie DA 26-789; data wpisu Unitree na listę 1260H (VI czy VII 2026) | Rozbieżne | FCC, Departament Obrony USA |
| 46 | Licencje GR00T N1.7 (Apache 2.0?) i π0.5 (oznaczenie Gemma) | Konflikt licencyjny | Karty modeli |
| 47 | Data Act art. 32, terminy CRA (11.09.2026; 11.12.2027), akt delegowany RED | Wiedza wstępna | EUR-Lex |
| 48 | Kapitał i wyceny: 4,60 mld USD (2025), 11,00 / 6,62 / 13,80 mld USD (2026); Figure 39,00 mld; NEURA 4,00 mld EUR czy 7,00 mld USD; Apptronik 5,00 czy 5,50 mld; PI ponad 11,00 mld (rozmowy) | Różne definicje i źródła | PitchBook, Dealroom, komunikaty spółek |
| 49 | Unitree: +487%, −55% od szczytu, C/Z ok. 1 300; Humanoid UK: 34 000 zamówień wstępnych za 2,40 mld USD | Media; brak dostaw | Giełda w Szanghaju, Reuters, Humanoid |
| 50 | Z obecnych materiałów: „60 bln $ globalny rynek wynagrodzeń” | Notatki: udział płac ok. 52% PKB świata (niezweryfikowane) albo „ok. 30 bln USD” Morgan Stanleya (słabe źródło) | ILO World Employment and Social Outlook; Morgan Stanley |
| 51 | Z obecnych materiałów: „$6,2 → $25 mld, CAGR 32%”, „1 mln robotów w Amazonie”, „Polska straci 4 mln osób w wieku produkcyjnym do 2040”, „38M → 34M” | Brak potwierdzenia w notatkach | Źródła pierwotne cytowane w decku; GUS |
| 52 | Z obecnych materiałów: „Figure 02: 56 stopni swobody”, „8 h na 1 ładowaniu”, „nauka po 5–20 pokazach” | Sprzeczne z notatkami | Figure; specyfikacje producentów |
| 53 | Z obecnych materiałów: założenie 7 000 h rocznie (ok. 3,5 etatu) dla humanoida | Niesprawdzone dla humanoidów | Dane producentów w umowie pilotażowej |
| 54 | Kursy walut (1 USD ≈ 3,92 zł, 1 EUR ≈ 4,38 zł, 7 CNY/USD) | Źródło wtórne; juan implikowany | Tabela A NBP z dnia publikacji |
