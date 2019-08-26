$(function(){
  $('.tab div').click(function(){
    var $forEl = $('[data-id='+ $(this).parent().data('for') +']');
    var $qa = $forEl.find('[data-id=' + $(this).data('qa') + ']');
    
    $forEl.find('.qa').removeClass('qa_selected');
    $qa.addClass('qa_selected');
    
    $(this).parent().find('div').removeClass('selected');
    $(this).addClass('selected');
  });
});