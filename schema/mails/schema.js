MailsSchema = new SimpleSchema({
	projectId: {
		type: String,
	},
	userId: {
		type: String,
	},
	conversationId: {
		type: String,
		autoform: {
			omit: true,
		},
		autoValue: function() {
			if (!this.isSet) {
				var newId = new Mongo.ObjectID;
				return newId._str;
			}
		}
	},
	receivers: {
		type: [String],
		label: 'To',
		allowedValues: ['entrepreneur', 'investor', 'analist', 'expert', 'comission'],
		autoform: {
			options: {
				entrepreneur: "Entrepreneurs",
				investor: "Investors",
				analist: "Analist",
				expert: "Experts",
				comission: "Comission"
			}
		}
	},
	subject: {
		type: String
	},
	tags: {
		type: [String],
		optional: true,
		autoform: {
			omit: true,
		},
	},
	message:{
		type: String,
		autoform: {
			type: 'parseTextarea',
			rows: 6
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

Mails.attachSchema(MailsSchema);