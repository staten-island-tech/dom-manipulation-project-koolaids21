DOMSelectors = {
    //store all related code for selecting elements here
    form: document.querySelector("#form"),
    firstName: document.querySelector("first-name"),
    h2s: document.querySelector("h2"),
};
DOMSelectors.form.addEventListener("submit", function () {
  Event.preventDefualt();
  DOMSelector.h2s.forEach((header)=> header.textContent = DOMSelectors.firstName.value)
});
