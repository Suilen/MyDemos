// media gallery
$(".fancybox").fancybox();

// scroll bar
$("section .scroll-wrp").mCustomScrollbar({theme:"minimal-dark"});

// scroll section height
if($(window).width()>900){
$('section.page .scroll-wrp').css('height', $(window).height()-140); }else{
$('section.page .scroll-wrp').css('height', $(window).height()-120); 
}
$(window).resize(function() {

  //resize just happened, pixels changed
  if($(window).width()>900){
$('section.page .scroll-wrp').css('height', $(window).height()-140); }else{
$('section.page .scroll-wrp').css('height', $(window).height()-120); 
}
});

// nav-icon function
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

// back to landing page function
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
	        activePage.fadeOut('fast');
		});

});

// slide left function
$('a.slide-left').click(function(e){
	e.preventDefault;
	
	var item = ".item-wrp." + $(this).attr('data-item');
	var primary = $(this).closest('.primary');
	var secondary = $(this).closest('.scroll-wrp').find('.secondary');

	secondary.addClass('in'); 

	primary.fadeOut('fast');
	secondary.fadeIn('fast');
	$(item).fadeIn('fast');

// slide in secondary pane
	secondary.animate({
	    	opacity: 1,
	    	"margin-left": "0"
	  		}, 800, function() {	  		
	  			// scroll
				$('.scroll-wrp').mCustomScrollbar("scrollTo","top");
	  		});	
	
});

// slide back function
$('a.slide-back').click(function(e){
	e.preventDefault;

	var primary = $(this).closest('.scroll-wrp').find('.primary');
	var secondary = $(this).closest('.secondary');

 	secondary.animate({
	    	opacity: 0,
	    	"margin-left": "100%"
	  		}, 800, function() {	
	  			// scroll
				$('.scroll-wrp').mCustomScrollbar("scrollTo","top");  	

				$('.item-wrp').fadeOut('fast');  	
				secondary.fadeOut('fast');	
				primary.fadeIn('fast');
				secondary.removeClass('in');			
	  		});	
 	

});

