$(document).ready((function(){$(".hex-wrap,.hover-notify").velocity("transition.expandIn",{stagger:150}),$(".hex-wrap").velocity("callout.pulse"),$(".hoverblock").velocity("fadeOut",{delay:3e3,duration:0});var e=setInterval((function(){$(".hover-notify").velocity("callout.tada")}),3e3);$(".hex-init").mouseenter((function(){$(".hover-notify").velocity("stop",!0).velocity("fadeOut"),clearInterval(e);var t=$(this).parent().attr("data-color"),i=$(this).parent().attr("data-title"),o=$(this).parent().attr("data-content");$(".code-description").velocity("stop",!0).velocity("transition.slideRightBigIn"),$("."+o).siblings().removeClass("desc-active"),setTimeout((function(){$("."+o).addClass("desc-active"),$(".code-descriptopn > div, .desc-active").children().velocity("stop",!0).velocity("transition.slideRightBigIn",{stagger:300}),$(".code-title, .desc-active span").velocity({color:t},{queue:!1}),$(".code-title").text(i)}),0),$(this).parent().addClass("hexactive"),$(".hexactive").velocity({scaleX:"1.1",scaleY:"1.1"},{duration:200})})).mouseleave((function(){$(".hexactive").velocity("stop",!0).velocity("reverse").removeClass("hexactive")}))}));