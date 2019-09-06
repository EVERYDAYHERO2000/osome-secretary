$(function(){
  var $sc = $('#screen-control');
  var $screens = $('#screens').find('.s-screens');
  
  
  $sc.append(function(){
    
    var result = '';
    
    $.each( $screens, function(i,e){
      
      var id = $(e).attr('id');
      
      result += (id) ? `<div class="s-control__item" data-screen="#${id}"></div>` : '';
      
    });
    
    return result;  
      
  });
  
  $('.s-control__item').click(function(){
    var $this = $(this);
    $('html, body').animate({
        scrollTop: $( $this.data('screen') ).offset().top
    }, 500);
  });
  
  
});