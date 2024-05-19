import { doneCount, listGroup, listTemplate, totalCount } from "./selectors.js";

export const createList = (text) => {
  const list = listTemplate.content.cloneNode(true);
  list.querySelector(".list-text").innerText = text;
  return list;
};

export const totalCountList = () => {
  return listGroup.querySelectorAll(".list").length;
};

export const totalCountDoneList = () => {
  return listGroup.querySelectorAll(".list .list-checkbox:checked").length;
};

export const updateCountList = () => {
  totalCount.innerText = totalCountList();
  doneCount.innerText = totalCountDoneList();
};
