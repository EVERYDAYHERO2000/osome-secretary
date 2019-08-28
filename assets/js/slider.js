$(function(){
  
  var slides = $('#slider').find('.slider__s').length;
  var active = 0;
  
  var $prev = $('#slider').find('.slider__c-prev');
  var $next = $('#slider').find('.slider__c-next');
  var $container = $('#slider').find('.slider__inner');
  
  slide();
  
  $('#slider').find('.slider__c').click(function(){
    slide( $(this) );
  });
  
  function slide(control){
    
    if (control){
       
      if (control.is('.slider__c-prev') && active > 0){
        active--;
      }

      if (control.is('.slider__c-next') && active < slides-1){
        active++;
      }
    }
    
    $prev.removeClass('disabled');
    $next.removeClass('disabled');
    
    if ( active == 0 ){
      $prev.addClass('disabled');
    } 
    
    if ( active == slides-1 ){
      $next.addClass('disabled');
    } 
    
    $container.css({
      'margin-left' : '-' + (active * 100 ) + 'vw'
    });
    
  }
});