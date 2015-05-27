RolesSchema = new SimpleSchema({
	accepted: {
		type: Boolean,
		optional: true
	},
	userId: {
		type: String,
		custom: function() {
			if (Meteor.isServer && this.isSet) {
				if (Meteor.users.find({ _id: this.value }).count() != 1) {
					return "notFound";
				}

				if (this.isInsert) {
					if (Roles.find({ projectId: this.field('projectId').value, userId: this.value }).count() != 0) {
						return "alreadyInProject";
					}
				}
			}
		}
	},
	projectId: {
		type: String,
		custom: function() {
			if (Meteor.isServer && this.isSet) {
				if (Projects.find({ _id: this.value }).count() != 1) {
					return "notFound";
				}
			}
		}
	},
	type: {
		type: String,
		allowedValues: ['entrepreneur', 'investor', 'analist', 'expert', 'comission'],
	},
	role: {
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

SimpleSchema.messages({
	alreadyInProject: "User is in the project",
	notFound: "[label] not found"
});

Roles.attachSchema(RolesSchema);