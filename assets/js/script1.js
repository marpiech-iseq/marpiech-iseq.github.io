$(document).ready(function() {
	$('.turn-on-overlay').hide();
	$('.overlay').click(function(){
		$(this).hide();
		$('.turn-on-overlay').show();
	});
	$('.turn-on-overlay').click(function(){
		$(this).hide();
		$('.overlay').show();
	});
});