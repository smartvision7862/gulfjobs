// GullfJob Job Portal Website State and Logic Controller

// --- Mock Database ---
const defaultJobs = [
    {
        id: "job-001",
        title: "Senior MEP Design Engineer",
        company: "Apex Engineering Solutions",
        logoLetters: "AE",
        location: "Dubai, UAE",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "AED 18,000 - 22,000",
        postedDate: "2 days ago",
        featured: true,
        description: "We are seeking an experienced Senior MEP Design Engineer to lead design activities for luxury residential and commercial towers in Dubai. The ideal candidate will be responsible for preparing schematics, detail designs, and coordinating multi-disciplinary projects.",
        responsibilities: [
            "Perform mechanical, electrical, plumbing (MEP) design calculations.",
            "Coordinate design works with architects, structural engineers, and client representatives.",
            "Prepare detailed layout drawings, schematics, and equipment specifications.",
            "Conduct review of contractor submittals and shop drawings.",
            "Ensure compliance with local building codes, DEWA, and civil defense requirements."
        ],
        requirements: [
            "Bachelor's degree in Mechanical or Electrical Engineering.",
            "Minimum 8 years of experience in MEP design, preferably in the UAE.",
            "Proficient in AutoCAD, Revit (BIM), and energy modeling software.",
            "Strong communication and leadership skills.",
            "Society of Engineers UAE membership is highly desirable."
        ]
    },
    {
        id: "job-010",
        title: "IT Officer",
        company: "Lusail Solutions Hub",
        logoLetters: "LS",
        location: "Lusail, Qatar",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "QAR 8,000 - 10,000",
        postedDate: "Just now",
        featured: true,
        description: "We are looking for a skilled IT Officer to support and maintain our organisation's IT infrastructure, ensuring smooth day-to-day operations and timely technical support to users in Lusail.",
        responsibilities: [
            "Maintain and support the company's local IT infrastructure.",
            "Install, configure, and troubleshoot hardware, software, and network equipment.",
            "Ensure regular backups and system updates are executed securely.",
            "Provide fast technical assistance to in-house and remote staff.",
            "Collaborate with external vendors for major system upgrades."
        ],
        requirements: [
            "Bachelor's degree in IT, Computer Science, or Network Engineering.",
            "Minimum 4 years of proven experience in IT support or sysadmin roles.",
            "Familiarity with Windows Server, routing protocols, and active directory.",
            "Excellent customer service and troubleshooting mindset.",
            "Prior experience in Qatar is preferred."
        ]
    },
    {
        id: "job-011",
        title: "Enterprise Network Engineer (Cisco ACI)",
        company: "HCPL Global Connectivity",
        logoLetters: "HG",
        location: "Dubai, UAE",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "AED 15,000 - 18,000",
        postedDate: "1 day ago",
        featured: true,
        description: "We are seeking a senior Enterprise Network Engineer specializing in Cisco Application Centric Infrastructure (ACI) to manage and optimize our cloud data center networking layouts.",
        responsibilities: [
            "Design, deploy, and maintain Cisco ACI fabric networks.",
            "Manage Cisco SD-Access, DNA Center, and Identity Services Engine (ISE).",
            "Configure Layer 2 and Layer 3 protocols, including BGP, OSPF, EIGRP, and VXLAN.",
            "Develop network automation scripts to optimize infrastructure provisioning.",
            "Perform continuous security audits and update network defense mechanisms."
        ],
        requirements: [
            "Degree in Network Engineering, Telecom, or Computer Science.",
            "5+ years of experience as an Enterprise Network Engineer with strong Cisco focus.",
            "Expertise in Cisco ACI and network virtualization concepts.",
            "CCNP/CCIE certification is highly desirable.",
            "Strong problem-solving and critical network troubleshooting capabilities."
        ]
    },
    {
        id: "job-012",
        title: "Remote IT Support Engineer",
        company: "WB Hire Digital Solutions",
        logoLetters: "WB",
        location: "Remote (UAE Timings)",
        category: "IT & Tech",
        jobType: "Remote",
        experience: "Mid Level",
        salary: "AED 10,000 - 13,000",
        postedDate: "2 days ago",
        featured: false,
        description: "WB Hire Digital is seeking a Remote IT Support Engineer to deliver professional level remote desktop, server, and directory assistance to our corporate clients during UAE hours.",
        responsibilities: [
            "Provide high-quality remote troubleshooting and desktop support to international clients.",
            "Manage active directories, user accounts, Outlook groups, and file shares.",
            "Monitor Windows Servers, network firewall events, and local backup statuses.",
            "Resolve IT support tickets in a professional and timely manner.",
            "Coordinate with clients on software upgrades and device provisioning."
        ],
        requirements: [
            "Bachelor's degree in IT, Computer Science, or equivalent experience.",
            "3+ years of remote helpdesk or systems support experience.",
            "Proficient in Microsoft 365, Outlook, Active Directory, and DHCP/DNS.",
            "Strong remote troubleshooting, system monitoring, and communication skills.",
            "Must be comfortable working during UAE business hours."
        ]
    },
    {
        id: "job-020",
        title: "CNC Machine Operator",
        company: "BEMCO Manufacturing",
        logoLetters: "BM",
        location: "Abu Dhabi, UAE",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "AED 2,500 - 2,800",
        postedDate: "Just now",
        featured: true,
        description: "BEMCO is hiring CNC Machine Operators for our heavy manufacturing facility in Abu Dhabi. The successful candidates will configure and run CNC machines to fabricate metal parts according to engineering specs.",
        responsibilities: [
            "Set up and operate CNC milling and turning machines.",
            "Read and interpret technical engineering drawings and blueprints.",
            "Inspect finished components for size tolerances and quality check.",
            "Perform routine maintenance on CNC equipment.",
            "Adhere to all factory safety guidelines and procedures."
        ],
        requirements: [
            "ITI or Diploma in Mechanical Engineering or related trade.",
            "5-6 years of experience operating CNC machines in a heavy industrial setup.",
            "Proficient in reading blueprints and using precision measuring tools (calipers, micrometers).",
            "Good team player and physical stamina."
        ]
    },
    {
        id: "job-021",
        title: "Industrial Electrician",
        company: "Euro Emirates Group",
        logoLetters: "EE",
        location: "Dubai, UAE",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 1,200 - 1,500",
        postedDate: "1 day ago",
        featured: false,
        description: "We are seeking active Industrial Electricians to lay cabling, install switches, and troubleshoot electrical systems on our large commercial construction sites in Dubai.",
        responsibilities: [
            "Install and wire electrical panels, circuits, and outlet systems.",
            "Interpret electrical diagrams and layout schematics.",
            "Conduct electrical testing to ensure safe system operation.",
            "Coordinate with site engineers on installation milestones.",
            "Follow building codes and workplace safety rules."
        ],
        requirements: [
            "ITI Certificate or Diploma in Electrical engineering.",
            "3-5 years of experience in commercial or industrial wiring.",
            "Knowledge of local electrical safety standards.",
            "Ability to work in outdoor conditions."
        ]
    },
    {
        id: "job-022",
        title: "Registered Staff Nurse",
        company: "Kuwait National Hospital",
        logoLetters: "KH",
        location: "Kuwait City, Kuwait",
        category: "Healthcare",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "KWD 380 - 420",
        postedDate: "2 days ago",
        featured: true,
        description: "Kuwait National Hospital is seeking qualified Staff Nurses to provide high-quality care across our general wards. We offer attractive benefits and support for MOH licensing.",
        responsibilities: [
            "Deliver compassionate clinical care to patients in designated wards.",
            "Administer medications, prepare IV setups, and record vitals.",
            "Monitor patient statuses and coordinate updates with physicians.",
            "Prepare patients for diagnostic scans or surgical procedures.",
            "Maintain tidy ward environments and accurate medical logs."
        ],
        requirements: [
            "B.Sc in Nursing or GNM (General Nursing and Midwifery) Qualification.",
            "3+ years of clinical nursing experience in a reputed hospital setup.",
            "Eligibility or active license with Kuwait Ministry of Health (MOH).",
            "Strong patient management and empathy."
        ]
    },
    {
        id: "job-023",
        title: "Pastry & Bakery Cook (Commi 1)",
        company: "Grand Palace Catering",
        logoLetters: "GP",
        location: "Riyadh, Saudi Arabia",
        category: "Hospitality",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "SAR 3,400 - 4,500",
        postedDate: "Just now",
        featured: false,
        description: "A high-end catering and confectionery house in Riyadh is hiring a pastry and bakery cook to prepare luxury desserts, artisanal breads, and pastries for VIP events.",
        responsibilities: [
            "Prepare a wide variety of bakery goods, buns, pastries, and custom desserts.",
            "Follow and scale recipes accurately for high-volume prep.",
            "Decorate cakes and pastries using high-end garnishing skills.",
            "Maintain food hygiene, clean kitchen surfaces, and sanitize tools.",
            "Monitor ingredients stock and report shortages."
        ],
        requirements: [
            "Culinary degree or certificate in baking/pastry arts.",
            "4+ years of professional bakery experience in a hotel or luxury bakery.",
            "Strong portfolio in bun making and French pastry preparation.",
            "Understanding of HACCP and food safety regulations."
        ]
    },
    {
        id: "job-024",
        title: "Specialty Coffee Barista",
        company: "Third Wave Cafe",
        logoLetters: "TW",
        location: "Jeddah, Saudi Arabia",
        category: "Hospitality",
        jobType: "Full-time",
        experience: "Entry Level",
        salary: "SAR 2,500 - 2,700",
        postedDate: "3 days ago",
        featured: true,
        description: "Join our vibrant cafe team in Jeddah. We are hiring a passionate Specialty Coffee Barista to prepare artisanal brews and maintain a warm, welcoming customer atmosphere.",
        responsibilities: [
            "Prepare hot and cold espresso-based beverages, filter coffees, and teas.",
            "Deliver excellent customer service and explain coffee profiles to guests.",
            "Operate and clean commercial espresso machines and grinders.",
            "Maintain cash register operations and keep service counters tidy.",
            "Monitor stock levels of beans and milk varieties."
        ],
        requirements: [
            "Prior barista experience is preferred, but training will be provided.",
            "Basic understanding of espresso extraction and milk frothing techniques.",
            "Excellent customer-facing skills and positive attitude.",
            "Fluent in English; conversational Arabic is a plus."
        ]
    },
    {
        id: "job-025",
        title: "B2B Sales Executive (PPE)",
        company: "Rumi Safety Supplies",
        logoLetters: "RS",
        location: "Doha, Qatar",
        category: "Sales & Marketing",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "QAR 6,000 - 8,000",
        postedDate: "4 days ago",
        featured: false,
        description: "Rumi Safety is a leading provider of safety workwear and PPE products. We are seeking a B2B Sales Executive to promote our catalogs to major contracting and oilfield sites in Qatar.",
        responsibilities: [
            "Develop sales leads and call on construction site managers and HSE engineers.",
            "Deliver product catalogs, present PPE samples, and quote bulk pricing.",
            "Close purchase orders and coordinate with logisticians on delivery.",
            "Attend trade shows and network with safety officers in Qatar.",
            "Update CRM tools with sales progress and account status."
        ],
        requirements: [
            "Degree in Business, Sales, or related field.",
            "2-3 years of sales experience, preferably in industrial safety products or construction supplies.",
            "Active driving license and transport in Qatar.",
            "Strong communication and persuasive presentation skills."
        ]
    },
    {
        id: "job-002",
        title: "Full Stack Developer (Node.js & React)",
        company: "GulfTech Innovations",
        logoLetters: "GT",
        location: "Riyadh, Saudi Arabia",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "SAR 14,000 - 18,000",
        postedDate: "Just now",
        featured: true,
        description: "GulfTech Innovations is building the next-generation fintech solutions for the Saudi market. We are looking for a Full Stack Developer proficient in React.js and Node.js to join our growing engineering team in Riyadh.",
        responsibilities: [
            "Develop high-quality, reusable frontend UI components using React.",
            "Design and implement robust RESTful and GraphQL APIs on the Node.js backend.",
            "Integrate third-party payment gateways and secure banking APIs.",
            "Optimize application performance for maximum speed and scalability.",
            "Collaborate with product designers and backend security specialists."
        ],
        requirements: [
            "Degree in Computer Science, Software Engineering, or equivalent practical experience.",
            "3+ years of experience with React, Node.js, Express, and databases (PostgreSQL/MongoDB).",
            "Familiarity with cloud hosting services (AWS or Google Cloud).",
            "Understanding of security practices (OAuth, JWT, data encryption).",
            "Knowledge of Arabic language is a plus but not mandatory."
        ]
    },
    {
        id: "job-003",
        title: "HSE Officer (Oil & Gas)",
        company: "PetroGulf Services",
        logoLetters: "PG",
        location: "Doha, Qatar",
        category: "Safety",
        jobType: "Contract",
        experience: "Mid Level",
        salary: "QAR 9,500 - 12,000",
        postedDate: "1 week ago",
        featured: false,
        description: "PetroGulf Services is a premier oilfield support provider in Doha. We are hiring a certified HSE Officer to oversee implementation of health, safety, and environmental protocols on our gas extraction sites.",
        responsibilities: [
            "Conduct regular health and safety audits across worksites.",
            "Prepare detailed safety risk assessments and incident reports.",
            "Deliver safety induction training and mock drills to engineers and workers.",
            "Enforce strict adherence to PPE protocols and environmental regulations.",
            "Act as primary point of contact for external regulatory inspections."
        ],
        requirements: [
            "NEBOSH IGC Certificate (National Examination Board in Occupational Safety and Health).",
            "3-5 years of HSE experience in the oil & gas or heavy industrial sector.",
            "Strong understanding of international safety frameworks (OSHA, ISO 45001).",
            "Excellent command of written and spoken English.",
            "Valid Qatar driving license is highly preferred."
        ]
    },
    {
        id: "job-004",
        title: "Restaurant General Manager",
        company: "Nourish Hospitality Group",
        logoLetters: "NH",
        location: "Doha, Qatar",
        category: "Hospitality",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "QAR 16,000 - 20,000",
        postedDate: "3 days ago",
        featured: true,
        description: "Join a prestigious fine-dining establishment in the Pearl, Doha. We are looking for an energetic, service-oriented Restaurant General Manager to run daily operations, manage budgets, and deliver exceptional guest experiences.",
        responsibilities: [
            "Manage overall front-of-house and back-of-house restaurant operations.",
            "Analyze financial statements, P&L, and optimize inventory costs.",
            "Recruit, train, mentor, and evaluate hospitality service staff.",
            "Interact with guests, handle escalations, and maintain VIP relations.",
            "Coordinate marketing campaigns and exclusive fine-dining events."
        ],
        requirements: [
            "Hospitality Management Degree or equivalent credential.",
            "At least 6 years of experience managing luxury restaurants or 5-star hotel dining.",
            "Strong leadership, financial acumen, and inventory control capabilities.",
            "Fluent in English; secondary language proficiency is highly regarded.",
            "Passion for high-end service standards and culinary trends."
        ]
    },
    {
        id: "job-005",
        title: "B2B Sales Executive (IT Solutions)",
        company: "Matrix Telecom Solutions",
        logoLetters: "MT",
        location: "Manama, Bahrain",
        category: "Sales & Marketing",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "BHD 1,200 - 1,600",
        postedDate: "5 days ago",
        featured: false,
        description: "Matrix Telecom is a leading enterprise connectivity provider in Bahrain. We are seeking a results-driven B2B Sales Executive to acquire new corporate clients and upsell Cloud and Cyber Security solutions.",
        responsibilities: [
            "Identify and qualify new business opportunities through outbound prospecting.",
            "Prepare tailored technical proposals and lead product demos for corporate clients.",
            "Negotiate pricing structures and close commercial contracts.",
            "Maintain client relationships to ensure renewals and identify cross-selling opportunities.",
            "Meet and exceed quarterly sales revenue targets."
        ],
        requirements: [
            "Bachelor's degree in Business, Marketing, or IT.",
            "3+ years of enterprise B2B sales experience, preferably in Telecom or Software.",
            "Strong negotiation skills and professional phone/email presence.",
            "Familiarity with CRM tools (Salesforce or HubSpot).",
            "Driver's license and own vehicle."
        ]
    },
    {
        id: "job-006",
        title: "Staff Nurse (Pediatric Ward)",
        company: "MedCare Specialist Hospital",
        logoLetters: "MC",
        location: "Muscat, Oman",
        category: "Healthcare",
        jobType: "Full-time",
        experience: "Entry Level",
        salary: "OMR 900 - 1,200",
        postedDate: "4 days ago",
        featured: false,
        description: "MedCare Specialist Hospital is an accredited healthcare facility in Muscat. We are seeking caring, dedicated Staff Nurses to join our pediatric department and provide excellent clinical care to children and infants.",
        responsibilities: [
            "Assess pediatric patients, record vital signs, and monitor conditions.",
            "Administer medications, IV therapies, and treatments as prescribed by doctors.",
            "Provide emotional and clinical support to patients and their families.",
            "Collaborate with the multidisciplinary care team on recovery plans.",
            "Maintain accurate, electronic patient records and charts."
        ],
        requirements: [
            "Bachelor's degree in Nursing (B.Sc Nursing) or equivalent.",
            "Registered Nurse (RN) license with active Ministry of Health (MOH) Oman eligibility.",
            "Minimum 2 years of clinical experience in pediatric nursing.",
            "Strong empathy, patience, and child-handling capabilities.",
            "Excellent communication skills."
        ]
    },
    {
        id: "job-007",
        title: "Site Civil Engineer (Infrastructure)",
        company: "Desert Shield Contractors",
        logoLetters: "DS",
        location: "Riyadh, Saudi Arabia",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "SAR 11,000 - 14,000",
        postedDate: "2 weeks ago",
        featured: false,
        description: "Desert Shield Contractors is looking for an active Site Civil Engineer to oversee earthworks, drainage, and road infrastructure projects in Riyadh's new development zones.",
        responsibilities: [
            "Supervise daily civil construction works on site, ensuring quality standards.",
            "Interpret engineering drawings, specifications, and verify survey markings.",
            "Coordinate with subcontractors and manage material delivery logistics.",
            "Prepare daily progress reports, milestone updates, and safety clearances.",
            "Verify works comply with municipal codes and contract drawings."
        ],
        requirements: [
            "Bachelor's degree in Civil Engineering.",
            "4+ years of site execution experience in major infrastructure or roads projects.",
            "Familiarity with project management and scheduling apps.",
            "Active Saudi Council of Engineers (SCE) registration.",
            "Strong field-level problem-solving and command skills."
        ]
    },
    {
        id: "job-008",
        title: "Digital Marketing Specialist",
        company: "Sands Media & PR Agency",
        logoLetters: "SM",
        location: "Kuwait City, Kuwait",
        category: "Sales & Marketing",
        jobType: "Remote",
        experience: "Mid Level",
        salary: "KWD 700 - 950",
        postedDate: "3 days ago",
        featured: true,
        description: "We are an innovative media agency representing luxury retail brands in the GCC. We are hiring a remote-first Digital Marketing Specialist to design, implement, and track growth campaigns on social and search platforms.",
        responsibilities: [
            "Plan and execute SEO, SEM, and paid advertising campaigns (Meta, Google, TikTok).",
            "Write engaging copywriting in both English and Arabic for social media posts.",
            "Create analytics dashboards tracking conversions, CTR, ROAS, and customer acquisition cost.",
            "Conduct market research and keep up-to-date with digital marketing trends.",
            "Coordinate with graphic designers to create eye-catching campaign materials."
        ],
        requirements: [
            "Degree in Marketing, Communications, or related fields.",
            "3+ years of managing media spends and digital acquisition channels.",
            "Certified in Google Ads and Meta Blueprint is a significant advantage.",
            "Bilingual: Fluent in both English and Arabic (written & spoken).",
            "Highly analytical mindset with robust Excel skills."
        ]
    },
    {
        id: "job-009",
        title: "Cyber Security Analyst",
        company: "ShieldNet Cyber Defences",
        logoLetters: "SN",
        location: "Dubai, UAE",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "AED 22,000 - 28,000",
        postedDate: "1 day ago",
        featured: true,
        description: "ShieldNet protects critical financial institutions in the GCC. We are seeking a seasoned Cyber Security Analyst to join our Security Operations Center (SOC) in Dubai, focusing on proactive threat hunting and incident response.",
        responsibilities: [
            "Monitor enterprise networks for suspicious activity and potential security threats.",
            "Investigate, contain, and mitigate security incidents, malware outbreaks, or data breaches.",
            "Maintain SIEM solutions, firewalls, intrusion detection (IDS/IPS), and endpoint protection tools.",
            "Conduct vulnerability scans, risk assessments, and penetration testing drills.",
            "Formulate safety guidelines and conduct training to promote security awareness."
        ],
        requirements: [
            "Degree in Cyber Security, Computer Networks, or equivalent.",
            "5+ years of experience in SOC environments or cyber forensics.",
            "Relevant certifications: CISSP, CEH, CompTIA Security+, or GCIH.",
            "In-depth knowledge of network protocols, firewalls, and logging platforms.",
            "Strong analytical, investigation, and reporting capabilities."
        ]
    },
    {
        id: "job-030",
        title: "Project Accountant",
        company: "Group IMAR",
        logoLetters: "GI",
        location: "Doha, Qatar",
        category: "Finance",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "Competitive Package",
        postedDate: "1 week ago",
        featured: true,
        description: "Group IMAR is looking for an experienced Project Accountant to join our construction team in Qatar. The ideal candidate will manage project accounts, financial reporting, and cost control across large-scale building and infrastructure projects.",
        responsibilities: [
            "Manage project accounts and cost tracking.",
            "Prepare project financial reports and forecasts.",
            "Monitor budgets and project expenditures.",
            "Coordinate with project managers and finance teams.",
            "Ensure compliance with company policies and accounting standards."
        ],
        requirements: [
            "Bachelor's Degree in Accounting, Finance, or a related field. ACCA, CPA, or CMA qualifications are a plus.",
            "Minimum 7+ years of experience as a Project Accountant in the construction industry.",
            "Strong knowledge of project costing, budgeting, revenue recognition, and financial reporting.",
            "Experience monitoring project expenses, subcontractor payments, and cost control.",
            "Proficiency in ERP systems and Microsoft Excel.",
            "Candidates available in Qatar with transferable visa are preferred."
        ],
        applyEmail: "recruitment@groupimar.com.qa"
    },
    {
        id: "job-031",
        title: "IT Support Engineer",
        company: "AA Talent Hub",
        logoLetters: "AT",
        location: "Doha, Qatar",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "Competitive Package",
        postedDate: "6 days ago",
        featured: true,
        description: "Join a dynamic team at AA Talent Hub and take your IT career to the next level! We are seeking an IT Support Engineer in Qatar with strong troubleshooting, networking, and end-user support skills.",
        responsibilities: [
            "Provide technical support and troubleshooting to end users.",
            "Manage networking infrastructure and connectivity issues.",
            "Respond to IT tickets and resolve hardware/software problems.",
            "Maintain and update IT documentation and asset inventory.",
            "Coordinate with vendors for equipment and support escalations."
        ],
        requirements: [
            "Minimum 2 years of IT support experience.",
            "Strong troubleshooting, networking, and end-user support skills.",
            "IT certifications are an advantage (CompTIA, CCNA, etc.).",
            "Immediate joining preferred."
        ],
        applyEmail: "info@aatalenthub.com"
    },
    {
        id: "job-032",
        title: "IT Support Engineer (Onsite)",
        company: "BCIC Swiss GmbH",
        logoLetters: "BC",
        location: "Tokyo, Japan",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "Negotiable",
        postedDate: "6 days ago",
        featured: false,
        description: "BCIC Swiss GmbH (Best Connect International Company) is seeking a skilled and bilingual IT Support Engineer to join our onsite team in Tokyo, Japan. In this role, you will bridge the gap between technical operations and user support, ensuring seamless IT functionality for our corporate environment.",
        responsibilities: [
            "Provide day-to-day IT support to onsite staff in Tokyo.",
            "Troubleshoot hardware, software, and network-related issues.",
            "Communicate technical information effectively in both English and Japanese.",
            "Coordinate with international IT teams for escalations and system changes.",
            "Maintain logs, update tickets, and document IT processes."
        ],
        requirements: [
            "Strong technical troubleshooting and IT support skills.",
            "Bilingual proficiency in English and Japanese required.",
            "Experience working in a corporate IT environment.",
            "Proactive, client-facing personality with excellent communication skills."
        ]
    },
    {
        id: "job-033",
        title: "Head of Venue Technology Delivery",
        company: "INTALEQ",
        logoLetters: "IN",
        location: "Doha, Qatar",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "Competitive Package",
        postedDate: "6 days ago",
        featured: true,
        description: "INTALEQ is seeking a Head of Venue Technology Delivery to lead the delivery of venue technology projects across stadiums, venues, and major events, ensuring successful execution from planning and design through deployment and operational handover.",
        responsibilities: [
            "Lead end-to-end delivery of venue technology projects including ICT, AV, and ELV systems.",
            "Manage project planning, design reviews, and deployment schedules.",
            "Coordinate with venue stakeholders, contractors, and technology vendors.",
            "Ensure operational handover and post-deployment support.",
            "Oversee budget, risk, and quality management for all venue technology workstreams."
        ],
        requirements: [
            "Demonstrated experience in venue technology, large-scale ICT/AV/ELV projects.",
            "Proven project delivery and sports venue environment background.",
            "Strong leadership, planning, and cross-functional coordination skills."
        ],
        applyEmail: "careers@intaleq.qa"
    },
    {
        id: "job-034",
        title: "Project Low Current Engineer",
        company: "O&M Company Saudi Arabia",
        logoLetters: "OM",
        location: "Dammam, Saudi Arabia",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "Attractive Salary + Housing + Transport",
        postedDate: "5 days ago",
        featured: false,
        description: "A leading Operation & Maintenance Company in Saudi Arabia is hiring a Project Low Current Engineer in Dammam to design and oversee low-current systems including ICT, CCTV, access control, fire alarms, sound and PA, and BMS systems.",
        responsibilities: [
            "Design, plan, and develop low-current systems including ICT, CCTV, access control, fire alarms, sound/PA, and BMS.",
            "Create detailed low-current layouts, system diagrams, and schematic drawings.",
            "Work with architects, contractors, and clients to develop customized system solutions.",
            "Review shop drawings and technical submittals.",
            "Supervise installation and commissioning of low-current systems on site."
        ],
        requirements: [
            "Bachelor's degree in Electrical Engineering.",
            "3 to 5+ years of relevant experience in low-current/ELV systems.",
            "Design experience with ICT, CCTV, fire alarms, access control, PA, and BMS systems.",
            "Proficiency in system diagram and schematic drawing tools.",
            "Benefits: Accommodation, Transportation, Residence Permit, Medical Insurance provided."
        ]
    },
    {
        id: "job-035",
        title: "Senior Site Engineer – Life Safety & Communication",
        company: "MagnaTechs",
        logoLetters: "MG",
        location: "Amman, Jordan",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "Competitive + Relocation Support",
        postedDate: "5 days ago",
        featured: true,
        description: "MagnaTechs is looking for a talented Senior Site Engineer to lead the delivery of life safety and communication systems across projects in Amman, Jordan. The role requires hands-on expertise in PA/VA, fire alarm, CCTV, and access control systems.",
        responsibilities: [
            "Lead site delivery of life safety and communication systems (PA/VA, fire alarm, CCTV, access control).",
            "Supervise installation, testing, and commissioning on site.",
            "Read and interpret technical drawings and project specifications.",
            "Coordinate with client, consultants, and subcontractors.",
            "Prepare technical reports and as-built documentation."
        ],
        requirements: [
            "Bachelor's degree in Electrical Engineering.",
            "5–8 years of experience in life safety and communication systems.",
            "Bosch Public Address System Certification (mandatory).",
            "Strong site supervision and commissioning skills."
        ],
        applyEmail: "careers@magnatechs.com"
    },
    {
        id: "job-036",
        title: "Senior BMS / ELV Engineer",
        company: "Qatar Construction Firm",
        logoLetters: "QC",
        location: "Doha, Qatar",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "Competitive Package",
        postedDate: "5 days ago",
        featured: true,
        description: "A leading Qatar-based firm is seeking a highly experienced Senior BMS/ELV Engineer to design, commission, and oversee Building Management Systems and Extra Low Voltage systems including CCTV, access control, fire alarm, PA, and structured cabling on major construction projects.",
        responsibilities: [
            "Design, commission, and oversee BMS and ELV systems including CCTV, access control, fire alarm, PA, and structured cabling.",
            "Review and approve BMS/ELV drawings, shop drawings, submittals, and technical specifications.",
            "Coordinate with MEP contractors, consultants, and client representatives.",
            "Conduct site inspections, testing, and commissioning; prepare handover documentation.",
            "Ensure system integration and compliance with project specifications."
        ],
        requirements: [
            "Bachelor's Degree in Electrical Engineering or related discipline.",
            "Minimum 10 years of relevant BMS/ELV experience.",
            "Currently based in Doha, Qatar.",
            "Strong knowledge of BMS, CCTV, access control, fire alarm, PA systems.",
            "Deep experience with MEP coordination, submittals, and commissioning processes."
        ]
    },
    {
        id: "job-037",
        title: "Recruiter Intern",
        company: "CandidZone",
        logoLetters: "CZ",
        location: "Doha, Qatar",
        category: "Sales & Marketing",
        jobType: "Full-time",
        experience: "Entry Level",
        salary: "Entry Package",
        postedDate: "5 days ago",
        featured: false,
        description: "CandidZone is looking for a motivated Recruiter Intern to join our HR team in Qatar. This is a great opportunity for recent graduates to gain hands-on experience in recruitment, candidate sourcing, and HR coordination.",
        responsibilities: [
            "Assist in sourcing candidates through job portals and social media.",
            "Screen CVs and shortlist suitable candidates.",
            "Coordinate interviews and follow up with candidates.",
            "Maintain candidate database and update records.",
            "Support the recruitment team with daily HR activities."
        ],
        requirements: [
            "Recent graduate or currently pursuing a degree in HR, Business Administration, or related field.",
            "Strong communication and interpersonal skills.",
            "Basic knowledge of recruitment processes is an advantage.",
            "Proficient in MS Office tools.",
            "WhatsApp: 33166511 for quick contact."
        ],
        applyEmail: "f.zaina@candidzone.net"
    },
    {
        id: "job-038",
        title: "Security Systems & ELV – Multiple Roles",
        company: "Propel Consult",
        logoLetters: "PC",
        location: "Riyadh / Jeddah, Saudi Arabia",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "Competitive Package",
        postedDate: "4 days ago",
        featured: true,
        description: "Propel Consult is hiring for a global cybersecurity and compliance firm for multiple roles in Security Systems and ELV (Extra Low Voltage) Solutions across Riyadh and Jeddah, Saudi Arabia. Open positions include Project Manager, Assistant Manager, Admin Officer, HSE Officer, and Warehouse In-Charge.",
        responsibilities: [
            "Lead or support Security Systems and ELV project delivery across KSA.",
            "Manage project timelines, team coordination, and client communication.",
            "Oversee CCTV, access control, networking, structured cabling, and intrusion detection installations.",
            "Ensure administrative, HSE, and warehouse operations run smoothly.",
            "Coordinate with procurement and logistics for materials and equipment."
        ],
        requirements: [
            "Previous experience in Security Systems and ELV projects (CCTV, Access Control, Networking, Structured Cabling, IDS).",
            "Multiple positions available: Project Manager, Assistant Manager, Admin/Gatepass Officer, HSE Officer, Warehouse In-Charge.",
            "Strong communication, coordination, and problem-solving skills.",
            "Ability to work in project-based environments."
        ],
        applyEmail: "fathimath@propelconsult.com"
    },
    {
        id: "job-039",
        title: "Civil Site Engineer",
        company: "Al Habtoor Engineering",
        logoLetters: "AH",
        location: "Dubai, UAE",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 10,000 - 14,000",
        postedDate: "2 days ago",
        featured: true,
        description: "Al Habtoor Engineering is seeking a Civil Site Engineer to oversee construction activities for high-rise residential and commercial developments across Dubai. You will be responsible for daily site supervision, quality control, and coordination with the project management team.",
        responsibilities: [
            "Supervise daily civil construction activities on site.",
            "Ensure works comply with approved drawings, specifications, and safety standards.",
            "Coordinate with MEP, structural, and finishing subcontractors.",
            "Prepare daily progress reports and site inspection records.",
            "Attend site meetings with the main contractor and client."
        ],
        requirements: [
            "Bachelor's degree in Civil Engineering.",
            "3–6 years of experience in civil construction site supervision in the UAE.",
            "Strong knowledge of structural and finishing works.",
            "Proficient in AutoCAD and MS Project.",
            "Good command of written and spoken English; Arabic is a plus."
        ]
    },
    {
        id: "job-040",
        title: "Electrical Engineer – Power Systems",
        company: "Saudi Electricity Solutions",
        logoLetters: "SE",
        location: "Riyadh, Saudi Arabia",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "SAR 12,000 - 16,000",
        postedDate: "3 days ago",
        featured: false,
        description: "Saudi Electricity Solutions is hiring an Electrical Engineer specialising in power systems for large-scale infrastructure projects across Riyadh. The successful candidate will design, install, and commission HV/LV systems and transformers.",
        responsibilities: [
            "Design and review HV/LV power distribution systems and single-line diagrams.",
            "Prepare load calculations, cable sizing, and earthing designs.",
            "Coordinate with SCECO and regulatory bodies for project approvals.",
            "Supervise electrical installation works and commissioning activities.",
            "Prepare technical submittals and equipment datasheets."
        ],
        requirements: [
            "Bachelor's degree in Electrical Engineering.",
            "Minimum 4 years of experience in power systems design or site work in KSA.",
            "Experience with HV switchgear, transformers, and UPS systems.",
            "Familiarity with Saudi Aramco, SEC, and SASO standards is an advantage.",
            "Saudi driving license is preferred."
        ]
    },
    {
        id: "job-041",
        title: "QA/QC Inspector – Structural Steel",
        company: "Gulf Inspection Services",
        logoLetters: "GS",
        location: "Manama, Bahrain",
        category: "Engineering",
        jobType: "Contract",
        experience: "Mid Level",
        salary: "BHD 1,200 - 1,600",
        postedDate: "1 day ago",
        featured: false,
        description: "Gulf Inspection Services is looking for a QA/QC Inspector specialising in structural steel fabrication and erection for ongoing marine and industrial projects in Bahrain.",
        responsibilities: [
            "Inspect and document structural steel fabrication and weld quality.",
            "Review and verify material test certificates and weld procedure qualifications.",
            "Issue inspection test records (ITRs) and non-conformance reports (NCRs).",
            "Coordinate with third-party inspection agencies and client representatives.",
            "Ensure works meet project specifications, codes (AWS, AISC), and safety standards."
        ],
        requirements: [
            "Bachelor's degree in Mechanical or Civil Engineering.",
            "CSWIP 3.1 or AWS CWI welding inspector certification (mandatory).",
            "Minimum 5 years of QA/QC experience in structural steel projects.",
            "Strong knowledge of AWS D1.1, AISC, and ASME codes.",
            "Experience with marine or oil & gas projects is a strong advantage."
        ]
    },
    {
        id: "job-042",
        title: "HSE Manager",
        company: "Oman Construction Group",
        logoLetters: "OC",
        location: "Muscat, Oman",
        category: "Safety",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "OMR 1,800 - 2,500",
        postedDate: "4 days ago",
        featured: true,
        description: "Oman Construction Group requires an experienced HSE Manager to lead all health, safety, and environmental activities across multiple building construction projects in Muscat. You will implement and maintain an ISO 45001-compliant HSE Management System.",
        responsibilities: [
            "Develop, implement, and maintain the project HSE Management Plan.",
            "Conduct regular site safety audits, risk assessments, and toolbox talks.",
            "Investigate incidents, near-misses, and hazardous conditions; implement corrective actions.",
            "Liaise with the Ministry of Manpower and regulatory bodies on HSE compliance.",
            "Train site staff and subcontractors on HSE policies and emergency procedures."
        ],
        requirements: [
            "NEBOSH International Diploma or equivalent HSE qualification.",
            "Minimum 10 years of HSE experience in construction, with 3+ years as HSE Manager.",
            "Strong knowledge of ISO 45001, ISO 14001, and Oman labor regulations.",
            "Experience implementing HSE Management Systems on multi-disciplinary projects.",
            "Excellent leadership, communication, and reporting skills."
        ]
    },
    {
        id: "job-043",
        title: "HSE Officer – Construction",
        company: "RedLine Contracting",
        logoLetters: "RL",
        location: "Kuwait City, Kuwait",
        category: "Safety",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "KWD 650 - 900",
        postedDate: "2 days ago",
        featured: false,
        description: "RedLine Contracting is seeking an HSE Officer to implement safety procedures and ensure a safe working environment across construction sites in Kuwait City. The role involves daily site inspections, permit-to-work management, and safety training coordination.",
        responsibilities: [
            "Conduct daily site safety inspections and report hazardous conditions.",
            "Issue and monitor work permits (PTW) and method statements.",
            "Deliver toolbox talks and safety induction training for new workers.",
            "Assist with incident investigation and prepare safety reports.",
            "Ensure PPE compliance and enforce site safety rules."
        ],
        requirements: [
            "NEBOSH IGC or equivalent safety qualification.",
            "Minimum 3 years of HSE experience on construction sites in the GCC.",
            "Good knowledge of Kuwait MEW and HSE regulations.",
            "Strong communication skills; Arabic language is an added advantage.",
            "Immediate availability preferred."
        ]
    },
    {
        id: "job-044",
        title: "Senior Quantity Surveyor",
        company: "Turner & Townsend Gulf",
        logoLetters: "TT",
        location: "Dubai, UAE",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "AED 22,000 - 28,000",
        postedDate: "1 day ago",
        featured: true,
        description: "Turner & Townsend is hiring a Senior Quantity Surveyor to join our project management consultancy team in Dubai, working on prestigious hospitality, commercial, and mixed-use developments.",
        responsibilities: [
            "Prepare cost plans, estimates, and bills of quantities for all project stages.",
            "Manage tender processes: prepare documents, evaluate submissions, and negotiate.",
            "Administer contracts (FIDIC, NEC) and process contractor valuations and claims.",
            "Provide monthly cost reports and cash flow forecasts to clients.",
            "Lead junior QS staff and manage client relationships."
        ],
        requirements: [
            "Degree in Quantity Surveying or Civil Engineering; MRICS/RICS qualification preferred.",
            "Minimum 8 years of QS experience, with at least 3 years in the UAE.",
            "Strong experience with FIDIC and NEC contract administration.",
            "Proficiency in CostX, Buildsoft, or similar estimating software.",
            "Experience on high-value commercial or hospitality projects in the GCC."
        ]
    },
    {
        id: "job-045",
        title: "Cloud Infrastructure Architect",
        company: "Fujitsu Middle East",
        logoLetters: "FM",
        location: "Dubai, UAE",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "AED 25,000 - 32,000",
        postedDate: "1 day ago",
        featured: true,
        description: "Fujitsu Middle East is looking for a Cloud Infrastructure Architect to design, build, and manage enterprise cloud environments for large-scale clients across banking, government, and telecom sectors in the UAE.",
        responsibilities: [
            "Design multi-cloud and hybrid cloud architectures (AWS, Azure, GCP).",
            "Lead cloud migration projects from on-premise data centers.",
            "Define infrastructure-as-code (IaC) frameworks using Terraform and Ansible.",
            "Ensure cloud environments meet security, compliance, and performance SLAs.",
            "Provide technical pre-sales support and client workshops."
        ],
        requirements: [
            "Bachelor's degree in Computer Science, IT, or Telecommunications.",
            "7+ years of cloud infrastructure experience; AWS Solutions Architect Professional or Azure Expert level certification preferred.",
            "Strong experience with Kubernetes, Docker, and CI/CD pipelines.",
            "Solid understanding of cloud security, networking, and cost optimization.",
            "Excellent client-facing communication and presentation skills."
        ]
    },
    {
        id: "job-046",
        title: "Cybersecurity Analyst",
        company: "Abu Dhabi National Energy (TAQA)",
        logoLetters: "TQ",
        location: "Abu Dhabi, UAE",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 16,000 - 21,000",
        postedDate: "3 days ago",
        featured: true,
        description: "TAQA is seeking a Cybersecurity Analyst to protect critical energy infrastructure from cyber threats. You will monitor security events, respond to incidents, and improve the organization's overall security posture.",
        responsibilities: [
            "Monitor SIEM platform for security alerts and perform triage.",
            "Investigate and respond to cybersecurity incidents and breaches.",
            "Conduct vulnerability assessments and coordinate patching cycles.",
            "Perform threat intelligence analysis and produce actionable reports.",
            "Support compliance audits for IEC 62443, NIST, and NESA standards."
        ],
        requirements: [
            "Bachelor's degree in Cybersecurity, Computer Science, or IT.",
            "3–5 years of SOC or cybersecurity analyst experience.",
            "Hands-on experience with SIEM tools (Splunk, IBM QRadar, or Microsoft Sentinel).",
            "CEH, CompTIA Security+, or GIAC certification is preferred.",
            "Experience in OT/ICS security is a strong advantage."
        ]
    },
    {
        id: "job-047",
        title: "Full Stack Developer (React / Node.js)",
        company: "Careem Networks",
        logoLetters: "CR",
        location: "Dubai, UAE",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 18,000 - 24,000",
        postedDate: "2 days ago",
        featured: false,
        description: "Careem is hiring a Full Stack Developer to join the product engineering team. You will build scalable features for our super-app platform used by millions of users across the MENA region.",
        responsibilities: [
            "Design and develop front-end user interfaces using React.js.",
            "Build RESTful APIs and microservices using Node.js and Express.",
            "Write clean, tested, and well-documented code.",
            "Collaborate with product managers, designers, and QA engineers.",
            "Optimise application performance and resolve production issues."
        ],
        requirements: [
            "Bachelor's degree in Software Engineering or Computer Science.",
            "3+ years of full-stack development experience with React and Node.js.",
            "Experience with PostgreSQL, MongoDB, and Redis.",
            "Familiar with Docker, Kubernetes, and AWS deployment.",
            "Strong problem-solving skills and agile development mindset."
        ]
    },
    {
        id: "job-048",
        title: "Data Engineer – Analytics Platform",
        company: "stc (Saudi Telecom Company)",
        logoLetters: "ST",
        location: "Riyadh, Saudi Arabia",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "SAR 18,000 - 24,000",
        postedDate: "3 days ago",
        featured: false,
        description: "stc is seeking a Data Engineer to build and maintain scalable data pipelines for our analytics platform. You will work with large datasets from telecom networks, CRM systems, and billing engines to power business intelligence dashboards.",
        responsibilities: [
            "Design and build robust ETL/ELT pipelines using Apache Spark and Airflow.",
            "Develop data lake and data warehouse architectures on AWS or Azure.",
            "Collaborate with data scientists and BI teams to deliver data products.",
            "Monitor data quality, resolve pipeline failures, and optimize query performance.",
            "Document data models, pipelines, and governance policies."
        ],
        requirements: [
            "Bachelor's degree in Computer Science, Data Engineering, or Statistics.",
            "3+ years of experience building data pipelines and warehouses.",
            "Proficiency in Python, SQL, Spark, and Airflow.",
            "Hands-on experience with cloud data platforms (AWS Glue, Azure Data Factory, or GCP Dataflow).",
            "Experience in telecom or FMCG data environments is a plus."
        ]
    },
    {
        id: "job-049",
        title: "Registered Nurse – ICU",
        company: "Hamad Medical Corporation",
        logoLetters: "HM",
        location: "Doha, Qatar",
        category: "Healthcare",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "QAR 9,000 - 12,000 + Benefits",
        postedDate: "1 day ago",
        featured: true,
        description: "Hamad Medical Corporation is recruiting experienced ICU Registered Nurses to join our critical care teams in Doha. Competitive tax-free salary, furnished accommodation, and annual flights are provided.",
        responsibilities: [
            "Assess, plan, implement, and evaluate care for critically ill patients.",
            "Operate and monitor life-support equipment including ventilators and CRRT.",
            "Administer IV medications and manage complex pharmacological regimens.",
            "Collaborate with intensivists, respiratory therapists, and allied health teams.",
            "Educate patients and families on clinical procedures and discharge planning."
        ],
        requirements: [
            "Bachelor's degree in Nursing (BSN) or Diploma with equivalent experience.",
            "Minimum 2 years of post-registration ICU experience in an accredited hospital.",
            "Valid nursing license from country of origin; QNC registration support provided.",
            "BLS and ACLS certification required; CCRN is an advantage.",
            "Strong English communication skills; Arabic is a plus."
        ]
    },
    {
        id: "job-050",
        title: "Pharmacist – Clinical",
        company: "King Faisal Specialist Hospital",
        logoLetters: "KF",
        location: "Riyadh, Saudi Arabia",
        category: "Healthcare",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "SAR 14,000 - 18,000",
        postedDate: "4 days ago",
        featured: false,
        description: "King Faisal Specialist Hospital & Research Centre is seeking a Clinical Pharmacist to join the pharmacy team and provide clinical pharmaceutical care to inpatient and outpatient populations.",
        responsibilities: [
            "Review and verify physician medication orders for appropriateness, safety, and efficacy.",
            "Conduct medication therapy management and pharmacokinetics consultations.",
            "Participate in ward rounds with medical teams.",
            "Counsel patients on proper medication use, side effects, and adherence.",
            "Assist in clinical research, pharmacovigilance, and formulary management."
        ],
        requirements: [
            "B.Pharm or Pharm.D degree from an accredited university.",
            "Minimum 3 years of clinical pharmacy experience in a hospital setting.",
            "Valid pharmacy license; SCFHS registration support provided.",
            "Strong pharmacotherapeutics knowledge and patient counselling skills.",
            "Hospital clinical experience in oncology, critical care, or cardiology is a plus."
        ]
    },
    {
        id: "job-051",
        title: "Radiologist",
        company: "Aster DM Healthcare",
        logoLetters: "AD",
        location: "Dubai, UAE",
        category: "Healthcare",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "AED 35,000 - 50,000",
        postedDate: "2 days ago",
        featured: true,
        description: "Aster DM Healthcare is hiring a Consultant Radiologist for our flagship hospital in Dubai. You will provide specialist diagnostic radiology services covering CT, MRI, ultrasound, fluoroscopy, and interventional procedures.",
        responsibilities: [
            "Interpret and report diagnostic imaging studies (CT, MRI, X-Ray, Ultrasound).",
            "Perform fluoroscopy-guided and ultrasound-guided procedures.",
            "Collaborate with clinicians on complex case discussions and multidisciplinary team meetings.",
            "Supervise radiology technologists and junior radiology staff.",
            "Ensure radiation safety protocols and DHA compliance standards are met."
        ],
        requirements: [
            "MBBS + specialty qualification (FRCR, ABR, or equivalent).",
            "Minimum 5 years of post-fellowship clinical radiology experience.",
            "DHA or MOH license required; relicensing support provided.",
            "Strong experience with PACS/RIS systems.",
            "Subspecialty interest in MSK, Neuro, or Interventional Radiology is a plus."
        ]
    },
    {
        id: "job-052",
        title: "Hotel General Manager",
        company: "Rotana Hotels & Resorts",
        logoLetters: "RH",
        location: "Abu Dhabi, UAE",
        category: "Hospitality",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "AED 40,000 - 55,000 + Benefits",
        postedDate: "3 days ago",
        featured: true,
        description: "Rotana Hotels & Resorts is seeking an accomplished Hotel General Manager to lead a landmark 5-star property in Abu Dhabi. The successful candidate will drive revenue performance, guest satisfaction, and team development across all departments.",
        responsibilities: [
            "Provide strategic leadership across all hotel operations (Rooms, F&B, Finance, HR, Sales).",
            "Drive RevPAR, GOPPAR, and guest satisfaction KPIs.",
            "Manage relationships with owners, asset management companies, and OTAs.",
            "Lead talent development and succession planning for department heads.",
            "Ensure full compliance with HAAD, civil defense, and Rotana brand standards."
        ],
        requirements: [
            "Bachelor's degree in Hospitality Management or Business; MBA is an advantage.",
            "Minimum 15 years of hospitality experience, with 5+ years as Hotel GM in the GCC.",
            "Proven track record of revenue growth and guest satisfaction improvement.",
            "Strong financial acumen and P&L management experience.",
            "Excellent leadership, stakeholder management, and problem-resolution skills."
        ]
    },
    {
        id: "job-053",
        title: "Executive Chef",
        company: "Jumeirah Group",
        logoLetters: "JG",
        location: "Dubai, UAE",
        category: "Hospitality",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "AED 22,000 - 30,000",
        postedDate: "1 day ago",
        featured: true,
        description: "Jumeirah Group is looking for an innovative Executive Chef to lead culinary operations across multiple F&B outlets within one of our iconic Dubai properties. You will craft exceptional dining experiences and lead a talented kitchen brigade.",
        responsibilities: [
            "Oversee all kitchen operations: menu development, quality control, and cost management.",
            "Lead, mentor, and train a brigade of 80+ culinary professionals.",
            "Collaborate with F&B Director and outlet managers on concept development.",
            "Manage food cost, wastage reduction, and vendor purchasing.",
            "Ensure HACCP compliance and maintain the highest food safety standards."
        ],
        requirements: [
            "Culinary degree from a recognised hospitality institution.",
            "Minimum 10 years of culinary experience, with 3+ years as Executive Chef in a luxury hotel.",
            "Strong expertise in Mediterranean, Asian, or Contemporary cuisine.",
            "Proven record of Michelin-starred or award-winning restaurant management.",
            "Creative, passionate, and commercially driven leadership style."
        ]
    },
    {
        id: "job-054",
        title: "Front Office Manager",
        company: "Marriott International",
        logoLetters: "MI",
        location: "Doha, Qatar",
        category: "Hospitality",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "QAR 8,000 - 11,000",
        postedDate: "2 days ago",
        featured: false,
        description: "Marriott International is hiring a Front Office Manager for a flagship property in Doha. You will lead the front desk, concierge, bell desk, and reservations teams to deliver an outstanding arrival and departure experience.",
        responsibilities: [
            "Manage daily Front Office operations and team scheduling.",
            "Drive upselling programs and manage room revenue contribution.",
            "Handle VIP arrivals, guest complaints, and escalations professionally.",
            "Ensure Marriott brand standards and Forbes Travel Guide criteria are met.",
            "Collaborate with Housekeeping, Reservations, and Revenue Management teams."
        ],
        requirements: [
            "Bachelor's degree in Hospitality Management or related field.",
            "Minimum 4 years of front office experience, with 2 years at management level.",
            "Experience with Opera PMS and Marriott's Bonvoy programme.",
            "Strong leadership and interpersonal skills with a service-driven attitude.",
            "GCC hotel experience is preferred; Arabic language is an asset."
        ]
    },
    {
        id: "job-055",
        title: "Sales Manager – B2B Corporate",
        company: "GEMS Education",
        logoLetters: "GE",
        location: "Dubai, UAE",
        category: "Sales & Marketing",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 14,000 - 18,000 + Commission",
        postedDate: "1 day ago",
        featured: false,
        description: "GEMS Education is recruiting a B2B Sales Manager to develop and manage corporate school enrolment partnerships across UAE businesses, multinational companies, and government entities in Dubai.",
        responsibilities: [
            "Identify, pursue, and close corporate partnerships with HR and C-Suite decision makers.",
            "Manage a pipeline of 100+ corporate accounts across various industries.",
            "Deliver presentations and school tours to potential corporate clients.",
            "Achieve quarterly enrolment revenue targets.",
            "Collaborate with the marketing team on B2B campaigns and events."
        ],
        requirements: [
            "Bachelor's degree in Business, Marketing, or a related field.",
            "Minimum 4 years of B2B sales experience, ideally in education or professional services.",
            "Strong network within UAE corporate and multinational business communities.",
            "Proven track record of meeting and exceeding revenue targets.",
            "Excellent presentation, negotiation, and CRM management skills."
        ]
    },
    {
        id: "job-056",
        title: "Digital Marketing Manager",
        company: "Chalhoub Group",
        logoLetters: "CG",
        location: "Dubai, UAE",
        category: "Sales & Marketing",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 16,000 - 22,000",
        postedDate: "2 days ago",
        featured: true,
        description: "Chalhoub Group, the Middle East's leading luxury retail partner, is hiring a Digital Marketing Manager to lead performance marketing, social media strategy, and e-commerce growth for our luxury fashion and beauty brands.",
        responsibilities: [
            "Plan and execute paid digital campaigns across Google, Meta, TikTok, and Snapchat.",
            "Own the SEO, SEM, and content strategy for brand websites and e-commerce platforms.",
            "Manage influencer marketing partnerships and brand collaborations.",
            "Analyse and report on campaign KPIs: ROAS, CAC, CTR, conversion rates.",
            "Lead a team of digital specialists and coordinate with creative and e-commerce teams."
        ],
        requirements: [
            "Bachelor's degree in Marketing, Business, or Communications.",
            "5+ years of digital marketing experience; luxury retail or e-commerce background preferred.",
            "Expertise in Google Analytics 4, Meta Ads Manager, and TikTok Business Center.",
            "Strong data analysis skills; experience with Tableau or Looker is a plus.",
            "Creative, commercially minded, and knowledgeable about GCC consumer behaviour."
        ]
    },
    {
        id: "job-057",
        title: "Procurement Manager – Construction",
        company: "Arabtec Construction",
        logoLetters: "AC",
        location: "Abu Dhabi, UAE",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "AED 20,000 - 26,000",
        postedDate: "3 days ago",
        featured: false,
        description: "Arabtec Construction is seeking an experienced Procurement Manager to lead the sourcing, tendering, and purchasing activities for major building and infrastructure projects in Abu Dhabi.",
        responsibilities: [
            "Develop and implement procurement strategies aligned with project budgets.",
            "Manage the end-to-end tendering process: RFQ, bid evaluation, and award.",
            "Negotiate commercial terms with suppliers, subcontractors, and vendors.",
            "Build and maintain a qualified contractor and supplier database.",
            "Track procurement schedules and coordinate with project, finance, and legal teams."
        ],
        requirements: [
            "Bachelor's degree in Engineering, Business, or Supply Chain Management; CIPS preferred.",
            "Minimum 8 years of procurement experience in construction, with 3+ years in a managerial role.",
            "Strong knowledge of FIDIC subcontracts and UAE commercial regulations.",
            "Excellent negotiation, vendor management, and analytical skills.",
            "Experience with ERP procurement modules (SAP, Oracle, or Maximo)."
        ]
    },
    {
        id: "job-058",
        title: "Structural Design Engineer",
        company: "Arup Middle East",
        logoLetters: "AM",
        location: "Dubai, UAE",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 16,000 - 22,000",
        postedDate: "Today",
        featured: true,
        description: "Arup Middle East invites applications from talented Structural Design Engineers to join the structures team in Dubai. You will work on a diverse portfolio of iconic buildings, bridges, and infrastructure projects across the GCC.",
        responsibilities: [
            "Perform structural analysis and design using ETABS, SAFE, STAAD.Pro, or TEKLA.",
            "Prepare and review structural design calculations and drawings.",
            "Coordinate designs with architects, MEP engineers, and civil teams.",
            "Attend design review meetings and client workshops.",
            "Liaise with contractors during construction and review RFIs and shop drawings."
        ],
        requirements: [
            "Bachelor's or Master's degree in Structural or Civil Engineering.",
            "3–7 years of structural design experience in the GCC; consultant background preferred.",
            "Proficiency in ETABS, SAFE, STAAD.Pro, and Revit Structure.",
            "Chartered Engineer (CEng, PE) status or working towards it is an advantage.",
            "Experience with concrete, steel, and post-tensioned structural systems."
        ]
    },
    {
        id: "job-059",
        title: "Planning Engineer",
        company: "Galfar Engineering & Contracting",
        logoLetters: "GA",
        location: "Muscat, Oman",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "OMR 1,400 - 1,900",
        postedDate: "Today",
        featured: true,
        description: "Galfar Engineering & Contracting is seeking a Planning Engineer to manage project scheduling and progress monitoring for road infrastructure and civil construction projects in Oman.",
        responsibilities: [
            "Develop, update, and maintain project baseline schedules using Primavera P6.",
            "Prepare monthly progress reports, lookaheads, and delay analysis.",
            "Coordinate with site engineers and project managers on schedule deviations.",
            "Produce S-curves, manpower histograms, and material procurement schedules.",
            "Support EOT (Extension of Time) claims and prepare supporting documentation."
        ],
        requirements: [
            "Bachelor's degree in Civil or Structural Engineering.",
            "4–7 years of planning experience in civil/infrastructure projects.",
            "Proficiency in Primavera P6 and MS Project.",
            "Experience on road, highway, or utilities projects in the GCC.",
            "Strong analytical and written reporting skills."
        ],
        applyEmail: "careers@galfar.com"
    },
    {
        id: "job-060",
        title: "MEP Coordinator",
        company: "Drake & Scull International",
        logoLetters: "DS",
        location: "Dubai, UAE",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 12,000 - 16,000",
        postedDate: "1 day ago",
        featured: false,
        description: "Drake & Scull International is hiring a MEP Coordinator to manage the coordination of mechanical, electrical, and plumbing systems for large mixed-use development projects in Dubai.",
        responsibilities: [
            "Coordinate MEP designs between architects, structural engineers, and MEP consultants.",
            "Review and manage BIM model clash detection reports using Navisworks or Revit.",
            "Attend design coordination meetings and track action items.",
            "Review subcontractor shop drawings and equipment submittals.",
            "Manage material approval process and procurement schedules."
        ],
        requirements: [
            "Bachelor's degree in Mechanical or Electrical Engineering.",
            "4+ years of MEP coordination experience on high-rise or commercial projects.",
            "Proficiency in AutoCAD, Revit MEP, and Navisworks.",
            "Experience with BIM-based coordination workflows.",
            "Strong coordination and communication skills."
        ],
        applyEmail: "hr@drakescull.com"
    },
    {
        id: "job-061",
        title: "Piping Design Engineer",
        company: "Technip Energies",
        logoLetters: "TE",
        location: "Doha, Qatar",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "QAR 18,000 - 24,000",
        postedDate: "2 days ago",
        featured: true,
        description: "Technip Energies is looking for a Piping Design Engineer to join our Doha engineering centre supporting LNG and offshore oil & gas projects. You will produce detailed piping layouts, isometrics, and stress analysis reports.",
        responsibilities: [
            "Develop piping layouts, P&IDs, and isometric drawings for LNG and offshore projects.",
            "Perform pipe stress analysis using CAESAR II or AutoPIPE.",
            "Produce material take-offs (MTO), pipe support designs, and specifications.",
            "Review vendor documents and piping subcontractor deliverables.",
            "Liaise with process, structural, and instrumentation disciplines."
        ],
        requirements: [
            "Bachelor's degree in Mechanical Engineering.",
            "Minimum 7 years of piping design experience in oil & gas or LNG projects.",
            "Proficiency in PDMS, E3D, or SP3D piping design software.",
            "Experience with CAESAR II pipe stress analysis.",
            "Knowledge of ASME B31.3, ASME VIII, and NFPA codes."
        ],
        applyEmail: "recruitment.qatar@technipfmc.com"
    },
    {
        id: "job-062",
        title: "Safety Officer – Oil & Gas",
        company: "Qatar Energy (QatarEnergy)",
        logoLetters: "QE",
        location: "Doha, Qatar",
        category: "Safety",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "QAR 10,000 - 14,000",
        postedDate: "1 day ago",
        featured: true,
        description: "QatarEnergy is seeking a Safety Officer to support HSSE activities across onshore and offshore oil & gas facilities. The role involves implementing safety programs, conducting audits, and ensuring compliance with QatarEnergy HSE standards.",
        responsibilities: [
            "Conduct daily HSE inspections and audits on operational facilities.",
            "Issue Permit to Work (PTW) and monitor safe work conditions.",
            "Deliver safety training sessions and toolbox talks to operations staff.",
            "Investigate incidents and near misses; prepare HSE reports.",
            "Maintain HSE documentation, risk registers, and emergency response plans."
        ],
        requirements: [
            "NEBOSH IGC or NEBOSH Oil & Gas Certificate.",
            "Minimum 4 years of HSE experience in oil & gas or petrochemical facilities.",
            "Knowledge of QatarEnergy HSE standards and Qatar regulations.",
            "IOSH membership or working towards Chartered status.",
            "Experience with PTW systems and incident investigation (ICAM, TapRooT, or equivalent)."
        ],
        applyEmail: "careers@qatarenergy.qa"
    },
    {
        id: "job-063",
        title: "SCADA / Control Systems Engineer",
        company: "ABB Ltd. Middle East",
        logoLetters: "AB",
        location: "Abu Dhabi, UAE",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "AED 20,000 - 27,000",
        postedDate: "2 days ago",
        featured: true,
        description: "ABB Ltd. Middle East is recruiting a SCADA / Control Systems Engineer to design, integrate, and commission automation and control systems for utilities and oil & gas clients across Abu Dhabi.",
        responsibilities: [
            "Design and programme SCADA systems including HMI configuration and PLC logic.",
            "Develop functional design specifications (FDS) and software design specifications (SDS).",
            "Commission control systems on client sites including FAT and SAT testing.",
            "Support field troubleshooting and system upgrades.",
            "Integrate SCADA with DCS, historian, and enterprise systems."
        ],
        requirements: [
            "Bachelor's degree in Electrical, Electronic, or Control & Instrumentation Engineering.",
            "Minimum 6 years of SCADA/DCS engineering experience.",
            "Proficiency with Wonderware, iFIX, INTOUCH, or ABB Symphony SCADA platforms.",
            "Strong PLC programming skills (Siemens, Allen Bradley, or ABB).",
            "Experience with IEC 61511 functional safety standards is an advantage."
        ],
        applyEmail: "jobs.ae@abb.com"
    },
    {
        id: "job-064",
        title: "Network & Infrastructure Engineer",
        company: "du Telecom (Emirates Integrated Telecommunications)",
        logoLetters: "DU",
        location: "Dubai, UAE",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 16,000 - 20,000",
        postedDate: "1 day ago",
        featured: false,
        description: "du Telecom is hiring a Network & Infrastructure Engineer to manage and optimise core network infrastructure supporting enterprise and carrier-grade telecommunications services across the UAE.",
        responsibilities: [
            "Design, configure, and maintain enterprise and carrier IP networks (BGP, OSPF, MPLS).",
            "Manage SD-WAN and network virtualisation (NFV/SDN) deployments.",
            "Perform capacity planning, performance monitoring, and network optimisation.",
            "Coordinate with vendors (Cisco, Juniper, Nokia) for hardware upgrades.",
            "Provide Level 3 technical support for critical network incidents."
        ],
        requirements: [
            "Bachelor's degree in Telecommunications, Computer Science, or Networking.",
            "4+ years of network engineering experience in telecom or ISP environments.",
            "Cisco CCNP or Juniper JNCIP certification preferred.",
            "Strong knowledge of BGP, OSPF, MPLS, and SD-WAN.",
            "Experience with network management tools (SolarWinds, PRTG, or Zabbix)."
        ],
        applyEmail: "careers@du.ae"
    },
    {
        id: "job-065",
        title: "SAP S/4HANA Functional Consultant – FICO",
        company: "Deloitte Middle East",
        logoLetters: "DM",
        location: "Riyadh, Saudi Arabia",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "SAR 22,000 - 30,000",
        postedDate: "2 days ago",
        featured: true,
        description: "Deloitte Middle East is seeking a Senior SAP S/4HANA FICO Consultant to join our technology advisory practice in Riyadh, supporting large enterprise transformation programs for major Saudi organisations.",
        responsibilities: [
            "Lead SAP S/4HANA FICO implementation and configuration activities.",
            "Conduct business process workshops and translate requirements into SAP solutions.",
            "Design and configure General Ledger, Accounts Payable, Accounts Receivable, Asset Management, and Controlling modules.",
            "Prepare functional specifications, test scripts, and training materials.",
            "Support cutover activities, go-live, and post-implementation hypercare."
        ],
        requirements: [
            "Bachelor's degree in Accounting, Finance, IT, or Business.",
            "Minimum 5 years of SAP FICO implementation experience; S/4HANA experience required.",
            "SAP certification in Financial Accounting is preferred.",
            "Experience in large-scale SAP transformation projects in KSA or GCC.",
            "Strong stakeholder management and Arabic language skills are an advantage."
        ],
        applyEmail: "MiddleEastCareers@deloitte.com"
    },
    {
        id: "job-066",
        title: "DevOps Engineer",
        company: "Etisalat by e&",
        logoLetters: "ET",
        location: "Abu Dhabi, UAE",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 18,000 - 23,000",
        postedDate: "Today",
        featured: false,
        description: "Etisalat (e&) is hiring a DevOps Engineer to accelerate software delivery for digital services and internal platforms. You will build and maintain CI/CD pipelines, manage cloud infrastructure, and drive automation across development and operations.",
        responsibilities: [
            "Design and maintain CI/CD pipelines using Jenkins, GitLab CI, or GitHub Actions.",
            "Manage Kubernetes clusters and container workloads on AWS or Azure.",
            "Implement infrastructure-as-code using Terraform and Ansible.",
            "Monitor system health using Prometheus, Grafana, and ELK stack.",
            "Collaborate with development teams to improve release cadence and reliability."
        ],
        requirements: [
            "Bachelor's degree in Computer Science or Software Engineering.",
            "3+ years of DevOps or SRE experience.",
            "Strong experience with Docker, Kubernetes, and Helm charts.",
            "Proficiency in CI/CD toolchains and IaC tools (Terraform, Ansible).",
            "AWS or Azure certification is a plus; experience with GitOps is preferred."
        ],
        applyEmail: "careers@etisalat.ae"
    },
    {
        id: "job-067",
        title: "Physiotherapist",
        company: "NMC Healthcare",
        logoLetters: "NM",
        location: "Abu Dhabi, UAE",
        category: "Healthcare",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 12,000 - 16,000",
        postedDate: "1 day ago",
        featured: false,
        description: "NMC Healthcare, one of the largest private healthcare providers in the UAE, is recruiting a qualified Physiotherapist to join our multidisciplinary clinical team in Abu Dhabi.",
        responsibilities: [
            "Assess and treat patients with musculoskeletal, neurological, and post-surgical conditions.",
            "Develop individualised treatment plans and monitor patient progress.",
            "Perform manual therapy, therapeutic exercise, and electrotherapy modalities.",
            "Document treatment records and prepare progress reports.",
            "Collaborate with physicians, nurses, and occupational therapists."
        ],
        requirements: [
            "Bachelor's or Master's degree in Physiotherapy.",
            "Minimum 3 years of post-registration clinical experience.",
            "Valid physiotherapy license from country of origin; DOH/HAAD registration required.",
            "Experience in orthopaedics, sports rehabilitation, or neurology is preferred.",
            "Strong interpersonal and patient communication skills."
        ],
        applyEmail: "hr.recruitment@nmc.ae"
    },
    {
        id: "job-068",
        title: "Cardiologist – Consultant",
        company: "Saudi German Hospital Group",
        logoLetters: "SG",
        location: "Riyadh, Saudi Arabia",
        category: "Healthcare",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "SAR 45,000 - 65,000 + Benefits",
        postedDate: "3 days ago",
        featured: true,
        description: "Saudi German Hospital Group is recruiting a Consultant Cardiologist to lead cardiac care services at our Riyadh flagship hospital. Competitive package including accommodation, annual flights, and family benefits.",
        responsibilities: [
            "Provide specialist outpatient and inpatient cardiology consultations.",
            "Perform diagnostic and interventional cardiology procedures (echocardiography, catheterisation).",
            "Lead the cardiology team and contribute to academic and CME activities.",
            "Participate in multidisciplinary heart team meetings.",
            "Contribute to quality improvement initiatives and JCI accreditation standards."
        ],
        requirements: [
            "MBBS with specialty board certification (FACC, FESC, FRCP, or equivalent).",
            "Minimum 5 years of post-fellowship cardiology consultant experience.",
            "SCFHS registration required; support provided for Saudi licensing.",
            "Experience in interventional cardiology is preferred.",
            "Strong research, leadership, and patient communication skills."
        ],
        applyEmail: "medical.recruitment@sghgroup.net"
    },
    {
        id: "job-069",
        title: "Dental Surgeon",
        company: "Dr. Sulaiman Al Habib Hospital",
        logoLetters: "SH",
        location: "Riyadh, Saudi Arabia",
        category: "Healthcare",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "SAR 20,000 - 28,000",
        postedDate: "2 days ago",
        featured: false,
        description: "Dr. Sulaiman Al Habib Medical Group is looking for experienced Dental Surgeons to join our modern outpatient dental clinics in Riyadh. We offer a state-of-the-art working environment and a highly competitive package.",
        responsibilities: [
            "Perform comprehensive dental examinations, diagnoses, and treatment planning.",
            "Conduct restorative procedures: fillings, crowns, bridges, and root canal treatments.",
            "Provide preventive dental care, scaling, and patient education.",
            "Maintain accurate patient records in compliance with MoH standards.",
            "Refer complex cases to appropriate specialists within the group."
        ],
        requirements: [
            "BDS / MBChB (Dental) from an accredited institution.",
            "Minimum 3 years of general dental practice experience.",
            "Saudi Council for Health Specialties (SCFHS) license required.",
            "Experience with digital dentistry (intraoral scanners, CBCT) is a plus.",
            "Bilingual (English/Arabic) preferred."
        ],
        applyEmail: "employment@hmg.com"
    },
    {
        id: "job-070",
        title: "Revenue Manager",
        company: "InterContinental Hotels Group (IHG)",
        logoLetters: "IH",
        location: "Dubai, UAE",
        category: "Hospitality",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 16,000 - 21,000",
        postedDate: "1 day ago",
        featured: true,
        description: "IHG is hiring a Revenue Manager for our InterContinental property in Dubai. You will optimise room revenue by managing pricing strategies, OTA relationships, and distribution channel performance.",
        responsibilities: [
            "Develop and execute pricing strategies across all distribution channels.",
            "Manage OTA connectivity (Booking.com, Expedia, Airbnb) and rate parity.",
            "Produce weekly and monthly revenue forecasts and market intelligence reports.",
            "Collaborate with Sales and Front Office teams to optimise RevPAR.",
            "Analyse booking pace, pickup trends, and competitive set performance."
        ],
        requirements: [
            "Bachelor's degree in Hospitality Management, Business, or Finance.",
            "Minimum 3 years of hotel revenue management experience.",
            "Proficiency in Opera PMS, IDeaS, or Duetto RMS.",
            "Strong analytical skills and command of STR data and OTA reporting.",
            "Experience in Dubai or GCC hotel market is preferred."
        ],
        applyEmail: "careers@ihg.com"
    },
    {
        id: "job-071",
        title: "F&B Supervisor",
        company: "Four Seasons Hotel Riyadh",
        logoLetters: "FS",
        location: "Riyadh, Saudi Arabia",
        category: "Hospitality",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "SAR 8,000 - 11,000 + Service Charge",
        postedDate: "2 days ago",
        featured: false,
        description: "Four Seasons Hotel Riyadh at Kingdom Centre is seeking a passionate F&B Supervisor to oversee dining operations across our signature restaurant outlets. You will lead service excellence and ensure unforgettable guest experiences.",
        responsibilities: [
            "Supervise F&B service operations during assigned shifts.",
            "Coach and motivate service teams to deliver Four Seasons service standards.",
            "Handle guest complaints, special requests, and VIP arrangements.",
            "Monitor mise en place, stock levels, and table preparation.",
            "Assist the F&B Manager with scheduling, training plans, and event setups."
        ],
        requirements: [
            "Diploma or degree in Hospitality Management or F&B service.",
            "3+ years of F&B service experience, with at least 1 year in a supervisory role.",
            "Luxury hotel or fine dining restaurant background preferred.",
            "Excellent English communication skills; Arabic is an advantage.",
            "Knowledge of HACCP and food safety regulations."
        ],
        applyEmail: "jobs.riyadh@fourseasons.com"
    },
    {
        id: "job-072",
        title: "Housekeeping Manager",
        company: "Accor Hotels (Fairmont)",
        logoLetters: "AC",
        location: "Doha, Qatar",
        category: "Hospitality",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "QAR 10,000 - 14,000",
        postedDate: "Today",
        featured: false,
        description: "Fairmont Hotels & Resorts (Accor) is looking for a Housekeeping Manager for our flagship Doha property. You will lead the housekeeping team to deliver an immaculate guest environment across all rooms, public areas, and heart of house.",
        responsibilities: [
            "Manage all housekeeping operations including rooms, laundry, and public areas.",
            "Recruit, train, and performance-manage a team of 80+ housekeeping attendants.",
            "Maintain brand standards through regular room inspections.",
            "Control housekeeping budget including payroll, linen, and amenities.",
            "Coordinate with Maintenance and Front Office on room readiness and preventive maintenance."
        ],
        requirements: [
            "Diploma or degree in Hospitality Management.",
            "Minimum 5 years of housekeeping experience, with 2+ years as HK Manager.",
            "Luxury 5-star hotel background required; GCC experience strongly preferred.",
            "Knowledge of HotSOS, Opera, or REX housekeeping management systems.",
            "Strong leadership, organisational, and attention-to-detail skills."
        ],
        applyEmail: "careers@fairmont.com"
    },
    {
        id: "job-073",
        title: "Sales Executive – Real Estate",
        company: "Emaar Properties",
        logoLetters: "EM",
        location: "Dubai, UAE",
        category: "Sales & Marketing",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 8,000 Base + Commission",
        postedDate: "1 day ago",
        featured: true,
        description: "Emaar Properties, Dubai's largest real estate developer, is hiring Sales Executives to drive residential unit sales across iconic developments including Downtown Dubai, Dubai Hills, and The Valley.",
        responsibilities: [
            "Present and sell Emaar's residential and commercial property portfolio.",
            "Build and manage a database of qualified local and international buyers.",
            "Arrange property viewings, presentations, and client negotiations.",
            "Achieve monthly and quarterly sales targets.",
            "Follow up on leads from Emaar events, digital campaigns, and referrals."
        ],
        requirements: [
            "Bachelor's degree in Business, Marketing, or Real Estate.",
            "Minimum 2 years of real estate or luxury sales experience in Dubai.",
            "RERA real estate broker license (or willingness to obtain).",
            "Strong Arabic or Russian language skills are a significant advantage.",
            "Proven track record of achieving sales targets in a high-value property environment."
        ],
        applyEmail: "careers@emaar.ae"
    },
    {
        id: "job-074",
        title: "Key Account Manager – FMCG",
        company: "Almarai Company",
        logoLetters: "AL",
        location: "Riyadh, Saudi Arabia",
        category: "Sales & Marketing",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "SAR 14,000 - 18,000",
        postedDate: "2 days ago",
        featured: false,
        description: "Almarai, the world's largest vertically integrated dairy company, is recruiting a Key Account Manager to manage major modern trade accounts (Panda, Carrefour, Lulu, BinDawood) across Riyadh.",
        responsibilities: [
            "Manage and develop relationships with key modern trade retail accounts.",
            "Negotiate annual JBPs, promotional activities, and shelf space agreements.",
            "Track sales performance, SKU distribution, and in-store execution.",
            "Prepare and present quarterly business reviews to retailer partners.",
            "Coordinate with Supply Chain, Marketing, and Trade Marketing teams."
        ],
        requirements: [
            "Bachelor's degree in Business, Marketing, or Commerce.",
            "Minimum 4 years of FMCG key account or trade sales experience in KSA.",
            "Strong relationship with KSA modern trade buyers.",
            "Proficiency in sales analytics tools and Excel/PowerPoint reporting.",
            "Valid Saudi driving license required."
        ],
        applyEmail: "careers@almarai.com"
    },
    {
        id: "job-075",
        title: "Environment, Health & Safety (EHS) Specialist",
        company: "SABIC (Saudi Basic Industries Corporation)",
        logoLetters: "SB",
        location: "Jubail, Saudi Arabia",
        category: "Safety",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "SAR 16,000 - 22,000",
        postedDate: "1 day ago",
        featured: true,
        description: "SABIC is seeking an EHS Specialist to support environment, health, and safety compliance programs at its Jubail petrochemical complex. You will work closely with operations, engineering, and HSE management to maintain world-class safety standards.",
        responsibilities: [
            "Monitor and enforce EHS policies, regulations, and company standards.",
            "Conduct environmental monitoring, waste management audits, and permit compliance.",
            "Support process safety management (PSM) programs and HAZOP reviews.",
            "Analyse EHS incident data and produce trend reports for management.",
            "Coordinate emergency response drills and maintain emergency plans."
        ],
        requirements: [
            "Bachelor's degree in Chemical, Mechanical, or Environmental Engineering.",
            "Minimum 4 years of EHS experience in petrochemical or heavy industry.",
            "NEBOSH IGC or Process Safety Certificate.",
            "Knowledge of Saudi Aramco/SABIC EHS standards and OSHA regulations.",
            "Experience with PSM, HAZOP, and bow-tie risk analysis methodology."
        ],
        applyEmail: "careers@sabic.com"
    },
    {
        id: "job-076",
        title: "Financial Controller",
        company: "Majid Al Futtaim (MAF)",
        logoLetters: "MF",
        location: "Dubai, UAE",
        category: "Finance",
        jobType: "Full-time",
        experience: "Senior Level",
        salary: "AED 28,000 - 36,000",
        postedDate: "2 days ago",
        featured: true,
        description: "Majid Al Futtaim (MAF), the leading shopping mall, hospitality, and entertainment conglomerate in the Middle East, is hiring a Financial Controller to oversee the financial reporting and control function for a business unit in Dubai.",
        responsibilities: [
            "Lead the monthly financial close process and produce P&L, balance sheet, and cash flow reports.",
            "Manage the budgeting, forecasting, and variance analysis cycle.",
            "Ensure compliance with IFRS, internal controls, and MAF group policies.",
            "Lead external and internal audit processes.",
            "Develop and mentor a team of financial analysts and accountants."
        ],
        requirements: [
            "ACA, ACCA, CPA, or CMA qualification.",
            "Minimum 8 years of finance experience, with 3+ years at financial controller level.",
            "Experience in retail, hospitality, or real estate companies in the GCC.",
            "Strong IFRS knowledge and SAP/Oracle ERP experience.",
            "Excellent leadership, stakeholder management, and communication skills."
        ],
        applyEmail: "careers@majidalfuttaim.com"
    },
    {
        id: "job-077",
        title: "Instrument & Control Engineer",
        company: "Petrofac Limited",
        logoLetters: "PF",
        location: "Abu Dhabi, UAE",
        category: "Engineering",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 18,000 - 24,000",
        postedDate: "3 days ago",
        featured: false,
        description: "Petrofac is seeking an Instrument & Control Engineer to join our Abu Dhabi engineering team, supporting offshore platform and onshore oil & gas processing facility projects.",
        responsibilities: [
            "Develop instrumentation engineering deliverables: INDOs, datasheets, and hook-up drawings.",
            "Specify and size control valves, pressure relief valves, and instrumentation.",
            "Review vendor instrumentation packages and prepare technical bid tabulations.",
            "Support SIL studies, HAZOP reviews, and functional safety assessments.",
            "Coordinate with process and piping engineers on instrument placement and routing."
        ],
        requirements: [
            "Bachelor's degree in Instrumentation, Electronic, or Chemical Engineering.",
            "4–8 years of I&C engineering experience in oil & gas projects.",
            "Proficiency in INtools (SPEL+), SmartPlant Instrumentation (SPI), or equivalent.",
            "Knowledge of IEC 61511/61508 functional safety standards.",
            "Experience on brownfield offshore or onshore FEED/EPC projects is preferred."
        ],
        applyEmail: "talent@petrofac.com"
    },
    {
        id: "job-078",
        title: "Machine Learning Engineer",
        company: "G42 (Group 42)",
        logoLetters: "G4",
        location: "Abu Dhabi, UAE",
        category: "IT & Tech",
        jobType: "Full-time",
        experience: "Mid Level",
        salary: "AED 28,000 - 38,000",
        postedDate: "Today",
        featured: true,
        description: "G42, Abu Dhabi's leading AI and cloud computing company, is hiring a Machine Learning Engineer to develop and deploy production AI models across healthcare, smart city, and energy sector applications.",
        responsibilities: [
            "Build, train, and deploy machine learning models at scale.",
            "Develop data pipelines and feature engineering workflows.",
            "Optimise model performance, inference speed, and resource efficiency.",
            "Collaborate with data scientists, product managers, and software engineers.",
            "Integrate ML models into enterprise applications via RESTful APIs."
        ],
        requirements: [
            "Master's degree in Computer Science, Machine Learning, or related field.",
            "3+ years of ML engineering or applied AI experience.",
            "Proficiency in Python, TensorFlow, PyTorch, and MLflow.",
            "Experience with distributed training (Horovod, Ray) and model serving (TorchServe, Triton).",
            "Strong understanding of NLP, computer vision, or time-series forecasting models."
        ],
        applyEmail: "careers@g42.ai"
    }
];


let jobDatabase = [];

async function initJobDatabase() {
    let sourceJobs = defaultJobs;
    try {
        const response = await fetch("jobs-data.json");
        if (response.ok) {
            sourceJobs = await response.json();
            console.log(`Loaded ${sourceJobs.length} jobs dynamically from jobs-data.json`);
        }
    } catch (e) {
        console.warn("Failed to fetch jobs-data.json, using default hardcoded jobs.", e);
    }

    const savedDb = localStorage.getItem("gullfjob_db");
    if (savedDb) {
        try {
            const parsed = JSON.parse(savedDb);
            // Separate user-posted jobs (long numeric id) from defaults
            const userPostedJobs = parsed.filter(j => j.id && j.id.startsWith("job-") && isNaN(j.id.replace("job-", "")) === false && j.id.replace("job-", "").length > 6);
            const existingIds = parsed.map(j => j.id);
            // Add any brand new defaults not yet in storage
            const newDefaults = sourceJobs.filter(j => !existingIds.includes(j.id));
            // Rebuild: user posts at front, then all defaults (refreshed from source), then extras
            const refreshedDefaults = sourceJobs.map(def => {
                const stored = parsed.find(p => p.id === def.id);
                return def;
            });
            jobDatabase = [...userPostedJobs, ...refreshedDefaults, ...parsed.filter(j => !userPostedJobs.includes(j) && !sourceJobs.find(d => d.id === j.id))];
            
            // Delete jobs older than 8 days
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            jobDatabase = jobDatabase.filter(job => {
                if (!job.dateAdded) return true; // keep permanent or legacy jobs
                const addedDate = new Date(job.dateAdded);
                addedDate.setHours(0, 0, 0, 0);
                const ageDays = Math.round((today - addedDate) / (1000 * 60 * 60 * 24));
                return ageDays <= 8; // Only keep jobs within 8 days
            });

            // Save merged result
            localStorage.setItem("gullfjob_db", JSON.stringify(jobDatabase));
        } catch (e) {
            jobDatabase = sourceJobs;
            localStorage.setItem("gullfjob_db", JSON.stringify(sourceJobs));
        }
    } else {
        jobDatabase = sourceJobs;
        localStorage.setItem("gullfjob_db", JSON.stringify(sourceJobs));
    }
}


// --- Application State ---
let filterState = {
    keyword: "",
    category: "",
    location: "",
    jobTypes: [],
    experienceLevels: [],
    categories: [],
    locationCountries: [],
    sortBy: "newest"
};

// --- DOM References ---
let elements = {};

// --- Initialize Application ---
document.addEventListener("DOMContentLoaded", async () => {
    cacheElements();
    initTheme();
    await initJobDatabase();
    renderCategories();
    renderJobs();
    setupEventListeners();
});

// Cache commonly used elements
function cacheElements() {
    elements = {
        themeToggle: document.getElementById("theme-toggle"),
        themeToggleIconLight: document.querySelector(".theme-toggle-light-icon"),
        themeToggleIconDark: document.querySelector(".theme-toggle-dark-icon"),
        
        searchForm: document.getElementById("search-form"),
        keywordInput: document.getElementById("search-keyword"),
        categorySelect: document.getElementById("search-category"),
        locationSelect: document.getElementById("search-location"),
        
        resetFiltersBtn: document.getElementById("reset-filters"),
        sortBySelect: document.getElementById("sort-by"),
        
        jobCountSpan: document.getElementById("job-count"),
        jobListContainer: document.getElementById("job-list-container"),
        categoryGrid: document.getElementById("categories-grid"),
        
        // Modal
        modalBackdrop: document.getElementById("job-modal"),
        modalCloseBtn: document.getElementById("modal-close-btn"),
        modalLogoLetters: document.getElementById("modal-logo-letters"),
        modalJobTitle: document.getElementById("modal-job-title"),
        modalCompany: document.getElementById("modal-company"),
        modalTagsContainer: document.getElementById("modal-tags"),
        modalSalary: document.getElementById("modal-salary"),
        modalTabContainer: document.getElementById("modal-tabs"),
        modalBody: document.getElementById("modal-body"),
        modalFooter: document.getElementById("modal-footer"),
        
        // Form
        applyPanel: document.getElementById("apply-panel"),
        applyForm: document.getElementById("apply-form"),
        btnApplyNow: document.getElementById("btn-apply-now"),
        btnApplyEmail: document.getElementById("btn-apply-email"),
        
        // Toast
        toastNotification: document.getElementById("toast-notification"),
        
        // Header
        header: document.querySelector("header")
    };
}

// --- Theme Controller ---
function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeToggleIcons(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeToggleIcons(newTheme);
}

function updateThemeToggleIcons(theme) {
    if (theme === "light") {
        elements.themeToggleIconLight.style.display = "none";
        elements.themeToggleIconDark.style.display = "block";
    } else {
        elements.themeToggleIconLight.style.display = "block";
        elements.themeToggleIconDark.style.display = "none";
    }
}

// --- Render Categories Grid ---
function renderCategories() {
    if (!elements.categoryGrid) return;
    
    // Calculate jobs count per category
    const categories = [
        {
            name: "Engineering",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`
        },
        {
            name: "IT & Tech",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
        },
        {
            name: "Safety",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`
        },
        {
            name: "Hospitality",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
        },
        {
            name: "Healthcare",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
        },
        {
            name: "Sales & Marketing",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`
        },
        {
            name: "Finance",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
        }
    ];
    
    elements.categoryGrid.innerHTML = categories.map(cat => {
        const count = jobDatabase.filter(job => job.category === cat.name).length;
        if (count === 0) return ''; // Don't show empty categories
        return `
            <div class="category-card" onclick="filterByCategory('${cat.name}')">
                <div class="category-icon">${cat.icon}</div>
                <h3>${cat.name}</h3>
                <p>${count} Active Job${count !== 1 ? 's' : ''}</p>
            </div>
        `;
    }).join("");
    
    // Update hero job count stat dynamically
    const statEl = document.getElementById('stat-count-jobs');
    if (statEl) statEl.textContent = jobDatabase.length + '+';
}

// --- Filter By Category (from Category Card click) ---
window.filterByCategory = function(categoryName) {
    filterState.category = categoryName;
    if (elements.categorySelect) {
        elements.categorySelect.value = categoryName;
    }
    // Smooth scroll to jobs container
    const section = document.getElementById("job-search-anchor");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
    renderJobs();
};

// --- Render Job List ---
function renderJobs() {
    if (!elements.jobListContainer) return;
    
    // Filter database
    const filteredJobs = jobDatabase.filter(job => {
        // Keyword Search
        if (filterState.keyword) {
            const query = filterState.keyword.toLowerCase();
            const matchesTitle = job.title.toLowerCase().includes(query);
            const matchesCompany = job.company.toLowerCase().includes(query);
            const matchesDesc = job.description.toLowerCase().includes(query);
            const matchesCat = job.category.toLowerCase().includes(query);
            if (!matchesTitle && !matchesCompany && !matchesDesc && !matchesCat) return false;
        }
        
        // Hero search bar category filter (dropdown)
        if (filterState.category && job.category !== filterState.category) return false;
        
        // Sidebar category checkboxes
        if (filterState.categories.length > 0 && !filterState.categories.includes(job.category)) return false;
        
        // Hero search bar location filter (dropdown)
        if (filterState.location && !job.location.includes(filterState.location)) return false;
        
        // Sidebar country checkboxes
        if (filterState.locationCountries.length > 0) {
            const matchesCountry = filterState.locationCountries.some(country => job.location.includes(country));
            if (!matchesCountry) return false;
        }
        
        // Job Type Checkboxes
        if (filterState.jobTypes.length > 0 && !filterState.jobTypes.includes(job.jobType)) return false;
        
        // Experience Level Checkboxes
        if (filterState.experienceLevels.length > 0 && !filterState.experienceLevels.includes(job.experience)) return false;
        
        return true;
    });
    
    // Sort
    if (filterState.sortBy === "salary-high") {
        filteredJobs.sort((a, b) => {
            const valA = parseInt(a.salary.replace(/[^0-9]/g, '')) || 0;
            const valB = parseInt(b.salary.replace(/[^0-9]/g, '')) || 0;
            return valB - valA;
        });
    } else if (filterState.sortBy === "featured") {
        filteredJobs.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    // Default "newest" preserves insertion order
    
    // Update Count badge
    elements.jobCountSpan.innerText = filteredJobs.length;
    
    // Check if empty
    if (filteredJobs.length === 0) {
        elements.jobListContainer.innerHTML = `
            <div class="no-jobs-found">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3>No Jobs Match Your Filters</h3>
                <p>Try resetting some checklist options, expanding your keywords, or trying a different location search.</p>
            </div>
        `;
        return;
    }
    
    // Render job cards
    elements.jobListContainer.innerHTML = filteredJobs.map(job => `
        <div class="job-card ${job.featured ? 'featured' : ''}" data-id="${job.id}">
            <div class="company-logo-container">
                <div class="company-logo-placeholder">${job.logoLetters}</div>
            </div>
            
            <div class="job-info">
                <div class="job-tags">
                    <span class="tag tag-jobtype">${job.jobType}</span>
                    <span class="tag tag-location">${job.location}</span>
                    <span class="tag tag-experience">${job.experience}</span>
                    ${job.applyEmail ? `<span class="tag" style="background:rgba(234,179,8,0.12);color:#eab308;font-size:10px;">📧 Email Apply</span>` : ''}
                </div>
                
                <h3 class="job-title"><a href="#" onclick="openJobDetail('${job.id}'); return false;">${job.title}</a></h3>
                
                <div class="company-meta">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        ${job.company}
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        ${job.postedDate}
                    </span>
                    <span style="color: var(--text-muted);">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:12px;height:12px;">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        ${job.category}
                    </span>
                </div>
            </div>
            
            <div class="job-actions-area">
                <div class="salary-tag">${job.salary.split(' ')[0]} <span>${job.salary.substring(job.salary.indexOf(' '))}</span></div>
                <div class="job-card-actions">
                    <button class="btn-secondary" onclick="openJobDetail('${job.id}')">View Details</button>
                    ${job.applyEmail
                        ? `<a class="btn-primary" href="mailto:${job.applyEmail}?subject=${encodeURIComponent(job.title + ' Application')}" style="text-decoration:none;">Send CV</a>`
                        : `<button class="btn-primary" onclick="openQuickApply('${job.id}')">Apply</button>`
                    }
                </div>
            </div>
        </div>
    `).join("");
}

// --- Job Detail Modal Management ---
let activeJob = null;

window.openJobDetail = function(jobId) {
    activeJob = jobDatabase.find(j => j.id === jobId);
    if (!activeJob) return;
    
    // Hide apply panel in case it was open
    elements.applyPanel.classList.remove("active");
    elements.modalBody.style.display = "block";
    elements.modalTabContainer.style.display = "flex";
    elements.modalFooter.style.display = "flex";
    
    // Set text contents
    elements.modalLogoLetters.innerText = activeJob.logoLetters;
    elements.modalJobTitle.innerText = activeJob.title;
    elements.modalCompany.innerText = activeJob.company;
    elements.modalSalary.innerHTML = `${activeJob.salary.split(' ')[0]} <span style="font-size: 13px; color: var(--text-muted); font-weight: 400;">${activeJob.salary.substring(activeJob.salary.indexOf(' '))}</span>`;
    
    // Render tag list
    elements.modalTagsContainer.innerHTML = `
        <span class="tag tag-jobtype">${activeJob.jobType}</span>
        <span class="tag tag-location">${activeJob.location}</span>
        <span class="tag tag-experience">${activeJob.experience}</span>
        <span class="tag" style="background: var(--color-success-light); color: var(--color-success);">${activeJob.category}</span>
    `;
    
    // Render Modal Tabs content
    renderModalTabContent();
    
    // Show/hide email apply button
    const emailBtn = elements.btnApplyEmail;
    if (emailBtn) {
        if (activeJob.applyEmail) {
            emailBtn.href = `mailto:${activeJob.applyEmail}?subject=${encodeURIComponent(activeJob.title + ' Application')}`;
            emailBtn.style.display = "flex";
        } else {
            emailBtn.style.display = "none";
        }
    }
    
    // Open backdrop
    elements.modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden"; // disable body scrolling
};

function renderModalTabContent() {
    if (!activeJob) return;
    
    // Initialize standard tab structures
    const tabsHTML = `
        <button class="modal-tab-btn active" onclick="switchModalTab(event, 'description')">Job Description</button>
        <button class="modal-tab-btn" onclick="switchModalTab(event, 'requirements')">Requirements</button>
        <button class="modal-tab-btn" onclick="switchModalTab(event, 'company')">About Company</button>
    `;
    elements.modalTabContainer.innerHTML = tabsHTML;
    
    const bodyHTML = `
        <div id="tab-description" class="tab-content active">
            <h3>Role Overview</h3>
            <p>${activeJob.description}</p>
            <h3>Key Responsibilities</h3>
            <ul>
                ${activeJob.responsibilities.map(r => `<li>${r}</li>`).join("")}
            </ul>
        </div>
        <div id="tab-requirements" class="tab-content">
            <h3>Who We Are Looking For</h3>
            <ul>
                ${activeJob.requirements.map(req => `<li>${req}</li>`).join("")}
            </ul>
        </div>
        <div id="tab-company" class="tab-content">
            <h3>About ${activeJob.company}</h3>
            <p>${activeJob.company} is a leading enterprise in the Gulf region, known for fostering innovation, workplace diversity, and offering competitive benefits. We are committed to developing talent and providing long-term career growth opportunities across our offices in the GCC.</p>
            <p><strong>Headquarters:</strong> ${activeJob.location.split(',')[0]} (Corporate HQ)</p>
            <p><strong>Company Size:</strong> 250 - 500 Employees</p>
            <p><strong>Industry:</strong> ${activeJob.category} Sector</p>
        </div>
    `;
    elements.modalBody.innerHTML = bodyHTML;
}

window.switchModalTab = function(event, tabId) {
    // Deactivate current tab buttons and contents
    const buttons = elements.modalTabContainer.querySelectorAll(".modal-tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    
    const contents = elements.modalBody.querySelectorAll(".tab-content");
    contents.forEach(content => content.classList.remove("active"));
    
    // Activate clicked tab
    event.currentTarget.classList.add("active");
    elements.modalBody.querySelector(`#tab-${tabId}`).classList.add("active");
};

window.closeJobModal = function() {
    elements.modalBackdrop.classList.remove("active");
    document.body.style.overflow = ""; // enable scrolling
    activeJob = null;
};

// --- Quick Apply Panel Management ---
window.openQuickApply = function(jobId) {
    // If modal is not active, open details first, then switch
    if (!activeJob || activeJob.id !== jobId) {
        openJobDetail(jobId);
    }
    
    // Reset form fields
    elements.applyForm.reset();
    
    // Switch modal body to application form
    elements.modalBody.style.display = "none";
    elements.modalTabContainer.style.display = "none";
    elements.modalFooter.style.display = "none";
    
    elements.applyPanel.classList.add("active");
};

window.closeQuickApply = function() {
    elements.applyPanel.classList.remove("active");
    
    // Restore detail view inside modal
    elements.modalBody.style.display = "block";
    elements.modalTabContainer.style.display = "flex";
    elements.modalFooter.style.display = "flex";
};

// --- Recruiter Application Delivery Configuration ---
function getDeliveryConfig() {
    return {
        channel: localStorage.getItem("recruiter_delivery_channel") || "google_sheets",
        email: localStorage.getItem("recruiter_email") || "smartvisionwll@gmail.com",
        sheetUrl: localStorage.getItem("recruiter_sheet_url") || "https://script.google.com/macros/s/AKfycbyHF-bic8vjRSJXrOW5S54Fmg5aUpa0hCoXzb9i0jrqmNhr-_5aemCX1KmloRgPMccI/exec"
    };
}

// Handle submission
function handleApplyFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById("apply-name").value.trim();
    const email = document.getElementById("apply-email").value.trim();
    const phone = document.getElementById("apply-phone").value.trim();
    const cover = document.getElementById("apply-cover").value.trim();
    const cvInput = document.getElementById("apply-cv-file");
    
    if (!name || !email) {
        alert("Please fill in all required fields.");
        return;
    }
    
    let cvName = "No CV uploaded";
    if (cvInput && cvInput.files.length > 0) {
        cvName = cvInput.files[0].name;
    } else {
        alert("Please upload your CV / Resume file.");
        return;
    }
    
    // Change apply button to loading state
    const submitBtn = elements.applyForm.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <svg style="width: 20px; height: 20px; animation: spin 1s linear infinite; fill: none; stroke: currentColor; stroke-width: 2;" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Submitting Application...
    `;
    
    const config = getDeliveryConfig();
    const jobTitle = activeJob ? activeJob.title : "General Application";
    const companyName = activeJob ? activeJob.company : "GullfJob Portal";
    
    if (config.channel === "google_sheets" && config.sheetUrl) {
        // Submit directly to Google Sheets Apps Script Web App
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone || "Not Provided");
        formData.append("jobTitle", jobTitle);
        formData.append("company", companyName);
        formData.append("cvName", cvName);
        formData.append("cover", cover || "None");
        
        fetch(config.sheetUrl, {
            method: "POST",
            body: formData
        })
        .then(() => {
            saveApplicationLocally(jobTitle);
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            closeJobModal();
            showToast(`Application Sent!`, `Your profile was successfully saved to the Google Drive database.`);
        })
        .catch((err) => {
            console.error("Google Sheet submission failed:", err);
            // Fallback to email if Google Sheets fails
            sendEmailFallback(name, email, phone, jobTitle, companyName, cvName, cover, config.email, submitBtn, originalText);
        });
    } else {
        // Send directly via Email Inbox (FormSubmit)
        sendEmailFallback(name, email, phone, jobTitle, companyName, cvName, cover, config.email, submitBtn, originalText);
    }
}

function saveApplicationLocally(jobTitle) {
    const applications = JSON.parse(localStorage.getItem("gullfjob_applications") || "[]");
    applications.push({
        jobId: activeJob ? activeJob.id : "general",
        jobTitle: jobTitle,
        appliedAt: new Date().toISOString()
    });
    localStorage.setItem("gullfjob_applications", JSON.stringify(applications));
}

function sendEmailFallback(name, email, phone, jobTitle, companyName, cvName, cover, targetEmail, submitBtn, originalText) {
    const payload = {
        Name: name,
        Email: email,
        Phone: phone || "Not Provided",
        "Job Title": jobTitle,
        Company: companyName,
        "CV File Name": cvName,
        "Cover Note": cover || "None",
        _subject: `New Job Application: ${name} - ${jobTitle}`
    };
    
    fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(() => {
        saveApplicationLocally(jobTitle);
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        closeJobModal();
        showToast(`Application Sent!`, `Your profile was successfully sent to ${targetEmail}.`);
    })
    .catch((err) => {
        console.error("Email submission failed:", err);
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        alert("Submission error. Please check your network connection and try again.");
    });
}

// Spin animation rule injection for form loader
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`;
document.head.appendChild(styleSheet);

// --- Toast Controller ---
function showToast(title, message) {
    const toast = elements.toastNotification;
    toast.querySelector("h4").innerText = title;
    toast.querySelector("p").innerText = message;
    
    toast.classList.add("active");
    
    setTimeout(() => {
        toast.classList.remove("active");
    }, 4000);
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    // Theme Toggle click
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener("click", toggleTheme);
    }
    
    // Sticky header on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            elements.header.classList.add("scrolled");
        } else {
            elements.header.classList.remove("scrolled");
        }
    });
    
    // Search Form Submit
    if (elements.searchForm) {
        elements.searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            filterState.keyword = elements.keywordInput.value.trim();
            filterState.category = elements.categorySelect.value;
            filterState.location = elements.locationSelect.value;
            renderJobs();
            
            // Scroll to jobs container
            const section = document.getElementById("job-search-anchor");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
    
    // Reset Filters button
    if (elements.resetFiltersBtn) {
        elements.resetFiltersBtn.addEventListener("click", () => {
            filterState.keyword = "";
            filterState.category = "";
            filterState.location = "";
            filterState.jobTypes = [];
            filterState.experienceLevels = [];
            filterState.categories = [];
            filterState.locationCountries = [];
            
            // Reset search inputs
            if (elements.keywordInput) elements.keywordInput.value = "";
            if (elements.categorySelect) elements.categorySelect.value = "";
            if (elements.locationSelect) elements.locationSelect.value = "";
            
            // Uncheck all sidebar checkboxes
            const checkboxes = document.querySelectorAll(".filter-checkbox input");
            checkboxes.forEach(cb => cb.checked = false);
            
            renderJobs();
        });
    }
    
    // Sort dropdown change
    if (elements.sortBySelect) {
        elements.sortBySelect.addEventListener("change", (e) => {
            filterState.sortBy = e.target.value;
            renderJobs();
        });
    }
    
    // Sidebar Checkboxes event listeners
    document.querySelectorAll(".filter-checkbox input").forEach(checkbox => {
        checkbox.addEventListener("change", (e) => {
            const filterType = e.target.name;
            const value = e.target.value;
            const checked = e.target.checked;
            
            if (filterType === "jobType") {
                filterState.jobTypes = checked
                    ? [...filterState.jobTypes, value]
                    : filterState.jobTypes.filter(v => v !== value);
            } else if (filterType === "experience") {
                filterState.experienceLevels = checked
                    ? [...filterState.experienceLevels, value]
                    : filterState.experienceLevels.filter(v => v !== value);
            } else if (filterType === "category") {
                filterState.categories = checked
                    ? [...filterState.categories, value]
                    : filterState.categories.filter(v => v !== value);
                // Also sync the hero search dropdown
                if (elements.categorySelect && filterState.categories.length === 1) {
                    elements.categorySelect.value = filterState.categories[0];
                } else if (elements.categorySelect && filterState.categories.length !== 1) {
                    elements.categorySelect.value = "";
                }
            } else if (filterType === "locationFilter") {
                filterState.locationCountries = checked
                    ? [...filterState.locationCountries, value]
                    : filterState.locationCountries.filter(v => v !== value);
            }
            
            renderJobs();
        });
    });
    
    // Close modal clicking background
    if (elements.modalBackdrop) {
        elements.modalBackdrop.addEventListener("click", (e) => {
            if (e.target === elements.modalBackdrop) {
                closeJobModal();
            }
        });
    }
    
    // Close modal close button
    if (elements.modalCloseBtn) {
        elements.modalCloseBtn.addEventListener("click", closeJobModal);
    }
    
    // Apply Form Submission
    if (elements.applyForm) {
        elements.applyForm.addEventListener("submit", handleApplyFormSubmit);
    }

    // CV File Upload Interaction
    const cvInput = document.getElementById("apply-cv-file");
    const uploadTrigger = document.getElementById("file-upload-trigger");
    if (uploadTrigger && cvInput) {
        uploadTrigger.addEventListener("click", () => {
            cvInput.click();
        });
        
        cvInput.addEventListener("change", () => {
            if (cvInput.files.length > 0) {
                const file = cvInput.files[0];
                uploadTrigger.innerHTML = `
                    <svg style="color: #eab308; width: 32px; height: 32px; margin-bottom: 8px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p style="margin: 0; font-size: 14px;">Selected CV: <strong style="color: #eab308;">${file.name}</strong></p>
                    <span style="font-size: 11px; color: var(--text-muted);">Click to change file (${(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                `;
            } else {
                uploadTrigger.innerHTML = `
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 32px; height: 32px; margin-bottom: 8px;">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p>Drag and drop your PDF/Word resume here, or <strong>browse files</strong></p>
                    <span>Supports PDF, DOCX (Max 5MB)</span>
                `;
            }
        });
    }

    // Redirect to Employer Portal (Post a Job)
    const btnPostJob = document.getElementById("btn-post-job");
    if (btnPostJob) {
        btnPostJob.addEventListener("click", () => {
            window.location.href = "post-job.html";
        });
    }

    const footEmpPost = document.getElementById("foot-emp-post");
    if (footEmpPost) {
        footEmpPost.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "post-job.html";
        });
    }
}
