import { Children } from "react"

const Wrapper = ({children})=>{
    return(
       <div className="py-4 px-6 md:px-12 lg:px-16 ">
           {children}
       </div>
    )
}
export default Wrapper