import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white border border-[#E5E7EB] rounded-xl shadow-xl p-4 w-72 space-y-3 mb-2 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2">
            <span className="text-xs font-bold text-[#16191D] uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#063568]" />
              <span>Talk to Varnith</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#5E6874] hover:text-[#16191D] p-1 cursor-pointer"
              aria-label="Close contact popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={`tel:${siteData.brand.rawPhone}`}
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F8F9FA] hover:bg-[#F2F3FC] text-xs font-semibold text-[#16191D] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#063568]" />
              <span>Call: {siteData.brand.phone}</span>
            </a>

            <a
              href={`mailto:${siteData.brand.email}`}
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F8F9FA] hover:bg-[#F2F3FC] text-xs font-semibold text-[#16191D] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#063568]" />
              <span>Email: {siteData.brand.email}</span>
            </a>

            <Link
              to="/and/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F2F3FC] hover:bg-[#063568] hover:text-white text-xs font-semibold text-[#063568] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Direct Inquiry</span>
            </Link>
          </div>
        </div>
      ) : null}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-[#063568] hover:bg-[#04274d] text-white flex items-center justify-center shadow-lg transition-all cursor-pointer"
        aria-label="Open contact widget"
      >
        <MessageSquare className="w-5 h-5" />
      </button>
    </div>
  );
}
