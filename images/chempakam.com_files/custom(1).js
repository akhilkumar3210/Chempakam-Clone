jQuery(function($){$('.online-shopping .owl-carousel').owlCarousel({loop:true,margin:5,nav:true,items:4,navText:['<span class="icon-arrow-left-2"></span>','<span class="icon-arrow-left-2"></span>'],responsive:{0:{items:1,nav:true},575:{items:2,nav:false},991:{items:4,}}})
$(".shopnow-block-left .yith-ajaxsearchform-container").addClass("search");$(".menu-icon").click(function(){$('body').toggleClass("menu-active")});$(".close").click(function(){$('body').toggleClass("menu-active")});$('header .owl-carousel').owlCarousel({loop:true,nav:false,items:1,autoplay:true,slideTransition:'linear',autoplayTimeout:5000,autoplaySpeed:1500,});$('body').click(function(){$('body').removeClass("menu-active");});$('.menu-active .mobile-menu ul.menu-list, .mobile-menu ul > li.menu__serach , .menu-icon, .menu-close').click(function(event){event.stopPropagation();});});