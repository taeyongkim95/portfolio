import $ from 'jquery';

$(document).ready( function() {

	$('.body-blocks').hover(
		function() {
			$(this).children('.lines').css("color","#fff");
		}
	);
});
