Template.projectMessagesSidebar.helpers({
	urlForConversation: function () {
		return Router.path('project.messages.conversation', {
			conversationSlug: this.conversationSlug,
			_id: this.projectId
		});
	}
});