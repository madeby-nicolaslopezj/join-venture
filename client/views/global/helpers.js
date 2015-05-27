Template.registerHelper('getUser', function(id) {
	return Meteor.users.findOne(id);
});

Template.registerHelper('getMe', function() {
	return Meteor.user();
});

Template.registerHelper('itsMe', function(id) {
	return Meteor.userId() == id;
});

Template.registerHelper('nl2br', function(text) {
	return (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
});

Template.registerHelper('timeago', function(time) {
	return moment(time).fromNow();
});

Template.registerHelper('shortDate', function(time) {
	return moment(time).format('ll');
});

Template.registerHelper('formatDate', function(options) {
	return moment(options.hash.date).format(options.hash.format);
});

Template.registerHelper('parse', function(options) {
	var str = typeof options == "object" ? options.hash.text : options;
	var userTemplate = typeof options == "object" && options.hash.userTemplate ? options.hash.userTemplate : "parseUser";
	var fileTemplate = typeof options == "object" && options.hash.fileTemplate ? options.hash.fileTemplate : "parseFile";
	var taskTemplate = typeof options == "object" && options.hash.taskTemplate ? options.hash.taskTemplate : "parseTask";
	var indicatorTemplate = typeof options == "object" && options.hash.indicatorTemplate ? options.hash.indicatorTemplate : "parseIndicator";
	var showImages = typeof options == "object" && options.hash.showImages;

	if (!str) {
		return str;
	}

	str = str.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');

	var users = str.match(/(^|\s)@([A-Za-z_][A-Za-z0-9_]*)/g);
	if (users) {
		users.map(function(exp) {
			var id = exp.replace('@', '');
			var user = Meteor.users.findOne(id);
			var template = Blaze.toHTMLWithData(Template[userTemplate], user);
			str = str.replace(exp, template);
		});
	}

	var files = str.match(/(^|\s)#([A-Za-z_][A-Za-z0-9_]*)/g);
	if (files) {
		files.map(function(exp) {
			var id = exp.replace('#', '');
			var file = Files.findOne(id);
			file.shouldShowImage = file.isImage() && showImages;
			var template = Blaze.toHTMLWithData(Template[fileTemplate], file);
			str = str.replace(exp, template);
		});
	}

	var tasks = str.match(/(^|\s)$([A-Za-z_][A-Za-z0-9_]*)/g);
	if (tasks) {
		tasks.map(function(exp) {
			var id = exp.replace('$', '');
			var task = Tasks.findOne(id);
			var template = Blaze.toHTMLWithData(Template[taskTemplate], task);
			str = str.replace(exp, template);
		});
	}

	var indicators = str.match(/(^|\s)%([A-Za-z_][A-Za-z0-9_]*)/g);
	if (indicators) {
		indicators.map(function(exp) {
			var id = exp.replace('%', '');
			var indicator = Indicators.findOne(id);
			var template = Blaze.toHTMLWithData(Template[indicatorTemplate], indicator);
			str = str.replace(exp, template);
		});
	}

	return str;
});