PostsSchema = new SimpleSchema({
	projectId: {
		type: String,
	},
	userId: {
		type: String,
	},
	title: {
		type: String,
	},
	content: {
		type: String,
		autoform: {
			type: 'parseTextarea'
		}
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

Posts.attachSchema(PostsSchema);