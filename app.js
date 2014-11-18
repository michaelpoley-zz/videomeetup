$(document).ready(function(){

	//Fade in learn more content
	var lmFadeIn = function(){
		//Hide learn more info
		$('#lm-primary').hide();
		$('#lm-secondary').hide();
		$('#lm-tertiary').hide();

		//Fade In learn more info on button click
		$('.btn').click(function(){
			if( $(this).attr('id') === 'btn-lm-primary' ){
				$('#lm-primary').fadeTo(100, 1, function(){
					$('#lm-secondary, #lm-tertiary').hide();
				});

			}else if( $(this).attr('id') === 'btn-lm-secondary' ){
				$('#lm-secondary').fadeTo(100, 1, function(){
					$('#lm-primary, #lm-tertiary').fadeOut();
				});

			}else if ( $(this).attr('id') === 'btn-lm-tertiary' ){
				$('#lm-tertiary').fadeTo(100, 1, function(){
				$('#lm-primary, #lm-secondary').fadeOut();
			});
			}
		});
	}
	lmFadeIn();//end onClick fadeIn of learn more content



});//End document ready