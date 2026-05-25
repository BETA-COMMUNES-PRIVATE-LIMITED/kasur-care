import React from "react";
import { motion } from "framer-motion";

const items = [
  "Talk to doctors",
  "Lab Testing Services",
  "Multi speciality Treatments & Doctors",
  "Home Care Services",
  "Hospitals & Services",
  "Medicine & Supplies",
];

const Text = () => {
  return (
    <div className="w-full overflow-hidden bg-linear-to-r from-blue-600 to-cyan-500 py-2">

      {/* WRAPPER */}
      <div className="relative flex overflow-hidden">

        <motion.div
          className="flex whitespace-nowrap text-white font-medium text-sm sm:text-base md:text-lg"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 12,
          }}
        >

          {/* FIRST LOOP */}
          {items.map((text, i) => (
            <span
              key={i}
              className="mx-6 sm:mx-8 md:mx-10 shrink-0"
            >
              --- {text}
            </span>
          ))}

          {/* SECOND LOOP (for smooth infinite scroll) */}
          {items.map((text, i) => (
            <span
              key={`dup-${i}`}
              className="mx-6 sm:mx-8 md:mx-10 shrink-0"
            >
              --- {text}
            </span>
          ))}

        </motion.div>
      </div>
    </div>
  );
};

export default Text;