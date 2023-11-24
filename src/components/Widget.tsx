import { useState } from "react";
import { WidgetObjType } from "../types";
import Logo from "./Logo";
import { FaCheck } from "react-icons/fa6";
import Tooltip from "./Tooltip";

interface WidgetProps extends WidgetObjType {
  activeWidgetId: number;
  setActiveWidgetId: React.Dispatch<React.SetStateAction<number>>;
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
  const [selectedRadio, setSelectedRadio] = useState<string>(selectedColor);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
  };

  const handleToggle = () => {
    setActiveWidgetId((prev) => {
      if (prev) {
        return id;
      } else {
        return 0;
      }
    });
  };

  const colorThemes = {
    green: "bg-green text-white",
    black: "bg-black text-white",
    blue: "bg-blue text-white",
    white: "bg-white text-green",
    beige: "bg-beige text-green",
  };
  const theme = colorThemes[selectedColor];

  return (
    <li className="space-y-2">
      <header className={`${theme} rounded-md flex p-3`}>
        <figure className="mr-3">
          <Logo selectedColor={selectedColor} />
        </figure>
        <div className="flex flex-col justify-between">
          <p className="text-xs">This product {action}</p>
          <p className="font-bold">
            {amount}
            {type === "carbon" && "kgs of"} {type}
          </p>
        </div>
      </header>
      {/* Interactive part */}
      <section className="text-green pt-1 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            <h3>Link to Public Profile</h3>
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
              <span
                className={`w-8 h-8 bg-lightGreen rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ${
                  isLinkChecked ? "" : ""
                }`}
              ></span>
              <FaCheck
                className={`text-white absolute w-full h-full transition-all duration-150 ${
                  isLinkChecked ? "opacity-100" : "opacity-0"
                }`}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3>Badge colour</h3>
          <div className=" space-x-1.5 flex">
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
                    className={`bg-${color} w-4 h-4 cursor-pointer hover:opacity-80 peer-checked:border-2 peer-checked:border-mediumGray`}
                  ></label>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3>Activate badge</h3>
          <label htmlFor={`toggle-${id}`} className="toggle-label">
            <input
              type="checkbox"
              id={`toggle-${id}`}
              className="toggle-input"
              checked={id === activeWidgetId}
              onChange={handleToggle}
            />
            <div className="toggle-fill"></div>
          </label>
        </div>
      </section>
    </li>
  );
};

export default Widget;
