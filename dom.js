const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("big-black-box"),
  input: document.querySelector("#input"),
  remove: document.querySelector("remove"),
};

DOMSelectors.button.addEventListener("click", function () {
  let value = DOMSelectors.input.value;

  if (value.trim() !== "") {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `
        <p>${value}</p>
        <button class='remove-button'>Remove</button>
      </div>
      `
    );
  }
  {
    const element = document.querySelector("name");
    element.remove();
  }

  document.getElementById=("btn").reset();
});

