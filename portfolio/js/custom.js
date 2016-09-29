(function(){

  "use strict"

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

})();