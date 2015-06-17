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

Template.projectPostsIndexItem.onRendered(function() {
  Session.set('isEditing' + this.data._id, false);
})

Template.projectPostsIndexItem.helpers({
  isEditing: function () {
    return Session.get('isEditing' + this._id);
  }
});

Template.projectPostsIndexItem.events({
  'click .edit-btn': function() {
    Session.set('isEditing' + this._id, !Session.get('isEditing' + this._id));
  },
  'click .btn-cancel': function() {
    Session.set('isEditing' + this._id, false);
  }
});

AutoForm.addHooks('projectPostsUpdateForm', {
  onSuccess: function() {
    Session.set('isEditing' + this.docId, false);
  }
});