import React from 'react'
import { motion } from "framer-motion";
import Button from './Button';
import blog1 from '../../assets/blog1.webp';
import blog2 from '../../assets/blog2.webp';

const BlogData = [
    { 
        img: blog1, 
        heading: 'Understanding and Preventing Glaucoma: A Detailed Guide', 
        content: 'Glaucoma is a leading cause of blindness worldwide, yet many....',
        title: 'Treatments',
        btn: 'Read More' 
    },
    { 
        img: blog2, 
        heading: 'Understanding and Preventing Glaucoma: A Detailed Guide', 
        content: 'Discover the intersection of technology and neurology, transforming....',
        title: 'Neurology',
        btn: 'Read More' 
    }
]

const Blog = () => {
    return (
        <div className='py-20 px-6 md:px-12 lg:px-24 mt-8'>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >

                {/* Heading */}
                <div className="text-center space-y-4">
                    <Button>• Recent Blogs •</Button>

                    <h1 className="text-3xl md:text-4xl font-semibold">
                        Stay Updated With Our 
                        <span className="text-blue-400"> Latest Articles</span>
                    </h1>
                </div>

                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                    {BlogData.map((items, i) => (
                        <div 
                            key={i} 
                            className='flex flex-col md:flex-row gap-4 bg-white rounded-2xl shadow-xl p-4 hover:shadow-2xl transition duration-300 relative'
                        >
                            
                            {/* Image */}
                            <div className='relative'>
                                <img 
                                    src={items.img} 
                                    alt='' 
                                    className='rounded-xl w-full md:w-56 h-40 object-cover'
                                />

                                {/* Date */}
                                <div className="absolute top-2 left-2 bg-orange-100 text-black text-xs px-3 py-1 rounded shadow">
                                    <span className='font-bold'>18</span><br />May
                                </div>
                            </div>

                            {/* Content */}
                            <div className='space-y-3'>
                                <span className='inline-block text-white text-xs px-3 py-1 bg-blue-500 rounded-full'>
                                    {items.title}
                                </span>

                                <h2 className='text-lg font-semibold leading-snug'>
                                    {items.heading}
                                </h2>

                                <p className='text-sm text-gray-600'>
                                    {items.content}
                                </p>

                                <span className='text-blue-500 text-sm font-medium cursor-pointer hover:underline'>
                                    {items.btn}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Button */}
                <div className='text-center mt-12'>
                    <Button>View All Articles</Button>
                </div>

            </motion.div>
        </div>
    )
}

export default Blog;