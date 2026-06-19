"use client";

import { useEffect } from "react";

const PARALLAX_SELECTOR = [
  ".hero-card",
  ".case-screen",
  ".chart-bars span",
].join(",");

export default function ScrollParallax3D() {
  useEffect(() => {
    const motionScale = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0.45
      : 1;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(PARALLAX_SELECTOR),
    );

    if (elements.length === 0) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;

      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const progress = (viewportCenter - elementCenter) / window.innerHeight;
        const clamped = Math.max(-1.15, Math.min(1.15, progress));
        const direction = index % 2 === 0 ? 1 : -1;
        const depth = Number(element.dataset.depth ?? 1);
        const x = clamped * 34 * direction * depth * motionScale;
        const y = clamped * -86 * depth * motionScale;
        const rotate = clamped * 16 * direction * motionScale;
        const spin = clamped * 240 * direction * motionScale;

        element.style.setProperty("--parallax-y", `${y}px`);
        element.style.setProperty("--parallax-x", `${x}px`);
        element.style.setProperty("--parallax-soft-y", `${y * 0.4}px`);
        element.style.setProperty("--parallax-soft-x", `${x * 0.4}px`);
        element.style.setProperty("--parallax-reverse-y", `${y * -0.35}px`);
        element.style.setProperty("--parallax-reverse-x", `${x * -0.35}px`);
        element.style.setProperty("--parallax-rotate", `${rotate}deg`);
        element.style.setProperty("--parallax-rotate-soft", `${rotate * 0.35}deg`);
        element.style.setProperty("--parallax-rotate-micro", `${rotate * 0.18}deg`);
        element.style.setProperty("--parallax-rotate-micro-negative", `${rotate * -0.18}deg`);
        element.style.setProperty("--parallax-rotate-mobile", `${rotate * 0.42}deg`);
        element.style.setProperty("--parallax-rotate-negative", `${rotate * -1}deg`);
        element.style.setProperty("--parallax-rotate-counter", `${rotate * -0.32}deg`);
        element.style.setProperty("--parallax-rotate-object", `${rotate * 1.1}deg`);
        element.style.setProperty("--parallax-spin", `${spin}deg`);
        element.style.setProperty("--parallax-lift", `${Math.abs(clamped) * 42 * depth}px`);
      });
    };

    const requestUpdate = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    elements.forEach((element, index) => {
      element.dataset.depth = String(0.55 + (index % 5) * 0.16);
      element.classList.add("is-parallax-3d");
    });

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      elements.forEach((element) => {
        element.classList.remove("is-parallax-3d");
        element.style.removeProperty("--parallax-y");
        element.style.removeProperty("--parallax-x");
        element.style.removeProperty("--parallax-soft-y");
        element.style.removeProperty("--parallax-soft-x");
        element.style.removeProperty("--parallax-reverse-y");
        element.style.removeProperty("--parallax-reverse-x");
        element.style.removeProperty("--parallax-rotate");
        element.style.removeProperty("--parallax-rotate-soft");
        element.style.removeProperty("--parallax-rotate-micro");
        element.style.removeProperty("--parallax-rotate-micro-negative");
        element.style.removeProperty("--parallax-rotate-mobile");
        element.style.removeProperty("--parallax-rotate-negative");
        element.style.removeProperty("--parallax-rotate-counter");
        element.style.removeProperty("--parallax-rotate-object");
        element.style.removeProperty("--parallax-spin");
        element.style.removeProperty("--parallax-lift");
      });
    };
  }, []);

  return null;
}
