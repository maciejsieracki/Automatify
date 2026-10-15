# Humanoid robot applications by sector: verification of the draft and update to October 2026

> **READ FIRST: method and verification status (for the report writer).**
> - This file verifies and updates `zastosowania_sektory.md` (an unverified draft written from model memory). The state is as of **15 October 2026**.
> - **How the checking was done.** WebSearch worked. WebFetch failed (DNS error) on every domain tried: press.jal.co.jp, ec.europa.eu, technology.org and 247wallst.com. The proxy also blocked direct access to the Eurostat API (HTTP 403). So every finding below comes from **search-result snippets of the named source**. No full page was read.
> - **Tags.** **[V]** means the claim appears in a search result from the cited source. **[V-weak]** means it was found only in an aggregator, vendor-adjacent or low-quality source. Treat [V-weak] as a lead, not a fact.
> - **Example labels.**
>   - **DEPLOYMENT**: productive use in regular operations.
>   - **PAID PILOT**: commercial contract or RaaS on a trial scale.
>   - **PILOT**: on-site trial; commercial terms undisclosed.
>   - **DEMO/TRIAL**: test, exhibition or proof of concept.
>   - **CONCEPT/PLAN**: announced but not started.
> - **Draft claims that could not be re-checked** are listed in each Gaps section as "still unverified [M]". They should not go into investor material without a further check.
> - The four sections below follow the draft: §1 sector map, §2 labour pools (draft §2.2–2.3), §3 analyst sequencing (draft §2.1 + §4), §4 generality versus counter-arguments (draft §3).

---

## 1. Sector by sector: are the draft's examples correct, and what are the 2026 examples (at least 2 per sector where they exist)?

### Takeaway
As of October 2026 the map is much richer than the draft suggested, but its shape is the same. **Paid deployments are still concentrated in factories and logistics**: Agility at 9 customer sites, Figure at BMW, UBTech at Chinese carmakers.

Every other sector now has at least one **named 2026 pilot**:
- **Airports:** JAL at Haneda from May 2026; San José airport from April 2026.
- **Retail:** Salling Group in Denmark from June 2026; Galbot pharmacies in Beijing and a robot store in Hong Kong from 1 September 2026.
- **Construction:** Tilbury Douglas (UK) and Shimizu (Japan).
- **Facility management:** YY Group (Singapore), June 2026.
- **Hospitals:** the Kawasaki–Foxconn Nurabot trial.
- **Elder care:** China's national pilot programme.
- **Agriculture:** Agroz × UBTech.
- **Households:** 1X NEO factory in production since 30 April 2026.

Most of these are **teleoperated or supervised** and run **below human speed**. They support the claim of broad reach across sectors, but not yet economic substitution.

Two of the draft's specific examples turned out to be weak:
- **"Airport humanoids in China and the Middle East"** could not be confirmed for 2026.
- **Telexistence at FamilyMart** uses a **SCARA arm, not a humanoid**.

### Cited Findings

#### 1.0 Draft-claim verification ledger (key examples named in the brief)

| Draft claim | Verdict | Corrected or verified detail and source |
|---|---|---|
| JAL ground handling at Haneda with humanoids, starting ~May 2026, multi-year | **VERIFIED (with nuance)** | JAL Ground Service and GMO AI & Robotics. Start May 2026, running through 2028 per Kyodo (other outlets say about 3 years). First tasks: transporting containers and opening and closing the levers that secure them. Cabin cleaning and operating ground support equipment come later. Autonomy is a future goal and humans keep oversight. The robots are Chinese-made, including a ~130 cm Unitree. JAL has about 4,000 ground-handling staff. [V] [Kyodo via Ada Derana](https://www.adaderana.lk/news.php?nid=121852); [The Star (Kyodo)](https://www.the-star.co.ke/news/world/2026-04-28-japan-airlines-trials-humanoid-robots-as-ground-handlers); [Adnkronos](https://english.adnkronos.com/2026/04/28/jal-to-test-humanoid-robots-for-airport-ground-handling-work/); [Bloomberg via BNN](https://www.bnnbloomberg.ca/business/2026/04/30/watch-japan-airlines-turns-to-humanoid-robots-to-handle-baggage/); JAL press-release PDF (not fetched) [press.jal.co.jp](https://press.jal.co.jp/en/items/uploads/Japan%27s%20First%20Demonstration%20Experiment%20for%20%20Utilizing%20Humanoid%20Robots%20at%20Airports%20Begins.pdf). **Label: PILOT.** |
| Galbot wheeled humanoids running pharmacies and retail kiosks in Beijing, plan for ~100 sites | **VERIFIED (direction); target not confirmed** | CGTN (13 Mar 2026): "China's first pharmacy robot" went into service in Beijing's Haidian district. It locates, picks and packages medicines [V] [CGTN](https://news.cgtn.com/news/2026-03-13/China-s-first-pharmacy-robot-goes-into-service-in-Beijing-1LtZ7juLcZ2/share_amp.html). In 2025, Galbot robots were reported operating autonomously in 10+ Beijing pharmacies, with a plan for 100 stores nationwide [V] [Shanghai gov't (WAIC 2025)](https://english.shanghai.gov.cn/en-WAICLatest/20250729/d11de7cc061b4de9b37c17d8e4dca097.html). Whether the 100-store target was reached is unconfirmed. **Label: DEPLOYMENT (small format).** |
| Telexistence × FamilyMart, about 300 stores, described as "closest precursor to humanoid restocking" | **VERIFIED as announced; NOT a humanoid; 2026 status unknown** | The robot is the **TX SCARA arm** (not a humanoid), planned for 300 FamilyMart stores. Rollout was expected to finish by March 2025. It is mostly autonomous, with remote piloting as backup [V] [Fierce Electronics](https://www.fierceelectronics.com/sensors/telexistence-robots-restock-shelves-convenience-stores-japan); [TechWire Asia](https://techwireasia.com/?p=203629). **Label: DEPLOYMENT of a non-humanoid precursor.** |
| China elderly-care robot pilots (MIIT, MCA, NHC, 2025) | **VERIFIED for MIIT and Ministry of Civil Affairs; NHC involvement not confirmed** | MIIT and the Ministry of Civil Affairs invited applicants for elder-care robot pilots in home, community and institutional settings. Approved projects must run a trial within two years, i.e. into 2026–27 [V] [SCMP](https://www.scmp.com/tech/policy/article/3313739/china-turns-robots-elderly-care-national-pilot-programme); [The Register, 10 Jun 2025](https://www.theregister.com/2025/06/10/china_aged_care_robot_trials/). **Label: PILOT programme.** |
| Airport humanoids in China and the Middle East | **NOT VERIFIED for 2026** | No confirmed 2026 humanoid deployment was found at Chinese, Gulf, Saudi or Qatari airports. The Shenzhen airport "AnBot" (2016–17) is **not humanoid**. A July 2026 article that repeats the story appears to be recycled [V] [AirlineRatings](https://www.airlineratings.com/articles/robo-cop-patrols-chinese-airport). Hamad (Doha) had "Noor", a bank-promotion humanoid around 2019 [V-weak] [Marhaba](https://marhaba.qa/?p=121080). Emirates plans check-in and bag-carrying robots for Q1 2027 (form factor not specified) [V] [Gulf News](https://gulfnews.com/business/aviation/emirates-to-launch-robots-that-check-in-passengers-and-carry-bags-in-2027-1.500683922). **Downgrade to "unverified" in the deck.** |
| Hotel humanoids | **PARTLY VERIFIED** | Front-of-house: "Oto" humanoid concierge (IntBot) at the Otonomus Hotel, Las Vegas, since September 2025 [V] [Fox5 Vegas](https://www.fox5vegas.com/2025/09/16/meet-oto-is-this-humanoid-robot-future-hospitality-las-vegas); [Euronews, 6 Jan 2026](https://euronews.com/next/2026/01/06/meet-oto-the-robot-concierge-welcoming-guests-at-an-ai-powered-hotel-in-las-vegas). No paid humanoid housekeeping deployment was found (see 1.4). |
| Construction humanoids ("no commercial deployment as of mid-2026") | **CORRECTED: 2026 pilots exist** | Tilbury Douglas (UK) put the humanoid "Douglas" on live sites in April 2026, doing data capture rather than building work. Shimizu has been testing a humanoid on real Tokyo job sites in 2026. See 1.7. |
| Figure × BMW: ~11 months, ~90,000 parts, ~30,000 X3s | **VERIFIED (parts and months); 30,000 cars not re-checked** | 11-month pilot, more than 1,250 operating hours, more than 90,000 sheet-metal parts loaded. Figure 02 retired. Figure 03 moved to logistics sequencing (Hall 52, Spartanburg, summer 2026). All figures are company-reported and unaudited [V-weak] [humanoid.guide](https://humanoid.guide/humanoid-deployments-in-2026-favor-figure-and-agility/); [Highways Today, 14 Oct 2026](https://highways.today/2026/10/14/the-humanoid-economy). |
| UBTech Walker S2 orders "> CNY 1 bn", 500+ units in 2025 | **CORRECTED** | November 2025 PR: orders for the Walker series **exceeded CNY 800 million**. The first batch of "several hundred" units was delivered, with a target of 500 in 2025. Capacity targets are 5,000 units in 2026 and 10,000 in 2027 [V] [UBTech PR via Kyodo PR Wire](https://kyodonewsprwire.jp/release/202511179261). |
| Hyundai: Atlas at the Georgia Metaplant from ~2028, assembly ~2030, ~30,000 units per year | **VERIFIED** | Deployment from 2028 on parts sequencing, assembly by 2030, target of 30,000 Atlas units per year by 2028 [V] [Axios, 5 Jan 2026](https://www.axios.com/2026/01/05/hyundai-humanoid-robots-boston-dynamics); [Repairer Driven News](https://www.repairerdrivennews.com/2026/01/07/hyundai-showcases-humanoid-at-ces-plans-30000-units-by-2028/). **Label: CONCEPT/PLAN** (2026 activity is preparatory: a US "Application Center"). |
| Agility Digit at GXO: "100,000+ totes" | **REPLACED with newer metric** | Agility reports **65,000+ operating hours across nine customer facilities**. Named customers: GXO, Schaeffler, Toyota Motor Manufacturing Canada, Mercado Libre. GXO has run in regular operations since June 2024 [V-weak] [humanoid.guide](https://humanoid.guide/humanoid-deployments-in-2026-favor-figure-and-agility/). The tote count was not re-verified. |
| 1X NEO: pre-orders Oct 2025, $20k or $499/month, US deliveries 2026 | **VERIFIED; status updated** | Launched 27 October 2025 [V] [BusinessWire (1X)](https://www.businesswire.com/news/home/20251027434628/en/1X-Launches-NEO-The-Robot-Redefining-Life-at-Home). See 1.13 for the 2026 production status. |
| Ford × Agility last-mile demo (2019) | **VERIFIED as a development partnership or demo** | [V] [Parcel & Postal Technology International](https://parcelandpostaltechnologyinternational.com/news/automation/agility-robotics-and-ford-team-up-to-further-develop-humanoid-delivery-robots.html). |
| Agriculture ≈ 26% of world jobs, ~850–900 million people | **CORRECTED** | FAO (ILO-based data): **916 million people, 26.1% of global employment, in 2023** [V] [FAO](https://www.fao.org/statistics/highlights-archive/highlights-detail/employment-indicators-2000-2023-%28july-2025-update%29/en). |

#### 1.1 Manufacturing
- **Figure × BMW Spartanburg (US).** The 11-month Figure 02 pilot is complete (>90,000 parts). **Figure 03 moved into logistics sequencing in Hall 52 in summer 2026.** Company-reported. [V-weak] [humanoid.guide](https://humanoid.guide/humanoid-deployments-in-2026-favor-figure-and-agility/); [Highways Today, Oct 2026](https://highways.today/2026/10/14/the-humanoid-economy). **Label: DEPLOYMENT (single customer).**
- **BMW Leipzig (Germany).** BMW's first German humanoid pilot uses **Hexagon Robotics' AEON** humanoids in high-voltage battery assembly and component production. Tests ran from late 2025, with a full pilot phase planned for **summer 2026**. Whether it has started is unconfirmed. [V-weak] [Ackodrive](https://ackodrive.com/news/bmw-s-physical-ai-robots-to-build-cars-in-germany-next-is-hyundai-next-in-line/). **Label: PILOT. Relevant to the EU.**
- **Renault × Wandercraft (France).** Renault plans to deploy **350 humanoid robots** in its plants within 18 months, for logistics and heavy tasks. [V] [Interesting Engineering](https://interestingengineering.com/ai-robotics/france-renault-350-humanoid-robot-factory). **Label: CONCEPT/PLAN (announced fleet deployment). EU.**
- **Schaeffler × Humanoid (UK).** Schaeffler signed a **binding contract** to deploy **"thousands" of wheeled humanoid robots** in shop-floor operations. [V-weak] [AI Weekly deployment list](https://aiweekly.co/ai-use-cases/use/humanoid-industrial-robots). **Label: PAID contract, rollout pending. EU.**
- **UBTech Walker S2 (China).** Mass delivery began in November 2025. Customers include BYD, Geely, FAW-Volkswagen, Dongfeng and Foxconn, using the robots on assembly lines, in warehouses and in logistics. [V] [UBTech PR](https://kyodonewsprwire.jp/release/202511179261); [Inspenet](https://inspenet.com/en/?p=325072). UBTech and FAW-VW signed a strategic cooperation (2026) to test humanoids for material transport, inventory sorting and workstation replenishment. [V-weak] [Mjengo Hub](https://mjengohub.co.ke/articles/world/ubtech-and-faw-volkswagen-partner-to-deploy-humanoid-robots-in-automotive-logistics). One analyst calls the 2026 target of 5,000 units ambitious, since it requires about a 10× ramp. [V-weak] [Robotics.press](https://www.robotics.press/news/ubtech-competitive-response-walker-s2-ramp/). **Label: DEPLOYMENT and PAID PILOTS. Real utilisation unverified.**
- **South Korea, Robros (NEW, 14 Oct 2026).** Regulators granted a demonstration exemption so that **20 Robros bipedal humanoids** can be deployed at Nepes (semiconductors), Sungwoo Hitech (auto parts), **HD Hyundai Samho (shipbuilding)** and Delivery Lab. [V] [Seoul Economic Daily, 14 Oct 2026](https://en.sedaily.com/finance/2026/10/14/korea-clears-safety-rules-to-put-20-humanoid-robots-on). **Label: PILOT. Note that a regulatory sandbox was needed even to start.**
- **Hyundai × Boston Dynamics Atlas.** See the ledger: from 2028, a plan. [V] [Axios](https://www.axios.com/2026/01/05/hyundai-humanoid-robots-boston-dynamics).
- **Tesla Optimus.** Use is internal only. Musk's 2025 target of 5,000 units was missed, with actual output reported as "a few hundred". At Davos (January 2026) Musk said public sales were likely by end-2027. A mid-2026 tracker claims more than 1,000 Gen-3 units in Tesla factories, but this conflicts with other reporting that describes internal testing rather than verified production work. [V-weak] [Technology.org, 18 Jul 2026](https://www.technology.org/2026/07/18/humanoid-robots-in-2026-what-is-actually-deployed/); [humanoid.guide](https://humanoid.guide/humanoid-deployments-in-2026-favor-figure-and-agility/). **Label: internal PILOT. The sources conflict.**

#### 1.2 Warehousing and logistics
- **Agility Digit.** 65,000+ operating hours across 9 customer facilities: GXO (regular operations since June 2024), Schaeffler, Toyota Motor Manufacturing Canada and Mercado Libre. One tracker estimates about 250 units (low confidence). [V-weak] [humanoid.guide](https://humanoid.guide/humanoid-deployments-in-2026-favor-figure-and-agility/). Amazon has reportedly deployed Agility humanoids in its warehouses. [V] [eWeek](https://www.eweek.com/news/amazon-testing-humanoid-delivery-robots/). **Label: DEPLOYMENT (paid RaaS). Still the most credible logistics case.**
- **Siemens × Humanoid (UK).** A proof of concept in live industrial logistics: **60 totes per hour, two tote sizes, more than 30 minutes of autonomous operation**. [V] [Humanoid (company)](https://thehumanoid.ai/humanoid-and-siemens-completed-a-proof-of-concept-to-test-humanoidrobots-in-industrial-logistics/); [Interesting Engineering](https://interestingengineering.com/ai-robotics/humanoid-robot-completes-siemens-trial). **Label: DEMO/TRIAL. EU-relevant (Siemens). The throughput is a useful honest benchmark: well below a human picker.**
- **1X × EQT.** A deal to ship **up to 10,000 NEO humanoids in 2026–2030** to EQT portfolio companies, mainly for industrial use. [V] [TechCrunch](https://techcrunch.com/?p=3075424). **Label: framework PAID agreement.** This is a cross-sector redeployability signal: the same "home" robot is being sold for industrial work.

#### 1.3 Airports
- **JAL × GMO AI & Robotics, Haneda.** See the ledger. From May 2026 to 2028. **Label: PILOT.** [V] [Kyodo via Ada Derana](https://www.adaderana.lk/news.php?nid=121852); [GMO news PDF](https://group.gmo/en/pdf/news/gmo_news_850.pdf).
- **San José Mineta International (US).** From **1 April 2026**, a four-month pilot of "José", an IntBot humanoid in Terminal B that greets passengers, answers questions and gives directions. [V-weak] [Let's Data Science](https://letsdatascience.com/news/airport-deploys-humanoid-robot-for-passenger-assistance-7bb78036). **Label: PILOT (passenger assistance, not ground handling).**
- **Emirates (Dubai).** Robots that check passengers in and carry bags are to launch in Q1 2027. Whether they are humanoid is not stated. [V] [Gulf News](https://gulfnews.com/business/aviation/emirates-to-launch-robots-that-check-in-passengers-and-carry-bags-in-2027-1.500683922). **Label: CONCEPT/PLAN.**
- **Hangzhou Xiaoshan airport.** Reportedly uses "androids" to answer passenger inquiries. The report is undated. [V-weak] [AirlineRatings](https://www.airlineratings.com/articles/robo-cop-patrols-chinese-airport).

#### 1.4 Tourism and hospitality
- **Otonomus Hotel, Las Vegas.** "Oto", an IntBot humanoid concierge introduced in September 2025, greets guests, answers questions and suggests restaurants; reports also say it does some housekeeping and carries luggage. [V] [Fox5 Vegas](https://www.fox5vegas.com/2025/09/16/meet-oto-is-this-humanoid-robot-future-hospitality-las-vegas); [Euronews](https://euronews.com/next/2026/01/06/meet-oto-the-robot-concierge-welcoming-guests-at-an-ai-powered-hotel-in-las-vegas). **Label: DEPLOYMENT (single property, guest-facing).**
- **Pudu × Shenzhen Culture & Tourism (China).** A "full-scenario robot-serviced hotel" on West Artificial Island, Shenzhen. Trial rooms are due in **late 2026** and opening in **2027**, covering check-in, room service, cleaning and luggage. The robots are mostly Pudu wheeled service robots; humanoids are mentioned for reception. [V] [Hotel Technology News, Jul 2026](https://hoteltechnologynews.com/2026/07/china-plans-first-fully-robot-operated-hotel-powered-by-ai-and-robotics/); [TravelMole](https://travelmole.com/news/china-hotel-staffed-with-robots-2027). **Label: CONCEPT/PLAN.**
- **Abu Dhabi.** A hotel trialled a humanoid concierge that handled check-in and basic information. [V] [The National (video)](https://www.thenationalnews.com/video/JPkDB1hM/abu-dhabi-hotel-trials-robot-concierge/); [AGBI, Jun 2025](https://www.agbi.com/analysis/tech/2025/06/humanoid-robots-coming-soon-to-a-workplace-near-you/). **Label: DEMO/TRIAL.**
- **Precursor economics in China.** Hotel service robots cost about **CNY 10,000 (≈ $1,380)** each, and one robot typically replaces 1–2 service staff. Keenon is described as the most widely deployed brand. [V-weak] [Voyages d'Affaires](https://www.voyages-d-affaires.com/en/chinese-hotel-robots/).
- **Housekeeping.** No paid humanoid housekeeping deployment was found.
  - A trade newsletter **forecasts** humanoid pilots in more than 50 hotels in 2026, mostly in housekeeping, with a target price below $50k. [V-weak] [WorldVue HII #12](https://www.worldvue.com/hotel-innovation-insights/hotel-innovation-insights-issue-12-2026-predictions-the-year-hospitality-technology-becomes-truly-intelligent/).
  - Hospitality Net argues that housekeeping and kitchens will be among the **last** roles to be automated. [V] [Hospitality Net](https://www.hospitalitynet.org/opinion/4130361/when-will-humanoid-robots-start-cleaning-my-hotel-room).

#### 1.5 Retail
- **Salling Group / Føtex, Denmark (NEW, Oct 2026).**
  - Robots from Hive Robots (built by Unitree) are being trained at a Føtex supermarket near Copenhagen. Training began in June 2026, and **human operators guide every movement**.
  - The target is **independent night-time shelf restocking by early 2027**.
  - Early tests show the robots are **slower than experienced staff**, and **Danish law must change** before they can work among customers.
  - Føtex says staff spend 40–50% of their time replenishing shelves.
  - [V] [Euronews, 11 Oct 2026](https://www.euronews.com/2026/10/11/denmark-tests-humanoid-robots-in-supermarkets-to-help-to-ease-staff-workload-at-night); [To Vima](https://www.tovima.com/world/denmark-tests-humanoid-robots-for-supermarket-night-shifts/).
  - **Label: PILOT (teleoperated training phase). The first EU grocery humanoid pilot found.**
- **Galbot (China).**
  - Beijing pharmacy robot in service from March 2026 [V] [CGTN](https://news.cgtn.com/news/2026-03-13/China-s-first-pharmacy-robot-goes-into-service-in-Beijing-1LtZ7juLcZ2/share_amp.html).
  - **Hong Kong's first fully autonomous robot retail store from 1 September 2026**: a humanoid "store manager" handles orders, pickup and delivery "without remote control" [V] [Xinhua, 31 Aug 2026](https://www.news.cn/gangao/20260831/3c602a3d205c4e52a455d86caa14f55d/c.html).
  - A reported 5,000–6,000 SKUs per site and pick accuracy above 95% [V-weak] [MedService.kz](https://en.medservice.kz/news/tpost/p3xhhk9pv1-dozens-of-pharmacies-with-galbot-g1-robo).
  - **Label: DEPLOYMENT (small format).**
- **Sanctuary AI Phoenix × Canadian Tire / Mark's (Canada, 2024–25).** In-store labelling and merchandise handling, described as possibly the first humanoid in a live retail store. [V-weak] [Metavert (vendor-adjacent)](https://metavert.io/industry/humanoid-robots-for-retail). **Label: PILOT.**
- **StrongPoint × 1X.** Development of a grocery reshelving robot. StrongPoint says restocking takes about **30% of grocery labour hours**. [V] [StrongPoint](https://www.strongpoint.com/uk/?p=172420). **Label: CONCEPT/R&D.**

#### 1.6 Healthcare and elderly care
- **China national elder-care robot pilot (MIIT + MCA).** See the ledger. [V] [SCMP](https://www.scmp.com/tech/policy/article/3313739/china-turns-robots-elderly-care-national-pilot-programme).
  - Reported examples from Xinhua coverage: a humanoid "Xia Lan" interacting with residents at a Shenzhen nursing home, and a companion robot "Yang Yang" in Chengdu. Beijing's embodied-AI action plan encourages pilots in elder-care institutions. [V-weak] [Borneo Post (Xinhua), Nov 2025](https://www.theborneopost.com/2025/11/27/chinas-robotics-eldercare-expands-amid-aging-population-challenge/); [Interesting Engineering](https://interestingengineering.com/culture/china-humanoid-robots-elderly-care).
  - **Label: PILOT (companionship and interaction, not hands-on care).**
- **Kawasaki × Foxconn "Nurabot" (Taiwan).** A nursing-assistant robot for logistics and patient guidance, in trials at **Taichung Veterans General Hospital**. Commercial launch targeted by the end of Kawasaki's FY2026 (March 2027). [V] [The Register, Jul 2025](https://www.theregister.com/2025/07/04/kawasaki_foxconn_/); [Mobile World Live](https://www.mobileworldlive.com/asia-pacific/kawasaki-foxconn-trial-robonurse/). **Label: PILOT.**
- **Diligent Robotics Moxi (US; non-humanoid mobile manipulator).** In **25+ US hospitals with nearly 100 units**. Moxi 2.0 deploying in H1 2026. Serve Robotics agreed to acquire Diligent (January 2026, per one blog). [V-weak] [Metavert](https://metavert.io/industry/humanoid-robots-for-healthcare). **Label: DEPLOYMENT (precursor).**
- **Healthcare Triangle (HCTI) × AI World (Malaysia).** MoU dated **30 September 2026** for a joint venture to bring humanoid nursing robots, focused on patient hygiene, to North American hospitals. Pending approvals; no product exists. [V-weak] [BioPharmaWatch](https://www.biopharmawatch.com/news/HCTI/healthcare-triangle-ai-humanoid-nursing-robots). **Label: CONCEPT.**
- **Regulatory line.** Non-contact supply delivery sits outside FDA medical-device rules. Lifting, bathing and rehab involve direct contact and are far harder to bring to market. [V-weak] (same commentary as cited in [Metavert](https://metavert.io/industry/humanoid-robots-for-healthcare)).

#### 1.7 Construction (and shipbuilding)
- **Tilbury Douglas (UK).** Says it is the **first tier-one contractor with a humanoid ("Douglas") on live sites (April 2026)**, used for data capture and progress documentation, with about 40 hours per month expected to be saved. [V] [Tilbury Douglas](https://www.tilburydouglas.co.uk/tilbury-douglas-becomes-first-contractor-to-launch-a-humanoid-robot-on-construction-site/); [Project Scotland, Apr 2026](https://projectscot.com/2026/04/tilbury-douglas-introduces-humanoid-robot-on-live-construction-sites/); [PBC Today](https://www.pbctoday.co.uk/news/digital-construction-news/first-humanoid-robot-on-construction-site-launched-assist-teams/161336/). **Label: PILOT (no physical building work).**
- **Shimizu (Japan).** Testing a humanoid on real sites in 2026, including the Tokiwabashi project (Torch Tower). It walks a pre-set route with a camera and uses an LLM for inspection. [V-weak] [humanoid.guide](https://humanoid.guide/?p=17925). **Label: PILOT (inspection).**
- **HD Hyundai Samho shipyard (Korea).** Part of the October 2026 Robros pilot. [V] [Seoul Economic Daily](https://en.sedaily.com/finance/2026/10/14/korea-clears-safety-rules-to-put-20-humanoid-robots-on). **Label: PILOT.**
- **Swiss startup.** Piloting teleoperated humanoids on worksites to collect training data for autonomy. [V] [Enterprise Europe Network listing](https://een.ec.europa.eu/partnering-opportunities/humanoid-robots-teleoperation-and-ai-models-construction-sector). **Label: DEMO/TRIAL.**
- **McKinsey.** Humanoids are not yet a fixture on sites. Near-term use will be simple, repetitive tasks in structured zones. Battery life, durability, dexterity and real-time responsiveness are the main hurdles, and there is no specific regulatory guidance yet. [V] [McKinsey, "Humanoid robots in the construction industry: A future vision"](https://www.mckinsey.com/industries/engineering-construction-and-building-materials/our-insights/humanoid-robots-in-the-construction-industry-a-future-vision).

#### 1.8 Agriculture and food processing
- **Agroz AgTech × UBTech (Malaysia).** Walker S humanoids for vertical farms. The CEO describes a two-year programme, with field deployment expected in 2026. [V] [HortiDaily](https://www.hortidaily.com/article/9791498/newly-launched-humanoid-robot-to-work-in-malaysian-vertical-farm); [The Edge Malaysia](https://theedgemalaysia.com/node/784711). **Label: PILOT (planned or starting).**
- **Fujian tea gardens (China).** Humanoid field trials covering leaf picking, hauling loads on hills, and sun-drying and roasting assistance. [V-weak] [humanoid.guide](https://humanoid.guide/tea-farm-humanoid-robots-tackle-field-trials-ahead-of-2026-games/). **Label: DEMO/TRIAL.**
- **Tennessee (US, NAIRR-supported).** A first physical crop-row humanoid prototype is expected by autumn 2026. [V] [NAIRR Pilot](https://nairrpilot.org/projects/highlights/cultivating-the-future). **Label: CONCEPT/R&D.**
- **Food processing.** No named humanoid pilot in a food plant was found.
  - A consultancy forecast (January 2026) says mass deployment in food could come "within six years". [V-weak] [MEXC news](https://www.mexc.com/news/518003).
  - Trade-press discussion: [Food Processing podcast](https://www.foodprocessing.com/on-the-plant-floor/automation/podcast/55358638/humanoids-coming-to-food-and-beverage-plants-sooner-than-you-might-think). Washdown and FDA hygiene requirements are an added barrier.
  - **Label: CONCEPT.**

#### 1.9 Cleaning and facility management
- **YY Group (Singapore, June 2026).** Announced deployment of **Unitree G1 humanoids in its integrated facility-management operations** (shopping centres, hotels, commercial buildings). Workers wear data-collection gear on normal shifts to train the robots. [V] [Droids Substack](https://droids.substack.com/p/humanoids-enter-facility-management); [Facility Executive](https://facilityexecutive.com/can-humanoid-robots-solve-the-facility-management-labor-shortage). **Label: PILOT / early internal deployment (no client contract disclosed).**
- **Keenon at Interclean Amsterdam 2026.** Showed cleaning robots, with a stated strategy of combining general-purpose humanoids with specialised service robots. [V] [Humanoid Robotics Technology](https://humanoidroboticstechnology.com/industry-news/at-interclean-amsterdam-2026-keenon-robotics-demonstrated-autonomous-cleaning-innovation/). **Label: DEMO.**
- **Precursors.** Primech's HYTRON autonomous bathroom-cleaning robots (non-humanoid) are leased to a Singapore hospital FM contractor. [V] [Finviz / Primech PR](https://finviz.com/news/72206/primech-ai-signs-lease-agreement-with-leading-facilities-management-leader-for-hytron-lite-robot-deployment-at-one-of-singapores-largest-hospitals).

#### 1.10 Security, inspection and energy
- **UBTech Walker S2 at China–Vietnam border posts (Guangxi).** Covers traveller orientation, crowd management, patrolling, logistics and commercial services. Deliveries reportedly started in November 2025. [V] [Olhar Digital, 27 Nov 2025](https://olhardigital.com.br/2025/11/27/pro/china-vai-usar-robos-humanoides-para-patrulhar-fronteiras/); [ForkLog](https://forklog.com/en/chinese-robots-to-patrol-vietnam-border/amp). **Label: PILOT (paid procurement).**
- **Nuclear.** Westinghouse and GE Hitachi are reportedly evaluating humanoids (Apptronik Apollo named as a candidate) for in-containment inspection during outages. [V-weak, unconfirmed] [Metavert](https://metavert.io/industry/humanoid-robots-for-energy). **Label: DEMO/evaluation.**
- **Inspection is still won by precursors.**
  - Energy Robotics automates substation inspection for Bayernwerk and Evonik [V] [Energy Robotics](https://www.energy-robotics.com/about-us).
  - ExRobotics launched the ExR-2.5 hazardous-area robot in North America (June 2026) [V] [The Robot Report](https://www.therobotreport.com/exrobotics-launches-ul-certified-inspection-robot-for-hazardous-environments/).
  - No confirmed production humanoid substation programme was found.
- **Analyst signal.** Goldman Sachs noted earlier in 2026 that growth was driven by specialised commercial deployments such as **security patrols and customer service in public spaces** (China). [V] [Tiger Brokers (Goldman note)](https://www-web.itiger.com/news/1128535000).

#### 1.11 Defence and hazardous environments
- Nothing new was verified in this session. See Gaps.

#### 1.12 Last-mile delivery
- **Amazon "humanoid park" (San Francisco).** An indoor obstacle course with a Rivian van, used to test humanoids jumping out of vans to deliver parcels (reported June 2025). Amazon did not comment. [V] [eWeek](https://www.eweek.com/news/amazon-testing-humanoid-delivery-robots/); [ConsumerAffairs](https://www.consumeraffairs.com/news/report-says-amazon-developing-humanoid-delivery-robots-060525.html). **Label: DEMO/TRIAL (R&D).**
- **Delivery Lab (Korea).** Among the four sites in the October 2026 Robros pilot. [V] [Seoul Economic Daily](https://en.sedaily.com/finance/2026/10/14/korea-clears-safety-rules-to-put-20-humanoid-robots-on). **Label: PILOT.**
- **Evri (UK).** Robot-dog (quadruped) trial alongside couriers, summer 2025. [V] [SupplyChain247](https://www.supplychain247.com/article/evri-robot-dog-last-mile-delivery/retail). **Label: PILOT (non-humanoid precursor).**
- **Ford × Agility (2019).** Demo only. [V] [Parcel & Postal Tech Intl](https://parcelandpostaltechnologyinternational.com/news/automation/agility-robotics-and-ford-team-up-to-further-develop-humanoid-delivery-robots.html).
- **Analyst view.** Citi ranks **parcel delivery and food delivery among its top four humanoid use cases by growth potential**. [V] [Citi GPS](https://www.citigroup.com/global/insights/the-rise-of-ai-robots).

#### 1.13 Households
- **1X NEO.**
  - The Hayward, California factory **began full-scale production on 30 April 2026**. Units were first shipped to 1X's R&D lab and internal home testing [V] [Robotics 24/7](https://www.robotics247.com/article/1x-opens-neo-humanoid-robot-factory-in-california); [Macau Business](https://macaubusiness.com/1x-opens-neo-factory-in-hayward-ca-americas-first-vertically-integrated-humanoid-robot-factory-with-consumer-shipments-planned-for-2026/).
  - Heise says first private-customer deliveries come **by end-2026** [V] [heise](https://heise.de/-11287205).
  - Deliveries start in the US, with other markets from 2027 [V] [BusinessWire](https://www.businesswire.com/news/home/20251027434628/en/1X-Launches-NEO-The-Robot-Redefining-Life-at-Home).
  - **Conflict:** some outlets claim robots are already shipping to early-access customers [V-weak] [Let's Data Science](https://letsdatascience.com/news/1x-ships-neo-humanoid-robots-to-us-homes-774b7a74), but the company's own wording supports only "planned for 2026".
  - **Label: CONCEPT moving to early DEPLOYMENT (not confirmed as of October 2026).**
- **The 1X × EQT deal** (up to 10,000 units, mainly industrial) shows that "household" platforms are being placed in industry first. [V] [TechCrunch](https://techcrunch.com/?p=3075424).
- **Citi** lists **home services** among its top four use cases by growth potential, but expects industrial use first and households later. [V] [Citi GPS](https://www.citigroup.com/global/insights/the-rise-of-ai-robots).

#### 1.14 Poland and the CEE (added)
- **No humanoid deployment in a Polish factory or warehouse was found.**
  - Polish Radio (May 2026) profiles MeraRobotics, whose robot works as a robo-influencer, and says factory use "remains to be seen". [V] [Polskie Radio](https://polskieradio.pl/395/7786/Artykul/3690212,balance-humanoid-robotics-in-poland).
  - On **7 September 2026** about 30 humanoid and quadruped robots "marched" outside Poland's Ministry of Digital Affairs. The stunt was organised by the initiative Democratism to demand protection for workers. [V] [Hungarian Conservative](https://www.hungarianconservative.com/?p=84077); [Kuwait Times](https://kuwaittimes.com/article/49366/business/robots-protest-rampant-ai-in-poland/).

#### 1.15 Market-level context: shipments
- **2025 global shipments.**
  - **Omdia: about 13,318 units (+~480% y/y).** AgiBot 5,168 (first), Unitree 4,200 (second), and the top 10 dominated by Chinese firms [V] [SCMP](https://www.scmp.com/tech/tech-trends/article/3339346/chinese-firms-outpace-us-rivals-2025-humanoid-robot-shipments-agibot-takes-lead); [TechNode, 9 Jan 2026](https://technode.com/2026/01/09/chinas-agibot-leads-global-humanoid-robot-shipments-in-2025-omdia-says/).
  - **IDC: about 18,000** [V] [Jiemian](https://en.jiemian.com/article/13925066.html).
  - IFR reportedly counts only about 7,000 humanoids sold in 2025 for industrial and professional-service use, because the definitions differ [V-weak] [Next Move Strategy Consulting, Oct 2026](https://www.nextmsc.com/industry-deep-dive/humanoid-robots-announced-vs-shipped-units).
- **H1 2026.** Counterpoint: more than **22,000 units (≈ +300% y/y)**, with more than 50,000 projected for 2026. [V] [Counterpoint Research](https://counterpointresearch.com/xmlrpc.php/insights/global-humanoid-robot-shipments-soar-nearly-300-percent-yoy-in-h1-2026).

### Inferences
- **Breadth is now evidenced by named 2026 pilots in roughly 11 of 13 sectors.** The weakest are food processing (no named pilot), defence (nothing verified) and last-mile (R&D plus one Korean pilot site). This is stronger than the draft, which relied on demos. **But in almost every non-industrial case the robot is teleoperated, supervised or doing a low-value subset of the job:** information and greeting at airports and hotels, data capture on building sites, companionship in elder care.
- **Honest labels for the deck:** "deployment" only for factories and logistics (Agility, Figure–BMW, UBTech), Galbot micro-retail and single-site hotel concierges. Everything else is "pilot" or "plan".
- **A clear 2026 pattern:** sectors with acute labour shortages and an ageing workforce (Japanese airports and construction, Danish night retail, Korean shipyards and factories, Chinese elder care) are first to try humanoids **in back-of-house or night work, away from customers**. This matches the regulatory reality: Denmark needs a law change and Korea needed a sandbox.
- **Wheeled-base humanoids win early commercial niches** (Galbot retail, Schaeffler × Humanoid). This supports the framing "human-like manipulation", not "legs at all costs".
- **For Europe, the 2026 evidence base is now concrete:** BMW Leipzig, Renault–Wandercraft, Schaeffler–Humanoid, Siemens–Humanoid, Salling/Føtex and Tilbury Douglas. Poland has none. That is a first-mover gap for an integrator such as Robotify.
- **Indicative sector status and timing (October 2026).** This is judgement built on the evidence above, not a sourced forecast:

| Sector | Status Oct 2026 (best evidence) | Label | Plausible scaled timing |
|---|---|---|---|
| Manufacturing | Figure 03 at BMW; UBTech at Chinese carmakers; Renault 350 planned; Schaeffler "thousands" contracted; BMW Leipzig pilot | DEPLOYMENT (early) | 2027–2030 for fleets at leading plants |
| Warehousing and logistics | Agility at 9 sites (paid RaaS); Siemens PoC at 60 totes/h; 1X–EQT up to 10k | DEPLOYMENT (early) | 2027–2030 |
| Airports | JAL Haneda (2026–28); San José greeter | PILOT | ~2030 at labour-short hubs |
| Retail | Galbot pharmacies and a Hong Kong store; Føtex night restocking (teleop) | DEPLOYMENT (micro-format) / PILOT | 2028–2032 for night restocking |
| Hospitality | Oto concierge; Pudu robot hotel 2027 | DEPLOYMENT (single site) / PLAN | Front desk now; housekeeping 2032+ |
| Healthcare | Nurabot trial; Moxi (precursor) | PILOT | Logistics ~2030; patient contact 2035+ |
| Elderly care | China national pilots (companionship) | PILOT | Hands-on care 2035+ |
| Construction and shipbuilding | Tilbury Douglas, Shimizu (inspection); HD Hyundai Samho | PILOT | Site logistics ~2030; trades 2035+ |
| Agriculture | Agroz–UBTech vertical farm; Fujian tea trials | PILOT / DEMO | Niche (indoor farms) ~2030 |
| Food processing | No named pilot | CONCEPT | ~2030 (packing lines, close to factory tasks) |
| Cleaning and FM | YY Group G1 in IFM | PILOT | 2030+ |
| Security, inspection, energy | UBTech border posts; nuclear evaluations; quadrupeds dominate | PILOT / DEMO | Manipulation add-on 2030+ |
| Last-mile | Amazon humanoid park; Delivery Lab (Korea) | DEMO / PILOT | "Last 50 m" 2032+ |
| Households | 1X NEO in production, deliveries "by end-2026" | PLAN moving to early DEPLOYMENT | Early adopters 2027–2030; mass market 2035+ |

### Gaps
- **Still unverified [M] draft claims (not re-checked this session):**
  - Mercedes-Benz × Apptronik pilot and equity stake.
  - Foxconn Houston humanoids (Q1 2026).
  - Schaeffler–NEURA partnership.
  - Agility "100,000 totes".
  - Amazon "600,000 avoided hires" (NYT).
  - DHL × Stretch 1,000+ units; Pickle × UPS.
  - Agility RoboFab (10k per year) and Figure BotQ (12k per year) capacity.
  - Henn-na Hotel retiring ~half of 243 robots (2019).
  - Pudu "100,000 units".
  - Keenon XMAN-R1 and Pudu D7/D9.
  - Fourier GR-3 care humanoid.
  - Japan MHLW figure of 2.72 million care workers needed by FY2040.
  - WHO shortfall of 10–11 million health workers and ILO shortfall of 13.6 million long-term-care workers.
  - AIST HRP-5P drywall demo (McKinsey mentions "a Japanese researcher has built a humanoid that can install drywall", which is consistent but does not name it).
  - HD Hyundai × Persona AI welding.
  - ABC estimates of US construction shortages.
  - Brain Corp scrubber fleet size.
  - ANYbotics and Spot customer list.
  - NASA Valkyrie × Woodside.
  - Foundation Phantom defence claims.
  - Starship and Serve delivery counts.
  - 1X "expert mode" teleoperation (high-confidence memory, but not re-checked).
  - SoftBank Pepper (~27k units, production paused).
  - Chinese spectacle events (Spring Festival Gala, Beijing half-marathon, World Humanoid Robot Games).
- **Figure at JCPenney, Aéropostale and Brooks Brothers.** This retail-restocking claim surfaced only on unreliable mirror sites. **Do not use** without confirmation from Forbes or Figure.
- **GigaAI "SeeLight S1" household humanoid** (SCMP brief, May 2026). Surfaced in a search summary without a resolvable URL.
- **No 2026 status found** for Telexistence or FamilyMart, the Galbot 100-store target, JAL trial results after May 2026, or whether the BMW Leipzig pilot actually started in summer 2026.
- **Middle-East airports.** No humanoid evidence for 2026. Gulf examples are limited to hotel and museum humanoids and an Emirates 2027 plan of unspecified form.
- **Defence and hazardous environments.** Nothing searched or verified for 2026.

---

## 2. Sector labour pools: physical work by sector in the EU (Eurostat), Poland (GUS) and globally (ILO), and analysts' wage-pool estimates

### Takeaway
The EU's seven sectors that rely most on physical work have about **120 million employees**:

| Sector | EU employees, Q3 2025 |
|---|---|
| Manufacturing | 30.9m |
| Wholesale and retail | 25.9m |
| Health and social work | 22.6m |
| Construction | 13.8m |
| Transport and storage | 10.8m |
| Accommodation and food | 9.6m |
| Agriculture (employees only) | 6.0m |

Total EU employment is about 207 million. By occupation, craft trades, machine operators and elementary jobs (ISCO 7–9) account for about **27% of EU employment, i.e. roughly 55 million people**.

Globally, agriculture alone employs **916 million (26%)** and industry about 24% (≈ 0.85 billion).

The only analyst wage-pool figures found are Morgan Stanley's:
- **US:** about **$3 trillion** of wages, equal to 63 million humanoids by 2050.
- **Global:** a "labour TAM" of about **$30 trillion (≈ one-third of global GDP)**, found only in secondary coverage.

**Polish sector headcounts from GUS could not be retrieved**, because the GUS and Eurostat databases were unreachable. Only partial enterprise-sector figures and World Bank shares are available.

### Cited Findings

#### 2.1 EU (Eurostat-based)
- **Employees by sector, Q3 2025** (Statista chart of Eurostat data, in thousands):

  | Sector | Employees (thousands) |
  |---|---|
  | Manufacturing | 30,851.6 |
  | Wholesale and retail trade | ≈ 25,900 |
  | Human health and social work | ≈ 22,600 |
  | Construction | 13,812.8 |
  | Transportation and storage | 10,807.6 |
  | Accommodation and food service | 9,648.6 |
  | Agriculture, forestry and fishing | 5,976.8 |

  [V] Statista page as returned by search: [Statista (Eurostat data)](https://www.statista.com/statistics/1195197/global-artificial-intelligence-publishing-market-size). *Caveat: the page title returned does not match the content (the figures appear to come from a related-statistics panel). These are **employees** only, so they exclude the self-employed, which matters most for agriculture, construction and retail. Verify in Eurostat `lfsq_eegan2` or `lfsa_egan2` (catalogue: [EIGE mirror of lfsa_egan2](https://dgs-p.eige.europa.eu/data/information/ta_wrklab_lab_employ_inter_sector__lfsa_egan2)).*
- **Combined grouping.** EU employment in wholesale and retail, transport, and accommodation and food services together was 53,153.75 thousand (September 2025, Eurostat via Trading Economics). [V] [Trading Economics](https://tradingeconomics.com/european-union/employment-wholesale-retail-trade-transport-accommodation-food-service-activities-eurostat-data.html).
- **Total EU-27 employment, 2024: ≈ 207.2 million.** [V] [PORDATA (Eurostat data)](https://www.pordata.pt/en/europe/employment+total+and+by+occupation-3386).
- **Sector shares.** Manufacturing 17%, health and social care 13%, wholesale and retail 13%, education 9%; together these four make up more than half of EU workers. The year is not stated. [V] [data.europa.eu data story](https://data.europa.eu/en/publications/datastories/work-across-eu-jobs-pay-and-time).
- **Manufacturing, 2023.** 2.2 million enterprises employed more than 30 million people. [V] [Eurostat Statistics Explained PDF](https://ec.europa.eu/eurostat/statistics-explained/SEPDF/cache/10086.pdf).
- **Physical occupations (ISCO-08).**
  - Q2 2020, total employment about 195 million: **craft and related trades 12%, plant and machine operators and assemblers 7%, elementary occupations 8%** [V] [Eurostat news, Nov 2020](https://ec.europa.eu/eurostat/web/products-eurostat-news/-/ddn-20201113-2).
  - Elementary occupations: **16.6 million (8.4% of EU employment) in 2022** [V] [Cedefop](https://www.cedefop.europa.eu/en/data-insights/elementary-occupations-skills-opportunities-and-challenges-2023-update).
- **Correction to the draft's EU table:**
  - Manufacturing ~30m, health ~23m, construction ~13m, transport ~11m and accommodation ~10m are **confirmed in order of magnitude** (as employees).
  - **Wholesale and retail** was "~28–30m" in the draft; the employee figure is ~25.9m. Total employed including the self-employed is likely higher but unverified.
  - **Agriculture** was "~8m"; the employee figure is ~6.0m. Total employed including farmers was not verified.
  - **Administrative and support** (~9m) was not verified.

#### 2.2 Poland (GUS-based; partial)
- **Enterprise sector** (firms with more than 9 employees), average employment in **March 2025**, GUS data via the Olsztyn regional labour office:

  | Sector | Employment (thousands) |
  |---|---|
  | Total | 6,444 |
  | Industry | 2,708 |
  | Construction | 414 |
  | Trade and vehicle repair | 1,298 |
  | Transport and storage | 659 |

  [V] [WUP Olsztyn communiqué, Mar 2025](https://rpo-wupbialystok.praca.gov.pl/documents/d/wojewodzki-urzad-pracy-w-olsztynie/komunikat-na-temat-uwarunkowan-spoleczno-gospodarczych-funkcjonowania-przedsiebiorstw-w-kraju-i-wojewodztwie-warminsko-mazurskim-marzec-2025). *This **undercounts** whole-economy employment: it excludes small firms, farmers and the self-employed.*
- **Industry, enterprise sector.** ≈ 2,698 thousand in September 2024 (KIG, from GUS). [V] [KIG monthly review, Oct 2024](https://kig.pl/wp-content/uploads/2024/11/Monthly-review-of-economic-situation-in-industries-25.10.2024.pdf).
- **Employment structure (World Bank, "latest available").** Agriculture 7.6%, industry 29.6% (World Bank "industry" includes construction), services 62.8%. [V] [Catalan trade portal citing World Bank](https://tradeportal.accio.gencat.cat/ca/mercats-potencials/polonia/visio-economica).
- **Agriculture headcount fell by about 1.2 million in 2014–2024** (snippet truncated). [V-weak] [PIE report, Sep 2025](https://pie.net.pl/wp-content/uploads/2025/09/Raport-PIE_Transformacja-strukturalna-polskiej-gospodarki-w-latach-2014-2024.pdf).
- **Comparability warning.** PKD 2025 replaces PKD 2007, raising the number of sections from 21 to 22 and redefining section A. Series from 2025 onwards may not be comparable with earlier years. [V] [GUS presentation (PARP, Dec 2024)](https://redakcja.parp.gov.pl/storage/event_materials/3498/pdf/Ireneusz%20Budzy%C5%84ski%20GUS_02.12.24.pdf).

#### 2.3 Global (ILO-based)
- **Agriculture, forestry and fishing.** 916 million workers, 26.1% of global employment (2023; FAO from ILO modelled estimates). The broader agrifood system employs about 1.3 billion. [V] [FAO](https://www.fao.org/statistics/highlights-archive/highlights-detail/employment-indicators-2000-2023-%28july-2025-update%29/en).
- **Sector split, 2022** (World Development Indicators, from ILO modelled estimates): agriculture ~26%, industry ~24%, services ~50%. [V] [Intelpoint (WDI summary)](https://intelpoint.co/insights/employment-distribution-worldwide-in-2022/); [World Bank metadata](https://databank.worldbank.org/metadataglossary/world-development-indicators/series/SL.SRV.EMPL.ZS).

#### 2.4 Wage-pool and TAM framings used by analysts
- **Morgan Stanley (US, 2024 report).**
  - About 63 million humanoids in the US by 2050, equal to about **$3 trillion of salary**; about 8 million by 2040 ($357 billion of wages).
  - About 75% of occupations and 40% of employees could be affected.
  - **Up to 70% of construction jobs and 67% of farming, fishing and forestry jobs** could be affected.
  - [V] [Morgan Stanley, "Could AI Robots Help Fill the Labor Gap?"](https://morganstanley.com/ideas/humanoid-robot-market-outlook-2024).
- **Morgan Stanley (global).** A "global labour TAM" of **about $30 trillion (about one-third of global GDP)**, found only in secondary coverage. [V-weak] [Roundhill Investments blog](https://blog.roundhillinvestments.com/employee-of-the-month-humanoids-vs-humans). *This figure is different from the ~$5 trillion humanoid revenue estimate for 2050.*
- **No sector-level wage pool from Citi, Goldman Sachs or BofA was found.**

### Inferences
- **EU physical-labour pool (order of magnitude).** ISCO 7+8+9 make up about 27% of employment. Applied to about 207 million, that gives **≈ 55–56 million workers** in craft, operator and elementary jobs. This rises substantially if physically active service roles (carers, cooks, cleaners in ISCO 5) and farmers (ISCO 6) are added. The calculation uses 2020 shares on 2024 totals and should be re-run with `lfsa_egai2d`.
- **Global.** 916 million / 0.261 implies about **3.5 billion employed**. Industry at ~24% gives about **0.84 billion**; agriculture plus industry is **≈ 1.75 billion** people in mostly physical sectors, before counting physical service jobs.
- **Poland.** Taking ~17 million employed (draft figure, unverified) and the World Bank shares, there are roughly **5.0 million in industry including construction** and **≈ 1.3 million in agriculture**. The enterprise-sector data (2.7 million in industry, 0.66 million in transport) are a floor.
- **Wage-pool framing for investors.** The US figure (~$3 trillion in 2050, Morgan Stanley) is primary-sourced. The global "$30 trillion labour TAM" should be presented as "Morgan Stanley, as reported", or replaced with the defensible "labour ≈ half of GDP" framing (the draft's ILO labour-share figure was not re-verified).

### Gaps
- **Not retrieved because the databases were unreachable** (ec.europa.eu blocked, WebFetch DNS failures):
  - Eurostat `lfsa_egan2` (2024/2025 headcounts by NACE section, EU-27 and PL).
  - `lfsa_egai2d` (ISCO two-digit occupations).
  - National-accounts compensation of employees by industry (`nama_10_a64`).
  - GUS BAEL 2025 and "Pracujący w gospodarce narodowej 2024" by PKD section.
  - **These must be filled before investor use.**
- **Unverified draft figures:**
  - EU average hourly labour cost (~€33.5) and Poland (~€15), 2024.
  - Poland ~17 million employed.
  - Minimum wage 2026 of PLN 4,806.
  - Average wage of PLN 8.5–9k.
  - ILO labour-income share of ~52% of GDP.
  - ATAG ~11 million aviation jobs.
  - ILO 75.6 million domestic workers.
  - ELA and Barometr zawodów shortage lists.
  - Deloitte 1.9 million US manufacturing gap.
- **Poland.** No sector-specific figures were found for accommodation and food, health and social work, cleaning or security.

---

## 3. Analyst views: which sectors adopt first, when, and their shares of future humanoid demand

### Takeaway
Every 2026 update **raised near-term numbers**:
- **Goldman Sachs (September 2026)** raised 2035 shipments about 5× to **6.5 million per year** (≈ **$138 billion**).
- **BofA (March 2026)** expects **90k units in 2026 and 1.2 million in 2030**.
- **Morgan Stanley** raised its 2026 China forecast to **50k**.

The ordering of sectors is unchanged across all houses: **industrial and commercial first, households last**. Morgan Stanley keeps about **90% of the 2050 fleet (~930 million of ~1 billion) in industrial and commercial use** and only ~80–84 million in homes.

Citi is the outlier on use cases. It names **parcel delivery, construction, food delivery and home services** as the top four use cases by growth potential.

No house publishes a full sector split in sources reachable this session.

### Cited Findings
- **Goldman Sachs (September 2026, 80-page "Physical AI" report).**
  - 2035 shipments about **6.5 million units** (previously ~1.4 million).
  - 2035 market about **$138 billion** (previously $38 billion).
  - 2030 shipments **890k** (previously 256k).
  - 2026 shipments **75k** (previously 51k; 2027 previously 76k).
  - Drivers: faster AI progress, falling hardware cost, rising investment.
  - **Caveat in coverage:** Goldman identifies **no confirmed customer orders approaching the projected volumes**, and the forecast does not establish the reliability, operating cost or task coverage needed for millions of sales per year.
  - [V] [24/7 Wall St., 13 Sep 2026](https://247wallst.com/investing/2026/09/13/robots-everywhere-goldman-sachs-now-sees-6-5-million-humanoid-robots-by-2035/); [humanoid.guide](https://humanoid.guide/?p=18115); [Origin of Bots](https://www.originofbots.com/news/goldman-sachs-supercharges-global-humanoid-robot-forecast-nearly-5x-to-65-million-annual-units-by-2035). *Secondary coverage only; cost claims from Origin of Bots (a $20k unit cost by 2028) are uncorroborated.*
- **Goldman (earlier 2026).** Growth so far is driven mainly by **specialised commercial deployments: security patrols and customer service in public spaces**. [V] [Tiger Brokers](https://www-web.itiger.com/news/1128535000). → Supports an early role for "security and public-facing services" in China.
- **BofA (March 2026).** Annual shipments rise from **90,000 (2026) to 1.2 million (2030)**; **3 billion humanoids by 2060** ("more people will own a humanoid than a car"). [V] [Fortune, 13 Mar 2026](https://fortune.com/2026/03/13/bank-of-america-humanoid-robot-forecast-3-billion-2060); [AOL/Fortune](https://www.aol.com/finance/more-people-own-humanoid-robot-140346858.html). *The draft's "~1 million per year by 2030; 18k in 2025" is UPDATED.*
- **Morgan Stanley (long-range).**
  - About 1 billion humanoids by 2050 and about **$4.7–5 trillion** in annual revenue.
  - About **13 million in use by 2035**, "mostly commercial and industrial".
  - **~90% (≈ 930 million) in repetitive, simple, structured work**; some write-ups say 92% industrial and commercial.
  - **Households ~80–84 million units** by 2050.
  - **China 302.3 million, US 77.7 million.**
  - [V] [OODA Loop](https://oodaloop.com/briefs/technology/humanoid-robots-seen-as-5-trillion-global-opportunity-at-morgan-stanley/); [Tenten summary](https://developer.tenten.co/morgan-stanleys-bold-prediction-humanoid-robots-will-create-a-5-trillion-market-by-2050); [humanoid.guide](https://humanoid.guide/?p=3205).
  - *Correction to the draft:* "high-income countries incl. US ≈ 296 million" is not confirmed; the US figure cited is **77.7 million**.
- **Morgan Stanley (December 2025 model update, per secondary coverage).**
  - About **24.4 million humanoids adopted by 2036**.
  - Cumulative adoption to 2050: **East Asia & Pacific 43%, Europe & Central Asia 16%, North America 9%**.
  - Adoption "relatively slow" until at least 2035.
  - [V-weak] [Tiger Brokers](https://www.itiger.com/hans/news/1174177682); [The Next Web, 24 Jun 2026](https://thenextweb.com/news/china-humanoid-robot-forecast-morgan-stanley-50000).
- **Morgan Stanley China (June 2026).**
  - 2026 China shipments raised to **50,000** (from 28,000; another outlet says from 14,000 at the start of the year, which suggests two upgrades).
  - China humanoid market about **$2 billion in 2026 and $15 billion by 2030**, counting external sales only.
  - [V] [The Next Web](https://thenextweb.com/news/china-humanoid-robot-forecast-morgan-stanley-50000); [ForkLog](https://forklog.com/en/morgan-stanley-raises-forecast-for-chinese-humanoid-robot-shipments/).
- **Morgan Stanley "Humanoid 100".** A supply-chain list, with an update covered in 2026. [V-weak] [humanoid.guide](https://humanoid.guide/?p=11501). Its contents were not re-verified.
- **Citi.**
  - About **648 million humanoids by 2050**; TAM **$209 billion by 2035** and **$7 trillion by 2050**.
  - **Top four use cases by growth potential: parcel delivery, construction, food delivery, home services.**
  - Industrials first, then households.
  - A separate Citi GPS (December 2024) counts **1.3 billion AI robots by 2035 and 4 billion by 2050**, covering all AI robots and not only humanoids.
  - [V] [Citi GPS "The Rise of AI Robots"](https://www.citigroup.com/global/insights/the-rise-of-ai-robots); [Citi Insights](https://citigroup.com/global/insights/the-rise-of-ai-robots-humanoids-are-coming-for-you); [Yahoo Finance](https://finance.yahoo.com/news/teslas-elon-musk-may-not-be-the-only-one-cashing-in-on-humanoid-robots-133048663.html).
- **Other trackers.** Berg Insight: annual shipments from **16,000 in 2026 to 26 million by 2040**. [V] [TyN Magazine](https://tynmagazine.com/?p=253391). Counterpoint: more than 50k in 2026 (see 1.15).
- **McKinsey.** Construction-specific view only: simple, repetitive tasks in structured zones first. [V] [McKinsey](https://www.mckinsey.com/industries/engineering-construction-and-building-materials/our-insights/humanoid-robots-in-the-construction-industry-a-future-vision). **No 2026 McKinsey sector forecast was found.**

### Inferences
- **Sequencing consensus (strengthened by the 2026 evidence):**
  1. Factories and logistics (2026–2030).
  2. Public-facing and security services in China, airports, retail night shifts and hospital logistics (2028–2032).
  3. Construction trades, hands-on care and households (2032–2035+).
  - Goldman's "security patrols and customer service" signal and Citi's "delivery and construction" ranking suggest service sectors may become **large by volume**, even though they are not first.
- **Spread of 2030 forecasts:** Goldman 890k, BofA 1.2 million. Against 2025 actuals of 13–18k, both imply roughly a 50–90× ramp in five years. **Present these as analyst scenarios, not consensus fact.**
- **Europe's share.** Morgan Stanley puts Europe & Central Asia at 16% of cumulative adoption to 2050, against 43% for East Asia & Pacific. Useful for sizing an EU integrator's addressable fleet, if confirmed.

### Gaps
- No full **sector split** of humanoid demand from Morgan Stanley, Goldman, Citi or BofA could be retrieved; the original reports were not accessible.
- **Not re-checked:**
  - The draft's Morgan Stanley "Humanoids: Investment Implications" (June 2024) wording.
  - The Goldman 2022 "4% of US manufacturing shortage" claim.
  - McKinsey 2017 sector automation percentages and McKinsey 2025 "57% of US work hours".
  - China MIIT 2023 guidance, the 15th Five-Year Plan wording and the NDRC bubble warning (November 2025).
- **IFR World Robotics 2026** (usually September or October) commentary on humanoids was not found.

---

## 4. Arguments for humanoids' generality, and credible counter-arguments

### Takeaway
2026 adds **real-world evidence for redeployability**:
- The same platform types (Unitree G1/H1-class, UBTech Walker S, 1X NEO) now appear across airports, supermarkets, facility management, vertical farms, factories and border posts.
- One "home" robot (NEO) has been contracted for up to 10,000 industrial placements.
- Pilots explicitly use **human workers' data** to train robots (YY Group, Salling).

The **counter-evidence is also more concrete**:
- Pilots run **slower than humans** (Føtex) or at modest throughput (Siemens, 60 totes/h).
- They rely on **teleoperation** (Føtex: "operators guide every movement").
- They need **legal changes or sandboxes** (Denmark, Korea).
- Goldman itself flags that no orders approach its forecasts.
- Brooks' dexterity and safety critique still stands.

### Cited Findings
- **Pro: brownfield fit and labour shortages.**
  - JAL cites the shortage driven by tourism and ageing, and ground-handling work in "tight spaces" [V] [Kyodo via Ada Derana](https://www.adaderana.lk/news.php?nid=121852).
  - Føtex staff spend 40–50% of time restocking [V] [Euronews](https://www.euronews.com/2026/10/11/denmark-tests-humanoid-robots-in-supermarkets-to-help-to-ease-staff-workload-at-night).
  - Shimizu cites Japan's construction labour shortage [V-weak] [humanoid.guide](https://humanoid.guide/?p=17925).
- **Pro: one platform across sectors.**
  - **Unitree:** humanoids at JAL Haneda [V] [Bloomberg via BNN](https://www.bnnbloomberg.ca/business/2026/04/30/watch-japan-airlines-turns-to-humanoid-robots-to-handle-baggage/), Føtex (via Hive Robots) [V] [Euronews](https://www.euronews.com/2026/10/11/denmark-tests-humanoid-robots-in-supermarkets-to-help-to-ease-staff-workload-at-night) and YY Group FM [V] [Droids Substack](https://droids.substack.com/p/humanoids-enter-facility-management).
  - **UBTech Walker:** car plants [V] [UBTech PR](https://kyodonewsprwire.jp/release/202511179261), vertical farms [V] [HortiDaily](https://www.hortidaily.com/article/9791498/newly-launched-humanoid-robot-to-work-in-malaysian-vertical-farm) and border posts [V] [Olhar Digital](https://olhardigital.com.br/2025/11/27/pro/china-vai-usar-robos-humanoides-para-patrulhar-fronteiras/).
  - **1X NEO:** homes, plus up to 10k industrial units [V] [TechCrunch](https://techcrunch.com/?p=3075424).
- **Pro: learning from humans.** YY Group workers wear data-collection gear during shifts [V] [Droids Substack](https://droids.substack.com/p/humanoids-enter-facility-management). A Swiss construction startup uses teleoperation data to train autonomy [V] [EEN](https://een.ec.europa.eu/partnering-opportunities/humanoid-robots-teleoperation-and-ai-models-construction-sector).
- **Pro: vendors pairing humanoids with specialised robots** rather than replacing them (Keenon). [V] [Humanoid Robotics Technology](https://humanoidroboticstechnology.com/industry-news/at-interclean-amsterdam-2026-keenon-robotics-demonstrated-autonomous-cleaning-innovation/).
- **Counter 1: dexterity and touch (Rodney Brooks).**
  - His September 2025 essay argues today's humanoids will not learn dexterity from video and teleoperation data ("cameras see; fingers feel").
  - In December 2025 he called the vision of assistant robots "pure fantasy".
  - He predicts many projects will be scaled back.
  - [V] [Fortune, 16 Dec 2025](https://fortune.com/2025/12/16/mit-roboticist-founded-bankrupt-roomba-maker-irobot-says-elon-musk-vision-purely-fantas); [humanoid.guide](https://humanoid.guide/rodney-brooks-challenges-elon-musks-vision-for-humanoid-robots/).
  - Safety distance: about **3 m** in one report and **10 ft** in another; the exact figure was not confirmed against his original text. [V] [Tecnoblog](https://tecnoblog.net/noticias/icone-da-robotica-recomenda-nao-se-aproxime-dos-humanoides-atuais/).
- **Counter 2: teleoperation and speed.**
  - Føtex: human operators guide every movement, and the robots are slower than experienced staff [V] [Euronews](https://www.euronews.com/2026/10/11/denmark-tests-humanoid-robots-in-supermarkets-to-help-to-ease-staff-workload-at-night).
  - JAL: autonomy is only a future goal [V] [Kyodo via Ada Derana](https://www.adaderana.lk/news.php?nid=121852).
  - Siemens PoC: 60 totes per hour, with only 30+ minutes of autonomy [V] [Humanoid](https://thehumanoid.ai/humanoid-and-siemens-completed-a-proof-of-concept-to-test-humanoidrobots-in-industrial-logistics/).
- **Counter 3: regulation and acceptance.**
  - Danish law must change before robots can work among customers [V] [Euronews](https://www.euronews.com/2026/10/11/denmark-tests-humanoid-robots-in-supermarkets-to-help-to-ease-staff-workload-at-night).
  - Korea required a regulatory demonstration exemption for 20 units [V] [Seoul Economic Daily](https://en.sedaily.com/finance/2026/10/14/korea-clears-safety-rules-to-put-20-humanoid-robots-on).
  - There is no construction-specific regulatory guidance [V] [McKinsey](https://www.mckinsey.com/industries/engineering-construction-and-building-materials/our-insights/humanoid-robots-in-the-construction-industry-a-future-vision).
  - Warsaw robot protest (September 2026) [V] [Kuwait Times](https://kuwaittimes.com/article/49366/business/robots-protest-rampant-ai-in-poland/).
- **Counter 4: demand versus forecasts.**
  - Goldman: no confirmed orders near the projected volumes [V] [24/7 Wall St.](https://247wallst.com/investing/2026/09/13/robots-everywhere-goldman-sachs-now-sees-6-5-million-humanoid-robots-by-2035/).
  - Tesla missed its 2025 target and output was "a few hundred" [V-weak] [Technology.org](https://www.technology.org/2026/07/18/humanoid-robots-in-2026-what-is-actually-deployed/).
  - Trackers disagree on 2025 volumes: Omdia ~13k, IDC ~18k, IFR ~7k [V] [SCMP](https://www.scmp.com/tech/tech-trends/article/3339346/chinese-firms-outpace-us-rivals-2025-humanoid-robot-shipments-agibot-takes-lead); [Jiemian](https://en.jiemian.com/article/13925066.html); [V-weak] [NextMSC](https://www.nextmsc.com/industry-deep-dive/humanoid-robots-announced-vs-shipped-units).
- **Counter 5: specialised robots win single tasks.**
  - Inspection is done by quadrupeds and wheeled robots [V] [Energy Robotics](https://www.energy-robotics.com/about-us); [The Robot Report](https://www.therobotreport.com/exrobotics-launches-ul-certified-inspection-robot-for-hazardous-environments/).
  - Hotels use CNY 10k wheeled service robots [V-weak] [Voyages d'Affaires](https://www.voyages-d-affaires.com/en/chinese-hotel-robots/).
  - Hospitals use Moxi [V-weak] [Metavert](https://metavert.io/industry/humanoid-robots-for-healthcare).
  - Retail uses the TX SCARA arm [V] [Fierce Electronics](https://www.fierceelectronics.com/sensors/telexistence-robots-restock-shelves-convenience-stores-japan).
- **Counter 6: hospitality sceptics** put housekeeping and kitchens among the last roles to be automated. [V] [Hospitality Net](https://www.hospitalitynet.org/opinion/4130361/when-will-humanoid-robots-start-cleaning-my-hotel-room).

### Inferences
- **The strongest honest claim for the deck:** "In 2026 the same few humanoid platforms are already being trialled across a dozen sectors, from airport aprons and supermarket aisles to shipyards and nursing homes, which no previous robot class has done. Scaled, autonomous, paid work is still mostly in factories and logistics. Elsewhere robots are supervised or teleoperated and slower than people, so the take-over of physical work is a 2030s thesis, not a 2026 fact."
- **2026 pilots show a recurring path to autonomy:** teleoperate → collect data → become autonomous on night or back-of-house shifts (Føtex, YY Group, the Swiss construction startup). This is a concrete operating model an integrator like Robotify can sell, for example as teleoperation-plus-autonomy robot-hours.
- **Regulation is a real gating factor even in pro-innovation countries** (Denmark, Korea). For the EU, the Machinery Regulation (from January 2027, per the draft and not re-verified here) is a hurdle and a potential moat.

### Gaps
- **Not re-verified:** EU Machinery Regulation 2023/1230 application date (20 January 2027), AI Act high-risk treatment, ISO 25785-1 status, and the IEEE humanoid study group.
- **No independent productivity, MTBF or uptime benchmarks** were found beyond the Siemens PoC (60 totes/h) and Figure's company-reported BMW metrics.
- **Original texts not read:** Brooks' original essays; the exact safety-distance wording is unconfirmed.
