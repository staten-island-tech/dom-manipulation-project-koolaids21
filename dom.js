const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("big-black-box"),
  input: document.querySelector("#input"),
};

DOMSelectors.box.insertAdjacentHTML(
  "beforebegin",
  ``
);

DOMSelectors.button.addEventListener("click", function () {
  let value = DOMSelectors.input.value;

  console.log(value);

  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `
    <div class='extra-text'>
      <p>${value}</p>
      <button class='remove-button'>Remove</button>
    </div>
    `
  );
  {
  nameInput.value = "";
  ageInput.value = "";
}  {
  alert("Please fill in both name and age fields.");
}

  const removeButtons = document.querySelectorAll(".remove-button");
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", function (event) {
      const objectToRemove = event.target.parentElement;
      objectToRemove.remove();
    });
  });
});