$(document).ready(function () {
	$(".home__slider--content").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			arrows: true,
			fade: true,
			nextArrow: '.home__slider--nav-prev',
			prevArrow: '.home__slider--nav-next'
		});
	$(".header li").hover(function(){
		$(this).toggleClass('active');
		$(this).children("ul").fadeToggle(300);
	});
    // tabs works

    var tabs = $('#tabs');
    $('.works__block--content-right > .tab_content', tabs).each(function (i) {
        if (i != 0) $(this).fadeOut(0);
    });
    tabs.on('click', '.tabs li.tab a', function (e) {
        /* Предотвращаем стандартную обработку клика по ссылке */
        e.preventDefault();

        /* Узнаем значения ID блока, который нужно отобразить */
        var tabId = $(this).attr('href');

        /* Удаляем все классы у якорей и ставим active текущей вкладке */
        $('.tabs li.tab a', tabs).removeClass();
        $(this).addClass('active_tab');

        /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
        $('.works__block--content-right > .tab_content', tabs).fadeOut(0);
        $(tabId).fadeIn();
        $('.works__block--content-right > .tab_content > .works__slider').each(function() {
            $(this).slick("getSlick").refresh();
        });
    });
	$(".tab").click(function(){
		$('.works__slider--nav').hide();
	});
	$(".tab:eq(0)").click(function(){
		$('#nav').show();
	});
	$(".tab:eq(1)").click(function(){
		$('#nav2').show();
	});
	$(".tab:eq(2)").click(function(){
		$('#nav3').show();
	});
	$(".tab:eq(3)").click(function(){
		$('#nav4').show();
	});
	$("#sl-1").slick({
			rows: 2,
			slidesToShow: 2,
			slidesToScroll: 2,
			autoplay: false,
			arrows: true,
			nextArrow: '#nav > .works__slider--nav-prev',
			prevArrow: '#nav > .works__slider--nav-next',
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
						}
			},
			{
				breakpoint: 768,
				settings: {
					rows: 2,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					rows: 2,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		}); 
	$("#sl-2").slick({
			rows: 2,
			slidesToShow: 2,
			slidesToScroll: 2,
			autoplay: false,
			arrows: true,
			nextArrow: '#nav2 > .works__slider--nav-prev',
			prevArrow: '#nav2 > .works__slider--nav-next',
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
						}
			},
			{
				breakpoint: 768,
				settings: {
					rows: 2,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					rows: 2,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
	$("#sl-3").slick({
			rows: 2,
			slidesToShow: 2,
			slidesToScroll: 2,
			autoplay: false,
			arrows: true,
			nextArrow: '#nav3 > .works__slider--nav-prev',
			prevArrow: '#nav3 > .works__slider--nav-next',
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
						}
			},
			{
				breakpoint: 768,
				settings: {
					rows: 2,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					rows: 2,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
	$("#sl-4").slick({
			rows: 2,
			slidesToShow: 2,
			slidesToScroll: 2,
			autoplay: false,
			arrows: true,
			nextArrow: '#nav4 > .works__slider--nav-prev',
			prevArrow: '#nav4 > .works__slider--nav-next',
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
						}
			},
			{
				breakpoint: 768,
				settings: {
					rows: 2,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					rows: 2,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
	$(".team__slider").slick({
			rows: 2,
			slidesToShow: 3,
			slidesToScroll: 3,
			easing: 'linear',
			autoplay: false,
			variableWidth: true,
			arrows: true,
			nextArrow: '.team__slider--nav-prev',
			prevArrow: '.team__slider--nav-next',
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
						}
			},
			{
				breakpoint: 768,
				settings: {
					rows: 3,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					variableWidth: false,
					rows: 3,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
	$(".news__content--slider").slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			easing: 'linear',
			autoplay: false,
			variableWidth: true,
			arrows: true,
			nextArrow: '.news__slider--nav-prev',
			prevArrow: '.news__slider--nav-next',
			responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
						}
			},
			{
				breakpoint: 480,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
	$(".photo__work__slider").slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			easing: 'linear',
			autoplay: false,
			arrows: true,
			nextArrow: '.photo__work__slider--nav-prev',
			prevArrow: '.photo__work__slider--nav-next',
			responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
						}
			}
			]
		});
	$(".services__slider").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			arrows: true,
			variableWidth: true,
			nextArrow: '#services-slider-nav .works__slider--nav-prev',
			prevArrow: '#services-slider-nav .works__slider--nav-next',
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					variableWidth: true,
					slidesToShow: 2,
					slidesToScroll: 2
						}
			},
			{
				breakpoint: 768,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					nextArrow: '#services-slider-nav-mob .works__slider--nav-prev',
			prevArrow: '#services-slider-nav-mob .works__slider--nav-next',
						}
			}
			]
		});
	if ($(window).width() < 768) {
		$(".about__left--block-link").appendTo(".about__right--block");
		$(".alignright").appendTo(".article p:nth-child(3)");
	}
	$(".menu").clone().appendTo(".mob__menu--block");
	$(".contacts__form ul").clone().appendTo(".mob__menu--contacts-block");
	$(".mob__menu--open").click(function(){
		$('.mob__menu--overlay').fadeIn(300);
		$('.mob__menu--wrap').addClass("mob__menu--wrap-open");
		return false;
	});
	$(".mob__menu--close").click(function(){
		$('.mob__menu--overlay').fadeOut(300);
		$('.mob__menu--wrap').removeClass("mob__menu--wrap-open");
		return false;
	});
	var userAgent, ieReg, ie;
	userAgent = window.navigator.userAgent;
	ieReg = /msie|Trident.*rv[ :]*11\./gi;
	ie = ieReg.test(userAgent);

	if(ie) {
		$("body").addClass('ie');
	}
	$(".vacancy__blocks > a").on("click", function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(this).siblings('.vacancy__blocks .vacancy__content').slideUp(200);
		} else {
			$(".vacancy__blocks > a").removeClass("active");
			$(this).addClass("active");
			$(this).parents('.vacancy__content').addClass("active");
			$('.vacancy__blocks .vacancy__content').slideUp(200);
			$(this).siblings('.vacancy__blocks .vacancy__content').slideDown(200);
			return false;
		}
	});
});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.251174, 38.767872],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш адрес',
            balloonContent: 'г. Воскресенск, ул. Берикно д.6'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'static/img/marker.png',
            // Размеры метки.
            iconImageSize: [59, 59],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('searchControl'); 
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('typeSelector');

});
