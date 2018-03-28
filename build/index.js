module.exports=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=6)}([function(a){function b(){throw new Error('setTimeout has not been defined')}function c(){throw new Error('clearTimeout has not been defined')}function d(a){if(j===setTimeout)return setTimeout(a,0);if((j===b||!j)&&setTimeout)return j=setTimeout,setTimeout(a,0);try{return j(a,0)}catch(b){try{return j.call(null,a,0)}catch(b){return j.call(this,a,0)}}}function e(a){if(k===clearTimeout)return clearTimeout(a);if((k===c||!k)&&clearTimeout)return k=clearTimeout,clearTimeout(a);try{return k(a)}catch(b){try{return k.call(null,a)}catch(b){return k.call(this,a)}}}function f(){o&&m&&(o=!1,m.length?n=m.concat(n):p=-1,n.length&&g())}function g(){if(!o){var a=d(f);o=!0;for(var b=n.length;b;){for(m=n,n=[];++p<b;)m&&m[p].run();p=-1,b=n.length}m=null,o=!1,e(a)}}function h(a,b){this.fun=a,this.array=b}function i(){}var j,k,l=a.exports={};(function(){try{j='function'==typeof setTimeout?setTimeout:b}catch(a){j=b}try{k='function'==typeof clearTimeout?clearTimeout:c}catch(a){k=c}})();var m,n=[],o=!1,p=-1;l.nextTick=function(a){var b=Array(arguments.length-1);if(1<arguments.length)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];n.push(new h(a,b)),1!==n.length||o||d(g)},h.prototype.run=function(){this.fun.apply(null,this.array)},l.title='browser',l.browser=!0,l.env={},l.argv=[],l.version='',l.versions={},l.on=i,l.addListener=i,l.once=i,l.off=i,l.removeListener=i,l.removeAllListeners=i,l.emit=i,l.prependListener=i,l.prependOnceListener=i,l.listeners=function(){return[]},l.binding=function(){throw new Error('process.binding is not supported')},l.cwd=function(){return'/'},l.chdir=function(){throw new Error('process.chdir is not supported')},l.umask=function(){return 0}},function(a){'use strict';function b(a){return function(){return a}}var c=function(){};c.thatReturns=b,c.thatReturnsFalse=b(!1),c.thatReturnsTrue=b(!0),c.thatReturnsNull=b(null),c.thatReturnsThis=function(){return this},c.thatReturnsArgument=function(a){return a},a.exports=c},function(a,b,c){'use strict';(function(b){var g=function(){};'production'!==b.env.NODE_ENV&&(g=function(a){if(a===void 0)throw new Error('invariant requires an error message argument')}),a.exports=function(h,i,j,a,b,c,d,e){if(g(i),!h){var f;if(void 0===i)f=new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');else{var k=[j,a,b,c,d,e],l=0;f=new Error(i.replace(/%s/g,function(){return k[l++]})),f.name='Invariant Violation'}throw f.framesToPop=1,f}}}).call(b,c(0))},function(a){'use strict';a.exports='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'},function(a,b,c){'use strict';(function(b){var d=c(1),e=d;if('production'!==b.env.NODE_ENV){var f=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];var e=0,f='Warning: '+a.replace(/%s/g,function(){return c[e++]});'undefined'!=typeof console&&console.error(f);try{throw new Error(f)}catch(a){}};e=function(a,b){if(b===void 0)throw new Error('`warning(condition, format, ...args)` requires a warning message argument');if(0!==b.indexOf('Failed Composite propType: ')&&!a){for(var c=arguments.length,d=Array(2<c?c-2:0),e=2;e<c;e++)d[e-2]=arguments[e];f.apply(void 0,[b].concat(d))}}}a.exports=e}).call(b,c(0))},function(a,b,c){'use strict';function d(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function e(c,d){if(!c)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return d&&('object'==typeof d||'function'==typeof d)?d:c}function f(c,d){if('function'!=typeof d&&null!==d)throw new TypeError('Super expression must either be null or a function, not '+typeof d);c.prototype=Object.create(d&&d.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(c,d):c.__proto__=d)}Object.defineProperty(b,'__esModule',{value:!0});var g=c(11),j=c.n(g),h=c(10),i=c.n(h),k=function(){function e(e,f){for(var b,c=0;c<f.length;c++)b=f[c],b.enumerable=b.enumerable||!1,b.configurable=!0,'value'in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}return function(a,b,c){return b&&e(a.prototype,b),c&&e(a,c),a}}(),l=function(c){function g(b){d(this,g);var a=e(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,b));return a.id='react-responsive-spritesheet--'+Math.random().toString(36).substring(7),a.spriteEl=a.spriteElContainer=a.spriteElMove=a.imageSprite=a.cols=a.rows=null,a.intervalSprite=!1,a.isResponsive=!1!==a.props.isResponsive,a.startAt=a.props.startAt?a.setStartAt(a.props.startAt):0,a.endAt=a.setEndAt(a.props.endAt),a.fps=a.props.fps,a.steps=a.props.steps,a.completeLoopCicles=0,a.isPlaying=!1,a.spriteScale=1,a.direction=a.setDirection(a.props.direction),a.frame=a.startAt?a.startAt:'rewind'===a.direction?a.steps-1:0,a}return f(g,c),k(g,[{key:'componentDidMount',value:function(){this.init()}},{key:'componentWillUnmount',value:function(){window.removeEventListener('resize',this.resize.bind(this))}},{key:'renderElements',value:function(){var k='',l='',m='',n='';this.props.background&&(k='url('+this.props.background+')',l=this.props.backgroundSize?this.props.backgroundSize:'cover',m=this.props.backgroundRepeat?this.props.backgroundRepeat:'no-repeat',n=this.props.backgroundPosition?this.props.backgroundPosition:'');var o={position:'relative',overflow:'hidden',width:this.props.widthFrame+'px',height:this.props.heightFrame+'px',transform:'scale('+this.spriteScale+')',transformOrigin:'0 0',backgroundImage:k,backgroundSize:l,backgroundRepeat:m,backgroundPosition:n},p={overflow:'hidden',backgroundRepeat:'no-repeat',display:'table-cell',backgroundImage:'url('+this.props.image+')',width:this.props.widthFrame+'px',height:this.props.heightFrame+'px',transformOrigin:'0 50%'},q=j.a.createElement('div',{className:'react-responsive-spritesheet-container__move',style:p}),g=j.a.createElement('div',{className:'react-responsive-spritesheet-container',style:o},q),h=j.a.createElement('div',{className:'react-responsive-spritesheet '+this.id+' '+(this.props.className?this.props.className:''),style:this.props.style,onClick:this.props.onClick?this.props.onClick.bind(this.setInstance(),this):null,onDoubleClick:this.props.onDoubleClick?this.props.onDoubleClick.bind(this.setInstance(),this):null,onMouseMove:this.props.onMouseMove?this.props.onMouseMove.bind(this.setInstance(),this):null,onMouseEnter:this.props.onMouseEnter?this.props.onMouseEnter.bind(this.setInstance(),this):null,onMouseLeave:this.props.onMouseLeave?this.props.onMouseLeave.bind(this.setInstance(),this):null,onMouseOver:this.props.onMouseOver?this.props.onMouseOver.bind(this.setInstance(),this):null,onMouseOut:this.props.onMouseOut?this.props.onMouseOut.bind(this.setInstance(),this):null,onMouseDown:this.props.onMouseDown?this.props.onMouseDown.bind(this.setInstance(),this):null,onMouseUp:this.props.onMouseUp?this.props.onMouseUp.bind(this.setInstance(),this):null},g);return h}},{key:'init',value:function(){var c=this,a=new Image;a.src=this.props.image,a.onload=function(){document&&document.querySelector('.'+c.id)&&(c.imageSprite=a,c.cols=c.imageSprite.width===c.props.widthFrame?1:c.imageSprite.width/c.props.widthFrame,c.rows=c.imageSprite.height===c.props.heightFrame?1:c.imageSprite.height/c.props.heightFrame,c.spriteEl=document.querySelector('.'+c.id),c.spriteElContainer=c.spriteEl.querySelector('.react-responsive-spritesheet-container'),c.spriteElMove=c.spriteElContainer.querySelector('.react-responsive-spritesheet-container__move'),c.resize(!1),window.addEventListener('resize',c.resize.bind(c)),c.moveImage(!1),setTimeout(function(){c.resize(!1)},10),!1!==c.props.autoplay&&c.play(!0),c.props.getInstance&&c.props.getInstance(c.setInstance()),c.props.onInit&&c.props.onInit(c.setInstance()))},a.onerror=function(){console.error('Failed to load image '+img.src)}}},{key:'resize',value:function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!0;this.isResponsive&&(this.spriteScale=this.spriteEl.offsetWidth/this.props.widthFrame,this.spriteElContainer.style.transform='scale('+this.spriteScale+')',this.spriteEl.style.height=this.getInfo('height')+'px',b&&this.props.onResize&&this.props.onResize(this.setInstance()))}},{key:'play',value:function(){var d=this,a=0<arguments.length&&void 0!==arguments[0]&&arguments[0],b=1<arguments.length&&void 0!==arguments[1]&&arguments[1];this.isPlaying||setTimeout(function(){d.props.onPlay&&d.props.onPlay(d.setInstance()),d.setIntervalPlayFunctions(),d.isPlaying=!0},a?this.props.timeout?this.props.timeout:0:0)}},{key:'setIntervalPlayFunctions',value:function(){var b=this;this.intervalSprite&&clearInterval(this.intervalSprite),this.intervalSprite=setInterval(function(){b.isPlaying&&b.moveImage()},1e3/this.fps)}},{key:'moveImage',value:function(){var e=this,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!0,b=Math.floor(this.frame/this.cols),c=this.frame-this.cols*b;this.spriteElMove.style.backgroundPosition='-'+this.props.widthFrame*c+'px -'+this.props.heightFrame*b+'px',this.props.onEnterFrame&&this.props.onEnterFrame.map(function(a){a.frame===e.frame&&a.callback&&a.callback()}),a&&('rewind'===this.direction?this.frame-=1:this.frame+=1,this.props.onEachFrame&&this.props.onEachFrame(this.setInstance())),this.isPlaying&&('forward'===this.direction&&(this.frame===this.steps||this.frame===this.endAt)||'rewind'===this.direction&&(-1===this.frame||this.frame===this.endAt))&&(this.props.loop?(this.props.onLoopComplete&&this.props.onLoopComplete(this.setInstance()),this.completeLoopCicles+=1,this.frame=this.startAt?this.startAt:'rewind'===this.direction?this.steps-1:0):this.pause())}},{key:'pause',value:function(){this.isPlaying=!1,clearInterval(this.intervalSprite),this.props.onPause&&this.props.onPause(this.setInstance())}},{key:'goToAndPlay',value:function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.frame=b,this.play()}},{key:'goToAndPause',value:function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.pause(),this.frame=b,this.moveImage()}},{key:'setStartAt',value:function(b){return this.startAt=b-1,this.startAt}},{key:'setEndAt',value:function(b){return this.endAt=b,this.endAt}},{key:'setFps',value:function(b){this.fps=b,this.setIntervalPlayFunctions()}},{key:'setDirection',value:function(b){return this.direction='rewind'===b?'rewind':'forward',this.direction}},{key:'getInfo',value:function(b){switch(b){case'direction':return this.direction;case'frame':return this.frame;case'fps':return this.fps;case'steps':return this.steps;case'width':return this.spriteElContainer.getBoundingClientRect().width;case'height':return this.spriteElContainer.getBoundingClientRect().height;case'scale':return this.spriteScale;case'isPlaying':return this.isPlaying;case'isPaused':return!this.isPlaying;case'completeLoopCicles':return this.completeLoopCicles;default:{console.error('Invalid param `'+b+'` requested by Spritesheet.getinfo(). See the documentation on https://github.com/danilosetra/react-responsive-spritesheet');break}}}},{key:'setInstance',value:function(){return{play:this.play.bind(this),pause:this.pause.bind(this),goToAndPlay:this.goToAndPlay.bind(this),goToAndPause:this.goToAndPause.bind(this),setStartAt:this.setStartAt.bind(this),setEndAt:this.setEndAt.bind(this),setFps:this.setFps.bind(this),setDirection:this.setDirection.bind(this),getInfo:this.getInfo.bind(this)}}},{key:'render',value:function(){return this.renderElements()}}]),g}(j.a.Component);l.propTypes={className:i.a.string,style:i.a.object,image:i.a.string.isRequired,widthFrame:i.a.number.isRequired,heightFrame:i.a.number.isRequired,isResponsive:i.a.bool,steps:i.a.number.isRequired,fps:i.a.number.isRequired,direction:i.a.string,timeout:i.a.number,autoplay:i.a.bool,loop:i.a.bool,startAt:i.a.number,endAt:i.a.number,background:i.a.string,backgroundSize:i.a.string,backgroundRepeat:i.a.string,backgroundPosition:i.a.string,getInstance:i.a.func,onClick:i.a.func,onDoubleClick:i.a.func,onMouseMove:i.a.func,onMouseEnter:i.a.func,onMouseLeave:i.a.func,onMouseOver:i.a.func,onMouseOut:i.a.func,onMouseDown:i.a.func,onMouseUp:i.a.func,onInit:i.a.func,onResize:i.a.func,onPlay:i.a.func,onPause:i.a.func,onLoopComplete:i.a.func,onEachFrame:i.a.func,onEnterFrame:i.a.array},b['default']=l},function(a,b,c){a.exports=c(5)},function(a,b,c){'use strict';(function(b){if('production'!==b.env.NODE_ENV)var d=c(2),e=c(4),f=c(3),g={};a.exports=function(a,c,h,i,j){if('production'!==b.env.NODE_ENV)for(var k in a)if(a.hasOwnProperty(k)){var l;try{d('function'==typeof a[k],'%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.',i||'React class',h,k),l=a[k](c,k,i,h,null,f)}catch(a){l=a}if(e(!l||l instanceof Error,'%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',i||'React class',h,k,typeof l),l instanceof Error&&!(l.message in g)){g[l.message]=!0;var m=j?j():'';e(!1,'Failed %s type: %s%s',h,l.message,null==m?'':m)}}}}).call(b,c(0))},function(a,b,c){'use strict';var d=c(1),e=c(2),f=c(3);a.exports=function(){function a(a,b,c,d,g,h){h===f||e(!1,'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types')}function b(){return a}a.isRequired=a;var c={array:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b};return c.checkPropTypes=d,c.PropTypes=c,c}},function(a,b,c){'use strict';(function(b){var d=c(1),e=c(2),f=c(4),g=c(3),h=c(7);a.exports=function(a,c){function i(a){var b=a&&(t&&a[t]||a[u]);if('function'==typeof b)return b}function j(a,b){return a===b?0!==a||1/a==1/b:a!==a&&b!==b}function k(a){this.message=a,this.stack=''}function l(a){function d(d,j,l,m,n,o,p){if(m=m||v,o=o||l,p!==g)if(c)e(!1,'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types');else if('production'!==b.env.NODE_ENV&&'undefined'!=typeof console){var q=m+':'+l;!h[q]&&3>i&&(f(!1,'You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',o,m),h[q]=!0,i++)}return null==j[l]?d?null===j[l]?new k('The '+n+' `'+o+'` is marked as required '+('in `'+m+'`, but its value is `null`.')):new k('The '+n+' `'+o+'` is marked as required in '+('`'+m+'`, but its value is `undefined`.')):null:a(j,l,m,n,o)}if('production'!==b.env.NODE_ENV)var h={},i=0;var j=d.bind(null,!1);return j.isRequired=d.bind(null,!0),j}function m(a){return l(function(b,c,d,e,f){var g=b[c],h=p(g);if(h!==a){var i=q(g);return new k('Invalid '+e+' `'+f+'` of type '+('`'+i+'` supplied to `'+d+'`, expected ')+('`'+a+'`.'))}return null})}function n(b){switch(typeof b){case'number':case'string':case'undefined':return!0;case'boolean':return!b;case'object':if(Array.isArray(b))return b.every(n);if(null===b||a(b))return!0;var c=i(b);if(c){var d,e=c.call(b);if(c!==b.entries){for(;!(d=e.next()).done;)if(!n(d.value))return!1;}else for(;!(d=e.next()).done;){var f=d.value;if(f&&!n(f[1]))return!1}}else return!1;return!0;default:return!1;}}function o(a,b){return'symbol'===a||'Symbol'===b['@@toStringTag']||'function'==typeof Symbol&&b instanceof Symbol}function p(a){var b=typeof a;return Array.isArray(a)?'array':a instanceof RegExp?'object':o(b,a)?'symbol':b}function q(a){if('undefined'==typeof a||null===a)return''+a;var b=p(a);if('object'===b){if(a instanceof Date)return'date';if(a instanceof RegExp)return'regexp'}return b}function r(a){var b=q(a);return'array'===b||'object'===b?'an '+b:'boolean'===b||'date'===b||'regexp'===b?'a '+b:b}function s(a){return a.constructor&&a.constructor.name?a.constructor.name:v}var t='function'==typeof Symbol&&Symbol.iterator,u='@@iterator',v='<<anonymous>>',w={array:m('array'),bool:m('boolean'),func:m('function'),number:m('number'),object:m('object'),string:m('string'),symbol:m('symbol'),any:function(){return l(d.thatReturnsNull)}(),arrayOf:function(a){return l(function(b,c,d,e,f){if('function'!=typeof a)return new k('Property `'+f+'` of component `'+d+'` has invalid PropType notation inside arrayOf.');var h=b[c];if(!Array.isArray(h)){var j=p(h);return new k('Invalid '+e+' `'+f+'` of type '+('`'+j+'` supplied to `'+d+'`, expected an array.'))}for(var l,m=0;m<h.length;m++)if(l=a(h,m,d,e,f+'['+m+']',g),l instanceof Error)return l;return null})},element:function(){return l(function(b,c,d,e,f){var g=b[c];if(!a(g)){var h=p(g);return new k('Invalid '+e+' `'+f+'` of type '+('`'+h+'` supplied to `'+d+'`, expected a single ReactElement.'))}return null})}(),instanceOf:function(a){return l(function(b,c,d,e,f){if(!(b[c]instanceof a)){var g=a.name||v,h=s(b[c]);return new k('Invalid '+e+' `'+f+'` of type '+('`'+h+'` supplied to `'+d+'`, expected ')+('instance of `'+g+'`.'))}return null})},node:function(){return l(function(a,b,c,d,e){return n(a[b])?null:new k('Invalid '+d+' `'+e+'` supplied to '+('`'+c+'`, expected a ReactNode.'))})}(),objectOf:function(a){return l(function(b,c,d,e,f){if('function'!=typeof a)return new k('Property `'+f+'` of component `'+d+'` has invalid PropType notation inside objectOf.');var h=b[c],i=p(h);if('object'!==i)return new k('Invalid '+e+' `'+f+'` of type '+('`'+i+'` supplied to `'+d+'`, expected an object.'));for(var j in h)if(h.hasOwnProperty(j)){var l=a(h,j,d,e,f+'.'+j,g);if(l instanceof Error)return l}return null})},oneOf:function(a){return Array.isArray(a)?l(function(b,c,d,e,f){for(var g=b[c],h=0;h<a.length;h++)if(j(g,a[h]))return null;var i=JSON.stringify(a);return new k('Invalid '+e+' `'+f+'` of value `'+g+'` '+('supplied to `'+d+'`, expected one of '+i+'.'))}):('production'===b.env.NODE_ENV?void 0:f(!1,'Invalid argument supplied to oneOf, expected an instance of array.'),d.thatReturnsNull)},oneOfType:function(a){if(!Array.isArray(a))return'production'===b.env.NODE_ENV?void 0:f(!1,'Invalid argument supplied to oneOfType, expected an instance of array.'),d.thatReturnsNull;for(var c,e=0;e<a.length;e++)if(c=a[e],'function'!=typeof c)return f(!1,'Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.',r(c),e),d.thatReturnsNull;return l(function(b,c,d,e,f){for(var h,j=0;j<a.length;j++)if(h=a[j],null==h(b,c,d,e,f,g))return null;return new k('Invalid '+e+' `'+f+'` supplied to '+('`'+d+'`.'))})},shape:function(a){return l(function(b,c,d,e,f){var h=b[c],i=p(h);if('object'!==i)return new k('Invalid '+e+' `'+f+'` of type `'+i+'` '+('supplied to `'+d+'`, expected `object`.'));for(var j in a){var l=a[j];if(l){var m=l(h,j,d,e,f+'.'+j,g);if(m)return m}}return null})}};return k.prototype=Error.prototype,w.checkPropTypes=h,w.PropTypes=w,w}}).call(b,c(0))},function(a,b,c){(function(b){if('production'!==b.env.NODE_ENV){var d='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103,e=function(a){return'object'==typeof a&&null!==a&&a.$$typeof===d};a.exports=c(9)(e,!0)}else a.exports=c(8)()}).call(b,c(0))},function(a){a.exports=require('react')}]);