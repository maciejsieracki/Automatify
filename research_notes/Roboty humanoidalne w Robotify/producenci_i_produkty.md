# Humanoid robot makers and products for industrial work (factories, warehouses, logistics) — state as of October 2026

> **How these notes were made (read first).** In this session no source page could be opened: WebFetch failed with DNS errors and the egress proxy refused direct downloads (for example bostondynamics.com, figure.ai, roboticsandautomationnews.com, geekwire.com, smartanalyticsglobal.com). Then the shared web-search budget ran out (the 200-call limit) before the last round of queries, which covered Poland distribution, AgiBot specs, Fourier, the component supply chain and EU regulation. **Every finding below therefore comes from search-engine extracts of the cited pages, not from reading the pages themselves.** Treat numbers as "reported by" the cited page.
>
> Reliability tags:
> - **[CO]** company claim or marketing (press release, product page, launch event)
> - **[FIL]** regulatory filing (SEC, HKEX or SSE results)
> - **[IND]** independent press or analyst
> - **[AGG]** aggregator, review or SEO blog (robozaps, roboselect360, robotoverflow, humanoidhub and similar). Low reliability; these often copy each other.
> - **[2nd]** secondhand report of another outlet
>
> Currency assumptions (approximate, not verified for October 2026): 1 USD ≈ €0.86; 1 CNY ≈ €0.12; 1 GBP ≈ €1.15; 1 EUR ≈ 4.25 PLN.

## KQ1 — Which humanoids are commercially available or in paid pilots in 2025–2026?

### Takeaway
As of October 2026 only a handful of Western humanoids are in **paid, recurring industrial use**, all in fleets of tens to low hundreds:
- Agility Digit, under RaaS at GXO and with Schaeffler, Toyota Canada and Mercado Libre
- Figure 02/03 at BMW Spartanburg
- UBTech Walker S/S2 in Chinese auto and electronics plants

Most other makers are in proofs of concept, single-site pilots, or deliveries fully committed to an anchor customer or investor:
- Apptronik (Mercedes, GXO, Jabil)
- Boston Dynamics (Hyundai, Google DeepMind)
- Humanoid UK (Siemens, Schaeffler)
- NEURA (reservations)
- Tesla (internal use only)

By unit volume, Chinese makers dominate. AgiBot, Unitree, UBTech, Galbot and Leju shipped the large majority of the roughly 19,000–25,000 units shipped worldwide in H1 2026, but much of that volume goes to research, education, exhibition, retail and data-collection use rather than productive factory work.

### Cited Findings

**Market-level shipment data (H1 2026)**
- Smart Analytics Global (SAG): global humanoid shipments were **19.1k units in H1 2026, up 272% YoY**. AgiBot had a **44%** share (about 8,400 units) and overtook Unitree (**31%**). [IND] — [SAG](https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/); [Humanoids Daily](https://www.humanoidsdaily.com/news/global-humanoid-shipments-surge-272-in-1h-2026-as-agibot-overtakes-unitree)
- Chinese makers made about **97%** of global humanoid production in H1 2026, per SAG as summarised in search extracts. [IND/2nd] — [SAG](https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/)
- **Conflicting estimate:** IDC puts H1 2026 shipments near **25,000**, with AgiBot citing a 35% share. Counterpoint reports growth of nearly 300% and puts UBTech fourth at about 1,000 units (4.4% share). [IND/2nd] — [DailyTechWire](https://www.dailytechwire.com/article/agibot-global-humanoid-market-share-h1-2026); [UBTech/BigGo](https://finance.biggo.com/news/cef9b139-8d70-405f-80a3-5583c5254aea)
- AgiBot overtook Unitree as China's top humanoid exporter (Aug 2026). [IND] — [Semafor](https://www.semafor.com/article/08/11/2026/agibot-passes-unitree-as-chinas-top-humanoid-exporter); [SCMP](https://www.scmp.com/tech/tech-trends/article/3363544/agibot-overtakes-unitree-top-global-humanoid-robot-vendor-first-half-amid-ipo-push)
- Interact Analysis (May 2026): annual shipments are **still below 100,000 units**. Demand comes from small-scale deployments, subsidies and strategic partnerships. **Only about 10% of humanoids produced were deployed in real-world operations by 2025.** [IND] — [Interact Analysis PR (PDF)](https://interactanalysis.com/wp-content/uploads/Humanoid-Robot-report-PR-May-2026.pdf); [Automation.com](https://www.automation.com/article/humanoid-robot-revenue-reach-15bn-2035)

**Deployment-status tiers**

**Tier A — paid recurring industrial work (2025–2026)**

| Robot | Where and what | Tag | Sources |
|---|---|---|---|
| Agility Digit v4 | Deployed or committed in 9 customer facilities, >65,000 operating hours. Named customers: Schaeffler, GXO (RaaS), Toyota Motor Manufacturing Canada, Mercado Libre. Amazon is listed in one SEC filing and dropped from a later one. | [FIL] | [S-4](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026097764/ea0297114-04.htm); [S-4/A](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026105334/ea0297114-05.htm); [GeekWire](https://www.geekwire.com/2026/digit-maker-agility-robotics-to-go-public-in-2-5b-deal-heres-what-the-filings-say-about-its-finances/) |
| Figure 02 | BMW Spartanburg body shop: 11-month deployment in 2025, 10-hour shifts Monday–Friday. Retired late 2025. | [CO] | [Figure](https://www.figure.ai/news/production-at-bmw); [Assembly Mag](https://www.assemblymag.com/articles/99678-humanoid-robots-complete-trial-project-at-bmw-assembly-plant) |
| Figure 03 | BMW Spartanburg (Hall 52), parts sequencing into trolleys. Announced June 2026. | [CO/IND] | [BMWBlog](https://www.bmwblog.com/2026/06/26/bmw-figure-03-humanoid-robot-spartanburg-plant/); [Interesting Engineering](https://interestingengineering.com/ai-robotics/bmw-figure-03-humanoid-robot-smart-factory-us) |
| UBTech Walker S2 | Mass production and delivery started November 2025. H1 2026: 921 full-size humanoids sold. | [FIL/CO] | [PR Newswire](https://www.prnewswire.com/news-releases/ubtech-humanoid-robot-walker-s2-begins-mass-production-and-delivery-with-orders-exceeding-800-million-yuan-302616924.html); [BigGo](https://finance.biggo.com/news/cef9b139-8d70-405f-80a3-5583c5254aea) |
| Galbot G1 | Mainly retail and pharmacy in China. The heavy-duty Galbot S1 works on CATL production lines. | [CO] | [36Kr](https://eu.36kr.com/en/p/4003795908908679); [aiwiki](https://aiwiki.ai/wiki/galbot/raw) |
| Leju Kuavo | Batch deployment at the FAW Hongqi factory for logistics sorting and handling (April 2025). | [CO] | [Sacra](https://sacra.com/research/leju-robotics) |

**Tier B — pilots or committed anchor-customer deliveries, no open sale**

| Robot | Status | Tag | Sources |
|---|---|---|---|
| Apptronik Apollo | Pilots with Mercedes-Benz, GXO and Jabil. One source explicitly calls this "pilot deployment rather than commercial fleet operation". | [AGG/IND] | [Robozaps](https://blog.robozaps.com/b/apptronik-apollo-review); [CNBC](https://www.cnbc.com/2026/02/11/apptronik-raises-520-million-at-5-billion-valuation-for-apollo-robot.html) |
| Boston Dynamics Atlas (electric, product version) | Production started January 2026. All 2026 units are committed to Hyundai RMAC and Google DeepMind. More customers in early 2027. | [CO] | [Boston Dynamics](https://bostondynamics.com/blog/boston-dynamics-unveils-new-atlas-robot-to-revolutionize-industry/) |
| Humanoid HMND 01 Alpha (UK) | Siemens Erlangen trial (results published April 2026). Binding Schaeffler agreement (May 2026). Three-to-six-month commercial pilots with the "Beta" robot from late 2026. | [CO/IND] | [TNW](https://thenextweb.com/news/siemens-nvidia-humanoid-robot-erlangen-factory-trial); [Forbes](https://www.forbes.com/sites/johnkoetsier/2026/07/21/humanoid-raises-152-million-at-135-billion-valuation-europes-newest-robot-unicorn/) |
| Tesla Optimus | Internal Tesla use only. Gen 3 had not been revealed as of September 2026. No external sales. | [IND] | [Wikipedia](https://en.wikipedia.org/wiki/Optimus_(robot)) |
| NEURA 4NE1 Gen 3.5 | Reservation only. Availability expected end of 2026. | [CO] | [NEURA](https://neura-robotics.com/product/4ne1-reservation/) |
| Mentee (Mobileye) | First on-site customer proofs of concept expected in 2026. Series production 2028. | [CO/FIL] | [Mobileye](https://www.mobileye.com/press-kit/mobileye-agrees-to-acquire-mentee-robotics/) |
| Persona AI | Shipyard welding prototypes with HD Hyundai by end of 2026. Commercial deployment 2027. | [CO] | [Maritime Executive](https://maritime-executive.com/article/hd-hyundai-moving-forward-with-humanoid-welding-robot-for-shipyards) |
| XPeng IRON | Production line commissioned 8 September 2026. Mass production targeted by end of 2026. Deliveries 2027, to XPeng's own stores and campuses. | [CO] | [XPeng](https://xpengswitzerland.pr.co/270350-xpeng-s-humanoid-robot-iron-leaves-its-production-line-on-its-own-feet/); [LetsDataScience](https://letsdatascience.com/news/xpeng-commissions-iron-humanoid-robot-production-line-f7d32138) |
| 1X NEO | Consumer robot. US home deliveries targeted for 2026. No verified deliveries as of July 2026. The EQT deal covers up to 10,000 commercial deployments over 2026–2030. | [CO/AGG] | [Robotics 24/7](https://www.robotics247.com/article/video_1x_announces_neo_consumer_ready_humanoid_robot_pre_order_details_with_200_deposit); [Robozaps](https://blog.robozaps.com/b/1x-neo-review) |

**Tier C — buyable off the shelf, mostly R&D, education or data-collection platforms**

| Robot | Status | Tag | Sources |
|---|---|---|---|
| Unitree G1 and H2 | Online store and dealers. H2 North American shipments began around April 2026. | [IND/AGG] | [Intelidroid](https://intelidroid.com/2026/04/07/unitree-h2-north-america-shipping-ipo-2026/) |
| Kepler K2 | Mass production and deliveries announced September 2025. | [CO] | [Humanoid Robotics Technology](https://humanoidroboticstechnology.com/industry-news/kepler-announces-mass-production-of-its-k2-bumblebee/) |
| AgiBot A2 / X2 / G2 | Sold via distributors, including in the UK. | [CO] | [Scancom](https://www.scancom.co.uk/pages/agibot) |
| EngineAI PM01 / T800 | — | [AGG] | [Theresarobotforthat](https://theresarobotforthat.com/blog/humanoid-robots-for-sale/) |

**Tier D — demo or research stage for industry**

| Robot | Status | Tag | Sources |
|---|---|---|---|
| Sanctuary Phoenix | Tracker (verified 31 July 2026) rates it "demoing" with no verified customer on record. | [AGG] | [Theresarobotforthat](https://theresarobotforthat.com/humanoid-reality-index/sanctuary-phoenix/) |
| Fourier GR-3 | Care-focused. No published price or named commercial deployment. | [AGG] | [Theresarobotforthat](https://theresarobotforthat.com/humanoid-reality-index/fourier-gr3/) |
| PAL Robotics TALOS | Mainly research use. | [AGG] | [Plant Automation Technology](https://www.plantautomation-technology.com/productlaunch/humanoid-robot-talos) |

### Inferences
- For a CEE RaaS provider in 2026–2027, the realistic shortlist of robots that can be **bought and put to work** is narrow. It splits into two groups:
  1. Chinese platforms with open sales channels (Unitree, AgiBot, UBTech, Kepler, Galbot)
  2. European makers seeking early customers (NEURA, Humanoid UK)

  US leaders (Figure, Agility, Apptronik, Boston Dynamics, Tesla) currently serve anchor customers directly and show no EU channel in the sources found.
- Shipment counts overstate industrial readiness. If Interact Analysis's "~10% deployed in real operations" is anywhere near right, most 2025–2026 Chinese volume is R&D, education and showcase demand.

### Gaps
- No primary-source confirmation of Figure's claim of 1,000+ units deployed by July 2026 (see KQ2).
- Amazon's status as an Agility customer is unclear.
- No reliable 2026 unit counts for Galbot, Leju, EngineAI, Kepler or Fourier.

## KQ2 — Per-maker catalogue: specs, autonomy and AI, safety, price, volumes, EU and Poland availability

### Takeaway
Spec sheets cluster around 15–25 kg payload, about 1.2–1.5 m/s walking speed and 2–5 hours per battery. Continuous operation is handled either by battery swap (Atlas, Apollo, Walker S2) or by fast or opportunity charging (Digit 5 at a 10:1 run-to-charge ratio, Figure 03 wireless charging). Western makers publish almost no list prices: pricing is enterprise or RaaS at roughly $8,500 per month or about $25–30 per robot-hour. Chinese makers publish list prices from about $13.5k (Unitree G1) to about RMB 250k (~€30k, Kepler K2), while UBTech's implied ASP is around €77k. No humanoid holds a final humanoid-specific safety certification: ISO 25785-1 is still a draft.

### Cited Findings

#### Master comparison table (company figures unless tagged; ranges reflect conflicting sources)

| Robot (maker, country) | Payload | Runtime / energy | Speed | DoF / hands | AI / autonomy | Price (orig. → ~EUR) | Volumes / targets | EU availability |
|---|---|---|---|---|---|---|---|---|
| Figure 03 (Figure AI, US) | 20 kg [CO] | 5 h; wireless charging about 2 kW via foot coils; 2.3 kWh battery [AGG] | 1.2 m/s [CO] | DoF not published; tactile hands with palm cameras [CO] | Helix (Helix 02) VLA, on-device [AGG] | Not published. "~$25 per robot-operating hour" (≈€21.5) [unverified]; "~$1,000/month" [AGG] | >350 delivered by 29 Apr 2026; 1/day → 1/hour production rate; BotQ capacity 12,000/yr [CO] | No EU channel found. BMW Leipzig, Munich and Regensburg pilot claims unverified |
| Digit 5 (Agility, US) | 22.7 kg (50 lb) repeated lifts, +40% [CO] | 90 min run / 9 min charge (10:1); Digit 4 was 2:1 [CO] | n/a | Cycloidal leg actuators; reach up to 2.2 m; 129 kg; 1.81 m [CO] | NVIDIA-trained whole-body-control foundation model (Digit) [CO] | Illustrative $8,500 per robot per month (≈€7.3k, ~$100k/yr) vs $30.50/h labor; lifetime revenue ~$500k RaaS / ~$400k ownership over 5 years [FIL/AGG] | RoboFab capacity up to 10,000/yr; >$300M Digit 5 orders (one customer, 1,000 robots over 3 years, milestone-gated) [FIL] | No EU customer site found (Schaeffler's Digit use is cited at a US plant) |
| Atlas, product version (Boston Dynamics / Hyundai, US/KR) | 50 kg peak / 30 kg sustained [AGG] | ~4 h; self-swaps battery [AGG] | n/a | 56 DoF; 2.3 m reach [AGG] | Google DeepMind is a launch customer [CO] | Not disclosed. Aggregators: $150k–$420k (≈€129k–€361k) [AGG, unreliable] | 2026 output fully committed (Hyundai RMAC, DeepMind); Hyundai capacity target 30,000/yr by 2028 [CO/IND] | Outside buyers unlikely before 2027 |
| Apollo (Apptronik, US) | 25 kg [AGG] | ~4 h; hot-swappable packs [AGG] | n/a | ~173 cm, ~72–73 kg; DoF not published [AGG] | Google DeepMind Gemini Robotics [IND/AGG] | Target ~$80,000 per year (≈€69k/yr) for high-volume delivery from 2027 [IND] | No production volumes published; "$1B of orders starting 2027" (executive expectation) [IND] | Mercedes-Benz pilots (Berlin and Hungary per weak sources) |
| Optimus V3 (Tesla, US) | n/a | n/a | n/a | n/a | Tesla in-house | No price. $20–30k is a long-term at-scale aspiration [2nd] | Fremont lines designed for 1M/yr being installed; analysts expect 10–30k in 2026 [AGG]; Giga Texas 10M/yr long-term | Public sales "by end-2027" if safe and reliable (Musk, Davos, Jan 2026) |
| Walker S2 (UBTech, CN) | 15 kg [AGG] | Autonomous battery swap in <3 min, 24/7 claim [CO/AGG] | n/a | 52 DoF; waist ±162°; 0–1.8 m work envelope [AGG] | n/a | Not published; estimate ~$160k [AGG]. Implied H1 2026 ASP ≈ RMB 641k (≈€77k) — see inferences | 2025: ~1,079 delivered; H1 2026: 921 units; capacity 5,000 (2026) → 10,000 (2027) [FIL/AGG] | EU reseller listing (RobotsEuropa); Airbus concept tests |
| A-Series A2 / G2 / X2 (AgiBot, CN) | n/a | n/a | n/a | G2 is wheeled [CO] | n/a | Not found | ~8,400 units in H1 2026 (44%); 5,000 in Q1 2026; 20,000 cumulative [IND/CO] | UK master distributor Scancom; Tekpoint; TÜV Rheinland certs; Serbia plant |
| G1 / H2 / R1 (Unitree, CN) | H2: ~7 kg per arm rated, ~15 kg peak [AGG] | H2: ~3 h [AGG] | n/a | H2: 31 DoF; legs up to 360 Nm [AGG] | n/a | G1 $13,500–21,600 (≈€11.6k–18.6k); H2 $29,900 (≈€25.7k), EDU $35k, dealer $40.9k [IND/AGG] | >5,500 humanoids in 2025; G1 cumulative ~11k [AGG/IND] | EU resellers (German H2 documentation site) — inference |
| 4NE1 Gen 3.5 (NEURA, DE) | Up to 100 kg leg-supported / 20 kg on the arms [AGG] | n/a | 5 km/h [AGG] | ~180 cm, 80 kg [AGG] | NVIDIA Thor T5000 + Isaac GR00T [AGG] | €98,000 (1–19 units) / €60,000 (20+ units), excl. tax; €100 refundable reservation [CO] | End-2026 availability; 6,000-unit production target [CO/AGG] | EU maker, direct sales |
| HMND 01 Alpha (Humanoid, UK) | 15 kg bimanual [CO] | Wheeled: 4 h; bipedal: 3–4 h [CO/AGG] | 2 m/s wheeled; 1.5–2 m/s bipedal | Bipedal: 29 DoF; 12-DoF five-finger hand or 1-DoF gripper [AGG] | n/a | Not published; "$120k" claim unverified [AGG] | Schaeffler multi-thousand-unit agreement; Beta pilots from late 2026 [CO] | UK/EU; CE marking expected for the wheeled version by 2027 |
| K2 Bumblebee (Kepler, CN) | 15 kg (30 kg dual-arm demos) [AGG] | Up to 8 h [AGG] | n/a | 52 DoF; 80+ sensors; 175 cm, 75 kg [CO/AGG] | n/a | RMB 248,000 (≈€29.8k); EU retail ~€80–85k [AGG] | Mass production announced September 2025 [CO] | UK reseller blog (EnduX) |
| IRON (XPeng, CN) | n/a | n/a | n/a | 76 DoF; 21–22 DoF per hand [CO] | 3 Turing chips, 2,250 TOPS [CO] | Not disclosed | Mass production end-2026; deliveries 2027 for own use [CO] | None |
| Phoenix (Sanctuary, CA) | 25 kg (55 lb) [CO, 2023] | n/a | 3 mph (~4.8 km/h) [CO, 2023] | 170 cm, 70 kg [CO, 2023] | Carbon control system [CO] | n/a | No verified customer [AGG] | None |
| TALOS (PAL Robotics, ES) | 6 kg per arm [AGG] | ~3 h [AGG] | 3 km/h [AGG] | 1.75 m, 95 kg [AGG] | n/a | n/a | Research platform | EU (Spain) |
| NEO (1X, US/NO) | "25 kg sustained" [AGG] | n/a | n/a | n/a | Teleoperation caveat [AGG] | $20,000 (≈€17.2k) or $499/month (≈€430) [CO] | EQT: up to 10,000 units over 2026–2030 [CO] | Other markets 2027 |

#### Figure AI (Figure 02 / Figure 03), US
- **Figure 03 specs [CO]:** 20 kg payload, 5 h runtime, 61 kg, 1.2 m/s (official product page as summarised in extracts). DoF not documented. — [Figure](https://www.figure.ai/figure)
  - Conflicting third-party figures (2.4 m/s; 30–40 DoF; 25 kg / 57 kg) should be disregarded. — [Robozaps](https://blog.robozaps.com/b/figure-03-review)
- **Figure 03 hardware changes vs Figure 02 [CO]:** soft exterior for workplace safety, wireless charging "to maximize operational uptime", speech-to-speech, and redesigned hands with tactile sensors and palm cameras. — [Interesting Engineering](https://interestingengineering.com/ai-robotics/bmw-figure-03-humanoid-robot-smart-factory-us); [Electric Cars Report](https://electriccarsreport.com/2026/06/bmw-deploys-figure-03-humanoid-robot-to-expand-ai-powered-manufacturing/)
- **Charging and AI [AGG]:** about 2 kW wireless charging via coils in the feet; 2.3 kWh battery; runs Helix 02 locally on-device. — [Robozaps](https://blog.robozaps.com/b/figure-03-review)
- **Price:** not published, quoted on enquiry. [AGG] — [Robozaps](https://blog.robozaps.com/b/figure-03-review)
  - A 9 May 2026 article calls the BMW work a "commercial deployment priced at about $25 per robot-operating hour" (≈€21.5/h). The same article misdates the Figure 02 pilot, so treat the price as unverified. — [Platinum Capital](https://www.theplatinumcapital.com/article/figure-confirms-commercial-deployment-of-figure-03-at-bmw-plant-as-humanoid-robotics-cycle-accelerates)
  - Another blog cites about $1,000 per robot per month. [AGG] — [HumanoidHub](https://www.humanoidhub.ai/insights/humanoid-robot-economics)
- **Production:**
  - Figure's 29 April 2026 update: **more than 350 third-generation robots delivered**; production rate up from one robot per day to one per hour. [CO] — [Figure](https://www.figure.ai/news/ramping-figure-03-production)
  - A fact-check notes that one-per-hour is a demonstrated cycle time, not continuous output, and that the 350+ units are not shown to be at paying external customers. [AGG] — [PhysicalAILab](https://physicalailab.io/en/figure-botq-production-fact-check/)
  - BotQ designed capacity: up to 12,000/yr. — [PhysicalAILab](https://physicalailab.io/en/figure-botq-production-fact-check/)
  - **Unverified:** "1,000 units deployed by 23 July 2026; entire 2026 run committed to two partners". — [Karmactive](https://www.karmactive.com/humanoid-robots-cross-thousand-milestone-2026/)
- **BMW:** Figure 03 sorts unsorted components into sequencing trolleys for just-in-sequence delivery to assembly, in Hall 52 at Spartanburg (June 2026). [CO/IND] — [BMWBlog](https://www.bmwblog.com/2026/06/26/bmw-figure-03-humanoid-robot-spartanburg-plant/); [humanoid.guide](https://humanoid.guide/bmw-deploys-figure-03-humanoid-for-spartanburg-logistics/)
  - **Europe (unverified):** BMW is said to be piloting humanoids at Leipzig (humanoid.guide citing AI Insider); another report mentions Munich and Regensburg. — [humanoid.guide](https://humanoid.guide/bmw-deploys-figure-03-humanoid-for-spartanburg-logistics/)

#### Agility Robotics (Digit 4 / Digit 5), US
- **Digit 5 launch (15–17 September 2026) [CO]:**
  - Repeated lifts up to **50 lb / 22.7 kg** (+40%), using a redesigned leg system with proprietary cycloidal actuators
  - **90-minute runtime / 9-minute charge** (10:1 run-to-charge, vs 2:1 for Digit 4)
  - 129 kg (284 lb), 1.81 m tall, reach up to 2.2 m
  - New safety architecture: an independent motion supervisor plus hardware-level sensing, for "cooperatively safe" work near people
  - Agility takes part in the working groups drafting ANSI/A3 TR R15.108 and ISO 25785-1. **Not certified, because both are still drafts.**
  - Sources: [Agility](https://www.agilityrobotics.com/content/agility-unveils-digit-5-humanoid-robot-built-for-cooperatively-safe-work-at-scale); [Robotics & Automation News](https://roboticsandautomationnews.com/2026/09/17/agility-unveils-digit-5-humanoid-as-orders-exceed-300-million-ahead-of-public-listing/104857/); [RoboticsTomorrow](https://www.roboticstomorrow.com/news/2026/09/15/unveils-digit-5-humanoid-robot-built-for-cooperatively-safe-work-at-scale/27092)
- **Older Digit 4 figures on third-party sites** (175 cm, 65 kg, 28 DoF, 16 kg payload, "up to 8 h" battery) are outdated or unverified. [AGG] — [Robotoverflow](https://robotoverflow.com/en/robot-database/agility-digit/)
- **AI:** NVIDIA case study on Digit's whole-body-control foundation model. [CO] — [NVIDIA](https://www.nvidia.com/en-us/case-studies/agility-robotics-digit-humanoid-robot/)
- **Customers and metrics [FIL]:**
  - Nine customer facilities, >65,000 operating hours
  - Schaeffler: ~98% operational accuracy, ~25,000 totes moved across several facilities. Schaeffler committed to scale Digit 5 from pilot to fuller integration.
  - GXO: cumulative 100,000-tote milestone (November 2025 filing). GXO runs Digit fleets at a Georgia fulfilment centre under a RaaS agreement.
  - Sources: [S-4/A](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026105334/ea0297114-05.htm); [NVIDIA](https://www.nvidia.com/en-us/case-studies/agility-robotics-digit-humanoid-robot/)
- **Orders and listing [FIL/IND]:**
  - More than $300M of multi-year Digit 5 orders "subject to contractual milestones", which the filing says is "not a measure of current period revenue"
  - Reportedly from one customer, for 1,000 robots over three years
  - SPAC merger with Churchill Capital Corp XI at about $2.5B; ticker AGLT
  - Sources: [S-4](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026097764/ea0297114-04.htm); [Robozaps](https://blog.robozaps.com/b/agility-robotics-digit-review); [Robotics & Automation News](https://roboticsandautomationnews.com/2026/07/07/agility-robotics-to-go-public-through-2-5-billion-spac-merger/103130/); [Motley Fool, 13 Oct 2026](https://www.fool.com/investing/2026/10/13/the-first-pure-play-humanoid-robot-stock-is-about/)
- **Financials (secondhand, not confirmed against the filing):**
  - 2025 revenue $1.8M; operating loss $140M — [X analysis](https://x.com/tanayj/article/2102437349250805820); [Venture Atlas](https://www.ventureatlas.org/company/agility-robotics)
  - "~7–8 humanoids sold in 2025" — [X post](https://x.com/jinseongeo83473/status/2092341852171272275)
- **RoboFab capacity [FIL]:** designed for up to 10,000 robots per year. The S-4 cautions that targets may not be achieved. — [S-4](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026097764/ea0297114-04.htm)

#### Apptronik (Apollo), US
- **Funding [IND]:** $520M raised at a $5B valuation (February 2026). Other outlets cite $935M total and a $5.5B valuation. — [CNBC](https://www.cnbc.com/2026/02/11/apptronik-raises-520-million-at-5-billion-valuation-for-apollo-robot.html)
- **Specs [AGG]:** about 25 kg payload, about 4 h per hot-swappable pack, ~173 cm, ~72–73 kg; DoF not published. — [RoboSelect360](https://roboselect360.com/en/robots/apptronik-apollo.html); [HumanoidHub](https://www.humanoidhub.ai/robots/apollo)
- **AI:** partnership with Google DeepMind on Gemini Robotics models. [IND/AGG] — [Interesting Engineering](https://interestingengineering.com/ai-robotics/us-startup-raises-funds-to-deploy-apollo); [Robozaps](https://blog.robozaps.com/b/apptronik-apollo-review)
- **Partners:**
  - Jabil (February 2025): build, test and deploy Apollo, and help scale manufacturing
  - Mercedes-Benz: exploring logistics use since March 2024. Trials at Berlin and Hungary come only from a weak source; Startup Fortune corrected its own earlier overstatement.
  - Sources: [Startup Fortune](https://startupfortune.com/apptroniks-apollo-robot-has-left-the-lab-and-is-now-working-factory-shifts-at-mercedes-benz/); [Robozaps](https://blog.robozaps.com/b/apptronik-apollo-review)
- **Pricing and orders [IND]:** CEO Jeff Cardenas declined to give a production date. Apptronik expects about $1B of orders starting in 2027, with high-volume delivery at roughly **$80,000 per year** (≈€69k/yr). — [CNBC](https://www.cnbc.com/2026/02/11/apptronik-raises-520-million-at-5-billion-valuation-for-apollo-robot.html); [Robozaps](https://blog.robozaps.com/b/apptronik-apollo-review)
- **Unverified:** Apollo 2 (bipedal and wheeled) unveiled mid-2026; Gemini Robotics 2 demo on 30 July 2026. — [Robozaps](https://blog.robozaps.com/b/apptronik-apollo-review)

#### Tesla (Optimus), US
- **Status [IND]:**
  - Gen 3 had not been revealed as of September 2026. Musk said on 22 April 2026 that it would be unveiled closer to production start.
  - Tesla: "First-generation production lines for Optimus are being installed" at Fremont, designed for 1 million robots a year.
  - Source: [Wikipedia](https://en.wikipedia.org/wiki/Optimus_(robot))
- **Line conversion [AGG]:** Fremont's Model S/X line was converted in early May 2026. — [Basenor](https://www.basenor.com/blogs/news/tesla-optimus-production-ramp-6-details-that-matter)
- **Weekly output [2nd]:** "a few dozen" units per week in Q2 2026, rising to "several hundred" per week by August, per a blog citing The Information. — [Basenor](https://www.basenor.com/blogs/news/tesla-optimus-production-ramp-6-details-that-matter)
- **Targets:** 2026 target reportedly 50,000–100,000 units; analyst consensus 10,000–30,000. [AGG] — [Optimusk](https://optimusk.blog/blog/tesla-optimus-production-timeline/)
- **Long term:** a 10M-unit factory at Giga Texas is planned, with mass production targeted for 2027. [AGG] — [Beginners in AI](https://beginnersinai.org/tesla-optimus-explained/)
- **Sales and price:**
  - Musk at Davos, 22 January 2026: humanoids sold to the public "by the end of 2027", if reliability and safety are very high
  - No price or preorders
  - The ~$20–30k figure is a long-term at-scale aspiration (October 2024). Musk said production cost could fall below $20k above 1M units a year.
  - Sources: [Pillitteri](https://pasqualepillitteri.it/en/news/23022/tesla-optimus-on-sale-2027-price); [Robozaps](https://blog.robozaps.com/b/tesla-optimus-gen-3)

#### Boston Dynamics (electric Atlas), US / Hyundai
- **Launch and production [CO]:**
  - Product version unveiled at CES on 5 January 2026
  - Production started immediately at the Boston headquarters
  - "All Atlas deployments are already fully committed for 2026", shipping to Hyundai's RMAC and Google DeepMind
  - More customers planned for early 2027
  - Sources: [Boston Dynamics](https://bostondynamics.com/blog/boston-dynamics-unveils-new-atlas-robot-to-revolutionize-industry/); [A3](https://www.automate.org/robotics/industry-insights/boston-dynamics-to-begin-production-on-redesigned-atlas-humanoid-in-2026)
- **Hyundai [IND]:** goal of trained Atlas robots working at Metaplant America (Georgia) by 2028, and capacity to produce **30,000 humanoids a year by 2028** (a capacity target, not current output). — [A3](https://www.automate.org/robotics/industry-insights/boston-dynamics-to-begin-production-on-redesigned-atlas-humanoid-in-2026); [Motley Fool](https://www.fool.com/investing/2026/01/13/hyundai-and-boston-dynamics-push-humanoid-robots-f/)
- **Specs [AGG]:**
  - 56 DoF, 2.3 m reach
  - Lift 50 kg peak / 30 kg sustained
  - ~4 h runtime; drives itself to a station and swaps its own battery
  - Height (1.5 m vs 1.9 m) and weight (89 kg vs 90 kg) conflict across sources
  - Sources: [RoboAtlas](https://www.roboatlas.ai/en-US/products/atlas); [RobotsGuide](https://robotsguide.com/robots/atlas/); [RoboSelect360](https://roboselect360.com/en/robots/boston-dynamics-atlas.html)
- **Price:** undisclosed. Aggregator guesses of $420k vs ~$150k are unreliable. — [Robotoverflow](https://robotoverflow.com/en/robot-database/boston-dynamics-atlas/); [RobotTesters](https://robottesters.com/robots/boston-dynamics-atlas/)
- **Metaplant pilot timing:** contested between secondary sources (sequencing trials since fall 2025 vs field tests from January 2026). — [FinancialContent](https://markets.financialcontent.com/stocks/article/tokenring-2026-1-21-industrial-evolution-boston-dynamics-electric-atlas-reports-for-duty-at-hyundais-georgia-metaplant)

#### 1X (NEO; EVE legacy), US/Norway — consumer, brief
- **Price [CO]:** $20,000 (≈€17.2k) or $499/month (≈€430), $200 deposit. — [Robotics 24/7](https://www.robotics247.com/article/video_1x_announces_neo_consumer_ready_humanoid_robot_pre_order_details_with_200_deposit); [BusinessWire](https://www.businesswire.com/news/home/20251027434628/en/1X-Launches-NEO-The-Robot-Redefining-Life-at-Home)
- **Timing:** US homes first in 2026, other markets 2027. No verified deliveries found as of July 2026. [AGG] — [Robozaps](https://blog.robozaps.com/b/1x-neo-review)
- **Industrial angle:**
  - December 2025: 1X agreed with EQT to deploy up to 10,000 NEOs in commercial settings (logistics, healthcare, facilities) over 2026–2030 — [Robo Pulse](https://robopulse.net/reviews/1x-neo-review/)
  - Hayward factory opened April 2026 [AGG] — [Robozaps](https://blog.robozaps.com/b/1x-neo-review)
  - "25 kg sustained payload, not suited to factory loads" [AGG] — [Robotoverflow](https://robotoverflow.com/en/robot-database/1x-neo/)
  - Teleoperation caveat flagged in coverage — [ThePlanetTools](https://theplanettools.ai/blog/1x-neo-first-consumer-humanoid-dated-priced-teleop-caveat-may-2026)

#### Unitree (G1, H1, H2, R1), China
- **IPO [IND]:** listed on the Shanghai Stock Exchange (688836) at an IPO price of RMB 150.80. Raised about RMB 6.1bn (~$900M). Shares are down 53% from the debut peak but still well above the IPO price (September 2026). — [The Robot Report](https://www.therobotreport.com/unitree-shares-down-53-from-ipo-debut/)
- **Volumes [AGG]:** shipped **>5,500 humanoids in 2025**. Humanoid revenue was RMB 868M, 51.78% of total revenue. — [Robozaps](https://blog.robozaps.com/b/unitree-robotics); [The Robotic Life](https://theroboticlife.com/robot-of-the-week-unitree-g1/)
- **Profitability and G1 volume [IND/2nd]:** Unitree is profitable, and G1 cumulative production is about 11,000, per extracts of August 2026 coverage. Exact attribution between the two outlets is uncertain. — [Semafor](https://www.semafor.com/article/08/11/2026/agibot-passes-unitree-as-chinas-top-humanoid-exporter); [SCMP](https://www.scmp.com/tech/tech-trends/article/3363544/agibot-overtakes-unitree-top-global-humanoid-robot-vendor-first-half-amid-ipo-push)
- **G1 price (conflicting):**
  - $13,500 base, official store, excluding tax and shipping (≈€11.6k) — [Robozaps](https://blog.robozaps.com/b/unitree-g1-review)
  - $21,600 base / G1 Pro $27,990 (≈€18.6k / €24.1k; August 2026) — [GlobalDroneHQ](https://globaldronehq.com/blogs/guides/unitree-robot-price-guide-2026)
  - About $16,000 — [The Robotic Life](https://theroboticlife.com/robot-of-the-week-unitree-g1/)
- **H2 price:**
  - North American shipments from April 2026 at $29,900 (≈€25.7k); EDU (full SDK) from $35,000 (≈€30.1k) — [Intelidroid](https://intelidroid.com/2026/04/07/unitree-h2-north-america-shipping-ipo-2026/)
  - US dealer $40,900 — [GlobalDroneHQ](https://globaldronehq.com/blogs/guides/unitree-robot-price-guide-2026)
  - Another listing: $68,900 — [Robozaps H2](https://blog.robozaps.com/b/unitree-h2-review)
- **H2 specs [AGG]:**
  - 31 DoF (6 per leg, 7 per arm, 3 waist, 2 head)
  - ~180–182 cm, ~70 kg
  - ~7 kg per arm rated (~15 kg peak)
  - ~3 h runtime (manufacturer claim)
  - Leg torque up to 360 Nm
  - Sources: [humanoid.guide](https://humanoid.guide/product/h2/); [Merarobotics](https://merarobotics.com/blog/humanoids/unitree-h2); [docs.quadruped.de](https://docs.quadruped.de/projects/h2/html/index.html)
- **R1:** no specs or EU price found in this session (see Gaps).

#### UBTech (Walker S / S1 / S2), China (HKEX-listed)
- **November 2025 [CO]:** mass production and delivery began; orders exceeded RMB 800M (≈€96M). — [PR Newswire](https://www.prnewswire.com/news-releases/ubtech-humanoid-robot-walker-s2-begins-mass-production-and-delivery-with-orders-exceeding-800-million-yuan-302616924.html)
- **H1 2026 interim results (28 August 2026) [FIL/IND]:**
  - Revenue RMB 1.27bn, +104.1% YoY
  - Full-size humanoid revenue RMB 590.3M (vs RMB 38.2M a year earlier)
  - **921 units**, about 85% of the FY2025 total
  - Sources: [BigGo](https://finance.biggo.com/news/cef9b139-8d70-405f-80a3-5583c5254aea); [Yahoo Finance](https://finance.yahoo.com/news/ubtechs-2026-humanoid-robot-output-093000689.html)
- **2025 [AGG]:** 1,079 full-size humanoids delivered; about RMB 1.4bn of orders booked, including a RMB 264M border-security contract. — [Robozaps](https://blog.robozaps.com/b/ubtech-walker-s-review)
- **Capacity [AGG]:** 5,000/yr in 2026 → 10,000 in 2027. A March 2026 Siemens partnership reportedly targets 10,000 Walker S2 a year (unverified). — [NextMSC](https://www.nextmsc.com/industry-deep-dive/humanoid-robots-announced-vs-shipped-units); [Yahoo Finance](https://finance.yahoo.com/news/ubtechs-2026-humanoid-robot-output-093000689.html)
- **Specs [AGG]:**
  - 15 kg payload, 52 DoF
  - Waist ±162°, 0–1.8 m work envelope
  - **Autonomous battery swap in about 3 minutes**, enabling near-24/7 operation
  - Weight inconsistent (43–73 kg)
  - Sources: [HumanoidHub](https://www.humanoidhub.ai/robots/ubtech-walker-s2); [Livium](https://livium.com/humanoids/walker-s2)
- **Price:** never published; "estimated $160,000" on one site (unverified). — [Robozaps](https://blog.robozaps.com/b/ubtech-walker-s-review)
- **Airbus:** January 2026 cooperation including Walker S2 purchases, framed by Airbus as early-stage concept testing. As of early October 2026 there is no public disclosure of the site, task or results. — [Fliegerfaust](https://www.fliegerfaust.com/walker-s2-update-ubtech-airbus-robot-trial/)

#### AgiBot / Zhiyuan (A2, X2, G2; A3, X2 Ultra), China
- **Volumes:** about 5,000 humanoids shipped in Q1 2026 [IND] and 20,000 cumulative production [CO]. — [Forbes](https://www.forbes.com/sites/johnkoetsier/2026/03/30/agibot-shipped-a-staggering-5000-humanoid-robots-in-the-last-3-months/); [DailyTechWire](https://www.dailytechwire.com/article/agibot-global-humanoid-market-share-h1-2026)
- **Europe:**
  - IFA Berlin (September 2026): TÜV Rheinland compliance certifications (RED DA, RED NB, Safety AK) for A-Series humanoids; distribution alliance with Tekpoint for retail and service robotics. [CO] — [Humanoids Daily](https://www.humanoidsdaily.com/news/agibot-deepens-european-push-at-ifa-2026-with-t-v-rheinland-certification-and-tekpoint-retail-alliance)
  - Scancom is the UK master distributor (UK launch 30 June 2026). [CO] — [Scancom](https://www.scancom.co.uk/pages/agibot)
- **Serbia plant (Šabac) with Minth Group, opened 29 August 2026:**
  - Phase 1: €20M, 3,000 m², assembly plus calibration and testing [IND] — [RAS (Serbia)](https://ras.gov.rs/en/minth-group-launches-europes-first-mass-production-of-humanoid-robots)
  - Capacity claims conflict: 500 units this year [X post]; 5,000/yr; or up to 20,000/yr for a ~€200M park, "yet to be demonstrated" — [RobotsBeat](https://robotsbeat.com/minth-agibot-serbia-humanoid-robot-factory-europe-first-sabac); [Robot Harbour](https://robotharbour.com/agibot-minth-serbia-humanoid-robot-factory/); [CyberRobo on X](https://x.com/CyberRobooo/status/2095098178530091329)
  - Serbia is not in the EU; products must still meet EU conformity rules. — [Robot Harbour](https://robotharbour.com/agibot-minth-serbia-humanoid-robot-factory/)
- **Earlier report (March 2026):** AgiBot to make robots for the auto industry in Europe. — [Automotive News](https://www.autonews.com/technology/ane-china-agibot-robot-europe-production-0303/)

#### NEURA Robotics (4NE1), Germany
- **Official reservation page [CO]:**
  - Gen 3.5 estimated **€98,000 per unit (1–19 units) / €60,000 (20+ units)**, excluding tax and shipping
  - €100 reservation, refundable until the purchase agreement
  - "Expected to be available end of 2026"
  - Source: [NEURA](https://neura-robotics.com/product/4ne1-reservation/)
- **Slip and other models [AGG]:** availability slipped from "as early as June 2026" to end of 2026, against a 6,000-unit production target. Mini €19,999 (shipping "spring 2026", unconfirmed); Pro €29,999. — [Robozaps](https://blog.robozaps.com/b/neura-robotics-4ne1-review)
- **Specs [AGG]:**
  - ~180 cm, 80 kg, 5 km/h
  - Payload "up to 100 kg" only in leg-supported configurations (20 kg on the arms; official range 10–100 kg)
  - NVIDIA Thor T5000 + Isaac GR00T
  - Reported collapse during a Qualcomm Computex keynote
  - Sources: [Botinfo](https://botinfo.ai/articles/neura-robotics-humanoid); [RoboSelect360](https://roboselect360.com/en/robots/neura-4ne1.html)
- **Funding (conflicting):**
  - March 2026: €1bn led by Tether at a €4bn valuation (Bloomberg, via Humanoids Daily) — [Humanoids Daily](https://www.humanoidsdaily.com/news/neura-robotics-reportedly-secures-1-billion-from-tether-to-scale-humanoid-vision)
  - June 2026: Series C of up to $1.4B at ~$7B, with Qualcomm, Amazon, NVIDIA, Bosch, Schaeffler and EIB [AGG] — [Robozaps](https://blog.robozaps.com/b/best-humanoid-robots)
- **Schaeffler:** November 2025 partnership to co-develop and supply actuators. Schaeffler plans to bring a "mid-four-digit number" of NEURA humanoids into its plants by 2035. NEURA's own ambition is 5 million cognitive and humanoid robots by 2030 [CO, marketing]. — [NEURA–Schaeffler](https://neura-robotics.com/neura-robotics-schaeffler-technology-partnership/); [Automation World](https://www.automationworld.com/factory/robotics/news/55332013/schaeffler-partners-with-neura-robotics-to-integrate-humanoids-into-production-operations)

#### Humanoid (SKL Robotics; HMND 01), UK
- **Specs:**
  - Wheeled Alpha [CO]: 220 cm, 300 kg, 2 m/s, 4 h average runtime, 15 kg payload — [Humanoid](https://thehumanoid.ai/hmnd-01-alpha-wheeled/)
  - Bipedal Alpha [AGG]: 179 cm, 90 kg, 29 DoF (excluding end effectors), 15 kg payload, 1.5–2 m/s, 3–4 h — [Robozaps](https://robozaps.com/products/hmnd-01)
  - End effectors: 12-DoF five-finger hand or 1-DoF parallel gripper. [AGG] — [Robozaps](https://robozaps.com/products/hmnd-01)
- **Siemens Erlangen trial (results published April 2026) [CO/IND]:** tote handling at **60 tote moves per hour, >90% pick-and-place success over more than 8 hours**. — [TNW](https://thenextweb.com/news/siemens-nvidia-humanoid-robot-erlangen-factory-trial); [Interesting Engineering](https://interestingengineering.com/ai-robotics/humanoid-robot-completes-siemens-trial)
- **Schaeffler:**
  - Bin-picking proof of concept (October 2025); binding agreement for a multi-thousand-unit rollout (May 2026) — [Humanoids Daily](https://www.humanoidsdaily.com/companies/humanoid/news)
  - Reuters, via secondary sources: 1,000–2,000 humanoids at Schaeffler sites by 2032; Schaeffler is preferred supplier for more than half of Humanoid's joint-actuator demand through 2031 (≥1M actuators) — [ConstraintAlpha](https://constraintalpha.substack.com/p/schaeffler-ag-the-humanoid-robot)
- **Funding and certification [IND]:** Series A $152M at $1.35B (July 2026), backed by Bosch and Schaeffler. Three-to-six-month commercial pilots with the "Beta" robot from late 2026 (Q4 per Forbes, Q3 per Robozaps). CE certification for the wheeled platform expected "by next year". — [Forbes](https://www.forbes.com/sites/johnkoetsier/2026/07/21/humanoid-raises-152-million-at-135-billion-valuation-europes-newest-robot-unicorn/); [TechTimes](https://www.techtimes.com/articles/321462/20260724/uk-humanoid-startup-raises-152m-bosch-schaeffler-back-wheels-over-legs.htm)
- **Manufacturing [AGG]:** Bosch reportedly contract-manufactures HMND 01 for Europe. — [Robozaps](https://blog.robozaps.com/b/best-humanoid-robots)
- **Price:** not published; a "$120k" claim is unverified. — [Robozaps](https://robozaps.com/products/hmnd-01)

#### Fourier (GR-1 / GR-2 / GR-3), China
- GR-3 is positioned for **care and rehabilitation**, not industry.
- **Price (unreliable):** wildly inconsistent — >¥200,000 floor (≈€24k), $80k, $120k "legacy", $150–250k. Trackers say Fourier has published no price, lead time or named commercial deployment. [AGG] — [Theresarobotforthat](https://theresarobotforthat.com/humanoid-reality-index/fourier-gr3/); [Robozaps](https://robozaps.com/products/fourier-gr-3); [9S Robotics](https://9srobotics.com/en/robots/fourier-gr-3/)
- No GR-2 industrial data or EU distribution found (see Gaps).

#### Kepler (K2 "Bumblebee"), China
- **Specs:** 175 cm, 75 kg, 52 DoF, 80+ sensors, up to 8 h. Payload 15 kg (30 kg dual-arm shown at ICRA, IROS and WAIC 2025). [CO/AGG] — [The Robot Report](https://www.therobotreport.com/kepler-robotics-showcases-k2-bumblebee-icra-2025/); [humanoid.guide](https://humanoid.guide/product/k2-bumblebee/)
- **Production:** mass production and deliveries announced September 2025. As of August 2026 no shipped-unit figure has been disclosed. [CO/AGG] — [Humanoid Robotics Technology](https://humanoidroboticstechnology.com/industry-news/kepler-announces-mass-production-of-its-k2-bumblebee/)
- **Price:** RMB 248,000 (~$34–34.8k, ≈€29.8k). A UK review cites European retail of about €80,000 (bipedal) and €85,000 (dual-form). [AGG] — [EnduX](https://endux.co.uk/blog/kepler-k2-industrial-humanoid-review); [Antonrobots](https://antonrobots.com/humanoid-robot-prices-2026/)

#### XPeng (IRON), China
- **Production line [CO]:** commissioned 8 September 2026 in Guangzhou; >80% of core processes automated; mass production targeted by end of 2026. — [XPeng](https://xpengswitzerland.pr.co/270350-xpeng-s-humanoid-robot-iron-leaves-its-production-line-on-its-own-feet/); [Business Today](https://www.businesstoday.in/technology/news/story/forget-car-factories-chinas-xpeng-is-building-a-factory-where-robots-make-robots-553970-2026-09-08)
- **Deployment and disclosure:** deliveries in 2027, to XPeng's own stores and campuses first. Line capacity and price not disclosed. — [LetsDataScience](https://letsdatascience.com/news/xpeng-commissions-iron-humanoid-robot-production-line-f7d32138)
- **Funding [CO]:** the robotics arm raised >$900M at >$6.3B post-money (24 August 2026). — [LetsDataScience](https://letsdatascience.com/news/xpeng-commissions-iron-humanoid-robot-production-line-f7d32138)
- **Specs [CO]:** 76 DoF; 21 (or 22) DoF per hand; three Turing chips (2,250 TOPS). — [Gasgoo](https://autonews.gasgoo.com/articles/ev/70039692)

#### Galbot (G1; S1), China
- **Funding [IND]:** RMB 2.5bn ($362M) raised in March 2026, with Sinopec participating; preparing a Hong Kong IPO. A December 2025 round of >$300M brought total funding to ~$800M. — [Caixin](https://www.caixinglobal.com/2026-03-03/galbot-raises-362-million-in-fresh-funding-eyes-hong-kong-ipo-102418742.html); [Robotics & Automation News](https://roboticsandautomationnews.com/2025/12/20/humanoid-robot-maker-galbot-raises-300-million-and-reaches-3-billion-valuation/)
- **Volumes [IND]:** >1,200 G1 shipped cumulatively in 2025. "Orders for thousands" claimed, with an open question over how many come from shareholders. — [36Kr](https://eu.36kr.com/en/p/4003795908908679)
- **Deployments:**
  - Pharmacy: 24-hour Laobaixing Pharmacy store in Shanghai (September 2026), ~90 s average fulfilment; the Meituan unmanned pharmacy partnership plans to grow from 7 to 100 stores
  - Retail: "Galbot Store" in 30+ cities, or "100+ stores in 20+ cities" per 36Kr
  - Industry: S1 on CATL lines; partners listed as CATL, Bosch, Toyota, Hyundai
  - Sources: [36Kr](https://eu.36kr.com/en/p/4003795908908679); [aiwiki](https://aiwiki.ai/wiki/galbot/raw)

#### Leju (Kuavo), China
- **History [2nd]:**
  - 100th full-size humanoid shipped January 2025
  - ~250 paid orders by Q1 2025
  - Batch deployment at FAW Hongqi for logistics sorting (April 2025)
  - ~$200M round in October 2025, after a $350M Series B
  - 170 cm; walks at 4.6 km/h
  - Source: [Sacra](https://sacra.com/research/leju-robotics)
- Schaeffler lists Leju among its actuator partners. — [ConstraintAlpha](https://constraintalpha.substack.com/p/schaeffler-ag-the-humanoid-robot)

#### EngineAI (PM01, SE01, T800), China
- PM01 about $12,000 (≈€10.3k; January 2025). [IND] — [Resident](https://resident.com/tech-and-gear/2025/01/09/how-much-does-engineais-pm01-humanoid-robot-cost-compared-to-other-robots)
- T800 "from $25,000" (≈€21.5k), shipping mid-2026. [AGG] — [Theresarobotforthat](https://theresarobotforthat.com/blog/humanoid-robots-for-sale/)

#### Mentee Robotics (MenteeBot), Israel — now Mobileye
- **Acquisition [FIL]:** closed 3 February 2026 for $900M (~$612M cash + 26.28M Mobileye Class A shares). Mobileye's CEO Shashua was Mentee's co-founder and chairman and recused himself. — [Mobileye 10-Q](https://www.sec.gov/Archives/edgar/data/0001910139/000110465926047712/mbly-20260328x10q.htm)
- **Plan [CO]:** first on-site customer proofs of concept in 2026, running autonomously without teleoperation; series production and commercialisation targeted for 2028. — [Mobileye](https://www.mobileye.com/press-kit/mobileye-agrees-to-acquire-mentee-robotics/); [The Robot Report](https://www.therobotreport.com/mobileye-to-acquire-mentee-robotics-for-900m-bid-dominate-physical-ai/)

#### Persona AI, US (Houston)
- **HD Hyundai project [CO]:** joint development agreement signed 23 March 2026 with HD KSOE and HD Hyundai Robotics for bipedal shipyard welding humanoids. Prototypes by end of 2026; field tests and start of commercial deployment in 2027. — [Maritime Executive](https://maritime-executive.com/article/hd-hyundai-moving-forward-with-humanoid-welding-robot-for-shipyards); [Hellenic Shipping News](https://www.hellenicshippingnews.com/hd-hyundai-to-develop-welding-humanoids-for-shipyards/)
- **Other:** works with ABS on safety and classification; projects with POSCO and SSE Steel Fabrication; $65.4M sold toward a planned $142M offering. — [RuntimeWire](https://runtimewire.com/article/persona-ai-sells-65m-planned-142m-humanoid-robot-offering)

#### Sanctuary AI (Phoenix), Canada
- **2023 launch specs [CO]:** 5'7" (~170 cm), 155 lb (~70 kg), max payload 55 lb (~25 kg), 3 mph; Carbon AI control system. — [Sanctuary AI](https://sanctuaryai.substack.com/p/sanctuary-ai-unveils-phoenix-a-humanoid)
- **2026:** no news found; tracker rates it "demoing", no verified customer. — [Theresarobotforthat](https://theresarobotforthat.com/humanoid-reality-index/sanctuary-phoenix/)

#### PAL Robotics (TALOS; Kangaroo), Spain
- **TALOS [AGG]:** 1.75 m, ~95 kg, ~6 kg per arm, 3 km/h, ~3 h; mainly research use. — [Plant Automation Technology](https://www.plantautomation-technology.com/productlaunch/humanoid-robot-talos); [ROS](https://robots.ros.org/talos/)
- **Kangaroo:** described as a full humanoid by some and as legs plus pelvis only by others; up to 6 h. — [Interesting Engineering](https://interestingengineering.com/innovation/pal-robotics-kangaroo-humanoid)

#### Safety and certification (cross-cutting)
- **ISO 25785-1** (dynamically stable industrial mobile robots, including legged, bipedal and wheeled balancing robots) was still a working draft as of January 2026, with publication expected in 2026 or 2027. Vendors should not claim certification to it. [IND] — [i-SCOOP](https://www.i-scoop.eu/iso-25785-1-explained-and-what-it-means-for-humanoid-robot-safety/); [Theresarobotforthat](https://theresarobotforthat.com/blog/humanoid-robot-safety-standards-2026/); [Biped.news](https://biped.news/article/humanoid-robot-safety-standards-2026)
- **No finished humanoid safety standard in 2026.** Buyers must combine industrial robot rules (ISO 10218), mobile robot standards and EU machinery and AI rules. [IND] — [Biped.news](https://biped.news/article/humanoid-robot-safety-standards-2026); [Tech Briefs](https://www.techbriefs.com/component/content/article/53111-safety-in-motion-setting-the-standard-for-humanoid-robots)
- An August 2026 arXiv paper frames certified functional safety for industrial humanoids as an open problem: the "fail-passive gap", because a legged robot cannot simply stop safely. [IND, academic] — [arXiv](https://arxiv.org/pdf/2608.02809)

### Inferences
- **Implied ASPs from financial disclosures (author's calculation):**
  - UBTech H1 2026: RMB 590.3M / 921 units ≈ **RMB 641k per full-size humanoid (≈€77k, ≈$89k)**. This is far above Unitree, suggesting industrial Walker S-class robots sell (or bundle services) at Western-like prices.
  - Unitree 2025: RMB 868M / ~5,500 ≈ **RMB 158k (≈€19k) average**, an upper bound since shipments were ">5,500".
  - UBTech's 921 units being ~85% of FY2025 is consistent with the ~1,079 units delivered in 2025.
- **RaaS price anchors in hourly terms (author's calculation):**
  - Agility's illustrative $8,500/month (~$102k/yr) works out to about $25/h at two shifts (~4,000 h/yr), or about $12/h at 24/7.
  - Apptronik's target of ~$80k/yr is about $20/h at two shifts.
  - The unverified Figure figure of $25/h is about $100k/yr at two shifts.
  - Western humanoid RaaS is therefore currently priced near or above fully loaded **US** warehouse labor. In Poland, where labor costs are much lower, the same price would not pay back unless the robot runs 2–3 shifts, or unless Chinese hardware (€20–80k) is used.
- **Theoretical availability from charging ratios:** Digit 5's 90/9 minute cycle gives about 91% availability (Digit 4: ~67%). Battery-swap designs (Atlas, Walker S2, Apollo) claim near-24/7 operation. These are company claims without independent uptime data.
- **Most RaaS-ready for an EU integrator in 2027:**
  - Western: NEURA (published EU fleet price, German) and Humanoid UK (CE marking planned for 2027, Schaeffler/Bosch-backed)
  - Chinese: UBTech, AgiBot (EU distributors, TÜV certificates, Serbian assembly) and Unitree (low price, R&D-grade)
- **Regulation (background knowledge, not verified in this session):** the new EU Machinery Regulation (EU) 2023/1230 applies from 20 January 2027 and replaces the Machinery Directive. It will govern CE marking of humanoids sold or leased in the EU, including in Poland. A RaaS provider that places robots on the market may carry manufacturer or importer obligations. Verify with a notified body or EUR-Lex.

### Gaps
- Specs and prices for **AgiBot A2 / G2 / X2**, **Unitree R1**, **Fourier GR-2**, **Galbot G1**, **EngineAI T800 / SE01** and **MenteeBot** could not be retrieved: the search budget was exhausted before these queries ran.
- **Tesla Optimus V3 specs** are unknown publicly (not revealed as of September 2026). Tesla's Q3 2026 earnings (late October 2026) postdate these notes.
- **Figure 03 DoF**, an official Figure price, and confirmation of the 1,000-unit claim are all missing.
- Atlas specs come only from aggregators. The Boston Dynamics page could not be opened.
- **Poland:** no source found for any official distributor, integrator or reference deployment of any humanoid in Poland. The single Polish-language query that ran returned nothing Poland-specific.
- **Not researched:** Hexagon (AEON, Sweden/Switzerland; listed as a Schaeffler partner); Dexmate, Booster, Fourier EU offices, Unitree EU subsidiary.
- Exchange rates are assumed, not verified for October 2026.

## KQ3 — Which tasks can humanoids perform reliably today, and with what throughput or uptime vs a human?

### Takeaway
Reliable, repeated, paid work today is limited to **simple, structured material handling**:
- tote moving and loading/unloading (Digit, HMND 01)
- sheet-metal part loading into fixtures (Figure 02)
- parts sequencing into trolleys (Figure 03; Atlas trials)
- logistics sorting (Leju, UBTech)
- retail and pharmacy picking (Galbot)

Published throughput is sparse and company-reported. Examples: 60 totes per hour at >90% success (HMND 01); ~98% accuracy over ~25k totes (Digit at Schaeffler); an 84 s cycle target with >99% placement (Figure 02). No independent human-vs-robot productivity benchmark was found. Interact Analysis's baseline assumes humanoids reach only ~50% of human productivity by 2032. Palletising/depalletising, machine tending, kitting and inspection appear in marketing but have no public performance data.

### Cited Findings
- **Figure 02 at BMW Spartanburg (2025, 11 months) [CO]:**
  - Ran 10-hour shifts Monday–Friday
  - **~1,250 runtime hours; >90,000 sheet-metal parts loaded; contributed to >30,000 BMW X3s**
  - Targets: **84 s total cycle / 37 s load time, >99% placement accuracy per shift, zero human interventions per shift**
  - Full 10-hour shifts were achieved only by about the 10th month
  - **The forearm was "our top hardware failure point at BMW"** (three wrist DoF, thermal and packaging constraints)
  - Sources: [Figure](https://www.figure.ai/news/production-at-bmw); [Heise](https://www.heise.de/en/news/Humanoid-robot-Figure-02-helps-build-over-30-000-BMW-X3s-11085687.html); [BGR](https://www.bgr.com/2039425/humanoid-ai-robot-retired-figure-02-bmw-x3/)
- A 99% loading accuracy is reported by BGR (secondary). Figure's measured cycle times were not found. [IND/2nd] — [BGR](https://www.bgr.com/2039425/humanoid-ai-robot-retired-figure-02-bmw-x3/)
- **Figure 03 at BMW (June 2026) [CO]:** sorts unsorted components into sequencing trolleys for just-in-sequence delivery to assembly, a job previously done by hand. — [Interesting Engineering](https://interestingengineering.com/ai-robotics/bmw-figure-03-humanoid-robot-smart-factory-us)
- **Agility Digit [FIL/CO]:**
  - Schaeffler: ~98% operational accuracy, ~25,000 totes
  - GXO: cumulative 100,000 totes (November 2025)
  - Fleet total >65,000 operating hours
  - Load/unload of washing-machine housings at Schaeffler's Cheraw, SC plant
  - Sources: [S-4/A](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026105334/ea0297114-05.htm); [NVIDIA](https://www.nvidia.com/en-us/case-studies/agility-robotics-digit-humanoid-robot/)
- **Humanoid HMND 01 at Siemens Erlangen (2026) [CO/IND]:** **60 tote moves per hour, pick-and-place success >90%, over more than 8 hours.** — [TNW](https://thenextweb.com/news/siemens-nvidia-humanoid-robot-erlangen-factory-trial)
- **Humanoid at Schaeffler [CO]:** bin-picking proof of concept completed October 2025. — [Humanoids Daily](https://www.humanoidsdaily.com/companies/humanoid/news)
- **Galbot G1 [CO/IND]:** 24-hour pharmacy retail in Shanghai, average end-to-end fulfilment about **90 seconds**. — [36Kr](https://eu.36kr.com/en/p/4003795908908679)
- **Leju Kuavo [CO]:** logistics sorting and handling at FAW Hongqi (April 2025). — [Sacra](https://sacra.com/research/leju-robotics)
- **Atlas:** parts-sequencing trials at Hyundai Metaplant (timing contested). [AGG] — [FinancialContent](https://markets.financialcontent.com/stocks/article/tokenring-2026-1-21-industrial-evolution-boston-dynamics-electric-atlas-reports-for-duty-at-hyundais-georgia-metaplant)
- **UBTech at Airbus:** battery swapping demonstrated during an aircraft-assembly trial; no task or results disclosed as of October 2026. — [Fliegerfaust](https://www.fliegerfaust.com/walker-s2-update-ubtech-airbus-robot-trial/)
- **Persona AI:** shipyard welding is targeted (prototypes end of 2026), not yet proven. [CO] — [Maritime Executive](https://maritime-executive.com/article/hd-hyundai-moving-forward-with-humanoid-welding-robot-for-shipyards)
- **Productivity benchmark (Interact Analysis, May 2026):** the baseline scenario assumes humanoids reach **~50% of human-level productivity and costs fall by ~half by 2032**, with commercial inflection around 2032. [IND] — [Interact Analysis PR (PDF)](https://interactanalysis.com/wp-content/uploads/Humanoid-Robot-report-PR-May-2026.pdf); [X summary](https://x.com/ErenChenAI/status/2063404536782635434)
- **Opex at scale (Roland Berger, April 2026, via a blog):** about $2 per hour including energy, software, network, maintenance and depreciation, excluding purchase or lease price. [2nd] — [Robozaps](https://blog.robozaps.com/b/roi-of-humanoid-robots)

### Inferences
- **Proven task families for a 2026–2027 RaaS offer:** tote handling between conveyors, racks and AMRs; just-in-sequence trolley loading; simple fixture loading. Each has a published reference case (Digit/GXO/Schaeffler, Figure/BMW, HMND/Siemens).
- **Rough rate comparison (author's estimate):** 60 totes/hour (HMND 01) and an 84 s cycle (Figure 02) are probably below a trained human at the same station; human rates are not in these sources. That aligns with Interact Analysis's view that humanoids are well below 50% of human productivity today. Robot economics therefore rest on multi-shift operation, not speed.
- **Reliability ramp is slow:** Figure needed about 10 months to reach full 10-hour shifts at BMW. Plan 6–12 months of ramp before stable output in a new customer cell.

### Gaps
- **No independent (non-vendor) measurement found** of humanoid uptime (MTBF/MTTR), interventions per hour, or throughput vs a human for any task.
- No public data found for **palletising/depalletising, machine tending, kitting, or inspection** by humanoids.
- No published human baseline for the Siemens or Schaeffler tote tasks.
- Teleoperation share during "autonomous" deployments is not disclosed by any maker. 1X NEO coverage explicitly flags a teleoperation caveat ([ThePlanetTools](https://theplanettools.ai/blog/1x-neo-first-consumer-humanoid-dated-priced-teleop-caveat-may-2026)); Mentee claims operation without teleoperation ([Mobileye](https://www.mobileye.com/press-kit/mobileye-agrees-to-acquire-mentee-robotics/)).

## KQ4 — Cost trajectory of humanoid hardware (BOM, unit prices to 2030) and component supply chain incl. China's role

### Takeaway
Analyst BOM estimates for a Chinese-supply-chain humanoid sit around **$35–46k (≈€30–40k) in 2025–2026**, versus about $130k with non-Chinese parts. BOM is projected to fall to **<$17k (≈€14.6k) by 2030** (BofA) and to about $13.5k by 2035 (Goldman, unconfirmed). Actuators are the largest cost block, at roughly 40–56% of BOM. China dominates volume and the component supply chain. Forecasts of the market itself vary widely: Interact Analysis is conservative (~700k units and ~$15B in 2035, inflection around 2032), while Goldman's revised outlook is ~$138B by 2035 (unconfirmed).

### Cited Findings
- **Goldman Sachs (early 2024) [IND]:**
  - Manufacturing cost fell to **$30k–150k per unit from $50k–250k** a year earlier, a ~40% decline vs an expected 15–20% a year
  - Drivers: cheaper components, more supply-chain options, better designs
  - 2035 market about $38B (original forecast)
  - Source: [Goldman Sachs](https://www.goldmansachs.com/insights/articles/the-global-market-for-robots-could-reach-38-billion-by-2035)
- **Goldman Sachs (August/September 2026 coverage, not confirmed on GS's site) [2nd]:**
  - 2035 market raised to ~$138B; 2035 shipments ~6.48M units
  - BOM falling ~7% a year over 2025–2035, from **~$27,700 to ~$13,500** (≈€23.8k → €11.6k)
  - ASP falling ~6% a year
  - Sources: [BigGo](https://finance.biggo.com/news/f946b229-ffdf-4471-a637-bf8798dd9aec); [Origin of Bots](https://www.originofbots.com/news/goldman-sachs-supercharges-global-humanoid-robot-forecast-nearly-5x-to-65-million-annual-units-by-2035)
- **BofA Global Research (2026, via blog) [2nd]:** BOM of a China-built humanoid **~$35,000 in 2025, falling below $17,000 by 2030** (≈€30k → <€14.6k), with actuators more than half the build. — [Robozaps](https://blog.robozaps.com/b/economics-of-humanoid-robot-production)
- **Morgan Stanley (via teardown article) [2nd]:** a Chinese-supply-chain humanoid costs **~$46,000** to build (2025–2026) vs **~$130,000** with non-Chinese components. Another post cites MS at ~$46k in 2025 falling to ~$16k by 2034 at 1M units a year. — [RobotAIGeek](https://www.robotaigeek.com/ai-robotics/robotics-platforms-ecosystems/humanoid-robot-bom-teardown-china-cost-advantage-2026); [MuppetCap](https://muppetcap.substack.com/p/the-humanoid-gold-rush-why-robots)
- **Morgan Stanley China forecasts (June 2026) [IND]:**
  - China humanoid market ~$2B in 2026, rising to $15B by 2030
  - 2030 China shipments raised to **446,000** (from 262,000)
  - China 2026 shipment forecast raised to 50,000 units
  - Sources: [CNBC](https://www.cnbc.com/2026/06/24/morgan-stanley-china-humanoid-robot-market-forecast.html); [SCMP](https://www.scmp.com/tech/article/3358210/morgan-stanley-raises-china-humanoid-robot-shipment-forecast-50000-units)
- **Local content [IND]:** the local content of Chinese-made robots rose from ~30% to >50% over five years (Morgan Stanley). — [SCMP](https://www.scmp.com/economy/global-economy/article/3352781/humanoids-robots-drive-next-chapter-chinas-manufacturing-dominance-morgan-stanley)
- **Actuator suppliers [IND, older]:** the Morgan Stanley "Humanoid 100" value-chain map lists Tuopu, Sanhua, Inovance and Leaderdrive-related names. The document is about 1.7 years old. — [Morgan Stanley PDF](https://advisor.morganstanley.com/john.howard/documents/field/j/jo/john-howard/The_Humanoid_100_-_Mapping_the_Humanoid_Robot_Value_Chain.pdf)
- **Actuators' BOM share:** 40–56% (teardown) [AGG]. An unattributed 2030 BOM split puts linear actuators at 27% and rotary actuators at 24% of a ~$17k BOM [AGG]. — [RobotAIGeek](https://www.robotaigeek.com/ai-robotics/robotics-platforms-ecosystems/humanoid-robot-bom-teardown-china-cost-advantage-2026); [Robozaps](https://blog.robozaps.com/b/economics-of-humanoid-robot-production)
- **Japan's edge in joints:** one analysis argues Japan's strength is in joint components (reducers, actuators), not finished robots. — [Xenospectrum](https://xenospectrum.com/en/humanoid-robot-bom-actuator-cost/)
- **Bain [2nd]:** models BOM falling to $10–20k by 2035. — [Robozaps](https://blog.robozaps.com/b/economics-of-humanoid-robot-production)
- **European actuator supply (Schaeffler):**
  - Humanoid actuators covering 60–250 Nm
  - Partnerships with Humanoid, NEURA, Leju, Hexagon Robotics and Agility
  - NEURA: €300M framework to 2035 [AGG]
  - Humanoid: ≥1M actuators through 2031
  - Sources: [ConstraintAlpha](https://constraintalpha.substack.com/p/schaeffler-ag-the-humanoid-robot); [Schaeffler IR (PDF, Feb 2026)](https://www.schaeffler.com/remotemedien/media/_shared_media_rwd/08_investor_relations/presentations/20260205_humanoids_at_schaeffler.pdf); [Mike Kalil](https://mikekalil.com/blog/schaeffler-universal-humanoid-robot-actuator/); [Botinfo](https://botinfo.ai/articles/neura-robotics-humanoid)
- **Interact Analysis (May 2026) [IND]:** >700,000 units and ~$15B revenue in 2035; inflection around 2032. China will have >65% of real-world application shipments by 2035. — [Interact Analysis PR (PDF)](https://interactanalysis.com/wp-content/uploads/Humanoid-Robot-report-PR-May-2026.pdf)
- **Other forecasts [IND]:** Yano Research projects 81,690 units in 2026 and 7.18M by 2035. The Business Research Company projects $39B in 2030. The spread reflects different market definitions. — [Yano](https://www.yanoresearch.com/press/press.php/4111); [Physical AI Journal](https://www.physicalaijournal.org/post/humanoid-market-forecast-2030-2035)
- **Production capacity announcements (capacity is not output):**

| Maker | Capacity | Tag | Sources |
|---|---|---|---|
| Tesla Fremont | 1M/yr (lines being installed) | [IND] | [Wikipedia](https://en.wikipedia.org/wiki/Optimus_(robot)) |
| Figure BotQ | 12,000/yr | [AGG] | [PhysicalAILab](https://physicalailab.io/en/figure-botq-production-fact-check/) |
| Agility RoboFab | 10,000/yr | [FIL] | [S-4](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026097764/ea0297114-04.htm) |
| Hyundai | 30,000/yr by 2028 | [IND] | [A3](https://www.automate.org/robotics/industry-insights/boston-dynamics-to-begin-production-on-redesigned-atlas-humanoid-in-2026) |
| UBTech | 5,000 (2026) → 10,000 (2027) | [AGG] | [NextMSC](https://www.nextmsc.com/industry-deep-dive/humanoid-robots-announced-vs-shipped-units) |
| AgiBot / Minth, Serbia | Up to 20,000/yr (aspirational) | [IND] | [Robot Harbour](https://robotharbour.com/agibot-minth-serbia-humanoid-robot-factory/) |

### Inferences
- **Hardware price, Chinese industrial humanoid, at EU purchase (author's projection):** today about €30–80k (K2 RMB 248k; Walker S2 implied ~€77k). This could fall to about €20–35k by 2028–2030 if BOM tracks BofA's <$17k and gross margins stay at 30–50%. A Western humanoid is likely to stay above €60k: NEURA's fleet price is already €60k.
- **Implication for RaaS pricing:** with hardware at €30–60k amortised over 3–5 years (€6–20k a year) plus service, a CEE RaaS of roughly €1.5–3k per robot per month looks feasible from 2027–2028 with Chinese or EU hardware. Western RaaS at ~$8.5k per month (≈€7.3k) is currently 2–4× that.
- **Supply chain dependency:** EU-assembled robots (NEURA; Humanoid via Bosch; AgiBot via Serbia) still rely on Chinese components to some degree. Schaeffler is the main European actuator alternative. Background, not verified in this session: China's 2025 rare-earth export controls on magnets are a supply risk for motor-heavy designs.

### Gaps
- Primary Goldman, Morgan Stanley and BofA 2026 reports could not be accessed. All 2026 BOM figures are secondhand.
- No source retrieved on China's share of specific components (harmonic reducers, planetary roller screws, frameless torque motors, dexterous hands, battery cells), or on the effect of rare-earth export controls on humanoid builds. Queries were blocked by the exhausted budget.
- No IDTechEx, TrendForce or IFR 2026 humanoid cost data retrieved.
- No unit-price forecast specifically for EU-delivered humanoids to 2030 found.

## KQ5 — Sales channels: integrators and partners vs direct, RaaS offers, European partners (access for a CEE integrator)

### Takeaway
US leaders sell **direct to large enterprises**, usually as RaaS or multi-year fleet agreements:
- Agility: RaaS with GXO, ownership with others
- Figure: direct with BMW
- Apptronik: pilots, ~$80k/yr target
- Boston Dynamics: Hyundai/DeepMind only in 2026

None shows an EU distributor or integrator programme in the sources found. Accessible routes for a Polish integrator are:
- **Chinese makers with distribution:** AgiBot (UK master distributor Scancom, Tekpoint, TÜV certificates, Serbian assembly); Unitree (online store plus dealers); UBTech and Kepler (EU resellers)
- **European makers seeking customers:** NEURA (direct reservation, fleet pricing); Humanoid UK (pilots, CE marking expected 2027)

No humanoid distributor or integrator in Poland was identified.

### Cited Findings
- **Agility, direct and RaaS:**
  - GXO runs Digit under a Robots-as-a-Service agreement — [NVIDIA](https://www.nvidia.com/en-us/case-studies/agility-robotics-digit-humanoid-robot/)
  - The S-4 models both RaaS (~$500k lifetime revenue per robot over 5 years) and ownership (~$400k) — [S-4](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026097764/ea0297114-04.htm)
  - Investor-deck illustration: $8,500 per month per robot [AGG] — [Robozaps](https://blog.robozaps.com/b/agility-robotics-digit-review)
  - Schaeffler made a minority investment and intends to buy Digit for its global plant network — [ConstraintAlpha](https://constraintalpha.substack.com/p/schaeffler-ag-the-humanoid-robot)
- **Figure, direct enterprise:** price quoted on enquiry; 2026 production reportedly committed to two partners (unverified). — [Robozaps](https://blog.robozaps.com/b/figure-03-review); [Karmactive](https://www.karmactive.com/humanoid-robots-cross-thousand-milestone-2026/)
- **Apptronik, enterprise pilots:**
  - Sales go through enterprise pilot programmes; no public price [AGG] — [RoboSelect360](https://roboselect360.com/en/robots/apptronik-apollo.html)
  - Jabil is the manufacturing partner and also a deployment site — [Robozaps](https://blog.robozaps.com/b/apptronik-apollo-review)
- **Boston Dynamics:** 2026 limited to Hyundai and DeepMind; more customers from early 2027. [CO] — [Boston Dynamics](https://bostondynamics.com/blog/boston-dynamics-unveils-new-atlas-robot-to-revolutionize-industry/)
- **1X:** consumer subscription at $499/month; commercial channel via EQT, up to 10,000 units over 2026–2030. [CO] — [Robotics 24/7](https://www.robotics247.com/article/video_1x_announces_neo_consumer_ready_humanoid_robot_pre_order_details_with_200_deposit); [Robo Pulse](https://robopulse.net/reviews/1x-neo-review/)
- **AgiBot:** Scancom holds sole UK master distribution rights (UK launch 30 June 2026); Tekpoint alliance (IFA 2026); TÜV Rheinland certifications. AgiBot products are reportedly deployed in the UK and Germany. — [Scancom](https://www.scancom.co.uk/pages/agibot); [Humanoids Daily](https://www.humanoidsdaily.com/news/agibot-deepens-european-push-at-ifa-2026-with-t-v-rheinland-certification-and-tekpoint-retail-alliance); [SCMP](https://www.scmp.com/tech/tech-trends/article/3363544/agibot-overtakes-unitree-top-global-humanoid-robot-vendor-first-half-amid-ipo-push)
- **UBTech:** a European reseller lists Walker S2 with "free delivery anywhere in Europe" [reseller marketing], and a robot-leasing site lists Walker S2. — [RobotsEuropa](https://www.robotseuropa.com/UBTECH-Walker-S2.htm); [Robotleasen](https://robotleasen.com/en/robots/ubtech-walker-s2/)
- **Unitree:** official store prices exclude tax and shipping [AGG]. US dealers include RobotLAB [CO], and H2 documentation is hosted on a German reseller domain. — [Robozaps](https://blog.robozaps.com/b/unitree-g1-review); [RobotLAB](https://www.robotlab.com/store/unitree-h2-humanoid-robot/); [docs.quadruped.de](https://docs.quadruped.de/projects/h2/html/index.html)
- **NEURA:** direct reservation with volume pricing (€98k for 1–19 units, €60k for 20+). — [NEURA](https://neura-robotics.com/product/4ne1-reservation/)
- **Humanoid UK:**
  - Pilot-led sales; three-to-six-month paid pilots at customer sites from late 2026; CE marking for the wheeled platform expected by 2027 — [Forbes](https://www.forbes.com/sites/johnkoetsier/2026/07/21/humanoid-raises-152-million-at-135-billion-valuation-europes-newest-robot-unicorn/)
  - Strategic partners: Schaeffler (customer and actuator supplier), Siemens (trial), Bosch (investor; reported contract manufacturer) — [Humanoids Daily](https://www.humanoidsdaily.com/companies/humanoid/news); [Robozaps](https://blog.robozaps.com/b/best-humanoid-robots)
- **Kepler:** a UK review or reseller cites EU retail of about €80–85k. [AGG] — [EnduX](https://endux.co.uk/blog/kepler-k2-industrial-humanoid-review)
- **Generic RaaS market ranges (blogs, indicative only) [AGG]:**
  - Enterprise humanoid RaaS ~$2,000–5,000 per month (≈€1.7–4.3k), or ~$10–30 per operating hour (≈€8.6–26)
  - Plus implementation fees (~$10k) and refundable deposits (~$12k)
  - Sources: [HumanoidHub](https://www.humanoidhub.ai/insights/humanoid-robot-economics); [RoboSelect360](https://roboselect360.com/en/ressources/robot-as-a-service-humanoid-robots.html)

### Inferences
- **Fastest supplier routes for Automatify/Robotify:**
  1. A distribution or partner agreement with AgiBot (via its European structure: Tekpoint, the Serbian plant) or with UBTech, for industrial-grade Chinese humanoids that already carry some EU-oriented certifications.
  2. An early-customer or reseller arrangement with NEURA (German, published fleet pricing) or Humanoid UK (actively seeking pilot sites; CE marking 2027).
  3. Unitree G1/H2 for low-cost demo and PoC fleets (R&D grade; not designed for industrial duty).
- **US makers as suppliers:** Agility, Figure, Apptronik and Boston Dynamics are unlikely to supply a small CEE integrator before 2027–2028, given anchor-customer commitments and no EU channel. Agility may come earliest via Schaeffler's European plants. Partly an inference: Schaeffler intends Digit for its global network, but no EU Digit site was found.
- **German anchor customers as a CEE entry point:** Schaeffler, Siemens, BMW, Mercedes and Bosch are the European anchor customers of most humanoid makers, and several have large Polish and CEE plants. Following their rollouts could open the door (inference; Polish plant footprints not verified in this session).

### Gaps
- **No Polish distributor, integrator or reference site** was found for any humanoid maker. Unverified whether Unitree, AgiBot or UBTech have authorised resellers in Poland or CEE.
- No published partner or integrator programme terms (margins, certification, service obligations) found for any maker.
- Not confirmed whether Agility, Figure or Apptronik allow RaaS resale by third-party integrators in the EU.
- EU after-sales and service presence (spare parts, field engineers) of Chinese makers not researched.
- Searches for the Hyundai/Atlas plan detail, EU Machinery Regulation specifics, Fourier and AgiBot EU distributors, and component supply chains could not run: the search budget was exhausted. Recommend a follow-up research pass on these.
