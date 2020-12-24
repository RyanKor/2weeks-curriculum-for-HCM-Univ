const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
console.log(imgs);

imgs.forEach(function (img) {
  img.addEventListener("click", imgClick);
});

const opacity = 0.4;

imgs[0].style.opacity = opacity;

function imgClick(e) {
  imgs.forEach(function (img) {
    return (img.style.opacity = 1);
  });
  current.src = e.target.src;
  current.classList.add("fade-in");
  setTimeout(function () {
    current.classList.remove("fade-in");
  }, 0.5);
  e.target.style.opacity = opacity;
  console.log(e.target.src);
}
