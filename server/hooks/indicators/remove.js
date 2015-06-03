Indicators.before.remove(function(userId, doc) {
  IndicatorsStates.remove({ indicatorId: doc._id });
})