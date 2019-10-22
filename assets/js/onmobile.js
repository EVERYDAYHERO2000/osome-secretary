$(function(){
  
  $('body').addClass(window.browserDetect().isMobile);
  
  if ( $('body').is('.mobile') ){
    
    
    $('.main-header').html(`<div class="header-inner"><h1>Paperless<br>Corporate&nbsp;Secretary</h1>
<p>Your&nbsp;documents done&nbsp;right, online,<br>and&nbsp;on&nbsp;time</p></div><div class="btn-group">
                  <a data-ga="cta_go-to-websome" data-ga-name="get-start_top" href="https://my.osome.com/?start=secretary&branch=SG" class="btn" id="pos_1">Contact us</a>
                </div>`);
    
    
    $('.offer-mobile').append( $('.offer-price').remove().clone() );
    
    
    var phone = $('.promo-phone-animation').parent().html(); 
    $('.phone').find('.promo').remove().clone();
    var $rate = $('.phone').find('.app-rate').remove().clone();
    
    
    
    $('#screen_1').find('.phone-mobile').append( parseSVG(phone) );
    
    $('#screen_2').find('.phone-mobile').append( parseSVG(phone) );
    
    $('#screen_3').find('.phone-mobile').append( parseSVG(phone) );
    
    $('#screen_4').find('.phone-mobile').append($rate);
    
    
    $('tspan').each(function(i,e){
      $(e).attr('font-size', 10)
    })
    
    
    $('.card').click(function(){
      
      var offset;
    
      if ( $(this).data('c') == 0 ){
        offset = 0;

      } else {
        offset = 300;

      } 



      $(this).parent().animate({
        scrollLeft : offset
      },300);
      
    });
    
    
    
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