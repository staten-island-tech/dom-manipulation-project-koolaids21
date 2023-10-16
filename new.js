const DOMSelectors = {
    button: document.getElementById("btn"), 
    text: document.querySelector("#text"), 
    box: document.getElementById("big-black-box"),
    points: document.querySelectorAll(".point"), 
    null: document.getElementById("point"), 
    empty: document.querySelector(".nothing"),
  };
  
  console.log(DOMSelectors.box);
  console.log(DOMSelectors.button);
  console.log(DOMSelectors.text);
  console.log(DOMSelectors.points);
  console.log(DOMSelectors.points[0]);
  console.log(DOMSelectors.null);
  console.log(DOMSelectors.nothing);
