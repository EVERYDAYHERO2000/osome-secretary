$(function(){
  
  $('.btn').click(function () {
		var event_type = $(this).data('ga');
		var event_name = $(this).data('ga-name');
    var event_title = $(this).text();
    var event_to_url = $(this).attr('href');
  
		if (event_type) {
			var event = {
				event: event_type,
				event_action: 'click',
				event_category: 'cta',
        event_title: event_title,
        event_to_url : event_to_url,
				event_label: event_name
			};
      
			window.dataLayer.push(event); 
		}
});
  
})