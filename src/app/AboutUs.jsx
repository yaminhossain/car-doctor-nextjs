import Image from "next/image";
import image1 from "../../public/assets/images/team/1.jpg";
import image2 from "../../public/assets/images/team/3.jpg";

const AboutUs = () => {
  const displayImage1Style = {
    borderRadius: "10px",
  };
  // const displayImage2Style = {
  //   borderRadius: "10px",
  //   border: "5px solid #dbd1d0",
  //   position: "absolute",
  //   bottom: "-25%",
  //   right: "10%",
  // };
  return (
    <section className="flex flex-col-reverse md:flex-row w-full sm:p-2 px-2 py-4 gap-3 md:gap-4">
      {/* Images */}
      <div className="flex-1 relative">
        <Image
          src={image1}
          width={460}
          height={473}
          alt="Display image 1"
          style={displayImage1Style}
        ></Image>
        <figure className="border-6 border-gray-200 w-2xs lg:w-auto rounded-lg absolute -bottom-4 md:bottom-30 lg:bottom-1 -right-1 md:right-5 ">
          <Image
            src={image2}
            width={327}
            height={332}
            alt="Display image 2"
          ></Image>
        </figure>
      </div>
      {/* Description */}
      <div className="flex-1 ">
        <h1 className="text-[#ff3811] font-bold">About Us</h1>
        <p className="font-bold text-3xl my-4 max-w-full md:max-w-72 w-full">
          We are qualified & of experience in this field
        </p>
        <p className="text-gray-500 text-justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p className="text-gray-500 my-4 text-justify">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button className="button-solid-red">Get More Info</button>
      </div>
    </section>
  );
};
export default AboutUs;
