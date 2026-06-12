// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import baner from "../../assets/baner.webp";
// import { motion } from "motion/react";

// const DoctorRegister = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Doctor Registered");
//     navigate("/doctors");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-10 py-10">
      
//       <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
//         {/* LEFT IMAGE (hidden on mobile) */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           className="hidden lg:flex justify-center"
//         >
//           <img
//             src={baner}
//             alt="doctor register"
//             className="w-full max-w-md object-contain"
//           />
//         </motion.div>

//         {/* RIGHT FORM */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           className="w-full max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8"
//         >
          
//           {/* Header */}
//           <div className ="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
//             <h2 className="text-xl font-semibold text-gray-800">
//               Doctor Register
//             </h2>

//             <Link
//               to="/PatientRegister"
//               className="text-blue-500 text-sm font-semibold hover:underline"
//             >
//               Are you a Patient?
//             </Link>
//           </div>

//           {/* FORM */}
//           <form onSubmit={handleSubmit} className="space-y-4">
            
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />

//             <input
//               type="tel"
//               placeholder="Phone"
//               className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />

//             <input
//               type="password"
//               placeholder="Create Password"
//               className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />

//             <button
//               type="submit"
//               className="w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-full font-medium hover:opacity-90 transition"
//             >
//               Sign Up
//             </button>
//           </form>

//           {/* DIVIDER */}
//           <div className="flex items-center my-6">
//             <div className="flex-1 h-px bg-gray-300"></div>
//             <span className="px-3 text-gray-400 text-sm">or</span>
//             <div className="flex-1 h-px bg-gray-300"></div>
//           </div>

//           {/* SOCIAL BUTTONS */}
//           <div className="space-y-3">
//             <button className="w-full border border-gray-300 py-2 rounded-full hover:bg-gray-100 transition">
//               Sign in With Google
//             </button>

//             <button className="w-full border border-gray-300 py-2 rounded-full hover:bg-gray-100 transition">
//               Sign in With Facebook
//             </button>
//           </div>

//           {/* FOOTER */}
//           <p className="text-sm text-center text-gray-500 mt-6">
//             Already have an account?{" "}
//             <Link to="/signup" className="text-blue-500 font-semibold">
//               Sign In
//             </Link>
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default DoctorRegister;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import baner from "../../assets/baner.webp";
import { motion } from "motion/react";

const DoctorRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Registered");
    navigate("/doctors");
  };

  const inputClass =
    "w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-10 py-10">

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="hidden lg:flex justify-center"
        >
          <img
            src={baner}
            alt="doctor register"
            className="w-full h-full max-w-md object-contain"
          />
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8"
        >

          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Doctor Registration
            </h2>

            <Link
              to="/PatientRegister"
              className="text-blue-500 text-sm font-semibold hover:underline"
            >
              Are you a Patient?
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">

            {/* ================= BASIC INFO ================= */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                Basic Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input type="text" placeholder="Full Name" className={inputClass} />
                <input type="file" className={inputClass} />
                <input type="text" placeholder="CNIC" className={inputClass} />
                <input type="date" className={inputClass} />

                <select className={inputClass}>
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <input type="tel" placeholder="Mobile Number" className={inputClass} />
                <input type="email" placeholder="Email Address" className={inputClass} />
              </div>
            </div>

            {/* ================= PROFESSIONAL INFO ================= */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                Professional Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input type="text" placeholder="PMDC Registration Number" className={inputClass} />

                <select className={inputClass}>
                  <option value="">Specialization</option>
                  <option>Cardiologist</option>
                  <option>Dermatologist</option>
                  <option>Neurologist</option>
                  <option>Orthopedic</option>
                  <option>Pediatrician</option>
                  <option>Gynecologist</option>
                  <option>General Physician</option>
                </select>

                <input type="text" placeholder="Qualification" className={inputClass} />
                <input type="number" placeholder="Experience (Years)" className={inputClass} />
                <input type="text" placeholder="Hospital / Clinic Affiliation" className={inputClass} />
                <input type="number" placeholder="Consultation Fee" className={inputClass} />
                <input type="text" placeholder="Languages" className={inputClass} />

              </div>
            </div>

            {/* ================= DOCUMENTS ================= */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                Verification Documents
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input type="file" className={inputClass} placeholder="CNIC Front" />
                <input type="file" className={inputClass} placeholder="CNIC Back" />
                <input type="file" className={inputClass} />
                <input type="file" className={inputClass} />
                <input type="file" className={inputClass} />
                <input type="file" className={inputClass} />

              </div>
            </div>

            {/* ================= FINANCIAL ================= */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                Financial Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input type="text" placeholder="Bank Account Number" className={inputClass} />
                <input type="text" placeholder="IBAN" className={inputClass} />
                <input type="text" placeholder="JazzCash Number" className={inputClass} />
                <input type="text" placeholder="EasyPaisa Number" className={inputClass} />

              </div>
            </div>

            {/* ================= PASSWORD ================= */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                Account Security
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input type="password" placeholder="Create Password" className={inputClass} />
                <input type="password" placeholder="Confirm Password" className={inputClass} />

              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Register Doctor
            </button>

          </form>

          {/* FOOTER */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/signup" className="text-blue-500 font-semibold">
              Sign In
            </Link>
          </p>

        </motion.div>
      </div>
    </div>
  );
};

export default DoctorRegister;