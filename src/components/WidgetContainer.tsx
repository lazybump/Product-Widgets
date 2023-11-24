import { useEffect, useState } from "react";
import { WidgetType } from "../types";
import Widget from "./Widget";

const WidgetContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [widgets, setWidgets] = useState<WidgetType[]>([]);
  const [error, setError] = useState("");
  // const [active, setActive] = useState<number>(1)

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
        <main className="w-4/5 h-[697px] rounded-lg shadow-2xl p-5 flex flex-col">
          <h1 className="pb-2 text-2xl font-bold border-b-2 border-darkGray text-center">
            Per product widgets
          </h1>
          <ul className="my-6 grow flex flex-col justify-between">
            {widgets.map((widget) => (
              <Widget key={widget.id} {...widget} />
            ))}
          </ul>
        </main>
      )}
    </>
  );
};

export default WidgetContainer;
