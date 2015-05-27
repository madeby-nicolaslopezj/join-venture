Meteor.methods({
	respondReview: function(reviewId, accepted) {
		var review = Reviews.findOne(reviewId);

		if (!this.userId) {
			throw new Meteor.Error("logged-out", "The user must be logged in to create a project.");
		}
		
		Reviews.update({
			_id: reviewId, 
			'responsibles.userId': this.userId
		}, {
			$set: { 'responsibles.$.accepted': accepted }
		});
	},
	comment: function(reviewId, key, content) {
		var review = Reviews.findOne(reviewId);

		if (!this.userId) {
			throw new Meteor.Error("logged-out", "The user must be logged in to create a project.");
		}
		
		Reviews.update({
			_id: reviewId, 
			'responsibles.userId': this.userId
		}, {
			$set: { 'responsibles.$.accepted': accepted }
		});
	}
});