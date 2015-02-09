$("section .scroll-wrp").mCustomScrollbar({theme:"minimal-dark"});


$('section.page .scroll-wrp').css('height', $(window).height()-128);


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

$('.nav-tab').click(function(e){
	e.preventDefault;

	var selected = ".container." + $(this).attr('data-page');
	var activePage= $('.container.on');  

	if(!(selected == activePage)){
		activePage.fadeOut('fast')	
	  	activePage.removeClass('on');
	  	$('.nav-tab').removeClass('active');

	  	$(selected).fadeIn(1000);
	  	$(selected).addClass('on');
	  	$(this).addClass('active');
	}	

	// scroll
	$('.scroll-wrp').mCustomScrollbar("scrollTo","top");
	  	
});


$('a.back').click(function(e){
	e.preventDefault;

	$('.page').animate({
    	opacity: 0,
    	"top": "100%"
  		}, 600, function() { 			
  			$('.page').fadeOut('fast');
  			$('.page .container').fadeOut('fast');
  			$('.nav-tab').removeClass('active');
  			$('.container').removeClass('on');
	        $('.landing').fadeIn('fast');
		});

});
