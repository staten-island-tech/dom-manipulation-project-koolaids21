document.addEventListener("DOMContentLoaded", function() {
  const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById("big-black-box"),
    input: document.querySelector("#input"),
    nameInput: "#name", // You were missing a colon
    ageInput: "#age",    // You were missing a colon
  };

  // Call the injectFunction when the button is clicked
  DOMSelectors.button.addEventListener("click", injectFunction);

  function injectFunction() {
    const formData = gatherFormData();
    callotherFunctions(formData);
  }

  function gatherFormData() {
    const data = {};

    // Use querySelector to get the input values based on the selectors in DOMSelectors
    data.name = document.querySelector(DOMSelectors.nameInput).value;
    data.age = document.querySelector(DOMSelectors.ageInput).value;

    return data;
  }

  function callotherFunctions(formData) {
    console.log("Form Data:", formData);
  }

});
