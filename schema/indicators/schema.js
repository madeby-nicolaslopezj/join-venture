IndicatorsStatesSchema = new SimpleSchema({
	text: {
		type: String,
		optional: true,
		autoform: {
			type: 'parseTextarea'
		}
	},
	linegraph: {
		type: [Object],
		optional: true
	},
	"linegraph.$.title": {
        type: String,
    },
	"linegraph.$.x": {
        type: String,
    },
    "linegraph.$.y": {
        type: Number,
        decimal: true
    },
	indicatorId: {
		type: String,
	},
	userId: {
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

IndicatorsSchema = new SimpleSchema({
	title: {
		type: String
	},
	type: {
		type: String,
		allowedValues: ['text', 'linegraph']
	},
	position: {
        type: Number,
    },
    size: {
    	type: Number,
    	allowedValues: [1, 2, 3, 4],
    	autoform: {
			options: {
				'1': "Quarter",
				'2': "Half",
				'3': "Three Quarter",
				'4': "Full Width",
			}
		}
    },
    color: {
		type: String,
		allowedValues: ['primary', 'info', 'success', 'danger', 'dark', 'default'],
		autoform: {
			options: {
				primary: "Blue",
				info: "Light Blue",
				success: "Green",
				danger: "Red",
				dark: "Black",
				default: "White",
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

IndicatorsStates.attachSchema(IndicatorsStatesSchema);
Indicators.attachSchema(IndicatorsSchema);