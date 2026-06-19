"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const serviceChoices = [
  "Go-to-market strategy",
  "Paid media",
  "SEO and content",
  "Creative",
  "Analytics",
  "International expansion",
];

export default function HeroBriefForm() {
  const [selectedChoices, setSelectedChoices] = useState<string[]>([]);

  const toggleChoice = (choice: string) => {
    setSelectedChoices((current) =>
      current.includes(choice)
        ? current.filter((item) => item !== choice)
        : [...current, choice],
    );
  };

  return (
    <aside className="hero-card" aria-label="Campaign planning form preview">
      <div className="hero-card-header">
        <span>Growth brief</span>
        <strong>48 hr response</strong>
      </div>
      <h2>Where should we focus first?</h2>
      <div className="choice-grid" aria-label="Select one or more focus areas">
        {serviceChoices.map((choice) => {
          const isSelected = selectedChoices.includes(choice);

          return (
            <button
              aria-pressed={isSelected}
              className={`choice-option${isSelected ? " is-selected" : ""}`}
              key={choice}
              onClick={() => toggleChoice(choice)}
              type="button"
            >
              <CheckCircle2 size={15} />
              <span>{choice}</span>
            </button>
          );
        })}
      </div>
      <label htmlFor="website">Website or market goal</label>
      <div className="input-row">
        <input id="website" type="text" placeholder="example.com / new region" />
        <button type="button" aria-label="Submit growth brief">
          <ArrowRight size={18} />
        </button>
      </div>
    </aside>
  );
}
