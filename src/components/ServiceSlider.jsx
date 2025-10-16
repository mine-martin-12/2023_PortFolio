import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxArrowTopLeft,
  RxArrowTopRight,
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from 'react-icons/rx';

// framermotion

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Creating memorable brand identities that resonate with your target audience and stand out in the market.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Crafting beautiful, user-friendly interfaces that enhance user experience and drive engagement.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building robust, scalable web applications using modern technologies and best practices.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Writing compelling content that communicates your message effectively and drives conversions.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimizing your digital presence to improve search rankings and increase organic traffic.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((items, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,132,0.15)] h-max rounded-lg px-6 py-8
              flex sm:flex-col gap-x-6  group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
            >
              {/* icons */}
              <div className="text-4xl text-indigo-500 mb-4">{items.icon}</div>

              {/* title and description */}

              <div className="mb-8">
                <div className="text-lg mb-2">{items.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {items.description}
                </p>
              </div>
              <div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-indigo-500 transition-all duration-300" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
