const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// For Swipper

const swiper = new Swiper('.swiper', {
  
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


// Loader

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})
