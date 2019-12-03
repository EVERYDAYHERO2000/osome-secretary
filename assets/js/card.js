$(function(){
  
  $('.card_active').mouseleave(function(){
    
    $(this).removeClass('card_active');
    
  });
  
  $('.card').mouseenter(function(){
    
    $('.card_active').removeClass('card_active');
    
  })
  
  
})