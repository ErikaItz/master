(("undefined"!=typeof self?self:this).webpackJsonp_thunderbolt_elements=("undefined"!=typeof self?self:this).webpackJsonp_thunderbolt_elements||[]).push([[13],{198:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(659),i=n.n(a),o=n(179),s="ariaLabels",l="SlideShow_AriaLabel_TopLevel",u="Slideshow",c="SlideShow_AriaLabel_Button_Next",d="Next",v="SlideShow_AriaLabel_Button_Previous",f="Previous",h="SlideShow_AriaLabel_NavigationDots",p="Slides",S="slidesWrapper",m="nextButton",g="prevButton",y="shadowLayer",b=n(800),w=n(752),E=n(692),O=n(847),_=n.n(O);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var L=o.createElement("path",{d:"M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"});function C(e){return o.createElement("svg",x({viewBox:"0 0 21 41"},e),L)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j=o.createElement("path",{d:"M33.5 0l-.7.7L37.1 5H0v1h37.1l-4.3 4.3.7.7L39 5.5z"});function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var N=o.createElement("path",{d:"M0 0h50v50H0z"}),B=o.createElement("path",{d:"M28.5 32.4c.1 0 .3-.1.4-.2.2-.2.2-.5 0-.7L22.2 25l6.7-6.5c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L21 24.7c-.1.1-.2.2-.2.4 0 .1.1.3.2.4l7.1 6.8c.1 0 .3.1.4.1z"});var T={thinArrowsSkin:C,thinArrowsLargeSelectedCircleSkin:C,longArrowsLargeSelectedCircleSkin:function(e){return o.createElement("svg",k({viewBox:"0 0 39 11"},e),j)},squareButtonsSkin:function(e){return o.createElement("svg",P({viewBox:"0 0 50 50"},e),N,B)},StateBoxSkin:function(){return null}},D=function(e){var t=e.skin,n=e.moveToNextSlide,r=e.moveToPrevSlide,a=e.translate,l=T[t];return o.createElement(o.Fragment,null,o.createElement("button",{"data-testid":g,"aria-label":a(s,v,f),onClick:r,className:i()(_.a.navBtn,_.a.prevBtn)},o.createElement(l,null)),o.createElement("button",{"data-testid":m,"aria-label":a(s,c,d),onClick:n,className:i()(_.a.navBtn,_.a.nextBtn)},o.createElement(l,null)))},I=function(e){var t=e.translate,n=e.currentSlideIndex,r=e.slidesProps,a=e.isPlaying,l=e.focusSlideShow,u=e.changeSlide;return o.createElement("nav",{"aria-label":t(s,h,p),className:_.a.dotsNavSection},o.createElement("ol",{className:_.a.dotsNavList},r.map((function(e,t){return function(e,t){var r;return o.createElement("li",{key:e.id,"aria-current":t===n?"true":void 0},o.createElement("a",{href:"./#"+e.id,"aria-label":e.title,onClick:function(e){e.preventDefault(),e.stopPropagation(),t!==n&&u(t),a||l()},className:i()(_.a.navDot,(r={},r[_.a.selected]=t===n,r))}))}(e,t)}))))},M=n(1852),A=n(933),H=function(e){var t=e.isPlaying,n=e.isSlideShowInViewport,r=e.reverse,a=e.transition,s=e.transitionDuration,l=e.currentSlideIndex,u=e.onSlideEntered,c=e.onSlideExited,d=e.children,v=e.dynamicHeight,f=!n||t&&n?"off":"polite";return"NoTransition"===a?o.createElement("div",{"data-testid":S,className:i()(_.a.slides,v?_.a.slidesDynamicHeight:void 0),"aria-live":f},d):o.createElement(M.a,{"data-testid":S,"aria-live":f,className:i()(_.a.slides,v?_.a.slidesDynamicHeight:void 0),childFactory:function(e){return o.cloneElement(e,{reverse:r})}},o.createElement(A.a,{type:a,key:l,timeout:s,onEntered:u,onExited:c,unmountOnExit:!0},d))};t.default=o.forwardRef((function(e,t){var n=e.id,a=e.skin,c=e.hasShadowLayer,d=e.translate,v=e.currentSlideIndex,f=e.slidesProps,h=e.showNavigationDots,p=e.showNavigationButton,S=e.autoPlay,m=e.shouldChangeSlidesOnSwipe,g=void 0===m||m,O=e.autoPlayInterval,x=e.pauseAutoPlayOnMouseOver,L=e.transition,C=e.transitionDuration,k=e.transitionReverse,j=e.changeSlide,P=e.reduceMotion,N=e.children,B=e.onCurrentSlideChanged,T=e.onChange,M=e.onMouseEnter,A=e.onMouseLeave,z=e.onClick,R=e.onDblClick,V=e.play,F=e.onPlay,Y=e.pause,q=e.onPause,J=e.isPlaying,K=void 0===J?S&&o.Children.toArray(N()).length>1&&!P:J,X=e.dynamicSlidesHeight,U=void 0!==X&&X,W=o.useState(!1),G=W[0],Q=W[1],Z=o.useState(!1),$=Z[0],ee=Z[1],te="NoTransition"!==L,ne=k?!G:G,re=o.Children.toArray(N()),ae=S&&re.length>1&&!P,ie=o.useCallback((function(e,t){if(!$){if(te)ee(!0),Q(!!(void 0===t?e<v:t));j(e),null==T||T({type:"change"}),te||null==B||B(e)}}),[j,v,te,$,T,B]),oe=o.useCallback((function(){var e=v===re.length-1?0:v+1;return ie(e,!1)}),[re.length,v,ie]),se=o.useCallback((function(){var e=0===v?re.length-1:v-1;return ie(e,!0)}),[re.length,v,ie]),le=ae&&x?function(e){Y(),null==M||M(e)}:M,ue=ae&&x?function(e){V(),null==A||A(e)}:A,ce=ae?{onFocus:function(){return Y()},onBlur:function(){return V()}}:{},de=o.useRef(null),ve=Object(w.a)(de);return Object(E.a)("onSwipeLeft",(function(){return g&&oe()}),de),Object(E.a)("onSwipeRight",(function(){return g&&se()}),de),Object(b.a)(oe,K&&ve?O:null),o.useImperativeHandle(t,(function(){return{play:function(){V(),null==F||F({type:"autoplayOn"})},pause:function(){Y(),null==q||q({type:"autoplayOff"})},moveToSlide:ie,next:oe,previous:se}}),[oe,se,ie,q,F,Y,V]),o.createElement("div",Object(r.__assign)({id:n,ref:de,className:i()(_.a.slideShowContainer,_.a[a],"ignore-focus"),role:"region",tabIndex:-1,"aria-label":d(s,l,u),onClick:z,onDoubleClick:R,onMouseEnter:le,onMouseLeave:ue},ce),p&&o.createElement(D,{skin:a,translate:d,moveToNextSlide:oe,moveToPrevSlide:se}),c&&o.createElement("div",{"data-testid":y,className:_.a.shadowLayer}),o.createElement(H,{isPlaying:K,isSlideShowInViewport:ve,reverse:ne,transition:P?"NoTransition":L,transitionDuration:C,currentSlideIndex:v,onSlideEntered:function(){te&&ee(!1)},onSlideExited:function(){null==B||B(v)},dynamicHeight:U},re[v]),h&&o.createElement(I,{focusSlideShow:function(){var e;return null===(e=de.current)||void 0===e?void 0:e.focus()},translate:d,slidesProps:f,currentSlideIndex:v,changeSlide:ie}))}))},692:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(4),a=n(179),i={left:"onSwipeLeft",right:"onSwipeRight",up:"onSwipeUp",down:"onSwipeDown"},o=function(e){if(e.touches&&e.touches.length){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}},s={touched:!0,moved:!1,deltaCoords:{x:0,y:0}},l=function(e,t,n){return function(){var a,l=function(e){a=Object(r.__assign)(Object(r.__assign)({},s),{numOfTouches:e.touches.length,startCoords:o(e),startTime:Date.now(),evObj:Object(r.__assign)({},e)})},u=function(e){if(a){var t=o(e);if(t){a.startCoords||(a.startCoords=t);var n=a.startCoords.x-t.x,r=a.startCoords.y-t.y;a.moved=!0,a.deltaCoords={x:n,y:r}}}},c=function(){var n,r;if(a)if(a.endTime=Date.now(),"onTap"===e&&function(e){return e.touched&&!e.moved&&1===e.numOfTouches}(a))t(a.evObj);else if(function(e){return e.moved&&1===e.numOfTouches&&e.endTime-e.startTime<500&&(Math.abs(e.deltaCoords.x)>100||Math.abs(e.deltaCoords.y)>60)}(a)){var o=(n=a.deltaCoords.x,r=a.deltaCoords.y,Math.abs(n)>Math.abs(r)?n>0?"left":"right":r>0?"up":"down");e===i[o]&&t(a.evObj)}};return n&&n.current&&(n.current.addEventListener("touchstart",l),n.current.addEventListener("touchmove",u),n.current.addEventListener("touchend",c)),function(){n&&n.current&&(n.current.removeEventListener("touchstart",l),n.current.removeEventListener("touchmove",u),n.current.removeEventListener("touchend",c))}}},u=function(e,t,n){return a.useEffect(l(e,t,n),[e,n,t])}},752:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(179),a=function(){return"function"==typeof window.IntersectionObserver};function i(e,t){void 0===t&&(t=!1);var n=Object(r.useState)(!1),i=n[0],o=n[1];return Object(r.useEffect)((function(){if(!a())return o(t),function(){};var n=e.current;if(n&&a()){var r=new window.IntersectionObserver((function(e){var t=e[0];o(t.isIntersecting)}));return r.observe(n),function(){r.disconnect()}}return function(){}}),[e,t]),i}},800:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(179);function a(e,t){var n=Object(r.useRef)((function(){}));Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}return function(){}}),[t])}},847:function(e,t,n){e.exports={thinArrowsSkin:"rO74o","slide-show-container":"ryOPL",slideShowContainer:"ryOPL",thinArrowsLargeSelectedCircleSkin:"kzd7P","nav-btn":"F0xz_",navBtn:"F0xz_","prev-btn":"jVsjd",prevBtn:"jVsjd","next-btn":"_2TsPM",nextBtn:"_2TsPM",slides:"_2d3PL","slides-dynamic-height":"_1TiyK",slidesDynamicHeight:"_1TiyK",shadowLayer:"_2hsOf","dots-nav-section":"_32vyV",dotsNavSection:"_32vyV","dots-nav-list":"_3Y1na",dotsNavList:"_3Y1na","nav-dot":"_35zcN",navDot:"_35zcN",selected:"_38brX",longArrowsLargeSelectedCircleSkin:"_1u0hf",squareButtonsSkin:"IR6Hs",StateBoxSkin:"_17v3a",stateBoxSkin:"_17v3a"}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements/dist/SlideShowContainer~StateBox.9afe6789.chunk.min.js.map