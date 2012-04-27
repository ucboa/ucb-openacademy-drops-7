(function ($) {
  $(document).ready(function() {
    $('input[type=checkbox]').change(function(e) {
      $(this).parent('.form-item').toggleClass('form-item-checked', $(this).is(':checked'));
    });
    
    $('input[type=radio]').change(function(e) {
      $(this).parents('form').find('input[name=' + $(this).attr('name') + ']').parent('.form-item').removeClass('form-item-checked');
      $(this).parent('.form-item').toggleClass('form-item-checked', $(this).is(':checked'));
    });
    
    $('input[type=radio], input[type=checkbox]').each(function() {
      $(this).parent('.form-item').toggleClass('form-item-checked', $(this).is(':checked'));
    });
  }); //end ready
}(jQuery));