# Data sovereignty and European control for US and Chinese humanoids at Robotify (as of 15 Oct 2026)

Scope: whether, and how, a vendor-neutral Polish integrator (Robotify / Automatify) can deploy US and Chinese humanoid and legged robots while keeping software control, supervision and data in Europe, with no data flowing to China. Covers security incidents, US/EU/PL measures, vendor openness, European software and cloud options, EU law, and operator practice.

Method note: WebFetch and direct HTTP fetches were blocked in this environment (DNS failures and proxy 403s on arxiv.org, aliasrobotics.com, helpnetsecurity.com, defence24.pl, asisonline.org). All findings come from search-engine result summaries of the cited pages, not from full-text reads. Exact figures (CVSS scores, IP addresses, dates) should be spot-checked against the primary pages before they go into investor or client material. Items marked **[prior knowledge – verify]** were not confirmed by a search in this session.

Labels used: **[VERIFIED]** = confirmed by researchers' published technical work, a CVE record or an official text. **[ALLEGED/DISPUTED]** = claimed by one party and contested, or not independently confirmed. **[SECONDARY]** = only aggregator or blog sources.

---

## 1. Known security and data-flow issues with humanoid and legged robots, and US/EU/PL policy responses

### Takeaway
Unitree is the only humanoid/legged vendor with a public record of serious, CVE-documented flaws. It has had three generations of root-level or remote-control flaws: the Go1 CloudSail backdoor (Mar 2025), UniPwn (Sep 2025) and two G1 EDU root RCE chains (Aug 2026). Researchers also documented periodic telemetry from the G1 to servers in China, which Unitree describes as user-authorised "health monitoring". The US responded hardest: the FCC Covered List was extended on 28 Jul 2026 to new foreign-made humanoids and quadrupeds, and Unitree was put on the Pentagon 1260H list. The EU and Poland have no origin-based ban on robots. Both now have **high-risk-supplier mechanisms**: the EU CSA2 proposal (Jan 2026) and the Polish KSC amendment (in force Apr 2026). These could later reach Chinese robots used by NIS2 entities. The Polish Navy / "Edward Warchocki" incident (Aug 2026) shows the reputational sensitivity in Poland.

### Cited Findings

**Unitree Go1 – CloudSail backdoor (CVE-2025-2894) [VERIFIED, CVE]**
- An undocumented remote-access service, "CloudSail", ships on the Go1 robot dog. It starts at boot and sets up a peer-to-peer tunnel through NAT. Anyone holding the correct API key (including the manufacturer) can control the robot remotely, see camera feeds and exfiltrate data. Classified CWE-912 (Hidden Functionality). Disclosed 27 Mar 2025, CVE published 28 Mar 2025. Credited to Andreas Makris, Kevin Finisterre and todb. — [takeonme.org (AHA!) CVE-2025-2894](https://takeonme.org/cves/cve-2025-2894); [CIRCL CVE entry](https://cve.circl.lu/vuln/CVE-2025-2894); [GCVE](https://db.gcve.eu/vuln/cve-2025-2894)
- Remediation: a known valid API key was revoked, and users are advised to remove the service entirely. OpenCVE lists "no vendor fix or workaround". CVSS differs by source: 6.1 from AHA!, 6.6 from OpenCVE. Aviatrix calls it "exploited in the wild", but only PoC-level references were found. — [OpenCVE (UNM)](https://opencve.alliance.unm.edu/cve/CVE-2025-2894); [Aviatrix threat research](https://aviatrix.ai/threat-research-center/unitree-go1-robot-backdoor-vulnerability-2025); [ZME Science](https://zmescience.com/science/news-science/these-robot-dogs-kept-going-viral-on-social-media-turns-out-they-have-a-spying-backdoor)

**UniPwn – BLE root exploit across Unitree models (CVE-2025-35027 and related) [VERIFIED, CVE]**
- Publicly disclosed **20 Sep 2025** by Andreas Makris and Kevin Finisterre. It affects the **Go2 and B2 quadrupeds and the G1 and H1 humanoids**. — [Interesting Engineering](https://interestingengineering.com/innovation/security-flaw-unitree-humanoids-china); [Hackaday](https://hackaday.com/tag/unitree)
- CVE-2025-35027 is a command injection (CWE-78) in BLE Wi-Fi provisioning. A malicious string set during Wi-Fi setup is run as root via `wpa_supplicant_restart.sh`. CVSS v3.x 7.3 (HIGH). — [INCIBE-CERT](https://www.incibe.es/en/incibe-cert/early-warning/vulnerabilities/cve-2025-35027); [SentinelOne](https://www.sentinelone.com/vulnerability-database/cve-2025-35027/)
- Reporting describes four CVEs in total. They cover hardcoded cryptographic keys for BLE control packets (keys already leaked online), a trivial handshake, and unsanitised input passed to `system()`. The exploit reportedly works **without pairing from about 30 m**, and it is **wormable**: an infected robot can compromise other Unitree robots in BLE range. — [Interesting Engineering](https://interestingengineering.com/innovation/security-flaw-unitree-humanoids-china); [humanoid.guide](https://humanoid.guide/unitree-exhibits-g1-at-ifa-amid-unresolved-security-questions/); [UniPwn CVE tracker](https://releasealert.dev/github/Bin4ry/UniPwn/cves)
- Patch status is disputed. Unitree said it had completed "a majority of fixes", and researchers were sceptical. — [humanoid.guide](https://humanoid.guide/unitree-exhibits-g1-at-ifa-amid-unresolved-security-questions/)

**Telemetry from G1 to China – Alias Robotics study [VERIFIED observation; intent/consent DISPUTED]**
- arXiv:2509.14139, "Cybersecurity AI: Humanoid Robots as Attack Vectors" (Víctor Mayoral-Vilches, Alias Robotics, Sep 2025). It reports **MQTT connections from the G1 to 43.175.228.18:17883 and 43.175.229.18:17883**. These carry sensor-fusion data at 1.03 Mbps and 0.39 Mbps, with auto-reconnect. The paper calls the G1 a "dual-threat platform": a surveillance device, and a possible "mobile cyber-physical weapon platform capable of lateral movement within air-gapped facilities". — [arXiv abs 2509.14139](https://arxiv.org/abs/2509.14139); [arXiv HTML v3](https://arxiv.org/html/2509.14139v3)
- Periodic MQTT state reports go out every **300 seconds**, alongside continuous DDS streams with real-time sensor data. (This figure is from the Import AI summary of the paper; it was not checked in the paper's own text.) — [Import AI 430](https://importai.substack.com/p/import-ai-430-emergence-in-video)
- Press summaries (Sep–Oct 2025) say the data is sent "every five minutes without notifying the user". They say it includes audio and motion telemetry from 20+ motors, and that the BLE flaw plus hardcoded AES keys gives root to anyone in Bluetooth range. — [TechXplore](https://techxplore.com/news/2025-09-g1-humanoid-robots-secretly-china.html); [Alias Robotics case study](https://aliasrobotics.com/case-studies/case-study-humanoid-robot-g1.php); [Help Net Security, 16 Oct 2025](https://www.helpnetsecurity.com/2025/10/16/unitree-g1-humanoid-robot-vulnerability/)
- A G1 owner (YouTuber "Sentdex") independently confirmed his robot sent data to an external server every five minutes without his authorisation. — [Humanoids Daily](https://www.humanoidsdaily.com/news/unitree-robots-under-scrutiny-for-security-flaws-and-unsolicited-data-transmission)
- **Unitree's response:** in a statement on X, Unitree said the most critical RCE had been patched OTA, and that "after the user authorizes the robot to connect to the internet, it will monitor the robot's health state". It promised a future OTA update and clearer in-app notices. Elsewhere Unitree said it does not collect private or sensitive data without authorisation. — [Humanoids Daily](https://www.humanoidsdaily.com/news/unitree-robots-under-scrutiny-for-security-flaws-and-unsolicited-data-transmission); [humanoid.guide](https://humanoid.guide/unitree-exhibits-g1-at-ifa-amid-unresolved-security-questions/)
- A G1 developer architecture page says the G1 connects to the cloud only after user authorisation, collects "operating data that does not involve privacy" for fault detection, and does not collect remote-operation video or control traffic. *Low confidence:* this copy is on a third-party mirror (duckdns host), not Unitree's domain. — [mirrored G1 developer doc](https://unidocs.2vzdtw8.duckdns.org/doc/home_en_G1_developer_architecture_description.md)
- No independent full-platform audit has settled the telemetry dispute. Alias Robotics later said periodic telemetry still flowed to China-hosted servers and critical vulnerabilities remained. — [humanoid.guide (IFA 2026)](https://humanoid.guide/unitree-exhibits-g1-at-ifa-amid-unresolved-security-questions/)
- Mitigations suggested in reporting: network segmentation, disabling the CloudSail endpoint and restricting Bluetooth range. These do not fix the underlying authentication design. — [humanoid.guide](https://humanoid.guide/?p=17802)

**2026 G1 EDU root RCE chains (CVE-2026-76639, CVE-2026-76640) [VERIFIED by vendor confirmation; fix status DISPUTED]**
- Published **27 Aug 2026** by researcher Olivier Laflamme ("Boschko"):
  - CVE-2026-76639: a network-adjacent path traversal in the **`chat_go` AI service** that leads to root.
  - CVE-2026-76640: a BLE buffer overflow in Wi-Fi provisioning that gives root **without pairing**.
  - Both affect G1 EDU firmware **≤ v1.5.2**.
  — [The Hacker News, Aug 2026](https://thehackernews.com/2026/08/two-unitree-g1-edu-humanoid-robot-flaws.html); [Boschko, "UniBLEed"](https://boschko.ca/g1-ble-rce/); [SC World](https://www.scworld.com/brief/two-root-remote-code-execution-flaws-found-in-unitree-g1-edu-robot)
- Unitree verified both chains in coordinated disclosure. It added a check that the account matches robot ownership before the cloud returns the AES key, and patched that cloud flaw within about two months. The researcher's summary: "There was authentication, but no authorization." — [Security Affairs](https://securityaffairs.com/198085/hacking/hack-one-robot-reach-the-next-unitree-g1-security-flaws.html); [Forklog](https://forklog.com/en/researcher-identifies-two-vulnerabilities-in-unitree-robots/)
- Fix status: one report says no fixed G1 EDU firmware had been publicly verified. Boschko reports that firmware **1.5.5.0** blocks the chain (not independently confirmed). Rescana labels it "active exploitation", which no other source corroborates. — [GBHackers](https://gbhackers.com/unitree-g1-humanoid-robot-flaws/); [Boschko](https://boschko.ca/g1-ble-rce/); [Rescana](https://www.rescana.com/post/critical-active-exploitation-alert-unitree-g1-edu-humanoid-robot-vulnerabilities-cve-2026-76639-cve-2026-76640-enable-ro)
- Context: a Feb 2026 academic survey covers vulnerabilities, threats and open defence gaps in teleoperated quadrupeds. — [arXiv 2602.23404](https://arxiv.org/pdf/2602.23404)
- A German consulting page claims a Fraunhofer IPA benchmark found a critical vulnerability in the G1 [SECONDARY, unverified]. — [ihre-ideenfabrik.de](https://www.ihre-ideenfabrik.de/faq/warum-kommen-so-viele-humanoide-roboter-aus-china/)

**US measures**
- **FCC Covered List, 28 Jul 2026 (Public Notice DA 26-786) [VERIFIED, official].**
  - Adds "Foreign-produced advanced robotic devices, except advanced robotic devices which have been granted a Conditional Approval by DoW". Advanced robotic devices are mobile robots such as humanoids and quadrupeds. Foreign-made connected power inverters were added in the same notice.
  - It applies to **new models only**. Already-authorised models and robots already purchased are unaffected.
  - Federal government sales and use are exempt.
  - The way back to the US market is a Department of War exception or Conditional Approval.
  - The basis was a determination by a White House-convened interagency body.
  — [FCC fact sheet on X](https://x.com/FCC/status/2082194875504545898); [ASIS Security Management, Aug 2026](https://www.asisonline.org/security-management-magazine/latest-news/today-in-security/2026/august/FCC-Bans-Humanoid-Quadruped-Robots/); [Quartz](https://qz.com/fcc-bans-foreign-humanoid-robot-imports-national-security-072926); [Fox Business](https://www.foxbusiness.com/technology/fcc-blocks-new-foreign-made-power-inverters-advanced-robots-over-national-security-risks)
- A separate waiver (**DA 26-789**) lets vendors keep shipping security and software updates to covered devices. — [theresarobotforthat.com guide](https://theresarobotforthat.com/blog/humanoid-robot-import-ban/) [SECONDARY]
- Coverage reports the order names **Unitree and AgiBot**, and frames robots as "surveillance platforms as much as machines". Fixed-arm industrial robots are outside the mobile-robot definition. — [CNN, 29 Jul 2026](https://www.cnn.com/2026/07/29/tech/us-china-robot-ban-intl-hnk); [Washington Post, 28 Jul 2026](https://www.washingtonpost.com/technology/2026/07/28/fcc-bans-foreign-humanoid-robots-expanding-campaign-against-chinese-tech/); [The Humanoid Group](https://thehumanoidgroup.com/news/article/fcc-adds-foreign-made-robots-to-covered-list)
- **GUARD Act** (introduced 3 Jun 2026 by Reps. Moolenaar, Obernolte and McClellan). It would require national-security review of Chinese humanoids and quadrupeds, and auto-list them on the FCC Covered List if not reviewed within a year. It was excluded from the NDAA and **remains in committee**. — [House Select Committee on the CCP press release](https://chinaselectcommittee.house.gov/media/press-releases/moolenaar-obernolte-mcclellan-introduce-legislation-to-ban-dangerous-chinese-robots); [Washington Times, 4 Jun 2026](https://www.washingtontimes.com/news/2026/jun/4/lawmakers-propose-bill-block-sale-robots-built-china/); [RobotToday](https://robottoday.com/article/us-restrictions-on-chinese-humanoid-robots-the-full-map); [Ground Truth](https://groundtruth.day/news/the-humanoid-robot-ban-is-a-bill-that-never-left-committee.html)
- **American Security Robotics Act** (bipartisan). It would bar federal agencies from buying or operating Chinese-made humanoids and unmanned ground vehicles, with research exemptions. It would not restrict private buyers. — [Humanoids Daily](https://www.humanoidsdaily.com/news/us-lawmakers-target-chinese-humanoids-with-federal-procurement-ban)
- **FY2027 NDAA, Sec. 163** (House passed 216–212 on 22 Jul 2026, per RobotToday): bars only the Pentagon from procuring, leasing or operating adversary-linked humanoids. Commercial sales stay legal. [SECONDARY] — [RobotToday](https://robottoday.com/article/us-restrictions-on-chinese-humanoid-robots-the-full-map)
- **Pentagon 1260H list:**
  - Unitree has been added. Secondary US sources date this to 8 Jun 2026; Defence24 says July 2026, so the date conflicts.
  - Per RobotToday, direct DoD contracting is barred from 30 Jun 2026. From 30 Jun 2027 the bar extends to products containing listed companies' components.
  - Not checked against the official DoD notice.
  — [RobotToday](https://robottoday.com/article/us-restrictions-on-chinese-humanoid-robots-the-full-map); [Defence24](https://defence24.pl/sily-zbrojne/robot-z-czarnej-listy-pentagonu-wpuszczony-do-portu-przez-marynarke-wojenna-rp)

**EU-level measures**
- **No EU origin-based ban on robots.** European buyers face "no equivalent" restriction. Europe uses targeted safety and cybersecurity rules plus scrutiny in critical infrastructure, procurement and FDI. — [machine.news](https://www.machine.news/will-americas-humanoid-robot-crackdown-help-chinese-machines-conquer-europe/); [CNN](https://www.cnn.com/2026/07/29/tech/us-china-robot-ban-intl-hnk)
- An Exotec executive said the US measures could make Europe relatively more attractive to Chinese suppliers. — [machine.news](https://www.machine.news/will-americas-humanoid-robot-crackdown-help-chinese-machines-conquer-europe/)
- **Cybersecurity Act revision ("CSA2"), proposed 20 Jan 2026.**
  - Creates a mechanism to designate third countries of concern and **"high-risk suppliers"** on technical and non-technical grounds ("subject to influence by a third country"). It also defines key ICT assets used by NIS2 entities across **18 critical sectors**.
  - Consequences for designated suppliers: exclusion from public procurement, from EU cybersecurity certification and from EU funding. Mobile operators would get a 3-year phase-out of high-risk suppliers.
  - Robotics is not named explicitly.
  - Expected to be slow and contested in negotiation.
  — [Industrial Cyber](https://industrialcyber.co/regulation-standards-and-compliance/european-commission-proposes-revised-cybersecurity-act-to-boost-eu-cyber-resilience-secure-ict-supply-chains/); [TechRepublic](https://www.techrepublic.com/article/news-eu-2026-cybersecurity-act/); [European Commission – 5G phase-out](https://digital-strategy.ec.europa.eu/en/miscellaneous/european-union-commission-proposes-3-year-phase-out-high-risk-suppliers-5g-networks); [Strand Consult](https://strandconsult.dk/european-commissions-proposal-wants-to-secure-telecom-and-17-other-critical-industries-from-high-risk-suppliers/); [BISI](https://bisi.org.uk/reports/evolution-in-eu-regulation-csa2-and-high-risk-supplier-rules-meet-energy-reform-and-industrial-policy)
- **Germany:** no BSI warning and no Bundeswehr guidance on Chinese humanoids was found. A US House hearing on Chinese AI and robotics (Unitree) was covered in German media. — [Born City](https://borncity.com/news/us-kongress-warnt-vor-chinesischer-ki-und-robotik/); [WinFuture](https://winfuture.de/news,153983.html)

**Poland**
- **Polish Navy / "Edward Warchocki" incident (August 2026, around Armed Forces Day, 15 Aug).**
  - Edward Warchocki is a Unitree G1 humanoid with a Polish-built conversational stack. It appeared in a promotional video at the Navy port in Świnoujście (8th Coastal Defence Flotilla), inviting viewers to the naval parade. The video was removed from the Navy's profile within hours.
  - Deputy Defence Minister **Cezary Tomczyk**: "I don't think anything very bad happened in this particular case, but someone clearly lacked caution." He called for diligence at every level, including the Navy spokesperson.
  - Deputy Minister **Magdalena Sobkowiak-Czarnecka** said "fame and Instagram" had won over common sense.
  - Flotilla spokesperson Grzegorz Lewandowski said the robot stayed in one designated spot, did not move around and had no access to infrastructure or restricted areas.
  - Experts pointed to data collected by the robot's cameras and sensors.
  — [xyz.pl](https://xyz.pl/?p=237657); [Spider's Web, Aug 2026](https://spidersweb.pl/2026/08/robot-warchocki-swinoujscie-port-marynarka.html); [money.pl](https://www.money.pl/gospodarka/chinski-robot-w-porcie-wojennym-eksperci-alarmuja-fejm-wzial-gore-7317935805167744a.html); [RMF24](https://www.rmf24.pl/fakty/polityka/news-wiceszefowa-mon-ws-chinskiego-robota-w-jednostce-wojskowej-f,nIdn,1013545); [Polskie Radio](https://polskieradio.pl/395/7784/Artykul/3719433,update-polish-navy-removes-video-featuring-chinese-robot-after-security-concerns)
- Defence24 headlined it "a robot from the Pentagon's blacklist let into the port". Spider's Web noted that a ban on Chinese cars entering Polish military units has been in force "for months". — [Defence24](https://defence24.pl/sily-zbrojne/robot-z-czarnej-listy-pentagonu-wpuszczony-do-portu-przez-marynarke-wojenna-rp); [Spider's Web](https://spidersweb.pl/2026/08/robot-warchocki-swinoujscie-port-marynarka.html)
- **KSC amendment (Polish NIS2 law) – high-risk vendor (DWR/HRV) procedure.**
  - The Minister of Digital Affairs can designate a supplier as high-risk in an administrative procedure: BIP notice, 14 days for social organisations to respond, and an opinion from the Cybersecurity College within 3 months. The decision covers only the product, service or process types it names.
  - Covered entities may not deploy those products and must **phase out existing ones within 7 years** (some sources say 4–7 years). There is no compensation.
  - Decisions can be appealed to the administrative court.
  - Ministry statement of **6 Aug 2026**: **no HRV list exists yet, no proceeding has been opened and no decision issued**.
  — [gov.pl – Ministry of Digital Affairs](https://www.gov.pl/web/cyfryzacja/nowelizacja-ustawy-o-krajowym-systemie-cyberbezpieczenstwa-ksc---procedura-dot-listy-dostawcow-wysokiego-ryzyka); [Osborne Clarke (PL)](https://www.osborneclarke.com/pl/insights/dostawcy-wysokiego-ryzyka-dwr-w-ustawie-o-krajowym-systemie-cyberbezpieczenstwa); [Rzeczpospolita (Nawigator Prawny)](https://pro.rp.pl/nawigator-prawny-poradnik/art43188271-dostawca-wysokiego-ryzyka-kto-zaplaci); [gsmonline.pl](https://gsmonline.pl/artykuly/ministerstwo-cyfryzacji-broni-zapisow-o-dostawcach-wysokiego-ryzyka-w-ustawie-ksc)

### Inferences
- What is actually documented: hidden remote access (Go1), root over BLE without pairing (G1/H1/Go2/B2, twice), a cloud-side AES-key handover without ownership check (G1, 2026), and outbound MQTT to China-hosted IPs. Robotify's materials should cite these as facts. They should not claim "spying"; intent is unproven, and Unitree's position is that this is opt-in health monitoring.
- The pattern matters more than any single CVE. Each fix has been followed by a new chain in the **provisioning/BLE path and in cloud-connected services** (CloudSail, MQTT, `chat_go`). Robotify should therefore assume any Chinese consumer/EDU-grade humanoid is **untrusted at the firmware level** and needs network and radio containment rather than vendor promises.
- The FCC rule does not apply in the EU. It will matter for Robotify in three ways:
  1. US multinationals' European sites may copy US policy and refuse Chinese humanoids.
  2. Chinese vendors are likely to push harder into Europe, which means lower prices but higher scrutiny.
  3. It sets an argument that EU regulators can borrow under CSA2 or KSC.
- **KSC HRV risk is a stranded-asset risk under robot-as-a-service (RaaS).** If a Chinese robot vendor is ever designated, NIS2-covered clients must stop deploying and phase out within up to 7 years. Under robots-as-a-service that risk sits on Robotify's balance sheet. This argues for fleet diversification, short depreciation for Chinese units, and contract clauses that allow model substitution.
- The Navy incident shows that in Poland, defence, government and critical-infrastructure clients are reputationally off-limits for Chinese humanoids in 2026, whatever the technical controls.

### Gaps
- Full text of arXiv 2509.14139 and the UniPwn repository could not be read (fetch blocked). The 300-second interval, the full data inventory and whether audio is actually exfiltrated should be confirmed against the PDF.
- Whether the Unitree OTA update that adds consent prompts or an off switch for telemetry shipped, and whether firmware 1.5.5.0 fixes CVE-2026-76639/76640: not confirmed.
- No security research was found on **AgiBot, UBTech, Fourier, Galbot or EngineAI** humanoids. Absence of findings is not evidence of security.
- No official Netherlands (AIVD/NCSC) or German (BSI) guidance on Chinese robots was found. Germany's and the Netherlands' positions remain a gap.
- No source was found on any Polish MON/ABW internal rule specifically on robots (only the reported Chinese-car ban for military units).
- The exact 1260H listing date for Unitree (June vs July 2026) is unresolved, as are the exact text and the DoW "Conditional Approval" procedure.

---

## 2. Technical openness: which robots and models allow full local/edge operation under integrator control

### Takeaway
"Open SDK" and "no data leaves the site" are different properties. Unitree is among the most open at the **SDK level**: SDK2 on CycloneDDS with native ROS 2 messages and low-level joint control. Its **firmware and cloud services are closed**, and that is where the documented flaws sit. Boston Dynamics is the clearest example of a Western vendor offering an **on-prem fleet manager** (Orbit on Site Hub or as a VM). Agility's Arc is documented only as cloud SaaS. Figure's Helix is proprietary and on-device, with no public data-handling documentation. For AI, on-prem and edge options exist: NVIDIA GR00T N1.7 (open weights, reportedly Apache 2.0) on Jetson Thor, Physical Intelligence openpi π0/π0.5 (Apache 2.0 repo), and Gemini Robotics On-Device (local, but trusted-tester only).

### Cited Findings

**Unitree (CN)**
- unitree_sdk2 uses **CycloneDDS**. ROS 2 messages can be used directly to communicate with and control Unitree robots without wrapping the SDK. Ubuntu 22.04 + Humble is recommended; 20.04 + Foxy is tested. SDK2 requires CycloneDDS 0.10.2 (needed only for Foxy). — [GitHub unitree_ros2](https://github.com/unitreerobotics/unitree_ros2); [PyPI unitree_sdk2py](https://pypi.org/project/unitree-sdk2py)
- Unitree's open-source page lists SDKs. SDK2 covers Go2, B2 and H1 with **low-level single-joint control** and a high-level velocity interface. — [Unitree Official Open Source](https://www.unitree.com/mobile/opensource/)
- A 2026 arXiv paper runs its G1 low-level controller on Unitree SDK2 at 200 Hz. — [arXiv 2607.15163](https://arxiv.org/pdf/2607.15163)
- A 2025 comparison rates the G1/H1 "SDK open, hardware closed". — [roboticscenter.ai](https://www.roboticscenter.ai/blog/open-source-humanoid-robots-2025)
- Full SDK access is tied to EDU variants. For example, the H2 EDU with full SDK is listed at $35,000 versus $29,900 for the base model (North America, Apr 2026). — [Intelidroid](https://intelidroid.com/2026/04/07/unitree-h2-north-america-shipping-ipo-2026/)
- Third-party stacks already connect AI agents to the G1 (e.g., OpenClaw), showing that custom software layers are feasible. — [humanoid.guide – OpenClaw](https://humanoid.guide/openclaw-connects-ai-agents-to-unitree-g1-humanoid-robot/)

**AgiBot, UBTech, Fourier (CN)**
- A blog ranking lists the AgiBot X1 as "Best Open Source" [SECONDARY]. No reliable source on UBTech Walker S2 or Fourier GR-3 SDK depth or cloud dependence was found. — [Robozaps](https://blog.robozaps.com/b/best-humanoid-robots)

**Boston Dynamics (US; owned by Hyundai)**
- **Orbit** fleet management runs as a Boston Dynamics-hosted web service **on AWS**, or **on-premise** via **Site Hub**, a 1U rack appliance. The Site Hub runs a version of Orbit "largely the same as our cloud offering". — [BD Orbit Security](https://bostondynamics.com/wp-content/uploads/2024/02/orbit-security.pdf); [BD Spot & Site Hub Security White Paper](https://bostondynamics.com/wp-content/uploads/2024/03/spot-and-site-hub-security-white-paper.pdf)
- A Gartner review mentions on-prem as a VM (OVA for VMware/Hyper-V) or as the physical appliance. — [Gartner Peer Insights](https://www.gartner.com/reviews/product/boston-dynamics-orbit)
- User and mission data are encrypted at rest with AES-256. Boston Dynamics "does not retain a copy of the key" and cannot decrypt robot disks off the robot. (These documents date from the Spot/Orbit 4.0 era.) — [BD Spot & Site Hub Security White Paper](https://bostondynamics.com/wp-content/uploads/2024/03/spot-and-site-hub-security-white-paper.pdf)
- Orbit is SOC 2 Type II per an aggregator [SECONDARY]. — [Venture Atlas](https://www.ventureatlas.org/product/boston-dynamics-orbit)

**Agility Robotics (US)**
- **Agility Arc**, launched 11 Mar 2024 at MODEX, is a **cloud platform delivered as SaaS** ("removes the hassle of managing infrastructure"). It covers facility mapping, workflow definition, KPIs (uptime, throughput) and troubleshooting, with planned standard APIs to WMS, WES and MES. At GXO's SPANX site, Digit tote moves are "orchestrated through Agility Arc". — [Business Wire / Agility](https://agilityrobotics.com/news/agility-robotics-brings-operational-visibility-to-deployment-of-digit-fleets-with-the-launch-of-agility-arc); [Robotics 24/7](https://www.robotics247.com/article/modex_2024_agility_robotics_brings_operational_visibility_to_deployment_of_digit_fleets_with_launch_of_agility_arc)
- Agility trains models on AWS GPU instances. This is separate from Arc hosting, which is unconfirmed. — [AWS case study](https://aws.amazon.com/solutions/case-studies/agility-ai-case-study)

**Figure AI (US)**
- Helix is a proprietary VLA with onboard inference. Figure 03 is reported to run Helix 02 on-device [SECONDARY]. No vendor documentation on telemetry, cloud dependence or data residency was found. — [Edge of Power](https://edgeofpower.org/p/figure-ai-agility-and-beyond-the); [Robozaps Figure 03 review](https://blog.robozaps.com/b/figure-03-review)

**NEURA Robotics (DE)**
- **Neuraverse** is described as a "continuously learning operating system" connecting robots, people and data, with orchestration, digital twins and an app ecosystem. — [NEURA – Neuraverse](https://neura-robotics.com/neuraverse/)
- NEURA bought Bosch Rexroth's ACTIVE Shuttle business, including the **ACTIVE Fleet Manager** and **ROKIT navigation** software. It plans to offer these inside Neuraverse, with the aim of putting AMRs, industrial arms and humanoids on one "Physical AI" infrastructure. — [Logistik Heute](https://logistik-heute.de/news/robotik-neura-robotics-uebernimmt-fts-active-shuttle-von-bosch-rexroth-278675.html); [Computer & Automation](https://www.computer-automation.de/robotik/neura-robotics-uebernimmt--active-shuttle--von-bosch-rexroth.htm)
- NEURA raised about €1.2bn and made a second acquisition (Adlatus cleaning robots) within eleven days. — [The Next Web](https://thenextweb.com/news/neura-robotics-acquires-adlatus-cleaning-robots)
- A June 2026 job ad for "Fleet Orchestration Engineer – Neuraverse (human)" in Bielefeld covers multi-robot task allocation and traffic management. — [b2venture jobs](https://jobs.b2venture.vc/companies/neura-robotics-2/jobs/83018833-fleet-orchestration-engineer-neuraverse-human)

**Foundation models that can run on-prem or at the edge**
- **Gemini Robotics On-Device** (Google DeepMind, Jun 2025):
  - A VLA optimised to run locally on the robot "without a data network".
  - Available only to a limited trusted-tester group, with an SDK for MuJoCo evaluation and fine-tuning from 50–100 demonstrations.
  - Adapted to Apptronik Apollo and Franka FR3.
  - The cloud version still does better on complex reasoning.
  — [Google DeepMind blog](https://deepmind.google/discover/blog/gemini-robotics-on-device-brings-ai-to-local-robotic-devices/); [The Decoder](https://the-decoder.com/google-deepmind-makes-robots-independent-of-the-cloud-with-gemini-on-device/); [Maginative](https://www.maginative.com/article/google-announces-on-device-gemini-robotics-model/)
- **NVIDIA Isaac GR00T N1.7**: a 3B-parameter VLA, **open-weight under Apache 2.0** per ActuIA [SECONDARY; check the model card]. On **Jetson AGX Thor** with TensorRT NVFP4 quantisation, end-to-end inference drops from 125 ms to 39.9 ms. Jetson Thor is credited with 2,070 FP4 TFLOPS and 128 GB of memory. — [NVIDIA Jetson AI Lab tutorial](https://www.jetson-ai-lab.com/tutorials/groot_n17_on_thor/); [ActuIA](https://www.actuia.com/actualite/nvidia-en-coree-licence-ouverte-silicium-proprietaire-le-modele-de-plateforme-disaac/)
- **Physical Intelligence openpi**: the GitHub repo is **Apache 2.0**. It ships checkpoints for π0, π0-FAST and π0.5 (the π0.5 base checkpoint was added Sep 2025), JAX and PyTorch code, fine-tuning pipelines and a websocket policy server. — [aiwiki – openpi](https://aiwiki.ai/wiki/openpi); [LLM Reference – π0.5](https://www.llmreference.com/model/pi-0.5)
- License conflict: the LeRobot-hosted `pi05_base` card is tagged with a Gemma licence, while its text says it follows the openpi licence. Legal review is needed before commercial use. — [Hugging Face commit](https://huggingface.co/lerobot/pi05_base/commit/975848a74c17ca1f646570aec93c761941f20be2)

### Inferences
- A rough openness ranking for Robotify, from strongest to weakest local control:
  1. Robots with an open low-level SDK, where Robotify runs its own compute and policy and treats the vendor stack as a motor/sensor driver. Unitree EDU tiers and research-grade platforms fit here, but only behind containment, because the firmware below the SDK stays closed.
  2. Western robots with on-prem fleet management (Boston Dynamics Site Hub model).
  3. Vertically integrated cloud-orchestrated robots (Agility Arc, likely Figure). Here "European supervision" is possible only as an overlay; the vendor cloud stays in the loop unless contracts provide an EU-hosted or on-prem variant.
- **Open-weight VLAs (GR00T, openpi) running on an integrator-owned Jetson Thor-class edge computer** are the most credible route to "European AI on any body". Robotify (or a European partner) owns the fine-tuning data and weights, and inference never leaves the site. Gemini On-Device is technically local but not generally available and is controlled by a US vendor.
- For Chinese robots, Robotify should buy **EDU/developer variants**: they expose low-level control and let Robotify replace the vendor's cloud-connected apps (e.g., the `chat_go` voice/AI service that was an RCE vector in 2026) with its own stack.
- NVIDIA's open models still tie Robotify to US silicon and toolchains. That is acceptable for data sovereignty, but it is not full technological sovereignty.

### Gaps
- No primary documentation was found on **Agility Arc on-prem or EU hosting**, **Figure telemetry or cloud**, **Apptronik Apollo** data architecture, the **Boston Dynamics Atlas** commercial software stack, **AgiBot/UBTech/Fourier** SDK depth or cloud, or **Humanoid (UK) HMND 01** software. These need vendor questionnaires (RFI).
- Whether any Chinese vendor offers an **EU-hosted cloud or certified offline mode** was not found.
- European foundation-model alternatives were not covered by search. Candidates to verify: Hugging Face LeRobot / SmolVLA (FR/US, open source), Sereact (DE), RobCo (DE), NEURA's own models. **[prior knowledge – verify]**
- Exact licence terms for GR00T N1.7 and π0.5 weights (Apache 2.0 vs Gemma terms) need checking on the model cards.

---

## 3. European software and supervision layer: fleet management, EU cloud, edge, segmentation (with proposed architecture)

### Takeaway
No turnkey "European supervision layer for any humanoid" was found. NEURA's Neuraverse is the closest European platform ambition. VDA 5050 v3.0 (VDMA, Mar 2026) is the European interoperability standard for mixed mobile-robot fleets, but it targets AMRs, not humanoids. The pieces exist: on-prem edge compute, open ROS 2/DDS interfaces, EU and Polish cloud (Beyond.pl, Operator Chmury Krajowej, and AWS European Sovereign Cloud since Jan 2026, still US-owned), and IEC 62443 zones-and-conduits segmentation. Robotify's credible offer is therefore **its own integration and supervision layer**, built from European-hosted components, with the robots treated as untrusted OT devices.

### Cited Findings
- **VDA 5050 v3.0** (VDMA Materials Handling, dated 27 Mar 2026 by The Robot Report). It lets one control system run mixed fleets and integrates more autonomous robots, structured as a toolkit by autonomy level. Adopters include MiR (DK), BlueBotics (CH), OTTO/Rockwell and Seegrid (full compliance targeted in 2026). — [The Robot Report](https://www.therobotreport.com/vdma-version-3-0-vda-5050-will-help-mobile-robot-fleets-scale/); [Automated Warehouse](https://www.automatedwarehouseonline.com/?p=11062); [Seegrid](https://seegrid.com/news/seegrid-supports-vda5050-to-enable-interoperability-for-modern-industrial-automation-environments/); [The SCXchange](https://www.thescxchange.com/tech-infrastructure/technology/seegrid-amrs-to-meet-interoperability-standard-by-2026)
- **NEURA Neuraverse**: a European (DE) orchestration and OS layer for mixed robot types (see Q2). — [NEURA](https://neura-robotics.com/neuraverse/)
- **AWS European Sovereign Cloud**: generally available **15 Jan 2026**, first region in Brandenburg (DE). It is physically and logically separate from other AWS regions, operated only by EU residents and able to run independently. About 90 of 240+ services were available at launch. Investment is €7.8bn+, with sovereign Local Zones planned in BE, NL and PT. — [Intelligent CIO](https://www.intelligentcio.com/eu/2026/01/15/aws-launches-european-sovereign-cloud-expands-footprint-across-eu/); [Futurum](https://futurumgroup.com/insights/aws-european-sovereign-cloud-debuts-with-independent-eu-infrastructure); [PYMNTS](https://www.pymnts.com/amazon/2026/aws-launches-independent-european-cloud-to-meet-sovereignty-requirements/)
- **EUCS:**
  - The sovereignty requirement (EU headquarters for the highest level) was **dropped from the Q1 2024 draft** after pressure from member states and industry groups (AmCham EU, BSA, CCIA, ITI). — [Hogan Lovells](https://hlc.com/en/publications/eucs-controversial-data-sovereignty-issues-continue-to-drive-debate-around-the-eu-certification-scheme-for-cloud-services)
  - A single vendor blog claims CSA2 would restore a sovereignty tier (EU HQ, EU data localisation, immunity from non-EU law) and that the hyperscalers' sovereign offerings are not EUCS High certified [SECONDARY, unverified]. — [sota.io](https://sota.io/blog/eucs-cloud-assurance-levels-which-providers-qualify-eu-sovereignty-2026); [6clicks](https://www.6clicks.com/resources/blog/csa2-is-raising-the-stakes-on-sovereignty-and-french-enterprises-are-taking-notice)
- **Polish providers:**
  - **Beyond.pl** runs two data centres in Poznań on 100% renewable energy (PUE about 1.2). Its catalogue includes a sovereign cloud offering, and it reportedly unveiled a "sovereign AI Factory" at its 100 MW campus (date not confirmed). — [IT Europa](https://www.iteuropa.com/news/polish-cloud-and-colo-provider-beyondpl-expands-data-centre); [Structure Research](https://www.structureresearch.net/2024/09/12/beyond-pl-expanding-in-poland-for-ai-deployments); [Similarweb profile](https://www.similarweb.com/company/beyond.pl)
  - **Operator Chmury Krajowej** (founded by PKO BP and PFR) is listed in a 2026 PIE newsletter among the largest cloud providers in Poland, alongside AWS and Google Cloud. — [PIE Tygodnik 23/2026](https://pie.net.pl/wp-content/uploads/2026/06/Tygodnik-PIE_23-2026.pdf); [ITwiz](https://itwiz.pl/bank-pko-bp-polski-fundusz-rozwoju-tworza-polska-chmure-krajowa/)
- **IEC 62443 segmentation patterns:**
  - Group OT assets into **zones** and govern data paths through **conduits**. Secure each conduit to at least the level of the higher-security zone it connects.
  - Use an industrial DMZ between IT and OT and VLAN micro-segmentation against lateral movement.
  - Make conduits **default-deny**, opening only tested process flows.
  — [Fabrico](https://www.fabrico.io/blog/iec-62443-zones-conduits/); [Opsio](https://opsiocloud.com/blogs/ot-network-segmentation-zones-conduits/); [Trout Software](https://www.trout.software/blog/iec-62443-zones-and-conduits-explained)
- Mitigations reported specifically for Unitree: segmentation, disabling the CloudSail endpoint and restricting BLE range. — [humanoid.guide](https://humanoid.guide/?p=17802)
- Boston Dynamics' Site Hub shows the vendor-side pattern of **on-prem fleet management with customer-held encryption keys**. — [BD white paper](https://bostondynamics.com/wp-content/uploads/2024/03/spot-and-site-hub-security-white-paper.pdf)

### Inferences

#### Proposed reference architecture ("Robotify Sovereign Stack"), synthesised from the findings above
1. **L0 – Robot body (vendor hardware and firmware), treated as an untrusted OT device.**
   - Buy developer/EDU SKUs where possible.
   - Disable or physically remove unused radios. BLE is the documented root vector in UniPwn and CVE-2026-76640. Where the BLE module cannot be removed, provision Wi-Fi only in a shielded staging room, then disable it.
   - Remove or disable the vendor cloud agents (CloudSail on Go1; MQTT reporting on G1) where the SDK and firmware allow it. Otherwise block them at the network layer.
2. **L1 – Robotify edge brain on or beside the robot.**
   - An integrator-owned compute module (e.g., a Jetson Thor-class unit) running Robotify's ROS 2 / DDS application and an open-weight VLA (GR00T or π0.5) fine-tuned on client data.
   - Add an independent safety supervisor (hardware E-stop and a certified external safety chain; see the safety notes).
   - The vendor stack is used only through SDK2 / ROS 2 topics on a closed local link.
3. **L2 – Site edge server (on-prem at the client).**
   - Fleet manager and orchestration: Robotify's own, or NEURA Neuraverse / VDA 5050-compatible components for AMRs.
   - Local data store, video anonymisation and blurring before anything leaves the site.
   - A firmware/OTA **staging and quarantine** server: vendor updates are downloaded by Robotify, hash-verified, tested in a lab, then pushed locally. The FCC software-update waiver shows OTA patching is treated as security-critical, so updates cannot simply be cut off.
   - A local identity provider and audit logs.
4. **L3 – EU/Polish cloud for fleet analytics, model training, backups and the client portal.**
   - Polish or EU-headquartered providers (Beyond.pl, Operator Chmury Krajowej, OVHcloud/Scaleway/IONOS/T-Systems **[prior knowledge – verify]**) for data that must stay out of reach of non-EU law.
   - AWS European Sovereign Cloud only where the client accepts US-parent exposure.
5. **L4 – Remote Operations Centre (ROC) in Poland.**
   - EU-based staff for supervision and teleoperation fallback, with recorded sessions.
   - **No vendor remote access by default.** Vendor support only through Robotify-brokered, time-boxed, logged sessions.
6. **Network (IEC 62443).**
   - A dedicated robot zone per site with default-deny egress.
   - Allowlist only the L2 server. No direct internet, DNS sinkholing, and blocking of known endpoints (e.g., TCP 17883 MQTT; the 43.175.228.x/229.x addresses reported by Alias Robotics).
   - WPA3-Enterprise or a private 5G slice.
   - **Continuous egress monitoring (NDR)** with alerts on any non-EU destination. This produces the evidence that "no data flows to China".
7. **Assurance and governance.**
   - Pre-deployment penetration test and firmware analysis per robot model, using an EU lab (e.g., Alias Robotics in Spain did the G1 work).
   - Supplier SBOM and vulnerability-handling commitments in line with the CRA.
   - A data-processing and data-flow map per client (GDPR, Data Act).
   - Periodic third-party audit, plus a vendor-tiering policy (see Q5).

#### Other inferences
- **Investor-safe wording:** replace "data never flows to China" with "our architecture provides no network path from the robot to non-EU endpoints, we verify this continuously with egress monitoring, and it is independently audited". The first claim cannot be proven for closed firmware. The second can be demonstrated.
- Blocking vendor clouds will break some vendor features: apps, voice/chat AI and remote diagnostics. Robotify must replace them with its own services. This is extra engineering cost, and it is also the source of Robotify's "European software" value-add and lock-in.
- AWS European Sovereign Cloud improves operational sovereignty but stays under a US parent. Whether it satisfies "European" depends on the client's threat model. CLOUD Act exposure is **[prior knowledge – verify]**.

### Gaps
- No search coverage on European vendor-agnostic fleet platforms (e.g., Meili Robots DK, SYNAOS DE, Wandelbots DE, Energy Robotics DE). Whether any supports humanoids in 2026 is unknown.
- No primary documentation was retrieved for OVHcloud, Scaleway, IONOS or T-Systems sovereign offerings, SecNumCloud or C5 status, or Gaia-X labels in 2026.
- No robot-specific IEC 62443 guidance (e.g., for 62443-4-2 component profiles of humanoids) was found.
- Polish-specific: no source on Beyond.pl's 2026 sovereign-cloud certification status or on Operator Chmury Krajowej's ownership and service status in 2026.

---

## 4. EU legal frame for robot data and cybersecurity, and implications for an integrator operating robots as a service

### Takeaway
Six regimes bite on Robotify:
- **GDPR:** transfers to China are a proven enforcement target (TikTok €530m, May 2025).
- **Data Act:** generally applicable since 12 Sep 2025; access-by-design for products placed on the market from 12 Sep 2026.
- **Polish KSC/NIS2:** in force 3 Apr 2026, with high-risk-vendor powers.
- **CRA:** vulnerability and incident reporting from 11 Sep 2026; full application 11 Dec 2027.
- **Machinery Regulation 2023/1230:** cybersecurity built into safety requirements; applies from 20 Jan 2027 **[prior knowledge – verify]**.
- **AI Act:** high-risk obligations for AI in machinery deferred to 2 Aug 2028 by the Digital Omnibus.

Under robots-as-a-service, Robotify will typically be a processor or controller for robot data, a Data Act data holder or service provider, possibly a CRA "manufacturer" if it rebrands or substantially modifies robots, and a supplier inside clients' NIS2 supply chains.

### Cited Findings
- **GDPR – China transfers:**
  - Ireland's DPC fined **TikTok €530m (2 May 2025)**. TikTok failed to verify that EEA data accessed from China had essentially equivalent protection and did not assess access risk under Chinese anti-terrorism and counter-espionage laws. It also misinformed the DPC: it first said no EEA data was stored on Chinese servers, then admitted in Apr 2025 that some was.
  - TikTok was ordered to comply within 6 months or **suspend transfers to China**. It is appealing.
  - There is **no EU adequacy decision for China** [SECONDARY].
  — [The Hacker News](https://thehackernews.com/2025/05/tiktok-slammed-with-530-million-gdpr.html); [TechCentral.ie](https://www.techcentral.ie/tiktok-fined-e530m-for-breach-of-gdpr/); [Nairametrics](https://nairametrics.com/2025/05/02/tiktok-fined-e530-million-over-illegal-user-data-transfers-to-china/); [SayMine](https://advisor.saymine.com/blog-1/tiktok-fined-eu530-million-for-gdpr-violations-over-data-transfers-to-china)
- **Data Act (Regulation (EU) 2023/2854):**
  - Generally applicable since **12 Sep 2025**, when access was on request.
  - From **12 Sep 2026**, Art. 3(1) **access by design** applies to connected products and related services placed on the market from that date. Product data, related-service data and metadata must be directly accessible to the user by default, securely, free of charge and in a machine-readable format, "where relevant and technically feasible".
  - A connected product collects data about its use or environment and can transmit it.
  — [DIHK](https://www.dihk.de/en/data-act-next-level-as-of-12-september-2026-174716); [Matheson](https://www.matheson.com/insights/the-data-act-access-by-design-requirement-comes-into-force/); [Withers](https://www.withersworldwide.com/en-gb/insight/read/a-design-for-access-new-eu-data-act-data-access-rules-take-effect); [Wilson Sonsini](https://www.wsgrdataadvisor.com/2026/06/eu-data-act-september-2026-deadline-what-businesses-need-to-know/)
- **Polish KSC amendment (NIS2):**
  - Act of 23 Jan 2026, Dz.U. 2026 poz. 252 per one source. In force **3 Apr 2026** (one source says 2 Apr).
  - Self-identification and registration in the S46 system by **3 Oct 2026**. Full requirements, including an information security management system (ISMS), by **3 Apr 2027**. First audits of essential entities by 3 Apr 2028.
  - Fines for essential entities up to €10m or 2% of global turnover.
  - The high-risk vendor procedure is described in Q1.
  — [LegalGeek](https://legalgeek.pl/en/blog/nis2-ksc-2026-wprowadzenie/); [CGO Legal](https://cgolegal.pl/baza-wiedzy/biezace-doradztwo-prawne/nis2-polska-2026/); [nis2.org.pl](https://nis2.org.pl/nis2/terminy-i-obowiazki); [Clifford Chance briefing (Mar 2026)](https://www.cliffordchance.com/content/dam/cliffordchance/briefings/2026/03/CB-NIS2%20pol.pdf); [gov.pl](https://www.gov.pl/web/cyfryzacja/nowelizacja-ustawy-o-krajowym-systemie-cyberbezpieczenstwa-ksc---procedura-dot-listy-dostawcow-wysokiego-ryzyka)
- **Cyber Resilience Act (Regulation (EU) 2024/2847):** from **11 Sep 2026**, manufacturers must report actively exploited vulnerabilities and severe incidents in products with digital elements on the EU market. Full application is **11 Dec 2027**. One source says reporting to ENISA is due within 24 hours (verify in the text). — [Reed Smith](https://www.reedsmith.com/our-insights/blogs/viewpoints/102mnj2/eu-cybersecurity-regulatory-update-for-2026-and-beyond/); [EUverify](https://euverify.com/resource/cyber-resilience-act-reporting-deadline/); [TÜV Nord](https://www.tuev-nord.de/en/knowledge/explore/vulnerability-management-under-the-cyber-resilience-act-what-manufacturers-need-to-know-and-implement-now/); [Rockwell Automation](https://www.rockwellautomation.com/en-be/trust-center/eu-cyber-resilience-act-update.html)
- **Machinery Regulation (EU) 2023/1230:** integrates cybersecurity and new technologies into the essential safety requirements, modernises conformity assessment and moves to digital documentation. The application date of 20 Jan 2027 was not confirmed in this session. — [AMEC](https://amec.es/en/anticipate-2/alerts-and-opportunities/new-cybersecurity-requirements-effective-in-september/); [Kollmorgen](https://www.kollmorgen.com/en-us/service-and-support/cybersecurity-information-cra)
- **AI Act Digital Omnibus:**
  - **Regulation (EU) 2026/1744**, published in the OJ 24 Jul 2026, in force 27 Jul 2026, after Council approval on 29 Jun 2026.
  - Annex III high-risk systems move from 2 Aug 2026 to **2 Dec 2027**. Annex I systems in regulated products, **including machinery**, move to **2 Aug 2028**.
  - One Usercentrics page contradicts itself; DLA Piper's page is outdated.
  — [AIActo](https://www.aiacto.eu/en/blog/digital-omnibus-ai-act-report-2027); [Sidley Data Matters, 22 Jun 2026](https://datamatters.sidley.com/2026/06/22/eu-lawmakers-reach-provisional-agreement-to-delay-key-eu-ai-act-obligations/); [Cooley](https://cdp.cooley.com/digital-ai-omnibus-delays-key-deadlines-introduces-new-rules/); [CSA Labs](https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-omnibus-vii-deadline-delay-20260/); [Usercentrics](https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/)
- **EU CSA2 high-risk supplier mechanism** (proposal, Jan 2026): see Q1.

### Inferences
- **GDPR:** humanoids with cameras and microphones in workplaces process workers' personal data, potentially including biometric data. Any MQTT or telemetry stream reaching China is a **third-country transfer without adequacy**. After TikTok, it needs a transfer impact assessment that weighs Chinese state-access laws, and such an assessment is hard to pass. The simplest compliant position is a technical guarantee of **no transfer at all**, which supports Robotify's stated policy.
- **Poland – worker monitoring:** the Labour Code rules on video monitoring (Art. 22²) and employee information duties apply to robot cameras in workplaces **[prior knowledge – verify]**. Robotify should offer on-device or edge blurring and a client-facing DPIA template.
- **Data Act:** under robots-as-a-service, Robotify will hold robot usage data. Clients gain rights to access it and share it with third parties. Data Act Art. 32 also requires cloud/data-processing providers to prevent unlawful third-country governmental access to non-personal data **[prior knowledge – verify]**. A European-hosted, exportable data layer is a compliance feature as well as a sales feature.
- **CRA:** Robotify's own software (fleet manager, edge apps) sold or provided in the EU is likely a "product with digital elements". If Robotify rebrands or substantially modifies a robot, it may take on manufacturer duties (Art. 21–22 CRA) **[prior knowledge – verify]**. Either way, it needs a vulnerability-handling process and the ability to report actively exploited vulnerabilities from 11 Sep 2026. The Unitree history makes that capability essential.
- **NIS2/KSC:** clients in the 18 sectors will impose supply-chain security requirements on Robotify, and Robotify may itself be in scope as a managed service provider **[prior knowledge – verify]**. The Polish high-risk vendor mechanism creates a regulatory "kill switch" for specific vendors' products, so Robotify needs a substitution plan per robot model.
- **Machinery Regulation and AI Act:** an integrator that assembles a humanoid with its own AI policy into a work cell may become the "manufacturer" of a new machine for conformity purposes, including the cybersecurity-related essential requirements **[prior knowledge – verify]**. The AI Act high-risk obligations for such AI safety components are now due 2 Aug 2028, which gives a preparation window.

### Gaps
- No search confirmation of the Machinery Regulation's 20 Jan 2027 application date or of the text of its cybersecurity essential requirements (Annex III 1.1.9 / 1.2.1, protection against corruption).
- No UODO (Polish DPA) or CERT Polska guidance specific to robots or humanoids was found. ENISA guidance on robots was not searched.
- The Data Act Art. 32 text and the European Commission's model contractual terms were not retrieved.
- The CRA classification of humanoid robots (default vs important vs critical product) was not researched.

---

## 5. How other integrators and operators handle this

### Takeaway
Little public evidence exists of integrators systematically "sovereignising" Chinese humanoids. Public practice falls into three groups:
1. **Vendor-cloud orchestration accepted by the operator**: GXO with Agility Arc (US cloud SaaS).
2. **On-prem vendor fleet management for sensitive sites**: Boston Dynamics Site Hub.
3. **Exclusion of Chinese robots from defence and government settings**: US DoD 1260H, NDAA and FCC; the Polish MON reaction to the Navy incident.

Being the integrator that **demonstrably contains** both US and Chinese robots inside an EU-controlled stack appears to be an open market position. That is also why it must be backed with audits rather than assertions.

### Cited Findings
- **GXO and Agility:** a multi-year robots-as-a-service agreement, described as the industry's first commercial humanoid deployment. Digit robots at GXO's SPANX facility move totes from cobots to conveyors, "all orchestrated through Agility Arc" (cloud SaaS). No public detail on data residency was found. — [GXO press release](https://investors.gxo.com/news-releases/news-release-details/gxo-signs-industry-first-multi-year-agreement-agility-robotics); [Agility](https://agilityrobotics.com/content/gxo-signs-industry-first-multi-year-agreement-with-agility-robotics); [Robotics 24/7](https://www.robotics247.com/article/modex_2024_agility_robotics_brings_operational_visibility_to_deployment_of_digit_fleets_with_launch_of_agility_arc)
- **Boston Dynamics:** offers the on-prem Site Hub or a VM for customers who will not use its AWS-hosted cloud, with customer-side encryption at rest. — [BD Orbit Security](https://bostondynamics.com/wp-content/uploads/2024/02/orbit-security.pdf); [Gartner](https://www.gartner.com/reviews/product/boston-dynamics-orbit)
- **US defence and procurement:** Unitree is on the 1260H list, with DoD contracting barred from 30 Jun 2026 and component-level restrictions from 30 Jun 2027 (secondary). NDAA Sec. 163 (House-passed) bars the Pentagon from humanoids linked to adversaries. — [RobotToday](https://robottoday.com/article/us-restrictions-on-chinese-humanoid-robots-the-full-map)
- **Polish defence:** MON leadership publicly criticised the Navy's use of a Unitree-based robot (Aug 2026). Chinese cars are reportedly banned from entering military units. — [money.pl](https://www.money.pl/gospodarka/chinski-robot-w-porcie-wojennym-eksperci-alarmuja-fejm-wzial-gore-7317935805167744a.html); [Spider's Web](https://spidersweb.pl/2026/08/robot-warchocki-swinoujscie-port-marynarka.html)
- **Polish ecosystem:** the "Edward Warchocki" G1 runs a conversational and behavioural stack built by Polish engineers (MeraRobotics). This is a local example of a European software layer on a Chinese body, though in a promotional rather than industrial role, and with no published data-flow controls. — [Polskie Radio](https://polskieradio.pl/395/7786/Artykul/3690212,balance-humanoid-robotics-in-poland)
- **Europe as a destination:** the US measures may push Chinese suppliers toward Europe (Exotec executive). Chinese firms already have early deployments in the UK and Germany. — [machine.news](https://www.machine.news/will-americas-humanoid-robot-crackdown-help-chinese-machines-conquer-europe/)
- **Researchers' operator advice for Unitree:** network segmentation, disabling the CloudSail endpoint and restricting BLE range. — [humanoid.guide](https://humanoid.guide/?p=17802)

### Inferences
- **Proposed vendor-tiering policy for Robotify (inference):**
  - **Tier A – sovereign-capable:** open low-level SDK or an on-prem fleet manager; can run fully on Robotify's edge with no vendor cloud. Allowed at all commercial sites after a pen test. Examples: Boston Dynamics with Site Hub; developer-tier robots under Robotify's own stack.
  - **Tier B – containable:** closed firmware with documented phone-home behaviour, operable offline behind a default-deny zone with an OTA quarantine. Allowed at standard industrial and logistics sites. **Excluded from defence, government, critical infrastructure (KSC essential entities) and sites holding sensitive IP unless the client explicitly accepts.** Examples: Unitree and other Chinese vendors.
  - **Tier C – cloud-dependent:** the vendor cloud is mandatory for orchestration or AI. Only with contractual EU hosting or residency commitments and a data-flow audit. Examples: Agility Arc and Figure unless they offer EU or on-prem variants (unverified).
- What makes the claim credible to investors and clients:
  - a published security architecture whitepaper;
  - per-model pen-test reports from an EU lab;
  - a live egress-monitoring dashboard per site, showing zero non-EU flows;
  - ISO 27001 (and IEC 62443-2-4 for service providers) as a roadmap **[prior knowledge – verify applicability]**;
  - CRA-style vulnerability disclosure (PSIRT) from day one;
  - a documented OTA quarantine process;
  - a contractual "right to substitute" if a vendor is designated high-risk under KSC or CSA2.
- **Commercial upside of the stance:** after the FCC rule and the Navy incident, Polish and EU clients in regulated sectors are likely to value an integrator that **owns the software layer and the data**. That positioning also gives Robotify recurring software and supervision revenue independent of which robot body wins.

### Gaps
- No public case studies were found of European integrators deploying **Chinese humanoids** in industry with documented data-flow controls (e.g., air-gapped Unitree/AgiBot cells).
- GXO's data-residency and security terms with Agility are not public. The Mercedes–Apptronik and BMW–Figure data arrangements were not researched.
- No European defence or critical-infrastructure guidance specific to robots (NATO, ENISA, BSI, NCSC-NL, CERT Polska) was found in this session's searches.
