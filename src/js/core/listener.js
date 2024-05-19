import { createListFormHandler, listGroupHandler } from "./handlers.js";
import { createListForm, listGroup } from "./selectors.js";

const listener = () => {
  createListForm.addEventListener("submit", createListFormHandler);
  listGroup.addEventListener("click", listGroupHandler);
};

export default listener;
