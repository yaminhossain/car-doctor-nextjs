const SmallerCard = ({ feature }) => {
  const { name, icon } = feature;
  return (
    <div className="border border-gray-200 max-w-44 h-36 rounded-md p-4 flex flex-col items-center justify-center gap-2 shadow-md hover:bg-[#FF3811] group cursor-pointer">
      <div className="text-5xl text-[#FF3811] group-hover:text-white">{icon}</div>
      <div className="text-center  text-gray-800 group-hover:text-white font-bold ">{name}</div>
    </div>
  );
};

export default SmallerCard;
