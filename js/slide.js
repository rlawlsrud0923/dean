jQuery(document).ready(function ($) {

	var time = 3000;//milliseconds
	var index = 0;
	var container = $("#twitter_txt");
	var childrenCount = $(".section").length;

	function slideToNext() {

	    index = (index + 1) % childrenCount;
	    console.log(index);
	    container.css({
	        marginLeft: -1 * index * 100 + "%"
	    })
	}
	
	var pt = window.setInterval(function() {
	    slideToNext();
	}, time)

});
