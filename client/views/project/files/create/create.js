Template.projectFilesCreate.rendered = function () {
	S3.collection.remove({});
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
	    options: options
	});
};

Template.projectFilesCreate.events({
	'click .btn.btn-primary': function (event, template) {
		var files = template.$("[name='file']")[0].files
        S3.upload(files, "/venture", function(error, result) {
            var fileId = Files.insert({
            	url: result.secure_url,
            	relativeUrl: result.relative_url,
            	name: template.$('[name="name"]').val(),
            	tags: template.$('[name="tags"]').val().split(','),
            	projectId: Router.current().params._id
            });	
            S3.collection.remove({});
            Router.go('project.files.show', { _id: Router.current().params._id, fileId: fileId });
        });
	}
});

Template.projectFilesCreate.helpers({
    "file": function(){
        return S3.collection.findOne();
    }
})