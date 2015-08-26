getUserLanguage = function () {
  // Put here the logic for determining the user language

  return "es";
};

if (Meteor.isClient) {
  Meteor.startup(function () {
    Session.set("showLoadingIndicator", true);

    T9n.setLanguage(getUserLanguage());
    TAPi18n.setLanguage(getUserLanguage())
    .done(function () {
      Session.set("showLoadingIndicator", false);

      // schema langs
      FilesSchema.i18n('schemas.files');
      IndicatorsStatesSchema.i18n('schemas.indicatorsStates');
    	IndicatorsSchema.i18n('schemas.indicators');
      PostsSchema.i18n('schemas.posts');
      ProjectsSchema.i18n('schemas.projects');
      //ProjectsReviewStatusSchema.i18n('schemas.projectsReviewStatus');
      //ProjectsDescriptionSchema.i18n('schemas.projectsDescription')
    })
    .fail(function (error_message) {
      // Handle the situation
      console.log(error_message);
    });
  });
}
