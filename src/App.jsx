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
        </Route>

        {/* Fallback to / */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
