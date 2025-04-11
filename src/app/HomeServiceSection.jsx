import Card from "@/components/Card/Card";
import { service } from "./fakeData";
import HomePageSectionHeadings from "@/components/HomePageSectionHeadings/HomePageSectionHeadings";

const HomeServiceSection = async () => {
  // styling rating
  const ratingStyle = {
    display: "none",
  };

  return (
    <section className="my-4 md:my-8 px-2 md:px-4">
      <HomePageSectionHeadings
        sectionName={"Service"}
        heading={"Our Service Area"}
        description={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      ></HomePageSectionHeadings>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {service.map((singleService) => (
          <Card
            key={singleService._id}
            title={singleService.title}
            price={singleService.price}
            image={singleService.img}
            ratingStyle={ratingStyle}
          ></Card>
        ))}
      </div>
      <button className="button-outline-red mt-5 mx-auto block">
        More Services
      </button>
    </section>
  );
};

export default HomeServiceSection;
