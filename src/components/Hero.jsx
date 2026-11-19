import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    tagline: "WELCOME TO THE BEST SOLUTION",
    titleStart: "Easy Solution",
    titleHighlight: "For HR Consulting",
    description: "The right leadership and talent you can get with us. Expand capabilities for your business growth. We help software organisations find exceptional talent and professionals build career-defining skills.",
    primaryBtn: { text: "Explore More", link: "/and/hr-services" },
    secondaryBtn: { text: "How We Work", link: "/and/about" }
  },
  {
    id: 2,
    tagline: "EMPOWERING PEOPLE & BUSINESSES",
    titleStart: "We Find People.",
    titleHighlight: "We Grow Skills.",
    description: "Behind every high-performing team is a verified hire, and behind every good career is real technical depth. Sourcing pre-screened talent with a guaranteed 14-day delivery SLA.",
    primaryBtn: { text: "Find Talent", link: "/and/hr-services" },
    secondaryBtn: { text: "Our Methodology", link: "/and/about" }
  },
  {
    id: 3,
    tagline: "ENTERPRISE TECHNICAL TRAINING",
    titleStart: "Bridging Practical Labs",
    titleHighlight: "& Industry Standards",
    description: "Hands-on ERP, Cloud and Data upskilling taught by active software practitioners in Madhapur, Hyderabad. 80% practical immersion with real live system access.",
    primaryBtn: { text: "Explore Courses", link: "/and/courses" },
    secondaryBtn: { text: "View Lab Curriculum", link: "/and/courses" }
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full bg-[#F7F9FB] overflow-hidden border-b border-[#EAEAEA] min-h-[560px] lg:min-h-[640px] flex items-center">
      {/* Background photographic texture overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url('/assets/hero_bg.jpg')` }}
      />

      {/* Acuvic Geometric Faceted Origami Triangles on Right Edge */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block overflow-hidden z-0">
        <svg
          className="absolute right-0 top-0 h-full w-[600px] text-[#00A859]"
          viewBox="0 0 600 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main green geometric facet */}
          <polygon points="450,0 600,0 600,320 380,180" fill="#00A859" fillOpacity="0.85" />
          {/* Dark blue / deep purple facet */}
          <polygon points="600,320 600,580 480,480 380,180" fill="#261C4E" fillOpacity="0.9" />
          {/* Light teal facet */}
          <polygon points="480,480 600,580 600,700 360,650" fill="#10B981" fillOpacity="0.75" />
          {/* Accent small facets */}
          <polygon points="320,240 380,180 480,480 340,380" fill="#008F4C" fillOpacity="0.4" />
          <polygon points="520,80 600,160 580,260" fill="#FFFFFF" fillOpacity="0.2" />
          {/* Subtle grid lines */}
          <line x1="380" y1="180" x2="600" y2="320" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="480" y1="480" x2="380" y2="180" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Left-aligned content matching Acuvic */}
          <div className="lg:col-span-7 space-y-6 pt-4 lg:pt-0">
            
            {/* Template-style small green tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-slate-200/60 rounded-full shadow-xs">
              <span className="h-2 w-2 rounded-full bg-[#00A859]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#00A859] uppercase">
                {slide.tagline}
              </span>
            </div>

            {/* Acuvic Dark Purple Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#261C4E] leading-[1.14] tracking-tight">
              {slide.titleStart}{' '}
              <span className="block text-[#00A859] mt-1 sm:mt-2">
                {slide.titleHighlight}
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#5E6874] leading-relaxed max-w-xl">
              {slide.description}
            </p>

            {/* Acuvic CTA Buttons: Green Rectangular Explore More + Play-circle How We Work */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                to={slide.primaryBtn.link}
                className="bg-[#00A859] hover:bg-[#008F4C] text-white text-sm font-bold px-7 py-3 rounded-sm shadow-sm transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{slide.primaryBtn.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to={slide.secondaryBtn.link}
                className="inline-flex items-center gap-3 text-sm font-bold text-[#261C4E] hover:text-[#00A859] px-4 py-3 transition-colors cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#00A859] group-hover:bg-[#00A859] group-hover:text-white group-hover:border-[#00A859] transition-all">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>{slide.secondaryBtn.text}</span>
              </Link>
            </div>

            {/* Slider Navigation Controls matching Template */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-200/80">
              <div className="flex items-center space-x-1.5">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx ? 'w-7 bg-[#00A859]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-1 pl-4 border-l border-slate-300">
                <button
                  onClick={prevSlide}
                  className="p-1.5 rounded-sm border border-slate-200 bg-white text-[#261C4E] hover:bg-[#00A859] hover:text-white hover:border-[#00A859] transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-1.5 rounded-sm border border-slate-200 bg-white text-[#261C4E] hover:bg-[#00A859] hover:text-white hover:border-[#00A859] transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold text-[#64748B] ml-2">
                  0{currentSlide + 1} / 0{heroSlides.length}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Standing Business Executive Cutout matching Acuvic Reference */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end self-end pt-6 lg:pt-0">
            <div className="relative w-full max-w-[420px] lg:max-w-[480px]">
              
              {/* Soft glow circle behind person */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/70 rounded-full blur-2xl pointer-events-none" />

              {/* Standing Cutout Corporate Executive holding tablet */}
              <div className="relative z-10 flex justify-center items-end">
                <img
                  src="/assets/acuvic_hero_person.jpg"
                  alt="Varnith Corporate Executive"
                  className="w-full h-auto max-h-[520px] object-contain drop-shadow-2xl"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
