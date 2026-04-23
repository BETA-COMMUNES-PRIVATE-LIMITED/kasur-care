import { Children } from "react";
import { FaStar } from "react-icons/fa";
import doc1 from '../../assets/doc1.jpg'
import doc2 from '../../assets/doc2.jpg'
import doc3 from '../../assets/doc3.jpg'
import doc4 from '../../assets/doc4.svg'

const Button = ({children}) => {


return(
    <div className="">
    {/* appointment button */}
       <div className="inline-flex items-center  bg-white/90 backdrop-blur-md rounded-full px-5 py-3 shadow-md gap-3">
   {/* Images */}
         <div className="flex -space-x-4">
           <img src={doc1} className="w-8 h-8 rounded-full border-2 border-white" />
           <img src={doc2} className="w-8 h-8 rounded-full border-2 border-white" />
           <img src={doc3} className="w-8 h-8 rounded-full border-2 border-white" />
         </div>
   
         {/* Text */}
         <div>
           <p className="text-md font-semibold text-gray-800">
             5K+ Appointments
           </p>
   
           <div className="flex items-center gap-1 text-yellow-400 text-md">
             <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
             <span className="text-gray-600 ml-1 text-md">5.0 Ratings</span>
           </div>
         </div>
       </div>
       {children}
       </div>
)

}
export default Button;