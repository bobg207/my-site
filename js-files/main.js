const burgerBtn = document.querySelector('#burger-btn');
const xmarkIcon = document.querySelector('#menu-open');
const barsIcon = document.querySelector('#menu-closed');
const navMenu = document.querySelector('.link-wrapper');
// const navLinks = document.querySelectorAll('.link');
// const links = document.querySelectorAll(".link");
// const linkMenu = document.querySelector(".link-wrapper");

let isOpen = false;

burgerBtn.addEventListener("click", () => {
  // alert('clicked')
  if (isOpen) {
    navMenu.style.display = "none";
    xmarkIcon.style.display = "none";
    barsIcon.style.display = "block";
    isOpen = false;
  } else {
    navMenu.style.display = "flex";
    barsIcon.style.display = "none";
    xmarkIcon.style.display = "block";
    isOpen = true;
  }  
});

function getChosenLink(anchor) {
  localStorage.setItem("page", anchor.textContent)
}