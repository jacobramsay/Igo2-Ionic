(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/mri9bdlj.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/mri9bdlj.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonSplitPane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSplitPane", function() { return SplitPane; });
var SPLIT_PANE_MAIN="split-pane-main",SPLIT_PANE_SIDE="split-pane-side",QUERY={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},SplitPane=function(){function e(){this.visible=!1,this.disabled=!1,this.when=QUERY.lg}return e.prototype.visibleChanged=function(e){var t={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(t)},e.prototype.componentDidLoad=function(){this.styleChildren(),this.updateState()},e.prototype.componentDidUnload=function(){this.rmL&&(this.rmL(),this.rmL=void 0)},e.prototype.updateState=function(){var e=this;if(!this.isServer)if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var t=this.when;if("boolean"!=typeof t){var i=QUERY[t]||t;if(0!==i.length){if(this.win.matchMedia){var n=function(t){e.visible=t.matches},s=this.win.matchMedia(i);s.addListener(n),this.rmL=function(){return s.removeListener(n)},this.visible=s.matches}}else this.visible=!1}else this.visible=t}},e.prototype.isPane=function(e){return!!this.visible&&e.parentElement===this.el&&e.classList.contains(SPLIT_PANE_SIDE)},e.prototype.styleChildren=function(){if(!this.isServer){for(var e=this.contentId,t=this.el.children,i=this.el.childElementCount,n=!1,s=0;s<i;s++){var a=t[s],o=void 0!==e?a.id===e:a.hasAttribute("main");if(o){if(n)return void console.warn("split pane cannot have more than one main node");n=!0}setPaneClass(a,o)}n||console.warn("split pane does not have a specified main node")}},e.prototype.hostData=function(){var e;return{class:(e={},e[""+this.mode]=!0,e["split-pane-"+this.mode]=!0,e["split-pane-visible"]=this.visible,e)}},Object.defineProperty(e,"is",{get:function(){return"ion-split-pane"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["updateState"]},el:{elementRef:!0},isServer:{context:"isServer"},visible:{state:!0,watchCallbacks:["visibleChanged"]},when:{type:"Any",attr:"when",watchCallbacks:["updateState"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionSplitPaneVisible",method:"ionSplitPaneVisible",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-md{--border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function setPaneClass(e,t){var i,n;t?(i=SPLIT_PANE_MAIN,n=SPLIT_PANE_SIDE):(i=SPLIT_PANE_SIDE,n=SPLIT_PANE_MAIN);var s=e.classList;s.add(i),s.remove(n)}

/***/ })

}]);
//# sourceMappingURL=99.js.map