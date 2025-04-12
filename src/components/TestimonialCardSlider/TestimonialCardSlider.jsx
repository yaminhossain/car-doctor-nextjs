"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { FreeMode } from "swiper/modules";
import SwiperButtonPrev from "../Carousel/SwiperButtonPrev";
import SwiperButtonNext from "../Carousel/SwiperButtonNext";

import { fakeTestimonialData } from "@/app/fakeTestimonialData";
import StarRatings from "../StarRatings/StarRatings";
import Image from "next/image";
import { IoMdQuote } from "react-icons/io";

const TestimonialCardSlider = () => {
  const imageStyle = {
    objectFit: "cover",
    width: "64px",
    height: "64px",
    objectPosition: "top",
    borderRadius: "100%",
  };
  return (
    <>
      <Swiper
          slidesPerView={1} // default fallback
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper relative"
      >
        
          {fakeTestimonialData.map((data) => (
            <SwiperSlide key={data._id} className="px-2 md:px-8">
              <div className="w-full border border-gray-100 rounded-md shadow flex flex-col gap-4 py-4 px-6 md:px-8 -z-10">
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <Image
                      height={64}
                      width={64}
                      src={data.image}
                      alt={data.reviewerName}
                      style={imageStyle}
                    />
                    <div>
                      <p className="font-bold">{data.reviewerName}</p>
                      <p>{data.reviewerDesignation}</p>
                    </div>
                  </div>
                  <IoMdQuote className="text-6xl text-[#FF3811]/30" />
                </div>
                <p className="text-justify text-gray-400 font-extralight">
                  {data.review}
                </p>
                <StarRatings ratingProps={data.star}></StarRatings>
              </div>
            </SwiperSlide>
          ))}

        {/*====================== Navigation Buttons =================*/}
        <SwiperButtonPrev className="absolute top-1/2 -left-0 -translate-y-1/2 z-50 cursor-pointer border border-gray-200 bg-white hover:bg-[#FF3811] p-1 md:p-3 size-8 md:size-16 rounded-full text-2xl md:text-4xl" />

        <SwiperButtonNext className="absolute top-1/2 -right-0 -translate-y-1/2 z-50 cursor-pointer border border-gray-200 bg-white hover:bg-[#FF3811] p-1 md:p-3 size-8 md:size-16 rounded-full text-2xl md:text-4xl" />
      </Swiper>
    </>
  );
};

export default TestimonialCardSlider;
