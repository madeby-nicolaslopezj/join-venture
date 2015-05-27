Files.helpers({
	joinedTags: function() {
		return this.tags ? this.tags.join(',') : '';
	},
	isImage: function() {
		return ((this.url.indexOf('.png') > 0) ||
			(this.url.indexOf('.jpg') > 0) ||
			(this.url.indexOf('.jpeg') > 0) ||
			(this.url.indexOf('.gif') > 0) ||
			(this.url.indexOf('.bmp') > 0));
	},
	getIcon: function() {
		if ((this.url.indexOf('.png') > 0) ||
			(this.url.indexOf('.jpg') > 0) ||
			(this.url.indexOf('.jpeg') > 0) ||
			(this.url.indexOf('.gif') > 0) ||
			(this.url.indexOf('.bmp') > 0)) {
			return 'fa-file-image-o';
		}

		return 'fa-file-o';
	}
});