Template.projectPostsIndex.helpers({
	firstPost: function() {
		return Posts.findOne({ projectId: this._id }, { sort: { createdAt: -1 } });
	},
	timeline: function () {
		return Posts.find({ projectId: this._id }, { skip: 1, sort: { createdAt: -1 } }).map(function (post, index) {
			post.class = index % 2 == 0 ? 'timeline-inverted' : '';
			return post;
		});
	}
});