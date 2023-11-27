export type ColorType = "white" | "black" | "blue" | "green" | "beige";

export interface WidgetObjType {
  id: number;
  type: "carbon" | "plastic bottles" | "trees";
  amount: number;
  action: "collects" | "plants" | "offsets";
  active: boolean;
  linked: boolean;
  selectedColor: ColorType;
}

