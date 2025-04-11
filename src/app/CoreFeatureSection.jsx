import HomePageSectionHeadings from "@/components/HomePageSectionHeadings/HomePageSectionHeadings";

const CoreFeatureSection = () => {
  const features = [
    "Expert Team",
    "Timely Delivery",
    "24/7 Support",
    "Best Equipment",
    "100% Guranty",
    "Timely Delivery",
  ];
  return (
    <section className="my-8 px-2 md:px-4">
      <HomePageSectionHeadings
        sectionName={"Core Features"}
        heading={"Why Choose Us"}
        description={
          "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        }
      ></HomePageSectionHeadings>
    </section>
  );
};

export default CoreFeatureSection;
