import React from "react";
import { Link } from "react-router-dom";
import { blogs } from './data/blogs';
import Button from "../components/common/Button";

const Blogs = () => {
    return (
        <div className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50 min-h-screen">

            <div className="text-center mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Medical
            <span className="text-blue-400"> Blogs</span>
          </h1>

                <p className="text-gray-500 mt-3 text-lg ">
                    Read the latest healthcare articles and medical tips
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-56 object-cover"
                        />

                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                {blog.title}
                            </h2>

                            <p className="text-gray-500 mb-5">
                                {blog.description}
                            </p>

                            <Link to={`/blog/${blog.id}`}>
                                <Button>Read More</Button>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Blogs;