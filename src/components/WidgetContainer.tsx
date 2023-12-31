import { useEffect, useState } from "react";
import { WidgetObjType } from "../types";
import Widget from "./Widget";

const WidgetContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [widgets, setWidgets] = useState<WidgetObjType[]>([]);
  const [error, setError] = useState("");
  const [activeWidgetId, setActiveWidgetId] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.mocki.io/v2/016d11e8/product-widgets")
      .then((response) => response.json())
      .then((data) => {
        setWidgets(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <main className="w-[331px] h-[697px] rounded-lg p-9 bg-[#f9f9f9] shadow-2xl flex flex-col lg:w-[851px] lg:h-[419px]">
          <h3 className="font-bold text-3xl text-center pb-3 border-b-2 border-mediumGray lg:text-start">
            Per product widgets
          </h3>
          <ul className="mt-5 px-5 grow flex flex-col justify-between lg:flex-row lg:p-0 lg:grow-0 lg:h-44">
            {widgets.map((widget) => (
              <Widget
                key={widget.id}
                {...widget}
                activeWidgetId={activeWidgetId}
                setActiveWidgetId={setActiveWidgetId}
              />
            ))}
          </ul>
        </main>
      )}
    </>
  );
};

export default WidgetContainer;

