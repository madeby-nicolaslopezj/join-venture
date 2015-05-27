Template.backendProjectsIndex.helpers({
	settings: function () {
		return {
			collection: Projects.find(),
            rowsPerPage: 10,
            showFilter: true,
            fields: [
            	{
            		key: 'description.name',
            		label: 'Name'
            	},
            	{
            		key: 'reviewStatus.analist',
            		label: 'Analist'
            	},
                  {
                        key: 'reviewStatus.expert',
                        label: 'expert'
                  },
                  {
                        key: 'reviewStatus.comission',
                        label: 'Comission'
                  }
            ]
		}
	}
});

Template.backendProjectsIndex.events({
      'click .reactive-table tr': function (event) {
            Router.go('backend.projects.show', this);
      }
});