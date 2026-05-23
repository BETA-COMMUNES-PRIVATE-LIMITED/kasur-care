import { LuNotebookPen } from "react-icons/lu";
import { MdSupervisorAccount } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsHearts } from "react-icons/bs";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { BiSolidHomeHeart } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {

    const services = [
        {
            icon: LuNotebookPen,
            title: 'Book Appointment',
            path: '/book-appointment'
        },

        {
            icon: MdSupervisorAccount,
            title: 'Talk to Doctor',
            path: '/doctors'
        },

        {
            icon: HiOutlineBuildingOffice2,
            title: 'Hospitals & Clinics',
            path: '/hospitals'
        },

        {
            icon: BsHearts,
            title: 'Health Care',
            path: '/home-care'
        },

        {
            icon: FaSuitcaseMedical,
            title: 'Medicine Delivery',
            path: '/pharmacy'
        },

        {
            icon: GrTest,
            title: 'Lab Testing',
            path: '/labtest'
        },

        {
            icon: BiSolidHomeHeart,
            title: 'Home Care',
            path: '/home-care'
        },
    ];

    return (
        <div className="relative -mt-10 z-20 px-4">

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-6xl mx-auto"
            >

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 text-center">

                    {services.map((item, i) => {

                        const Icon = item.icon;

                        return (

                            <Link key={i} to={item.path}>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="flex flex-col items-center gap-2 group cursor-pointer"
                                >

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-500 transition"
                                    >

                                        <span className="text-blue-600 group-hover:text-white text-xl">
                                            <Icon size={24} />
                                        </span>

                                    </motion.div>

                                    {/* Text */}
                                    <p className="text-sm md:text-base mt-2 font-medium text-gray-700 group-hover:text-blue-600 transition">
                                        {item.title}
                                    </p>

                                </motion.div>

                            </Link>
                        );
                    })}

                </div>

            </motion.div>

        </div>
    );
};

export default Services;