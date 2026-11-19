import React from 'react';
import { TestimonialsSection } from './ui/testimonials-with-marquee';
import { siteData } from '../data/siteData';

export default function Testimonials() {
  const testimonials = (siteData.testimonials || []).map((t) => ({
    author: {
      name: t.name,
      handle: `${t.role} • ${t.course}`,
      avatar: t.image
    },
    text: t.quote
  }));

  return (
    <TestimonialsSection
      title="What Our Partners & Alumni Say"
      description="Real feedback from enterprise software engineering teams and professionals who achieved career breakthroughs with Varnith."
      testimonials={testimonials}
    />
  );
}
