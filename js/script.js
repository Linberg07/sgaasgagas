$(document).ready(function(){
	$('.headerSlider').slick({
		dots:true,
		arrows:false,
		autoplaySpeed:3500,
		autoplay:true,
		cssEase:'linear',
		speed:700,
		infinite:true,
		pauseOnFocus:false,
		pauseOnHover:false
	})
	$('.guideSlider').slick({
		slidesToShow:4,
		variableWidth:true,
		responsive:[{
			breakpoint:1240,
			settings:{
				slidesToShow:3,
				variableWidth:false
			}
		},{
			breakpoint:993,
			settings:{
				slidesToShow:2,
				variableWidth:false
			}
		},{
			breakpoint:620,
			settings:{
				slidesToShow:1,
				variableWidth:false
			}
		}]
	});
	$('.footer-list__menu').click(function(){
		$('.footer-subMenu').toggleClass('active');
	})
	$('.header-menu__sub').click(function(){
		$('.header-subMenu').toggleClass('active');
	})
	$('.header-burger').click(function(){
		$('.burger-menu').toggleClass('active');
		$(this).toggleClass('active');
		$('body').toggleClass('lock');
	})
	let w  = $(window).width();
	let menu = $('.header-menu');
	let burgerBody = $('.burger-body');
	let menuWrap = $('.header-menu__wrap');
	if(w<993){
		menu.appendTo(burgerBody);
	}else{
		menu.appendTo(menuWrap);
	}
})

$(window).resize(function(){
	let w  = $(window).width();
	let menu = $('.header-menu');
	let burgerBody = $('.burger-body');
	let menuWrap = $('.header-menu__wrap');
	if(w<993){
		menu.appendTo(burgerBody);
	}else{
		menu.appendTo(menuWrap);
	}
})
