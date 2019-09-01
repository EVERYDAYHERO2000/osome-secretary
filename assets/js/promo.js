$(function(){
  
  detectPromo();
  
  $(document).scroll(function(){
    
    detectPromo();
    
  });
                     
  function detectPromo(){
    
    if ( $('.promo')[0].getBoundingClientRect().top < $(window).outerHeight() ){
      $('.promo').addClass('promo_visible');
      
      var $svg = $('.promo-phone-animation'); 
      
      window.startAnim_1($svg);
      
    } else {
      $('.promo').removeClass('promo_visible');
      
    }
     
  }                   
  
});