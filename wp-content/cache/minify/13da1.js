(function($){'use strict';function login_dropdown(){$('.site-header-account').mouseenter(function(){$('.account-dropdown',this).append($('.account-wrap'));});}
function handleWindow(){var body=document.querySelector('body');if(window.innerWidth>body.clientWidth+5){body.classList.add('has-scrollbar');body.setAttribute('style','--scroll-bar: '+(window.innerWidth-body.clientWidth)+'px');}else{body.classList.remove('has-scrollbar');}}
function minHeight(){var $body=$('body'),bodyHeight=$(window).outerHeight(),headerHeight=$('header.header-1').outerHeight(),footerHeight=$('footer.site-footer').outerHeight();if($body.find('header.header-1').length){$('.site-content').css({'min-height':bodyHeight-headerHeight-footerHeight-114});}}
function setPositionLvN($item){var sub=$item.children('.sub-menu'),offset=$item.offset(),width=$item.outerWidth(),screen_width=$(window).width(),sub_width=sub.outerWidth();var align_delta=offset.left+width+sub_width-screen_width;if(align_delta>0){if($item.parents('.menu-item-has-children').length){sub.css({left:'auto',right:'100%'});}else{sub.css({left:'auto',right:'0'});}}else{sub.css({left:'',right:''});}}
function initSubmenuHover(){$('.site-header .main-navigation .menu-item-has-children').hover(function(event){var $item=$(event.currentTarget);setPositionLvN($item);});}
initSubmenuHover();minHeight();handleWindow();login_dropdown();})(jQuery);
;!function(){"use strict";var e=-1<navigator.userAgent.toLowerCase().indexOf("webkit"),t=-1<navigator.userAgent.toLowerCase().indexOf("opera"),n=-1<navigator.userAgent.toLowerCase().indexOf("msie");(e||t||n)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e=document.getElementById(location.hash.substring(1));e&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1)}();
;(function($){'use strict';function text_editor_hover(){let $text_hover=$('.text-editor-hover');$text_hover.each(function(){let $text=$(this).find('.elementor-text-editor > *').text();$(this).find('.elementor-text-editor  > *').attr('data-hover',$text);});}
text_editor_hover();})(jQuery);;(function($){'use strict';$(document).ready(function(){$('body').on('click','.site-search-popup-close',function(e){e.preventDefault();$('html').toggleClass('search-popup-active');}).on('click','.button-search-popup',function(e){e.preventDefault();$('html').toggleClass('search-popup-active');})});})(jQuery);;(function($){'use strict';$(document).ready(function(){$('.menu-mobile-nav-button').on('click',function(e){e.preventDefault();$('html').toggleClass('mobile-nav-active');});$('.smartic-overlay, .mobile-nav-close').on('click',function(e){e.preventDefault();$('html').toggleClass('mobile-nav-active');});var $menu_mobile=$('.handheld-navigation');if($menu_mobile.length>0){$menu_mobile.find('.menu-item-has-children > a, .page_item_has_children > a').each((index,element)=>{var $dropdown=$('<button class="dropdown-toggle"></button>');$dropdown.insertAfter(element);$dropdown.on('click',function(e){e.preventDefault();$dropdown.toggleClass('toggled-on');$dropdown.siblings('ul').stop().slideToggle(400);});});}});})(jQuery);;(function($){'use strict';$('body').on('click','.smartic-login-form-ajax button[type="submit"]',(event)=>{var $this=$(event.currentTarget);var $form=$this.closest('form');$.ajax({type:'POST',url:smarticAjax.ajaxurl,data:$form.serialize(),beforeSend:()=>{$form.addClass('loading');$form.find('input,button').prop('disabled',true);},success:(response)=>{if(response.status){$form.find('.result-error').remove();location.reload();}else{if($form.find('.result-error').length<=0){$form.prepend(`<div class="result-error woocommerce-message woocommerce-error">${response.msg}</div>`);}}},complete:function(){$form.find('input,button').prop('disabled',false);$form.removeClass('loading');}});return false;});})(jQuery);
;window.addEventListener("load",function(){document.querySelectorAll("form[role='search']").forEach(function(r){r.addEventListener("submit",function(){var e;"function"!=typeof pintrk||(e=r.querySelector("input[type='search']"))&&pintrk("track","search",{search_query:e.value})})})});
//# sourceMappingURL=../source/_maps/js/pinterest-for-woocommerce-tracking.min.js.map
