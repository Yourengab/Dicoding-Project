// Tempat variabel
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav ul");
const header = document.querySelector("header");
const input = document.querySelector("input");
const btn = document.querySelector(".contactBtn");
const up = document.querySelector(".top");
// Menampikan navbar pada mobile
hamburger.addEventListener("click", function () {
  nav.classList.toggle("show");
});

// Manambahkan background pada navbar saat window di scroll
window.onscroll = function () {
  if (window.pageYOffset) {
    header.classList.add("color");
    nav.classList.add("bg");
    up.classList.add("show");
  } else {
    header.classList.remove("color");
    nav.classList.remove("bg");
    up.classList.remove("show");
  }
};
