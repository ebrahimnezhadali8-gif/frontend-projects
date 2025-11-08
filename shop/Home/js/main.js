let slideIndex = 1;
let remainigTime = 70000;

function setTime() {
  if (remainigTime == 0) return;
  let h = Math.floor(remainigTime / 3600);
  let m = Math.floor((remainigTime % 3600) / 60);
  let s = (remainigTime % 3600) % 60;
  document.querySelector("#hours").innerHTML = h;
  document.querySelector("#minutes").innerHTML = m;
  document.querySelector("#seconds").innerHTML = s;
}

setInterval(() => {
  remainigTime -= 1;
  setTime();
}, 1000);

function setSlide(input, index) {
  slideIndex = index;
  let item = document.querySelector(`#${input}`);
  let slide = [...document.querySelector(".slides").children];
  slide.forEach((element) => {
    element.classList.remove(`active`);
  });
  item.classList.add(`active`);
}

setInterval(() => {
  slideIndex += 1;
  if (slideIndex == 4) {
    slideIndex = 1;
  }
  setSlide(`slide${slideIndex}`, slideIndex);
}, 4000);
