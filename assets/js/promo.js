$(function(){
  
  detectPromo();
  
  $(document).scroll(function(){
    
    detectPromo();
    
  });
                     
  function detectPromo(){
    
    if ( $('.promo')[0].getBoundingClientRect().top < $(window).outerHeight() ){
      $('.promo').addClass('promo_visible');
      
      if (!window.startAnim_1_check) window.startAnim_1();
      
    } else {
      $('.promo').removeClass('promo_visible');
      
    }
    
    
    
  }                   
  
});