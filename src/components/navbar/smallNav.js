const smallNav = document.querySelector(".small-nav");
const smallNavTransparent = document.querySelector(".small-nav-transparent");
const showSmallNav = () => {
  smallNav.classList.remove("small-nav--hidden");
  smallNavTransparent.classList.remove("small-nav-transparent--hidden");
};

const hideSmallNav = () => {
  smallNav.classList.add("small-nav--hidden");
  smallNavTransparent.classList.add("small-nav-transparent--hidden");
  console.log("hide");
};

const showSideBar = document.querySelector(".fa-bars");
showSideBar.addEventListener("click", showSmallNav);

const hideSideBar = document.querySelector(".fa-xmark");
showSideBar.addEventListener("click", console.log("hide"));

document.onload = () => {
  console.log("test");
};
