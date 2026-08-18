"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/products";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % testimonials.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      data-reveal="soft"
      className="bg-blush py-20 text-center md:py-24"
      aria-label="Customer testimonials"
    >
      <div className="mx-auto max-w-3xl px-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-muted">
          In their homes
        </p>
        <div className="mt-8 grid min-h-40 place-items-center">
          {testimonials.map((testimonial, itemIndex) => (
            <blockquote
              key={testimonial.name}
              aria-hidden={itemIndex !== index}
              className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                itemIndex === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <p className="font-display text-2xl leading-[1.35] md:text-[34px]">
                “{testimonial.quote}”
              </p>
              <cite className="mt-6 block text-[11px] uppercase tracking-[0.2em] not-italic text-muted">
                {testimonial.name}
              </cite>
            </blockquote>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-3">
          {testimonials.map((testimonial, itemIndex) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial ${itemIndex + 1}`}
              aria-current={itemIndex === index}
              onClick={() => setIndex(itemIndex)}
              className={`h-2 w-2 rounded-full border border-ink ${
                itemIndex === index ? "bg-ink" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
