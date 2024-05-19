import Swal from "sweetalert2";
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

export const checkList = (event) => {
  // console.log(event.target);
  const listText = event.target.nextElementSibling;
  listText.classList.toggle("line-through");
};

export const deleteList = (event) => {
  const list = event.target.closest(".list");
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      list.remove();
    }
  });
};

export const listEditBtn = (event) => {
  const list = event.target.closest(".list");
  const listText = list.querySelector(".list-text");

  const input = document.createElement("input");
  input.className = "input border border-zinc-700 focus-visible:outline-none";
  input.value = listText.innerText;
  listText.innerText = null;
  // listText.classList.toggle("hidden");
  listText.after(input);
  input.focus();

  input.addEventListener("blur", updateList);
};

export const updateList = (event) => {
  const list = event.target.closest(".list");
  const listText = list.querySelector(".list-text");

  listText.innerText = event.target.value;
  event.target.remove();
};

export const listGroupHandler = (event) => {
  // console.log(event.target);
  if (event.target.classList.contains("list-checkbox")) {
    checkList(event);
  } else if (event.target.classList.contains("list-edit-btn")) {
    listEditBtn(event);
  } else if (event.target.classList.contains("list-del-btn")) {
    deleteList(event);
  }
};
