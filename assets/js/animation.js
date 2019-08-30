$(function () {

  var $svg = $('.promo svg');

  animReset();

  function animReset() {
    $svg.find('#message_1, #message_2, #message_3, #message_4, #message_5, #popup').css({
      'opacity': '0',
      'transform-origin': 'center'
    })

    $svg.find('#message_1').css({
      'transform': 'translate(50px, 66px)',
    });

    $svg.find('#message_2').css({
      'transform': 'translate(231px, 205px)',
    });

    $svg.find('#message_3').css({
      'transform': 'translate(50px, 235px)',
    });

    $svg.find('#popup').css({
      'transform': 'translate(0, 139px) scale(.8)',
    });

    $svg.find('#sign').css({
      'stroke-dasharray': '1060 1060',
      'stroke-dashoffset': '1060'
    });

    $svg.find('#message_4').css({
      'transform': 'translate(173px, 383px)',
    });

    $svg.find('#message_5').css({
      'transform': 'translate(50px, 416px)',
    });

  }

  function startAnim() {

    if ($svg.is(':not(.animated-run)')) {

      var s = 0;
      
      setTimeout(function () {
        $svg.find('#message_1').css({
          'opacity': '1',
          'transform': 'translate(50px, 56px)',
          'transition': 'all .2s ease'
        });
        
        $svg.find('#message_1 .message').addClass('message-show');

      }, s += 100);

      setTimeout(function () {
        $svg.find('#message_2').css({
          'opacity': '1',
          'transform': 'translate(231px, 195px)',
          'transition': 'all .2s ease'
        });
        
        $svg.find('#message_2 .message').addClass('message-show');

      }, s += 500);

      setTimeout(function () {
        $svg.find('#message_3').css({
          'opacity': '1',
          'transform': 'translate(50px, 225px)',
          'transition': 'all .2s ease'
        });
        
        $svg.find('#message_3 .message').addClass('message-show');

      }, s += 800);

      setTimeout(function () {
        $svg.find('#popup').css({
          'opacity': '1',
          'transform': 'translate(0, 139px) scale(1)',
          'transition': 'all .2s ease'
        });

      }, s += 800);

      setTimeout(function () {
        $svg.find('#sign').css({
          'stroke-dashoffset': '0',
          'transition': 'all 2s ease'
        });

      }, s += 800);

      setTimeout(function () {
        $svg.find('#popup').css({
          'opacity': '0',
          'transform': 'translate(0px, 50px) scale(1)',
          'transition': 'all .4s ease'
        });

        $svg.find('#message_4').css({
          'opacity': '1',
          'transform': 'translate(173px, 373px)',
          'transition': 'all .3s .3s ease'
        });
        
        $svg.find('#message_4 .message').addClass('message-show');

      }, s += 2100);

      setTimeout(function () {
        $svg.find('#message_5').css({
          'opacity': '1',
          'transform': 'translate(50px, 406px)',
          'transition': 'all .3s ease'
        });
        
        $svg.find('#message_5 .message').addClass('message-show');

      }, s += 900);

    }

    $svg.addClass('animated-run');

  };
  
  function animation_1_hide(){
    $svg.find('#animation_1').css({
      'opacity' : 0,
      'transition' : 'all .2s ease'
    });
    
  }
  
  function animation_1_show(){
    $svg.find('#animation_1').css({
      'opacity' : 1,
      'transition' : 'all .2s ease'
    });
    
  }

  window.startAnim_1 = startAnim;
  window.animReset = animReset;
  
  window.animation_1_hide = animation_1_hide;
  window.animation_1_show = animation_1_show;

});