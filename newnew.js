const DOMSelectors = {
    button: document.getElementById("btn"), 
    text: document.querySelector("#text"), 
    box: document.getElementById("big-black-box"),
    points: document.querySelectorAll(".point"), 
    input: document.querySelector(`#input`),
};
DOMSelectors.button.addEventListener("click", function () {
    let input = DOMSelectors.input.value
    ; 
  
    console.log(input);
  
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `
          <p class = 'extra-text'>${input}</p>
      `
    );});
console.log(DOMSelectors);

DOMSelectors.button.insertAdjacentHTML(
    "afterend",
    `<p>thing<p>
    <img src="" class="cat-poster"></img>`
  );