const DOMSelectors = {
  nameInput: "#name",
  ageInput: "#age",
};

function injectfunction() {
  const formData = gatherFormData();
  callotherFunctions(formData);
}

function gatherFormData() {
  const formData = {};

  formData.name = document.querySelector(DOMSelectors.nameInput).value;
  formData.age = document.querySelector(DOMSelectors.ageInput).value;

  return formData;
}

function callotherFunctions(formData) {
  console.log("Form Data:", formData);
  // Add your other function calls and logic here
}