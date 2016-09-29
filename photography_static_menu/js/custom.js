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


	// aside bar carousel static menu layout

	// thumbnail controls
	
	$("#image1").click(function() {
		$('.asideBarSliderCarousel').backstretch('assets/header/header-1-static.jpg');
	});
	$("#image2").click(function() {
		$('.asideBarSliderCarousel').backstretch('assets/header/header-2-static.jpg');
	});
	$("#image3").click(function() {
		$('.asideBarSliderCarousel').backstretch('assets/header/header-3-static.jpg');
	});
	$("#image4").click(function() {
		$('.asideBarSliderCarousel').backstretch('assets/header/header-4-static.jpg');
	});
	$("#image5").click(function() {
		$('.asideBarSliderCarousel').backstretch('assets/header/header-5-static.jpg');
	});

	$(".asideBarSliderCarousel").backstretch([
	    "assets/header/header-1-static.jpg",
	    "assets/header/header-2-static.jpg",
	    "assets/header/header-3-static.jpg",
	    "assets/header/header-4-static.jpg",
	    "assets/header/header-5-static.jpg"
	  ], {
	      fade: 750,
	      duration: 4000
  	});

	setInterval(function(){

	},5000);

  	// navigation controls backstretch carousel

	$('#nextControl').click(function() {
		$('.asideBarSliderCarousel').data('backstretch').next();
	});
	$('#prevControl').click(function() {
		$('.asideBarSliderCarousel').data('backstretch').prev();
	});



	// wow plugin 

	new WOW().init();

	// google map	

	google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(36.580247,-41.817628),
            zoom: 3,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: true,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
			  {
			    "featureType": "water",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#d3d3d3" }
			    ]
			  },{
			    "featureType": "transit",
			    "stylers": [
			      { "color": "#808080" },
			      { "visibility": "off" }
			    ]
			  },{
			    "featureType": "road.highway",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#b3b3b3" }
			    ]
			  },{
			    "featureType": "road.highway",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#ffffff" }
			    ]
			  },{
			    "featureType": "road.local",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#ffffff" },
			      { "weight": 1.8 }
			    ]
			  },{
			    "featureType": "road.local",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      { "color": "#d7d7d7" }
			    ]
			  },{
			    "featureType": "poi",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#ebebeb" }
			    ]
			  },{
			    "featureType": "administrative",
			    "elementType": "geometry",
			    "stylers": [
			      { "color": "#a7a7a7" }
			    ]
			  },{
			    "featureType": "road.arterial",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#ffffff" }
			    ]
			  },{
			    "featureType": "road.arterial",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#ffffff" }
			    ]
			  },{
			    "featureType": "landscape",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#efefef" }
			    ]
			  },{
			    "featureType": "road",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      { "color": "#696969" }
			    ]
			  },{
			    "featureType": "administrative",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#737373" }
			    ]
			  },{
			    "featureType": "poi",
			    "elementType": "labels.icon",
			    "stylers": [
			      { "visibility": "off" }
			    ]
			  },{
			    "featureType": "poi",
			    "elementType": "labels",
			    "stylers": [
			      { "visibility": "off" }
			    ]
			  },{
			    "featureType": "road.arterial",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      { "color": "#d6d6d6" }
			    ]
			  },{
			    "featureType": "road",
			    "elementType": "labels.icon",
			    "stylers": [
			      { "visibility": "off" }
			    ]
			  },{
			  },{
			    "featureType": "poi",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#dadada" }
			    ]
			  }
			],
        }
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [

        ];
        for (var i = 0; i < locations.length; i++) {
      if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
      if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
      if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
link = '';     }

}

})();