import Carousel from "@/components/Carousel/Carousel";
import AboutUs from "./AboutUs";
import HomeServiceSection from "./HomeServiceSection";
import ContactBanner from "@/components/ContactBanner/ContactBanner";
import PopularProductSection from "./PopularProductSection";
import TeamSection from "./TeamSection";
import CoreFeatureSection from "./CoreFeatureSection";

export default function Home() {
  return (
    <div>
      {/* Banner section */}
      <section className=" md:py-4 p-2 md:px-2">
        <Carousel></Carousel>
      </section>
      {/* About Us Section*/}
      <AboutUs></AboutUs>
      {/* Service Section */}
      <HomeServiceSection></HomeServiceSection>
      {/* Contact Banner section */}
      <ContactBanner></ContactBanner>
      <PopularProductSection></PopularProductSection>
      <TeamSection></TeamSection>
      <CoreFeatureSection></CoreFeatureSection>
    </div>
  );
}
