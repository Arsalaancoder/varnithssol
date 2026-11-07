export const siteData = {
  brand: {
    name: "Varnith Global",
    legalName: "Varnith Technologies Private Limited",
    tagline: "Build Strong Teams. Shape Better Futures.",
    eyebrow: "STRATEGIC HR SOLUTIONS • IT TRAINING",
    heroDescription: "Empowering businesses through strategic HR solutions and helping professionals grow through industry-focused IT training.",
    phone: "(+91) 7995483137",
    rawPhone: "+917995483137",
    whatsapp: "https://wa.me/917995483137?text=Hi%20Varnith%20Global%2C%20I%20would%20like%20to%20know%20more%20about%20your%20programs.",
    email: "info@varnithglobal.com",
    address: {
      line1: "1-90/B/C/1 Flat No 102, Bhanu Elite",
      line2: "Madhapur, Shaikpet, Hyderabad – 500081, Telangana",
      building: "Bhanu Elite",
      flatNo: "Flat No 102",
      plotNo: "1-90/B/C/1",
      area: "Madhapur",
      mandal: "Shaikpet",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500081",
      full: "1-90/B/C/1 Flat No 102, Bhanu Elite, Madhapur, Shaikpet, Hyderabad – 500081, Telangana"
    },
    hours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
    aboutText: "Varnith Global is your partner for career development in Hyderabad. With expert guidance, comprehensive solutions and a deep understanding of the local job market, we help individuals achieve their career aspirations and organizations build stronger teams. Benefit from our experienced instructors, tailored curriculum, and hands-on learning opportunities."
  },

  navLinks: [
    { label: "Home", href: "/and" },
    { label: "About", href: "/and/about" },
    { label: "Courses", href: "/and/courses" },
    { label: "Why Us", href: "/and/why-us" },
    { label: "HR Services", href: "/and/hr-services" },
    { label: "Testimonials", href: "/and/testimonials" },
    { label: "Contact", href: "/and/contact" }
  ],

  heroSlides: [
    {
      id: 1,
      image: "/assets/hr_talent.jpg",
      badge: "Strategic Talent Acquisition & HR Solutions",
      caption: "Sourcing pre-screened technical and leadership talent for high-growth enterprises."
    },
    {
      id: 2,
      image: "/assets/team_conf.jpg",
      badge: "Workforce Consulting & RPO Advisory",
      caption: "Tailored executive search, workforce planning, and organizational talent strategy."
    },
    {
      id: 3,
      image: "/assets/hero_bg.jpg",
      badge: "Industry-Aligned IT Training Division",
      caption: "Empowering software engineers with live enterprise labs and career mentorship."
    }
  ],

  courses: [
    {
      id: "devops",
      slug: "devops",
      number: "01",
      stepLabel: "Track 01",
      title: "DevOps",
      fullTitle: "DevOps Engineering & Cloud Infrastructure",
      category: "Cloud & Infrastructure",
      badge: "High Industry Demand",
      duration: "12 Weeks",
      level: "All Levels Welcome",
      image: "/assets/course_devops_new.png",
      description: "Software development and IT operations for faster, more reliable delivery. Master CI/CD pipelines, containerization, and cloud orchestration.",
      panelTheme: {
        bg: "bg-[#FEF8E7]", // Soft warm yellow
        border: "border-[#F2C94C]/30",
        tabBg: "bg-[#FEF8E7]",
        text: "text-[#183629]",
        accent: "#DFAE22"
      },
      highlights: [
        "CI/CD Pipeline Automation (Jenkins, GitHub Actions)",
        "Docker Containerization & Kubernetes Orchestration",
        "Infrastructure as Code (Terraform & Ansible)",
        "AWS Cloud Architecture, VPC, IAM & Monitoring (Prometheus/Grafana)",
        "Linux System Administration & Shell Scripting",
        "Git Branching Strategies & GitOps Workflows"
      ],
      careerOutcomes: ["DevOps Engineer", "Cloud Infrastructure Engineer", "Site Reliability Engineer (SRE)", "Build & Release Engineer"],
      targetAudience: "Aspiring Cloud Engineers, SysAdmins, Developers and CS graduates seeking a high-growth DevOps transition.",
      certification: "Varnith Enterprise Certified DevOps Specialist & Industry Exam Readiness"
    },
    {
      id: "sap-basis-security",
      slug: "sap-basis-security",
      number: "02",
      stepLabel: "Track 02",
      title: "SAP Basis Security",
      fullTitle: "SAP Basis Administration & Enterprise Security",
      category: "Enterprise ERP",
      badge: "Mission Critical",
      duration: "10 Weeks",
      level: "Intermediate",
      image: "/assets/course_sap_new.png",
      description: "Learn SAP system administration and security fundamentals. Master user administration, role design, authorizations, and system hardening.",
      panelTheme: {
        bg: "bg-[#FAF6EE]", // Pale cream
        border: "border-[#899C75]/25",
        tabBg: "bg-[#FAF6EE]",
        text: "text-[#102A21]",
        accent: "#899C75"
      },
      highlights: [
        "SAP NetWeaver Architecture, Kernel Patching & Client Administration",
        "Role Administration & Authorization Concepts (PFCG)",
        "User Lifecycle Management (SU01, SU10, SU24, SU53)",
        "Transport Management System (TMS) Configuration",
        "Audit Information System (AIS) & Security Baseline Hardening",
        "Single Sign-On (SSO) & Secure Network Communications (SNC)"
      ],
      careerOutcomes: ["SAP Basis Consultant", "SAP Security Administrator", "SAP Technical Lead", "ERP Systems Engineer"],
      targetAudience: "IT Administrators, SAP Trainees, and Security Analysts seeking enterprise ERP expertise.",
      certification: "Varnith Certified SAP Basis Security Practitioner"
    },
    {
      id: "sap-grc",
      slug: "sap-grc",
      number: "03",
      stepLabel: "Track 03",
      title: "SAP GRC",
      fullTitle: "SAP Governance, Risk & Compliance (GRC Access Control)",
      category: "Governance & Risk",
      badge: "Compliance Track",
      duration: "10 Weeks",
      level: "Intermediate to Advanced",
      image: "/assets/course_sap_new.png",
      description: "Understand governance, risk and compliance in SAP environments. Mitigate access risks, Segregation of Duties (SoD) conflicts, and automate compliance audits.",
      panelTheme: {
        bg: "bg-[#EEF4EC]", // Muted sage
        border: "border-[#173B2C]/20",
        tabBg: "bg-[#EEF4EC]",
        text: "text-[#173B2C]",
        accent: "#173B2C"
      },
      highlights: [
        "Access Risk Analysis (ARA) & SoD Rule Set Customization",
        "Access Request Management (ARM) Automated Provisioning",
        "Emergency Access Management (EAM / Firefighter ID Setup)",
        "Business Role Management (BRM) Methodology",
        "Continuous Compliance Monitoring & Audit Readiness",
        "Integration with SAP S/4HANA & Fiori Environments"
      ],
      careerOutcomes: ["SAP GRC Consultant", "IT Compliance Auditor", "Information Security Risk Analyst", "SAP Authorization Lead"],
      targetAudience: "Internal Auditors, SAP Consultants, Risk Analysts & Security Architects.",
      certification: "Varnith GRC Enterprise Practitioner Certificate"
    },
    {
      id: "data-analyst",
      slug: "data-analyst",
      number: "04",
      stepLabel: "Track 04",
      title: "Data Analyst",
      fullTitle: "Data Analytics & Business Intelligence",
      category: "Data & Analytics",
      badge: "Beginner Friendly",
      duration: "12 Weeks",
      level: "All Backgrounds",
      image: "/assets/course_data_new.jpg",
      description: "Develop analytical skills to uncover insights and support better decisions. Harness SQL, Python, Excel, and Power BI dashboards to transform data into business value.",
      panelTheme: {
        bg: "bg-[#FEF5EC]", // Soft warm peach
        border: "border-[#DFAE22]/30",
        tabBg: "bg-[#FEF5EC]",
        text: "text-[#183629]",
        accent: "#DFAE22"
      },
      highlights: [
        "Advanced SQL: Window Functions, CTEs, Joins & Optimization",
        "Power BI & Tableau Interactive Dashboarding & DAX Calculations",
        "Exploratory Data Analysis with Python (Pandas, NumPy, Matplotlib)",
        "Statistical Thinking, Hypothesis Testing & KPI Frameworks",
        "Data Cleaning, ETL Pipelines & Excel Modeling",
        "Real-World Business Case Studies & Executive Stakeholder Reporting"
      ],
      careerOutcomes: ["Data Analyst", "Business Intelligence Analyst", "Reporting Specialist", "Product Analytics Associate"],
      targetAudience: "Fresh Graduates, Non-technical professionals, Career Switchers, and Business Analysts.",
      certification: "Certified Data & Business Intelligence Professional"
    },
    {
      id: "software-testing",
      slug: "software-testing",
      number: "05",
      stepLabel: "Track 05",
      title: "Software Testing",
      fullTitle: "Software Quality Assurance (Manual & Automation)",
      category: "Quality Engineering",
      badge: "Practical Lab Focus",
      duration: "10 Weeks",
      level: "All Levels",
      image: "/assets/course_testing_new.png",
      description: "Explore manual testing, automation testing and API testing. Build production-grade test suites using Selenium WebDriver, Postman, and TestNG.",
      panelTheme: {
        bg: "bg-[#F3F6ED]", // Very light olive
        border: "border-[#899C75]/25",
        tabBg: "bg-[#F3F6ED]",
        text: "text-[#102A21]",
        accent: "#899C75"
      },
      highlights: [
        "SDLC, STLC & Agile Scrum QA Methodologies",
        "Test Case Design, Boundary Value Analysis & Equivalence Partitioning",
        "Selenium WebDriver Automation Framework with Java/Python",
        "REST API Testing with Postman & Newman Automation",
        "Defect Lifecycle Management with Jira & TestRail",
        "CI/CD Integration with Jenkins for Automated Test Runs"
      ],
      careerOutcomes: ["QA Automation Engineer", "Manual Test Analyst", "API Test Specialist", "SDET (Software Development Engineer in Test)"],
      targetAudience: "Career Switchers, QA Aspirants, and CS Graduates seeking rapid entry into IT.",
      certification: "Certified Quality Assurance & Test Automation Specialist"
    },
    {
      id: "python",
      slug: "python",
      number: "06",
      stepLabel: "Track 06",
      title: "Python",
      fullTitle: "Python Full-Stack & Automation Engineering",
      category: "Programming & Backend",
      badge: "Core Foundation",
      duration: "10 Weeks",
      level: "Beginner to Advanced",
      image: "/assets/course_python_new.png",
      description: "Learn Python programming and its applications in software development, backend APIs, data handling, and automation scripting.",
      panelTheme: {
        bg: "bg-[#FEF9ED]", // Soft cream yellow
        border: "border-[#F2C94C]/30",
        tabBg: "bg-[#FEF9ED]",
        text: "text-[#183629]",
        accent: "#DFAE22"
      },
      highlights: [
        "Core Python Syntax, Data Structures & Object-Oriented Design",
        "Web Backend Development with FastAPI & Django Frameworks",
        "Database Architecture & ORM with PostgreSQL / SQLite",
        "RESTful API Development & JWT Authentication",
        "Task Automation & Web Scraping with BeautifulSoup & Selenium",
        "Unit Testing with PyTest & Deployment to Cloud"
      ],
      careerOutcomes: ["Python Backend Developer", "Software Engineer", "Automation Engineer", "Full-Stack Python Engineer"],
      targetAudience: "Beginners, College Students, Professionals aiming for Software Engineering roles.",
      certification: "Varnith Certified Python Software Developer"
    }
  ],

  hrServices: [
    {
      id: "recruitment",
      slug: "recruitment",
      aliases: ["talent-acquisition"],
      number: "01",
      title: "Recruitment & Talent Acquisition",
      fullTitle: "Enterprise Recruitment & Technical Talent Acquisition",
      badge: "Core Practice",
      shortDescription: "End-to-end recruitment matching enterprise hiring demands with pre-assessed, high-caliber tech talent in Hyderabad and pan-India.",
      description: "End-to-end permanent recruitment matching enterprise tech demands with pre-assessed, high-caliber talent evaluated on live cloud labs.",
      image: "/assets/hr_talent.jpg",
      stats: [
        { label: "Average Time-to-Hire", value: "< 14 Days" },
        { label: "Technical Pass Rate", value: "96.4%" },
        { label: "First-Year Retention", value: "94.2%" }
      ],
      features: [
        "Live Lab Technical Pre-Screening",
        "Custom Enterprise Sourcing Pipelines",
        "Role-Specific Competency Mapping",
        "Behavioral & Culture Alignment Audits",
        "Rapid 14-Day Delivery SLA",
        "Post-Placement Replacement Guarantee"
      ],
      whatItIncludes: [
        {
          title: "Technical Code & Sandbox Vetting",
          description: "Candidates solve real-world architectural challenges and deploy on live cloud workstations before interview presentation."
        },
        {
          title: "Deep Passive Talent Mapping",
          description: "Direct outreach to top 15% engineers across Hyderabad, Bengaluru, Pune, and pan-India tech ecosystems."
        },
        {
          title: "Comprehensive Candidate Dossiers",
          description: "Every shortlisted profile includes sandbox evaluation scorecards, peer feedback, and compensation expectations."
        },
        {
          title: "End-to-End Interview Coordination",
          description: "Dedicated account managers schedule technical rounds, manage candidate communication, and ensure zero offer drops."
        },
        {
          title: "Counter-Offer & Joining Assurance",
          description: "Active engagement during the 60-90 day notice window to minimize dropouts and accelerate start dates."
        },
        {
          title: "90-Day Performance Guarantee",
          description: "Full replacement warranty within the first 90 days ensuring complete hiring peace of mind."
        }
      ],
      deliveryModel: [
        { step: "01", title: "Technical Alignment", desc: "We interview hiring managers to map stack requirements, team culture, and business milestones." },
        { step: "02", title: "Targeted Sourcing", desc: "AI-assisted search combined with our proprietary database of 45,000+ verified tech professionals." },
        { step: "03", title: "Practical Lab Audit", desc: "Every engineer is vetted inside our hands-on IT labs to verify genuine hands-on ability." },
        { step: "04", title: "Offer & Onboarding", desc: "Offer advisory, notice period engagement, and seamless enterprise day-one integration." }
      ],
      businessBenefits: [
        { metric: "68%", title: "Reduction in Hiring Time", desc: "Fill critical engineering roles in under 14 business days." },
        { metric: "4.5x", title: "Interview-to-Offer Ratio", desc: "Stop wasting engineering manager time on unvetted resumes." },
        { metric: "94%", title: "Long-Term Retention", desc: "Hires stay, contribute, and advance within your organization." }
      ],
      faqs: [
        { q: "How does Varnith Global evaluate candidate technical ability?", a: "Unlike conventional agencies that rely solely on keyword matching, candidates must demonstrate practical delivery inside live sandbox environments before recommendation." },
        { q: "What is your typical turnaround time for senior roles?", a: "First calibrated shortlists are delivered within 48 to 72 hours. Placements typically close in 10 to 14 business days." },
        { q: "Do you offer placement replacement guarantees?", a: "Yes. All permanent placements include a comprehensive 90-day replacement warranty." },
        { q: "Can you support bulk hiring drives?", a: "Yes. We regularly execute dedicated recruitment sprint campaigns for enterprise scale-ups." }
      ]
    },
    {
      id: "staffing",
      slug: "staffing",
      aliases: ["rpo"],
      number: "02",
      title: "Staffing & RPO Solutions",
      fullTitle: "Scalable Contract Staffing & Recruitment Process Outsourcing",
      badge: "Enterprise Scale",
      shortDescription: "Scalable recruitment outsourcing and contract staffing taking over part or all of your talent acquisition to reduce cost and time-to-hire.",
      description: "Flexible contract-to-hire staffing, project teams, and scalable Recruitment Process Outsourcing (RPO) to dramatically cut time-to-hire.",
      image: "/assets/team_conf.jpg",
      stats: [
        { label: "Cost Per Hire Reduction", value: "35% – 45%" },
        { label: "SLA Adherence Rate", value: "99.1%" },
        { label: "Scalability Window", value: "72 Hours" }
      ],
      features: [
        "Dedicated Onsite / Offsite Recruiting Pods",
        "Contract & Contract-to-Hire IT Staffing",
        "Applicant Tracking System Integration",
        "Employer Brand & Candidate Experience Management",
        "Transparent SLA & Metrics Dashboards",
        "Direct Payroll & Compliance Coverage"
      ],
      whatItIncludes: [
        {
          title: "Full Lifecycle RPO",
          description: "End-to-end management from requisition approval, candidate attraction, screening, to offer rollout and onboarding."
        },
        {
          title: "Project-Based Staffing Sprints",
          description: "Rapid deployment of 10 to 50+ specialized software engineers for time-sensitive enterprise client deliveries."
        },
        {
          title: "Enterprise ATS & Pipeline Integration",
          description: "Seamless workflows directly inside your Workday, Greenhouse, Lever, or BambooHR ecosystems."
        },
        {
          title: "Dedicated Talent Acquisition Pods",
          description: "Full-time senior recruiters, sourcers, and technical interviewers embedded directly with your team."
        },
        {
          title: "Contract-to-Hire Flexibility",
          description: "Evaluate engineering contractors in production before making long-term permanent commitments."
        },
        {
          title: "Real-Time Analytics & Reporting",
          description: "Weekly dashboards tracking pipeline conversion, time-to-fill, cost savings, and candidate satisfaction."
        }
      ],
      deliveryModel: [
        { step: "01", title: "Audit & Architecture", desc: "Detailed diagnostic of your current recruitment bottlenecks, tooling, and cost structures." },
        { step: "02", title: "Pod Deployment", desc: "Deploy dedicated tech recruiters trained on your brand identity and technical stacks." },
        { step: "03", title: "Execution Sprints", desc: "High-velocity sourcing, screening, and scheduling according to committed SLAs." },
        { step: "04", title: "Continuous Optimization", desc: "Iterative analytics reviews to reduce cost-per-hire and elevate hiring quality." }
      ],
      businessBenefits: [
        { metric: "40%", title: "Cost-Per-Hire Savings", desc: "Eliminate expensive ad-hoc placement agency fees." },
        { metric: "72h", title: "Contract Deployment", desc: "Deploy pre-vetted contractors on active projects in days." },
        { metric: "100%", title: "Compliance Assurance", desc: "Zero statutory or labor regulation risk for your organization." }
      ],
      faqs: [
        { q: "What is the difference between RPO and standard staffing?", a: "Standard staffing fills individual openings on contingency. RPO embeds dedicated talent experts into your company, managing your entire hiring function with guaranteed SLAs and measurable cost reductions." },
        { q: "Can we transition contract staff to full-time employees?", a: "Yes, our contract-to-hire model features seamless transition clauses with no surprise conversion fees." },
        { q: "How quickly can you deploy a dedicated recruitment pod?", a: "A tailored pod of recruiters can be fully integrated and operational within 5 business days." },
        { q: "Do you handle contractor payroll and statutory benefits?", a: "Yes, we handle complete contractor payroll, statutory filings, insurances, and compliance." }
      ]
    },
    {
      id: "executive-search",
      slug: "executive-search",
      aliases: ["executive-hiring"],
      number: "03",
      title: "Executive Search & Leadership Hiring",
      fullTitle: "Confidential Executive Search & Technology Leadership Headhunting",
      badge: "C-Suite & Directors",
      shortDescription: "Confidential and specialized headhunting for leadership positions, IT directors, architects, and C-suite innovators.",
      description: "Confidential and specialized headhunting for VP of Engineering, IT Directors, Chief Technology Officers, and senior management leaders.",
      image: "/assets/hr_executive.jpg",
      stats: [
        { label: "Search Success Rate", value: "98.5%" },
        { label: "Leadership Network", value: "12,000+" },
        { label: "Confidentiality Rating", value: "100%" }
      ],
      features: [
        "Confidential C-Suite Headhunting",
        "Competitor Market & Organizational Mapping",
        "Architectural & Strategic Competency Assessment",
        "Compensation Benchmarking & Equity Advisory",
        "Discreet Outreach & Brand Protection",
        "One-Year Leadership Success Warranty"
      ],
      whatItIncludes: [
        {
          title: "Comprehensive Market Mapping",
          description: "Detailed breakdown of leadership structures across top enterprise competitors and growth firms."
        },
        {
          title: "Discreet Confidential Outreach",
          description: "White-glove executive representation preserving confidentiality for sensitive organizational transitions."
        },
        {
          title: "Leadership Competency Benchmarking",
          description: "Rigorous assessment of strategic vision, technical architecture stewardship, and team leadership history."
        },
        {
          title: "Executive Compensation Structuring",
          description: "Market-calibrated structuring of fixed compensation, performance bonuses, and equity/ESOP packages."
        },
        {
          title: "Extensive 360-Degree Referencing",
          description: "Unfiltered references from past board members, peer executives, and direct engineering reports."
        },
        {
          title: "Executive Onboarding Support",
          description: "Structured integration advisory across the first 180 days to maximize executive impact."
        }
      ],
      deliveryModel: [
        { step: "01", title: "Mandate Briefing", desc: "Confidential strategy session with Founders, Board members, or HR Leadership." },
        { step: "02", title: "Market Intelligence", desc: "Mapping target companies, active leaders, and evaluating availability indicators." },
        { step: "03", title: "Discreet Dialogues", desc: "Engaging senior executives directly on strategic alignment and career milestones." },
        { step: "04", title: "Offer & Integration", desc: "Package negotiation, governance alignment, and long-term onboarding support." }
      ],
      businessBenefits: [
        { metric: "100%", title: "Discretion Guaranteed", desc: "Completely protected confidential corporate searches." },
        { metric: "12k+", title: "Executive Network", desc: "Direct relationships with proven technology leaders across India." },
        { metric: "1 Yr", title: "Leadership Warranty", desc: "Extended placement warranty on all C-suite and Director roles." }
      ],
      faqs: [
        { q: "What leadership levels do you recruit for?", a: "We specialize in VP of Engineering, CTO, Chief Information Security Officer (CISO), Enterprise Architects, Head of Product, and Senior Directors." },
        { q: "How do you protect organizational confidentiality?", a: "All executive searches operate under strict NDAs, presenting opportunities blindly until mutual interest and credentials are confirmed." },
        { q: "How long does a typical executive search take?", a: "Shortlists of exceptional finalists are typically presented in 3 to 4 weeks, with offers finalized in 6 to 8 weeks." },
        { q: "What is your leadership warranty?", a: "We offer an industry-leading 1-year replacement warranty on senior executive placements." }
      ]
    },
    {
      id: "hr-consulting",
      slug: "hr-consulting",
      aliases: ["hr-strategy"],
      number: "04",
      title: "HR Consulting & Strategy",
      fullTitle: "Strategic HR Advisory, Organizational Design & Policy Frameworks",
      badge: "Strategic Advisory",
      shortDescription: "Comprehensive workplace advisory: organizational design, performance appraisal frameworks, HR policy creation, and compliance audits.",
      description: "Strategic workplace advisory helping growing companies establish scalable HR systems, modern workplace policies, and high-performance cultures.",
      image: "/assets/experience_discussion.jpg",
      stats: [
        { label: "Client Retainers", value: "85+" },
        { label: "Policy Compliance", value: "100%" },
        { label: "Performance Uplift", value: "28%" }
      ],
      features: [
        "Organizational Structure & Hierarchy Design",
        "Performance Management & OKR Systems",
        "Statutory HR Compliance & Labor Audits",
        "Compensation & Benefits Frameworks",
        "Employee Handbook & Policy Architecture",
        "Workplace Culture & Engagement Diagnostic"
      ],
      whatItIncludes: [
        {
          title: "Organizational Design & Banding",
          description: "Clear career ladders, role hierarchies, and competency matrices that inspire employee growth."
        },
        {
          title: "Modern Performance Appraisal Systems",
          description: "Design and rollout of OKR frameworks, 360-degree feedback reviews, and merit-based compensation structures."
        },
        {
          title: "Comprehensive HR Policy Playbooks",
          description: "Legally compliant, employee-friendly handbooks covering POSH, leave, remote work, code of conduct, and IP protection."
        },
        {
          title: "Statutory Compliance Audit",
          description: "Thorough health checks ensuring 100% compliance with labor laws, employment agreements, and state regulations."
        },
        {
          title: "Culture & Retention Strategy",
          description: "Diagnostic surveys, engagement initiatives, and leadership coaching to build resilient company culture."
        },
        {
          title: "Change Management Advisory",
          description: "Navigating team restructuring, mergers, acquisitions, and rapid scale-up transitions smoothly."
        }
      ],
      deliveryModel: [
        { step: "01", title: "Diagnostic Audit", desc: "Comprehensive review of current HR policies, workflows, compliance, and team sentiment." },
        { step: "02", title: "Strategic Roadmap", desc: "Co-creating tailored solutions aligned directly with your enterprise business goals." },
        { step: "03", title: "System Rollout", desc: "Hands-on implementation of policies, manager training, and modern HR software tools." },
        { step: "04", title: "Audit & Evolution", desc: "Quarterly health-checks to adapt policies as your business expands." }
      ],
      businessBenefits: [
        { metric: "100%", title: "Labor Law Compliance", desc: "Eliminate statutory fines, litigation risks, and regulatory penalties." },
        { metric: "30%", title: "Productivity Increase", desc: "Clear OKRs and structured role ladders align teams to business objectives." },
        { metric: "Zero", title: "Policy Ambiguity", desc: "Transparent guidelines reduce friction and foster high workplace trust." }
      ],
      faqs: [
        { q: "Is this consulting service suitable for startups?", a: "Yes. We help fast-growing startups build their initial HR architecture, employment contracts, and employee handbooks from ground zero." },
        { q: "How long does an HR compliance audit take?", a: "A complete statutory and operational HR compliance audit is typically completed within 7 to 10 business days." },
        { q: "Can you help us implement an OKR or performance system?", a: "Yes. We design customized performance frameworks and train team leads and managers on effective implementation." },
        { q: "Do you provide ongoing monthly HR advisory?", a: "Yes. Many enterprise clients engage us on a retained fractional Chief Human Resources Officer (CHRO) model." }
      ]
    },
    {
      id: "workforce-management",
      slug: "workforce-management",
      aliases: ["dei-hiring"],
      number: "05",
      title: "Workforce Management & DE&I",
      fullTitle: "Workforce Planning, Attrition Mitigation & Inclusive Hiring",
      badge: "Culture & Retention",
      shortDescription: "Capacity planning, skills gap audits, attrition mitigation, and inclusive hiring frameworks ensuring 94%+ long-term retention.",
      description: "Data-driven workforce optimization, talent retention architecture, and diversity hiring strategies for high-performance workplaces.",
      image: "/assets/experience_collab.jpg",
      stats: [
        { label: "Retention Rate", value: "94.2%" },
        { label: "DE&I Placement Ratio", value: "38%" },
        { label: "Productivity Boost", value: "+24%" }
      ],
      features: [
        "Workforce Capacity & Skills Gap Audits",
        "Attrition Risk Prediction & Mitigation",
        "Inclusive Sourcing & Bias-Free Screening",
        "Women in Tech & Diversity Hiring Drives",
        "Employee Retention & Engagement Architecture",
        "Succession Planning & Leadership Pipelines"
      ],
      whatItIncludes: [
        {
          title: "Workforce Capacity Planning",
          description: "Forecasting talent needs 6-12 months ahead to prevent delivery bottlenecks and understaffing."
        },
        {
          title: "Targeted Diversity Hiring Campaigns",
          description: "Dedicated pipelines to source and place skilled female engineers and diverse talent in leadership."
        },
        {
          title: "Attrition Root-Cause Analysis",
          description: "Actionable diagnostics uncovering why key performers leave and establishing interventions that retain them."
        },
        {
          title: "Internal Skills Upgrading Alignment",
          description: "Leveraging our in-house IT training division to cross-skill existing employees for emerging stack demands."
        },
        {
          title: "Workplace Belonging Frameworks",
          description: "Designing mentorship circles, employee resource groups (ERGs), and inclusive leadership practices."
        },
        {
          title: "Succession & Continuity Planning",
          description: "Identifying and grooming internal champions to protect vital business knowledge and delivery continuity."
        }
      ],
      deliveryModel: [
        { step: "01", title: "Talent Inventory", desc: "Detailed audit of existing workforce skills, attrition trends, and diversity ratios." },
        { step: "02", title: "Capacity Blueprint", desc: "Modeling hiring needs against product roadmaps and enterprise client commitments." },
        { step: "03", title: "Inclusive Sourcing", desc: "Engaging specialized candidate communities and executing unbiased evaluations." },
        { step: "04", title: "Retention Monitoring", desc: "Tracking quarterly retention and team engagement metrics to ensure lasting outcomes." }
      ],
      businessBenefits: [
        { metric: "94%", title: "Employee Stability", desc: "Drastically reduce the disruptive costs of team turnover." },
        { metric: "2.8x", title: "Innovation Output", desc: "Diverse, balanced engineering teams solve complex problems faster." },
        { metric: "Zero", title: "Delivery Gaps", desc: "Proactive capacity forecasting keeps enterprise projects on schedule." }
      ],
      faqs: [
        { q: "What is your approach to DE&I hiring?", a: "We believe diversity must be paired with technical excellence. All candidates are evaluated on objective sandbox performance while expanding recruitment channels to underrepresented groups." },
        { q: "How can you help reduce engineering attrition?", a: "We conduct deep confidential exit diagnostics, benchmark compensation, and design growth ladders that give employees clear incentives to stay." },
        { q: "Can our existing staff benefit from Varnith's IT training?", a: "Yes. Our unique advantage is our in-house IT academy, allowing us to upskill and cross-train your current workforce." },
        { q: "What metrics are tracked during workforce planning?", a: "We track utilization rates, skill gaps, time-to-productivity, turnover risk scores, and team diversity benchmarks." }
      ]
    },
    {
      id: "payroll",
      slug: "payroll",
      aliases: ["payroll-administration", "talent-intelligence"],
      number: "06",
      title: "Payroll & HR Administration",
      fullTitle: "End-to-End Payroll Processing, Statutory Compliance & HR Operations",
      badge: "Operations & Compliance",
      shortDescription: "End-to-end payroll processing, statutory compliance (PF, ESI, TDS, PT), attendance automation, and employee self-service governance.",
      description: "Error-free payroll execution, statutory regulatory filings, and digitized employee lifecycle administration for organizations of all sizes.",
      image: "/assets/experience_presentation.jpg",
      stats: [
        { label: "Payroll Accuracy", value: "99.98%" },
        { label: "On-Time Disbursement", value: "100%" },
        { label: "Statutory Filing SLA", value: "Zero Delay" }
      ],
      features: [
        "100% Error-Free Monthly Payroll Processing",
        "Statutory PF, ESI, TDS, & PT Compliance Filings",
        "Attendance, Shift & Leave Management Integration",
        "Digital Payslip Distribution & Tax Deduction Forms (Form 16)",
        "Employee Reimbursement & Expense Audits",
        "Dedicated Helpdesk for Employee Payroll Inquiries"
      ],
      whatItIncludes: [
        {
          title: "Automated Monthly Payroll Execution",
          description: "Accurate salary calculations, variable pay, deductions, bonuses, and direct bank disbursement files."
        },
        {
          title: "Complete Statutory Compliance Filings",
          description: "Timely monthly filing of Provident Fund (PF), Employee State Insurance (ESI), Professional Tax (PT), and TDS."
        },
        {
          title: "Employee Tax Computations & Form 16",
          description: "Investment declaration portals, proof verification, tax computation sheets, and automated year-end Form 16 generation."
        },
        {
          title: "Attendance & Leave System Integration",
          description: "Seamless synchronization with biometric devices, Slack/Teams check-ins, and HRMS platforms."
        },
        {
          title: "Expense Claims & Reimbursement Auditing",
          description: "Policy verification and automated processing for travel, equipment, and health reimbursements."
        },
        {
          title: "Full & Final Settlement (FnF) Governance",
          description: "Prompt, compliant exit calculations, gratuity payouts, leave encashment, and documentation."
        }
      ],
      deliveryModel: [
        { step: "01", title: "Setup & Integration", desc: "Configuring company salary structures, tax slabs, pay cycles, and statutory registries." },
        { step: "02", title: "Monthly Cutoff Run", desc: "Processing attendance, incentives, and deductions with multi-tier validation checks." },
        { step: "03", title: "Disbursement & Payslips", desc: "Bank file generation and secure instant delivery of payslips to employee inboxes." },
        { step: "04", title: "Statutory Remittance", desc: "Submitting challans and filing returns with government authorities prior to deadlines." }
      ],
      businessBenefits: [
        { metric: "99.98%", title: "Payroll Accuracy", desc: "Eliminate costly salary calculation errors and disputes." },
        { metric: "100%", title: "Statutory Protection", desc: "Never miss a PF, ESI, or tax filing deadline again." },
        { metric: "40 hrs", title: "Admin Time Saved", desc: "Free your internal finance and HR teams to focus on business growth." }
      ],
      faqs: [
        { q: "How do you ensure data confidentiality and bank security?", a: "We utilize banking-grade 256-bit encryption, strict role-based access control, and ISO-compliant data protection protocols." },
        { q: "Can you handle payroll for multiple state entities in India?", a: "Yes. We manage multi-state professional tax, local labor welfare funds, and state-specific statutory registrations." },
        { q: "How do employees access their payslips and tax sheets?", a: "Employees receive encrypted PDF payslips directly via email and have access to a secure digital self-service portal." },
        { q: "Do you assist during statutory inspections and audits?", a: "Yes. Our compliance specialists handle documentation, records reconciliation, and representation during PF/ESI audits." }
      ]
    }
  ],

  differentiators: [
    {
      number: "01",
      title: "Expert-Led Learning",
      description: "Learn directly from active industry practitioners with 10+ years of corporate experience in IT hubs.",
      tag: "Real Mentors"
    },
    {
      number: "02",
      title: "Hands-On Practical Experience",
      description: "Theory is only 20% of the equation. 80% is dedicated to live terminals, real code, and actual software setups.",
      tag: "Lab Centric"
    },
    {
      number: "03",
      title: "Live Project Exposure",
      description: "Work on genuine enterprise project scenarios that give you tangible portfolio pieces for technical interviews.",
      tag: "Portfolio Grade"
    },
    {
      number: "04",
      title: "Course Completion Certification",
      description: "Earn recognized credentials verifying your hands-on competencies and real project milestones.",
      tag: "Verified Credentials"
    },
    {
      number: "05",
      title: "Career Guidance & Mock Interviews",
      description: "Resume crafting, LinkedIn optimization, behavioral coaching, and mock tech rounds with feedback.",
      tag: "Interview Ready"
    },
    {
      number: "06",
      title: "Direct HR & Recruitment Placement",
      description: "Our in-house HR consultancy connects graduating learners directly with hiring managers across Hyderabad.",
      tag: "Placement Highway"
    }
  ],

  learningStages: [
    {
      step: "01",
      title: "Discover Your Potential",
      description: "Explore learning opportunities and identify your professional goals through dedicated 1-on-1 counseling.",
      detail: "We evaluate your background, interests, and target roles to map out the ideal learning track suited to your ambitions.",
      tag: "Orientation & Roadmap"
    },
    {
      step: "02",
      title: "Learn From Experts",
      description: "Build knowledge with experienced trainers, structured modules, and deeply curated real-world curriculum.",
      detail: "Engage in live interactive sessions where complex concepts are broken down into intuitive, practical building blocks.",
      tag: "Rigorous Instruction"
    },
    {
      step: "03",
      title: "Apply Your Skills",
      description: "Gain practical experience through structured lab exercises, troubleshooting drills, and capstone projects.",
      detail: "Apply code, configure servers, audit security policies, and build dashboards just like an active engineer on the job.",
      tag: "Hands-on Immersion"
    },
    {
      step: "04",
      title: "Move Forward",
      description: "Build confidence and prepare for your next career opportunity with dedicated placement assistance.",
      detail: "Step into tech interviews prepared with an industry-grade portfolio, verified certification, and active HR referrals.",
      tag: "Placement & Growth"
    }
  ],

  testimonials: [
    {
      id: "rahul",
      name: "Rahul Radhirao",
      role: "Software Testing Professional",
      course: "Software Testing",
      image: "/assets/student_male_1.avif",
      quote: "I've taken several testing courses before, but Varnith Global has been the best by far. The trainers have real-world experience and share practical tips that I can apply immediately. I've already seen a significant improvement in my testing efficiency.",
      rating: 5,
      location: "Hyderabad"
    },
    {
      id: "priya",
      name: "Priya Bhaskar",
      role: "SAP Security Specialist",
      course: "SAP Basis Security",
      image: "/assets/student_female_1.avif",
      quote: "I was looking for a course that would give me a deep dive into SAP Basis Security, and Varnith Global delivered. The curriculum is comprehensive and the trainers are experts in their field. I've already implemented some of the best practices I learned in my daily work.",
      rating: 5,
      location: "Hyderabad"
    },
    {
      id: "ravi",
      name: "Ravi Theja",
      role: "Associate Data Analyst",
      course: "Data Analyst",
      image: "/assets/student_male_2.avif",
      quote: "As a beginner in data science, I was a bit intimidated, but Varnith Global made me feel right at home. The instructors are patient and supportive, and the course materials are well-structured. I've gained a solid foundation and I'm excited to continue my learning journey.",
      rating: 5,
      location: "Hyderabad"
    },
    {
      id: "manasa",
      name: "Manasa Chowdary",
      role: "DevOps Engineer",
      course: "DevOps",
      image: "/assets/student_female_2.avif",
      quote: "Varnith Global has been institute for my DevOps career. Their courses are packed with practical knowledge and hands-on exercises that really stick. The instructors are super knowledgeable and always supports to help students understand complex concepts.",
      rating: 5,
      location: "Hyderabad"
    }
  ],

  faqs: [
    {
      question: "What is the format of your courses?",
      answer: "Our courses are a mix of live online classes, recorded lectures, and hands-on exercises. We also provide access to course materials and resources."
    },
    {
      question: "Do I need prior experience for the DevOps course?",
      answer: "While some prior experience in IT or software development is helpful, our DevOps course is designed to be accessible to learners of all levels."
    },
    {
      question: "Is the Data Science course suitable for non-technical professionals?",
      answer: "Yes, our Data Science course is designed to be accessible to individuals with a non-technical background. We provide a solid foundation in data analysis and programming concepts."
    },
    {
      question: "How do I enroll in a course?",
      answer: "You can enroll in a course by visiting our website and follow the registration process. We accept online payments through secure gateways."
    },
    {
      question: "What is the certification process?",
      answer: "Upon successful completion of the course, you will receive a certificate of completion from RV Consultings. Some courses may also offer industry-recognized certifications."
    },
    {
      question: "Do you offer flexible learning options?",
      answer: "Yes, we offer flexible learning options to accommodate different schedules. Our courses are typically self-paced, allowing you to learn at your own convenience."
    }
  ]
};
