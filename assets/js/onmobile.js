$(function(){
  
  $('body').addClass(window.browserDetect().isMobile);
  
  if ( $('body').is('.mobile') ){
    
    $('h1').html(`<strong>Paperless<br>Corporate<br>Secretary</strong>
                your&nbsp;documents <strong>done&nbsp;right</strong>,
                <strong>online</strong>,<br>and&nbsp;<strong>on&nbsp;time</strong>`);
    
    $('#cover_1').css({
      'background-image' : 'url(assets/img/cover_1_mobile.png)'
    });
    
    $('.offer-mobile').append( $('.offer-price').remove().clone() );
    
  }
  
  
});