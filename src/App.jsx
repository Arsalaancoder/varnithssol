import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetails from './pages/CourseDetails';
import HRServicesPage from './pages/HRServicesPage';
import WhyUsPage from './pages/WhyUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root / to /and */}
        <Route path="/" element={<Navigate to="/and" replace />} />

        {/* All /and routes wrapped in Shared Layout */}
        <Route path="/and" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="courses" element={<CoursesPage />} />
          
          {/* Dedicated Course Routes */}
          <Route path="courses/:slug" element={<CourseDetails />} />
          <Route path="courses/devops" element={<CourseDetails />} />
          <Route path="courses/sap-basis-security" element={<CourseDetails />} />
          <Route path="courses/sap-grc" element={<CourseDetails />} />
          <Route path="courses/data-analyst" element={<CourseDetails />} />
          <Route path="courses/software-testing" element={<CourseDetails />} />
          <Route path="courses/python" element={<CourseDetails />} />

          {/* Other Core Multi-Page Routes */}
          <Route path="hr-services" element={<HRServicesPage />} />
          <Route path="why-us" element={<WhyUsPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Fallback to /and */}
        <Route path="*" element={<Navigate to="/and" replace />} />
      </Routes>
    </Router>
  );
}
