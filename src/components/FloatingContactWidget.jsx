import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white border border-[#e3e8f0] rounded-xl shadow-xl p-4 w-64 space-y-3 mb-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between border-b border-[#e3e8f0] pb-2">
            <span className="text-xs font-bold text-[#00184a] uppercase tracking-wider">
              Quick Contact
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#5b6b85] hover:text-[#00184a] p-1"
              aria-label="Close contact popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={`tel:${siteData.brand.rawPhone}`}
              className="flex items-center gap-2.5 p-2 rounded-lg bg-[#f7f9fc] hover:bg-[#eef2f8] text-xs font-semibold text-[#00184a] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#1e5bc6]" />
              <span>Call: {siteData.brand.phone}</span>
            </a>

            <a
              href={`mailto:${siteData.brand.email}`}
              className="flex items-center gap-2.5 p-2 rounded-lg bg-[#f7f9fc] hover:bg-[#eef2f8] text-xs font-semibold text-[#00184a] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#1e5bc6]" />
              <span>Email: {siteData.brand.email}</span>
            </a>

            <Link
              to="/and/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg bg-[#f6650a]/10 hover:bg-[#f6650a]/20 text-xs font-semibold text-[#f6650a] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquiry Form</span>
            </Link>
          </div>
        </div>
      ) : null}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-[#1e5bc6] hover:bg-[#15469e] text-white flex items-center justify-center shadow-md transition-colors"
        aria-label="Open contact widget"
      >
        <MessageSquare className="w-5 h-5" />
      </button>
    </div>
  );
}
