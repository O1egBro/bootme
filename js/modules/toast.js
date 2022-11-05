"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,n){for(var s=0;s<n.length;s++){var a=n[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(n,s,a){return s&&t(n.prototype,s),a&&t(n,a),n}}(),Toast=null,ToastMessage=function(){function t(){_classCallCheck(this,t),this.$el=$('<div class="toast__container"></div>'),$("body").prepend(this.$el)}return _createClass(t,[{key:"newNotification",value:function(t,n,s){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3,e=(moment().format("HH:mm"),$('\n\t\t\t<div class="toast js-toast-note" data-tab-class="notification">\n\t\t\t\t<span class="toast__close icon-cross"></span>\n\t\t\t\t\n\t\t\t\t<div class="noticeNote__item">\n\t\t\t\t\t<div class="noticeNote__icon icon-'+n+" noticeIcon-"+n+'"></div>\n\t\t\t\t\t<div class="noticeNote__info">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t'+t+"\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t"));this._bindEvents(e,s,a)}},{key:"newMessage",value:function(t,n,s,a){var e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5e3,i=moment().format("HH:mm"),o=$('\n\t\t\t<div class="toast js-toast-msg" data-tab-class="msg">\n\t\t\t\t<span class="toast__close icon-cross" onclick="$(this).closest(\'.toast\').removeClass(\'active\')"></span>\n\t\t\t\t\n\t\t\t\t<div class="noticeMsg__item">\n\t\t\t\t\t<span class="noticeMsg__pic">\n\t\t\t\t\t\t<img src="'+s+'" alt="" class="noticeMsg__img">\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="noticeMsg__header">\n\t\t\t\t\t\t<span class="noticeMsg__date">'+i+'</span>\n\t\t\t\t\t\t<span class="noticeMsg__title">'+n+'</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="noticeMsg__body">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t'+t+"\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");this._bindEvents(o,a,e)}},{key:"_bindEvents",value:function(t,n,s){this.$el.append(t),setTimeout(function(){t.addClass("active")},400),t.click(function(){t.removeClass("active"),n.call(this)}),setTimeout(function(){return t.removeClass("active")},s)}}]),t}();$(function(){Toast=new ToastMessage});