const HomePageSectionHeadings = ({ sectionName, heading, description }) => {
  return (
    <>
      <h3 className="text-center font-bold text-[#ff3811]">{sectionName}</h3>
      <h1 className="text-center text-2xl md:text-4xl font-bold my-3">
        {heading}
      </h1>
      <p className="max-w-full md:max-w-2/3 lg:max-w-2/4 w-full text-center font-light mx-auto mb-6">
        {description}
      </p>
    </>
  );
};

export default HomePageSectionHeadings;
