// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	$('.header_btn_a').hover(
		function(){ $(this).addClass('hover')},
		function(){$(this).removeClass('hover')}
	);
	$('.owl-carousel').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 4
			},
			800: {
				items: 6
			},
			1100: {
				items: 8
			}
		}
	});
	$('.play').on('click',function(){
		owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
		owl.trigger('stop.owl.autoplay')
	})
	$('.header_btn_a').magnificPopup({
		type: 'inline',
		focus: '#name'
	 });
})
