$(function(){
  
  
  $('.btn').click(function(){

    if (window.dataLayer){
      window.dataLayer.push({
        event : 'cta_go-to-websome',
        event_label: 'switch_secretary',
        event_action: 'click',
        event_category: 'cta'
      })
    }
  });
  
})