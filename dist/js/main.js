"use strict";$(function(){$(function(){var s,e=$(".promo-phone-animation");(s=e).find("#message_1, #message_2, #message_3, #message_4, #message_5, #popup, #message_6, #message_7, #message_8, #message_9, #message_10, #message_11, #message_12, #message_13, #message_14").css({opacity:"0","transform-origin":"center"}),s.find("#message_1").css({transform:"translate(50px, 66px)"}),s.find("#message_2").css({transform:"translate(231px, 205px)"}),s.find("#message_3").css({transform:"translate(50px, 235px)"}),s.find("#popup").css({transform:"translate(0, 139px) scale(.8)"}),s.find("#sign").css({"stroke-dasharray":"1060 1060","stroke-dashoffset":"1060"}),s.find("#message_4").css({transform:"translate(173px, 383px)"}),s.find("#message_5").css({transform:"translate(50px, 416px)"}),s.find("#message_6").css({transform:"translate(46px, 10px)"}),s.find("#message_7").css({transform:"translate(0px, 54px)"}),s.find("#message_8").css({transform:"translate(178px, 164px)"}),s.find("#message_9").css({transform:"translate(0, 195px)"}),s.find("#awesome, #leonard, #felix").css({"stroke-dasharray":"1060 1060","stroke-dashoffset":"1060"}),s.find("#message_10").css({transform:"translate(178px, 490px)"}),s.find("#message_11").css({transform:"translate(61px, 10px)"}),s.find("#message_12").css({transform:"translate(0, 60px)"}),s.find("#message_13").css({transform:"translate(38px, 149px)"}),s.find("#message_14").css({transform:"translate(157px, 430px)"}),window.startAnim_1=function(s){if(s.find("#animation_1").is(":not(.animated-run)")){var e=0;setTimeout(function(){s.find("#message_1").css({opacity:"1",transform:"translate(50px, 56px)",transition:"all .2s ease"}),s.find("#message_1 .message").addClass("message-show")},e+=100),setTimeout(function(){s.find("#message_2").css({opacity:"1",transform:"translate(231px, 195px)",transition:"all .2s ease"}),s.find("#message_2 .message").addClass("message-show")},e+=500),setTimeout(function(){s.find("#message_3").css({opacity:"1",transform:"translate(50px, 225px)",transition:"all .2s ease"}),s.find("#message_3 .message").addClass("message-show")},e+=800),setTimeout(function(){s.find("#popup").css({opacity:"1",transform:"translate(0, 139px) scale(1)",transition:"all .2s ease"})},e+=800),setTimeout(function(){s.find("#sign").css({"stroke-dashoffset":"0",transition:"all 2s ease"})},e+=800),setTimeout(function(){s.find("#popup").css({opacity:"0",transform:"translate(0px, 50px) scale(1)",transition:"all .4s ease"}),s.find("#message_4").css({opacity:"1",transform:"translate(173px, 373px)",transition:"all .3s .3s ease"}),s.find("#message_4 .message").addClass("message-show")},e+=2100),setTimeout(function(){s.find("#message_5").css({opacity:"1",transform:"translate(50px, 406px)",transition:"all .3s ease"}),s.find("#message_5 .message").addClass("message-show")},e+=900)}s.find("#animation_1").addClass("animated-run")},window.startAnim_2=function(s){if(s.find("#animation_2").is(":not(.animated-run)")){var e=0;setTimeout(function(){s.find("#message_6").css({opacity:"1",transform:"translate(46px, 0)",transition:"all .2s ease"}),s.find("#message_6 .message").addClass("message-show")},e+=100),setTimeout(function(){s.find("#message_7").css({opacity:"1",transform:"translate(0, 44px)",transition:"all .2s ease"}),s.find("#message_7 .message").addClass("message-show")},e+=800),setTimeout(function(){s.find("#message_8").css({opacity:"1",transform:"translate(178px, 154px)",transition:"all .2s ease"}),s.find("#message_8 .message").addClass("message-show")},e+=800),setTimeout(function(){s.find("#message_9").css({opacity:"1",transform:"translate(0, 185px)",transition:"all .2s ease"}),s.find("#message_9 .message").addClass("message-show")},e+=800),setTimeout(function(){s.find("#awesome").css({"stroke-dashoffset":"0",transition:"all 2s ease"})},e+=300),setTimeout(function(){s.find("#felix").css({"stroke-dashoffset":"0",transition:"all 2s ease"})},e+=500),setTimeout(function(){s.find("#leonard").css({"stroke-dashoffset":"0",transition:"all 2s ease"})},e+=300),setTimeout(function(){s.find("#message_6").css({opacity:"0"}),s.find("#scroll_1").css({transform:"translate(0, -50px)",transition:"all .2s ease"})},e+=1200),setTimeout(function(){s.find("#message_10").css({opacity:"1",transform:"translate(178px, 480px)",transition:"all .2s ease"}),s.find("#message_10 .message").addClass("message-show")},e+=200)}s.find("#animation_2").addClass("animated-run")},window.startAnim_3=function(s){if(s.find("#animation_3").is(":not(.animated-run)")){var e=0;setTimeout(function(){s.find("#message_11").css({opacity:"1",transform:"translate(61px, 0)",transition:"all .2s ease"})},e+=100),setTimeout(function(){s.find("#message_12").css({opacity:"1",transform:"translate(0, 50px)",transition:"all .2s ease"})},e+=500),setTimeout(function(){s.find("#message_13").css({opacity:"1",transform:"translate(38px, 139px)",transition:"all .2s ease"})},e+=500),setTimeout(function(){s.find("#message_14").css({opacity:"1",transform:"translate(157px, 420px)",transition:"all .2s ease"})},e+=1e3)}},window.animation_hide=function(s,e){e.find("#animation_"+s).css({opacity:0,transition:"all .2s ease"})},window.animation_show=function(s,e){e.find("#animation_"+s).css({opacity:1,transition:"all .2s ease"})}}),window.browserDetect=function(){navigator.appVersion;var s,e,n,a=navigator.userAgent,t=navigator.appName,i=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10);-1!=(e=a.indexOf("Opera"))?(t="opera",i=a.substring(e+6),-1!=(e=a.indexOf("Version"))&&(i=a.substring(e+8))):-1!=(e=a.indexOf("MSIE"))?(t="ie",i=a.substring(e+5)):-1!=(e=a.indexOf("Chrome"))?(t="chrome",i=a.substring(e+7)):-1!=(e=a.indexOf("Safari"))?(t="safari",i=a.substring(e+7),-1!=(e=a.indexOf("Version"))&&(i=a.substring(e+8))):-1!=(e=a.indexOf("Firefox"))?(t="firefox",i=a.substring(e+8)):-1!=a.indexOf("FBAN")&&-1!=a.indexOf("FBAV")?(t="facebook",i=0):(s=a.lastIndexOf(" ")+1)<(e=a.lastIndexOf("/"))&&(t=a.substring(s,e),i=a.substring(e+1),t.toLowerCase()==t.toUpperCase()&&(t=navigator.appName)),-1!=(n=i.indexOf(";"))&&(i=i.substring(0,n)),-1!=(n=i.indexOf(" "))&&(i=i.substring(0,n)),o=parseInt(""+i,10),isNaN(o)&&(i=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10));var r,d,c=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,m=window.devicePixelRatio||1,l=window.screen.width*m,p=window.screen.height*m;return{browserName:t.toLowerCase(),fullVersion:i,majorVersion:o,appName:navigator.appName.toLowerCase(),userAgent:navigator.userAgent.toLowerCase(),platform:navigator.platform.toLowerCase(),iphoneX:c&&1125==l&&2436===p?"iphoneX":"",isMobile:(d="not-mobile",r=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4)))&&(d="mobile"),d)}},$(function(){function s(){var s=$("#pos_3"),e=$("#pos_4"),n=$("#pos_3_contain_1"),a=$("#pos_3_contain_2");s[0].getBoundingClientRect().top<$(window).outerHeight()+50?(s.is(".btn_fixed")||(e.addClass("btn_hidden-cut").removeClass("btn_visible-cut"),s.addClass("btn_fixed")),s[0].getBoundingClientRect().top>n[0].getBoundingClientRect().top&&s[0].getBoundingClientRect().top<a[0].getBoundingClientRect().top||s.is(".btn_fixed")&&(e.removeClass("btn_hidden-cut").addClass("btn_visible-cut"),s.removeClass("btn_fixed"))):s.is(".btn_fixed")&&(e.removeClass("btn_hidden-cut").addClass("btn_visible-cut"),s.removeClass("btn_fixed"))}s(),$(document).scroll(function(){s()})}),$(function(){}),$(function(){$(".btn").click(function(){window.dataLayer&&window.dataLayer.push({event:"cta_go-to-websome",event_label:"switch_secretary",event_action:"click",event_category:"cta"})})}),$(function(){if($("body").addClass(window.browserDetect().isMobile),$("body").is(".mobile")){var s=function(s){var e=document.createElementNS("http://www.w3.org/1999/xhtml","div");e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+s+"</svg>";for(var n=document.createDocumentFragment();e.firstChild.firstChild;)n.appendChild(e.firstChild.firstChild);return n};$(".main-header").html('<div><h1>Paperless<br>Corporate Secretary</h1><p>Your&nbsp;documents done&nbsp;right, online,<br>and&nbsp;on&nbsp;time</p></div><div class="btn-group"> <a href="https://my.osome.com/?start=secretary&branch=SG" class="btn" id="pos_1">Contact us</a> </div>'),$(".offer-mobile").append($(".offer-price").remove().clone());var e=$(".promo-phone-animation").parent().html();$(".phone").find(".promo").remove().clone();var n=$(".phone").find(".app-rate").remove().clone();$("#screen_1").find(".phone-mobile").append(s(e)),$("#screen_2").find(".phone-mobile").append(s(e)),$("#screen_3").find(".phone-mobile").append(s(e)),$("#screen_4").find(".phone-mobile").append(n),$("tspan").each(function(s,e){$(e).attr("font-size",10)})}}),$(function(){function s(){if($(".promo").length)if($(".promo")[0].getBoundingClientRect().top<$(window).outerHeight()){$(".promo").addClass("promo_visible");var s=$(".promo-phone-animation");window.startAnim_1(s)}else $(".promo").removeClass("promo_visible");$("#cover_3").length&&($("#cover_3")[0].getBoundingClientRect().top<$(window).outerHeight()?$("#cover_3").addClass("cover_3_visible"):$("#cover_3").removeClass("cover_3_visible"))}s(),$(document).scroll(function(){s()})}),$(function(){$(".qa__title").click(function(){$(this).parent().toggleClass("qa__i_visible")})}),$(function(){var s=$("#screen-control"),e=$("#screens").find(".s-screens");s.append(function(){var a="";return $.each(e,function(s,e){var n=$(e).attr("id");a+=n?'<div class="s-control__item" data-screen="#'.concat(n,'"></div>'):""}),a}),$(".s-control__item").click(function(){var s=$(this);$("html, body").animate({scrollTop:$(s.data("screen")).offset().top},500)})}),$(function(){var t=$("#screen_1"),i=$("#screen_2"),o=$("#screen_3"),r=$("#screen_4"),d="";function s(){t[0].getBoundingClientRect();var s,e,n,a=$("body").is(".mobile")?-100:$(window).outerHeight();d="",t[0].getBoundingClientRect().top<a&&(d="#screen_1"),2*i[0].getBoundingClientRect().top<a&&(d="#screen_2"),2*o[0].getBoundingClientRect().top<a&&(d="#screen_3"),2*r[0].getBoundingClientRect().top<a&&(d="#screen_4"),$("body").is(".mobile")?(s=$($(".promo-phone-animation")[0]),e=$($(".promo-phone-animation")[1]),n=$($(".promo-phone-animation")[2])):s=e=n=$($(".promo-phone-animation")),"#screen_1"==d?(window.startAnim_1(s),window.animation_show(1,s)):window.animation_hide(1,s),"#screen_2"==d?(window.startAnim_2(e),window.animation_show(2,e)):window.animation_hide(2,e),"#screen_3"==d||"#screen_4"==d?(window.startAnim_3(n),window.animation_show(3,n)):window.animation_hide(3,n),console.log(d),$(".s-control__item").removeClass("s-control__item_active"),$('.s-control__item[data-screen="'.concat(d,'"]')).addClass("s-control__item_active")}s(),$(window).scroll(function(){s()})}),$(function(){var e=$("#slider").find(".slider__s").length,n=0,a=$("#slider").find(".slider__c-prev"),t=$("#slider").find(".slider__c-next"),i=$("#slider").find(".slider__inner");function s(s){s&&(s.is(".slider__c-prev")&&0<n&&n--,s.is(".slider__c-next")&&n<e-1&&n++),a.removeClass("disabled"),t.removeClass("disabled"),0==n&&a.addClass("disabled"),n==e-1&&t.addClass("disabled"),i.css({"margin-left":"-"+100*n+"vw"})}s(),$("#slider").find(".slider__c").click(function(){s($(this))})}),$(function(){$(".tab div").click(function(){var s=$("[data-id="+$(this).parent().data("for")+"]"),e=s.find("[data-id="+$(this).data("qa")+"]");s.find(".qa").removeClass("qa_selected"),e.addClass("qa_selected"),$(this).parent().find("div").removeClass("selected"),$(this).addClass("selected")})}),$(function(){var s;(s=new Image).onload=function(){$("body").addClass("webp")},s.onerror=function(){!1},s.src="assets/img/bizfile.webp"}),console.log("version: 0.1.0")});
//# sourceMappingURL=main.js.map
