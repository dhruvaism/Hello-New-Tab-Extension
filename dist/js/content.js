/*! Hello-tab */

jQuery(document).ready(function(r){

    setTimeout(function() { r('.preloader').fadeOut('slow');; }, 2000);
  
    var urls;
    const url = 'https://pixabay.com/api/?key=14518208-387f8d0f43f80475d5576b60c&per_page=200&';
    fetch(url)
    .then(res=> res.json())
    .then(function(data){
        urls= data.hits.map(item => item.largeImageURL);
        var l={backgrounds:urls};
       
    
    var t=l.backgrounds[Math.floor(Math.random()*200)];r(".welcome").css("background-image",'url("'+t+'")');
    r(".menu").on("click",function(){return r(".settings-panel").hasClass("open")?(r(".settings-panel").removeClass("open"),r(".noscroll").removeClass("noscroll")):(r(".settings-panel").addClass("open"),r("*:not(.settings-panel.open)").addClass("noscroll")),!1}),r('input[type="text"]').on("focusout",function(){var t=r("."+r(this).attr("data-toggle"));t.removeClass("hidden"),t.html(r(this).val().trim()),setCookie(r(this).attr("data-toggle"),r(this).val().trim(),1825),"greeting"==r(this).attr("data-toggle")&&(""!==r(this).val().trim()?r(".time-of-day").addClass("greeted"):r(".time-of-day").removeClass("greeted"))}),r('select[data-toggle="default-feed"]').change(function(){a(r(this).val()),setCookie(r(this).attr("data-toggle"),r(this).val().trim(),1825)}),r('input[type="checkbox"]:checked').each(function(){toggleContent(r(this))}),r('input[type="text"]').each(function(){var e=r(this).attr("data-toggle");getCookie(e)?(r("."+e).removeClass("hidden").html(getCookie(e)),r("[data-toggle="+e+"]").val(getCookie(e))):"location"!==e||getCookie(e)||r.get("http://ip-api.com/json/",function(t){setCookie(e,t.city+", "+t.country,1825),r("."+e).removeClass("hidden").html(getCookie(e)),r("[data-toggle="+e+"]").val(getCookie(e))},"jsonx"),"greeting"==e&&(""!==r(this).val().trim()?r(".time-of-day").addClass("greeted"):r(".time-of-day").removeClass("greeted"))}),r(document).ajaxComplete(function(){}),r(window).on("resize",function(){}),updateClock(),r(".chrome").click(function(t){t.preventDefault(),chrome.tabs.update({url:"chrome://apps"})})

    }).catch((error) => {console.log(error);r(".welcome").css("background-image",'url("/images/default_background.jpg")'); });

     });
    
 

var clock=0,interval_msec=1e3,prevhh=-1;function updateClock(){clearTimeout(clock);var t=new Date,e=t.getHours(),o=t.getMinutes();e<10&&(e="0"+e),o<10&&(o="0"+o),$("#clock").html(e+":"+o),e<12?$("#clock + .tiny").html("AM"):$("#clock + .tiny").html("PM"),e!==prevhh&&(3<=e&&e<12?($(".time-of-day").html("morning"),prevhh=e):12<=e&&e<17?$(".time-of-day").html("afternoon"):$(".time-of-day").html("evening"),prevhh=e),clock=setTimeout("updateClock()",interval_msec)}

function setCookie(t,e,o){var l="";if(o){var a=new Date;a.setTime(a.getTime()+24*o*60*60*1e3),l="; expires="+a.toUTCString()}

document.cookie=t+"="+(e||"")+l+"; path=/"}function getCookie(t){for(var e=t+"=",o=document.cookie.split(";"),l=0;l<o.length;l++){for(var a=o[l];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return null}

function eraseCookie(t){document.cookie=t+"=; Max-Age=-99999999;"}