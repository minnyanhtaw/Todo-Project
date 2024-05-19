import { createListFormHandler } from "./handlers.js";
import { createListForm } from "./selectors.js";

const listener = () => {
    createListForm.addEventListener("submit",createListFormHandler)
}

export default listener;