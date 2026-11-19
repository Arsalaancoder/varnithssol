import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HRServicesPage from './pages/HRServicesPage';
import CoursesPage from './pages/CoursesPage';
import SAPBasisSecurityPage from './pages/SAPBasisSecurityPage';
import SAPGRCPage from './pages/SAPGRCPage';
import CollegeProgrammesPage from './pages/CollegeProgrammesPage';
import AboutPage from './pages/AboutPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import ClientLoginPage from './pages/ClientLoginPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import GrievancePage from './pages/GrievancePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Core Routes */}
          <Route index element={<Home />} />
          <Route path="hire" element={<HRServicesPage />} />
          <Route path="academy" element={<CoursesPage />} />
          <Route path="academy/sap-basis-security" element={<SAPBasisSecurityPage />} />
          <Route path="academy/sap-grc" element={<SAPGRCPage />} />
          <Route path="academy/college-programmes" element={<CollegeProgrammesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="careers" element={<Navigate to="/" replace />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="client-login" element={<ClientLoginPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="grievance" element={<GrievancePage />} />

          {/* Explicit Route Aliases */}
          <Route path="courses" element={<Navigate to="/academy" replace />} />
          <Route path="courses/sap-basis-security" element={<Navigate to="/academy/sap-basis-security" replace />} />
          <Route path="courses/sap-grc" element={<Navigate to="/academy/sap-grc" replace />} />
          <Route path="courses/:slug" element={<Navigate to="/academy" replace />} />
          <Route path="hr-services" element={<Navigate to="/hire" replace />} />
          <Route path="hr-services/:slug" element={<Navigate to="/hire" replace />} />
          <Route path="find-a-role" element={<Navigate to="/" replace />} />
          <Route path="who-we-hire-for" element={<Navigate to="/industries" replace />} />
          <Route path="why-us" element={<Navigate to="/about" replace />} />
          <Route path="testimonials" element={<Navigate to="/about" replace />} />
          <Route path="college-engagements" element={<Navigate to="/academy/college-programmes" replace />} />
          <Route path="sap-basis-security" element={<Navigate to="/academy/sap-basis-security" replace />} />
          <Route path="sap-grc" element={<Navigate to="/academy/sap-grc" replace />} />
        </Route>

        {/* Support /and legacy path prefix */}
        <Route path="/and" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hire" element={<HRServicesPage />} />
          <Route path="academy" element={<CoursesPage />} />
          <Route path="academy/sap-basis-security" element={<SAPBasisSecurityPage />} />
          <Route path="academy/sap-grc" element={<SAPGRCPage />} />
          <Route path="academy/college-programmes" element={<CollegeProgrammesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="careers" element={<Navigate to="/" replace />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="client-login" element={<ClientLoginPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="grievance" element={<GrievancePage />} />
          <Route path="courses" element={<Navigate to="/academy" replace />} />
          <Route path="courses/sap-basis-security" element={<Navigate to="/academy/sap-basis-security" replace />} />
          <Route path="courses/sap-grc" element={<Navigate to="/academy/sap-grc" replace />} />
          <Route path="hr-services" element={<Navigate to="/hire" replace />} />
          <Route path="why-us" element={<Navigate to="/about" replace />} />
          <Route path="testimonials" element={<Navigate to="/about" replace />} />
        </Route>

        {/* Fallback to root */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

