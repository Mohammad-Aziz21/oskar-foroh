(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./portoPopupContainer/editor.css":function(e,t){e.exports="html::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(0,0,0,0.6);\r\n    z-index: 9999;\r\n}\r\n\r\nhtml, .vcv-layouts-html, .page-wrapper {\r\n    position: static;\r\n}\r\n\r\n.vc-popup-container {\r\n\tdisplay: block !important;\r\n    position: absolute;\r\n    background: #fff;\r\n    z-index: 10000;\r\n}\r\n"},"./portoPopupContainer/index.js":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/vc-cake/index.js"),s=o("./node_modules/@babel/runtime/helpers/extends.js"),r=o.n(s),a=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=o.n(a),p=o("./node_modules/@babel/runtime/helpers/createClass.js"),l=o.n(p),c=o("./node_modules/@babel/runtime/helpers/inherits.js"),u=o.n(c),d=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),m=o.n(d),v=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),b=o.n(v),f=o("./node_modules/react/index.js"),h=o.n(f);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=b()(e);if(t){var s=b()(this).constructor;o=Reflect.construct(n,arguments,s)}else o=n.apply(this,arguments);return m()(this,o)}}var g=Object(n.getService)("api"),x=Object(n.getStorage)("settings"),j=function(e){u()(o,e);var t=y(o);function o(){return i()(this,o),t.apply(this,arguments)}return l()(o,[{key:"componentDidUpdate",value:function(){var e={width:isNaN(parseInt(this.props.atts.popupWidth))?400:parseInt(this.props.atts.popupWidth),horizontal:this.props.atts.horizontal,vertical:this.props.atts.vertical,animation:this.props.atts.popupAnimation,load_duration:this.props.atts.popupDuration,builder:"vc"};x.state("saveExtraArgs").set({popup_options:e})}},{key:"isRtl",value:function(){return this.$window=document.getElementById("vcv-editor-iframe").contentWindow,!!this.$window.document.body.classList.contains("rtl")}},{key:"validateSize",value:function(e){var t=new RegExp("^-?\\d*(\\.\\d{0,9})?("+["px","em","rem","%","vw","vh"].join("|")+")?$");return""===e||e.match(t)?e:null}},{key:"render",value:function(){var e=this.props,t=e.id,o=e.atts,n=e.editor,s=e.children,a=o.popupWidth,i=o.horizontal,p=o.vertical,l=o.el_class,c="vc-popup-container position-absolute",u={};"string"==typeof c&&l&&(c=c.concat(" "+l)),u.style={},(a=this.validateSize(a))&&(a=/^\d+$/.test(a)?a+"px":a,u.style.maxWidth=a,u.style.width="100%");var d="left",m="right";this.isRtl()&&(d="right",m="left"),i=parseFloat(i),p=parseFloat(p),50===i?50===p?(u.style.left="50%",u.style.top="50%",u.style.transform="translate(-50%, -50%)"):(u.style.left="50%",u.style.transform="translateX(-50%)"):50>i?u.style[d]=i+"%":u.style[m]=100-i+"%",50===p?50!==i&&(u.style.top="50%",u.style.transform="translateY(-50%)"):50>p?u.style.top=p+"%":u.style.bottom=100-p+"%";var v=this.applyDO("all");return h.a.createElement("div",r()({className:c},u,n,{id:"el-"+t},v),h.a.createElement("div",{className:"vc-popup-content porto-modal-content"},s))}}]),o}(g.elementComponent);(0,Object(n.getService)("cook").add)(o("./portoPopupContainer/settings.json"),(function(e){e.add(j)}),{css:!1,editorCss:o("./node_modules/raw-loader/index.js!./portoPopupContainer/editor.css")})},"./portoPopupContainer/settings.json":function(e){e.exports=JSON.parse('{"popupWidth":{"type":"string","access":"public","value":"740","options":{"label":"Popup Width","description":"Enter width in pixels or percentages etc. Default unit is \'px\'."}},"popupAnimation":{"type":"dropdown","access":"public","value":"mfp-fade","options":{"label":"Popup Animation","values":[{"label":"Fade","value":"mfp-fade"},{"label":"Zoom in","value":"my-mfp-zoom-in"}]}},"popupDuration":{"type":"range","access":"public","value":4000,"options":{"label":"Loading Time","min":0,"max":50000,"measurement":"ms"}},"vertical":{"type":"number","access":"public","value":50,"options":{"label":"Top ( % )"}},"horizontal":{"type":"number","access":"public","value":50,"options":{"label":"Left ( % )"}},"designOptions":{"type":"designOptions","access":"public","value":{"backgroundPosition":"center center"},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["popupDescription","popupWidth","popupAnimation","popupDuration","vertical","horizontal","el_class"],"options":{"label":"General"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","designOptions"]},"metaElementControls":{"access":"protected","type":"object","value":{"clone":false,"copy":false,"pasteAfter":false}},"parentWrapper":{"type":"string","access":"protected","value":""},"containerFor":{"type":"group","access":"protected","value":["Row"]},"relatedTo":{"type":"group","access":"protected","value":["CustomRoot","RootElements"]},"el_class":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from Custom CSS option."}},"sharedAssetsLibrary":{"access":"protected","type":"string","value":{"libraries":[{"libsNames":["animate"]}]}},"tag":{"access":"protected","type":"string","value":"portoPopupContainer"}}')}},[["./portoPopupContainer/index.js"]]]);