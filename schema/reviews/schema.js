ReviewsCommentsSchema = new SimpleSchema({
	userId: {
		type: String
	},
	key: {
		type: String
	},
	content: {
		type: String,
		min: 1
	}
});

ReviewsResponsesSchema = new SimpleSchema({
	userId: {
		type: String
	},
	accepted: {
		type: Boolean
	}
});

ReviewsSchema = new SimpleSchema({
	type: {
		type: String,
		allowedValues: ['analist', 'expert', 'comission'],
	},
	description: {
		type: Object,
		blackbox: true,
		autoValue: function() {
			if (this.isInsert) {
				return Projects.findOne(this.field('projectId').value).description;
			} else {
				this.unset();
			}
		},
	},
	responsibles: {
		type: [String],
		min: 1,
		autoValue: function() {
			if (this.isInsert) {
				return _.pluck(Projects.findOne(this.field('projectId').value).roles(this.field('type').value).fetch(), 'userId');
			}
		},
		custom: function() {
			if (this.isSet) {
				var allowedValue = _.pluck(Projects.findOne(this.field('projectId').value).roles(this.field('type').value).fetch(), 'userId');
				if (!allowedValue.length) {
					return "noResponsibles";
				}
				if (!_.isEqual(allowedValue, this.value)) {
					return "notAllowed";
				}
			} 
		}
	},
	comments: {
		type: [ReviewsCommentsSchema],
		optional: true,
		custom: function() {
			if (this.isInsert && this.isSet) {
				return "notAllowed";
			}
		}
	},
	responses: {
		type: [ReviewsResponsesSchema],
		optional: true,
		custom: function() {
			if (this.isInsert && this.isSet) {
				return "notAllowed";
			}
		}
	},
	projectId: {
		type: String
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

SimpleSchema.messages({
	noResponsibles: "There are no responsibles for this review",
});

Reviews.attachSchema(ReviewsSchema);