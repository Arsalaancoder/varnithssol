import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#f7f9fc] py-12 sm:py-16 border-b border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-medium text-[#5b6b85]">
            <Link to="/and" className="hover:text-[#1e5bc6]">Home</Link>
            <span>/</span>
            <span className="text-[#00184a] font-semibold">Contact</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
              Hyderabad Campus & Office
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#00184a] tracking-tight">
              Talk to Us
            </h1>
            <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
              Have questions about course admissions, batch schedules, corporate recruitment partnerships or campus visits? Our counselors and talent directors are available to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact />

      {/* Embedded Location Map Preview */}
      <section className="py-12 sm:py-16 bg-[#f7f9fc] border-t border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
                Campus Location
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#00184a] mt-1">
                Bhanu Elite, Madhapur, Hyderabad
              </h2>
              <p className="text-xs sm:text-sm text-[#5b6b85] mt-0.5">
                1-90/B/C/1 Flat No 102, Bhanu Elite, Madhapur, Shaikpet, Hyderabad – 500081, Telangana
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Bhanu+Elite+Madhapur+Hyderabad+500081"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline shrink-0 text-center"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="rounded-xl overflow-hidden h-72 sm:h-96 w-full border border-[#e3e8f0] bg-white">
            <iframe
              title="Varnith Technologies Campus Map"
              src="https://maps.google.com/maps?q=Bhanu+Elite,+Madhapur,+Hyderabad+500081&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
