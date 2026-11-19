import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Users } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    tagline: "EASY SOLUTION FOR HR CONSULTING",
    heading: "We find people. Talent. Leaders. We grow skills. Careers. Confidence.",
    description: "Behind every good team is a good hire, and behind every good career is the right skill. We help software organisations find their people, and help people build the skills to grow.",
    primaryBtn: { text: "I'm Hiring", link: "/and/hr-services" },
    secondaryBtn: { text: "I Want to Upskill", link: "/and/courses" },
    image: "/assets/hr_carousel_1.jpg",
    badgeNumber: "100%",
    badgeLabel: "Pre-screened In Live Labs"
  },
  {
    id: 2,
    tagline: "BUSINESS SHAPED WORKFORCE SOLUTIONS",
    heading: "Build Strong Teams. Shape Better Futures.",
    description: "Empowering businesses through strategic talent acquisition, executive search, and workforce management with transparent 14-day turnaround SLAs.",
    primaryBtn: { text: "Explore HR Services", link: "/and/hr-services" },
    secondaryBtn: { text: "Consult With Us", link: "/and/contact" },
    image: "/assets/hr_carousel_2.jpg",
    badgeNumber: "< 14 Days",
    badgeLabel: "Average Sourcing Turnaround"
  },
  {
    id: 3,
    tagline: "INDUSTRY-FOCUSED IT TRAINING DIVISION",
    heading: "Bridging Practical Labs & Enterprise Standards.",
    description: "Hands-on technical upskilling in SAP Basis Security, SAP GRC, DevOps, and Data Analytics taught by senior industry practitioners in Hyderabad.",
    primaryBtn: { text: "Explore Courses", link: "/and/courses" },
    secondaryBtn: { text: "Download Syllabus", link: "/and/contact" },
    image: "/assets/hr_carousel_3.jpg",
    badgeNumber: "80%",
    badgeLabel: "Hands-on Practical Labs"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-[#E5E7EB]">
      {/* Background Decorative Accents matching Template Reference */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-40 hidden lg:block overflow-hidden">
        {/* Soft geometric green facet triangles */}
        <svg
          className="absolute right-0 top-0 h-full w-auto text-[#EAF7EE]"
          viewBox="0 0 500 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M500 0L300 200L500 450V0Z" fill="currentColor" fillOpacity="0.7" />
          <path d="M450 150L250 350L450 550V150Z" fill="#00A859" fillOpacity="0.08" />
          <path d="M500 350L350 500L500 600V350Z" fill="currentColor" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Template-style small green tag */}
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00A859]" />
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#00A859] uppercase">
                {slide.tagline}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-bold text-[#16191D] leading-[1.18] tracking-tight transition-all duration-300">
              {slide.heading}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#5E6874] leading-relaxed max-w-xl transition-all duration-300">
              {slide.description}
            </p>

            {/* Simple rectangular CTA buttons matching Template */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to={slide.primaryBtn.link}
                className="btn-green text-sm px-7 py-3 rounded-md font-semibold"
              >
                <span>{slide.primaryBtn.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to={slide.secondaryBtn.link}
                className="btn-outline text-sm px-7 py-3 rounded-md font-semibold"
              >
                <span>{slide.secondaryBtn.text}</span>
              </Link>
            </div>

            {/* Trust highlights under buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#5E6874] font-medium border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A859]" />
                <span>Single Point of Contact</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00A859]" />
                <span>Screened Shortlists Only</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#00A859]" />
                <span>Enterprise SLA Guaranteed</span>
              </div>
            </div>

            {/* Slider Navigation Controls matching Template */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center space-x-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? 'w-8 bg-[#00A859]' : 'w-2.5 bg-[#E5E7EB] hover:bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-1 pl-4 border-l border-[#E5E7EB]">
                <button
                  onClick={prevSlide}
                  className="p-1.5 rounded border border-[#E5E7EB] bg-white text-[#16191D] hover:bg-[#EAF7EE] hover:text-[#00A859] hover:border-[#00A859] transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-1.5 rounded border border-[#E5E7EB] bg-white text-[#16191D] hover:bg-[#EAF7EE] hover:text-[#00A859] hover:border-[#00A859] transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold text-[#5E6874] ml-2">
                  0{currentSlide + 1} / 0{heroSlides.length}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image with Geometric Green Polygon Background */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Green geometric accent polygon matching Acuvic template screenshot */}
            <div className="relative w-full max-w-lg aspect-4/3 sm:aspect-square">
              
              {/* Decorative geometric green angular shape backdrop */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-[#EAF7EE] rounded-2xl transform rotate-1 pointer-events-none" />
              <div className="absolute top-2 -left-3 w-28 h-28 bg-[#00A859]/10 rounded-xl transform -rotate-6 pointer-events-none" />
              
              {/* Main Photograph Container */}
              <div className="relative z-10 w-full h-full rounded-xl overflow-hidden border border-[#E5E7EB] shadow-card bg-white">
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16191D]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Floating Metric Badge matching Template */}
              <div className="absolute -bottom-5 -left-4 z-20 bg-white border border-[#E5E7EB] rounded-lg p-4 shadow-card-hover flex items-center gap-3">
                <div className="w-11 h-11 rounded-md bg-[#00A859] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {slide.badgeNumber}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#16191D]">Verified Track Record</div>
                  <div className="text-[11px] text-[#5E6874]">{slide.badgeLabel}</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
