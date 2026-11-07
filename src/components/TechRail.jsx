import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const technologies = [
  { name: 'Docker', category: 'DevOps & Cloud', icon: '/tech-icons/docker.svg', desc: 'Containers & Images' },
  { name: 'Kubernetes', category: 'DevOps & Cloud', icon: '/tech-icons/kubernetes.svg', desc: 'Cluster Orchestration' },
  { name: 'AWS Cloud', category: 'DevOps & Cloud', icon: '/tech-icons/aws.svg', desc: 'Enterprise Cloud' },
  { name: 'Terraform', category: 'DevOps & Cloud', icon: '/tech-icons/terraform.svg', desc: 'Infrastructure as Code' },
  { name: 'Jenkins', category: 'DevOps & Cloud', icon: '/tech-icons/jenkins.svg', desc: 'CI/CD Pipelines' },
  { name: 'Linux', category: 'Systems & Cloud', icon: '/tech-icons/linux.svg', desc: 'Red Hat & Ubuntu' },
  { name: 'SAP NetWeaver', category: 'Enterprise ERP', icon: '/tech-icons/sap.svg', desc: 'Basis Architecture' },
  { name: 'SAP HANA', category: 'Enterprise ERP', icon: '/tech-icons/sap.svg', desc: 'In-Memory Database' },
  { name: 'SAP GRC', category: 'Risk & Governance', icon: '/tech-icons/sap.svg', desc: 'Access Control & SoD' },
  { name: 'Python', category: 'Programming', icon: '/tech-icons/python.svg', desc: 'Backend & Automation' },
  { name: 'Power BI', category: 'Data & Analytics', icon: '/tech-icons/powerbi.svg', desc: 'Interactive Dashboards' },
  { name: 'PostgreSQL', category: 'Data & Analytics', icon: '/tech-icons/postgresql.svg', desc: 'Relational Database' },
  { name: 'Tableau', category: 'Data & Analytics', icon: '/tech-icons/tableau.svg', desc: 'Visual Analytics' },
  { name: 'Selenium', category: 'QA Automation', icon: '/tech-icons/selenium.svg', desc: 'WebDriver Framework' },
  { name: 'Postman', category: 'QA Automation', icon: '/tech-icons/postman.svg', desc: 'API Testing & Newman' },
  { name: 'Jira', category: 'QA & Management', icon: '/tech-icons/jira.svg', desc: 'Defect & Agile Tracking' },
  { name: 'React', category: 'Frontend', icon: '/tech-icons/react.svg', desc: 'Modern Web UI' },
  { name: 'GitHub', category: 'DevOps & Git', icon: '/tech-icons/github.svg', desc: 'GitOps & CI Workflows' },
  { name: 'FastAPI', category: 'Backend', icon: '/tech-icons/fastapi.svg', desc: 'High-Speed APIs' },
  { name: 'Git', category: 'DevOps & Git', icon: '/tech-icons/git.svg', desc: 'Version Control' },
];

export default function TechRail() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeList = [...technologies, ...technologies];

  return (
    <section className="relative w-full bg-[#F4F5EF] py-8 sm:py-10 border-b border-[#183629]/10 overflow-hidden shadow-xs">
      {/* Top Header Pill & Text */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#183629] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#183629]">
            Enterprise Technologies & Cloud Sandboxes
          </span>
          <span className="hidden md:inline-block px-2.5 py-0.5 rounded-full bg-[#183629]/10 text-[10px] font-bold text-[#183629] tracking-wider uppercase">
            Official Toolchain
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#737D73] font-medium">
          <Terminal className="w-3.5 h-3.5 text-[#183629]" />
          <span>Mastered across DevOps, SAP, Data, QA & Python Tracks</span>
        </div>
      </div>

      {/* 
        Continuous Scrolling Infinite Tech Marquee:
        Smooth horizontal motion, pauses gracefully when hovered
      */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 38,
            repeat: Infinity,
          }}
          className="flex items-center gap-4 sm:gap-6 w-max cursor-grab active:cursor-grabbing hover:[animation-play-state:paused]"
        >
          {marqueeList.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-md hover:border-[#183629]/30 hover:scale-105 transition-all duration-300 group shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F4F5EF] flex items-center justify-center p-2 group-hover:bg-[#EAF0E8] transition-colors shrink-0">
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  className="w-6 h-6 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#183629] tracking-tight group-hover:text-[#DFAE22] transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-[10px] text-[#737D73] font-medium whitespace-nowrap">
                  {tech.desc}
                </span>
              </div>
              <span className="ml-1 text-[9px] font-semibold uppercase px-2 py-0.5 rounded-md bg-[#183629]/5 text-[#183629]/80 hidden md:inline-block">
                {tech.category.split(' ')[0]}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
