
const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("big-black-box"),
  input: document.querySelector("#input"),
};

DOMSelectors.button.addEventListener("click", function () {
  let value = DOMSelectors.input.value;

  if (value.trim() !== "") {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `
      <div class='extra-text'>
        <p>${value}</p>
        <button class='remove-button'>Remove</button>
      </div>
      `
    );

    DOMSelectors.input.value = ""; // Clear the input field
  } else {
    alert("Please fill in the input field.");
  }
  
  const removeButtons = document.querySelectorAll(".remove-button");
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", function (event) {
      const objectToRemove = event.target.parentElement;
      objectToRemove.remove();
    });
  });
});