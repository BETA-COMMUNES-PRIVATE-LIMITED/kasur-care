import React from 'react'
import Button from '../common/Button'
import { BsPersonHearts, BsFilterCircle, BsUniversalAccessCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const Reason = () => {

    const Cards = [
        {
            icon: BsPersonHearts,
            heading: 'Follow-Up Care',
            para: 'We ensure continuity of care through regular follow-ups and communication, helping you stay on track with health goals.'
        },
        {
            icon: BsFilterCircle,
            heading: 'Patient-Centered',
            para: 'We prioritize your comfort and preferences, tailoring our services to meet your individual needs and Care from Our Experts.'
        },
        {
            icon: BsUniversalAccessCircle,
            heading: 'Convenient Access',
            para: 'Easily book appointments online or through our dedicated customer service team, with flexible hours to fit your schedule.'
        },
    ]

    return (
        <div className="py-10 bg-white w-full overflow-hidden">

            <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <Button> • Why Book With Us • </Button>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
                        Compelling <span className="text-blue-400">Reasons</span> to Choose Us
                    </h1>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                    {Cards.map((items, index) => {
                        const Icon = items.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 text-center space-y-4 
                                           hover:shadow-2xl hover:-translate-y-1 transition duration-300"
                            >

                                {/* Icon */}
                                <div className="flex justify-center">
                                    <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
                                        <Icon size={24} />
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="text-lg sm:text-xl font-semibold">
                                    {items.heading}
                                </h2>

                                {/* Text */}
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {items.para}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </div>
    )
}

export default Reason