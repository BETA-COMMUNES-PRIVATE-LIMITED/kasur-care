import { useState } from 'react';

import cl1 from '../../assets/cl1.webp';
import cl2 from '../../assets/cl2.webp';
import cl3 from '../../assets/cl3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'John Doe',
      location: 'New York',
      image: cl1,
      review:
        'Doccure exceeded my expectations in healthcare. The seamless booking process made everything smooth and easy.',
    },
    {
      name: 'Sarah Ahmed',
      location: 'London',
      image: cl2,
      review:
        'The doctors were extremely professional and caring. Booking appointments takes only a few minutes.',
    },
    {
      name: 'Michael Smith',
      location: 'Toronto',
      image: cl3,
      review:
        'Excellent healthcare experience from start to finish. The support team was responsive and helpful.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* IMAGE SECTION */}
          <div className="md:col-span-4 flex justify-center relative w-full">

            {/* PREV BUTTON */}
            <button className="testimonial-prev absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition">
              <ChevronLeft size={20} />
            </button>

            {/* IMAGE */}
            <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-xl">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-full h-full object-cover duration-500"
              />
            </div>

            {/* NEXT BUTTON */}
            <button className="testimonial-next absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* CONTENT SECTION */}
          <div className="md:col-span-8 text-center md:text-left">

            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: '.testimonial-next',
                prevEl: '.testimonial-prev',
              }}
              onSlideChange={(swiper) =>
                setActiveIndex(swiper.realIndex)
              }
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div>

                    {/* SUBTITLE */}
                    <span className="text-sky-500 font-semibold text-sm uppercase tracking-wide">
                      Testimonials
                    </span>

                    {/* HEADING */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mt-2 mb-4 md:mb-6 leading-snug">
                      What Our Client Says
                    </h2>

                    {/* REVIEW */}
                    <p className="text-slate-500 leading-7 md:leading-8 text-sm sm:text-base">
                      {item.review}
                    </p>

                    {/* USER INFO */}
                    <div className="mt-6 md:mt-8">
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.name}
                      </h3>

                      <p className="text-slate-400 text-sm mt-1">
                        {item.location}
                      </p>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </div>
    </section>
  );
}