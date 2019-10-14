$(function(){
  $('.tab div').click(function(){
    var $forEl = $('[data-id='+ $(this).parent().data('for') +']');
    var $qa = $forEl.find('[data-id=' + $(this).data('qa') + ']');
    
    $forEl.find('.qa').removeClass('qa_selected');
    $qa.addClass('qa_selected');
    
    $(this).parent().find('div').removeClass('selected');
    $(this).addClass('selected');
    
    
    var event = {
				event: 'cta_go-to-switch-q&a',
				event_action: 'click',
				event_category: 'cta',
				event_label: $(this).text()
			};
      
		window.dataLayer.push(event); 
    
    
    var offset;
    
    if ( $(this).data('qa') == 1 ){
      offset = 0;
      
    } else if ( $(this).data('qa') == 2 ){
      offset = 0;
      
    } else if ( $(this).data('qa') == 3 ){
      offset = 500;
      
    }
    
    
    
    $(this).parent().animate({
      scrollLeft : offset
    },300)
    
  });
});