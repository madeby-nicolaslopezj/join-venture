UserNotes.allow({
  insert: function (userId, doc) {
    var user = Meteor.users.findOne(userId);
    if (user.isAdmin()) {
      return true;
    }
  },
  update: function (userId, doc, fields, modifier) {
    var user = Meteor.users.findOne(userId);
    if (user.isAdmin()) {
      return true;
    }
  },
  remove: function (userId, doc) {
    var user = Meteor.users.findOne(userId);
    if (user.isAdmin()) {
      return true;
    }
  }
});

