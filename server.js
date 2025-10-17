const openButton = document.querySelector(".open-dialog-btn");
const closeButton = document.querySelector(".close-popup");
const dialog = document.querySelector("dialog")


openButton.addEventListener("click", () => {
  dialog.showModal();
});
closeButton.addEventListener("click", () => {
  dialog.close();
});

const openButton2 = document.querySelector(".open-dialog-btn-2");
const closeButton2 = document.querySelector(".close-popup-2");
const dialog2 = document.querySelector(".popup-2")


openButton2.addEventListener("click", () => {
  dialog2.showModal();
});
closeButton2.addEventListener("click", () => {
  dialog2.close();
});