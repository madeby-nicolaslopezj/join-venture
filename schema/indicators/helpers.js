Indicators.helpers({
	getTemplate: function () {
		return 'projectIndicatorsTypes_' + this.type;
	},
	currentData: function() {
		return IndicatorsStates.findOne({ indicatorId: this._id }, { sort: { createdAt: -1 } });
	},
	getCol: function() {
		return 'col-sm-' + (this.size * 3);
	}
});