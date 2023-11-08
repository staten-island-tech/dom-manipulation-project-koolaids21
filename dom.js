const DOMSelectors = {
  button: document.getElementById("btn"),
  form: document.querySelector("#myform"),
  box: document.getElementById("big-black-box"),
  input: document.querySelector("#input"),
  remove: document.querySelector("#remove"),
};

DOMSelectors.button.addEventListener("click", function () {
  let value = DOMSelectors.input.value;
{
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class='extra'><p>${value}</p><button class='remove-button'>Remove</button></div>
      `
    );
    DOMSelectors.input.value = ""; 
  } 
  const removeButtons = document.querySelectorAll(".remove-button");
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", function (event) {
      const objectToRemove = event.target.parentElement;
      objectToRemove.remove();
    });
  });
});