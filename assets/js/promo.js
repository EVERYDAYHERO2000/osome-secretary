$(function(){
  
  detectPromo();
  
  $(document).scroll(function(){
    
    detectPromo();
    
    
  });
                     
  function detectPromo(){
    if ( $('.promo').length ){
      if ( $('.promo')[0].getBoundingClientRect().top < $(window).outerHeight() ){
        $('.promo').addClass('promo_visible');

        var $svg = $('.promo-phone-animation'); 

        window.startAnim_1($svg);

      } else {
        $('.promo').removeClass('promo_visible');

      }
      
    }
    if ( $('#cover_3').length){
    if ( $('#cover_3')[0].getBoundingClientRect().top < $(window).outerHeight() ){
      $('#cover_3').addClass('cover_3_visible');
      
    } else {
      $('#cover_3').removeClass('cover_3_visible');
      
      
    }
    }
     
  }                   
  
});