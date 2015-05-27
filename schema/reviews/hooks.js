Reviews.after.update(function (userId, doc, fieldNames, modifier, options) {
	if (Meteor.isServer) {
		var review = Reviews.findOne(doc._id);
		var project = review.project();
		if (_.contains(fieldNames, 'responses') && review.isApproved()) {
			var modifier = { $set: {  } };
			modifier['$set']['reviewStatus.' + review.type] = true;
			Projects.update(project._id, modifier);
		}
	}
});