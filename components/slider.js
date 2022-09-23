// const slider = document.querySelector("#slider");
// let sliderSection = document.querySelectorAll(".slider__section");
// let sliderSectionLast = sliderSection[sliderSection.length -1];

// const btnLeft = document.querySelector("#btn-left");
// const btnRight = document.querySelector("#btn-right");

// slider.insertAdjacentElement('afterbegin', sliderSectionLast);


/*link indicator*/

const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav")
const navList =document.querySelectorAll(".nav__item")

const options = {
   thresshold: "0.6",
};

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((e)=>{

        if (e.isIntersecting) {
            console.log(e.target.id);
           //section indicator
           navList.forEach((link) =>{
//para remover
            link.classList.remove("active");
            if (e.target.id === link.dataset.nav) {
                link.classList.add("active");  
            }
           })

        }
       
    });
},options);

sections.forEach((section)=>{
    observer.observe(section);
})