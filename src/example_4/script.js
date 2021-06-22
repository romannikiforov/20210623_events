const button = document.querySelector("button");
const child = document.querySelector(".child");

if (button === null || child === null) {
  throw Error("unable to find button");
}

// todo
let count = 0;
function addButton() {
  // todo
}

button.addEventListener("click", function onClick(event) {
  addButton();
});
