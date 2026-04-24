import React from 'react'
import { motion } from "framer-motion";

const Text = () => {
  return (
        <div className="w-full overflow-hidden bg-linear-to-r from-blue-600 to-cyan-500  py-1">
      <motion.div
        className="flex whitespace-nowrap text-white font-medium text-lg"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10, // lower = faster, higher = slower
        }}
      >
        <span className="mr-10">
          ---Talk to doctors
        </span>
        <span className="mr-10">
          ---Lab Testing Services
        </span>
        <span className="mr-10">
          ---Multi speciality Treatments & Doctors
        </span>
        <span className="mr-10">
          ---Home Care Services
        </span>
        <span className="mr-10">
          ---Hospitals & Services
        </span>
        <span className="mr-10">
          ---Medicine & Supplies
        </span>
      </motion.div>
    </div>

  )
}

export default Text