$(function(){
  
  detectBtnPos();
  
  $(document).scroll(function(){
    
    detectBtnPos();
    
  });
  
  function detectBtnPos(){
    var $pos_1 = $('#pos_1');
    var $pos_2 = $('#pos_2'); 
    var $pos_3 = $('#pos_3');
    var $pos_4 = $('#pos_4');
    var $pos_3_contain_1 = $('#pos_3_contain_1');
    var $pos_3_contain_2 = $('#pos_3_contain_2');
    
    
    if ( $pos_2[0].getBoundingClientRect().top < $(window).outerHeight() ){
      $pos_1.addClass('btn_hidden');
      $pos_2.removeClass('btn_hidden');
      
    } else {
      $pos_1.removeClass('btn_hidden');
      $pos_2.addClass('btn_hidden');
      
    }
    
    if ( $pos_3[0].getBoundingClientRect().top < $(window).outerHeight() + 50  ) {
      
       
       if ( !$pos_3.is('.btn_fixed') ) {
         $pos_4.addClass('btn_hidden-cut').removeClass('btn_visible-cut');
         $pos_3.addClass('btn_fixed');
       }
      
      if ( $pos_3[0].getBoundingClientRect().top > $pos_3_contain_1[0].getBoundingClientRect().top &&
           $pos_3[0].getBoundingClientRect().top < $pos_3_contain_2[0].getBoundingClientRect().top){ 
      
        
        
      } else {
        
        if ( $pos_3.is('.btn_fixed') ) {
          $pos_4.removeClass('btn_hidden-cut').addClass('btn_visible-cut');
          $pos_3.removeClass('btn_fixed');
        }
      }
      
    } else {
       
       if ( $pos_3.is('.btn_fixed') ) {
         $pos_4.removeClass('btn_hidden-cut').addClass('btn_visible-cut');
         $pos_3.removeClass('btn_fixed');
       }
    }
    

  }
  
});