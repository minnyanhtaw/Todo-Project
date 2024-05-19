import { listTemplate } from "./selectors.js";

export const createList = (text) => {
  const list = listTemplate.content.cloneNode(true);
  list.querySelector(".list-text").innerText = text;
  return list;
};

