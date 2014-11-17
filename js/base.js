$(function() {
	// get nav height
	var navHeight = $('.top-navigation').height();

	// smooth scroll anchor links
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    	var target = $(this.hash);
	    	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    	if (target.length) {
	      		$('html,body').animate({
	        	scrollTop: target.offset().top-navHeight
	      		}, 1000);
	      		return false;
	    	}
		}
	});
  	$('.mobileMenu').click(function(){ // THIS SHOWS THE MOBILE NAVI //
  		$('.nav').toggleClass('navShow');
	});
});