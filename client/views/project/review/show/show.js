Template.projectReviewShow.helpers({
	imResponsible: function() {
		return this.review.isResponsible(Meteor.userId());
	},
	getProjectId: function() {
		return Router.current().data()._id;
	},
	shouldRespond: function() {
		var review = Router.current().data().review || Router.current().data().lastestReview();
		return review.isResponsible(Meteor.userId())
		&& !review.didRespond(Meteor.userId())
		&& Router.current().data().lastestReview()._id == review._id;
	},
	didRespond: function() {
		var userId = String(this);
		var review = Router.current().data().review || Router.current().data().lastestReview();
		return review.didRespond(userId);
	},
	didAccept: function() {
		var userId = String(this);
		var review = Router.current().data().review || Router.current().data().lastestReview();
		return review.responseOfUser(userId);
	}
});

Template.projectReviewShow.events({
	'click .response .btn-success': function () {
		var response = { userId: Meteor.userId(), accepted: true };
		Reviews.update(this.review._id, { $addToSet: { responses: response } });
	},
	'click .response .btn-danger': function () {
		var response = { userId: Meteor.userId(), accepted: false };
		Reviews.update(this.review._id, { $addToSet: { responses: response } });
	}
});