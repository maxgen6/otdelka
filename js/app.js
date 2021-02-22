$(document).ready(function() {

	$('#elementSl').html($('.portfolioSlider').html());

	$('.portfolioSlider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		variableWidth: true,
		responsive: [
			{
			  breakpoint: 480,
			  settings: {
					variableWidth: false,
					centerMode: false,
			    slidesToShow: 1,
			    slidesToScroll: 1
			  }
			}
			]
	});

	if ($(document).width() >= 480){
		$('.slide').on('click', function(event) {
			var url = $(this).attr('urlImg');
			$('body').addClass('open');
			$('.winImagesSlider').append('<div class="slide"><img src="'+url+'"/></div>');
			$('#elementSl').children().each(function(indx, element){
				if($(element).attr('urlImg') != url){
					$('.winImagesSlider').append('<div class="slide"><img src="'+$(element).attr('urlImg')+'"/></div>');
				}
			});
			$('.winImagesSlider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true
			});
		});
	}

	$('.closeWin').on('click', function(event) {
		$('.winImagesSlider').slick('unslick');
		$('.winImagesSlider').empty();
		$('body').removeClass('open');
	});

});
