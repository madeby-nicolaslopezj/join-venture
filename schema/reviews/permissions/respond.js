Reviews.deny({
	update: function (userId, doc, fields, modifier) {
		if (_.contains(fields, 'responses')) {
			var project = Projects.findOne(doc.projectId);
			var review = project.lastestReview();

			if (review._id != doc._id) {
				return true;
			}

			if (modifier['$addToSet'].responses.userId != userId) {
				return true;
			}

			if (!review.isResponsible(userId)) {
				return true;
			}

			if (review.didRespond(userId)) {
				return true;
			}
		}
		return false;
	},
});