import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetails from './pages/CourseDetails';
import HRServicesPage from './pages/HRServicesPage';
import HRServiceDetail from './pages/HRServiceDetail';
import WhyUsPage from './pages/WhyUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Support root path / */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:slug" element={<CourseDetails />} />
          <Route path="hr-services" element={<HRServicesPage />} />
          <Route path="hr-services/:slug" element={<HRServiceDetail />} />
          <Route path="why-us" element={<WhyUsPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Explicit route aliases from prompt */}
          <Route path="find-a-role" element={<Navigate to="/contact" replace />} />
          <Route path="who-we-hire-for" element={<Navigate to="/why-us" replace />} />
          <Route path="sap-basis-security" element={<Navigate to="/courses/sap-basis-security" replace />} />
          <Route path="sap-grc" element={<Navigate to="/courses/sap-grc" replace />} />
          <Route path="college-engagements" element={<Navigate to="/courses" replace />} />
        </Route>

        {/* Support /and path */}
        <Route path="/and" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:slug" element={<CourseDetails />} />
          <Route path="hr-services" element={<HRServicesPage />} />
          <Route path="hr-services/:slug" element={<HRServiceDetail />} />
          <Route path="why-us" element={<WhyUsPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Explicit route aliases under /and */}
          <Route path="find-a-role" element={<Navigate to="/and/contact" replace />} />
          <Route path="who-we-hire-for" element={<Navigate to="/and/why-us" replace />} />
          <Route path="sap-basis-security" element={<Navigate to="/and/courses/sap-basis-security" replace />} />
          <Route path="sap-grc" element={<Navigate to="/and/courses/sap-grc" replace />} />
          <Route path="college-engagements" element={<Navigate to="/and/courses" replace />} />
        </Route>

        {/* Fallback to / */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
