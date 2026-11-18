import React from 'react';
import { UserCheck, FileText, CheckCircle, Clock } from 'lucide-react';

const promises = [
  {
    icon: UserCheck,
    title: 'One point of contact',
    desc: 'One dedicated lead who knows your roles, your engineering team, and your delivery milestones from start to finish.'
  },
  {
    icon: FileText,
    title: 'A written role brief before sourcing',
    desc: 'We agree on what good looks like before searching, establishing clear criteria so nobody’s time is wasted.'
  },
  {
    icon: CheckCircle,
    title: 'Screened shortlists only',
    desc: 'Fewer resumes, better conversations. You only interview verified candidates we have technically evaluated.'
  },
  {
    icon: Clock,
    title: 'Regular updates without chasing',
    desc: 'You receive structured progress updates at an agreed rhythm. You never have to chase for candidate statuses.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-16 sm:py-20 border-b border-[#e3e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
            Our Commitment
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#00184a] tracking-tight">
            What Working with Us Feels Like
          </h2>
          <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
            Take the complete package or only the pieces you need. We shape our recruitment and training around your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#f7f9fc] border border-[#e3e8f0] rounded-xl p-6 hover:border-[#1e5bc6] transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#e3e8f0] text-[#1e5bc6] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#00184a]">
                  {p.title}
                </h3>
                <p className="text-sm text-[#5b6b85] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
