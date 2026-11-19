import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Mail, 
  Phone 
} from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ClientLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | notice

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('notice');
    }, 600);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#0A3857]">Home</Link>
            <span>/</span>
            <span className="text-[#0A3857] font-semibold">Client login</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
              <User className="w-4 h-4 text-[#127DC4]" />
              <span>Enterprise Client Portal</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3857] tracking-tight leading-tight">
              Client login
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our client portal is on its way. Soon you will see your open positions, shortlists, interview dates and joining status in one place. Until then, your Varnith contact is just a call or an email away, and will keep you updated.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary text-sm font-semibold">
                Contact us
              </Link>
              <Link to="/hire" className="btn-secondary text-sm font-semibold">
                Explore HR Consulting
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. LOGIN INTERFACE & CLIENT SUPPORT */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          
          <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-2xs space-y-6">
            <div className="space-y-1 border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-[#0A3857]">Account Sign In</h2>
              <p className="text-xs text-slate-500">Access your organization's recruitment dashboard and candidate dossiers.</p>
            </div>

            {status === 'notice' && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-md text-xs sm:text-sm text-slate-700 space-y-2">
                <div className="font-bold text-[#0A3857] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#127DC4]" />
                  <span>Portal Launch Notice</span>
                </div>
                <p className="leading-relaxed">
                  Your account is pre-registered. Direct portal self-service is rolling out in phases to enterprise partners. Please contact your dedicated account lead or email <strong>info@varnithglobal.com</strong> for real-time pipeline dossiers.
                </p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Work Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-3.5 pr-10 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] outline-none"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Password
                  </label>
                  <Link to="/contact" className="text-xs text-[#127DC4] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-3.5 pr-10 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] outline-none"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full text-sm font-semibold py-2.5 justify-center"
                >
                  {status === 'loading' ? 'Signing in...' : 'Sign In to Portal'}
                </button>
              </div>
            </form>

            <div className="border-t border-slate-100 pt-5 text-center text-xs text-slate-500 space-y-1">
              <div>Need assistance or enterprise access?</div>
              <div className="font-medium text-slate-700">
                Call +91 79954 83137 or reach out at info@varnithglobal.com
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

