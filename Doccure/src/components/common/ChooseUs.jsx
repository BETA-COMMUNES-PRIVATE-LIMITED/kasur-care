import React from "react";
import {
  UserRound,
  Clock3,
  Microscope,
  MessageCircle,
} from "lucide-react";
import two from '../../assets/two.png'

const services = [
  {
    icon: <UserRound size={30} />,
    title: "Qualified Staff of Doctors",
    desc: "Our platform exclusively partners with highly qualified doctors who bring expertise & commitment to delivering top-notch healthcare.",
  },
  {
    icon: <Clock3 size={30} />,
    title: "24 Hours Service",
    desc: "Experience the healthcare access with our 24/7 service. Whether it's day or night, you can find & book appointments.",
  },
  {
    icon: <Microscope size={30} />,
    title: "Quality Lab Services",
    desc: "Partnering with accredited labs, your health is our priority, and our quality lab services reflect our dedication to excellence.",
  },
  {
    icon: <MessageCircle size={30} />,
    title: "Free Consultations",
    desc: "Your well-being is important, and our commitment to providing accessible care begins with a free initial consultation.",
  },
];

const ChooseUs=() => {
  return (
    <div className="bg-[#f5f7fb] min-h-screen py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="items-center  text-center pb-8">
            <h1 className="text-3xl md:text-4xl font-semibold  ">Why Choose Us</h1>
        </div>
        
        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[24px] font-semibold text-gray-900 leading-snug mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-blue-600 rounded-3xl overflow-hidden relative">
          <div className="grid lg:grid-cols-2 items-center">
            
            {/* Left Content */}
            <div className="p-10 lg:p-16 text-white z-10">
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
                Be on Your Way to Feeling Better with the Doccure
              </h2>

              <p className="text-blue-100 text-md leading-8 max-w-lg mb-8">
                Be on your way to feeling better as we prioritize your
                health journey with personalized and accessible services.
              </p>

              <button className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-full hover:bg-gray-100 transition">
                Contact With Us
              </button>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center items-end h-full">
              
              {/* Circle Background */}
              <div className="absolute w-112.5 h-112.5 bg-blue-400 rounded-full -right-30 top-10 opacity-40"></div>

              {/* Dots */}
              <div className="absolute top-12 left-10 grid grid-cols-5 gap-3">
                {[...Array(20)].map((_, i) => (
                  <span
                    key={i}
                    className="w-2 h-2 bg-white rounded-full"
                  ></span>
                ))}
              </div>

              {/* Doctor Image */}
              <img
                src={two}
                alt="doctor"
                className="relative z-10 h-125 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChooseUs;