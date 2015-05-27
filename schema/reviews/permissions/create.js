Reviews.deny({
	insert: function (userId, doc) {
		var project = Projects.findOne(doc.projectId);
		
		if (project.createdBy != userId) {
			return true;
		}

		if (!project.canSubmitReview()) {
			return true;
		}

		if (project.nextReviewType() != doc.type) {
			return true;
		}

		if (doc.accepted) {
			return true;
		}
		
		return false;
	},
});