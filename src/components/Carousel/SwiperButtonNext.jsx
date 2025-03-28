import { IoIosArrowRoundForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

const SwiperButtonPrev = ({ className }) => {
  const swiper = useSwiper();
  return (
    <button className={`${className}`} onClick={() => swiper.slideNext()}>
      <IoIosArrowRoundForward />
    </button>
  );
};
export default SwiperButtonPrev;
