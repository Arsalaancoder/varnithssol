import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Activity, CheckCircle2 } from 'lucide-react';

// Specific mentor and telemetry metadata for each course
const courseTelemetry = {
  devops: {
    leadMentor: {
      name: "S. Raghunath",
      title: "Senior DevOps & Cloud Architect",
      exp: "12+ Years Enterprise Exp",
      avatar: "/assets/about_mentor.jpg"
    },
    sparkline: "M 0 65 Q 40 25, 80 50 T 150 25 T 220 55 T 300 15",
    sparklineArea: "M 0 65 Q 40 25, 80 50 T 150 25 T 220 55 T 300 15 L 300 90 L 0 90 Z",
    sparklineLabels: ["W1", "W3", "W6", "W9", "W12"],
    bars: [
      { label: "Linux", pct: "85%" },
      { label: "Docker", pct: "92%" },
      { label: "K8s", pct: "95%" },
      { label: "CI/CD", pct: "88%" },
      { label: "AWS", pct: "98%" },
    ],
    metric1: { label: "SANDBOX LABS", val: "120+ Hrs", trend: "↑ 18%" },
    metric2: { label: "LIVE PIPELINES", val: "24 Configs", trend: "↑ 94%" },
    totalMetric: { label: "DEPLOYMENT VELOCITY", val: "5,940", unit: "runs", badge: "↑ 14.2%" },
    insight: "Students deploy 16+ production pipelines directly to AWS & Kubernetes sandboxes.",
    studentAvatars: [
      "/assets/student_female_1.avif",
      "/assets/student_male_1.avif",
      "/assets/student_female_2.avif",
      "/assets/student_male_2.avif"
    ]
  },
  "sap-basis-security": {
    leadMentor: {
      name: "Venkat Rao K.",
      title: "Principal SAP NetWeaver Consultant",
      exp: "14+ Years SAP Delivery",
      avatar: "/assets/about_mentor.jpg"
    },
    sparkline: "M 0 70 Q 50 35, 100 45 T 180 30 T 240 40 T 300 18",
    sparklineArea: "M 0 70 Q 50 35, 100 45 T 180 30 T 240 40 T 300 18 L 300 90 L 0 90 Z",
    sparklineLabels: ["Admin", "PFCG", "TMS", "Kernel", "Audit"],
    bars: [
      { label: "SU01", pct: "90%" },
      { label: "PFCG", pct: "96%" },
      { label: "TMS", pct: "84%" },
      { label: "HANA", pct: "92%" },
      { label: "SSO", pct: "88%" },
    ],
    metric1: { label: "SYSTEM COPIES", val: "18 Drills", trend: "↑ 100%" },
    metric2: { label: "SECURITY AUDITS", val: "32 Baselines", trend: "↑ 98%" },
    totalMetric: { label: "ENTERPRISE UPTIME", val: "99.98%", unit: "SLAs", badge: "↑ 4.8/5" },
    insight: "Live access to NetWeaver 7.5 and S/4HANA sandboxes for authorization testing.",
    studentAvatars: [
      "/assets/student_male_2.avif",
      "/assets/student_female_2.avif",
      "/assets/student_male_1.avif",
      "/assets/student_female_1.avif"
    ]
  },
  "sap-grc": {
    leadMentor: {
      name: "Priya Bhaskar",
      title: "Enterprise GRC & Risk Strategist",
      exp: "11+ Years Corporate Risk",
      avatar: "/assets/student_female_2.avif"
    },
    sparkline: "M 0 60 Q 45 40, 90 20 T 170 45 T 235 25 T 300 12",
    sparklineArea: "M 0 60 Q 45 40, 90 20 T 170 45 T 235 25 T 300 12 L 300 90 L 0 90 Z",
    sparklineLabels: ["ARA", "ARM", "EAM", "BRM", "Audit"],
    bars: [
      { label: "ARA", pct: "94%" },
      { label: "ARM", pct: "91%" },
      { label: "EAM", pct: "97%" },
      { label: "SoD", pct: "99%" },
      { label: "Rules", pct: "89%" },
    ],
    metric1: { label: "SoD RULESETS", val: "450+ Rules", trend: "↑ 100%" },
    metric2: { label: "EAM FIREFIGHTER", val: "80+ Scenarios", trend: "↑ 96%" },
    totalMetric: { label: "RISK MITIGATION INDEX", val: "98.7%", unit: "compliant", badge: "↑ 9.5%" },
    insight: "Master Segregation of Duties (SoD) matrices for Fortune 500 audit readiness.",
    studentAvatars: [
      "/assets/student_female_1.avif",
      "/assets/student_male_2.avif",
      "/assets/student_female_2.avif",
      "/assets/student_male_1.avif"
    ]
  },
  "data-analyst": {
    leadMentor: {
      name: "Anand M.",
      title: "Lead BI Architect & Data Scientist",
      exp: "9+ Years Big Data",
      avatar: "/assets/student_male_1.avif"
    },
    sparkline: "M 0 75 Q 40 30, 90 55 T 160 20 T 230 45 T 300 10",
    sparklineArea: "M 0 75 Q 40 30, 90 55 T 160 20 T 230 45 T 300 10 L 300 90 L 0 90 Z",
    sparklineLabels: ["SQL", "Excel", "Python", "PowerBI", "DAX"],
    bars: [
      { label: "SQL", pct: "96%" },
      { label: "PowerBI", pct: "94%" },
      { label: "Python", pct: "86%" },
      { label: "DAX", pct: "90%" },
      { label: "Tableau", pct: "88%" },
    ],
    metric1: { label: "SQL QUERIES", val: "850+ Exec", trend: "↑ 22%" },
    metric2: { label: "BI DASHBOARDS", val: "14 Live", trend: "↑ 95%" },
    totalMetric: { label: "BUSINESS IMPACT SCORE", val: "₹59,410", unit: "k value", badge: "↑ 8.20%" },
    insight: "Build end-to-end interactive financial and product dashboards from raw SQL datasets.",
    studentAvatars: [
      "/assets/student_male_1.avif",
      "/assets/student_female_1.avif",
      "/assets/student_male_2.avif",
      "/assets/student_female_2.avif"
    ]
  },
  "software-testing": {
    leadMentor: {
      name: "Divya N.",
      title: "Senior QA Automation Specialist",
      exp: "10+ Years QA & SDET",
      avatar: "/assets/student_female_1.avif"
    },
    sparkline: "M 0 68 Q 50 20, 100 50 T 175 30 T 240 55 T 300 16",
    sparklineArea: "M 0 68 Q 50 20, 100 50 T 175 30 T 240 55 T 300 16 L 300 90 L 0 90 Z",
    sparklineLabels: ["Manual", "Jira", "Selenium", "Postman", "CI/CD"],
    bars: [
      { label: "Manual", pct: "98%" },
      { label: "Selenium", pct: "92%" },
      { label: "Postman", pct: "95%" },
      { label: "Jira", pct: "99%" },
      { label: "TestNG", pct: "89%" },
    ],
    metric1: { label: "AUTOMATION SCRIPTS", val: "340+ Tests", trend: "↑ 35%" },
    metric2: { label: "DEFECTS LOGGED", val: "100% Tracked", trend: "↑ 99%" },
    totalMetric: { label: "TEST SUITE RELIABILITY", val: "99.4%", unit: "pass rate", badge: "↑ 5.2%" },
    insight: "Automate web UIs with Selenium WebDriver and REST API endpoints using Postman.",
    studentAvatars: [
      "/assets/student_female_2.avif",
      "/assets/student_male_1.avif",
      "/assets/student_female_1.avif",
      "/assets/student_male_2.avif"
    ]
  },
  python: {
    leadMentor: {
      name: "K. Karthik",
      title: "Full-Stack Python Engineer",
      exp: "8+ Years Backend Architect",
      avatar: "/assets/student_male_2.avif"
    },
    sparkline: "M 0 70 Q 40 30, 85 45 T 165 15 T 230 40 T 300 12",
    sparklineArea: "M 0 70 Q 40 30, 85 45 T 165 15 T 230 40 T 300 12 L 300 90 L 0 90 Z",
    sparklineLabels: ["Core", "FastAPI", "Django", "Postgres", "Deploy"],
    bars: [
      { label: "OOP", pct: "94%" },
      { label: "FastAPI", pct: "91%" },
      { label: "Django", pct: "88%" },
      { label: "SQL", pct: "95%" },
      { label: "APIs", pct: "97%" },
    ],
    metric1: { label: "REST APIS", val: "48 Endpoints", trend: "↑ 28%" },
    metric2: { label: "DB MODELS", val: "22 Schemas", trend: "↑ 92%" },
    totalMetric: { label: "BACKEND THROUGHPUT", val: "2,950", unit: "req/s", badge: "↑ 12.5%" },
    insight: "Develop high-performance REST APIs with FastAPI, PostgreSQL ORM, and Docker deployment.",
    studentAvatars: [
      "/assets/student_male_2.avif",
      "/assets/student_male_1.avif",
      "/assets/student_female_2.avif",
      "/assets/student_female_1.avif"
    ]
  }
};

export default function CourseCardModern({ course, isHighlighted = false }) {
  const [activeTab, setActiveTab] = useState('Overview'); // 'Overview' | 'Live Labs' | 'Outcomes'
  const meta = courseTelemetry[course.slug] || courseTelemetry.devops;

  const tabs = ['Overview', 'Live Labs', 'Outcomes'];

  return (
    <div
      className={`group relative bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.07),0_4px_12px_-2px_rgba(0,0,0,0.03)] border transition-all duration-500 flex flex-col justify-between w-full select-none ${
        isHighlighted
          ? 'border-[#183629]/40 ring-2 ring-[#F2C94C]/40 shadow-xl'
          : 'border-stone-200/80 hover:border-[#183629]/30 hover:shadow-2xl'
      }`}
    >
      {/* 
        1. Top Header Row: 
        Mini Icon inside rounded box + "Performance / Track Label" + Category 
      */}
      <div>
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#F4F5EF] border border-[#183629]/10 flex items-center justify-center text-[#183629] group-hover:bg-[#183629] group-hover:text-[#F2C94C] transition-colors duration-300">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-tight text-[#183629] uppercase">
                {course.title}
              </span>
              <span className="text-[10px] text-[#737D73] block -mt-0.5 font-medium">
                Track {course.number} • {course.duration}
              </span>
            </div>
          </div>

          <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#183629]/5 text-[#183629] border border-[#183629]/10">
            {course.level}
          </span>
        </div>

        {/* 
          2. Segment Pill Tabs matching the reference image:
          [New Users] [Online Sales] [Daily Sales] -> [Overview] [Live Labs] [Outcomes]
        */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-[#F4F5EF] border border-[#183629]/5 mb-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`py-1.5 text-center text-xs font-bold rounded-xl transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-white text-[#183629] shadow-xs'
                  : 'text-[#737D73] hover:text-[#183629]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 
          3. Tab Content Section:
          Directly recreates the 3 card variations from the user reference screenshot!
        */}
        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            {/* TAB 1: OVERVIEW (Instructor Spotlight + Learner Stack matching Center Card in screenshot) */}
            {activeTab === 'Overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Top Instructor Card Pill */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#F4F5EF]/80 border border-stone-200/60">
                  <div className="relative shrink-0">
                    <img
                      src={meta.leadMentor.avatar}
                      alt={meta.leadMentor.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#183629] text-[#F2C94C] flex items-center justify-center text-[8px] font-bold">
                      ✓
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#737D73]">
                      TOP MENTOR
                    </span>
                    <span className="text-sm font-bold text-[#183629] leading-tight">
                      {meta.leadMentor.name}
                    </span>
                    <span className="text-[11px] text-[#737D73] font-medium leading-tight">
                      {meta.leadMentor.title} • {meta.leadMentor.exp}
                    </span>
                  </div>
                </div>

                {/* Primary Metric Number + Growth Pill */}
                <div className="pt-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#737D73] block">
                    TOTAL ACTIVE LEARNERS
                  </span>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#183629] tracking-tight">
                        5,9k
                      </span>
                      <span className="text-xs font-semibold text-[#737D73]">graduates</span>
                    </div>
                    <span className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      ↑ 8,20%
                    </span>
                  </div>
                </div>

                {/* Overlapping Alumni Avatars + Link */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center -space-x-2">
                    {meta.studentAvatars.map((av, idx) => (
                      <img
                        key={idx}
                        src={av}
                        alt="Enrolled student"
                        className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-xs"
                      />
                    ))}
                    <div className="w-7 h-7 rounded-full bg-[#183629] text-[#F2C94C] text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                      +40
                    </div>
                  </div>

                  <Link
                    to={`/and/courses/${course.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#183629] hover:text-[#DFAE22] transition-colors group/link"
                  >
                    <span>View Track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )}

            {/* TAB 2: LIVE LABS (Wavy Sparkline Graph matching Left Card in screenshot) */}
            {activeTab === 'Live Labs' && (
              <motion.div
                key="livelabs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                {/* 2 Mini Stat Columns matching reference */}
                <div className="grid grid-cols-2 gap-3 pb-1">
                  <div className="p-2.5 rounded-xl bg-[#F4F5EF]/80 border border-stone-200/50">
                    <span className="text-[9px] font-bold tracking-wider uppercase text-[#737D73] block">
                      {meta.metric1.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#183629] flex items-center gap-1 mt-0.5">
                      <span className="text-emerald-600">{meta.metric1.trend}</span>
                      <span>{meta.metric1.val}</span>
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#F4F5EF]/80 border border-stone-200/50">
                    <span className="text-[9px] font-bold tracking-wider uppercase text-[#737D73] block">
                      {meta.metric2.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#183629] flex items-center gap-1 mt-0.5">
                      <span className="text-emerald-600">{meta.metric2.trend}</span>
                      <span>{meta.metric2.val}</span>
                    </span>
                  </div>
                </div>

                {/* Big Metric Value */}
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#737D73] block">
                    {meta.totalMetric.label}
                  </span>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#183629] tracking-tight">
                        {meta.totalMetric.val}
                      </span>
                      <span className="text-xs font-semibold text-[#737D73]">
                        {meta.totalMetric.unit}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-0.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      {meta.totalMetric.badge}
                    </span>
                  </div>
                </div>

                {/* Smooth Wavy Sparkline Graph matching screenshot violet curve */}
                <div className="relative pt-1 pb-1">
                  <svg className="w-full h-16 overflow-visible" viewBox="0 0 300 90">
                    <defs>
                      <linearGradient id={`sparkArea-${course.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id={`sparkLine-${course.id}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#A855F7" />
                      </linearGradient>
                    </defs>
                    <path
                      d={meta.sparklineArea}
                      fill={`url(#sparkArea-${course.id})`}
                    />
                    <path
                      d={meta.sparkline}
                      fill="none"
                      stroke={`url(#sparkLine-${course.id})`}
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Sparkline Axis Labels */}
                  <div className="flex items-center justify-between text-[10px] text-[#737D73] font-medium pt-1 px-1">
                    {meta.sparklineLabels.map((lbl, i) => (
                      <span key={i}>{lbl}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: OUTCOMES (Vertical Gradient Bar Chart matching Right Card in screenshot) */}
            {activeTab === 'Outcomes' && (
              <motion.div
                key="outcomes"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                {/* Top Stat Summary */}
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#737D73] block">
                      AVERAGE PLACEMENT INDEX
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#183629] tracking-tight">
                      2,950
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    ↑ 96.4%
                  </span>
                </div>

                {/* Vertical Gradient Bar Chart matching reference screenshot */}
                <div className="h-24 pt-2 flex items-end justify-between gap-3 px-2 border-b border-stone-200/60 pb-2">
                  {meta.bars.map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="w-full max-w-[28px] h-full flex items-end">
                        <div
                          style={{ height: bar.pct }}
                          className="w-full rounded-t-lg bg-gradient-to-t from-[#6366F1] to-[#A855F7] transition-all duration-500 shadow-xs"
                        />
                      </div>
                      <span className="text-[10px] text-[#737D73] font-medium whitespace-nowrap">
                        {bar.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] text-[#737D73] font-medium pt-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Enterprise Partner Certified
                  </span>
                  <span>100% Practical Verification</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 
          4. Bottom Prompt / Footer Note matching the reference image:
          "Increase 25% more hands-on lab time to reach enterprise benchmarks..."
        */}
        <div className="pt-3 border-t border-stone-200/60 mt-3">
          <p className="text-[11px] text-[#737D73] font-medium leading-relaxed line-clamp-2">
            {meta.insight}
          </p>
        </div>
      </div>

      {/* 
        5. Bottom Action: Explore Course Button linking to course details 
      */}
      <div className="pt-4 mt-2">
        <Link
          to={`/and/courses/${course.slug}`}
          className="w-full py-2.5 px-4 rounded-xl bg-[#F4F5EF] hover:bg-[#183629] text-[#183629] hover:text-[#F2C94C] text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-[#183629]/10 group/btn shadow-xs active:scale-98"
        >
          <span>Explore Syllabus & Labs</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
