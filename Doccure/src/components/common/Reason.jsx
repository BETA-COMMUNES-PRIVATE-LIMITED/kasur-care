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
        <div className=" py-10">
            <div className='py-10 px-6  md:px-12 lg:px-30 mt-8'>
                {/* Heading Section */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="text-center space-y-6"
                >
                    <div className="mt-6">
                        <Button> • Why Book With Us • </Button>
                    </div>

                    <div className="text-4xl font-semibold ">
                        <h1>
                            Compelling <span className="text-blue-400">Reason</span> to Choose
                        </h1>
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {Cards.map((items, index) => {
                        const Icon = items.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                viewport={{ once: true }}
                                className="text-center cursor-pointer space-y-6 p-10 shadow-2xl bg-white text-black rounded-xl hover:scale-105 transition duration-300"
                            >
                                <div className="flex justify-center">
                                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
                                        <Icon size={24} />
                                    </div>
                                </div>

                                <h1 className="text-xl font-semibold">{items.heading}</h1>
                                <p className="text-md text-gray-600">{items.para}</p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </div>
    )
}

export default Reason