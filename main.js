

var firstSwiper = new Swiper ('#first', {
  direction: 'vertical',
  effect: 'slide',
  slidesPerView: 1,
  loop: true,
  autoplay: {
      delay: 2000,
  },
})


document.addEventListener('DOMContentLoaded',function(){
  document.getElementById("menuButton").addEventListener("click",function(){
    this.classList.toggle("active");
    document.getElementById("mask").classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    document.querySelector("html").classList.toggle("none");
    document.querySelector("body").classList.toggle("none");
  })

  document.getElementById("mask").addEventListener("click", function(){
    this.classList.toggle("active");
    document.getElementById("menuButton").classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    document.querySelector("html").classList.toggle("none");
    document.querySelector("body").classList.toggle("none");

  })


  document.getElementById("list").addEventListener("click" ,function(){
    document.getElementById("menuButton").classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("mask").classList.toggle("active");
    document.querySelector("html").classList.toggle("none");
    document.querySelector("body").classList.toggle("none");
  })


  const targetElement = document.querySelectorAll(".person");
  document.addEventListener("scroll", function(){
    for (let i = 0; i<targetElement.length; i++){
      const getElementDistance =targetElement[i].
      getBoundingClientRect().top + targetElement[i].clientHeight * .4
      if(window.innerHeight > getElementDistance){
        targetElement[i].classList.add("show");
      }
    }
  })

})


$(function (){
  $('.keyword').on('click',function (){
    $(this).next().slideToggle();
  });
});



$(window).on('load scroll', function(){
  if ($(window).scrollTop() > 150) {
    $('.is_flow').fadeIn(200);
   } else {
    $('.is_flow').fadeOut(100);
   }
});