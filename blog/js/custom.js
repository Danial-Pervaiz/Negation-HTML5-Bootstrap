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

	// backstretch slider documentation is provided for further information

	$(".containerImageSingleBlogPage").backstretch([
	    "assets/blog/blog1Large.jpg",
	    "assets/blog/blog2DefaultLarge.jpg"
	  ], {
	      fade: 750,
	      duration: 4000
	  });
	  $('#next').click(function(x) {
	    x.preventDefault();
	    $('.containerImageSingleBlogPage').data('backstretch').next();
	  });
	  $('#prev').click(function(x) {
	    x.preventDefault();
	    $('.containerImageSingleBlogPage').data('backstretch').prev();
  	});

	$(".containerImageSingleBlogPage2").backstretch([
	    "assets/blog/blog2Large.jpg",
	    "assets/blog/blog2DefaultLarge.jpg"
	  ], {
	      fade: 750,
	      duration: 4000
	  });
	  $('#next2').click(function(x) {
	    x.preventDefault();
	    $('.containerImageSingleBlogPage2').data('backstretch').next();
	  });
	  $('#prev2').click(function(x) {
	    x.preventDefault();
	    $('.containerImageSingleBlogPage2').data('backstretch').prev();
  	});

  	$(".containerImageSingleBlogPage3").backstretch([
	    "assets/blog/blog3Large.jpg",
	    "assets/blog/blog2DefaultLarge.jpg"
	  ], {
	      fade: 750,
	      duration: 4000
	  });
	  $('#next3').click(function(x) {
	    x.preventDefault();
	    $('.containerImageSingleBlogPage3').data('backstretch').next();
	  });
	  $('#prev3').click(function(x) {
	    x.preventDefault();
	    $('.containerImageSingleBlogPage3').data('backstretch').prev();
  	});

  	$(".containerImageSingleBlogPage4").backstretch([
	    "assets/blog/blog4Large.jpg",
	    "assets/blog/blog2DefaultLarge.jpg"
	  ], {
	      fade: 750,
	      duration: 4000
	  });
	  $('#next4').click(function(x) {
	    x.preventDefault();
	    $('.containerImageSingleBlogPage4').data('backstretch').next();
	  });
	  $('#prev4').click(function(x) {
	    x.preventDefault();
	    $('.containerImageSingleBlogPage4').data('backstretch').prev();
  	});


})();