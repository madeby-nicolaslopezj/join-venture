Template.projectMessagesConversation.rendered = function () {
	Deps.autorun(function() {
		var test = Router.current().data().conversation;
		var setHeight = function() {
		    var newHeight2 = $(".projectMessagesLayout").height() - $(".conversation-title").outerHeight() - $(".conversation-footer").outerHeight() - 30;
		    $(".conversation-content").height(newHeight2);
		};
		$(window).resize(setHeight);
		setHeight();
		setTimeout(function() {
			if ($(".conversation-content").length) {
				$(".conversation-content").scrollTop($(".conversation-content")[0].scrollHeight);
			}
		}, 1)
	})
};

Template.projectMessagesConversation.helpers({
	conversation: function () {
		return Router.current().data().conversation;
	},
	messages: function() {
		var messages = this.messages.fetch();
		return messages.map(function(message, index) {
			var existsPreviews = true;
			var existsNext = true;
			if (index == 0) {
				existsPreviews = false;
				message.isFirst = true;
			}
			if (index == messages.length - 1) {
				existsNext = false;
				message.isLast = true;
			}

			if (existsPreviews) {
				var previous = messages[index - 1];
			}
			if (existsNext) {
				var next = messages[index + 1];
			}

			if (existsNext && existsPreviews) {
				if (message.userId == previous.userId && message.userId == next.userId) {
					message.isBetween = true;
				}
			}
			
			if (existsPreviews) {
				if (message.userId != previous.userId) {
					message.isFirst = true;
				}
			}
			
			if (existsNext) {
				if (message.userId != next.userId) {
					message.isLast = true;
				}
			}
			
			return message;
		});
	}
});

Template.projectMessagesConversation.events({
	'click .btn': function (event, template) {
		var message = {
			projectId: Router.current().data()._id,
			type: 'text',
			conversation: Router.current().data().conversation,
			text: template.$("textarea").val(),
		}
		Messages.insert(message);
		template.$("textarea").val("")
		setTimeout(function() {
			$(".conversation-content").animate({ scrollTop: $(".conversation-content")[0].scrollHeight }, 800);
		}, 20)
	}
});