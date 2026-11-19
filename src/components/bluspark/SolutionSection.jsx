import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Search, FileText, UserCheck, Award, BookOpen, Layers, Laptop, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const hrProcess = [
  {
    step: '01',
    title: 'Understand Hiring Requirements',
    subtitle: 'Discovery & Engineering Alignment',
    desc: 'We conduct a comprehensive intake session with your hiring managers to analyze technical requirements, team dynamics, milestone targets, and operational expectations.',
    image: '/assets/experience_collab.jpg',
    points: ['In-depth tech stack review', 'Role prioritization & timeline agreement', 'Salary & market compensation benchmarking'],
    icon: Search
  },
  {
    step: '02',
    title: 'Define the Role and Skills',
    subtitle: 'Competency Scorecard & Brief',
    desc: 'We formalize a written role brief establishing explicit evaluation criteria, mandatory competencies, and behavioral benchmarks before candidate sourcing begins.',
    image: '/assets/hr_carousel_1.jpg',
    points: ['Agreed evaluation rubric', 'Clear must-have vs nice-to-have matrix', 'Zero ambiguity for hiring teams'],
    icon: FileText
  },
  {
    step: '03',
    title: 'Source and Screen Candidates',
    subtitle: 'Sandbox Vetting & Verification',
    desc: 'Candidates undergo rigorous technical evaluations and live cloud sandbox checks conducted by senior practitioners, not keyword matching algorithms.',
    image: '/assets/experience_lab.jpg',
    points: ['Practical capability testing', 'Comprehensive background & reference checks', 'Screened shortlists only'],
    icon: UserCheck
  },
  {
    step: '04',
    title: 'Coordinate Shortlisting and Selection',
    subtitle: 'Seamless Interview to Placement',
    desc: 'We deliver calibrated candidate dossiers, coordinate interview logistics, assist in offer negotiations, and provide a binding 90-day replacement warranty.',
    image: '/assets/team_conf.jpg',
    points: ['Turnaround in under 14 days', 'Candidate joining assurance', '90-day replacement guarantee'],
    icon: Award
  }
];

const trainingProcess = [
  {
    step: '01',
    title: 'Understand Learning Requirements',
    subtitle: 'Baseline & Career Path Mapping',
    desc: 'We evaluate each learner or corporate team’s current technical background, identifying specific knowledge gaps and career growth objectives.',
    image: '/assets/about_mentor.jpg',
    points: ['1-on-1 mentor assessment', 'Industry roadmap recommendation', 'Customized corporate modules available'],
    icon: BookOpen
  },
  {
    step: '02',
    title: 'Select the Right Program',
    subtitle: 'Curriculum & Track Alignment',
    desc: 'We align professionals with the optimal track—SAP Basis Security, SAP GRC 12.0, DevOps Automation, or Quality Engineering—designed for enterprise demand.',
    image: '/assets/hr_carousel_2.jpg',
    points: ['Enterprise-vetted syllabi', 'Flexible weekend & evening batches', 'Small batch sizes for maximum interaction'],
    icon: Layers
  },
  {
    step: '03',
    title: 'Deliver Practical Training',
    subtitle: '80% Live Enterprise Sandbox Immersion',
    desc: 'Students gain 24/7 access to live SAP GUI environments, AWS cloud sandboxes, and production-like CI/CD pipelines to build authentic operational muscle.',
    image: '/assets/course_sap_sec.jpg',
    points: ['Hands-on architecture labs', 'Real-world incident simulation', 'Direct guidance from working consultants'],
    icon: Laptop
  },
  {
    step: '04',
    title: 'Support Learning and Development',
    subtitle: 'Interview Mastery & Career Transition',
    desc: 'Upon completing lab projects, learners receive resume calibration, mock technical interviews, and placement advisory directly connected with enterprise software hiring teams.',
    image: '/assets/hr_carousel_3.jpg',
    points: ['Scenario-based interview preparation', 'Enterprise project portfolios', 'Direct introductions to hiring partners'],
    icon: Sparkles
  }
];

export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState('hr'); // 'hr' | 'training'
  const activeProcess = activeTab === 'hr' ? hrProcess : trainingProcess;

  return (
    <section id="solution" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching User Specification */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#0066CC] uppercase">
            OUR STRUCTURED PROCESS
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Practical People and Technology Solutions
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From identifying the right professionals to developing technical capabilities, Varnith supports businesses and learners through structured HR and training solutions.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/and/contact"
              className="btn-primary text-sm px-6 py-2.5"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Process Stream Selector Tabs */}
            <div className="inline-flex p-1 bg-slate-200 rounded-md">
              <button
                onClick={() => setActiveTab('hr')}
                className={`px-4 py-1.5 text-xs font-bold rounded-sm transition-all cursor-pointer ${
                  activeTab === 'hr'
                    ? 'bg-white text-[#0B2545] shadow-xs'
                    : 'text-slate-600 hover:text-[#0B2545]'
                }`}
              >
                HR Consulting Process
              </button>
              <button
                onClick={() => setActiveTab('training')}
                className={`px-4 py-1.5 text-xs font-bold rounded-sm transition-all cursor-pointer ${
                  activeTab === 'training'
                    ? 'bg-white text-[#0B2545] shadow-xs'
                    : 'text-slate-600 hover:text-[#0B2545]'
                }`}
              >
                Training & Development Process
              </button>
            </div>
          </div>
        </div>

        {/* 4 Alternating Image-and-Text Process Blocks */}
        <div className="space-y-16 sm:space-y-20">
          {activeProcess.map((item, idx) => {
            const isReverse = idx % 2 === 1;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isReverse ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`lg:col-span-6 space-y-4 ${isReverse ? 'lg:col-start-7' : ''}`}>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-extrabold text-[#0066CC] tracking-wider uppercase bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-sm">
                      PHASE {item.step}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Link
                      to={activeTab === 'hr' ? '/and/hr-services' : '/and/courses'}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B2545] hover:text-[#0066CC] transition-colors"
                    >
                      <span>Learn more about this phase</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`lg:col-span-6 ${isReverse ? 'lg:col-start-1' : ''}`}>
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 sm:h-84 object-cover"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-md bg-white/95 border border-slate-200 flex items-center justify-center text-[#0B2545] shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

