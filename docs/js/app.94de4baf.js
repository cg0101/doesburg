(function(t){function e(e){for(var n,a,s=e[0],l=e[1],h=e[2],d=0,u=[];d<s.length;d++)a=s[d],r[a]&&u.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(u.length)u.shift()();return o.push.apply(o,h||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,s=1;s<i.length;s++){var l=i[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},r={app:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var h=0;h<s.length;h++)e(s[h]);var c=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("e2a1"),r=i.n(n);r.a},"382e":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".alt-grid-container{position:relative}.alt-grid-container .alt-grid-item{position:absolute;background:grey}.alt-grid-container .alt-grid-item.can-drag{cursor:move}.alt-grid-container.alt-grid-container-operating .alt-grid-item{-webkit-transition-duration:.3s;transition-duration:.3s}.alt-grid-container.alt-grid-container-operating .alt-grid-item.operated-item{-webkit-transition-duration:.1s;transition-duration:.1s}.alt-grid-container .alt-grid-item:hover .alt-grid-item-resize-handler{display:block}.alt-grid-container .alt-grid-item-resize-handler{display:none;position:absolute;right:1px;bottom:1px;cursor:se-resize}.alt-grid-container .alt-g-i-r-h-default-style{width:0;height:0;border-top:5px solid transparent;border-left:5px solid transparent;border-right:5px solid #000;border-bottom:5px solid #000}.alt-grid-item-drag-placeholder{position:absolute;width:0;height:0;background:red;visibility:hidden}.alt-grid-container-operating .alt-grid-item-drag-placeholder{visibility:visible}.alt-grid-container-operating{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.alt-grid-container-operating .mask{width:100%;height:100%;position:absolute;z-index:2}.alt-grid-container-operating.alt-move .mask{cursor:move}.alt-grid-container-operating.alt-resize .mask{cursor:se-resize}",""])},"3f8c":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".color0{background:#daa520!important}.color1{background:wheat!important}.color2{background:#0ff!important}.color3{background:#5f9ea0!important}.color4{background:orange!important}",""])},"4f6b":function(t,e,i){var n=i("382e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("499e").default;r("1d0f7901",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-screen",staticStyle:{"background-color":"#f4f6f9"},attrs:{id:"app"}},[i("div",{staticClass:"p-2 bg-white",staticStyle:{"border-bottom":"1px solid #d8dde8"}},[i("div",{staticClass:"text-center text-blue-500 text-2xl"},[t._v("Doesburg Grid Layout")]),i("div",[t._v(t._s(t.txt))]),i("div",[i("div",{staticClass:"layoutJSON"},[t._v("\n        Displayed as "),i("code",[t._v("[x, y, w, h]")]),t._v(":\n        "),i("div",{staticClass:"columns"},t._l(t.layout,function(e){return i("span",{key:e.i,staticClass:"layoutItem"},[i("b",[t._v(t._s(e.i))]),t._v(": ["+t._s(e.x)+", "+t._s(e.y)+", "+t._s(e.w)+", "+t._s(e.h)+"]\n          ")])}),0)])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.draggable,expression:"draggable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.draggable)?t._i(t.draggable,null)>-1:t.draggable},on:{change:function(e){var i=t.draggable,n=e.target,r=!!n.checked;if(Array.isArray(i)){var o=null,a=t._i(i,o);n.checked?a<0&&(t.draggable=i.concat([o])):a>-1&&(t.draggable=i.slice(0,a).concat(i.slice(a+1)))}else t.draggable=r}}}),t._v(" Draggable\n    "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.resizable,expression:"resizable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.resizable)?t._i(t.resizable,null)>-1:t.resizable},on:{change:function(e){var i=t.resizable,n=e.target,r=!!n.checked;if(Array.isArray(i)){var o=null,a=t._i(i,o);n.checked?a<0&&(t.resizable=i.concat([o])):a>-1&&(t.resizable=i.slice(0,a).concat(i.slice(a+1)))}else t.resizable=r}}}),t._v(" Resizable\n    "),i("div",{staticClass:"flex flex-col"},[i("div",{staticClass:"flex"},[i("div",{staticClass:"flex"},[t._v("\n          Row Height:\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.rowHeight,expression:"rowHeight"}],staticClass:"border pl-2",attrs:{type:"number"},domProps:{value:t.rowHeight},on:{input:function(e){e.target.composing||(t.rowHeight=e.target.value)}}})]),i("div",{staticClass:"flex ml-2"},[t._v("\n          Col Nums:"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.colNumStr,expression:"colNumStr"}],staticClass:"border pl-2",attrs:{type:"number"},domProps:{value:t.colNumStr},on:{input:function(e){e.target.composing||(t.colNumStr=e.target.value)}}})])]),i("div",{staticClass:"flex"},[i("div",{staticClass:"flex"},[t._v("\n          Right Margin\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.margin[0],expression:"margin[0]"}],staticClass:"border pl-2",attrs:{type:"number"},domProps:{value:t.margin[0]},on:{input:function(e){e.target.composing||t.$set(t.margin,0,e.target.value)}}})]),i("div",{staticClass:"flex ml-2"},[t._v("\n          Bottom Margin\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.margin[1],expression:"margin[1]"}],staticClass:"border pl-2",attrs:{type:"number"},domProps:{value:t.margin[1]},on:{input:function(e){e.target.composing||t.$set(t.margin,1,e.target.value)}}})])]),i("div",{staticClass:"flex"},[t._v("\n        Background Color\n        "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bgcolor,expression:"bgcolor"}],staticClass:"border pl-2",attrs:{type:"text"},domProps:{value:t.bgcolor},on:{input:function(e){e.target.composing||(t.bgcolor=e.target.value)}}})])]),i("div",[i("button",{staticClass:"bg-blue-500 text-white p-1",on:{click:t.addItem}},[t._v("\n        addItem\n      ")])])]),i("div",{attrs:{id:"content"}},[i("div",{staticClass:"pb-44",attrs:{id:"container"}},[i("grid",{directives:[{name:"show",rawName:"v-show",value:t.isGridShow,expression:"isGridShow"}],ref:"altGrid",staticClass:"nihao",attrs:{layout:t.layout,"is-draggable":t.draggable,"is-resizable":t.resizable,"row-height":Number(t.rowHeight),margin:t.margin,backgroundColor:t.bgcolor,"col-num":t.colNum,"grid-item-class":"ceshi-global-item","close-handler-class":"ceshi-global-close","resize-handler-class":"alt-g-i-r-h-default-style","placeholder-class":"ceshi-global-placeholder"},on:{updated:t.gridUpdated,"update:layout":function(e){t.layout=e}}})],1)])])},o=[],a=(i("c5f6"),i("cebc")),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alt-grid-container",class:t.operatorClass,style:t.containerStyle},[i("div",{staticClass:"alt-grid-item-drag-placeholder",class:t.placeholderClass,style:t.getCardStyleForPlaceholder(t.placeholder)}),t._l(t.innerLayout,function(e,n){return i("div",{key:e._id,ref:"cards",refInFor:!0,staticClass:"alt-grid-item",class:[t.canDragClass(e.isDraggable),t.gridItemClass,e.gridItemClass],style:e._alt_style,attrs:{"dg-id":e._id}},[t.getFirstSetValue(e.isShowOriginCloseBtn,t.isShowOriginCloseBtn,!0)?i("button",{class:[t.closeHandlerClass,e.closeHandlerClass],on:{click:function(i){return t.closeWidget(e._id)}}},[t._v("关闭")]):t._e(),i(e.type,{ref:e._id,refInFor:!0,tag:"component",attrs:{"alt-card-props":t.getPropsForInject(n,e)}}),t.getFirstSetValue(e.isResizable,t.isResizable,!0)?i("span",{staticClass:"alt-grid-item-resize-handler",class:[t.resizeHandlerClass,e.resizeHandlerClass]}):t._e()],1)}),i("div",{staticClass:"mask"})],2)},l=[];i("4917"),i("386d"),i("456d"),i("a481"),i("ac6a"),i("28a5"),i("3b2b"),i("7cdf"),i("6b54");function h(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function c(t){return void 0===t||null===t}function d(){var t=n["a"];return t||(window.Vue?window.Vue:null)}function u(t,e){var i=new RegExp("(\\s|^)"+e+"(\\s|$)"),n=t.className;return i.test(n)}function m(t,e,i){for(var n=null,r=0,o=t.length;r<o;r++){if(n=t[r],u(n,e))return n;if(u(n,i))return null}return null}function f(){for(var t=arguments,e=t.length,i=0;i<e;i++)if(!c(t[i]))return t[i];return t[e-1]}function g(t,e){if(t&&t.length)for(var i=0,n=t.length;i<n;i++)e&&e(t[i],i)}function p(t,e,i){for(var n=0;n<t.length;n++)if(i){if(t[n][i]===e)return n}else if(t[n]===e)return n;return-1}function v(t){var e=t.target||null,i=[e];if(!e||!e.parentElement)return[];while(e.parentElement)e=e.parentElement,i.unshift(e);return i}function y(t){var e=t;return e.path||(e.path=e.composedPath&&e.composedPath()||v(t)),e}function x(t,e,i){for(var n=e.querySelectorAll(i),r=0,o=n.length;r<o;r++)if(n[r]===t)return!0;return!1}var w=navigator.platform,b=["Mac68K","MacPPC","Macintosh","MacIntel"].indexOf(w)>-1,C={isMac:b},_=C;function k(t,e){if(!(t instanceof HTMLElement))throw new TypeError("第一个参数必须是一个html元素");if(/^(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr|script|style|textarea|title)$/i.test(t.tagName))throw new TypeError("不支持当前元素类型，可以尝试使用div");if("function"!==typeof e)throw new TypeError("第二个参数必须是一个函数");this.el=t,this.handler=e,this.hadInitScrollListener=!1,this.checkHidden()}k.prototype.checkHidden=function(){var t=this;requestAnimationFrame(function(){var e=t.el.offsetWidth,i=t.el.offsetHeight;0===e&&0===i?t.checkHidden():(t.handler(),t.init(),t.hadInitScrollListener=!0)})},k.prototype.init=function(){this.lastWidth=this.el.offsetWidth||1,this.lastHeight=this.el.offsetHeight||1,this.maxWidth=1e4*this.lastWidth,this.maxHeight=1e4*this.lastHeight,this.newWidth=0,this.newHeight=0,this.expand=document.createElement("div"),this.expand.style.cssText="position:absolute;top:0;bottom:0;left:0;right:0;z-index=-10000;overflow:hidden;visibility:hidden;",this.shrink=this.expand.cloneNode(!1);var t=document.createElement("div");t.style.cssText="transition:0s;animation:none;";var e=t.cloneNode(!1);t.style.width=this.maxWidth+"px",t.style.height=this.maxHeight+"px",e.style.width="250%",e.style.height="250%",this.expand.appendChild(t),this.shrink.appendChild(e),this.el.appendChild(this.expand),this.el.appendChild(this.shrink),this.expand.offsetParent!==this.el&&(this.el.style.position="relative"),this.expand.scrollTop=this.shrink.scrollTop=this.maxHeight,this.expand.scrollLeft=this.shrink.scrollLeft=this.maxWidth,this.bindOnScroll=null,this.addListener()},k.prototype.onScroll=function(){this.newWidth=this.el.offsetWidth||1,this.newHeight=this.el.offsetHeight||1,this.newWidth===this.lastWidth&&this.newHeight===this.lastHeight||requestAnimationFrame(this.onResize.bind(this)),this.expand.scrollTop=this.shrink.scrollTop=this.maxHeight,this.expand.scrollLeft=this.shrink.scrollLeft=this.maxWidth},k.prototype.onResize=function(){this.lastWidth=this.newWidth,this.lastHeight=this.newHeight,this.handler(this.lastWidth,this.lastHeight)},k.prototype.addListener=function(){this.bindOnScroll=this.onScroll.bind(this),this.expand.addEventListener("scroll",this.bindOnScroll,!1),this.shrink.addEventListener("scroll",this.bindOnScroll,!1)},k.prototype.removeListener=function(){this.expand.removeEventListener("scroll",this.bindOnScroll,!1),this.shrink.removeEventListener("scroll",this.bindOnScroll,!1)},k.prototype.destroy=function(){this.hadInitScrollListener&&(this.removeListener(),this.el.removeChild(this.expand),this.el.removeChild(this.shrink))};var I=k,S=(i("6c7b"),i("d225")),H=i("b0b4"),W=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;Object(S["a"])(this,t),this.appendUniqueId(e),this.x=this.isNotNegativeNumber(e.x)?e.x:0,this.y=this.isNotNegativeNumber(e.y)?e.y:0,this.w=this.isPositiveNumber(e.w)?e.w:1,this.h=this.isPositiveNumber(e.h)?e.h:1,this.id=e._id,this.rawInfo=e,this.coors=i}return Object(H["a"])(t,[{key:"setPos",value:function(t){for(var e,i,n=["x","y","w","h"],r=0,o=n.length;r<o;r++)e=n[r],i=t[e],c(i)||(this[e]=i,this.rawInfo[e]=i)}},{key:"moveTo",value:function(t,e){this.coors.maxWidth&&t+this.w>this.coors.maxWidth&&(t=this.coors.maxWidth-this.w),t<0&&(t=0),e<0&&(e=0),this.coors._moveTo(this.id,{x:t,y:e})}},{key:"resizeTo",value:function(t,e){this.coors.maxWidth&&t+this.x>this.coors.maxWidth&&(t=this.coors.maxWidth-this.x),t<1&&(t=1),e<1&&(e=1),this.coors._resizeTo(this.id,{w:t,h:e})}},{key:"moveDown",value:function(t){this.coors._moveDown(this.id,t)}},{key:"fill",value:function(t){this.coors.coorsFillRect(this.x,this.y,this.w,this.h,t)}},{key:"isPositiveNumber",value:function(t){return!c(t)&&t>0}},{key:"isNotNegativeNumber",value:function(t){return!c(t)&&t>=0}},{key:"appendUniqueId",value:function(t){t._id||(t._id=this.getUniqueId())}},{key:"getUniqueId",value:function(t,e){var i,n,r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),o=[];if(e=e||r.length,t)for(i=0;i<t;i++)o[i]=r[0|Math.random()*e];else for(o[8]=o[13]=o[18]=o[23]="-",o[14]="4",i=0;i<36;i++)o[i]||(n=0|16*Math.random(),o[i]=r[19==i?3&n|8:n]);return o.join("")}}]),t}(),z=W,E=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(S["a"])(this,t),this.coors=[],this.coorItemsMap={},this.maxWidth=e.maxWidth}return Object(H["a"])(t,[{key:"add",value:function(t){var e=new z(t,this);return this.distributeRectPosition(e),this.coorsFillRect(e.x,e.y,e.w,e.h,e),this.coorItemsMap[e.id]=e,e}},{key:"coorsFillRect",value:function(t,e,i,n,r){for(var o,a=this.coors,s=e;s<e+n;s++){o=a[s],c(o)&&(a[s]=[]);for(var l=t;l<t+i;l++)a[s][l]=r}}},{key:"coorsGetRectItems",value:function(t,e,i,n){for(var r,o,a=[],s=e;s<e+n;s++){r=this.coors[s]||[];for(var l=t;l<t+i;l++)o=r[l],c(o)||a.push(o)}return a}},{key:"distributeRectPosition",value:function(t){if(!this.checkRectPositionIsLegal(t,this.coors)){var e=this.getLegalPosition(t,this.coorItemsMap);t.setPos(e)}}},{key:"getLegalPosition",value:function(t,e){var i=t.x,n=t.y,r=t.w,o=t.h,a=[],s=null,l=0;g(Object.keys(e),function(t){s=e[t],l=s.y+s.h;for(var i=s.x;i<s.x+s.w;i++)l>(a[i]||0)&&(a[i]=l)});for(var h=this.maxWidth||a.length+r,d=0;d<h;d++)c(a[d])&&(a[d]=0);var u=this.getMinPeek(a,r);return i=~u?u:0,n=a[i]||0,{x:i,y:n,w:r,h:o}}},{key:"getMinPeek",value:function(t,e){if(1===e){var i=Math.min.apply(null,t);return t.indexOf(i)}for(var n=-1,r=1/0,o=0;o<t.length-e+1;o++){for(var a=!0,s=t[o],l=o+1;l<o+e;l++)if(s<t[l]){a=!1;break}a&&s<r&&(r=s,n=o)}return n}},{key:"checkRectPositionIsLegal",value:function(t,e){for(var i=t.x,n=t.y,r=t.w,o=t.h,a=n;a<n+o;a++)if(!c(e[a]))for(var s=i;s<i+r;s++)if(!c(e[a][s]))return!1;return!0}},{key:"_moveTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!c(e.x)&&!c(e.y)){var i=this.coorItemsMap[t];i.fill(null);var n={x:e.x,y:e.y,w:i.w,h:i.h},r=this.coorsGetFirstItemForColsInRect(n),o={x:n.x,y:n.y+n.h,w:n.w};g(r,function(t){t.moveDown(o.y-t.y)}),i.setPos(n),this.coorsFillRect(n.x,n.y,n.w,n.h,i),this._moveUpAll()}}},{key:"_resizeTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!c(e.w)&&!c(e.h)){var i=this.coorItemsMap[t];i.fill(null);var n={x:i.x,y:i.y,w:e.w,h:e.h},r=this.coorsGetFirstItemForColsInRect(n),o={x:n.x,y:n.y+n.h,w:n.w};g(r,function(t){t.moveDown(o.y-t.y)}),i.setPos(n),i.fill(i),this._moveUpAll()}}},{key:"_moveDown",value:function(t,e){var i=this.coorItemsMap[t];i.fill(null);var n=this.coorsGetFirstItemForColsInRect({x:i.x,y:i.y+i.h,w:i.w,h:i.h+e}),r={x:i.x,y:i.y+i.h+e,w:i.w};g(n,function(t){t.moveDown(r.y-t.y)}),i.setPos({y:i.y+e}),i.fill(i)}},{key:"coorsGetFirstItemForColsInRect",value:function(t){for(var e,i,n=t.x,r=t.y,o=t.w,a=t.h,s=[],l=[],h=r;h<r+a;h++){e=this.coors[h]||[];for(var d=n;d<n+o;d++)i=e[d],c(i)||l[d]||!this.checkLineIsLegal(i,l)||(l[d]=i,~s.indexOf(i)||s.push(i));if(s.length>=o)break}return s}},{key:"checkLineIsLegal",value:function(t,e){for(var i=t.x;i<t.x+t.w;i++)if(!c(e[i])&&t!==e[i])return!1;return!0}},{key:"getEmptyRowsBeforeLine",value:function(t,e,i){if(0===e)return 0;for(var n,r,o=0,a=e-1;a>=0;a--){n=this.coors[a]||[];for(var s=t;s<t+i;s++)if(r=n[s],!c(r))return o;o++}return o}},{key:"_moveUpAll",value:function(){var t=this;g(this.coors,function(e){g(e||[],function(e){if(e&&0!==e.y){var i=t.getEmptyRowsBeforeLine(e.x,e.y,e.w);e.fill(null),e.setPos({y:e.y-i}),e.fill(e)}})})}},{key:"clear",value:function(){this.coors=[],this.coorItemsMap={}}},{key:"batchAddItem",value:function(t){var e=this;g(t,function(t){e.add(t)}),this._moveUpAll()}},{key:"getAllItems",value:function(){var t=[],e=this.coorItemsMap;return g(Object.keys(e),function(i){t.push(e[i].rawInfo)}),t}},{key:"remove",value:function(t){var e=this.coorItemsMap[t];return e&&(e.fill(null),delete this.coorItemsMap[t],this._moveUpAll()),e}},{key:"replace",value:function(t,e){var i=this.coorItemsMap[t];if(i&&i.x===e.x&&i.y===e.y&&i.w===e.w&&i.h===e.h){i.fill(null),delete this.coorItemsMap[t];var n=new z(e,this);return n.fill(n),this.coorItemsMap[n.id]=n,n}return null}},{key:"getItemById",value:function(t){return this.coorItemsMap[t]}}]),t}(),L=E;function O(t,e){t.coors.moveItemTo(e[6],{x:2,y:1})}var R,$,M,N,P,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},D=[],j={props:["altCardProps"]},F=j,A=i("2877"),B=Object(A["a"])(F,T,D,!1,null,null,null),V=B.exports,G={props:["altCardProps"],template:"<div></div>"},U=G,q=Object(A["a"])(U,R,$,!1,null,null,null),J=q.exports,X={props:["altCardProps"]},Y=X,Z=Object(A["a"])(Y,M,N,!1,null,null,null),K=Z.exports,Q={layout:{type:Array,default:function(){return[]}},isDraggable:{type:Boolean,default:!0},isResizable:{type:Boolean,default:!0},rowHeight:{type:Number,default:150,validator:function(t){return!isNaN(t)&&t>0}},maxRows:{type:Number,default:1/0},margin:{type:Array,default:function(){return[10,10]}},colNum:{type:Number,default:12},backgroundColor:{type:String,default:"rgba(200,200,200,1)"},gridItemClass:{type:String,default:""},closeHandlerClass:{type:String,default:""},resizeHandlerClass:{type:String,default:"alt-g-i-r-h-default-style"},placeholderClass:{type:String,default:""},isShowOriginCloseBtn:{type:Boolean,default:!0},width:{type:[Number,Boolean],default:!1}},tt=Q,et=d(),it={name:"alt-grid-layout",addWidgetType:function(){var t=arguments[0],e=h(t);if("string"===e)this._addWidgetType.apply(this,arguments);else if("object"===e)for(var i in t)t.hasOwnProperty(i)&&this._addWidgetType(i,t[i])},_addWidgetType:function(t,e){var i=e.template?J:V;e.super!=et?this.components[t]=Object(a["a"])({},e,{extends:i}):this.components[t]=e.extend(K)},props:tt,data:function(){return{innerLayout:[],defVal:{minH:1,minW:1,maxH:1/0,maxW:1/0,isDraggable:!0,isResizable:!0,isShowOriginCloseBtn:!0,dragIgnoreFrom:"a, input, button, textarea"},containerHeight:0,cols:[],cacheComputed:{},placeholder:null,preOperator:0,operator:0,operatedItem:null,containerWidth:0,boxWatchHandler:null,coors:null,timer:null,animation:null,animationHandler:null,eventHandler:{mousedown:null,mousemove:null,mouseup:null}}},mounted:function(){var t=this;this.initCols(),!1===this.width&&(this.boxWatchHandler=new I(this.$el,function(){t.initCols()})),this.bindEvents(),this.setLayout(this.layout)},destroyed:function(){this.boxWatchHandler.destroy(),this.unbindEvents(),clearTimeout(this.timer)},watch:{rowHeight:function(){this.reRenderStyle({triggerEventEnd:!0,onlyReRender:!0})},colNum:function(t){this.coors&&(this.coors.setMaxWidth=parseInt(t)),this.initCols()},cols:function(){this.cacheComputed={},this.operator||this.reRenderStyle({triggerEventEnd:!0,onlyReRender:!0})},margin:function(){this.cacheComputed={},this.reRenderStyle()},backgroundColor:function(){this.forceReRenderStyle()},width:function(){this.initCols()}},computed:{containerStyle:function(){return{height:this.containerHeight+"px"}},operatorClass:function(){return this.operator?1===this.operator?"alt-grid-container-operating alt-move":2===this.operator?"alt-grid-container-operating alt-resize":"":""}},methods:{resetResize:function(){var t=this;this.boxWatchHandler.destroy(),this.boxWatchHandler=new I(this.$el,function(){t.initCols()})},bindEvents:function(){this.eventHandler.mousedown=this.mousedown.bind(this),this.eventHandler.mousemove=this.mousemove.bind(this),this.eventHandler.mouseup=this.mouseup.bind(this),this.$el.addEventListener("mousedown",this.eventHandler.mousedown),document.addEventListener("mousemove",this.eventHandler.mousemove),document.addEventListener("mouseup",this.eventHandler.mouseup)},unbindEvents:function(){this.$el.removeEventListener("mousedown",this.eventHandler.mousedown),document.removeEventListener("mousemove",this.eventHandler.mousemove),document.removeEventListener("mouseup",this.eventHandler.mouseup)},canDragClass:function(t){return f(t,this.isDraggable,!0)?"can-drag":""},forceReRenderStyle:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.innerLayout.forEach(function(e){var i=t.getCardStyle(e);t.$set(e,"_alt_style",i)})},10)},reRenderStyle:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.ignoreId,n=e.triggerEventEnd,r=e.onlyReRender;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.containerHeight=0,t.innerLayout.forEach(function(e,o){if(e._id!==i){var a=t.$refs.cards[o],s={style:a.style,width:a.style.width,height:a.style.height,transform:a.style.transform};s.transform&&(s.transform=s.transform.replace(/\s/g,""));var l=t.getCardStyle(e,!0);t.$set(e,"_alt_style",l.style);var h=t.getCardRectChangeStatus(s,l,["width","height","transform"],{triggerEventEnd:n});"none"!==h&&t.dispatchEvent(e._id,h,{w:e.w,h:e.h,x:e.x,y:e.y,layout:t.innerLayout,onlyReRender:r})}})},10)},getCardRectChangeStatus:function(t,e,i){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=n.triggerEventEnd,o=i||Object.keys(t),a=0,s=o.length;a<s;a++){var l=o[a];if(t[l]!==e[l]){if("width"===l||"height"===l)return r?"resized":"resize";if("transform"===l)return r?"moved":"move"}}return"none"},dispatchEvent:function(t,e,i){var n=this;this.$nextTick(function(){n.$nextTick(function(){n.$refs[t]&&n.$refs[t][0].$emit(e,i)})})},getFirstSetValue:function(){return f.apply(void 0,arguments)},getPropsForInject:function(t,e){return{id:e._id,card:e,layout:this.innerLayout,close:this.closeWidget.bind(this,e._id)}},initCols:function(){var t=0;if(t=!1===this.width?this.$el.clientWidth:this.width>0?this.width:0,this.colNum!==this.cols.length||!this.containerWidth||this.containerWidth!==t){this.containerWidth=t;for(var e=this.colNum,i=[],n=t%e,r=Math.floor(t/e),o=0;o<e;o++)n?(i[o]=r+1,n--):i[o]=r;this.cols=i}},setLayout:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.coors||(this.coors=new L({maxWidth:this.colNum})),this.coors.clear(),this.coors.batchAddItem(e);var i=this.coors.getAllItems();i.forEach(function(e){var i=t.getCardStyle(e);t.$set(e,"_alt_style",i)}),this.innerLayout=i,/_env=altdev/.test(window.location.search)&&O(this,this.innerLayout)},setContainerHeight:function(t,e){var i=this.containerHeight,n=t+e;n>i&&(this.containerHeight=n)},getCardStyle:function(t,e){if(!t)return{};var i=this.computeColsWidth(0,t.x)+"px",n=this.getCardWidth(t.x,t.x+t.w)+"px",r=t.y*this.rowHeight,o=r+"px",a=t.h*this.rowHeight-this.margin[1],s=a+"px";this.setContainerHeight(r,a);var l="";l=_.isMac?"translate(".concat(i,",").concat(o,")"):"translate3d(".concat(i,",").concat(o,",0px)");var h="transform:".concat(l,";width:").concat(n,";height:").concat(s,";background-color:").concat(this.backgroundColor,";");return e?{style:h,x:i,y:r,width:n,height:a,transform:l}:h},getCardStyleForRealTime:function(t){if(t){var e=t.w,i=t.x;i<0?i=0:i+e>this.containerWidth&&(i=this.containerWidth-e);var n=t.y;n<0&&(n=0);var r="transform:translate3d(".concat(i,"px,").concat(n,"px,0);"),o="".concat(r,"width:").concat(e,"px;height:").concat(t.h,"px;background-color:").concat(this.backgroundColor,";z-index:1;");return o}},getCardStyleForPlaceholder:function(t){if(!t)return{};var e=this.computeColsWidth(0,t.x),i=this.getCardWidth(t.x,t.x+t.w),n=t.y*this.rowHeight,r=t.h*this.rowHeight-this.margin[1];this.setContainerHeight(n,r);var o="transform:translate3d(".concat(e,"px,").concat(n,"px,0);"),a="".concat(o,"width:").concat(i,"px;height:").concat(r,"px;");return a},getCardWidth:function(t,e){var i=this.computeColsWidth(t,e);return e!==this.cols.length&&(i-=this.margin[0]),i},computeColsWidth:function(t,e){var i=t+";"+e;if(this.cacheComputed[i])return this.cacheComputed[i];for(var n=this.cols,r=0,o=t;o<e;o++)r+=n[o];return this.cacheComputed[i]=r,r},computeRowsHeight:function(t,e){return(e-t)*this.rowHeight},mousedown:function(t){this.mousedownTimeStamp=(new Date).getTime();var e=y(t),i=e.srcElement,n=e.target,r=m(e.path,"alt-grid-item","alt-grid-container");if(r){var o=this.getDragId(r),a=this.getNodeByDragId(o);if(u(n,this.resizeHandlerClass)){if(!f(a.isResizable,this.isResizable,this.defVal.isResizable))return;this.preOperator=2}if(r&&!this.preOperator){if(!f(a.isDraggable,this.isDraggable,this.defVal.isDraggable))return;var s=f(a.dragIgnoreFrom,this.defVal.dragIgnoreFrom);if(x(n,r,s))return;this.preOperator=1}if(r||this.preOperator){var l=r.style,h=l.transform.match(/\(([-.\d]*)px, ([-.\d]*)px/);this.operatedItem={srcElement:i,el:r,node:a,dragId:o,linkEmit:this.$refs[o]?this.$refs[o][0].$emit:function(){},startX:e.clientX,startY:e.clientY,cacheStyle:{x:parseInt(h[1]),y:parseInt(h[2]),w:parseInt(l.width.match(/\d+/)[0]),h:parseInt(l.height.match(/\d+/)[0])}},this.placeholder={_id:"__placeHolder__",x:a.x,y:a.y,w:a.w,h:a.h},this.coors.replace(a._id,this.placeholder)}}},mousemove:function(t){if(this.preOperator){this.operator=this.preOperator,this.operatedItem.el.classList.add("operated-item");var e=t.clientX,i=t.clientY,n=this.operatedItem.startX,r=this.operatedItem.startY;1===this.operator?this.dragMove(this.operatedItem,n,r,e,i):2===this.operator&&this.resizeMove(this.operatedItem,n,r,e,i)}},mouseup:function(){var t=(new Date).getTime();t-this.mousedownTimeStamp<10&&this.operatedItem&&this.operatedItem.srcElement&&this.operatedItem.srcElement.click();var e=this.operatedItem;e&&(this.applyChange(),this.$set(e.node,"_alt_style",this.getCardStyle(e.node)),this.coors.replace(this.placeholder._id,e.node)),this.clearDragEnv(),this.$emit("update:layout",this.innerLayout)},applyChange:function(){var t=this.placeholder.x,e=this.placeholder.y,i=this.placeholder.w,n=this.placeholder.h,r=this.operatedItem.dragId,o=this.operatedItem.node;if(1===this.operator){if(o.x===t&&o.y===e)return;o.x=t,o.y=e,this.dispatchEvent(r,"moved",{x:t,y:e,w:o.w,h:o.h,layout:this.innerLayout})}else if(2===this.operator){if(o.w===i&&o.h===n)return;o.w=this.placeholder.w,o.h=this.placeholder.h,o.x=this.placeholder.x,o.y=this.placeholder.y,this.dispatchEvent(r,"resized",{x:t,y:e,w:i,h:n,layout:this.innerLayout})}},clearDragEnv:function(){this.preOperator=0,this.operator=0,this.operatedItem=null,this.placeholder=null},getNodeByDragId:function(t){var e=p(this.innerLayout,t,"_id");return-1===e?null:this.innerLayout[e]},getDragId:function(t){return t.getAttribute("dg-id")},dragMove:function(t,e,i,n,r){var o=this.placeholder,a=t.cacheStyle,s=n-e,l=r-i,h=s>0?t.node.x+t.node.w:t.node.x,c=this.getMoveCols(s,h),d=this.getMoveRows(l,t.node.y),u=t.node.x+c,m=t.node.y+d;this.coors.getItemById(o._id).moveTo(u,m);var f=a.x+s,g=a.y+l;t.node["_alt_style"]=this.getCardStyleForRealTime({x:f,y:g,w:a.w,h:a.h}),this.reRenderStyle({ignoreId:t.dragId}),this.dispatchEvent(t.dragId,"move",{x:this.placeholder.x,y:this.placeholder.y,w:this.placeholder.w,h:this.placeholder.h,layout:this.innerLayout})},resizeMove:function(t,e,i,n,r){var o=this.placeholder,a=t.node,s=t.cacheStyle,l=n-e,h=r-i,c=this.getMoveCols(l,a.x+a.w),d=this.getMoveRows(h,a.y+a.h),u=this.getItemLegalSize(a,{w:a.w+c,h:a.h+d});this.coors.getItemById(o._id).resizeTo(u.w,u.h);var m=this.getItemLegalSizeInPixies(a,{width:s.w+l,height:s.h+h});s.x+m.width>this.containerWidth&&(m.width=this.containerWidth-s.x),t.node["_alt_style"]=this.getCardStyleForRealTime({x:s.x,y:s.y,w:m.width,h:m.height}),this.reRenderStyle({ignoreId:t.dragId}),this.dispatchEvent(t.dragId,"resize",{x:this.placeholder.x,y:this.placeholder.y,w:this.placeholder.w,h:this.placeholder.h,layout:this.innerLayout})},getItemLegalSizeInPixies:function(t,e){var i=this.getPixiesLimit(t),n=e.width,r=e.height;return n>i.maxWidth?n=i.maxWidth:n<i.minWidth-10&&(n=i.minWidth-10),r>i.maxHeight?r=i.maxHeight:r<i.minHeight-10&&(r=i.minHeight-10),{width:n,height:r}},getPixiesLimit:function(t){var e={minWidth:0,minHeight:0,maxWidth:1/0,maxHeight:1/0},i=f(t.minW,this.defVal.minW),n=f(t.minH,this.defVal.minH);return i&&i>0&&(e.minWidth=this.getCardWidth(t.x,t.x+i)),n&&n>0&&(e.minHeight=n*this.rowHeight-this.margin[1]),t.maxW&&t.maxW>0&&(e.maxWidth=this.getCardWidth(t.x,t.x+t.maxW)),t.maxH&&t.maxH>0&&(e.maxHeight=t.maxH*this.rowHeight-this.margin[1]),e},getMoveCols:function(t,e){if(e<=0&&t<0)return 0;var i=t<0?"-":"+",n=Math.abs(t);if(n<15)return 0;var r=0,o=e;while(n>0)if("-"===i){if(o--,n-=this.cols[o]||0,r++,o<=0)break}else if(o++,n-=this.cols[o]||0,r++,o>=this.cols.length)break;return parseInt(i+r)},getMoveRows:function(t,e){if(e<=0&&t<0)return 0;var i=t<0?"-":"+",n=Math.abs(t);if(n<this.rowHeight/2)return 0;var r=0,o=e;while(n>0)if("-"===i){if(n-=this.rowHeight,r++,o--,o<=0)break}else n-=this.rowHeight,r++,o++;return parseInt(i+r)},addItem:function(t){this.coors||this.setLayout();var e=this.coors.add(t),i=this.getCardStyle(e);return this.$set(e.rawInfo,"_alt_style",i),this.innerLayout.push(e.rawInfo),this.$emit("update:layout",this.innerLayout),e.id},deleteItem:function(t){return this.closeWidget(t)},getAllItems:function(){return this.innerLayout},getItemLegalSize:function(t,e){var i=f(t.minH,this.defVal.minH),n=f(t.minW,this.defVal.minW),r=f(t.maxH,this.defVal.maxH),o=f(t.maxW,this.defVal.maxW),a=e.h,s=e.w;return e.h<=i&&(a=i),e.h>=r&&(a=r),e.w<=n&&(s=n),e.w>=o&&(s=o),{h:a,w:s}},closeWidget:function(t){var e=p(this.innerLayout,t,"_id");if(-1===e)return!1;var i=this.innerLayout[e];this.coors.remove(i._id),this.innerLayout.splice(e,1),this.reRenderStyle(),this.clearDragEnv(),this.$emit("update:layout",this.innerLayout)}},updated:function(){this.$emit("updated")}},nt=it,rt=(i("d812"),Object(A["a"])(nt,s,l,!1,null,null,null)),ot=rt.exports;function at(t){function e(){var t=this.$options;t.altStore?this.$altStore=t.altStore:t.parent&&t.parent.$altStore&&(this.$altStore=t.parent.$altStore)}t.mixin({beforeCreate:e})}function st(t,e){Object.keys(t).forEach(function(i){return e(t[i],i)})}var lt=function(){function t(e){Object(S["a"])(this,t),this._mutations=Object.create(null),this.initVm(e.state),this.initMutations(e.mutations)}return Object(H["a"])(t,[{key:"commit",value:function(t,e){var i=this._mutations[t];i?i.forEach(function(t){t(e)}):console.error("[altStore] unknown commit type.")}},{key:"getOriginState",value:function(){return this._vm._data.$$state}},{key:"initMutations",value:function(t){var e=this,i=this.getOriginState();st(t,function(t,n){var r=e._mutations[n]||(e._mutations[n]=[]);r.push(function(n){t.call(e,i,n)})})}},{key:"initVm",value:function(t){var e=this._vm;this._vm=new P({data:{$$state:t}}),e&&P.nextTick(function(){return e.$destroy()})}},{key:"state",get:function(){return this._vm._data.$$state},set:function(t){console.error("cannot set state directly.")}}]),t}();function ht(t){P&&t===P||(P=t,at(P))}var ct={Store:lt,install:ht};function dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(a["a"])({},ot,{components:{}});return t.altStore&&t.altStore instanceof ct.Store&&(e.altStore=t.altStore),e}var ut={createGrid:dt,grid:ot,altStore:ct},mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",{on:{click:t._close}},[t._v("Component-A(包含vue生命周期，以及close事件)")]),i("p",[t._v(t._s(t.altCardProps.card.name))])])},ft=[],gt={data:function(){return{test:"test-a-test"}},methods:{_close:function(){this.altCardProps.close()}},watch:{altCard:function(t,e){console.log("testa watch altCard",t,e)}},beforeCreate:function(){console.log("before create")},created:function(){console.log("create")},beforeMount:function(){console.log("before mount")},mounted:function(){var t=this;console.log("mounted"),this.$on("move",function(e){console.log("test-a move:",e),t.$dbStore.commit("add")}),this.$on("moved",function(t){console.log("test-a moved:",t)})},beforeUpdate:function(){console.log("before update")},updated:function(){console.log("a updated")},activated:function(){console.log("activated")},deactivated:function(){console.log("deactivated")},beforeDestroy:function(){console.log("before destroy")},destroyed:function(){console.log("destroyed")},errorCaptured:function(){console.log("error captured")}},pt=gt,vt=Object(A["a"])(pt,mt,ft,!1,null,null,null),yt=vt.exports,xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("Component-B")]),i("p",[t._v(t._s(t.altCardProps.card.w))]),i("input",{attrs:{type:"text"}})])},wt=[],bt={updated:function(){console.log("updated b")}},Ct=bt,_t=Object(A["a"])(Ct,xt,wt,!1,null,null,null),kt=_t.exports,It=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("Component-D")]),i("p",[t._v(t._s(t.altCardProps.card.name))]),i("p",[t._v(t._s(t.text))])])},St=[],Ht=n["a"].extend({name:"test-d",data:function(){return{text:"text content"}},mounted:function(){console.log("mounted"),this.$on("move",function(t){console.log("move move move",t)})},watch:{ccc:function(t,e){console.log("test-d ccc change",t,e)}}}),Wt=Ht,zt=Object(A["a"])(Wt,It,St,!1,null,null,null),Et=zt.exports,Lt=n["a"];console.log(Lt),n["a"].use(ut.altStore);var Ot=new ut.altStore.Store({state:{count:0},mutations:{add:function(t){t.count++}}}),Rt=ut.createGrid();Rt.addWidgetType({testA:yt,testB:kt}),Rt.addWidgetType("testC",{mounted:function(){var t=arguments;console.log("mounted"),this.$el.innerHTML+="heello world",this.$on("resize",function(e,i){console.log("components resize",e,i,t)})}}),Rt.addWidgetType("testD",Et);for(var $t=[{x:0,y:0,w:2,h:2,i:"0",maxW:3,maxH:3,name:"nihaowxl",type:"testA",resizable:!0,isDraggable:!0},{x:2,y:0,w:3,h:2,i:"1",name:"123",minH:2,minW:2,type:"testB",resizable:null,isDraggable:null},{x:5,y:0,w:2,h:2,i:"2",name:"22",type:"testC",resizable:!1,isDraggable:!0},{x:7,y:0,w:4,h:2,i:"3",name:"334",gridItemClass:"ceshi-class",closeHandlerClass:"ceshi-close-class",resizeHandlerClass:"ceshi-resize-class",resizable:!1,draggable:!1},{x:11,y:0,w:1,h:2,i:"4",type:"testD",name:"wakaka",resizable:!1,isDraggable:!0},{x:0,y:2,w:2,h:2,i:"6",name:"1222",resizable:!1,isDraggable:!0},{x:2,y:2,w:2,h:2,i:"7",name:"13",resizable:!1,isDraggable:!0,isShowOriginCloseBtn:!0}],Mt=[{x:0,y:0,w:8,h:6},{x:0,y:6,w:6,h:6}],Nt=0;Nt<$t.length;Nt++)$t[Nt].gridItemClass="color"+Nt%5;var Pt={name:"app",altStore:Ot,components:{Grid:Rt},props:{txt:String},data:function(){return{layout:JSON.parse(JSON.stringify($t)),layout2:JSON.parse(JSON.stringify(Mt)),draggable:!0,resizable:!0,rowHeight:150,colNumStr:12,colNum:12,margin:[1,1],bgcolor:"rgba(0,  0, 0, 0.5)",isGridShow:!0}},watch:{colNumStr:function(t){this.colNum=Number(t)||12},layout:function(){console.log("layout change")},count:function(t,e){console.log("count change",t,e)}},computed:{count:function(){return this.$altStore.state.count}},mounted:function(){var t=this;setTimeout(function(){t.layout[0].name="aafffffff"},2e3)},methods:{gridUpdated:function(){console.log("grid updated")},go:function(t){this.$refs.altGrid.go(t)},clicked:function(t){this.layout.splice(t,1)},removeItem:function(t){this.layout.splice(this.layout.indexOf(t),1)},addItem:function(){this.$refs.altGrid.addItem()},move:function(t){console.log("MOVE i="+t.i+", X="+t.x+", Y="+t.y),this.$emit("move",t)},resize:function(t,e){console.log("RESIZE i="+t.i+", H="+t.h+", W="+t.w+", H(px)="+e.height+", W(px)="+e.width),this.$emit("resize",t)},moved:function(t){console.log("### MOVED i="+t.i+", X="+t.x+", Y="+t.y),this.$emit("moved",t)},resized:function(t,e){console.log("### RESIZED i="+t.i+", H="+t.h+", W="+t.w+", H(px)="+e.height+", W(px)="+e.width),this.$emit("resized",t)}}},Tt=Pt,Dt=(i("034f"),Object(A["a"])(Tt,r,o,!1,null,null,null)),jt=Dt.exports;new n["a"]({render:function(t){return t(jt)}}).$mount("#app")},d812:function(t,e,i){"use strict";var n=i("4f6b"),r=i.n(n);r.a},e2a1:function(t,e,i){var n=i("3f8c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("499e").default;r("1f50beb8",n,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.94de4baf.js.map