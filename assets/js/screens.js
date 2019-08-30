$(function(){
  
  var $screen_1 = $('#scrren_1');
  var $screen_2 = $('#scrren_2');
  var $screen_3 = $('#scrren_3');
  var $screen_4 = $('#scrren_4');
  
  var active = '';
  
  position();
  
  $(window).scroll(function(){
    position();
  });
  
  function position(){
    
    var e = $screen_1[0].getBoundingClientRect();
    var top = 0;
    var height = $(window).outerHeight();
    
    active = '';
    
    if ( $screen_1[0].getBoundingClientRect().top < height ){
      active = '#screen_1';
    }
    
    if ( $screen_2[0].getBoundingClientRect().top * 2 < height ){
      active = '#screen_2';
    }
    
    if ( $screen_3[0].getBoundingClientRect().top * 2 < height ){
      active = '#screen_3';
    }
    
    if ( $screen_4[0].getBoundingClientRect().top * 2 < height ){
      active = '#screen_4';
    }
    
    
    if ( active == '#screen_1' ){
      window.animation_1_show();

    } else {
      window.animation_1_hide();

    }
    
    console.log(active)
    
  }
  
  
});