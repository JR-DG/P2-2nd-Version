(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{106:function(e,a,t){var i=t(257),n=t(258),o=t(259);e.exports={registerAll:function(){i.register(),n.register(),o.register()}}},107:function(e,a){const t=[{defaults:{autoplay:"in view",plugins:{mostWatchVideos:!1,pgmAnalytics:{},pluginDev:{overlayText:"This data is supplied at initialization",campaign_tracking:!0,ssl:!0,vast:!1},adTagManipulate:{debug:!1,pageVariables:{"{adUnit}":'"/6419/billboard.brightcove"',"{url}":"window.top.location.href","{domain}":"window.top.location.hostname"},customReplaceFunction:{functionName:"PGM.ads.brightcove.adTagManipulate"}}},videoHeaderBidding:{slotId:{a9:"videoSlotName1"}}},"Article Main Media":{autoplay:"always"},"Article Main Media Infinite":{autoplay:!1},"Article Inline Player":{autoplay:!1,plugins:{adTagManipulate:{pageVariables:{"{adUnit}":'"/6419/billboard.brightcove/inline"'}}}},"AMAs Artist":{autoplay:"always"},"AMAs Landing":{autoplay:"always"},"Deep Dive Main Media":{autoplay:"always"},"Homepage Video Slider":{autoplay:!1},"Homepage Main Video":{autoplay:!1},"Video Page Main":{autoplay:"always",mostWatchVideos:!1},"Video Page Main Series":{autoplay:"always",mostWatchVideos:!1},"Weekly Chart Video":{autoplay:!1,plugins:{mostWatchVideos:!1,adTagManipulate:{pageVariables:{"{adUnit}":'"/6419/billboard.brightcove/charts"'}},pluginDev:!1}},"Charts Hot100 Video":{autoplay:"always",plugins:{pluginDev:!1}},"React Weekly Chart Video":{autoplay:"always",plugins:{mostWatchVideos:!1,adTagManipulate:{pageVariables:{"{adUnit}":'"/6419/billboard.brightcove/charts"'}},pluginDev:!1}},"React Charts Hot100 Video":{autoplay:!1,plugins:{pluginDev:!1}}}];e.exports=t.length<=1?t[0]:t},13:function(e,a,t){var i=t(3),n=t(80),o=t(2),r=!1,l=i(),s=i(),u={},c=[],d=function(e,a){a?(e.getPlayer().volume(.2),e.play()):a||e.pause()},p=function(e){e&&c.indexOf(e)<0&&c.push(e)},g=function(e){e&&(c.indexOf(e)>=0&&c.splice(e,1))},v=function(e,a,t){var i=e.data("in-view-message");i&&i===a||(e.data("in-view-message",a),e[0].contentWindow.postMessage(a,t||"*"))},y=function(e){e.is("iframe")?0===c.length&&v(e,"iframeInView"):e.is("video")&&function(e){if(0===c.length&&!u[e.attr("id")]){var a=e.attr("id");u[a]=!0;var t=n.getPlayerView(a);d(t,!0),p(a)}}(e)},f=function(e){e.is("iframe")?v(e,"iframeOutOfView"):e.is("video")&&function(e){var a=e.attr("id");if(c.indexOf(a)>=0){g(a);var t=n.getPlayerView(a),i=t.getPlayer();if(!i.paused()){var r=0;try{r=i.played().end(0)}catch(e){console.log(e)}o.trigger("trackEvent",{category:"video",action:"scroll stop",label:[i.mediainfo&&i.mediainfo.id||"Unknown Video ID",i.mediainfo&&i.mediainfo.name||"Unknown Video Name"].join(" - "),value:r})}d(t,!1)}}(e)},h=function(e){var a=i(document).scrollTop(),t=a+i(window).height();e.each((function(){var e=i(this),n=e.offset().top,o=n+e.height();a<=n&&t>=o?y(e):f(e)}))},m=function(e,a){e=i(e),a=i(a),e=e||i(),a=a||i(),window.videojs||(e=e.filter("iframe")),w(e.not(a),!0),w(a),!r&&l.length>0&&(r=!0,i(document).scroll((function(){h(l)})))},w=function(e,a){e.length&&(b(e),a&&(l=l.add(e),h(e)))},b=function(e){e.filter("video").each((function(){var e=i(this);if(!s.is(e)){s=s.add(e);var a=e.attr("id"),t=n.getPlayer(a);void 0!==a&&(t.on("ads-play",(function(){return p(t.id())})),t.on("ads-ad-started",(function(){return p(t.id())})),t.on("play",(function(){return p(t.id())})),t.on("playing",(function(){return p(t.id())})),t.on("ads-pause",(function(){return g(t.id())})),t.on("pause",(function(){return g(t.id())})),t.on("ended",(function(){return g(t.id())})))}}))};e.exports={setup:function(){var e=this,a=arguments,t=function(){m.apply(e,a)};n.waitForVideojs().then(t,t)},videoPlaying:function(){return c.length>0},removeFromVideosPlaying:function(e){g(e)},findVideoForElement:function(e){return i(e).find("video")[0]}}},16:function(e,a,t){"use strict";function i(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.r(a),t.d(a,"setupHeaderBidding",(function(){return p})),t.d(a,"default",(function(){return g}));var o=t(107),r=t(38),l=t(106),s=t(32),u=t(13),c=t(2);function d(e){var a=o.defaults,t=o[e];return t&&r.deepObjectExtend(a,t),a}function p(e,a){var t=d(a).videoHeaderBidding;window.CLARITY.push({use:["header"],run:function(a){a.addHeaderVideoSlot(e,t.slotId,"brightcove")}})}var g=function(){function e(a,t,i){var o=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"init",(function(){o.initPlugins(),o.manageAds(),o.manageAutoplay()})),n(this,"initPlugins",(function(){var e=o.settings.plugins;for(var a in l.registerAll(),e)e.hasOwnProperty(a)&&!1!==e[a]&&"function"==typeof o.player[a]&&o.player[a](e[a])})),n(this,"manageAds",(function(){var e=o.settings.ads,a=o.player,t=o.videoDomId;if((!1===e||"second video"===e)&&a.ima3){if("second video"===e){var i=a.ima3.settings.serverUrl;a.one("ended",(function(){this.ima3.settings.serverUrl=i}))}a.ready((function(){this.trigger("adscanceled"),this.trigger("nopostroll"),this.ima3.settings.serverUrl=""}))}a.ready((function(){var e=this;window.CLARITY.push({use:["playerInterface"],run:function(a){a.triggerPlayerExists(t,e)}})}))})),n(this,"manageAutoplay",(function(){var e=o.settings.autoplay,a=u.findVideoForElement(o.videoEl);"in view"===e?u.setup(a):u.setup(a,a),"always"===e&&o.play()})),n(this,"trackPlayInitiator",(function(e){var a=null;o.player.pgmAnalytics&&o.player.pgmAnalytics.videoEventTracker&&(a=o.player.pgmAnalytics.videoEventTracker),a&&null===a.getPlayInitiator()&&(e&&"click"===e.type?a.setPlayInitiator("click"):a.hasPlayed()?a.setPlayInitiator("continuous"):a.setPlayInitiator("autoplay"))})),n(this,"onPlayReject",(function(e){e&&"NotAllowedError"===e&&o.player.pgmAnalytics&&(o.player.pgmAnalytics.videoEventTracker.resetPlayInitiator(),o.player.pgmAnalytics.trackEvent({action:"autoplay rejected",category:"video",label:o.player.pgmAnalytics.getLabel(o.player)})),console.error(e)})),this.player=a,this.videoEl=i,this.videoDomId=null!==r?r:i.id,this.settings=d(t),this.init(),c.trigger("playerController.created",this)}var a,t,o;return a=e,(t=[{key:"play",value:function(e){var a=this,t=this.settings.ads,i=this.videoDomId;return this.trackPlayInitiator(e),new Promise((function(n,o){if(u.videoPlaying())n();else{var r=function(){n()},l=function(e){a.onPlayReject(e),o()},c=function(){a.player.ready((function(){var a=this.ads&&this.ads.isInAdMode()?this.ima3.adPlayer:this;a.muted(!s.canAutoplay());var t=a.play(e);t?t.then((function(){r()})).catch(l):r()}))};!1===t?c():window.CLARITY.push({use:["playerInterface"],run:function(e){e.onReadyToPlayVideo((function(){try{c()}catch(e){(console.error||console.log).call(console,e.stack||e)}}),i)}})}}))}},{key:"pause",value:function(){var e=this.player;e.ads&&(e=e.ads&&e.ads.isInAdMode()?e.ima3.adPlayer:e),e.paused()||e.pause()}},{key:"changeVideo",value:function(e){this.pause();var a=this.player;return new Promise((function(t,i){a?a.catalog.getVideo(e,(function(e,i){e?console.log(e):(a.catalog.load(i),t())})):i()}))}},{key:"dispose",value:function(){var e=this;if(this.player){this.player.pause();try{this.player.dispose()}catch(e){console.log(e)}u.removeFromVideosPlaying(this.videoDomId),window.CLARITY.push({use:["playerInterface"],run:function(a){a.trash(e.videoDomId)}})}return this}}])&&i(a.prototype,t),o&&i(a,o),e}()},257:function(e,a,t){function i(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var n=t(4),o=t(32),r=t(2),l=function(e){return e.mediainfo&&e.mediainfo.id||"Unknown Video ID"},s=function(e){return e.mediainfo&&e.mediainfo.name||"Unknown Video Name"},u=function(e){return[l(e),s(e)].join(" - ")},c=function(e,a,t){var i={category:"video",action:e,label:a},n=1;for(var o in t)if(t.hasOwnProperty(o)){var l="customDimensionValue"+n;i["customDimensionIndex"+n]=o,i[l]=t[o],n++}r.trigger("trackEvent",i)},d=function(){function e(a){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=a,this.placement=this.player.bcinfo.applicationId,this.playInitiator=null,this.lastStartedVideo=null,this.played=!1}var a,t,n;return a=e,(t=[{key:"trackPlayerLoad",value:function(){var e={"Video Player Placement":this.placement};c("player load",u(this.player),e)}},{key:"trackStart",value:function(){var e=l(this.player);if(e!==this.lastStartedVideo){var a=this.getPlayInitiator(),t={"Video Player Placement":this.placement,"Video Play Start Initiator":a||"click"};this.resetPlayInitiator(),this.lastStartedVideo=e,c("start",u(this.player),t)}}},{key:"getPlayInitiator",value:function(){return this.playInitiator}},{key:"setPlayInitiator",value:function(e){this.playInitiator=e}},{key:"resetPlayInitiator",value:function(){this.playInitiator=null}},{key:"resetLastVideo",value:function(){this.lastStartedVideo=null}},{key:"setPlayed",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.played=e}},{key:"hasPlayed",value:function(){return this.played}},{key:"irisActive",value:function(){return this.player.activePlugins_&&this.player.activePlugins_.pluginDev}}])&&i(a.prototype,t),n&&i(a,n),e}(),p=function(e){window!==window.top?(e.event="trackEvent",window.top.postMessage(e,"*")):window.dataLayer?r.trigger("trackEvent",e):window.PGM.debug?window.PGM.debug("ga","unable to report brightcove plugin event",window.PGM.events):console.warn("unable to report plugin event")};e.exports={getLabel:u,register:function(e){(e=e||window.videojs).registerPlugin("pgmAnalytics",(function(){window.PGM&&window.PGM.debug&&window.PGM.debug("pgmAnalytics","loaded plugin"),this.pgmAnalytics={getLabel:u,trackEvent:p,videoEventTracker:new d(this)};var e=this;this.on("loadstart",n.once((function(){e.pgmAnalytics.videoEventTracker.trackPlayerLoad(this);var a={category:"video",label:u(this)};"chrome"===o.browser&&"desktop"===o.device&&(a.action="sound autoplay allowed",a.label=o.canAutoplay()?"true":"false",e.pgmAnalytics.trackEvent(a))}))),this.on("playing",(function(){e.pgmAnalytics&&(e.pgmAnalytics.videoEventTracker.hasPlayed()&&null===e.pgmAnalytics.videoEventTracker.getPlayInitiator()&&(e.pgmAnalytics.videoEventTracker.irisActive()?e.pgmAnalytics.videoEventTracker.setPlayInitiator("iris"):e.pgmAnalytics.videoEventTracker.setPlayInitiator("continuous")),e.pgmAnalytics.videoEventTracker.trackStart(this),e.pgmAnalytics.videoEventTracker.setPlayed())})),this.on("loadstart",(function(){e.pgmAnalytics.videoEventTracker.resetLastVideo(this)}))}))},trackEvent:p}},258:function(module,exports){var register=function register(videojs){videojs=videojs||window.videojs;var adTagManipulate=function adTagManipulate(options){var player=this,originalMacroFunction=player.ima3.adMacroReplacement,debug=function(e){options.debug&&videojs.log(e)};function subQueryVariables(e,a){for(var t in a)if(a.hasOwnProperty(t)){var i=getParameterByName(t);if(i){var n=a[t];debug(t+" -> "+a[t]+" -> "+i),e.search(n)&&(debug("adTagManipulate: replacing queryString "+n+" with "+i),e=e.replace(n,encodeURIComponent(i)))}else debug("Warning: "+t+" not found in query string, skipping")}return e}function subPageVariables(url,pageVars){for(var pvar in pageVars)if(pageVars.hasOwnProperty(pvar)){var key=pageVars[pvar];if(pageVars.hasOwnProperty(pvar)&&url.search(pvar)){var pval="";try{pval=eval(key),null===pval&&(pval=""),debug("adTagManipulate: page variable "+pvar+" -> "+key+" -> "+pval)}catch(e){debug("adTagManipulate: WARNING: page variable "+e.message+", setting to empty string"),pval=""}url=url.replace(pvar,encodeURIComponent(pval))}}return url}function getParameterByName(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))}debug("adTagManipulate - v1.05:"),debug(options),player.ima3.adMacroReplacement=function(url){if(debug("adTagManipulate["+player.mediainfo.id+"]: Initial URL -> "+url),options.queryStringVariables&&(url=subQueryVariables(url,options.queryStringVariables),debug("adTagManipulate: POST QueryReplace -> "+url)),options.pageVariables&&(url=subPageVariables(url,options.pageVariables),debug("adTagManipulate: POST PageReplace -> "+url)),options.customReplaceFunction){var cmd="url = "+options.customReplaceFunction.functionName+"(player, debug, url)";debug("adTagManipulate: executing custom function: "+cmd);try{eval(cmd)}catch(e){console.log("adTagManipulate: ERROR in custom function "+e.message+", skipping")}}return url=originalMacroFunction(url),debug("adTagManipulate: Post Standard Replace "+url),url}};videojs.plugin("adTagManipulate",adTagManipulate)};module.exports={register:register}},259:function(e,a,t){var i=t(4),n=t(3),o=function(e,a){var t=e.video;a.catalog.getVideo(t,(function(e,t){e?console.log(e):(a.catalog.load(t),a.play())}))};e.exports={register:function(e){(e=e||window.videojs).registerPlugin("mostWatchVideos",(function(){var e=this;window.PGM&&window.PGM.debug&&window.PGM.debug("mostWatchVideos","loaded plugin");var a,t=[];this.on("loadstart",i.once((function(){n.ajax({method:"GET",url:"/fe-ajax/most_watched_vids",type:"jsonp",success:function(e){a=e}})}))),this.on("ended",(function(){0===a.length&&(a=t,t=[]);var i=a.splice(0,1)[0];t.push(i),o(i,e)}))}))}}},80:function(e,a,t){var i=t(3),n=t(4),o=t(106),r=t(33),l=t(2),s={},u=n.once((function(e,a){return r.createScript("//players.brightcove.net/"+e+"/"+a+"_default/index.min.js").then(o.registerAll)}));i(window).on("message",(function(e){/brightcove\.net/.test(e.originalEvent.origin)&&"trackEvent"===e.originalEvent.data.event&&(delete e.originalEvent.data.event,l.trigger("trackEvent",e.originalEvent.data))})),e.exports={getPlayer:function(e){var a=i();if((a=i("string"==typeof e?"#"+e:e)).length)return a.hasClass("vjs-tech")?window.videojs(e):window.bc(e)},getPlayerView:function(e){return s[e]},injectJs:u,registerPlayerView:function(e,a){s[e]=a},waitForVideojs:function(){var e=0;return new Promise((function(a,t){!function a(t,i){e++,window.videojs?t():e>20?i():setTimeout((function(){a(t,i)}),100)}(a,t)}))}}}}]);
//# sourceMappingURL=cha_57002caf.bundle.js.map