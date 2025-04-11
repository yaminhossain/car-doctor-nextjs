import HomePageSectionHeadings from "@/components/HomePageSectionHeadings/HomePageSectionHeadings";
import image2 from "@/../public/assets/images/team/2.jpg";
import image1 from "@/../public/assets/images/team/1.jpg";
import image3 from "@/../public/assets/images/team/3.jpg";
import Card from "@/components/Card/Card";

const TeamSection = () => {
  const images = [image1, image3, image2];

  return (
    <section>
      <HomePageSectionHeadings
        sectionName={"Team"}
        heading={"Meet Our Team"}
        description={
          "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-4">
        {images.map((image, index) => (
          <Card
            key={index}
            image={image}
            ratingStyle={{ display: "none" }}
            title={"Car Engine Plug"}
            cardHeadingStyle="self-center"
            cardPriceStyle="hidden"
            cardExpertiseTitleStyle="self-center"
            expertiseTitle={"Engine Expert"}
            facebook="https://www.facebook.com/"
            x="https://www.x.com/"
            linkedin="https://www.linkedin.com/"
            instagram="https://www.instagram.com/"
          ></Card>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
