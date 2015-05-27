Template.projectReviewCreate.events({
	'click .submit .btn': function() {
		Reviews.insert({
			status: 'pending',
			projectId: this._id,
			type: this.nextReviewType()
		});
	}
});