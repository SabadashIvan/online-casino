$(".unchor").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top - 30;
    $('body,html').animate({scrollTop: top}, 1500);
});

$(".header_bottom_nav li").each(function() {
    this_li = $(this);
    if ($(this_li).find("ul").length > 0) {
        $(this_li).append('<span class="arrow_mob"></span>');
    }
});

$(".arrow_mob").on("click", function(){
    $(this).toggleClass("arr_active");
    $(this).siblings(".sub_menu").slideToggle(200);
});

$(".call_menu").on("click", function(){
    $(".header_top").toggleClass("header_top_active");
    $("body, html").addClass("over");
});

$(".header_top .close").on("click", function(){
    $(".header_top").removeClass("header_top_active");
    $("body, html").removeClass("over");
});

$(".call_catalog").on("click", function(){
    $(".header_bottom_nav").toggleClass("header_bottom_nav_active");
    $("body, html").addClass("over");
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$(".header_bottom .close").on("click", function(){
    $(".header_bottom_nav").removeClass("header_bottom_nav_active");
    $("body, html").removeClass("over");
});

$(".acc-head").click(function(){
    if ($('.acc-body').is(':visible')) {
        $(".acc-body").slideUp(200);
        $(".plusminus").text('+');
    }
    if( $(this).next(".acc-body").is(':visible')){
        $(this).next(".acc-body").slideUp(200);
        $(this).children(".plusminus").text('+');
    }else {
        $(this).next(".acc-body").slideDown(200); 
        $(this).children(".plusminus").text('-');
    }
});


var nav = $('.header_bottom');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 60) {
			nav.addClass("fixed");
		} else {
			nav.removeClass("fixed");
		}
	});

jQuery('.sidebars, .theiaStickySidebar').theiaStickySidebar({
    additionalMarginTop: 100,
});
