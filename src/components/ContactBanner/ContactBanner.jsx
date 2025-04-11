import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdPermPhoneMsg } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

const ContactBanner = () => {
  return (
    <section className="bg-gray-900 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg place-items-center gap-2 lg:gap-6 my-4 mx-2 lg:mx-0 py-4 md:py-8 lg:py-14">
      <div className="flex items-center gap-2 md:gap-4">
        <RiCalendarScheduleLine className="text-4xl" />
        <div>
          <p className="text-base md:text-xl">We are open monday-friday</p>
          <p className="text-xl md:text-2xl font-bold">7.00 am - 9.00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <MdPermPhoneMsg className="text-4xl" />
        <div>
          <p className="text-base md:text-xl">Have a question?</p>
          <p className="text-xl md:text-2xl font-bold">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <HiLocationMarker className="text-4xl" />
        <div>
          <p className="text-base md:text-xl">Need a repair? our address</p>
          <p className="text-xl md:text-2xl font-bold">Liza Street, New York</p>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
