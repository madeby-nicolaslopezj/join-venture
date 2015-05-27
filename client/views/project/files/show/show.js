Template.projectFilesShow.rendered = function () {
	var tags = this.data.filesTags();
	var options = tags.map(function(text) {
		return {
			text: text,
			value: text
		}
	})
	$('[name="tags"]').selectize({
	    delimiter: ',',
	    persist: false,
	    create: function(input) {
	        return {
	            value: input,
	            text: input
	        }
	    },
	    options: options,
	    onChange: function(value) {
	    	Files.update(Router.current().params.fileId, { $set: { tags: value.split(',') } });
		}
	});
};

Template.projectFilesShow.events({
	'click .btn-delete': function () {
		S3.delete(Router.current().data().file.relativeUrl);
		Files.remove(Router.current().params.fileId);
		Router.go('project.files.index', { _id: Router.current().params._id });
	}
});