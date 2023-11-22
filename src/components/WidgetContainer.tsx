import { useEffect, useState } from "react";
import { WidgetType } from "../types";

const WidgetContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [widgets, setWidgets] = useState<WidgetType[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.mocki.io/v2/016d11e8/product-widgets")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setWidgets(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return (
    <ul>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {widgets.map((widget) => (
        <li key={widget.id}>{widget.type}</li>
      ))}
    </ul>
  );
};

export default WidgetContainer;
