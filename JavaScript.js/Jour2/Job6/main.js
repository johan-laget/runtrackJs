const body = document.querySelector("body");

let konami = [];
let reponse = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let count = 0;

const checkKonami = () => {
  return reponse.toString() === konami.toString();
};

document.addEventListener("keydown", (event) => {
  konami.push(event.key);

  if (konami.length === reponse.length) {
    if (checkKonami()) {
      body.style.backgroundColor = "#020E64";
    } else {
    }
    konami = [];
    count = -1;
  }
  count++;
});