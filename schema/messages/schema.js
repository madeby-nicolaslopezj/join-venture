MessagesSchema = new SimpleSchema({
	conversation: {
		type: String
	},
	conversationSlug: {
		type: String,
		autoform: {
			omit: true,
		},
		autoValue: function() {
			if (this.isInsert) {
				return encodeURIComponent(slugify(this.field('conversation').value));
			} else if (this.isUpsert) {
				return {$setOnInsert: encodeURIComponent(slugify(this.field('conversation').value))};
			} else {
				return encodeURIComponent(slugify(this.field('conversation').value));
			}
		}
	},
	type: {
		type: String,
		allowedValues: ['text']
	},
	text: {
		type: String,
		optional: true,
	    custom: function () {
	    	if (this.field('type').value == 'text' && !this.isSet && (!this.operator || (this.value === null || this.value === ""))) {
	    		return "required";
	    	}
	    }
	},
	userId: {
		type: String,
		autoValue: function() {
			if (this.isInsert) {
				return Meteor.userId();
			} else if (this.isUpsert) {
				return {$setOnInsert: Meteor.userId()};
			} else {
				this.unset();
			}
		}
	},
	projectId: {
		type: String,
	},
	createdAt: {
		type: Date,
		autoform: {
			omit: true,
		},
		autoValue: function() {
			if (this.isInsert) {
				return new Date;
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date};
			} else {
				this.unset();
			}
		}
	},
})

Messages.attachSchema(MessagesSchema);