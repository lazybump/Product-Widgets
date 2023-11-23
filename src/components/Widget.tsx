import { WidgetType } from "../types";
import Logo from "./Logo";

const Widget = ({ type, selectedColor, action, amount }: WidgetType) => {
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
          <figcaption></figcaption>
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
      <section>
        <div className="flex justify-between">
          <span>Link to Public Profile</span>
          <input type="checkbox" />
        </div>
        <div className="flex justify-between">
          <span>Badge color</span>
          <div className="space-x-1">
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </div>
        <div>
          <span>Activate badge</span>
        </div>
      </section>
    </li>
  );
};

export default Widget;
