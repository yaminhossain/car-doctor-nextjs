import Carousel from "@/components/Carousel/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className=" md:py-4 p-2 md:px-2">
        <Carousel></Carousel>
      </section>
    </div>
  );
}
