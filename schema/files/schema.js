FilesSchema = new SimpleSchema({
	url: {
		type: String
	},
	relativeUrl: {
		type: String
	},
	projectId: {
		type: String,
	},
	name: {
		type: String,
	},
	tags: {
		type: [String],
		optional: true
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
				return { $setOnInsert: new Date };
			} else {
				this.unset();
			}
		}
	},
})

Files.attachSchema(FilesSchema);