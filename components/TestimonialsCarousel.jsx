'use client';

import { useState, useEffect, useMemo } from 'react';

export default function TestimonialsCarousel({ testimonials }) {
  const slides = useMemo(() => testimonials ?? [], [testimonials]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides.length) {
    return null;
  }

  const setIndex = (index) => {
    setActiveIndex(index < 0 ? slides.length - 1 : index % slides.length);
  };

  return (
    <div className="carousel" role="region" aria-roledescription="carousel">
      <div className="carousel-track">
        {slides.map((testimonial, index) => (
          <figure
            key={`${testimonial.author}-${index}`}
            className={`carousel-slide ${index === activeIndex ? 'is-active' : ''}`}
            aria-hidden={index !== activeIndex}
          >
            <blockquote>
              <span className="quote-mark">&quot;</span>
              {testimonial.quote}
            </blockquote>
            <figcaption>
              <span className="author">{testimonial.author}</span>
              <span className="role">
                {testimonial.role} - {testimonial.company}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      {slides.length > 1 && (
        <>
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-control"
              onClick={() => setIndex(activeIndex - 1)}
              aria-label="Previous testimonial"
            >
              <span aria-hidden="true">&lt;</span>
            </button>
            <button
              type="button"
              className="carousel-control"
              onClick={() => setIndex(activeIndex + 1)}
              aria-label="Next testimonial"
            >
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
          <div className="carousel-dots" role="tablist" aria-label="Testimonials">
            {slides.map((testimonial, index) => (
              <button
                type="button"
                key={`${testimonial.author}-dot-${index}`}
                className={`carousel-dot ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
