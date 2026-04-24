import { LuNotebookPen } from "react-icons/lu";
import { MdSupervisorAccount } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsHearts } from "react-icons/bs";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { BiSolidHomeHeart } from "react-icons/bi";
import { motion } from "motion/react";


const Services = () => {
  const services = [
    { icon: <LuNotebookPen size={20} />, title: 'Book Appoinment' },
    { icon: <MdSupervisorAccount size={25} />, title: 'Talk to Doctor' },
    { icon: <HiOutlineBuildingOffice2 size={25} />, title: 'Hospitals & Clinics' },
    { icon: <BsHearts size={20} />, title: 'Health Care' },
    { icon: <FaSuitcaseMedical size={20} />, title: 'Medicine Delivery' },
    { icon: <GrTest size={20} />, title: 'Lab Testing' },
    { icon: <BiSolidHomeHeart size={25} />, title: 'Home Care' },

  ];

  return (
    <div className="relative -mt-10 z-20 px-4">
      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}

        className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 text-center">

          {services.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">

              {/* Icon Circle */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.4, ease: "linear" }}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-400 transition">
                <span className="text-blue-600 group-hover:text-white text-xl">
                  {item.icon}
                </span>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}>
                <p className="text-md mt-2 font-medium text-gray-700 group-hover:text-blue-600">
                  {item.title}
                </p>
              </motion.div>

            </div>
          ))}

        </div>
      </motion.div>
    </div>

  );
}
export default Services;