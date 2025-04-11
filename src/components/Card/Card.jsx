import Image from "next/image";
import StarRatings from "../StarRatings/StarRatings";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Card = ({
  title,
  price,
  image,
  ratingStyle,
  cardHeadingStyle = "",
  cardPriceStyle = "",
  shoppingBagVisible = false,
  cardExpertiseTitleStyle = "",
  expertiseTitle,
  facebook = "",
  x,
  linkedin,
  instagram,
}) => {
  const imageStyle = {
    width: "100%",
    borderRadius: "8px",
  };
  // console.log("Facebook", facebook);
  return (
    <div className="border rounded-lg border-gray-300 p-2 md:p-4 flex flex-col justify-between shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300 ease-in-out h-96 max-w-96 w-full place-self-center group">
      <figure className="grow relative bg-gray-100 rounded-lg">
        <Image src={image} fill alt="Card Image" style={imageStyle}></Image>
        <div
          className={`${
            shoppingBagVisible
              ? "absolute p-2 bg-white rounded-lg right-3 top-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100"
              : "hidden"
          }`}
        >
          <HiOutlineShoppingBag className="text-2xl text-[#ff3811]" />
        </div>
      </figure>
      <StarRatings ratingStyle={ratingStyle}></StarRatings>
      <h1 className={`text-xl font-semibold my-3 ${cardHeadingStyle}`}>
        {title}
      </h1>
      <p className={`text-[#ff3811] font-semibold ${cardPriceStyle}`}>
        Price : ${price}
      </p>
      <p className={`text-gray-400 font-semibold ${cardExpertiseTitleStyle}`}>
        {expertiseTitle}
      </p>
      {/* Social Links */}
      {facebook && (
        <div className={`flex gap-3 self-center mt-2`}>
          {/* <a href={facebook} target="_blank" rel="noopener noreferrer"> facebook</a> */}
          {/* Facebook */}
          <Link href={facebook} passHref={true} target="_blank">
            <FaFacebook className="text-2xl"></FaFacebook>
          </Link>
          {/* X */}
          <Link href={x} passHref={true} target="_blank">
            <FaXTwitter className="text-2xl"></FaXTwitter>
          </Link>
          {/* LinkedIn */}
          <Link href={linkedin} passHref={true} target="_blank">
            <FaLinkedin className="text-2xl"></FaLinkedin>
          </Link>
          {/* Instagram */}
          <Link href={instagram} passHref={true} target="_blank">
            <FaInstagram className="text-2xl"></FaInstagram>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
