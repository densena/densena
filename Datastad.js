jQuery(document).ready(function(){var i=jQuery(window).width();function e(){jQuery("#sidebar-sticky").stick_in_parent({parent:"#wrapper",offset_top:70})}i<768?jQuery("#sidebar-sticky").trigger("sticky_kit:detach"):e(),jQuery(window).resize(function(){(i=jQuery(window).width())<768?jQuery("#sidebar-sticky").trigger("sticky_kit:detach"):e()})});
function ASSetCookie(a,b,c){var d=new Date;d.setDate(d.getDate()+c);var e=escape(b)+(0==c?";path=/":"; expires="+d.toUTCString())+";path=/";document.cookie=a+"="+e}function ASGetCookie(a){var b,c,d,e=document.cookie.split(";");for(b=0;b<e.length;b++)if(c=e[b].substr(0,e[b].indexOf("=")),d=e[b].substr(e[b].indexOf("=")+1),c=c.replace(/^\s+|\s+$/g,""),c==a)return unescape(d)}function ASSetCookieAds(a,b){var c=ASGetCookie(a);void 0!=c&&""!=c?(ASTheCookieInt=parseInt(c)+1,ASSetCookie(a,ASTheCookieInt.toString(),0)):ASSetCookie(a,"1",b)}function ASMaxClick(a,b){var c=ASGetCookie(a);return void 0!=c&&parseInt(c)>=b?!0:!1}jQuery(document).ready(function(a){var b="adsShield",c=7,d=3,e=".adsShield",f=!1;ASMaxClick(b,d)&&a(e).hide("fast"),a(e).bind("mouseover",function(){f=!0}).bind("mouseout",function(){f=!1}),a(window).on("beforeunload",function(){f&&(ASMaxClick(b,d)?a(e).hide("fast"):ASSetCookieAds(b,c))})});
(function(b,l,e,g,h,f){1!==parseInt(e.msDoNotTrack||b.doNotTrack||e.doNotTrack,10)&&b.addEventListener("load",function(){var r=(new Date).getTime();b.galite=b.galite||{};var m=new XMLHttpRequest,n="https://www.google-analytics.com/collect?cid="+(l.uid=l.uid||Math.random()+"."+Math.random())+"&v=1&tid="+galite.UA+"&dl="+f(h.location.href)+"&ul=en-us&de=UTF-8",a=function(b){var d="",c;for(c in b){if(void 0===b[c])return!1;d+=f(b[c])}return d},p={dt:[h.title],sd:[g.colorDepth,"-bit"],sr:[g.availHeight,
"x",g.availWidth],vp:[innerWidth,"x",innerHeight],dr:[h.referrer]},k;for(k in p){var q=k+"="+a(p[k]);q&&(n+="&"+q)}a=function(b,d){var c="",a;for(a in d)c="&"+a+"="+f(d[a]);return function(){var a=n+c+(galite.anonymizeIp?"&aip=1":"")+"&t="+f(b)+"&z="+(new Date).getTime();if(e.sendBeacon)e.sendBeacon(a);else try{m.open("GET",a,!1),m.send()}catch(t){(new Image).src=a}}};setTimeout(a("pageview",null),100);b.addEventListener("unload",a("timing",{utc:"JS Dependencies",utv:"unload",utt:(new Date).getTime()-
r}))})})(window,localStorage,navigator,screen,document,encodeURIComponent);
$(window).scroll(function(){if($(this).scrollTop()&gt;200){$(&#39;#back-to-top&#39;).fadeIn();}else{$(&#39;#back-to-top&#39;).fadeOut();}});$(&#39;#back-to-top&#39;).hide().click(function(){$(&#39;html,body&#39;).animate({scrollTop:0},1000);return false;});
