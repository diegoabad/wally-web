"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  faqs: FaqItem[];
};

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={faq.q}
            className={`landing-faq-item ${isOpen ? "landing-faq-item--open" : ""}`}
          >
            <button
              type="button"
              className="landing-faq-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="pr-4 text-left">{faq.q}</span>
              <span className="landing-faq-icon shrink-0 text-violet-600" aria-hidden>
                +
              </span>
            </button>
            <div className="landing-faq-panel" aria-hidden={!isOpen}>
              <div className="landing-faq-panel-inner">
                <p className="border-t border-gray-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-gray-600">
                  {faq.a}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
