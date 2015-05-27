Router.route('/view-project/:_id', {
  name: 'public.viewProject',
  waitOn: function() {
    return Meteor.subscribe('view-project', this.params._id);
  },
  data: function() {
    return {
      project: Projects.findOne(this.params._id)
    }
  }
});