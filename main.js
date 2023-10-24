DOMSelectors = {
    //store all related code for selecting elements here
button: document.getElementById("btn")
input: document.querySelector ('#input')
};
DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("afterend",  <p> ${input} </p> );
});


