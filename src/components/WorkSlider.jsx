import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// work data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Laundry Management System',
          path: '/thumb5.jpg',
          link: 'https://laundry-mngt.vercel.app/',
        },
        {
          title: 'POS Management System',
          path: '/thumb6.jpg',
          link: 'https://web-pos-alpha.vercel.app/',
        },
        {
          title: 'E-Commerce Platform',
          path: '/thumb3.jpg',
          link: '#',
        },
        {
          title: 'Portfolio Website',
          path: '/thumb4.jpg',
          link: '#',
        },
      ],
    },
    {
      images: [
        {
          title: 'Mobile App Design',
          path: '/thumb4.jpg',
          link: '#',
        },
        {
          title: 'Dashboard Analytics',
          path: '/thumb1.jpg',
          link: '#',
        },
        {
          title: 'Social Media App',
          path: '/thumb2.jpg',
          link: '#',
        },
        {
          title: 'Booking System',
          path: '/thumb3.jpg',
          link: '#',
        },
      ],
    },
  ],
};

import { BsArrowRight } from 'react-icons/bs';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((data, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-6 cursor-pointer">
              {data.images.map((images, index) => {
                return (
                  <a
                    key={index}
                    href={images.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* images */}
                      <img
                        src={images.path}
                        width={500}
                        height={300}
                        alt={images.title}
                        className="object-cover"
                      />

                      {/* overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#4b0082] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
                          {/* title 1 */}
                          <div className="delay-100">LIVE</div>

                          {/* title 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">
                            PROJECT
                          </div>

                          {/* icons*/}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            {' '}
                            <BsArrowRight />{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
