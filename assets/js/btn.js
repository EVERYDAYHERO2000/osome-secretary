$(function(){
  
  detectBtnPos();
  
  $(document).scroll(function(){
    
    detectBtnPos();
    
  });
  
  function detectBtnPos(){
    var $pos_1 = $('#pos_1');
    var $pos_2 = $('#pos_2'); 
    
    
    if ( $pos_2[0].getBoundingClientRect().top < $(window).outerHeight() ){
      $pos_1.addClass('btn_hidden');
      $pos_2.removeClass('btn_hidden');
      
    } else {
      $pos_1.removeClass('btn_hidden');
      $pos_2.addClass('btn_hidden');
      
    }
  }
  
});