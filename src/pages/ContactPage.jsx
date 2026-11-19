import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import InnerPageLayout from '../components/InnerPageLayout';
import { siteData } from '../data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'HR Consulting Services',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const subjects = [
    'HR Consulting & Recruitment',
    'Contract Staffing & RPO',
    'Executive Hiring',
    'SAP Basis Security Training',
    'SAP GRC Training',
    'DevOps Engineering Training',
    'Quality Engineering / Testing',
    'Python Programming & Automation',
    'College Engagements & Campus Drives',
    'General Inquiry'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const endpoint = import.meta.env.VITE_CONTACT_API_URL;
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() })
        });
        if (!res.ok) throw new Error('Submission failed');
      } else {
        const existing = JSON.parse(localStorage.getItem('varnith_contact_messages') || '[]');
        existing.push({
          ...formData,
          id: Date.now(),
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('varnith_contact_messages', JSON.stringify(existing));
        await new Promise((r) => setTimeout(r, 400));
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'HR Consulting Services',
        message: ''
      });
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please reach us directly at info@varnithglobal.com or call +91 79954 83137.');
    }
  };

  return (
    <InnerPageLayout
      title="Contact Us"
      subtitle="Reach our Hyderabad headquarters in Madhapur for enterprise recruitment partnerships, contract staffing, or training admissions."
      breadcrumb={[{ label: 'Contact Us' }]}
      activePath="/and/contact"
    >
      <div className="space-y-12">
        
        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] text-[#063568] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#5E6874] font-medium">Telephone Direct</div>
              <a href={`tel:${siteData.brand.rawPhone}`} className="text-sm font-bold text-[#16191D] hover:text-[#063568] transition-colors">
                {siteData.brand.phone}
              </a>
              <div className="text-[11px] text-[#5E6874] mt-0.5">Mon – Sat: 9:00 AM – 7:00 PM IST</div>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] text-[#063568] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#5E6874] font-medium">Official Inquiries</div>
              <a href={`mailto:${siteData.brand.email}`} className="text-sm font-bold text-[#16191D] hover:text-[#063568] transition-colors">
                {siteData.brand.email}
              </a>
              <div className="text-[11px] text-[#5E6874] mt-0.5">Response SLA: &lt; 2 Hours</div>
            </div>
          </div>
        </div>

        {/* Corporate Contact Form */}
        <div className="border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 bg-white shadow-card space-y-6">
          <div>
            <span className="text-xs font-bold text-[#063568] uppercase tracking-wider block">
              SEND AN INQUIRY
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#16191D]">
              Get in Touch with Our Team
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6874] mt-1">
              Please provide your details below and an account lead will contact you.
            </p>
          </div>

          {status === 'success' ? (
            <div className="p-8 rounded-xl bg-[#F2F3FC] border border-[#063568] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#063568] text-white mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#16191D]">Message Sent Successfully</h4>
              <p className="text-xs sm:text-sm text-[#5E6874] max-w-md mx-auto">
                Thank you for contacting Varnith Technologies. Our practice lead will get in touch with you shortly.
              </p>
              <button onClick={() => setStatus('idle')} className="btn-outline text-xs mt-2">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#16191D] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#063568] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#16191D] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@company.com"
                    className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#063568] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#16191D] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#063568] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#16191D] mb-1">
                    Service / Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#063568] focus:outline-hidden bg-white"
                  >
                    {subjects.map((sub, idx) => (
                      <option key={idx} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#16191D] mb-1">
                  Message or Requirement *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the roles you are hiring for, or the course training details you need..."
                  className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#063568] focus:outline-hidden resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-green text-xs px-6 py-2.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Registered Office & Google Map */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#063568]">
                HEADQUARTERS
              </span>
              <h3 className="text-xl font-bold text-[#16191D]">
                Bhanu Elite, Madhapur, Hyderabad
              </h3>
              <p className="text-xs text-[#5E6874] mt-0.5">
                {siteData.brand.address.full}
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Bhanu+Elite+Madhapur+Hyderabad+500081"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs px-4 py-2 shrink-0"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="rounded-xl overflow-hidden h-72 w-full border border-[#E5E7EB] bg-gray-50">
            <iframe
              title="Varnith Technologies Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.338575003058!2d78.3888365!3d17.4435017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11be7bc222271871!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </InnerPageLayout>
  );
}
