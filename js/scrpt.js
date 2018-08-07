$(document).ready(function(){
	
	$('.acc_title').click(function(){   		
		var accdata = $(this).attr('acc-data');
		var selector = '.'+accdata;
		$(selector).slideToggle();
		$(this).parent().siblings().each(function() {
                    if($(this).find('.acc_content').is( ":visible")){
                       $(this).find('.acc_content').slideToggle();
                    }
        });
   		
	});
   });
