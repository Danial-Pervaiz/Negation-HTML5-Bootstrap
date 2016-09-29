(function(){

  "use strict"

	// magnific popup plug in for filterable galleries 
	 
  	$('.parent-container').magnificPopup({
		  delegate: 'a', // child items selector, by clicking on it popup will open
		  type: 'image'
		  // other options
	});

  	// menu overlay
  		
  	var menuOpen = $('#openMenu');

  	menuOpen.on('click',function(){
  		$('.navigationOpenMenu').fadeIn();
  	});
  	$('#closeMenu').on('click',function(){
  		$('.navigationOpenMenu').fadeOut();
  	});

	// navigation scroll/swing code you can customize it 

	$(".scroll").on('click',function(event){
	     event.preventDefault();
	     //calculate destination place
	     var dest=0;
	     if($(this.hash).offset().top > $(document).height()-$(window).height()){
	          dest=$(document).height()-$(window).height();
	     }else{
	          dest=$(this.hash).offset().top - 60;
	     }
	     //go to destination
	     $('html,body').animate({scrollTop:dest}, 1000,'swing');
	 });


	// drop down navigation menu effect

	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});

	// bootstrap tab panes for portfolio items

	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	$('.buttonsActiveItem').children('li').on('click',function(){
		$(this).addClass('activeButton').siblings().removeClass('activeButton');
	});

	// magnific pop up for gallery

	$('.parent-container').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image'
	  // other options
	});
	
	$('.gallery').each(function() { // the containers for all your galleries
	    $(this).magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        type: 'image',
	        gallery: {
	          enabled:true
	        }
	    });
	});

	// wow plugin 

	new WOW().init();

 	// countdown timer 

	$('#seconds').countdown('2016/06/10', function(event) {
		$(this).html(event.strftime('%S'));
	});

	 $('#minutes').countdown('2016/06/10', function(event) {
	  	$(this).html(event.strftime('%M'));
	 });

	 $('#hours').countdown('2016/06/10', function(event) {
	  	$(this).html(event.strftime('%H'));
	 });

	 $('#days').countdown('2016/06/10', function(event) {
	  	$(this).html(event.strftime('%D'));
	 });
		
})();