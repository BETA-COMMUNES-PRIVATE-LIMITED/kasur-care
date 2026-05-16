import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "./data/blogs";
import Button from "../components/common/Button";

const BlogsDetail = () => {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center py-20 text-3xl font-bold">
        Blog Not Found
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50 min-h-screen">
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-100 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {blog.title}
          </h1>

          <p className="text-gray-600 leading-8 text-lg">
            {blog.details}
          </p>

          <Link to="/blogs">
            
            <Button className="mt-8">Back to Blogs</Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogsDetail;