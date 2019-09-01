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
    
    
    var phone = $('.promo-phone-animation').parent().html(); 
    $('.phone').find('.promo').remove().clone();
    var $rate = $('.phone').find('.app-rate').remove().clone();
    
    
    
    $('#screen_1').find('.phone-mobile').append( parseSVG(phone) );
    
    $('#screen_2').find('.phone-mobile').append( parseSVG(phone) );
    
    $('#screen_3').find('.phone-mobile').append( parseSVG(phone) );
    
    
    $('tspan').each(function(i,e){
      $(e).attr('font-size', 10)
    })
    
    
    
    function parseSVG(s) {
        var div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
        div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + s + '</svg>';
        var frag = document.createDocumentFragment();
        while (div.firstChild.firstChild)
          frag.appendChild(div.firstChild.firstChild);
        return frag;
    }
    
    
    
  }
  
  
});