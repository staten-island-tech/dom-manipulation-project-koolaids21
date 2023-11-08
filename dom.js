const DOMSelectors = {
  button: document.getElementById("btn"),
  form: document.querySelector("#myform"),
  box: document.getElementById("big-black-box"),
  input: document.querySelector("#input"),
  remove: document.querySelector("#remove"),
  picture: document.querySelector(".pic"),
};

DOMSelectors.button.addEventListener("click", function () {
  const value = DOMSelectors.input.value;
  {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class='card'><p>${value}</p><button class='remove-button'>Remove</button></div> 
      `
    );
    DOMSelectors.input.value = ""; 
  } 
  const removeButton = document.querySelectorAll(".remove-button");
  removeButton.forEach((removeButton) => {
    removeButton.addEventListener("click", function (event) {
      const objectToRemove = event.target.parentElement;
      objectToRemove.remove();
    });
  });
});