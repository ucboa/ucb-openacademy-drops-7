(function ($) {
 /**
   * Mobile magic for Open Academy Wireframe
   */
 Drupal.behaviors.openAcademyDefaultMobile = {
   attach: function (context, settings) {
     $('#search-mobile-controller').click(function() {
         $(this).toggleClass('active');
         $('#search').toggleClass('mobile-show-search');
         $('#menu-mobile-controller').toggleClass('mobile-show-border');
     });

     $('#menu-mobile-controller').click(function() {
         $(this).toggleClass('active');
         $('#navigation').toggleClass('mobile-show-menu');
     });
   }
 }
 
 Drupal.behaviors.openAcademyDefaultFocusFields = {
   attach: function (context, settings) {
    $('input[type="text"]').addClass("idle-field");
    $('input[type="text"]').focus(function() {
      $(this).removeClass("idle-field").addClass("focus-field");
    });
    $('input[type="text"]').blur(function() {
      $(this).removeClass("focus-field").addClass("idle-field");
    });
   }
 }

})(jQuery);