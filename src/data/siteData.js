export const siteData = {
  brand: {
    name: "Varnith Global",
    legalName: "Varnith Technologies Private Limited",
    tagline: "Build Skills. Shape Your Future.",
    eyebrow: "LEARN • GROW • LEAD",
    heroDescription: "Expert IT training, career development and strategic HR solutions designed to move individuals and businesses forward.",
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
      image: "/assets/hero_bg.jpg",
      badge: "Professional IT Training & Modern Labs",
      caption: "Interactive classroom immersion and hands-on cloud workstations."
    },
    {
      id: 2,
      image: "/assets/experience_collab.jpg",
      badge: "Corporate Teamwork & Technical Synergy",
      caption: "Peer-driven problem solving and real-time enterprise scenarios."
    },
    {
      id: 3,
      image: "/assets/about_mentor.jpg",
      badge: "Career Mentoring & Strategic Placement",
      caption: "Direct 1-on-1 guidance from 10+ year IT industry veterans."
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
      id: "talent-acquisition",
      number: "01",
      title: "Talent Acquisition",
      description: "End-to-end recruitment matching enterprise hiring demands with pre-assessed, high-caliber tech talent in Hyderabad and pan-India.",
      features: ["Custom Sourcing Strategies", "Technical Pre-Screening in Real Labs", "Rapid Turnaround Times"],
      image: "/assets/hr_talent.jpg"
    },
    {
      id: "rpo",
      number: "02",
      title: "Recruitment Process Outsourcing (RPO)",
      description: "Scalable recruitment outsourcing taking over part or all of your internal talent acquisition function to reduce time-to-hire and cost-per-hire.",
      features: ["Dedicated Onsite/Offsite Recruiters", "Applicant Tracking Integration", "Transparent Metrics & SLA Management"],
      image: "/assets/team_conf.jpg"
    },
    {
      id: "executive-hiring",
      number: "03",
      title: "Executive Hiring Services",
      description: "Confidential and specialized headhunting for leadership positions, architects, IT directors, and C-suite innovators.",
      features: ["Leadership Market Mapping", "Discreet Outreach", "Culture-Fit & Strategic Alignment"],
      image: "/assets/hr_executive.jpg"
    },
    {
      id: "dei-hiring",
      number: "04",
      title: "Diversity, Equity & Inclusion (DE&I) Hiring",
      description: "Tailored talent programs designed to build balanced, diverse, and innovative engineering and management teams.",
      features: ["Bias-Free Candidate Shortlisting", "Inclusive Sourcing Channels", "Retention & Workplace Mentorship Advisory"],
      image: "/assets/experience_discussion.jpg"
    },
    {
      id: "talent-intelligence",
      number: "05",
      title: "Talent Intelligence",
      description: "Data-backed labor market analytics, compensation benchmarking, and talent availability insights across South India.",
      features: ["Salary Benchmarking Reports", "Competitor Talent Mapping", "Hiring Feasibility Forecasting"],
      image: "/assets/experience_presentation.jpg"
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
