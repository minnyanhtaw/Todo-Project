import { createList } from "./functions.js";
import { createListForm, listGroup } from "./selectors.js";

export const createListFormHandler = (event) => {
  event.preventDefault();
  console.log("U click add btn");
  const formdata = new FormData(createListForm);
  const textInput = formdata.get("text-input");

  listGroup.append(createList(textInput));
  createListForm.reset();
};
