"use strict";$(function(){$(function(){function t(){var t=$("#pos_1"),e=$("#pos_2"),n=$("#pos_3"),i=$("#pos_4"),s=$("#pos_3_contain_1"),d=$("#pos_3_contain_2");e[0].getBoundingClientRect().top<$(window).outerHeight()?(t.addClass("btn_hidden"),e.removeClass("btn_hidden")):(t.removeClass("btn_hidden"),e.addClass("btn_hidden")),n[0].getBoundingClientRect().top<$(window).outerHeight()+50?(n.is(".btn_fixed")||(i.addClass("btn_hidden-cut").removeClass("btn_visible-cut"),n.addClass("btn_fixed")),n[0].getBoundingClientRect().top>s[0].getBoundingClientRect().top&&n[0].getBoundingClientRect().top<d[0].getBoundingClientRect().top||n.is(".btn_fixed")&&(i.removeClass("btn_hidden-cut").addClass("btn_visible-cut"),n.removeClass("btn_fixed"))):n.is(".btn_fixed")&&(i.removeClass("btn_hidden-cut").addClass("btn_visible-cut"),n.removeClass("btn_fixed"))}t(),$(document).scroll(function(){t()})}),$(function(){function t(){$(".promo")[0].getBoundingClientRect().top<$(window).outerHeight()?$(".promo").addClass("promo_visible"):$(".promo").removeClass("promo_visible")}t(),$(document).scroll(function(){t()})}),$(function(){$(".slider").find(".slider__s").each(function(t,e){})}),$(function(){$(".tab div").click(function(){var t=$("[data-id="+$(this).parent().data("for")+"]"),e=t.find("[data-id="+$(this).data("qa")+"]");t.find(".qa").removeClass("qa_selected"),e.addClass("qa_selected"),$(this).parent().find("div").removeClass("selected"),$(this).addClass("selected")})}),console.log("version: 0.1.0")});
//# sourceMappingURL=main.js.map