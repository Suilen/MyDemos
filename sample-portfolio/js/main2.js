// media gallery
$(".fancybox").fancybox();

// scroll bar
$("section .scroll-wrp").mCustomScrollbar({theme:"minimal-dark"});

// scroll section height
if($(window).width()>900){
	$('section.page .scroll-wrp').css('height', $(window).height()-140);
}else {
	$('section.page .scroll-wrp').css('height', $(window).height()-120);
}

$(window).resize(function() {
  //resize just happened, pixels changed
	if($(window).width()>900){
		$('section.page .scroll-wrp').css('height', $(window).height()-140);
	}else {
		$('section.page .scroll-wrp').css('height', $(window).height()-130);
	}
});


// nav-icon function
$('.nav-icon').click(function(e){
	e.preventDefault;
	
	var activeTab=".nav-tab." + $(this).attr('data-page');
	$(activeTab).addClass('active');

	var selected = ".container." + $(this).attr('data-page');
	$('.landing').fadeOut('fast');
	$('.page').fadeIn('fast');
	$('.page').animate({
	    opacity: 1,
	    "top": "0"
	  	}, 600, function() {
	  		$(selected).fadeIn('fast');
	  		$(selected).addClass('on');
	});	

});

// nav-tab function
$('.nav-tab').click(function(e){
	e.preventDefault;
	// scroll top
		// $('.scroll-wrp').mCustomScrollbar("scrollTo","top");

	var selected = ".container." + $(this).attr('data-page');
	var activePage= $('.container.on');  
	if($(".secondary").hasClass('in')){
			var secondary = $('.secondary.in');
			var primary=$('.primary.current');

		 	secondary.animate({
			    	opacity: 0,
			    	"margin-left": "100%"
			  		}, 800, function() {	
			  			// scroll
						$('.scroll-wrp').mCustomScrollbar("scrollTo","top");  

						// primary.fadeIn('fast'); 
						$('.item-wrp').fadeOut('fast');  	
						secondary.fadeOut('fast');	
						secondary.removeClass('in');	
						primary.removeClass('current');		
			  		});	

		 	if(!(selected == activePage)){
			
			activePage.fadeOut('fast');	
		  	activePage.removeClass('on');
		  	$('.nav-tab').removeClass('active');

		  	$(selected).fadeIn(1000);
		  	$(selected).addClass('on');
		  	$(this).addClass('active');
		  	
		}
		 	
	}else {
		// scroll
		$('.scroll-wrp').mCustomScrollbar("scrollTo","top");  	

		if(!(selected == activePage)){
		
		activePage.fadeOut('fast');	
	  	activePage.removeClass('on');
	  	$('.nav-tab').removeClass('active');

	  	$(selected).fadeIn(1000);
	  	$(selected).addClass('on');
	  	$(this).addClass('active');

		}
	  
	}

		
});

// back to landing page function
$('a.back').click(function(e){
	e.preventDefault;

	$('.page').animate({
    	opacity: 0,
    	"top": "100%"
  		}, 600, function() { 			
  			if($('.secondary').hasClass('in')){
				$('.secondary').removeClass('in');
				$('.primary.current').removeClass('current');
			}
  			$('.page').fadeOut('fast');
  			$('.page .primary.container').fadeOut('fast');
  			$('.nav-tab').removeClass('active');
  			$('.primary.container').removeClass('on');
	        $('.landing').fadeIn('fast');
	        $('div.primary, div.secondary, div.item-wrp').removeAttr('style');
		});

});

// slide left function
$('a.slide-left').click(function(e){
	e.preventDefault;
	
	var item = ".item-wrp." + $(this).attr('data-item');
	var primary = $(this).closest('.primary');
	var secondary = $('.secondary');

	secondary.addClass('in'); 
	primary.addClass('current');

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

	var primary = $('.primary.current');
	var secondary = $('.secondary.in');

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
				primary.removeClass('current');		
	  		});	
 	

});

