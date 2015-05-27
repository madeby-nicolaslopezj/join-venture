UserNotes.attachSchema(new SimpleSchema({
  userId: {
    type: String
  },
  content: {
    type: String
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
}));