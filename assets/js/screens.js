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
    var top = $(window).outerHeight() / 4;
    var height = $(window).outerHeight() * 1.25;
    
    active = '';
    
    if ( $screen_1[0].getBoundingClientRect().top > top && $screen_1[0].getBoundingClientRect().top < height ){
      active = '#scrren_1';
    }
    
    if ( $screen_2[0].getBoundingClientRect().top > top && $screen_2[0].getBoundingClientRect().top < height ){
      active = '#scrren_2';
    }
    
    if ( $screen_3[0].getBoundingClientRect().top > top && $screen_3[0].getBoundingClientRect().top < height ){
      active = '#scrren_3';
    }
    
    if ( $screen_4[0].getBoundingClientRect().top > top && $screen_4[0].getBoundingClientRect().top < height ){
      active = '#scrren_4';
    }
    
    console.log(active)
    
  }
  
  
});