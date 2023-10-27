const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("big-black-box"),
  input: document.querySelector(`#input`),
};

DOMSelectors.box.insertAdjacentHTML(
  "beforebegin",
  `We can add text into an HTML file by writing it in JS!`
);

DOMSelectors.button.addEventListener("click", function () {
  let value = DOMSelectors.input.value;

  console.log(value);

  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `
    <p class = 'extra-text'>${input}</p>
    `
  );
});
 

function remove(){
  let buttons = document.querySelectorAll("button");
  buttons.foreach((btn)=> 
  btn.addEventListener("click', function (event) {
    console.log(event.target.parentElement.parentElement);
  })
  );
}
remove();