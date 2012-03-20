(function ($) {
 /**
   * Mobile magic for Open Academy Wireframe
   */
 Drupal.behaviors.openAcademyWireframeMobile = {
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

})(jQuery);
