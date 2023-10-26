const DOMSelectors = {
  button: document.getElementById("btn")
  nameInput "#name",
  ageInput: "#age",
};

function injectfunction() {
  const formData = gatherFormData();
  callotherFunctions(formData);
}

function gatherFormData() {
  const data = {};

  data.name = document.querySelector(DOMSelectors.nameInput).value;
  data.age = document.querySelector(DOMSelectors.ageInput).value;

  return data;
}

function callotherFunctions(formData) {
  console.log("Form Data:", formData);
}