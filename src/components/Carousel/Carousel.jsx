"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper/modules";
import carouselImage1 from "../../../public/assets/images/homeCarousel/1.jpg";
import carouselImage2 from "../../../public/assets/images/homeCarousel/2.jpg";
import carouselImage3 from "../../../public/assets/images/homeCarousel/3.jpg";
import carouselImage4 from "../../../public/assets/images/homeCarousel/4.jpg";
import Image from "next/image";
import SwiperButtonPrev from "./SwiperButtonPrev";
import SwiperButtonNext from "./SwiperButtonNext";

const Carousel = () => {
  //Images
  const carouselImages = [
    carouselImage1,
    carouselImage2,
    carouselImage3,
    carouselImage4,
  ];
  //swiper useSwiper hook
  const swiper = useSwiper();

  // Image styles
  const imageStyle = {
    objectFit: "cover",
    maxHeight: "600px",
    position: "relative",
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={{
        //   prevEl: ".swiper-prev",
        //   nextEl: ".swiper-next",
        // }}
        modules={[Autoplay, Pagination]}
        className="mySwiper rounded-2xl relative"
      >
        {carouselImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              width={1280}
              height={600}
              alt="carousel image"
              style={imageStyle}
            ></Image>
          </SwiperSlide>
        ))}
        {/* TEST CODE without: useSwiper */}
        {/* <div className="slider-controler">
          <button
            onClick={() => swiper.slidePrev(10,true)}
            className="swiper-prev cursor-pointer border"
          >
            {" "}
            Prev
          </button>
          <button
            onClick={() => swiper.slideNext(20,true)}
            className="swiper-next cursor-pointer border"
          >
            {" "}
            Next
          </button>
        </div> */}
        {/* Overlay */}
        <div className="absolute top-0 w-full h-full bg-linear-to-r from-black/75 to-black/10 z-10 flex items-center justify-around">
          <div className="max-w-96 w-full text-white">
            <p className="text-lg md:text-6xl font-semibold">
              Affordable Price For Car Servicing
            </p>
            <p className="my-2 lg:my-7 text-sm md:text-base">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="button-solid-red text-sm md:text-base">Discover <span className="hidden md:inline">More</span></button>
              <button className="button-outline-white ms-2 md:ms-4 text-sm md:text-base">
              <span className="hidden md:inline">Latest</span>Project
              </button>
            </div>
          </div>
          <div className="flex gap-2 self-end h-[calc(100%-75%)]">
            <SwiperButtonPrev className="cursor-pointer bg-white/50 text-white hover:bg-[#FF3811] p-1 md:p-3 size-8 md:size-16 rounded-full text-2xl md:text-4xl"></SwiperButtonPrev>
            <SwiperButtonNext className="cursor-pointer bg-white/50 text-white hover:bg-[#FF3811] p-1 md:p-3 size-8 md:size-16  rounded-full text-2xl md:text-4xl"></SwiperButtonNext>
          </div>
        </div>
      </Swiper>
    </>
  );
};
export default Carousel;
