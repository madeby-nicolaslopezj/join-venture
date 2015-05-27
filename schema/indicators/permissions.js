Indicators.allow({
	insert: function (userId, doc) {
		return userId;
	},
	update: function (userId, doc, fields, modifier) {
		return userId;
	},
	remove: function (userId, doc) {
		return false;
	},
});

IndicatorsStates.allow({
	insert: function (userId, doc) {
		return userId;
	},
	update: function (userId, doc, fields, modifier) {
		return false;
	},
	remove: function (userId, doc) {
		return false;
	},
});

