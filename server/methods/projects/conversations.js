Meteor.methods({
	projectConversations: function(projectId) {
		return Messages.aggregate( [ 
		{
			$group: { 
				_id: "$conversation",
				lastMessage: { $first: { type: '$type', text: '$text', userId: '$userId', createdAt: '$createdAt', projectId: '$projectId' } }
			},
		}, {
			$sort: {
				createdAt: -1
			}
		} ] );
	}
});