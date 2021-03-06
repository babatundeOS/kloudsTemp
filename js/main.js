$(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(350).css({'overflow':'visible'});
    })

$(document).ready(function() {
 $('body').scrollspy({ target: '.main-nav' })
  $("#bg-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
      autoPlay: 5000,
      paginationSpeed : 100,
      singleItem:true,
      mouseDrag: false,
      transitionStyle : "fade"

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });

  $("#testimonial-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
      pagination : true,
      paginationSpeed : 100,
      singleItem:true,
      mouseDrag: false,
      transitionStyle : "goDown"

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });

    $('.more-jobs a').click(function(e){
      e.preventDefault();
      var $this = $(this);
      $this.toggleClass('more-jobs a');
      if($this.hasClass('more-jobs a')){
        $this.text('View less jobs');
      } else {
        $this.text('View more jobs');
      }
    });

    $('.more-jobs a').click(function(){
      $('.table tr.hide-jobs').toggle();
    });



})

// Initializing WOW.JS

 new WOW().init();

 // scroll

 $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Remove 'active' class from all links
            $(this).closest('.navbar').find('a.active').removeClass('active');
            // Add 'active' class to the current link
            $(this).addClass('active');
            // And animation
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 0)
                }, 900);
		var bgColor = elem.data('background');

          $('body').css('background-color', bgColor);

                return false;
            }
        }
    });
});

/**
 * This was built using the scrollie jQuery Plugin
 * https://github.com/Funsella/jquery-scrollie
 */


$( window ).ready(function() {

    var wHeight = $(window).height();

    $('.slide')
      .height(wHeight)
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {

          var bgColor = elem.data('background');

          $('body').css('background-color', bgColor);

        }
      });

  });
