import { IoIosArrowRoundBack } from "react-icons/io";
import { useSwiper } from "swiper/react";

const SwiperButtonPrev = ({ className }) => {
  const swiper = useSwiper();
  return (
    <button className={`${className}`} onClick={() => swiper.slidePrev()}>
      <IoIosArrowRoundBack />
    </button>
  );
};
export default SwiperButtonPrev;
