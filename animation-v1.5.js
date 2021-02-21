//<![CDATA[
/*
* Max project - Template
* Release Date: 21 february 2021
* Last Update: 23 february 2021
* Author: Hazira Azza Faroni
* This is a premium product available exclusively here : http://uangdunia.com
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Button header
    2. Counter number
    3. Lazy load
    4. Faq
    5. Hidden m=1
*/

/* 1. Button header ................ */
$(document).ready(function(){$(&quot;#head-btn&quot;).click(function(){$(&quot;#menu-btn&quot;).slideToggle(&quot;normal&quot;)})});

/* 2. Counter number ................ */
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

/* 3. Lazy load ................ */
(function(a){a.fn.lazyload=function(b){var c={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(b){a.extend(c,b)}var d=this;if("scroll"==c.event){a(c.container).bind("scroll",function(b){var e=0;d.each(function(){if(a.abovethetop(this,c)||a.leftofbegin(this,c)){}else if(!a.belowthefold(this,c)&&!a.rightoffold(this,c)){a(this).trigger("appear")}else{if(e++>c.failurelimit){return false}}});var f=a.grep(d,function(a){return!a.loaded});d=a(f)})}this.each(function(){var b=this;if(undefined==a(b).attr("original")){a(b).attr("original",a(b).attr("src"))}if("scroll"!=c.event||undefined==a(b).attr("src")||c.placeholder==a(b).attr("src")||a.abovethetop(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.rightoffold(b,c)){if(c.placeholder){a(b).attr("src",c.placeholder)}else{a(b).removeAttr("src")}b.loaded=false}else{b.loaded=true}a(b).one("appear",function(){if(!this.loaded){a("<img />").bind("load",function(){a(b).hide().attr("src",a(b).attr("original"))[c.effect](c.effectspeed);b.loaded=true}).attr("src",a(b).attr("original"))}});if("scroll"!=c.event){a(b).bind(c.event,function(c){if(!b.loaded){a(b).trigger("appear")}})}});a(c.container).trigger(c.event);return this};a.belowthefold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).height()+a(window).scrollTop()}else{var d=a(c.container).offset().top+a(c.container).height()}return d<=a(b).offset().top-c.threshold};a.rightoffold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).width()+a(window).scrollLeft()}else{var d=a(c.container).offset().left+a(c.container).width()}return d<=a(b).offset().left-c.threshold};a.abovethetop=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollTop()}else{var d=a(c.container).offset().top}return d>=a(b).offset().top+c.threshold+a(b).height()};a.leftofbegin=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollLeft()}else{var d=a(c.container).offset().left}return d>=a(b).offset().left+c.threshold+a(b).width()};a.extend(a.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})})(jQuery);$(function(){$("img").lazyload({placeholder:"https://1.bp.blogspot.com/-6vFjBgbC-5Q/YDFi3RvsDnI/AAAAAAAADJw/be67fojp1Cc7_qD4pEgzwDT1i6HGgpTOwCLcBGAsYHQ/s200/unnamed.gif",effect:"fadeIn",threshold:"-100"})});

/* 4. Faq ................ */
const faqheads = document.querySelectorAll(".question-wrap-header");

faqheads.forEach(faqhead => {
faqhead.addEventListener("click", event => {

faqhead.classList.toggle("active");
    const faqbody = faqhead.nextElementSibling;
    if(faqhead.classList.contains("active")) {
      faqbody.style.maxHeight = faqbody.scrollHeight + "px";
    }
    else {
      faqbody.style.maxHeight = 0;
    }
    
  });
});

/* 5. Hidden m=1 ................ */
var uri = window.location.toString();if (uri.indexOf(&quot;?m=1&quot;,&quot;?m=1&quot;) &gt; 0) {var clean_uri = uri.substring(0, uri.indexOf(&quot;?m=1&quot;));window.history.replaceState({}, document.title, clean_uri);}
//]]>
