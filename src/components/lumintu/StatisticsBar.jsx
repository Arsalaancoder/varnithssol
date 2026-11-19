import React from 'react';

export default function StatisticsBar({ items = [] }) {
  return (
    <section className="bg-[#063568] text-white py-8 sm:py-10 border-b border-[#04274d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20 text-center">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className={`flex flex-col items-center justify-center p-3 sm:p-4 ${idx > 0 ? 'pt-4 md:pt-0' : ''}`}
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white mb-1">
                {item.title}
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/90">
                {item.subtitle}
              </span>
              {item.desc && (
                <span className="text-[11px] text-white/70 mt-0.5 hidden sm:block">
                  {item.desc}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
