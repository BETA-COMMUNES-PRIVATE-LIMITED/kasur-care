import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (scrollTop / docHeight) * 100;

    setScrollPercent(scrolled);
    setShowTop(scrollTop > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - (scrollPercent / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* 🔵 CIRCLE BUTTON */}
      <button
        onClick={showTop ? scrollToTop : scrollToBottom}
        className="relative w-14 h-14 flex items-center justify-center"
      >

        <svg className="absolute w-14 h-14 -rotate-90">
          {/* background circle */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="4"
            fill="none"
          />

          {/* progress circle */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="#2563eb"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* 🔵 ARROW INSIDE CIRCLE */}
        <div className="z-10 text-blue-600">
          {showTop ? <FaArrowUp /> : <FaArrowDown />}
        </div>

      </button>
    </div>
  );
};

export default ScrollProgress;