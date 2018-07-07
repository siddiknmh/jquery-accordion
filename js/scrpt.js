$(document).ready(function(){
	
	$('.acc_title').click(function(){
		
		var accdata = $(this).attr('acc-data');
		var selector = '.'+accdata;
		
		
		$(selector).slideToggle();
		
		
	});
	
});