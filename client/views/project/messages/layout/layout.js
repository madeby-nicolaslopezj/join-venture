Template.projectMessagesLayout.rendered = function () {
	var setHeight = function() {
	    var newHeight = $("#main-oc-container").height() - $(".navbar").outerHeight() - 35;
	    $(".projectMessagesLayout, .messages-sidebar").height(newHeight);
	};
	$(window).resize(setHeight);
	setHeight();
};