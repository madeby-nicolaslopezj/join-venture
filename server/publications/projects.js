Meteor.publishComposite('projects', function() {
	return {
		find: function() {
			return Roles.find({ userId: this.userId });
		},
		children: [{
			find: function(role) {
				return Projects.find({ _id: role.projectId });
			},
			children: [{
				find: function(project) {
					return Reviews.find({ projectId: project._id }, { limit: 1, sort: { createdAt: -1 } });
				}
			}]
		}]
	}
})

Meteor.publishComposite('project', function(projectId) {
	var userId = this.userId;
	return {
		find: function() {
			if ((Meteor.users.findOne(userId).isAdmin()) ||
				(Roles.find({ projectId: projectId, userId: userId, accepted: true }).count() != 0)) {
				return Projects.find({ _id: projectId });
			} else {
				return;
			}
        },
        children: [
            {
	            find: function(project) {
	            	return Roles.find({ projectId: projectId });
	            },
	            children: [
	            	{
	            		find: function(role) {
	            			return Meteor.users.find({ _id: role.userId }, { fields: { emails: 1, profile: 1, status: 1 } });
	            		}
	            	}
	            ]
	        },
	        {
	            find: function(project) {
	            	return Indicators.find({ projectId: project._id });
	            },
	            children: [
	            	{
	            		find: function(indicator) {
	            			return IndicatorsStates.find({ indicatorId: indicator._id });
	            		}
	            	}
	            ]
	        },
	        {
	            find: function(project) {
	            	return Posts.find({ projectId: project._id });
	            },
	        },
	        {
	            find: function(project) {
	            	return Reviews.find({ projectId: project._id });
	            },
	        },
	        {
	        	find: function(project) {
	        		return Mails.find({ projectId: project._id });
	        	}
	        },
	        {
	        	find: function(project) {
	        		return Files.find({ projectId: project._id });
	        	}
	        },
	        {
	        	find: function(project) {
	        		return Tasks.find({ projectId: project._id });
	        	},
	        	children: [
	            	{
	            		find: function(task) {
	            			return TasksEvents.find({ taskId: task._id });
	            		}
	            	}
	            ]
	        }
        ]
	}
});