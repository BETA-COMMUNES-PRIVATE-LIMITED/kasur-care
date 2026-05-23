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

    if (scrollTop > 300) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
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

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">

      {/* 🔵 CIRCLE PROGRESS */}
      <div className="relative w-14 h-14">

        <svg className="w-14 h-14 -rotate-90">
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="#e5e7eb"
            strokeWidth="4"
            fill="none"
          />

          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="#2563eb"
            strokeWidth="4"
            fill="none"
            strokeDasharray="150"
            strokeDashoffset={
              150 - (150 * scrollPercent) / 100
            }
            strokeLinecap="round"
          />
        </svg>

        {/* % TEXT */}
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-blue-600">
          {Math.round(scrollPercent)}%
        </div>
      </div>

      {/* 🔵 BUTTON */}
      <button
        onClick={showTop ? scrollToTop : scrollToBottom}
        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
      >
        {showTop ? <FaArrowUp /> : <FaArrowDown />}
      </button>

    </div>
  );
};

export default ScrollProgress;