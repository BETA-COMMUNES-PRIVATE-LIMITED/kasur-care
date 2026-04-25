import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "../components/shared/Wrapper";
import Button from "../components/shared/Button";
import blog1 from '../assets/blog1.webp';
import blog2 from '../assets/blog2.webp';

const Blogs = [
    { img: blog1, heading: 'Understanding and Preventing Glaucoma: A Detailed Guide', content: 'Glaucoma is a leading cause of blind worldwide, yet many....',title:'Treatments' ,btn:'Read More' },

    { img: blog2, heading: 'Understanding and Preventing Glaucoma: A Detailed Guide', content: 'Discover the intersection of technology and neurology, transforming....',title:'Neurology' ,btn:'Read More' }
]

const Blog = () => {
    return (
        <div>
            <Wrapper>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}

                >
                    <div className="text-center space-y-6">
                        <div className="mt-10">
                            <Button> • Recent Blogs • </Button>
                        </div>

                        <div className="text-4xl font-semibold  ">
                            <h1>
                                Stay Updated With Our <span className="text-blue-400">Latest Articals</span>
                            </h1>
                        </div>
                    </div>
                    {/* cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                        {Blogs.map((items, i) => (
                            <div key={i} className='grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl shadow-2xl space-x-4 p-2  cursor-pointer overflow-hidden relative '>
                                {/* img */}
                                <div className=' items-center text-center mt-4 relative'>
                                    <img src={items.img} alt='' className=' rounded-2xl w-60 h-40 object-cover' />
                                </div>
                                 <div className="absolute top-12 left-12 bg-orange-100 text-black border border-white text-xs px-3 py-2 rounded flex items-center gap-1">
                                                 <h2 className=''><span className='font-bold'>18</span> <br/>May</h2>
                                                </div>
                                {/* heading */}
                                <div className='space-y-4'>
                                    <button className='text-white  text-xs font-medium items-center text-center mt-4 p-1.5 bg-blue-600 rounded-4xl'>{items.title}</button>
                                    <h1 className='text-lg font-semibold'>{items.heading}</h1>
                                    <p>{items.content}</p>
                                    <h3 className='text-blue-400 text-sm font-medium cursor-pointer underline underline-offset-4'>{items.btn}</h3>
                                </div>
                            </div>
                        ))}
                       
                    </div>
                     <div className='item-center text-center mt-6 '>
                       <Button>View All Articals</Button>
                       </div>

                </motion.div>
            </Wrapper>
        </div>
    )
}

export default Blog