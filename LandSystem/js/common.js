$(document).ready(function() {
	$('.reviews__slider').slick({
		slidesToShow: 2,
  		slidesToScroll: 1,
  		arrows: true,
  		dots: true,
  		autoplay: true,
  		responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		  		slidesToScroll: 1,
		  		arrows: true,
		  		dots: true,
		  		autoplay: true
		      }
		    }]
	});
	$('.faq__header').click(function() {
		$(this).parent().find('.faq__body').slideToggle();
		$(this).parent().toggleClass('faq__item_opened');
	});
});