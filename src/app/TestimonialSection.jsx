import HomePageSectionHeadings from "@/components/HomePageSectionHeadings/HomePageSectionHeadings";
import TestimonialCardSlider from "@/components/TestimonialCardSlider/TestimonialCardSlider";

const TestimonialSection = () => {
  return (
    <section className="my-8 px-2 md:px-4">
      <HomePageSectionHeadings
        sectionName={"Testimonial"}
        heading={"What Customer Says"}
        description={
          "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      ></HomePageSectionHeadings>
      <TestimonialCardSlider></TestimonialCardSlider>
    </section>
  );
};

export default TestimonialSection;
