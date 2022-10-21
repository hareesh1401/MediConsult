// HAMBURGER SECTION

$(document).ready(function(){
    $("#searchHeaderBtn").on("click",()=>{
        $(".headerSearchWrapper").toggleClass("active")
    })
    $("#hamburger").on("click",()=>{
        $(".Navigation").addClass("active")
        $(".overlay").addClass("active")
        $("body").css({"height":"100vh","overflow":"hidden"})
    })
    $(".navCloseBtn").on("click",()=>{
        $(".Navigation").removeClass("active")
        $(".overlay").removeClass("active")
        $("body").css({"height":"initial","overflow":"visible"})
    })
    $(".overlay").on("click",()=>{
        $(".Navigation").removeClass("active")
        $(".overlay").removeClass("active")
        $("body").css({"height":"initial","overflow":"visible"})
    })
})
// FIXED NAVIGATION

document.onreadystatechange = function() {
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.header');
    window.addEventListener('scroll', function(e) {
      lastScrollPosition = window.scrollY;
      
      if (lastScrollPosition > 100)
        navbar.classList.add('navbar-light');
      else
        navbar.classList.remove('navbar-light');
    });
  }
  
//   SELECT BOX
$(document).ready(function () {
    //Open Drop Down
    $(".custom-select").click(function (e) {
      e.preventDefault();
  
      if ($(".custom-select-wrapper").hasClass("open-dropdown")) {
        $(".custom-select-wrapper").removeClass("open-dropdown");
        $(this).parent().parent().toggleClass("open-dropdown");
      } else {
        $(this).parent().parent().toggleClass("open-dropdown");
      }
    });
  
    // On click get Current Selected tag Value
  
    $("ul li span").click(function (e) {
      if ($(".custom-select-wrapper").hasClass("open-dropdown")) {
        var current_value = $(this).text();
        console.log(current_value);
        $(".open-dropdown .custom-select").val(current_value);
        $(".custom-select-wrapper").removeClass("open-dropdown");
      }
    });
  
    // close when click on Body
    $("html").click(function (event) {
      if ($(event.target).closest(".custom-select").length === 0) {
        $(".custom-select-wrapper").removeClass("open-dropdown");
      }
    });
  });

  // DATE 
  $( "#datepicker" ).datepicker();

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



// AMINATE ON SCROLL
AOS.init();


