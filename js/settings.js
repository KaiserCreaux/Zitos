jQuery(function($){

var SWEET = window.SWEET || {};


//map
SWEET.map = function(){
	

var map;
var brooklyn = new google.maps.LatLng(40.633291, -74.017135);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
  {
    'featureType': 'landscape.man_made',
    'stylers': [
      { 'color': '#92bab4' }
    ]
  },{
    'featureType': 'road.arterial',
    'elementType': 'geometry.stroke',
    'stylers': [
      { 'color': '#6a6a6a' }
    ]
  },{
    'featureType': 'road.arterial',
    'stylers': [
      { 'color': '#a2c2c3' }
    ]
  },{
    'featureType': 'road.arterial',
    'elementType': 'labels.text.fill',
    'stylers': [
      { 'color': '#ffffff' }
    ]
  },{
    'featureType': 'road.arterial',
    'elementType': 'labels.icon',
    'stylers': [
      { 'color': '#ffffff' }
    ]
  },{
    'featureType': 'road.arterial',
    'elementType': 'geometry.stroke',
    'stylers': [
      { 'color': '#83aaa7' }
    ]
  },{
    'featureType': 'road.local',
    'elementType': 'geometry.stroke',
    'stylers': [
      { 'color': '#82ada7' }
    ]
  }
];

  var mapOptions = {
    zoom: 17,
    center: brooklyn,
	disableDefaultUI: true,
	scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);
	
	
	
	
}
//end map


//Marker Map Effect
SWEET.markereffect = function(){

	$("#littlemarker").click(function() {
		
			$("#bigmarker").removeClass("showbigmarker");
        	$("#bigmarker").addClass("hidebigmarker");
			$("#littlemarker").css('display','none');
			$("#littlemarkerclose").css('display','block');
	});
	
	$("#littlemarkerclose").click(function() {
		
			$("#bigmarker").removeClass("hidebigmarker");
        	$("#bigmarker").addClass("showbigmarker");
			$("#littlemarkerclose").css('display','none');
			$("#littlemarker").css('display','block');
	});
		
}
//end Marker Map Effect


//init
SWEET.map();
SWEET.markereffect();
//end init
});