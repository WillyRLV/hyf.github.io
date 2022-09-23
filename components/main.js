/*MOSTRAR MENU*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  sectioncl = document.getElementById("main"),
  sectionc2 = document.getElementById("skills"),
  sectionc3 = document.getElementById("services"),
  sectionc4 = document.getElementById("about"),
  sectionc5 = document.getElementById("clientes"),
  sectionc6 = document.getElementById("contact"),
  sectionc7 = document.getElementById("footer");




  // mobile = document.getElementById("mobile-d");


if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }


if (sectioncl) {
  
  sectioncl.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu");
  })
}
if (sectionc2) {
  
  sectionc2.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu");
  })
}
if (sectionc3) {
  
  sectionc3.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu");
  })
}
if (sectionc4) {
  
  sectionc4.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu");
  })
}
if (sectionc5) {
  
  sectionc5.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu");
  })
}
if (sectionc6) {
  
  sectionc6.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu");
  })
}

if (sectionc7) {
  
  sectionc7.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu");
  })
}




  //? REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");
linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));


/*CHANGE BACKGOUND HEADER]============================*/

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 60) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);









/* scroll top*/

const showOnPx = 800;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  // console.log("Scroll Height: ", scrollContainer().scrollHeight);
  // console.log("Client Height: ", scrollContainer().clientHeight);

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);