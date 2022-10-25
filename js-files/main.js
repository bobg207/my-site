const burgerBtn = document.querySelector('#burger-btn');
const xmarkIcon = document.querySelector('#menu-open');
const barsIcon = document.querySelector('#menu-closed');
const navMenu = document.querySelector('.link-wrapper');
const navLinks = document.querySelectorAll('.link');
const links = document.querySelectorAll(".link");
const linkMenu = document.querySelector(".link-wrapper");

let isOpen = false;

(function() {
  const url = window.location.href;
  (".link-wrapper a").forEach(function() {

    if (url == this.href) {
      alert(this.href)
    //   link.style.textDecoration = 'underline'}
    // else {
    //   link.style.textDecoration = 'none'};
    }
  });
})

burgerBtn.addEventListener("click", () => {
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