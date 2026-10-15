# Robot rental / Robot-as-a-Service (RaaS) business models and economics for cobots and humanoids, as of October 2026

**How these notes were made (please read first):**
- **Research date:** 15 October 2026.
- **Sources were not read in full.** Page fetching (WebFetch) failed on every domain (DNS error). All findings below come from search-engine result summaries of the cited pages. Before any figure goes into client-facing material, open the source and check it.
- **Search budget ran out.** Some threads could not be followed up. They are listed under Gaps.
- **Price labels:**
  - **[LIST]**: a price the provider publishes itself.
  - **[REPORTED]**: a price from press, filings or interviews.
  - **[ESTIMATE]**: a third-party guess, or a figure from a low-authority aggregator or blog.
  - **[MY CALC]**: my own arithmetic.
- **Exchange rates used for conversions ([MY CALC]):**
  - EUR/PLN 4.3845 and USD/PLN 3.9212, as of 13 Oct 2026. These come from comparic.pl, not directly from NBP — [comparic.pl](https://comparic.pl/dolar-juz-powyzej-392-zl-kurs-pln-traci-13-pazdziernika-2026-r/).
  - That gives roughly 1 USD ≈ 0.894 EUR ≈ 3.92 PLN, and 1 EUR ≈ 4.38 PLN.
  - CNY: I use about 7.0 CNY per USD, implied by the conversions the sources themselves quote (they range from 6.8 to 7.2). This is not an official rate. On that basis 1 CNY ≈ 0.128 EUR ≈ 0.56 PLN.
  - GBP: I use about 1 GBP ≈ 1.15 EUR. This rate is unsourced and only approximate.
- **Labour cost reference:** 58 PLN per hour, about €13.2 or $14.8 ([MY CALC]). This is the Polish production-hall labour cost the brief gives.

---

## 1. Humanoid RaaS, leasing and rental: offers, prices, minimum terms and what is included

### Takeaway
- **Agility Digit is the only industrial humanoid RaaS price backed by a filing.** Agility's S-4 (2026) gives about $8,500 per month plus about a $25,000 deployment fee. That is roughly €7,600 or 33,300 PLN per month.
  - At 2 shifts (336 h/month) this is about 99 PLN per robot-hour.
  - At 120 h/week it is about 64 PLN per hour.
  - Both are at or above the 58 PLN human benchmark before any productivity penalty.
- **Everywhere else, industrial humanoid rental prices are not public.** Figure, Apptronik, NEURA, Humanoid (UK) and UBTech have no verified rate.
- **The visible rental market is mostly events.** In China, daily event rental prices fell from over ¥10,000 (2025) to ¥300–2,000 (2026). In the Netherlands, a Unitree G1 rents for about €975–1,295 per month all-in. That robot is mainly for research and events, not production.

### Cited findings

**Agility Robotics (US), Digit**
- [REPORTED, S-4, 2026] Under RaaS, Agility keeps ownership and charges about $8,500 per month (about $102,000 per year) for the robot, software and maintenance, plus a $25,000 deployment fee. Over an assumed five-year life that is about $535,000 per robot — [The Robot Report](https://www.therobotreport.com/agility-robotics-reports-18m-revenue-ahead-of-humanoid-spac/).
  - The direct-purchase illustration is about $200,000 upfront, a $20,000 deployment fee and about $36,000 per year for software and maintenance. That is about $400,000 over five years — [The Robot Report](https://www.therobotreport.com/agility-robotics-reports-18m-revenue-ahead-of-humanoid-spac/).
  - Conversions [MY CALC]: $8,500/month ≈ €7,600 ≈ 33,300 PLN. $25,000 deployment fee ≈ €22,400 ≈ 98,000 PLN. $200,000 purchase ≈ €179,000 ≈ 784,000 PLN.
- The S-4 says these figures are illustrative and that final customer contracts could differ. Operating hours and site status are company claims inside a regulatory filing — [Physical AI Guide](https://physicalaiguide.com/guides/agility-robotics-s4-digit-economics-evidence/).
- The model depends on there being enough productive work for about 120 hours every week — [Robotics CFO substack](https://roboticscfo.substack.com/p/agility-robotics-and-the-scaling).
- The claimed sub-one-year payback leaves out about $15,000 of deployment cost and about $15,000 per year of delivery cost per unit — [Humanoids Daily](https://www.humanoidsdaily.com/news/agility-s-numbers-are-in-1-8m-in-sales-a-138m-loss-and-a-backlog-owed-to-an-insider).
- Commercial reality in 2025:
  - Net sales were $1.8M against an operating loss of about $140M, with roughly $100M of cash burned — [The Robot Report](https://www.therobotreport.com/agility-robotics-reports-18m-revenue-ahead-of-humanoid-spac/).
  - The "$300M+" backlog is potential contract value under three-year RaaS agreements tied to deployment milestones, and is not revenue — [RuntimeWire](https://runtimewire.com/article/agility-robotics-fall-spac-unitree-debut).
  - That backlog comes mostly from one 1,000-robot contract with an undisclosed customer — [TechTimes](https://www.techtimes.com/articles/319709/20260704/humanoid-robot-stock-agility-robotics-eyes-nasdaq-debut-25b-spac-deal.htm). Humanoids Daily says the backlog is "owed to an insider" — [Humanoids Daily](https://www.humanoidsdaily.com/news/agility-s-numbers-are-in-1-8m-in-sales-a-138m-loss-and-a-backlog-owed-to-an-insider).
  - TechTimes separately cites about $37.2M trailing revenue. This conflicts with $1.8M and could not be reconciled.
- The SPAC deal is with Churchill Capital XI at about a $2.5B valuation, with roughly $620M of gross proceeds including a $200M PIPE led by Foxconn. Closing is expected later in 2026, subject to approvals — [The Robot Report](https://www.therobotreport.com/agility-robotics-reports-18m-revenue-ahead-of-humanoid-spac/); [Mezha](https://mezha.net/eng/news/a2b78201_agility_robotics_announces/).
- Customers named: GXO, Schaeffler, Toyota Motor Manufacturing Canada, Amazon, Mercado Libre. GXO's rate has never been disclosed. Schaeffler reportedly signed an unpriced direct-purchase deal — [RuntimeWire](https://runtimewire.com/article/agility-robotics-fall-spac-unitree-debut); [Robozaps, low authority](https://blog.robozaps.com/b/agility-robotics-digit-review).
- [ESTIMATE / company claim, secondary] Digit's operating cost is said to be about $10–12 per hour today (≈ €9–10.7 ≈ 39–47 PLN), with a path to $2–3 per hour at scale. The widely quoted "$30/hour" is a fully loaded human-labour benchmark, not a Digit rental rate. Sources conflict on this, and no primary quote was found — [grabarobot](https://www.grabarobot.com/blog/agility-digit-humanoid-price-guide-2026/); [robopulse](https://robopulse.net/news/agility-digit-v5-price-breakeven/).
- Digit 5 was unveiled in September 2026 with higher payload, faster charging and a new safety system — [The AI Insider](https://theaiinsider.tech/2026/09/15/agility-robotics-unveils-digit-5-with-higher-payload-faster-charging-and-new-safety-system/).

**Figure AI and Apptronik (US)**
- No official price exists for either.
  - Figure 03: a single low-quality review lists a $400–600 per month lease "attributed to the CEO". This is unverified — [Robozaps](https://blog.robozaps.com/b/humanoid-robot-price); [theresarobotforthat](https://theresarobotforthat.com/blog/humanoid-robot-prices/).
  - Apptronik Apollo: no list price; it is sold through enterprise pilots. One comparison site says "from $120,000" [ESTIMATE]. The under-$50,000 figure is a target at scale — [robohub](https://robohub.app/compare/1x-neo/vs/apptronik-apollo); [valueaddvc](https://valueaddvc.com/blog/humanoid-robots-in-2026-figure-apptronik-1x-and-tesla-optimus-compared).
- An August 2026 review found that only 12 of 58 humanoid robots have a verified price — [theresarobotforthat](https://theresarobotforthat.com/blog/humanoid-robot-prices/).

**1X (Norway/US), NEO (consumer)**
- [LIST, consumer] $20,000 to buy, or $499 per month by subscription (≈ €446 ≈ 1,960 PLN), with a $200 deposit, US pre-order. An August 2026 review found no publicly confirmed customer delivery — [Robozaps](https://blog.robozaps.com/b/humanoid-robot-price); [theresarobotforthat](https://theresarobotforthat.com/blog/humanoid-robot-prices/).
- This is a household product and not a factory benchmark.

**UBTech (China), Walker S2**
- No official price. Estimates run from $68k to $120k, with early deals reported near $90k and one quote at $160k [ESTIMATE] — [Robozaps](https://blog.robozaps.com/b/ubtech-walker-s-review); [robotsourced](https://robotsourced.com/robots/humanoids/ubtech-walker-s2/).
- One reseller page lists RaaS at $5,000 per month (≈ €4,470 ≈ 19,600 PLN) against a $180,000 direct purchase. The page is about 600 days old and unverified [ESTIMATE] — [robotsasia](https://www.robotsasia.com/UBTECH-Walker-S2.htm?cs_region=robotsasia).
- A European profile says public prices, delivery in the Netherlands and lease options are not yet confirmed — [robotleasen](https://robotleasen.com/en/robots/ubtech-walker-s2/).
- 2025 orders reported at about ¥1.4B (~$200M) and 1,079 full-size humanoids. Another source says more than ¥800M. These conflict — [Robozaps](https://blog.robozaps.com/b/ubtech-walker-s-review).

**Humanoid (UK, "HMND 01")**
- Systems are offered through a RaaS model. No public price; the company runs Early Access sign-ups. A $100,000 listing is marked "Not Verified" — [humanoid.guide](https://humanoid.guide/product/hmnd-01/); [theresarobotforthat](https://theresarobotforthat.com/blog/humanoid-robot-companies-2026-complete-guide/).
- The Schaeffler agreement is reported as a four-digit number of wheeled units by 2032, delivered as RaaS. Another aggregator calls it a 1,000-robot order and adds that Bosch will contract-manufacture for Europe. These details conflict and are unverified — [Robozaps](https://blog.robozaps.com/b/best-humanoid-robots).
- July 2026: $152M Series A at a $1.35B post-money valuation — [Forbes](https://www.forbes.com/sites/johnkoetsier/2026/07/21/humanoid-raises-152-million-at-135-billion-valuation-europes-newest-robot-unicorn/).
- The claim of "up to 50% labour cost savings" is the company's own — [theresarobotforthat](https://theresarobotforthat.com/blog/humanoid-robot-companies-2026-complete-guide/).

**NEURA Robotics (Germany), 4NE-1**
- No lease or rental price found. A German price radar lists it as "Preis offen" (price open) — [roboterradar.de](https://roboterradar.de/preise/).

**European humanoid rental and leasing offers found (mostly Unitree and other Chinese hardware)**
- **BotLease (Netherlands/Belgium)** [LIST, vendor pages about 139 days old, internally inconsistent] — [botlease.nl/prijzen](https://botlease.nl/prijzen); [botlease.nl/huren](https://botlease.nl/huren); [botlease.nl/robot-huren-evenement](https://botlease.nl/robot-huren-evenement); [botlease.nl/robot-as-a-service](https://botlease.nl/robot-as-a-service)
  - Unitree G1 operational lease: €975 per month all-in (≈ 4,270 PLN) on the price page, or €1,295 per month (≈ 5,680 PLN) for a 36-month lease on another page. The G1 purchase price is given as €16,000.
  - Contract terms: the 36-month lease is fixed for the first year, then cancellable monthly with one month's notice.
  - Flexible monthly rental "from €690" (≈ 3,025 PLN). For the G1 it is €2,450 per month (≈ 10,740 PLN), cancellable monthly.
  - Operational lease "from €485 per month" (≈ 2,125 PLN).
  - Included: ready-to-use delivery, maintenance, insurance and compliance papers. A replacement unit usually arrives within a few working days.
  - Events: €1,250 to €3,350 per day, operator included. The G1 is quoted at €1,450 or €2,550 per day, depending on the page.
  - Four-week pilot: €1,695. Volume discounts: 8% from 3 units, 15% from 10 units.
- **Bipedal.de (Germany)** [LIST]: Booster K1 at €2,000 per week plus VAT (≈ 8,770 PLN). Unitree G1 at €3,500 per week plus VAT (≈ 15,350 PLN) — [bipedal.de](https://www.bipedal.de/humanoide-roboter-mieten-flotte-erweiterung_1).
- **German guide** [ESTIMATE]: humanoid rental runs €3,000–8,000 per month depending on model. The first series-ready rental offers for the German market are expected only at the end of 2026, and all B2B industrial terms are non-public — [roboter-spezialist.de](https://roboter-spezialist.de/roboter-mieten-oder-kaufen/); [roboratgeber.de](https://www.roboratgeber.de/raas.html).

**China rental market (mostly events; prices falling sharply)**
- Unitree G1 standard daily rental fell from over ¥10,000 (≈ $1,400 ≈ 5,500 PLN) to about ¥5,000 in the second half of 2025. It reached ¥2,000–3,000 per day (≈ $280–420 ≈ 1,100–1,700 PLN) by early 2026, with offers below ¥1,000 (≈ $140 ≈ 560 PLN) — [humanoid.guide](https://humanoid.guide/humanoid-robot-rental-prices-fall-as-chinese-supply-grows/); [GSMGoTech, Oct 2026](https://www.gsmgotech.com/2026/10/humanoid-robot-rental-prices-crash-from.html); [Notebookcheck](https://www.notebookcheck.net/Humanoid-robot-rental-prices-crater-as-dedicated-exchanges-appear.1421009.0.html).
- Around the 2026 Spring Festival, basic models rented for ¥3,000–4,000 per day — [GSMGoTech](https://www.gsmgotech.com/2026/10/humanoid-robot-rental-prices-crash-from.html).
- March 2026: JD.com's own rental store priced a Unitree humanoid from ¥1,796 per day (≈ $250 ≈ 1,000 PLN), including an on-site engineer [LIST]. Some Xianyu merchants advertise Unitree rentals at ¥289 per day (≈ $40 ≈ 160 PLN) [LIST, advertised, not transaction prices] — [GSMGoTech](https://www.gsmgotech.com/2026/10/humanoid-robot-rental-prices-crash-from.html); [Stuff, 12 Oct 2026](https://stuff.co.za/2026/10/12/humanoid-robots-are-now-cheaper-than-ever-renting/).
- AGIBOT's SHAREBOT platform rents humanoids from ¥3,500 per day (≈ $517 ≈ 2,030 PLN), including shipping and a human operator who controls and programs the robot. Another provider includes on-site operators and safety personnel at no extra charge — [hellochinatech](https://hellochinatech.com/p/robots-for-rent-humans-included); [bitcoin.com news, ~$443/day](https://news.bitcoin.com/technology/you-can-now-rent-a-humanoid-robot-in-china-for-443-a-day-thousands-already-have-49201/).
- A household-service robot maker at the World Robot Conference rents its robot for ¥3,000 per month (≈ 1,650 PLN) against a build cost of over ¥20,000. It first offered one-day trials and weekly rental at about ¥700 — [nation.com.pk, Aug 2026](https://www.nation.com.pk/26-Aug-2026/chinese-company-making-robots-cheaper-renting); [tribune.com.pk](https://tribune.com.pk/story/2626084/chinas-robots-go-up-for-rent).
- Market size: China's robot-rental market exceeded ¥1bn (~$148M) in 2025, according to the Shanghai Pudong government. iiMedia expects it to pass ¥10bn in 2026 — [tribune.com.pk](https://tribune.com.pk/story/2626084/chinas-robots-go-up-for-rent).
- Policy: Beijing's development area encourages robot financing leases and subsidises 10% of rental costs, capped at ¥3M per enterprise per year — [tribune.com.pk](https://tribune.com.pk/story/2626084/chinas-robots-go-up-for-rent).
- CNN (30 Jun 2026) reported that the rental market is "exposing the limits" of Chinese robots. Only the headline and snippet were available — [CNN](https://us.cnn.com/2026/06/30/tech/china-humanoid-robot-ai-rental-intl-hnk-dst).
- People's Daily (Mar 2026) says robot rentals are moving from niche novelty to mainstream service — [People's Daily](https://en.people.cn/n3/2026/0303/c98649-20430652.html).

### Inferences
- **Pricing is per robot-month, not per hour.** Every industrial humanoid RaaS reference found prices per robot-month, plus an upfront deployment fee (Agility: $25k). None prices per hour. Billing a humanoid per robot-hour would make Robotify unusual, and Robotify would carry the utilisation risk.
- **What Digit at $8,500 per month costs per hour [MY CALC]:**

| Usage | Hours per month | Cost per hour | vs 58 PLN human |
|---|---|---|---|
| 1 shift | ~168 h | $50.6 ≈ 198 PLN | ~3.4× |
| 2 shifts | ~336 h | $25.3 ≈ 99 PLN | ~1.7× |
| 120 h/week | ~520 h | $16.3 ≈ 64 PLN | ~1.1× |

  - The secondary JPMorgan figure (see section 4) is that about two humanoids currently match the output of one worker. If that holds, the effective cost per human-equivalent hour roughly doubles.
  - In other words, a 2026 industrial humanoid does not beat Polish labour on cost.
- **The European humanoid "rental" offers on the market are almost all Unitree G1-class robots,** used for events, research and education. They are not proven production workers.
  - The BotLease G1 at €975 per month works out to about €2.9 or 12.7 PLN per hour at 336 h/month [MY CALC], but the G1's useful productive output in a factory is unproven.
  - These offers are useful as a template for contract structure: first year fixed, then monthly with one month's notice, insurance and maintenance included, a replacement unit within days, a paid four-week pilot, volume discounts.
- **China's fall in daily event prices points to oversupply and low utilisation of event fleets.** It shows how quickly rental yields can collapse when hardware gets cheaper. A humanoid rental fleet bought at today's prices risks fast residual-value erosion.

### Gaps
- No primary Agility statement of an hourly rate. The S-4 hours and uptime assumptions could not be read directly (EDGAR fetch was not possible).
- No verified RaaS or lease prices for Figure, Apptronik, NEURA, Humanoid (UK), UBTech in Europe, or Unitree H2 for industrial use.
- No Chinese long-term industrial (factory) humanoid lease prices. Only event daily rates and one household monthly rate were found.
- No information on teleoperation-included packages for industrial humanoids in Europe.
- Minimum contract terms for industrial humanoids (other than "three-year RaaS agreements" in Agility's backlog) were not found.

---

## 2. Cobot RaaS and rental: Formic, Rapid Robotics, Ready Robotics, UR, FANUC/ABB/KUKA, European and Polish rental/leasing offers

### Takeaway
- **Cobot RaaS clusters around two price shapes:**
  - **Per hour:** about $8–24 per robot-hour (Formic), roughly 31–94 PLN.
  - **Per month:** about €1,900–4,000 for a simple cobot cell, roughly 8,300–17,500 PLN (Rapid Robotics $2,100; Olmia €1,950; RobCo "a couple thousand dollars"). Polish RaaS guides say 5,000–15,000 PLN per robot per month.
- **Pure financial leasing of the bare cobot arm is far cheaper.** The Polish UR distributor Elmark shows a €40k cobot at €1,100 per month (0%, 36 months) or €693 per month (1.99%, 60 months), with a 1% residual value.
- **A RaaS provider can therefore finance the arm cheaply and earn its margin** on integration, service, redeployment and utilisation risk.

### Cited findings

**Formic (US)**
- [REPORTED] Robots "starting as low as $8 per hour", with guaranteed uptime, maintenance and engineering support — [Robotics 24/7 / Nulogy](https://www.robotics247.com/article/nulogy_formic_partner_provide_software_robotics_service_raas).
  - $8 ≈ €7.2 ≈ 31 PLN per hour.
  - A third-party 2026 guide says $8–24 per hour (≈ 31–94 PLN), depending on weld complexity, with no setup fees or long-term contracts [ESTIMATE] — [cobotfinder](https://www.cobotfinder.com/guides/robotics-as-a-service-companies).
  - A podcast summary describes a Texas fabricator automating welding for $6.50 per hour (≈ 25 PLN) — [iVoox](https://www.ivoox.com/en/the-new-robot-business-model-robots-as-a-audios-mp3_rf_179105016_1.html).
- Model:
  - Formic programs, installs and maintains systems at its own cost. Customers pay only on system uptime, with nothing until output meets performance guarantees.
  - Scoping and consulting are free. The package includes 24/7 monitoring, 100% maintenance and 99%+ uptime, and customers pay nothing for downtime — [automation.com](https://www.automation.com/article/first-fully-customized-robotics-service-hire); [automation.com funding](https://www.automation.com/article/formic-raises-27-4-million-automation-manufacturer).
  - One source describes a fixed monthly rate, which conflicts with the hourly framing.
- Company-reported traction: 60+ facilities, $20M+ total contract value, 97% renewal rate, 99.43%+ uptime over the last 12 months — [automation.com](https://www.automation.com/article/formic-raises-27-4-million-automation-manufacturer).
  - Earlier: 100,000 production hours at more than 99% uptime in about 2.5 years — [search summary of Formic/press materials](https://www.robotics247.com/article/formic_offers_robotics_as_a_service_and_financing_to_manufacturers).
- Funding round: $27.4M Series A+ led by Blackhorn, with Mitsubishi HC Capital America (a leasing company), NEC and others. Total Series A is over $52M. The date is unclear: the press reads as 2024, while Tracxn lists an August 2026 item — [automation.com](https://www.automation.com/article/formic-raises-27-4-million-automation-manufacturer); [Tracxn](https://tracxn.com/d/companies/formic/__kIGIitoSsqOBd_l9LSQvh5VA_W6oiy82uH7CCEFZunQ).
- Formic also offers straight financing alongside RaaS — [Robotics 24/7](https://www.robotics247.com/article/formic_offers_robotics_as_a_service_and_financing_to_manufacturers).

**Rapid Robotics (US)**
- [ESTIMATE / guide-reported] Flat $2,100 per month (≈ €1,880 ≈ 8,230 PLN). It covers hardware, software, maintenance, support, installation and basic programming, with a 3-month minimum contract — [articsledge](https://www.articsledge.com/post/robots-as-a-service-raas); [robotomated](https://robotomated.com/learn/market/robotics-as-a-service-raas-guide).
- Another 2026 guide gives $2,200–3,500 per month on a 12–24 month term. An older listing says "$25K a year" — [roboselect360](https://roboselect360.com/en/ressources/robot-as-a-service-humanoid-robots.html); [roboticstomorrow](https://www.roboticstomorrow.com/company_directory/rapid-robotics/12302).
- No result confirmed a shutdown or acquisition of Rapid or Ready Robotics. Their status in 2026 is unverified.

**RobCo (Germany/US, modular cobots for SMEs)**
- No public rate card; pricing is per application, with "a predictable monthly rate with nothing upfront" — [teardown.ai](https://www.teardown.ai/companies/robco); [rob.co](https://www.rob.co/en-us).
- An executive described RaaS as renting a robot for "a couple thousand dollars a month, depending on complexity", with deployment and servicing included [REPORTED] — [Machine Design Q&A](https://www.machinedesign.com/markets/robotics/video/55405168/robco-qa-robco-on-robotics-as-a-service-and-the-move-toward-physical-ai).
- A third-party estimate puts modular arms at about €2,000–4,000 per month (≈ 8,770–17,540 PLN) [ESTIMATE, low authority] — [qwe.edu.pl](https://www.qwe.edu.pl/tutorial/robco-1b-unicorn-raas-deploy-guide/).
- The RaaS model targets medium-sized firms (Mittelstand) — [all-about-industries](https://www.all-about-industries.com/automation-as-a-rental-model-a-dbcf1ad3813f371c4d31193501b4639b/).

**Generic benchmarks [ESTIMATE]**
- Leasing a cobot arm: about $1,200–3,000 per month, with commissioning and training on top — [servicerobotco](https://servicerobotco.com/pricing/robot-pricing-guide).
- Cobot subscriptions: about $1,500 per month for simple cobots — [robotomated](https://robotomated.com/learn/market/robotics-as-a-service-raas-guide).

**Universal Robots (Teradyne) with DLL (Rabobank)**
- Financial-services leasing programme launched around 2020. Payments can be scheduled to match cash flow, and customers can upgrade or add cobots during the term.
- End-of-term options: buy at a reduced price, upgrade, extend or return. Quotes go through UR distributors working with DLL in each country; DLL operates in 30+ countries — [UR press](https://www.universal-robots.com/news-and-media/news-center/universal-robots-launches-financial-services-leasing-program-in-collaboration-with-dll/); [DLL press](https://www.dllgroup.com/en/press/latest/universal-robots-launches-financial-services-program).
- UK/Ireland launch offer [LIST, about 2020]: cobot lease from £450 per month (≈ €520 ≈ 2,270 PLN, approximate) over 36 months, with no upfront payment — [Drives & Controls](https://drivesncontrols.com/news/fullstory.php/aid/6835/Lease_a_cobot_from__A3450_per_month_with_no_upfront_payment.html).

**Poland: Elmark (UR distributor), cobot leasing** [LIST; date of offer not visible in the snippet] — [roboty.elmark.com.pl/leasing](https://roboty.elmark.com.pl/leasing)
- Terms: one instalment upfront, 1% residual value, initial fee capped at €250.
- Example A, €40,000 at 0% over 3 years: 36 × €1,100 (≈ 4,820 PLN per month), €400 residual, total €40,000 plus the fee.
- Example B, €40,000 at 1.99% over 5 years: €693.45 per month (≈ 3,040 PLN), €400 residual, total €42,007 plus the fee. The page text says "36 instalments", but the total only works with 60.
- The rate covers the bare robot only, without accessories.
- Elmark notes that under operational leasing the robot stays the lessor's property and costs are spread over about 2–4 years — [Elmark blog](https://www.elmark.com.pl/blog/jak-sfinansowa-robotyzacj-w-brany-automotive-ulgi-dotacje-kredyty-i-leasing-cobotw-ur).

**Poland: other financing and rental signals**
- Cobots at 50,000–150,000 PLN lease at about 850–2,550 PLN per month, assuming 10% down and 60 months [ESTIMATE] — [search summary of Polish leasing guides, e.g. leasing-expert.pl](https://leasing-expert.pl/leasing-robotow-przemyslowych/); [pro-lease.pl](https://www.pro-lease.pl/leasing-robotow-przemyslowych-jak-sfinansowac-automatyzacje-produkcji/).
- A Polish RaaS guide puts a subscription at 5,000–15,000 PLN per robot per month (≈ €1,140–3,420), against 100,000–250,000 PLN to buy [ESTIMATE] — [polskiprzemysl.com.pl](https://polskiprzemysl.com.pl/wynajem-robotow/).
- One Polish robot-leasing programme [LIST] offers 12–48 months with service included and a fixed instalment. Example: about 2,880 PLN per month on 12 months down to about 1,990 PLN on 48 months.
  - The robot type was not identified; it is possibly a service or cleaning robot — [search summary, Polish rental pages, e.g. solore.pl](https://solore.pl/najem-robotow/); [digiton](https://digiton.com.pl/en/robot-rental-robot-as-a-service-raas/).
- In Poland the OPEX rental model is offered mainly for AMRs and cleaning robots, for example by ETISOFT and Strefa Robotów — [ETISOFT](https://etisoft.com.pl/etiside/czym-jest-wynajem-robotow-amr-w-modelu-opex-i-kiedy-sie-oplaca/); [strefarobotow.pl](https://strefarobotow.pl/).
  - A 2017 article said robot rental had "not yet taken hold" in Poland and cited a US provider from $15 per hour with a 30-day minimum — [fabryka-robotow.pl](https://fabryka-robotow.pl/2017/11/wypozyczalnia-robotow/).
  - Palletising robot leasing is promoted by integrators — [piazap](https://piazap.com.pl/2025/10/13/leasing-robotow-do-paletyzacji-i-obslugi-linii-nowoczesny-sposob-na-automatyzacje-bez-duzych-nakladow/).

**Netherlands**
- WiredWorkers rents cobots for a fixed monthly fee, with a 3-month minimum term, 3-month notice period and a deposit of 3 months' rent. No price published — [WiredWorkers](https://www.wiredworkers.io/nl/services/cobot-verhuur/).
- Olmia Robotics: cobot rental from €1,950 per month (≈ 8,550 PLN) for a simple configuration. Weekly or hourly rental is possible, and so is a version with an experienced operator. The page is about 5 years old [LIST, possibly outdated] — [Olmia FAQ](https://www.olmia-robotics.nl/over-ons/faq/); [made-in-europe.nu](https://made-in-europe.nu/2017/01/olmia-robotics-start-verhuur-cobot-met-ervaren-productiemedewerker/).
- The Cobot Factory offers rental or purchase, with no prices — [thecobotfactory.nl](https://www.thecobotfactory.nl/).

**Polish leasing market context (ZPL)**
- Machinery and equipment leasing in H1 2026 was 13.0 bn PLN, up 1.7% y/y. In Q1 2026 it was 6.4 bn PLN, up 8.8% y/y. Growth came from food-industry, medical and metalworking machines; agricultural machinery was weaker. The segment is about 21% of the market — [superauto.pl](https://www.superauto.pl/artykuly/rynek-leasingu-po-i-polroczu-2026-podsumowanie-wnioski); [go-leasing](https://go-leasing.pl/branza-leasingowa-po-i-kwartale-2026/); [vleasing](https://vleasing.pl/blog/najpopularniejsze-przedmioty-leasingowane-w-polsce-i-polrocze-2026/).
- ZPL forecasts the whole leasing market to grow 8.4% in 2026, to 129.5 bn PLN. An earlier communication said 129.7 bn — [superauto.pl](https://www.superauto.pl/artykuly/rynek-leasingu-po-i-polroczu-2026-podsumowanie-wnioski); [mycompanypolska](https://mycompanypolska.pl/artykul/prawie-62-mld-zl-na-inwestycje-przedsiebiorstw-z-leasingiem/21027).

**Polish robotics tax relief (ulga na robotyzację)**
- The relief currently covers the acquisition or leasing of new industrial robots and related machines, with up to 50% of costs deductible from the tax base. NSA (the top administrative court) sided with a taxpayer on operational leasing with buy-out, after four years of KIS (tax office) refusals — [inovgroup](https://inovgroup.pl/blog/leasing-operacyjny-robota-ulga-robotyzacja-nsa/); [Elmark](https://roboty.elmark.com.pl/ulga-na-robotyzacje).
- On 29 Sep 2026 the government adopted a draft extending the relief by 10 years, to the end of 2036 (still a draft, not yet law). The draft clarifies that depreciation write-offs, not the full purchase price, are the qualifying cost — [wnp.pl](https://www.wnp.pl/rynki/rzad-przyjal-projekt-przewidujacy-przedluzenie-na-kolejne-10-lat-ulgi-podatkowej-na-robotyzacje,1103952.html); [Gazeta Prawna](https://edgp.gazetaprawna.pl/podatki/pit/artykuly/11321490,zmiany-w-ulgach-podatkowych-2027.html); [Wprost](https://biznes.wprost.pl/twoj-portfel/12458850/zmiany-w-ulgach-podatkowych-od-2027-roku-ulga-na-internet-ma-zniknac.html); [prawo.pl](https://www.prawo.pl/podatki/ulga-na-robotyzacje-i-ulga-na-ekspansje-plany-rzadu-2027,1551657.html).
- KPMG on how tax authorities define an "industrial robot" — [KPMG](https://kpmg.com/pl/pl/wiedza/podatki/ulga-na-robotyzacje-w-praktyce-definicja-robota-przemyslowego-w-ujeciu-organow-podatkowych-blog-podatkowy.html).

### Inferences
- **Market price corridor for a rented, serviced cobot cell (mid-2026):**
  - About €1,900–4,000 per month (≈ 8,300–17,500 PLN), or $8–24 per robot-hour (≈ 31–94 PLN).
  - At 2 shifts (336 h/month), €1,950–2,100 per month equals roughly €5.8–6.3 per hour, or 25–27 PLN [MY CALC]. That is about 45% of the 58 PLN human rate.
  - At 1 shift (168 h) it is about 50–55 PLN per hour, close to parity with labour.
  - So a per-hour price only makes sense with multi-shift utilisation or a minimum billable-hours commitment.
- **Bare-arm leasing cost versus RaaS price [MY CALC]:**
  - The bare arm leases for €693–1,100 per month (Elmark). Scaled to the deck's €55k, that is about €950–1,510 per month (≈ 4,200–6,600 PLN).
  - The gap between that and the €1,950–4,000 per month RaaS prices is the provider's gross spread. It has to pay for integration and engineering, service, insurance, idle time and redeployment.
- **Polish leasing companies finance robots as ordinary "machines and equipment".** I found no dedicated robot programme from PKO Leasing, Pekao Leasing, mLeasing or BNP Paribas Leasing.
  - Robotify could fund its fleet through standard operational or financial leasing of machinery, or through vendor programmes such as UR plus DLL.
  - The 2026 Elmark offer at 0–1.99% suggests subsidised vendor financing is available for UR arms.
- **Tax relief: possible effect on rental versus ownership.** This could not be confirmed; ask a tax advisor.
  - The relief is tied to the taxpayer acquiring or leasing new industrial robots. A client renting from Robotify under a service or rental contract would probably not get it.
  - Robotify itself, as owner, might be able to claim it.
  - The relief also makes "own it" financially attractive for clients. That is a competitive argument against rental that the offer should address.

### Gaps
- PKO Leasing, Pekao Leasing, mLeasing and BNP Paribas Leasing robot-specific rates, terms and residuals were not found (search budget ran out).
- No public FANUC, ABB or KUKA leasing, financing or RaaS terms were found (not searched in depth).
- No Nordic cobot rental providers were found.
- Ready Robotics: its 2024 closure is widely known from background knowledge but was not confirmed by any search result here, so I am not asserting it.
- I could not confirm the date of the Elmark offer page.

---

## 3. Unit economics of RaaS: capex, financing, utilisation, maintenance, lifetime, redeployment, payback, margins, churn and idle-fleet risk, fleet financing

### Takeaway
- **RaaS is a capital-intensive leasing business with a service layer.**
- **The best-documented fleet financing model is Formic's.** It raised about $60M of equity for software, sales and R&D, and about $250M of asset financing for the robots. It borrows against five-year customer contracts plus the equipment, and the hourly payments service the debt.
- **Margins:**
  - Public margin data are scarce.
  - Generic planning ranges put RaaS gross margin at 55–70% at scale, versus 40–55% for hardware sales. These are low-authority figures.
  - Field service costs 5–15% of hardware revenue.
  - Cobot maintenance runs 3–15% of purchase price per year.
- **The main risks are utilisation and residual value.** Locus Robotics (warehouse RaaS) shows how fleet-financing strain can break a well-funded RaaS company.

### Cited findings
- **Formic, fleet financing:**
  - Founder Saman Farid: about $60M of equity raised (software, sales, R&D) and about $250M of asset financing — [startupfundraising.com](https://startupfundraising.com/library/articles/saman-farid).
  - 2022: access to more than $100M of debt capital for equipment purchases. A later piece cites $150M in total debt facilities — [BusinessWire 2022](https://www.businesswire.com/news/home/20220118005537/en/Formic-Technologies-Raises-%2426.5-Million-Series-A-Led-By-Lux-Capital); [Not Boring](https://www.notboring.co/p/formic-automating-abundance).
  - Formic takes five-year customer contracts to banks and borrows against them and the equipment. Hourly revenue covers service and loan repayment, and once the loan is repaid the hourly payments become margin — [Not Boring](https://www.notboring.co/p/formic-automating-abundance).
  - Pricing must be "thin enough to win customers but thick enough to cover labour, rent and equipment ROI" — [Not Boring](https://www.notboring.co/p/formic-automating-abundance).
  - A leasing company (Mitsubishi HC Capital America) is a Formic investor — [automation.com](https://www.automation.com/article/formic-raises-27-4-million-automation-manufacturer).
  - Renewal rate is 97%, which implies low churn — company claim, [automation.com](https://www.automation.com/article/formic-raises-27-4-million-automation-manufacturer).
- **Agility, humanoid RaaS lifetime value:**
  - About $535k per robot over five years under RaaS, versus about $400k under purchase plus service. RaaS earns about 34% more lifetime revenue but leaves the capex and utilisation risk with Agility [MY CALC on the S-4 figures] — [The Robot Report](https://www.therobotreport.com/agility-robotics-reports-18m-revenue-ahead-of-humanoid-spac/).
  - Uncounted cost lines: deployment about $15k and delivery about $15k per year per unit — [Humanoids Daily](https://www.humanoidsdaily.com/news/agility-s-numbers-are-in-1-8m-in-sales-a-138m-loss-and-a-backlog-owed-to-an-insider).
- **Locus Robotics, a warning case (status conflicting):**
  - One market report mentions a Chapter 11 filing. A failure-analysis site describes a distressed sale after failed down rounds. Another item reports a $41.6M Series G on 1 Sep 2026. These could not be reconciled.
  - The point on which sources agree: a fleet-owning RaaS model "requires the vendor to finance a growing hardware base with capital that must be recovered through subscription payments over multi-year cycles" — [autonomybridge](https://autonomybridge.com/insights/how-robotics-pricing-models-determine-commercial-viability); [ideaproof, weak source](https://ideaproof.io/failure/locus-robotics); [saasrise](https://www.saasrise.com/deals/locus-robotics-raises-416-million-in-series-g-funding-ba0825d5-5aea-4a99-b5df-092b689eeeb0).
- **Margin benchmarks [ESTIMATE, low authority]:** gross margin at scale of 40–55% for hardware and 55–70% for RaaS. Field service costs 5–15% of hardware revenue — [revenuemap](https://revenuemap.app/blog/robotics-startup-financial-model).
- **Maintenance cost:**
  - 5–15% of purchase price per year; a cobot costs about €1,500–4,000 per year — [rcc.fr](https://www.rcc.fr/en/robot-maintenance-cost/).
  - 3–5% per year for basic service contracts — [Denaliweld](https://denaliweld.com/blog/cobot-welding-costs-overhead-and-operating/).
  - 5–10% per year — [Standard Bots](https://standardbots.com/blog/collaborative-robot-prices-the-ultimate-guide).
  - 5–12% per year, or $1–3 per operating hour — [robotomated](https://robotomated.com/learn/problems/robot-maintenance-cost-reduction); [robotomated cobot cost](https://robotomated.com/learn/cost/cobot-cost-guide).
- **Lifetime:** major components such as joints may need replacement after 30,000–50,000 operating hours — [Standard Bots](https://standardbots.com/blog/collaborative-robot-prices-the-ultimate-guide). A vendor-blog MTBF figure is 35,000 hours — [OxMaint](https://oxmaint.com/blog/post/industrial-robot-cobot-maintenance-checklist).
- **Residual value and lease structure:**
  - Polish cobot leasing allows a 1% residual — [Elmark](https://roboty.elmark.com.pl/leasing).
  - Polish leasing generally allows 1–30% — [search summary of Polish leasing guides](https://roboty.elmark.com.pl/leasing).
  - Humanoid residuals: one vendor blog says a 12-month-old used Unitree G1 resells at about $38–42k, a 35–40% first-year loss (it assumes about a $65–70k purchase price) [ESTIMATE] — [zmprobots](https://www.zmprobots.com/blog/humanoid-robot-buy-vs-rent-3-year-cost/).
  - BotLease, by contrast, lists the G1 at €16,000. Purchase prices for the G1 vary from $16k to $70k depending on configuration and source — [zmprobots](https://www.zmprobots.com/blog/unitree-g1-buy-vs-rent-events/); [botlease](https://botlease.nl/prijzen).
- **Utilisation break-even for event rental:** a $70k unit at $299 per day breaks even on hardware alone after about 234 rental days. Most event teams need 10–20 activations per year [ESTIMATE, vendor blog] — [zmprobots](https://www.zmprobots.com/blog/humanoid-robot-payback-period/).
- **Contract structures that protect the fleet owner:**
  - Formic bills on uptime only, under five-year contracts — [Not Boring](https://www.notboring.co/p/formic-automating-abundance).
  - WiredWorkers: 3-month minimum, 3-month notice, 3-month deposit — [WiredWorkers](https://www.wiredworkers.io/nl/services/cobot-verhuur/).
  - BotLease: first year fixed, then monthly — [botlease](https://botlease.nl/huren).
  - Agility: three-year RaaS agreements tied to deployment milestones — [RuntimeWire](https://runtimewire.com/article/agility-robotics-fall-spac-unitree-debut).

### Inferences
- **Illustrative cobot RaaS unit economics for Robotify [MY CALC; all inputs are assumptions drawn from the benchmarks above]:**
  - **Capex:** the cobot cell is €55,000, per the deck. Integration engineering and grippers are not separately sourced and would come on top.
  - **Financing:** leasing it at about Elmark's 1.99% over 60 months gives about €950 per month (scaled from €693.45 per €40k).
  - **Maintenance:** 5% per year is about €230 per month.
  - **Insurance:** an unsourced placeholder of about 1% of value per year, roughly €45 per month.
  - **Direct cost:** about €1,225 per month ≈ 5,370 PLN.
  - **Price:** at 2 shifts (336 h/month) and 30 PLN per hour (≈ 52% of the 58 PLN labour rate), revenue is about 10,080 PLN (≈ €2,300) per month. That sits inside the market corridor.
  - **Gross spread** before engineering, sales and idle time: about 4,700 PLN per month, roughly 47%.
  - **Break-even utilisation** for direct cost at 30 PLN per hour: about 179 h per month, roughly one full shift. Below that, the robot loses money.
  - **Formic's model, applied here:** once the 60-month lease is paid off, a cobot with about 30,000–50,000 h of joint life can keep earning for years. Most lifetime margin sits after the financing period.
- **Fixed fee versus per-hour billing.** A per-hour-only price shifts all utilisation risk to Robotify. The benchmarks point to one of two structures:
  - a fixed monthly fee, or
  - a minimum monthly commitment, for example billed hours ≥ 1 shift (about 170 h), plus per-hour billing above it. Formic bills on uptime, but under five-year contracts.
- **Redeployment and churn:**
  - Cobots are redeployable, unlike custom cells. Grippers, fixtures and safety design are per-application costs that need recovering through a setup or deployment fee (Agility charges $25k) or a minimum term.
  - Formic's 97% renewal shows that churn can be low once a cell is productive.
- **Humanoid fleet risk is much higher than cobot fleet risk:**
  - Price deflation is fast: BofA has BOM falling from $35k to under $17k by 2030, IDTechEx has ASP falling from $114.7k to $37k (see section 4), and Chinese daily rental rates fell more than 90%.
  - Productivity is unproven.
  - A humanoid bought in 2026 to rent out over five years could be undercut by much cheaper rental offers within two to three years. This argues for short manufacturer-backed RaaS back-to-back contracts rather than owning humanoids.

### Gaps
- No audited gross margins for any RaaS company (Formic, Locus, RobCo) were found.
- No public data on how Formic's debt facilities are structured (SPV, advance rate, interest).
- No fleet-utilisation statistics for European cobot rental fleets.
- No sourced robot insurance premium rates (the 1% above is a placeholder).
- No sourced integration or engineering cost as a share of cobot cell cost.
- Locus Robotics' 2026 status is unresolved because sources conflict.

---

## 4. Cost per hour: cobot vs humanoid vs human worker in Europe, and humanoid cost to 2030

### Takeaway
- **Cobot (2026):** about €5–7 per hour (≈ 22–31 PLN) as a full-service rental at 2 shifts. The bare cost of ownership is about €2–4 per hour.
- **Humanoid (2026):**
  - Industrial RaaS (Digit at $8,500 per month) is about €15–23 per hour (≈ 64–99 PLN) at 120–80 h/week, before any productivity penalty.
  - Digit's operating cost is said to be $10–12 per hour.
- **Human (Poland):** about 58 PLN per hour (≈ €13.2).
- **Humanoid cost forecasts:**
  - IDTechEx has industrial humanoid operating cost falling below $5 per hour (≈ 20 PLN) by about 2030 at high utilisation, with ASP falling from $114.7k (2024) to about $37k (2030).
  - BofA has China-built BOM falling from $35k (2025) to under $17k (2030).
  - So humanoids could undercut Polish labour around 2028–2030, but only at high utilisation and near-human productivity.

### Cited findings
- **Human labour benchmarks:** about $30 per hour for comparable US factory labour, versus $10–12 per hour humanoid operating cost (JPMorgan, via a secondary investor newsletter).
  - The same source says it currently takes about two humanoids to match one human's output, narrowing to about 1.2–1.3 by 2030. That puts the effective cost near $12–16 per hour [REPORTED, secondary] — [InvestorPlace](https://investorplace.com/hypergrowthinvesting/2026/08/the-50-trillion-robot-boom-starts-at-10-an-hour/).
- **IDTechEx (May 2026):**
  - Average humanoid selling price falls from about $114,700 (2024) to about $37,000 by 2030, a 68% drop.
  - High-utilisation industrial scenarios could bring operating cost below $5 per hour around 2030.
  - A robot's cost per hour "is not directly equivalent to a human labour cost per hour". It depends on utilisation, task continuity and operational stability.
  - Six-month payback "possible now" in the best cases — [IDTechEx](https://www.idtechex.com/en/research-article/humanoid-robots-show-roi-but-success-depends-on-effective-output/34724); [TechTimes](https://www.techtimes.com/articles/316906/20260520/idtechex-humanoid-robot-price-falls-68-2030-six-month-payback-possible-now.htm); [Robotics & Automation News](https://roboticsandautomationnews.com/2026/05/19/humanoid-robots-show-clearer-roi-but-commercial-success-depends-on-effective-output/101714/).
- **BofA Global Research, "Physical AI part 2" (March 2026):**
  - China-built humanoid BOM about $35,000 in 2025, falling to under $17,000 by 2030. Some write-ups say $13–17k by 2030–35.
  - BOM shares: linear actuators 27%, rotary actuators 24%, dexterous hands 19% — [AI Prediction Index](https://www.aipredictionindex.com/p/bofa-2026-humanoid-bom-cost-2030/); [Humanoids Daily](https://www.humanoidsdaily.com/news/the-three-billion-humanoid-milestone-inside-bank-of-america-s-long-term-physical-ai-forecast).
  - Western pilot-stage units still cost about $90–100k — [manufacturingmag](https://www.manufacturingmag.com/article/humanoid-robot-cost-cliff-schaeffler-deal).
- **Goldman Sachs:** humanoid manufacturing cost fell to $30k–150k per unit in early 2024, from $50k–250k a year earlier. That is a 40% decline, against a forecast of 15–20% per year — [robotcentral](https://robotcentral.com/goldman-sachs-predicts-38-billion-humanoid-robot-market-by-2035-but-likely-an-underestimate/). A reported August 2026 Goldman revision to $138B and 6.48M units by 2035 is unverified (single source).
- **Cobot hourly cost:**
  - Formic's RaaS is $8–24 per hour.
  - Rapid Robotics at $2,100 per month is about $6.25 per hour at 336 h per month [MY CALC] — [Robotics 24/7](https://www.robotics247.com/article/nulogy_formic_partner_provide_software_robotics_service_raas); [articsledge](https://www.articsledge.com/post/robots-as-a-service-raas).
  - Cobot maintenance alone is $1–3 per operating hour — [robotomated](https://robotomated.com/learn/problems/robot-maintenance-cost-reduction).

### Inferences
- **Cost per productive hour, Poland, October 2026 [MY CALC from the cited figures; 2 shifts = 336 h/month unless noted]:**

| Option | PLN per hour | EUR per hour | Notes |
|---|---|---|---|
| Human worker, production hall | ~58 | ~13.2 | Per the brief |
| Cobot, owned (bare cost) | ~13–17 | ~3–4 | €55k over 60 months at 1.99%, plus 5% maintenance per year |
| Cobot, full-service rental | ~25–35 | ~6–8 | Market corridor €1,950–2,700 per month |
| Humanoid, industrial RaaS (Digit) | ~99 | ~23 | $8,500 per month |
| Humanoid, Digit at 120 h/week | ~64 | ~15 | Same price, higher utilisation |
| Humanoid, if 2 robots = 1 human output | ~130–200 | — | Per human-equivalent hour (JPMorgan ratio) |
| Humanoid, G1-class via BotLease | ~12.7 | ~2.9 | Unproven industrial productivity |
| Humanoid, ~2030 forecast | <20 | — | IDTechEx (<$5/h), or $12–16/h incl. productivity gap (JPMorgan) |

- **Implication for Robotify's hourly pricing:**
  - Today only cobots can be rented at a clear discount to the 58 PLN labour rate.
  - Humanoids reach parity only around 2028–2030, if the forecasts hold.

### Gaps
- No primary Goldman, BofA or JPMorgan reports were read; all of these figures come through secondary write-ups.
- No European (EU/PL-specific) independent study comparing cobot, humanoid and human cost per hour was found.
- No Morgan Stanley figures found.

---

## 5. Insurance and liability in rental models

### Takeaway
- **I found no source specific to how liability is split in robot rental or RaaS.**
- **Applicable EU framework:**
  - The revised Product Liability Directive extends strict liability to software and AI for products placed on the market after 9 December 2026.
  - The Machinery Regulation (EU) 2023/1230 replaces the Machinery Directive and covers collaborative and AI-integrated systems.
  - After the May 2026 Digital Omnibus, AI in machinery is reportedly carved out of the AI Act high-risk regime, so the safety requirements come from the Machinery Regulation.
- **What providers include:** they typically bundle insurance and maintenance into the fee (BotLease), or guarantee uptime (Formic).

### Cited findings
- **Product Liability Directive (revised):** the definition of "product" now includes software, including AI systems as defined by the AI Act, for products placed on the market or put into service after 9 December 2026 — [Lexology: Physical AI and strict liability](https://www.lexology.com/library/detail.aspx?g=eab51dac-c447-4145-b99a-1747f04fdec2).
  - Under the old 1985 directive, robots provided "as services" fell outside it and were left to national civil liability rules — [RAILS](https://ai-laws.org/2019/12/12/robotics-and-civil-liability-in-the-eu/?lang=en); [Springer](https://link.springer.com/chapter/10.1007/978-3-030-27386-6_8).
- **Machinery Regulation:** Regulation (EU) 2023/1230 sets essential health and safety requirements for machinery, including collaborative and AI-integrated systems, and replaces the Machinery Directive — [Timelex](https://www.timelex.eu/en/blog/navigating-legal-maze-ai-autonomous-robots-and-eus-regulatory-overhaul); [Lexology](https://www.lexology.com/library/detail.aspx?g=b7228083-df73-4e1e-866f-c40e7cb26a2a).
  - Its application date of 20 January 2027 is from general knowledge, not confirmed by a search result here.
- **Digital Omnibus (May 2026):** AI in machinery products has been carved out of the AI Act's high-risk regime. Product safety requirements now come exclusively from the Machinery Regulation — [Bird & Bird](https://www.twobirds.com/en/trending-topics/robotics-and-automation-law).
- **Compulsory insurance (2019 academic analysis):** argues compulsory insurance is more justified for robots treated as products than as services — [Springer](https://link.springer.com/chapter/10.1007/978-3-030-27386-6_8).
- **Market practice:**
  - BotLease's monthly fee includes insurance, maintenance and compliance papers — [botlease](https://botlease.nl/robot-as-a-service).
  - Formic covers maintenance and pays for downtime risk, since customers pay only for uptime — [automation.com](https://www.automation.com/article/first-fully-customized-robotics-service-hire).
  - Chinese rentals include operators and safety personnel — [hellochinatech](https://hellochinatech.com/p/robots-for-rent-humans-included).

### Inferences
- **Robotify's liability position (needs legal confirmation):**
  - As owner and renter of integrated cobot cells, Robotify will likely be the party that integrates the cell and puts it into service, which may make it the "manufacturer" of the assembled machine for CE and conformity purposes.
  - From 9 Dec 2026, strict product liability also covers the software and AI layer.
  - Robotify will therefore need product liability, third-party (OC) and property insurance on the fleet.
  - Rental contracts should allocate:
    - operator training and safe-use duties to the client;
    - the risk-assessment update when the cell is moved or the application changes;
    - responsibility for damage caused by client misuse;
    - insurance of the robot while it is on the client's premises.

### Gaps
- No Polish or EU source on robot rental insurance premiums, or on insurers' robot-rental products.
- No legal analysis of how the revised PLD treats lessor versus lessee versus integrator in RaaS.
- No sources on liability for remote or teleoperated humanoids.
