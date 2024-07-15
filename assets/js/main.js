$('#letest-news').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
$('#gallery').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:4,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
});
$('#testimonial').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
});

var $backToTop = $(".back-to-top");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 300) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});




  //Initialize your slider in your script file

  var owl = $('#letest-new');
  owl.owlCarousel({
    autoplay: true,
    items: 1,
    nav: true,
    loop: true,
    autoplayHoverPause: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
  });

  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 4,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  });

  $('.grid').isotope({
    itemSelector: '.grid-item',
  });
  
  // filter items on button click
  $('.filter-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
  });

    // add all to same gallery
    $(".content a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $(".content a").each(function(){
      $(this).attr("data-caption", $(this).find("img").attr("alt"));
      $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
    $(".content a").fancybox();