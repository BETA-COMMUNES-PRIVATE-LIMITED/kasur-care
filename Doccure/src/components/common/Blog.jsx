import React from 'react';
import { motion } from "framer-motion";
import Button from './Button';
import { BlogData } from '../../pages/data/blogs';
import { Link } from 'react-router-dom';

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
          {BlogData.map((blogg) => (
            <div
              key={blogg.id}
              className='flex flex-col md:flex-row gap-4 bg-white rounded-2xl shadow-xl p-4 hover:shadow-2xl transition duration-300 relative'
            >

              {/* Image */}
              <div className='relative'>
                <img
                  src={blogg.img}
                  alt={blogg.title}
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
                  {blogg.title}
                </span>

                <h2 className='text-lg font-semibold leading-snug'>
                  {blogg.heading}
                </h2>

                <p className='text-sm text-gray-600'>
                  {blogg.content}
                </p>

                <Link to={`/blog/${blogg.id}`}>
                  <Button>Read More</Button>
                </Link>
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
  );
};

export default Blog;