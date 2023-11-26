import { useState } from "react";
import { ColorType, WidgetObjType } from "../types";
import Logo from "./Logo";
import { FaCheck } from "react-icons/fa6";
import Tooltip from "./Tooltip";

interface WidgetProps extends WidgetObjType {
  activeWidgetId: number | null;
  setActiveWidgetId: React.Dispatch<React.SetStateAction<number | null>>;
}

const Widget = ({
  id,
  type,
  selectedColor,
  action,
  amount,
  activeWidgetId,
  setActiveWidgetId,
}: WidgetProps) => {
  const [isLinkChecked, setIsLinkChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(selectedColor);

  // To change widget theme colour
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value as ColorType);
  };

  // For the widget activation
  const handleToggle = () => {
    setActiveWidgetId((prev) => (prev === id ? null : id));
  };

  const colorThemes = {
    green: "bg-green text-white",
    black: "bg-black text-white",
    blue: "bg-blue text-white",
    white: "bg-white text-green",
    beige: "bg-beige text-green",
  };
  const theme = colorThemes[selectedRadio];

  return (
    <li className="pb-9 h-40 lg:h-full lg:pb-0">
      <header
        className={`${theme} rounded-md flex h-16 shadow-md items-center px-2 transition-colors duration-300`}
      >
        <figure className="mr-3">
          <Logo selectedRadio={selectedRadio} />
        </figure>
        <div className="flex flex-col justify-between w-36 h-10">
          <p className="h-4 text-xs">This product {action}</p>
          <p className="font-bold overflow-hidden">
            {amount}
            {type === "carbon" && "kgs of"} {type}
          </p>
        </div>
      </header>
      {/* Interactive part */}
      <section className="text-green grid gap-2.5 pt-2">
        <div className="h-6 flex justify-between items-center">
          <div className="flex w-40 h-5">
            <p className="text-sm text-center">Link to Public Profile</p>
            <Tooltip />
          </div>
          <div className="flex">
            <input
              type="checkbox"
              id={`link-${id}`}
              className="hidden peer"
              onChange={() => setIsLinkChecked((prev) => !prev)}
              checked={isLinkChecked}
            />
            <label
              htmlFor={`link-${id}`}
              className="w-4 h-4 border-2 border-darkGray rounded-sm cursor-pointer hover:bg-lightGreen relative group transition-all duration-150 peer-checked:bg-green peer-checked:border-green"
            >
              <span className="w-8 h-8 bg-lightGreen rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></span>
              <FaCheck
                className={`text-white absolute w-full h-full transition-all duration-150 ${
                  isLinkChecked ? "opacity-100" : "opacity-0"
                }`}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="h-4 flex items-center w-24 text-sm">Badge colour</p>
          <div className="flex justify-between w-24 h-4">
            {["blue", "green", "beige", "white", "black"].map(
              (color, index) => (
                <div key={index} className="flex">
                  <input
                    type="radio"
                    name={type}
                    id={`radio-${id}-${color}`}
                    checked={selectedRadio === color}
                    value={color}
                    onChange={handleColorChange}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={`radio-${id}-${color}`}
                    className={`bg-${color} w-4 cursor-pointer hover:opacity-80 peer-checked:border-2 peer-checked:border-mediumGray peer-checked:shadow-md`}
                  ></label>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="h-4 flex items-center w-24 text-sm">Activate badge</p>
          <label htmlFor={`toggle-${id}`} className="toggle-label">
            <input
              type="checkbox"
              id={`toggle-${id}`}
              className="toggle-input"
              checked={id === activeWidgetId}
              onChange={handleToggle}
            />
            <div
              className="toggle-fill"
              data-testid="toggle-fill"
              aria-hidden
            ></div>
          </label>
        </div>
      </section>
    </li>
  );
};

export default Widget;
