import LottieAnimation from "../components/LottieAnimation/LottieAnimation";
import notFoundAnimation from "@/../public/animations/404NotFound.json";
const notFound = () => {
  return (
    <div className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen -mt-28">
      <LottieAnimation animationData={notFoundAnimation}></LottieAnimation>
    </div>
  );
};

export default notFound;
