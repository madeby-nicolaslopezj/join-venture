Template.projectReviewComments.helpers({
	attributes: function () {
		var keys = _.without(ProjectsDescriptionSchema._firstLevelSchemaKeys, 'name') ;
		return keys.map(function(key) {
			var attr = ProjectsDescriptionSchema._schema[key];
			attr.key = key;
			return attr;
		});
	},
	shouldRespond: function() {
		var review = Router.current().data().review || Router.current().data().lastestReview();
		return review.isResponsible(Meteor.userId())
		&& !review.didRespond(Meteor.userId())
		&& Router.current().data().lastestReview()._id == review._id;
	},
	commentsForKey: function(key) {
		var review = Router.current().data().review || Router.current().data().lastestReview();
		return review.commentsForKey(key)
	},
	getProject: function() {
		var review = Router.current().data().review || Router.current().data().lastestReview();
		return review.description;
	}
});

Template.projectReviewCommentsInput.rendered = function () {
	$('[rel=autosize]').autosize()
};

Template.projectReviewCommentsInput.events({
	'click button': function (event, template) {
		var comment = {
			key: this.key,
			content: template.$('textarea').val(),
			userId: Meteor.userId()
		}
		var review = Router.current().data().review || Router.current().data().lastestReview();
		Reviews.update(review._id, { $addToSet: { comments: comment } });
		template.$('textarea').val("");
	}
});

Template.projectReviewCommentsComment.helpers({
	getRole: function () {
		return this.roleInProject(Router.current().data()._id).role;
	}
});