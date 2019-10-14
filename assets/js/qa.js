$(function(){
  
  $('.qa__title').click(function(){
    $(this).parent().toggleClass('qa__i_visible');
    
    if ( $(this).parent().is('.qa__i_visible') ){
      
      
			var event = {
				event: 'cta_go-to-q&a',
				event_action: 'click',
				event_category: 'cta',
				event_label: $(this).text()
			};
      
			window.dataLayer.push(event); 
      
    }
    
    
    
  });
  
  
  
});