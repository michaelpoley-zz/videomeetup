$(document).ready(function(){

	//Hide info for learn more links
	$('#lm-primary').hide();
	$('#lm-secondary').hide();
	$('#lm-tertiary').hide();

	//Fade in learn more content
	var lmFadeIn = function(){
		$('.btn').click(function(){
			if( $(this).attr('id') === 'btn-lm-primary' ){
				$('#lm-primary').fadeIn();
				$('#lm-secondary, #lm-tertiary').fadeOut();
			}else if( $(this).attr('id') === 'btn-lm-secondary' ){
				$('#lm-secondary').fadeIn();
				$('#lm-primary, #lm-tertiary').fadeOut();
			}else if ( $(this).attr('id') === 'btn-lm-tertiary' ){
				$('#lm-tertiary').fadeIn();
				$('#lm-primary, #lm-secondary').fadeOut();
			}
		});
	}
	lmFadeIn();//end onClick fadeIn of learn more content



});//End document ready