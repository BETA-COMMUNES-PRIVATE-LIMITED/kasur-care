
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneSchedule } from "react-icons/ai";
import { RiSearchEyeFill } from "react-icons/ri";
import { FaMarsDouble } from "react-icons/fa6";
import Button from "./Button";
import about01 from '../../assets/about01.webp'
import about02 from '../../assets/about02.webp'
import about03 from '../../assets/about03.webp'
import { AnimatePresence } from "framer-motion";
import { motion } from "motion/react";

const accordionData = [
    {
        title: "Our Vision",
        content: "We envision a community where everyone has access to high-quality healthcare and the resources they need to lead healthy, fulfilling lives."
    },
    {
        title: "Our Mission",
        content: "We envision a community where everyone has access to high-quality healthcare and the resources they need to lead healthy, fulfilling lives."
    },
    {
        title: "Our Plan",
        content: "We envision a community where everyone has access to high-quality healthcare and the resources they need to lead healthy, fulfilling lives."
    }
];
const Cards = [
    { icon: RiSearchEyeFill, heading: 'Search For Doctors', para: 'Search for a doctor based on specialization, location, or availability for your Treatements', num: '01' },
    { icon: CgProfile, heading: 'Check Doctor Profile', para: 'Explore detailed doctor profiles on our platform to make informed healthcare decisions.', num: '02' },
    { icon: AiTwotoneSchedule, heading: 'Schedule Appointment', para: 'After choose your preferred doctor, select a convenient time slot, & confirm your appointment.', num: '03' },
    { icon: FaMarsDouble, heading: 'Get Your Solution', para: 'Discuss your health with the doctor and the personalized advice & with the very effective  solution.', num: '04' },
]

const About = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <div className='bg-black'>
            <div className="py-10 px-6  md:px-12 lg:px-30">
                <div className='grid lg:grid-cols-2 gap-10 items-center" '>
                    {/* left side */}
                    <div className="space-y-6">

                        {/* Main Image */}
                        <img
                            src={about01}
                            alt=""
                            className="w-full h-auto rounded-2xl object-cover"
                        />

                        {/* Bottom Images */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <img
                                src={about02}
                                alt=""
                                className="w-full h-48 sm:h-56 md:h-60 rounded-2xl object-cover"
                            />
                            <img
                                src={about03}
                                alt=""
                                className="w-full h-48 sm:h-56 md:h-60 rounded-2xl object-cover"
                            />
                        </div>

                    </div>
                    {/* right side */}
                    <div className='flex-1 '>
                        <div className="mt-6">
                            <Button> • About Us • </Button>
                        </div>
                        {/* heading */}
                        <div className="  space-y-8">
                            <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl font-semibold mt-6 leading-snug"'>We are committed to <br/>
                                understanding your <span className="text-blue-600"> unique <br/>
                                    needs and delivering care.</span></h1>
                            <p className='text-white mt-4 text-lg'>As a trusted health as a trusted healthcare provider in our community, we are passionate about promoting health and wellness beyond the clinic.</p>
                        </div>
                        {/* Accordion */}
                        <div className="mt-8 space-y-6">
                            {accordionData.map((item, index) => (
                                <div key={index} className="border rounded-xl overflow-hidden">

                                    {/* Header */}
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex justify-between items-center cursor-pointer p-4 bg-blue-500 text-white"
                                    >
                                        <span>{item.title}</span>
                                        <span className="text-lg">{activeIndex === index ? "-" : "+"}</span>
                                    </button>

                                    {/* Content */}
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="overflow-hidden bg-gray-100"
                                            >
                                                <div className="p-4 text-gray-700">
                                                    {item.content}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </div>
                            ))}
                        </div>

                    </div>

                </div>
                {/* cards */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16'>
                    {Cards.map((items, i) => (
                        <div key={i} className="text-center  cursor-pointer space-y-4 p-6 text-white flex flex-col items-center ">
                            <div className="h-12 w-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-600 hover:text-white">
                                <items.icon size={22} className="mx-auto" />
                            </div>
                            <h1 className="text-xl font-bold hover:text-blue-600 ">{items.heading}</h1>
                            <p className="text-lg">{items.para}</p>
                            <h1 className="text-6xl font-semibold text-blue-700 opacity-40 hover:opacity-60">{items.num}</h1>
                        </div>

                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default About