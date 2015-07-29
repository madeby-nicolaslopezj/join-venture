if (Meteor.isClient) {
	Template.registerHelper('getProject', function(projectId) {
		return Projects.findOne(projectId);
	})
}

Projects.helpers({
	roles: function(type) {
		if (type) {
			return Roles.find({ projectId: this._id, type: type, accepted: true });
		}
		return Roles.find({ projectId: this._id, accepted: true });
	},
	invitations: function() {
		return Roles.find({ projectId: this._id, accepted: false });
	},
	rolesAndInvitations: function() {
		return Roles.find({ projectId: this._id });
	},
	roleOfUser: function(userId, accepted) {
		if (accepted != undefined) {
			return Roles.findOne({ projectId: this._id, userId: userId, accepted: accepted });
		} else {
			return Roles.findOne({ projectId: this._id, userId: userId });
		}
	},
	myRole: function() {
		return this.roleOfUser(Meteor.userId());
	},
	canEdit: function(userId, type) {
		if (type == 'description') {
			return !!Roles.findOne({ projectId: this._id, userId: userId, accepted: true, type: 'entrepreneur' });
		}
		return false;
	},
	reviews: function() {
		return Reviews.find({ projectId: this._id }, { sort: { createdAt: -1 } });
	},
	lastestReview: function() {
		return Reviews.findOne({ projectId: this._id }, { sort: { createdAt: -1 } });
	},
	canSubmitReview: function(userId) {
		var user = userId || Meteor.userId()
		if (user != this.createdBy) {
			return false;
		}
		if (!this.nextReviewType()) {
			return false;
		}
		return true;
	},
	nextReviewType: function() {
		if (this.reviewStatus.analist === false) {
			return 'analist';
		}
		if (this.reviewStatus.expert === false) {
			return 'expert';
		}
		if (this.reviewStatus.comission === false) {
			return 'comission';
		}
		return null
	},
	nextReviewTypeName: function() {
		return TAPi18n.__('projects.review.names.' + this.nextReviewType());
	},
	itsApproved: function() {
		return this.reviewStatus.analist && this.reviewStatus.expert && this.reviewStatus.comission
	},
	canInvite: function(userId) {
		var user = userId || Meteor.userId()
		return this.createdBy == user;
	},
	tasks: function() {
		return Tasks.find({ projectId: this._id });
	},
	tasksTags: function() {
		var tags = [];
		Tasks.find({ projectId: this._id }).map(function (task) {
			if (task.tags) {
				task.tags.map(function(tag) {
					if (!_.findWhere(tags, tag)) {
						tags.push(tag);
					}
				});
			}
		});
		return tags;
	},
	files: function() {
		return Files.find({ projectId: this._id });
	},
	filesTags: function() {
		var tags = [];
		Files.find({ projectId: this._id }).map(function (file) {
			if (file.tags) {
				file.tags.map(function(tag) {
					if (!_.findWhere(tags, tag)) {
						tags.push(tag);
					}
				});
			}
		});
		return tags;
	},
	posts: function() {
		return Posts.find({ projectId: this._id });
	},
	indicators: function() {
		return Indicators.find({ projectId: this._id }, { sort: { position: 1 } });
	},
	mails: function() {
		return Mails.find({ projectId: this._id }, { sort: { createdAt: -1 } });
	},
	conversations: function() {
		var conversations = [];
		Messages.find({ projectId: this._id }, { sort: { createdAt: -1 } }).map(function (message) {
			if (!_.findWhere(conversations, { conversation: message.conversation }) ) {
				conversations.push(message);
			}
		});
		return conversations;
	}
});
