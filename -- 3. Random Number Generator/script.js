const countPrinted = document.querySelector(".count");
const countGenerate = document.querySelector(".generate");

countGenerate.addEventListener("click", function () {
  randomNum = Math.floor(Math.random() * 10);
  countPrinted.innerHTML = randomNum;
});
