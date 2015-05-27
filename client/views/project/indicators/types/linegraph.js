Template.projectIndicatorsTypes_linegraph.rendered = function () {
	var template = this;
	var data = template.data.currentData().linegraph.map(function(item) {
		return [item.x, item.y];
	})
	var roundFormatter = function(val, axis) {
		return Math.round(val);
	}
	var lineColor = template.data.color == 'default' ? '#43494D' : '#fff';
	var yAxisOptions = {
		tickFormatter: roundFormatter,
		font: {
			color: lineColor
		}
	};
	var xAxisOptions = {
		mode: "categories",
		font: {
			color: lineColor
		}
	};
	var options = {
		series: {
			lines: {
				show: true,
				lineWidth: 2,
				fill: true,
				fillColor: {
					colors: [
						{
							opacity: 0
						}, {
							opacity: 0
						}
					]
				}
			},
			points: {
				radius: 3,
				show: true,
				fillColor: lineColor
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true,
			clickable: true,
			tickColor: EmVars.adjustOpacity(lineColor, 0.3),
			borderWidth: 0,
			color: EmVars.adjustOpacity(lineColor, 0.3)
		},
		xaxis: xAxisOptions,
		yaxis: yAxisOptions,
		colors: [lineColor],
		tooltip: true,
		tooltipOpts: {
			content: function(label, xval, yval, flotItem) {
				var index = flotItem.dataIndex;
				return template.data.currentData().linegraph[index].title;
			},
			defaultTheme: false,
			shifts: {
				x: 0,
				y: 20
			}
		}
	}
	$.plot($("#flot-" + this.data._id), [ data ], options);
};