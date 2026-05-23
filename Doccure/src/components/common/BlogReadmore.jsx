import React from "react";
import { useParams, Link } from "react-router-dom";
import { BlogData } from '../../pages/data/blogs';
import Button from '../common/Button';
import { motion } from "framer-motion";

const BlogReadmore = () => {

  const { id } = useParams();

  const bloge = BlogData.find(
    (item) => item.id === parseInt(id)
  );

  if (!bloge) {
    return (
      <div className="text-center py-20 text-3xl font-bold">
        Blog Not Found
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50 min-h-screen">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
      >

        <img
          src={bloge.img}
          alt={bloge.title}
          className="w-full h-100 object-cover"
        />

        <div className="p-8">

          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {bloge.heading}
          </h1>

          <p className="text-gray-600 leading-8 text-lg">
            {bloge.details}
          </p>

          <Link to="/blog">
            <Button className="mt-8">
              Back to Blog
            </Button>
          </Link>

        </div>

      </motion.div>

    </div>
  );
};

export default BlogReadmore;