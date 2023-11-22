import { HttpResponse, http } from "msw";
import dummyResponse from "./dummyResponse.json";

export const handlers = [
  http.get("https://api.mocki.io/v2/016d11e8/product-widgets", () => {
    return HttpResponse.json(dummyResponse);
  }),
];
