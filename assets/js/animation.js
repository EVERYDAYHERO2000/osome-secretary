$(function () {

  var $svg = $('.promo svg');

  animReset();
  
  function animReset() {
    $svg.find('#message_1, #message_2, #message_3, #message_4, #message_5, #popup').css({
      'opacity': '0',
      'transform-origin': 'center'
    })

    $('#message_1').css({
      'transform': 'translate(50px, 66px)',
    });

    $('#message_2').css({
      'transform': 'translate(231px, 205px)',
    });

    $('#message_3').css({
      'transform': 'translate(50px, 235px)',
    });

    $('#popup').css({
      'transform': 'translate(0, 139px) scale(.8)',
    });

    $('#sign').css({
      'stroke-dasharray': '1060 1060',
      'stroke-dashoffset': '1060'
    });

    $('#message_4').css({
      'transform': 'translate(173px, 383px)',
    });

    $('#message_5').css({
      'transform': 'translate(50px, 416px)',
    });
    
    window.startAnim_1_check = false;
    
  }

  function startAnim() {

    setTimeout(function () {
      $('#message_1').css({
        'opacity': '1',
        'transform': 'translate(50px, 56px)',
        'transition': 'all .2s ease'
      });

      setTimeout(function () {
        $('#message_2').css({
          'opacity': '1',
          'transform': 'translate(231px, 195px)',
          'transition': 'all .2s ease'
        });

        setTimeout(function () {
          $('#message_3').css({
            'opacity': '1',
            'transform': 'translate(50px, 225px)',
            'transition': 'all .2s ease'
          });

          setTimeout(function () {
            $('#popup').css({
              'opacity': '1',
              'transform': 'translate(0, 139px) scale(1)',
              'transition': 'all .2s ease'
            });

            setTimeout(function () {
              $('#sign').css({
                'stroke-dashoffset': '0',
                'transition': 'all 2s ease'
              });

              setTimeout(function () {
                $('#popup').css({
                  'opacity': '0',
                  'transform': 'translate(0px, 50px) scale(.8)',
                });

                $('#message_4').css({
                  'opacity': '1',
                  'transform': 'translate(173px, 373px)',
                  'transition': 'all .3s ease'
                });

                setTimeout(function () {
                  $('#message_5').css({
                    'opacity': '1',
                    'transform': 'translate(50px, 406px)',
                    'transition': 'all .3s ease'
                  });

                  


                }, 800)
                
              }, 2100)

            }, 1200)

          }, 800)

        }, 800)

      }, 500)

    }, 1000)

    window.startAnim_1_check = true;

  };

  window.startAnim_1 = startAnim;
  window.animReset = animReset;

});