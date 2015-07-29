Reviews.helpers({
	project: function() {
		return Projects.findOne({ _id: this.projectId });
	},
	responseOfUser: function(userId) {
		if (_.findWhere(this.responses, {userId: userId})) {
			return _.findWhere(this.responses, {userId: userId}).accepted;
		}
		return undefined;
	},
	didRespond: function(userId) {
		if (this.responseOfUser(userId) === true || this.responseOfUser(userId) === false) {
			return true;
		}
		return false;
	},
	isPending: function() {
		var pending = false, self = this, responsibles = this.responsibles || [];
		responsibles.map(function(responsible) {
			if (!self.didRespond(responsible)) {
				pending = true;
			}
		});
		return pending;
	},
	isApproved: function() {
		var approved = true, self = this, responsibles = this.responsibles || [];
		responsibles.map(function(responsible) {
			if (self.responseOfUser(responsible) !== true) {
				approved = false;
			}
		});
		return approved;
	},
	isDenied: function() {
		return !this.isPending() && !this.isApproved();
	},
	isResponsible: function(userId) {
		var found = false, responsibles = this.responsibles || [];
		responsibles.map(function (responsible) {
			if (responsible == userId) {
				found = true;
			}
		});
		return found;
	},
	commentsForKey: function(key) {
		return _.where(this.comments, {key: key});
	}
});
