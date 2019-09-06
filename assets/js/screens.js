$(function(){
  
  var $screen_1 = $('#screen_1');
  var $screen_2 = $('#screen_2');
  var $screen_3 = $('#screen_3');
  var $screen_4 = $('#screen_4');
  
  var active = '';
  
  position();
  
  $(window).scroll(function(){
    position();
  });
  
  function position(){
    var e = $screen_1[0].getBoundingClientRect();
    var height = ( $('body').is('.mobile') ) ? -100 : $(window).outerHeight();
    
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
    
    var $svg_1, $svg_2, $svg_3;
    
    if ( $('body').is('.mobile') ){
      
      $svg_1 = $($('.promo-phone-animation')[0])
      $svg_2 = $($('.promo-phone-animation')[1])
      $svg_3 = $($('.promo-phone-animation')[2])
      
      
    } else {
      
       $svg_1 = $svg_2 = $svg_3 = $($('.promo-phone-animation'))
      
    }
    
    
    
    if ( active == '#screen_1' ){
      window.startAnim_1($svg_1);
      window.animation_show(1, $svg_1);

    } else {
      window.animation_hide(1, $svg_1);

    }
    
    if ( active == '#screen_2' ){
      window.startAnim_2($svg_2);
      window.animation_show(2, $svg_2);

    } else {
      window.animation_hide(2, $svg_2);

    }
    
    if ( active == '#screen_3' || active == '#screen_4' ){
      window.startAnim_3($svg_3);
      window.animation_show(3, $svg_3);
      

    } else {
      window.animation_hide(3, $svg_3);
      
    }
      
    console.log(active);
    
    $('.s-control__item').removeClass('s-control__item_active');
    $(`.s-control__item[data-screen="${active}"]`).addClass('s-control__item_active');
    
    
  }
  
  
});