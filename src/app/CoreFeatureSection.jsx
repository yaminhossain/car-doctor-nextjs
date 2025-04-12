import HomePageSectionHeadings from "@/components/HomePageSectionHeadings/HomePageSectionHeadings";
import SmallerCard from "@/components/SmallerCard/SmallerCard";
import { RiTeamLine } from "react-icons/ri";
import { MdDeliveryDining, MdSupportAgent } from "react-icons/md";
import { GiCutDiamond } from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";

const CoreFeatureSection = () => {
  // const features = [
  //   "Expert Team",
  //   "Timely Delivery",
  //   "24/7 Support",
  //   "Best Equipment",
  //   "100% Guaranty",
  //   "Timely Delivery",
  // ];

  const features = [
    { name: "Expert Team", icon: <RiTeamLine /> },
    { name: "Timely Delivery", icon: <MdDeliveryDining /> },
    { name: "24/7 Support", icon: <MdSupportAgent /> },
    { name: "Best Equipment", icon: <GiCutDiamond /> },
    { name: "100% Guaranty", icon: <FaShieldAlt /> },
    { name: "Timely Delivery", icon: <MdDeliveryDining /> },
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-self-center">
        {features.map((feature, index) => (
          <SmallerCard key={index} feature={feature}></SmallerCard>
        ))}
      </div>
    </section>
  );
};

export default CoreFeatureSection;
