import { useState } from "react";
import { WidgetType } from "../types";
import Logo from "./Logo";
import Switch from "./Switch";

const Widget = ({ id, type, selectedColor, action, amount }: WidgetType) => {
  const [selectedRadio, setSelectedRadio] = useState<string>(selectedColor);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
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
          <span>Link to Public Profile</span>
          <input type="checkbox" />
        </div>
        <div className="flex justify-between items-center">
          <span>Badge colour</span>
          <div className=" space-x-1.5 flex">
            {["blue", "green", "beige", "white", "black"].map(
              (color, index) => (
                <div key={index} className="flex">
                  <input
                    type="radio"
                    name={type}
                    id={`${type}-radio-${color}`}
                    checked={selectedRadio === color}
                    value={color}
                    onChange={handleOptionChange}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={`${type}-radio-${color}`}
                    className={`bg-${color} w-4 h-4 cursor-pointer hover:opacity-80 peer-checked:border-2 peer-checked:border-darkGray`}
                  ></label>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span>Activate badge</span>
          <Switch id={id} />
        </div>
      </section>
    </li>
  );
};

export default Widget;
