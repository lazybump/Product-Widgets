import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Tooltip = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsTooltipOpen(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsTooltipOpen(false);
    }, 300);
  };

  return (
    <div
      className="self-start relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IoMdInformationCircleOutline className="text-sm" />
      <div
        className={`absolute -top-0 -translate-x-1/2 -translate-y-full w-44 bg-white shadow-2xl rounded-lg p-4 text-[9px] text-center transition-all duration-300 ${
          isTooltipOpen
            ? "fade-in pointer-events-auto"
            : "fade-out pointer-events-none"
        }`}
      >
        <p className="text-black">
          This widget links directly to your public profile so that you can
          easily share your impact with your customers. Turn it off here if you
          do not want the badge to link to it.
        </p>
        <a href="#" className="block mt-3 text-blue-500 font-bold">
          View Public Profile
        </a>
      </div>
    </div>
  );
};

export default Tooltip;
