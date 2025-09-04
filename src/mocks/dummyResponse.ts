import { WidgetObjType } from "../types";

export const dummyResponse: WidgetObjType[] = [
  {
    id: 1,
    type: "plastic bottles",
    amount: 100,
    action: "collects",
    active: true,
    linked: true,
    selectedColor: "green",
  },
  {
    id: 2,
    type: "trees",
    amount: 10,
    action: "plants",
    active: false,
    linked: false,
    selectedColor: "black",
  },
  {
    id: 3,
    type: "carbon",
    amount: 20,
    action: "offsets",
    active: false,
    linked: false,
    selectedColor: "blue",
  },
];

// Simulates an API call with a delay
export const fetchWidgets = (): Promise<WidgetObjType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyResponse);
    }, 500); // 500ms delay to mimic network
  });
};
