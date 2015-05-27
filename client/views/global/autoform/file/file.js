AutoForm.addInputType('venture_file', {
	template: 'ventureFileAttribute',
	valueOut: function() {
		return this.val();
	}
})

Template.ventureFileAttribute.helpers({
	isDisabled: function() {
		return 'disabled' in this.atts;
	},
	files: function () {
		return Router.current().data().files();
	},
	getProjectId: function() {
		return Router.current().data()._id;
	},
	getFile: function() {
		return Files.findOne(this.value);
	}
});
Template.ventureFileAttribute.onRendered(function() {
	var template = this;
	if ('disabled' in this.data.atts) {
		return;
	}
	$('[name="' + this.data.name + '"]').selectize({
		valueField: '_id',
		labelField: 'name',
	    create: false,
	    searchField: ['name', 'tags'],
	    items: [template.data.value],
	    options: Router.current().data().files().map(function(file) {
	    	return {
	    		_id: file._id,
	    		name: file.name,
	    		icon: file.getIcon(),
	    		tags: (file.tags && file.tags.join(', ')) || '',
	    	}
	    }),
	    render: {
	        item: function(item, escape) {
	           return '<div>' +
	            	'<span class="icon"><i class="fa ' + escape(item.icon) + '"></i></span> ' +
	            	'<span class="name">' + escape(item.name) + '</span> ' +
	            	'<span class="id" style="color: #888; font-size: 10px;">#' + escape(item._id) + '</span>' +
	            '</div>';
	        },
	        option: function(item, escape) {
	            return '<div style="height: 35px; padding-top: 8px;">' +
	            	'<span class="icon"><i class="fa ' + escape(item.icon) + '"></i></span> ' +
	            	'<span class="name">' + escape(item.name) + '</span> ' +
	            	'<span class="tags" style="color: #888; font-size: 12px;">' + escape(item.tags) + '</span>' +
	            '</div>';
	        }
	    },
	});
})