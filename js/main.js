/*------------------------------------
 *Author:Md.Abu Sayed
 *Template:Kholamela
 *Version:1.0
 *-------------------------------------
 */

jQuery(document).ready(function() {

  /*
   * ----------------------------------------------
   *-----------------Preloader---------------------
   * ----------------------------------------------
   */


  /*
   *---------------------------------------------
   *-------------OwlCarousel/Top Sell------------
   *---------------------------------------------
   */

  var sell = $("#top-sell");
  sell.owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    items: 1,
    loop: true
  });


  /*
   *---------------------------------------------
   *--------------OwlCarousel/Client-------------
   *---------------------------------------------
   */

  var client = $("#client");
  client.owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    items: 1,
    loop: true
  });


  /*
   *---------------------------------------------
   *-------------OwlCarousel/Product-------------
   *---------------------------------------------
   */

  var product = $("#product");
  product.owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    items: 1,
    loop: true
    // nav:true
  });


  /*
   *---------------------------------------------
   *----------------Elevate Zoom-----------------
   *---------------------------------------------
   */

    $("#pdt1").elevateZoom({
      constrainType:"height", 
      constrainSize:274, 
      zoomType: "inner", 
      containLensZoom: true, 
      gallery:'zoomControl', 
      cursor: 'crosshair', 
      galleryActiveClass: "active"
    }); 

//pass the images to Fancybox
$("#pdt1").bind("click", function(e) {  
  var ez =   $('#pdt1').data('elevateZoom'); 
  $.fancybox(ez.getGalleryList());
  return false;
});


/*
   * -------------------------------------------
   *-------------Operation Button---------------
   * -------------------------------------------
   */

   


  /*
   * ------------------------------------------------
   *--------------------Back To Top------------------
   * ------------------------------------------------
   */

  // var offset = 220;
  // var duration = 500;
  // jQuery(window).scroll(function() {
  //   if (jQuery(this).scrollTop() > offset) {
  //     jQuery('.back-to-top').fadeIn(duration);
  //   } else {
  //     jQuery('.back-to-top').fadeOut(duration);
  //   }
  // });

  // jQuery('.back-to-top').click(function(event) {
  //   event.preventDefault();
  //   jQuery('html, body').animate({
  //     scrollTop: 0
  //   }, duration);
  //   return false;
  // })

});

// })(jQuery);