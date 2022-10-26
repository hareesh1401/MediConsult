  // DATE 

$( "#datepicker").datepicker();


// SWIPER JS SPECIALISTS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
  },
});

// OWL CAROSUAL TESTIMONIAL
var owl = $('.owl-carousel');

owl.owlCarousel({
    items:2,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive : {
      0 : {
          items:1,
          },
      480 : {
        items:2,
          },
      768 : {
        items:2,
      }
  }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})