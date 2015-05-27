var searchObjectWithDots = function(object, key) {
  key = key.split('.');
  try {
    for (var i = 0; i < key.length; i++) {
      if (key[i] in object) {
        object = object[key[i]];
      } else {
        return null;
      }
    }
  } catch(error) {
    return null;
  }

  return object || null;
}

Template.publicViewProject.helpers({
  log: function(item) {
    console.log(item);
  },
  isFile: function() {
    var project = AutoForm.getCurrentDataForForm().doc
    var fileId = searchObjectWithDots(project, this.name);
    if (!_.isString(fileId)) {
      return false;
    }
    return !!Files.findOne(fileId);
  },
  getFile: function() {
    var project = AutoForm.getCurrentDataForForm().doc
    var fileId = searchObjectWithDots(project, this.name);
    if (!_.isString(fileId)) {
      return false;
    }
    return Files.findOne(fileId);
  },
  isArrayItemLast: function() {
    var project = AutoForm.getCurrentDataForForm().doc
    var data = Template.parentData(1);
    var value = searchObjectWithDots(project, data.name);
    return (value.length -1) == this.index
  },
  getLabelFor: function(key) {
    return ProjectsDescriptionSchema._schema[key].label
  },
  isNumber: function() {
    var project = AutoForm.getCurrentDataForForm().doc
    return _.isNumber(searchObjectWithDots(project, this.name));
  },
  isText: function() {
    var project = AutoForm.getCurrentDataForForm().doc
    return _.isString(searchObjectWithDots(project, this.name));
  },
  isArrayOfTexts: function() {
    var project = AutoForm.getCurrentDataForForm().doc
    return _.isArray(searchObjectWithDots(project, this.name)) && _.isString(searchObjectWithDots(project, this.name)[0]);
  },
  isArrayOfObjects: function() {
    var project = AutoForm.getCurrentDataForForm().doc
    return _.isArray(searchObjectWithDots(project, this.name)) && _.isObject(searchObjectWithDots(project, this.name)[0]);
  },
  getKeys: function() {
    var project = AutoForm.getCurrentDataForForm().doc
    return _.keys(searchObjectWithDots(project, this.name));
  },
  getValue: function() {
    var project = AutoForm.getCurrentDataForForm().doc
    return searchObjectWithDots(project, this.name);
  },
});