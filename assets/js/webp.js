$(function(){
  
  var hasWebP = false;
  (function() {
    var img = new Image();
    img.onload = function() {
      $('body').addClass('webp');
    };
    img.onerror = function() {
      hasWebP = false;
    };
    img.src = 'assets/img/bizfile.webp';
  })();
  
});