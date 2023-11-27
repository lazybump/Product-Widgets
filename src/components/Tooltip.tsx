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
      <IoMdInformationCircleOutline className="w-3 h-3" />
      <div
        className={`w-60 h-40 rounded-md p-4 space-y-3 bg-white shadow-md  absolute -top-0 -translate-x-1/2 -translate-y-full transition-all duration-300 ${
          isTooltipOpen
            ? "fade-in pointer-events-auto"
            : "fade-out pointer-events-none"
        }`}
      >
        <p className="text-sm text-center text-black">
          This widget links directly to your public profile so that you can
          easily share your impact with your customers. Turn it off here if you
          do not want the badge to link to it.
        </p>
        <a
          href="#"
          className="font-bold text-sm inline-block w-full text-center"
        >
          View Public Profile
        </a>
      </div>
    </div>
  );
};

export default Tooltip;
