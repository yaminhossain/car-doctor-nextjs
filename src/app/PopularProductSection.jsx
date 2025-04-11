import productImage1 from "@/../public/assets/images/products/1.png";
import productImage2 from "@/../public/assets/images/products/2.png";
import productImage3 from "@/../public/assets/images/products/3.png";
import productImage4 from "@/../public/assets/images/products/4.png";
import productImage5 from "@/../public/assets/images/products/5.png";
import productImage6 from "@/../public/assets/images/products/6.png";
import { service } from "./fakeData";

import Card from "@/components/Card/Card";
import HomePageSectionHeadings from "@/components/HomePageSectionHeadings/HomePageSectionHeadings";
const PopularProductSection = () => {
  const images = [
    productImage1,
    productImage2,
    productImage3,
    productImage4,
    productImage5,
    productImage6,
  ];
  // Giving custom style to the rating stars
  const ratingStyle = {
    alignSelf: "center",
  };

  return (
    <section className="my-14">
      <HomePageSectionHeadings
        sectionName={"Popular Products"}
        heading={"Browse Our Products"}
        description={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      ></HomePageSectionHeadings>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-4">
        {images.map((image, index) => {
          const serviceItem = service[index];
          return (
            <Card
              key={index}
              image={image}
              title={serviceItem.title}
              price={serviceItem.price}
              cardHeadingStyle="self-center"
              cardPriceStyle="self-center"
              ratingStyle={ratingStyle}
              shoppingBagVisible="true"
            ></Card>
          );
        })}
      </div>
      <button className="button-outline-red mt-5 mx-auto block">
        More Products
      </button>
    </section>
  );
};

export default PopularProductSection;
