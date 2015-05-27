AutoForm.addInputType('parseTextarea', {
	template: 'textarea',
	valueOut: function() {
		return this.val();
	}
})

Template.textarea.events({
	'click .insert-help span': function (event, template) {
		var symbol = $(event.currentTarget).html();
		var currentVal = template.$('textarea').val();
		currentVal += symbol;
		template.$('textarea').val(currentVal);
	}
});

Template.textarea.rendered = function () {
	$("[title]").tooltip();
	$('.mention')
	.atwho({
		at: "@",
		callbacks: {
			tplEval: function(tpl, map) {
				return '<li data-id="' + map._id + '"><b>' + map.name() + '</b> <small>' + map._id + '</small></li>';
			},
			beforeInsert: function(value, $li) {
				return "@" + $li.attr('data-id');
			},
			filter: function(query) {
				if (query) {
					var regex = new RegExp(query + '.*', 'gi');
					return Meteor.users.find({ 'profile.firstName': regex }).fetch();
				} else {
					return Meteor.users.find({}).fetch();
				}
			},
			sorter: function(query, items, searchKey) {
				return items;
			}
		}
	})
	.atwho({
		at: "%",
		callbacks: {
			tplEval: function(tpl, map) {
				return '<li data-id="' + map._id + '"><b>' + map.title + '</b> <small>' + map._id + '</small></li>';
			},
			beforeInsert: function(value, $li) {
				return "%" + $li.attr('data-id');
			},
			filter: function(query) {
				if (query) {
					var regex = new RegExp(query + '.*', 'gi');
					return Indicators.find({ 'title': regex }).fetch();
				} else {
					return Indicators.find({}).fetch();
				}
			},
			sorter: function(query, items, searchKey) {
				return items;
			}
		}
	})
	.atwho({
		at: "#",
		callbacks: {
			tplEval: function(tpl, map) {
				var icon = '<span class="fa-stack"><i class="fa fa-fw fa-circle fa-stack-2x"></i><i class="fa fa-fw ' + map.getIcon() + ' fa-stack-1x fa-inverse"></i></span>';
				return '<li data-id="' + map._id + '">' + icon + '<b>' + map.name + '</b> <small>' + map._id + '</small></li>';
			},
			beforeInsert: function(value, $li) {
				return "#" + $li.attr('data-id');
			},
			filter: function(query) {
				if (query) {
					var regex = new RegExp(query + '.*', 'gi');
					return Files.find({ 'name': regex }).fetch();
				} else {
					return Files.find({}).fetch();
				}
			},
			sorter: function(query, items, searchKey) {
				return items;
			}
		}
	})
	.atwho({
		at: "$",
		callbacks: {
			tplEval: function(tpl, map) {
				if (map.isOpen) {
					var icon = '<span class="fa-stack"><i class="fa fa-fw fa-circle fa-stack-2x" style="color: green"></i><i class="fa fa-fw fa-exclamation fa-stack-1x fa-inverse"></i></span>';

				} else {
					var icon = '<span class="fa-stack"><i class="fa fa-fw fa-circle fa-stack-2x" style="color: red"></i><i class="fa fa-fw fa-ban fa-stack-1x fa-inverse"></i></span>';
				}
				return '<li data-id="' + map._id + '">' + icon + '<b>' + map.title + '</b> <small>' + map._id + '</small></li>';
			},
			beforeInsert: function(value, $li) {
				return "$" + $li.attr('data-id');
			},
			filter: function(query) {
				if (query) {
					var regex = new RegExp(query + '.*', 'gi');
					return Tasks.find({ 'title': regex }).fetch();
				} else {
					return Tasks.find({}).fetch();
				}
			},
			sorter: function(query, items, searchKey) {
				return items;
			}
		}
	})

	if (this.data.autosize != false) {
		$('.mention').autosize();
	}
};
