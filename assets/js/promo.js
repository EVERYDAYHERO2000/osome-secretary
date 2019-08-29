$(function(){
  
  detectPromo();
  
  $(document).scroll(function(){
    
    detectPromo();
    
  });
                     
  function detectPromo(){
    
    if ( $('.promo')[0].getBoundingClientRect().top < $(window).outerHeight() ){
      $('.promo').addClass('promo_visible');
      
      window.startAnim_1();
      
    } else {
      $('.promo').removeClass('promo_visible');
      
    }
     
  }                   
  
});