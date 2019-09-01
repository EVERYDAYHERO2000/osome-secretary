$(function () {

  var $svg = $('.promo-phone-animation');

  animReset($svg);

  function animReset($svg) {
    $svg.find('#message_1, #message_2, #message_3, #message_4, #message_5, #popup, #message_6, #message_7, #message_8, #message_9, #message_10, #message_11, #message_12, #message_13, #message_14').css({
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
    
    $svg.find('#message_6').css({
      'transform': 'translate(46px, 10px)',
    });
    
    $svg.find('#message_7').css({
      'transform': 'translate(0px, 54px)',
    });
    
    $svg.find('#message_8').css({
      'transform': 'translate(178px, 164px)',
    });
    
    $svg.find('#message_9').css({
      'transform': 'translate(0, 195px)',
    });
    
    $svg.find('#awesome, #leonard, #felix').css({
      'stroke-dasharray': '1060 1060',
      'stroke-dashoffset': '1060'
    });
    
    $svg.find('#message_10').css({
      'transform': 'translate(178px, 490px)',
    });
    
    $svg.find('#message_11').css({
      'transform': 'translate(61px, 10px)',
    });
    
    $svg.find('#message_12').css({
      'transform': 'translate(0, 60px)',
    });
    
    $svg.find('#message_13').css({
      'transform': 'translate(38px, 149px)',
    });
    
    $svg.find('#message_14').css({
      'transform': 'translate(157px, 430px)',
    });

  }

  
  function startAnim_1($svg) {

   
    
    if ($svg.find('#animation_1').is(':not(.animated-run)')) {

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

    $svg.find('#animation_1').addClass('animated-run');

  };
  
  function startAnim_2($svg) {

    if ($svg.find('#animation_2').is(':not(.animated-run)')) {

      var s = 0;
      
      setTimeout(function () {
        $svg.find('#message_6').css({
          'opacity': '1',
          'transform': 'translate(46px, 0)',
          'transition': 'all .2s ease'
        });
        
        $svg.find('#message_6 .message').addClass('message-show');
        
      }, s += 100);
      
      setTimeout(function () {
        $svg.find('#message_7').css({
          'opacity': '1',
          'transform': 'translate(0, 44px)',
          'transition': 'all .2s ease'
        });
        
        $svg.find('#message_7 .message').addClass('message-show');
        
      }, s += 800);
      
      setTimeout(function () {
        $svg.find('#message_8').css({
          'opacity': '1',
          'transform': 'translate(178px, 154px)',
          'transition': 'all .2s ease'
        });
        
        $svg.find('#message_8 .message').addClass('message-show');
        
      }, s += 800);
      
      setTimeout(function () {
        $svg.find('#message_9').css({
          'opacity': '1',
          'transform': 'translate(0, 185px)',
          'transition': 'all .2s ease'
        });
        
        $svg.find('#message_9 .message').addClass('message-show');
        
      }, s += 800);
      
      setTimeout(function () {
        $svg.find('#awesome').css({
          'stroke-dashoffset': '0',
          'transition': 'all 2s ease'
        });
        
      }, s += 300);
      
      setTimeout(function () {
        $svg.find('#felix').css({
          'stroke-dashoffset': '0',
          'transition': 'all 2s ease'
        });
        
      }, s += 500);
      
      setTimeout(function () {
        $svg.find('#leonard').css({
          'stroke-dashoffset': '0',
          'transition': 'all 2s ease'
        });
        
      }, s += 300);
      
      
      setTimeout(function () {
        
        $svg.find('#message_6').css({
          'opacity': '0',
        });
        
        $svg.find('#scroll_1').css({
          'transform': 'translate(0, -50px)', 
          'transition': 'all .2s ease'
        });
        
      }, s += 1200);
      
      
      setTimeout(function () {
        
        $svg.find('#message_10').css({
          'opacity': '1',
          'transform': 'translate(178px, 480px)',
          'transition': 'all .2s ease'
        });
        
        $svg.find('#message_10 .message').addClass('message-show');
        
      }, s += 200);
      
      
      
    }
    
    $svg.find('#animation_2').addClass('animated-run');
    
  }
  
  function startAnim_3($svg) {

    if ($svg.find('#animation_3').is(':not(.animated-run)')) {

      var s = 0;
      
      setTimeout(function () {
        $svg.find('#message_11').css({
          'opacity': '1',
          'transform': 'translate(61px, 0)',
          'transition': 'all .2s ease'
        });
        
      }, s += 100);
      
      setTimeout(function () {
        $svg.find('#message_12').css({
          'opacity': '1',
          'transform': 'translate(0, 50px)',
          'transition': 'all .2s ease'
        });
        
      }, s += 500);
      
      setTimeout(function () {
        $svg.find('#message_13').css({
          'opacity': '1',
          'transform': 'translate(38px, 139px)',
          'transition': 'all .2s ease'
        });
        
      }, s += 500);
      
      setTimeout(function () {
        $svg.find('#message_14').css({
          'opacity': '1',
          'transform': 'translate(157px, 420px)',
          'transition': 'all .2s ease'
        });
        
      }, s += 1000);
      
    }
    
  }
  
  function animation_hide(i, $svg){
    $svg.find('#animation_'+i).css({
      'opacity' : 0,
      'transition' : 'all .2s ease'
    });
    
  }
  
  function animation_show(i, $svg){
    
    $svg.find('#animation_'+i).css({
      'opacity' : 1,
      'transition' : 'all .2s ease'
    });
  }

  window.startAnim_1 = startAnim_1;
  window.startAnim_2 = startAnim_2;
  window.startAnim_3 = startAnim_3;
  
  window.animation_hide = animation_hide;
  window.animation_show = animation_show;

});