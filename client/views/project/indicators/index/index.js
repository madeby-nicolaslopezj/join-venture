Template.projectIndicatorsIndex.rendered = function () {
	var initMasonry = function() {
		$(".indicators-container").masonry({
			itemSelector: '.item',
			columnWidth: '.example-width',
		});
	}
	
	initMasonry();
	$('.indicators-container').imagesLoaded( function() {
		initMasonry();
	});
};