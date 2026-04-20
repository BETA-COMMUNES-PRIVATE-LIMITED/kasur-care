// import React from 'react'
// import Wrapper from '../components/shared/Wrapper'
// import Button from '../components/shared/Button'

// const Specialties = () => {
//     return (
//         <div>
//             <Wrapper>
//                 <div className='justify-center items-center text-center'>

//                     <Button children='. Top Specialties .' />
//                     <h1 className=' mt-6 text-5xl font-bold'>Highlighting the <span className='text-5xl text-blue-600 font-bold'>Care & Support</span></h1>
//                 </div>
//             </Wrapper>
//         </div>
//     )
// }

// export default Specialties

import { FaBone, FaBrain, FaChild, FaUserMd } from "react-icons/fa";

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import SpecialtyCard from "../components/shared/SpecialtyCard";


const specialties = [
  { title: "Orthopedics", doctors: 151, img: img1, icon: FaBone },
  { title: "Neurology", doctors: 176, img: img2, icon: FaBrain },
  { title: "Pediatrics", doctors: 124, img: img3, icon: FaChild },
  { title: "Psychiatry", doctors: 112, img: img4, icon: FaUserMd },
   { title: "Psychiatry", doctors: 112, img: img4, icon: FaUserMd },
   { title: "Psychiatry", doctors: 112, img: img4, icon: FaUserMd },
];

const Specialties = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-16">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Highlighting the <span className="text-blue-500">Care & Support</span>
      </h2>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {specialties.map((item, index) => (
          <SpecialtyCard key={index} {...item} />
        ))}
      </div>

    </div>
  );
};

export default Specialties;