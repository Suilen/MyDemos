$("section .scroll-wrp").mCustomScrollbar({theme:"minimal-dark"});

if($(window).height()< 768){
	$('section.page .scroll-wrp').css('height', $(window).height()-180);
}

$('.nav-icon').click(function(e){

	e.preventDefault;
	var selected = ".page." + $(this).attr('data-page');
	if(!$('.page').hasClass('on')){

	$('.landing').fadeOut('fast');
	$('header .social-media-icons').css('display', 'none');
	$('header .nav-icons').css('display', 'block');

	$(selected).fadeIn('fast');

	$(selected).animate({
    	opacity: 1,
    	"top": "0"
  		}, 600, function() {
  			$(selected).addClass('on');
		});
	} else if(!$(selected).hasClass('on')){
		$(selected).fadeIn('fast');

		var activePage= $('.page.on');
		activePage.animate({
	    	opacity: 0,
	    	"top": "100%"
	  		}, 800, function() {	  		
	  			activePage.fadeOut('fast')	
	  			activePage.removeClass('on');
	  		});
		
		$(selected).animate({
	    	opacity: 1,
	    	"top": "0"
	  		}, 800, function() {
	  			$(selected).addClass('on');
			});		
	}
});

$('a.back').click(function(e){
	e.preventDefault;
	var activePage=$(this).closest(".page");

	activePage.animate({
    	opacity: 0,
    	"top": "100%"
  		}, 600, function() {
  			activePage.removeClass('on');
	        $('header .nav-icons').css('display', 'none');
	        $('header .social-media-icons').css('display', 'block');
	        $('.landing').fadeIn('fast');
		});

});
