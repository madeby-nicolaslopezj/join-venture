(function() {
  $(document).on('ready page:load', function() {
    $('.table-checkable').on('ifChecked', function() {
      return $(this).closest('table').find('.table-checkable-row').iCheck('check');
    });
    return $('.table-checkable').on('ifUnchecked', function() {
      return $(this).closest('table').find('.table-checkable-row').iCheck('uncheck');
    });
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    var $els;
    $els = $('.reportrange');
    return $els.each(function() {
      var $el, $elSpan, format;
      $el = $(this);
      $elSpan = $el.find('span');
      format = 'MMMM D';
      $el.daterangepicker({
        startDate: moment().subtract('days', 29),
        endDate: moment(),
        minDate: '01/01/2014',
        maxDate: '12/31/2014',
        dateLimit: {
          days: 60
        },
        timePicker: false,
        timePickerIncrement: 1,
        timePicker12Hour: true,
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [moment().subtract('days', 1), moment().subtract('days', 1)],
          'Last 7 Days': [moment().subtract('days', 6), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
        },
        opens: 'left',
        buttonClasses: ['btn-sm'],
        applyClass: 'btn btn-success',
        cancelClass: 'btn btn-default',
        format: 'MM/DD/YYYY',
        separator: ' to ',
        locale: {
          fromLabel: 'From',
          toLabel: 'To',
          customRangeLabel: 'Custom Range',
          daysOfWeek: EmVars.helpers.abbrDays,
          monthNames: EmVars.helpers.monthNames,
          firstDay: 1
        }
      }, function(start, end) {
        $elSpan.html(start.format(format) + " - " + end.format(format));
      });
      return $elSpan.html(moment().subtract('days', 29).format(format) + " - " + moment().format(format));
    });
  });

}).call(this);
(function() {
  var EVENTS;

  EVENTS = [
    {
      title: "All Day Event",
      start: "2014-06-01",
      className: 'bg-primary-lt'
    }, {
      title: "Another All Day Event",
      start: "2014-06-02",
      className: 'bg-primary-lt'
    }, {
      title: "Long Event",
      start: "2014-06-07",
      end: "2014-06-10",
      className: 'bg-info-dk'
    }, {
      id: 999,
      title: "Repeating Event",
      start: "2014-06-09T16:00:00",
      className: 'bg-success'
    }, {
      id: 999,
      title: "Repeating Event",
      start: "2014-06-16T16:00:00",
      className: 'bg-warning'
    }, {
      title: "Meeting",
      start: "2014-06-12T10:30:00",
      end: "2014-06-12T12:30:00",
      className: 'bg-danger'
    }, {
      title: "Lunch",
      start: "2014-06-12T12:00:00",
      className: 'bg-primary-lt'
    }, {
      title: "Birthday Party",
      start: "2014-06-13T07:00:00",
      className: 'bg-primary-lt'
    }, {
      title: "Click for Google",
      url: "http://google.com/",
      start: "2014-06-28",
      className: 'bg-light'
    }, {
      title: "Extra event",
      url: "http://google.com/",
      start: "2014-06-29",
      className: 'bg-primary-lt'
    }
  ];

  $(document).on('ready page:load', function() {
    return $('[rel=fullcalendar]').each(function() {
      var $this;
      $this = $(this);
      return $this.fullCalendar({
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,agendaWeek,agendaDay"
        },
        events: EVENTS,
        defaultDate: "2014-06-12",
        editable: true,
        dragOpacity: "0.5",
        selectable: true,
        selectHelper: true,
        select: function(start, end, jsEvent, view) {
          var event;
          event = {
            title: "New event",
            start: start,
            end: end
          };
          return $this.fullCalendar('renderEvent', event, true);
        },
        eventClick: function(calEvent, jsEvent, view) {
          var $modal, kind, modalClass;
          $modal = $('#modal');
          kind = calEvent.className[0].match(/^bg-(.*)$/)[1];
          modalClass = 'modal-' + kind;
          $modal.addClass(modalClass);
          $modal.find('.modal-title').html(calEvent.title);
          $modal.modal('show');
          return $modal.one('hidden.bs.modal', function() {
            return $modal.removeClass(modalClass);
          });
        }
      });
    });
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    return $('[data-growl]').on('click', function() {
      var $el, arrayDataProperties, dataProperties, options, sentDataProperties;
      $el = $(this);
      dataProperties = ['title', 'message', 'namespace', 'duration', 'close', 'location', 'style', 'size'];
      sentDataProperties = _.select(dataProperties, function(prop) {
        return $el.data("growl-" + prop) != null;
      });
      arrayDataProperties = _.map(sentDataProperties, function(prop) {
        return [prop, $el.data("growl-" + prop)];
      });
      options = _.object(arrayDataProperties);
      options.title || (options.title = 'Notification');
      if ($el.data('growl') === 'default') {
        return $.growl(options);
      } else {
        return $.growl[$el.data('growl')](options);
      }
    });
  });

}).call(this);
function setupJqUi() {
  //####### Accordion
  $("#menu-collapse").accordion({
    header: "h3"
  });

  //####### Dialogs

  // Dialog Simple
  $('#btn-dialog-simple').click(function() {
    $('#modal-simple').dialog('open');
    return false;
  });

  $('#modal-simple').dialog({
    autoOpen: false,
    buttons: [
      {
        text: "Close",
        click: function() {
          $(this).dialog("close");
        },
        "class": "btn ui-button-inverse"
      }
    ]
  });

  // Dialog message
  $('#btn-dialog-message').click(function() {
    $('#modal-message').dialog('open');
    return false;
  });

  $("#modal-message").dialog({
    autoOpen: false,
    modal: true,
    buttons: [
      {
        text: "Close",
        click: function() {
          $(this).dialog("close");
        },
        "class": "btn ui-button-inverse"
      }
    ]
  });

  //Dialog multi button
  $('#btn-dialog-button').click(function() {
    $('#modal-button').dialog('open');
    return false;
  });
  // Dialog Button
  $('#modal-button').dialog({
    autoOpen: false,
    width: 600,
    buttons: [
      {
        text: "Delete",
        click: function() {
        },
        "class": "btn btn-danger ui-button-danger"
      },
      {
        text: "Edit",
        click: function() {
        },
        "class": "btn btn-warning ui-button-warning"
      },
      {
        text: "Other",
        click: function() {
        },
        "class": "btn btn-inverse ui-button-inverse"
      },
      {
        text: "Close",
        click: function() {
          $(this).dialog("close");
        },
        "class": "btn ui-button-inverse"
      }
    ]
  });

  //hover states on the static widgets
  $('#btn-dialog-simple, #btn-dialog-message, #btn-dialog-button, ul#icons li').hover(
          function() {
            $(this).addClass('ui-state-hover');
          }, function() {
    $(this).removeClass('ui-state-hover');
  }
  );

  // Remove focus from buttons
  $('.ui-dialog :button').blur();

  //####### Tabs
  $('#tabs2, #tabs, #tabs3').tabs();

  // Dynamic tabs
  var tabTitle = $("#tab_title"),
          tabContent = $("#tab_content"),
          tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
          tabCounter = 2;

  var tabs = $("#tabs2").tabs();

  // modal dialog init: custom buttons and a "close" callback reseting the form inside
  var dialog = $("#dialog2").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Add: function() {
        addTab();
        $(this).dialog("close");
      },
      Cancel: function() {
        $(this).dialog("close");
      }
    },
    close: function() {
      form[ 0 ].reset();
    }
  });

  // addTab form: calls addTab function on submit and closes the dialog
  var form = dialog.find("form").submit(function(event) {
    addTab();
    dialog.dialog("close");
    event.preventDefault();
  });

  // actual addTab function: adds new tab using the input from the form above
  function addTab() {
    var label = tabTitle.val() || "Tab " + tabCounter,
            id = "tabs-" + tabCounter,
            li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label)),
            tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";

    tabs.find(".ui-tabs-nav").append(li);
    tabs.append("<div id='" + id + "'><p>" + tabContentHtml + "</p></div>");
    tabs.tabs("refresh");
    tabCounter++;
  }

  // addTab button: just opens the dialog
  $("#add_tab").button().click(function() {
    dialog.dialog("open");
  });

  // close icon: removing the tab on click
  $("#tabs2").on("click", 'span.ui-icon-close', function() {
    var panelId = $(this).closest("li").remove().attr("aria-controls");
    $("#" + panelId).remove();
    tabs.tabs("refresh");
  });

  //Combination examples (tabs) and open dialog
  $('#sampleButton').on('click', function(event) {
    event.preventDefault();
    $('#modal-simple').dialog({
      autoOpen: true,
      modal: true,
      width: 600,
      buttons: {
        "Save": function() {
          $(this).dialog("close");
        },
        "Cancel": function() {
          $(this).dialog("close");
        }
      }
    });
  });

  //####### Datepicker
  $('#datepicker').datepicker({
    inline: true
  });

  //####### Slider

  // Horizontal slider
  $('#h-slider').slider({
    range: true,
    values: [17, 67]
  });

  // Vertical slider
  $("#v-slider").slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 100,
    value: 60,
    slide: function(event, ui) {
      $("#amount").val(ui.value);
    }
  });
  $("#amount").val($("#v-slider").slider("value"));

  // Autocomplete
  var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];

  $("#tags-autocomplete").autocomplete({
    source: availableTags,
    appendTo: '#autocomplete'
  });

  //####### Menu
  $("#menu").menu();

  //####### Spinner

  var spinner = $("#spinner").spinner();

  $("#disable").click(function() {
    if (spinner.spinner("option", "disabled")) {
      spinner.spinner("enable");
    } else {
      spinner.spinner("disable");
    }
  });
  $("#destroy").click(function() {
    if (spinner.data("ui-spinner")) {
      spinner.spinner("destroy");
    } else {
      spinner.spinner();
    }
  });
  $("#getvalue").click(function() {
    alert(spinner.spinner("value"));
  });
  $("#setvalue").click(function() {
    spinner.spinner("value", 5);
  });

  //####### Tooltip

  $("#tooltip").tooltip();
  /**
   * Tooltip top
   */
  $("#tooltip-top").tooltip({
    position: {
      my: "center bottom-15",
      at: "center top",
      using: function(position, feedback) {
        $(this).css(position);
        $("<div>")
                .addClass("arrow bottom")
                .addClass(feedback.vertical)
                .addClass(feedback.horizontal)
                .appendTo(this);
      }
    }
  });
  /**
   * Tooltip right
   */
  $("#tooltip-right").tooltip({
    position: {
      my: "left+15 left",
      at: "right center",
      using: function(position, feedback) {
        $(this).css(position);
        $("<div>")
                .addClass("arrow left")
                .addClass(feedback.vertical)
                .addClass(feedback.horizontal)
                .appendTo(this);
      }
    }
  });
  $("#tooltip-left").tooltip({
    position: {
      my: "right-15 center",
      at: "left center",
      using: function(position, feedback) {
        $(this).css(position);
        $("<div>")
                .addClass("arrow right")
                .addClass(feedback.vertical)
                .addClass(feedback.horizontal)
                .appendTo(this);
      }
    }
  });
  /**
   * Tooltip bottom
   */
  $("#tooltip-bottom").tooltip({
    position: {
      my: "center top+15",
      at: "center bottom",
      using: function(position, feedback) {
        $(this).css(position);
        $("<div>")
                .addClass("arrow top")
                .addClass(feedback.vertical)
                .addClass(feedback.horizontal)
                .appendTo(this);
      }
    }
  });
  //####### progressbar
  $("#progressbar").progressbar({
    value: 37
  });

  //Custom progress bar
  var customprogressbar = $("#custom-progressbar"),
          progressLabel = $(".progress-label");

  customprogressbar.progressbar({
    value: false,
    change: function() {
      progressLabel.text(customprogressbar.progressbar("value") + "%");
    },
    complete: function() {
      progressLabel.text("Complete!");
    }
  });
  function progress() {
    var val = customprogressbar.progressbar("value") || 0;
    customprogressbar.progressbar("value", val + 1);
    if (val < 99) {
      setTimeout(progress, 100);
    }
  }
  setTimeout(progress, 3000);

  // DOCS
  var $window = $(window)
  var $body = $(document.body)

  var navHeight = $('.navbar').outerHeight(true) + 10

  $body.scrollspy({
    target: '.bs-sidebar',
    offset: navHeight
  })

  $window.on('load', function() {
    $body.scrollspy('refresh')
  })

  $('section [href^=#]').click(function(e) {
    e.preventDefault()
  })

  // back to top
  setTimeout(function() {
    var $sideBar = $('.bs-sidebar')

    $sideBar.affix({
      offset: {
        top: function() {
          var offsetTop = $sideBar.offset().top
          var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10)
          var navOuterHeight = $('.bs-docs-nav').height()

          return (this.top = offsetTop - navOuterHeight - sideBarMargin)
        }
        , bottom: function() {
          return (this.bottom = $('.bs-footer').outerHeight(true))
        }
      }
    })
  }, 100)

  setTimeout(function() {
    $('.bs-top').affix()
  }, 100)

  // Buttons download
  $('.download-btn').button();

  // make code pretty
  window.prettyPrint && prettyPrint();

  //function replace targetblank for valid w3c
  $('a.targetblank').on('click', function() {
    window.open($(this).attr('href'));
    return false;
  });
}

$(document).on('ready page:load', setupJqUi);
(function() {
  $(document).on('ready page:load', function() {
    return $('#reset-localstorage').on('click', function() {
      var text;
      text = "Are you sure you want to reset all widgets state?";
      if (BootstrapDialog) {
        return BootstrapDialog.confirm(text, (function(_this) {
          return function(reply) {
            if (reply) {
              store.clear();
              return Turbolinks.visit(location.pathname);
            }
          };
        })(this));
      } else if (confirm(text)) {
        store.clear();
        return Turbolinks.visit(location.pathname);
      }
    });
  });

}).call(this);
$(document).on('ready page:load', function(){
  var selectMovieOptions = {
    theme: 'movies',
    valueField: 'title',
    labelField: 'title',
    searchField: 'title',
    options: [],
    create: false,
    plugins: ['nano_scroller'],
    render: {
      option: function(item, escape) {
        var actors = [];
        for (var i = 0, n = item.abridged_cast.length; i < n; i++) {
          actors.push('<span>' + escape(item.abridged_cast[i].name) + '</span>');
        }

        return '<div class="media">' +
                '<img class="media-object pull-left" height="80" src="' + escape(item.posters.thumbnail) + '" alt="">' +
                '<div class="media-body">' +
                '<strong class="media-heading">' + escape(item.title) + '</strong>' +
                '<p>' + escape((item.synopsis || 'No synopsis available at this time.').substring(0, 80)) + '</p>' +
                '<p>' + (actors.length ? 'Starring ' + actors.join(', ') : 'Actors unavailable') + '</p>' +
                '</div>' +
                '</div>';
      }
    },
    load: function(query, callback) {
      if (!query.length)
        return callback();
      $.ajax({
        url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json',
        type: 'GET',
        dataType: 'jsonp',
        data: {
          q: query,
          page_limit: 10,
          apikey: 'puhkccvuy6p87zp54qr887bn'
        },
        error: function() {
          callback();
        },
        success: function(res) {
          callback(res.movies);
        }
      });
    }
  };
  
  var $selectize = $('.selectize-search-movie').selectize(selectMovieOptions);
  if(! $selectize[0]) {
    return;
  }
  var control = $selectize[0].selectize;
  control.on('item_add', function(){
    control.close();
    control.clear();
  });

  $('.selectize-select-movie').selectize(selectMovieOptions);

  $("#select-car").selectize({
    options: [
      {id: 'avenger', make: 'dodge', model: 'Avenger'},
      {id: 'caliber', make: 'dodge', model: 'Caliber'},
      {id: 'caravan-grand-passenger', make: 'dodge', model: 'Caravan Grand Passenger'},
      {id: 'challenger', make: 'dodge', model: 'Challenger'},
      {id: 'ram-1500', make: 'dodge', model: 'Ram 1500'},
      {id: 'viper', make: 'dodge', model: 'Viper'},
      {id: 'a3', make: 'audi', model: 'A3'},
      {id: 'a6', make: 'audi', model: 'A6'},
      {id: 'r8', make: 'audi', model: 'R8'},
      {id: 'rs-4', make: 'audi', model: 'RS 4'},
      {id: 's4', make: 'audi', model: 'S4'},
      {id: 's8', make: 'audi', model: 'S8'},
      {id: 'tt', make: 'audi', model: 'TT'},
      {id: 'avalanche', make: 'chevrolet', model: 'Avalanche'},
      {id: 'aveo', make: 'chevrolet', model: 'Aveo'},
      {id: 'cobalt', make: 'chevrolet', model: 'Cobalt'},
      {id: 'silverado', make: 'chevrolet', model: 'Silverado'},
      {id: 'suburban', make: 'chevrolet', model: 'Suburban'},
      {id: 'tahoe', make: 'chevrolet', model: 'Tahoe'},
      {id: 'trail-blazer', make: 'chevrolet', model: 'TrailBlazer'},
    ],
    optgroups: [
      {id: 'dodge', name: 'Dodge'},
      {id: 'audi', name: 'Audi'},
      {id: 'chevrolet', name: 'Chevrolet'}
    ],
    labelField: 'model',
    valueField: 'id',
    optgroupField: 'make',
    optgroupLabelField: 'name',
    optgroupValueField: 'id',
    optgroupOrder: ['chevrolet', 'dodge', 'audi'],
    searchField: ['model'],
    plugins: ['optgroup_columns']
  });
});
// require demo/xeditable/address

$(function() {
  //ajax mocks
  $.mockjaxSettings.responseTime = 500;

  $.mockjax({
    url: '/post',
    response: function(settings) {
      log(settings, this);
    }
  });

  $.mockjax({
    url: '/error',
    status: 400,
    statusText: 'Bad Request',
    response: function(settings) {
      this.responseText = 'Please input correct value';
      log(settings, this);
    }
  });

  $.mockjax({
    url: '/status',
    status: 500,
    response: function(settings) {
      this.responseText = 'Internal Server Error';
      log(settings, this);
    }
  });

  $.mockjax({
    url: '/groups',
    response: function(settings) {
      this.responseText = [
        {value: 0, text: 'Guest'},
        {value: 1, text: 'Service'},
        {value: 2, text: 'Customer'},
        {value: 3, text: 'Operator'},
        {value: 4, text: 'Support'},
        {value: 5, text: 'Admin'}
      ];
      log(settings, this);
    }
  });

  function log(settings, response) {
    var s = [], str;
    s.push(settings.type.toUpperCase() + ' url = "' + settings.url + '"');
    for (var a in settings.data) {
      if (settings.data[a] && typeof settings.data[a] === 'object') {
        str = [];
        for (var j in settings.data[a]) {
          str.push(j + ': "' + settings.data[a][j] + '"');
        }
        str = '{ ' + str.join(', ') + ' }';
      } else {
        str = '"' + settings.data[a] + '"';
      }
      s.push(a + ' = ' + str);
    }
    s.push('RESPONSE: status = ' + response.status);

    if (response.responseText) {
      if ($.isArray(response.responseText)) {
        s.push('[');
        $.each(response.responseText, function(i, v) {
          s.push('{value: ' + v.value + ', text: "' + v.text + '"}');
        });
        s.push(']');
      } else {
        s.push($.trim(response.responseText));
      }
    }
    s.push('--------------------------------------\n');
    $('#console').val(s.join('\n') + $('#console').val());
  }

});

var cb = function() {

  //defaults
  $.fn.editable.defaults.url = '/';


  var c = window.location.href.match(/x-editable-type=inline/i) ? 'inline' : 'popup';
  var set = c === 'inline' ? 'inline' : 'popup';
  $.fn.editable.defaults.mode = set;
  $('input[name="x-editable-type"][value="' + set + '"]').prop('checked', true);

  //enable / disable
  $('#enable').click(function() {
    $('#x-editable .editable').editable('toggleDisabled');
  });

  //editables 
  $('#x-editablename').editable({
    url: '/post',
    type: 'text',
    pk: 1,
    name: 'username',
    title: 'Enter username'
  });

  $('#firstname').editable({
    validate: function(value) {
      if ($.trim(value) == '')
        return 'This field is required';
    }
  });

  $('#sex').editable({
    prepend: "not selected",
    source: [
      {value: 1, text: 'Male'},
      {value: 2, text: 'Female'}
    ],
    display: function(value, sourceData) {
      var colors = {"": "gray", 1: "green", 2: "blue"},
      elem = $.grep(sourceData, function(o) {
        return o.value == value;
      });

      if (elem.length) {
        $(this).text(elem[0].text).css("color", colors[value]);
      } else {
        $(this).empty();
      }
    }
  });

  $('#status').editable();

  $('#group').editable({
    showbuttons: false
  });

  $('#vacation').editable({
    datepicker: {
      todayBtn: 'linked'
    }
  });

  $('#dob').editable();

  $('#event').editable({
    placement: 'right',
    combodate: {
      firstItem: 'name'
    }
  });

  $('#meeting_start').editable({
    format: 'yyyy-mm-dd hh:ii',
    viewformat: 'dd/mm/yyyy hh:ii',
    validate: function(v) {
      if (v && v.getDate() == 10)
        return 'Day cant be 10!';
    },
    datetimepicker: {
      todayBtn: 'linked',
      weekStart: 1
    }
  });

  $('#comments').editable({
    showbuttons: 'bottom'
  });

  $('#note').editable();
  $('#pencil').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('#note').editable('toggle');
  });

  $('#state').editable({
    source: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
  });

  $('#state2').editable({
    value: 'California',
    typeahead: {
      name: 'state',
      local: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    }
  });

  $('#fruits').editable({
    pk: 1,
    limit: 3,
    source: [
      {value: 1, text: 'banana'},
      {value: 2, text: 'peach'},
      {value: 3, text: 'apple'},
      {value: 4, text: 'watermelon'},
      {value: 5, text: 'orange'}
    ]
  });

  $('#tags').editable({
    inputclass: 'input-large',
    selectize: {
      valueField: 'id',
      labelField: 'title',
      searchField: 'title',
      options: [
        {id: 1, title: 'html'},
        {id: 2, title: 'javascript'},
        {id: 3, title: 'css'},
        {id: 3, title: 'ajax'}
      ]
    }
  });

  $('#address').editable({
    url: '/post',
    value: {
      city: "Moscow",
      street: "Lenina",
      building: "12"
    },
    validate: function(value) {
      if (value.city == '')
        return 'city is required!';
    },
    display: function(value) {
      if (!value) {
        $(this).empty();
        return;
      }
      var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
      $(this).html(html);
    }
  });

  $('#x-editable [rel=editable]').on('hidden', function(e, reason) {
    if (reason === 'save' || reason === 'nochange') {
      var $next = $(this).closest('tr').next().find('.editable');
      if ($('#autoopen').is(':checked')) {
        setTimeout(function() {
          $next.editable('show');
        }, 300);
      } else {
        $next.focus();
      }
    }
  });

  $('input[type=radio][name="x-editable-type"]').on('ifChecked', function(e) {
    $el = $(e.currentTarget);
    $el.closest('form').submit();
  });

};

$(cb);
$document = $(document);
$document.on('page:load', cb);
(function() {
  $(document).on('ready page:load', function() {
    var falseOrDefault;
    falseOrDefault = function(el, def, value) {
      if (value === 'false') {
        return false;
      }
      return value || def;
    };
    $(".easy-pie-chart-normal").each(function() {
      var $el, color, lineWidth, scaleColor, size, trackColor;
      $el = $(this);
      color = EmVars.colorFromName($el.data('color') || 'info');
      size = $el.data('size') || 150;
      lineWidth = $el.data('line-width') || 15;
      trackColor = falseOrDefault($el, '#f2f2f2', $el.data('track-color'));
      scaleColor = falseOrDefault($el, EmVars.colors.textColor, $el.data('scale-color'));
      return $el.easyPieChart({
        lineWidth: lineWidth,
        size: size,
        lineCap: "square",
        barColor: color,
        scaleColor: scaleColor,
        animate: 1000,
        trackColor: trackColor
      });
    });
    $(".easy-pie-chart-percent").easyPieChart({
      animate: 1000,
      scaleColor: EmVars.colors.textColor,
      lineWidth: 15,
      size: 150,
      barColor: function(percent) {
        return "rgb(" + Math.round(200 * percent / 100) + ", " + Math.round(200 * (1 - percent / 100)) + ", 0)";
      }
    });
    return setInterval(function() {
      return $(".easy-pie-chart-percent").each(function() {
        var val;
        val = EmVars.rand(0, 80);
        $(this).data("easyPieChart").update(val);
        return $(this).find("span").text("" + val + "%");
      });
    }, 2500);
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    var chartOptions, randomBars, randomData;
    randomData = function(horizontal) {
      var count, _i, _results;
      if (horizontal == null) {
        horizontal = false;
      }
      count = horizontal ? 2 : 4;
      return _.map((function() {
        _results = [];
        for (var _i = 1; 1 <= count ? _i <= count : _i >= count; 1 <= count ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this), function(i) {
        var data, index;
        index = i * 10;
        data = parseInt((Math.floor(Math.random() * (1 + 120 - 60))) + 10);
        if (horizontal) {
          return [data, index];
        } else {
          return [index, data];
        }
      });
    };
    randomBars = function(horizontal) {
      if (horizontal == null) {
        horizontal = false;
      }
      return _.map([EmVars.colors.primary.color, EmVars.colors.success.color, EmVars.colors.danger.color], function(color, i) {
        var adjustedColor;
        adjustedColor = EmVars.adjustOpacity(color, 0.5);
        return {
          label: "Product " + (i + 1),
          data: randomData(horizontal),
          color: adjustedColor,
          bars: {
            horizontal: horizontal,
            show: true,
            fill: true,
            lineWidth: 1,
            order: i + 1,
            fillColor: adjustedColor
          }
        };
      });
    };
    chartOptions = {
      xaxis: {
        tickLength: 0
      },
      yaxis: {},
      grid: {
        hoverable: true,
        clickable: false,
        borderWidth: 0
      },
      legend: {
        labelBoxBorderColor: "none",
        position: "left"
      },
      series: {
        shadowSize: 1
      },
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      }
    };
    $('.flot-bar').each(function() {
      return $.plot($(this), randomBars(), chartOptions);
    });
    return $(".flot-bar-horizontal").each(function() {
      return $.plot($(this), randomBars(true), chartOptions);
    });
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    var randomData;
    randomData = function() {
      return _.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(i) {
        return [i, parseInt((Math.floor(Math.random() * (1 + 20 - 10))) + 10)];
      });
    };
    return $('.flot-line').each(function() {
      var $el, color;
      $el = $(this);
      color = EmVars.colorFromName($el.data('color') || 'info');
      return $.plot($el, [
        {
          data: randomData()
        }
      ], {
        series: {
          lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
              colors: [
                {
                  opacity: 0.3
                }, {
                  opacity: 0.3
                }
              ]
            }
          },
          points: {
            radius: 3,
            show: true
          },
          grow: {
            active: true,
            steps: 50
          },
          shadowSize: 2
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: EmVars.colors.light.color,
          borderWidth: 1,
          color: EmVars.colors.light.color
        },
        colors: [color],
        xaxis: {},
        yaxis: {
          ticks: 5
        },
        tooltip: true,
        tooltipOpts: {
          content: "chart: %x.1 is %y.4",
          defaultTheme: false,
          shifts: {
            x: 0,
            y: 20
          }
        }
      });
    });
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    var data, getRandomData, live, totalPoints, update, updateInterval;
    data = [];
    totalPoints = 300;
    updateInterval = 30;
    getRandomData = function() {
      var i, prev, res, y;
      if (data.length > 0) {
        data = data.slice(1);
      }
      while (data.length < totalPoints) {
        prev = (data.length > 0 ? data[data.length - 1] : 50);
        y = prev + Math.random() * 10 - 5;
        if (y < 0) {
          y = 0;
        } else {
          if (y > 100) {
            y = 100;
          }
        }
        data.push(y);
      }
      res = [];
      i = 0;
      while (i < data.length) {
        res.push([i, data[i]]);
        ++i;
      }
      return res;
    };
    update = function() {
      live.setData([getRandomData()]);
      live.draw();
      setTimeout(update, updateInterval);
    };
    return $(".flot-live").length && (live = $.plot(".flot-live", [getRandomData()], {
      series: {
        lines: {
          show: true,
          lineWidth: 1,
          fill: true,
          fillColor: {
            colors: [
              {
                opacity: 0.2
              }, {
                opacity: 0.1
              }
            ]
          }
        },
        shadowSize: 2
      },
      colors: [EmVars.colorFromName('light-dk')],
      yaxis: {
        min: 0,
        max: 100
      },
      xaxis: {
        show: false
      },
      grid: {
        tickColor: EmVars.colors.light.color,
        borderWidth: 0
      }
    })) && update();
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    var randomData;
    randomData = function() {
      return _.map([1, 2, 3, 4, 5, 6], function(i) {
        return [i, parseInt((Math.floor(Math.random() * (1 + 30 - 10))) + 10)];
      });
    };
    return $('.flot-multi').each(function() {
      return $.plot($(this), [
        {
          data: randomData(),
          label: "Unique Visits"
        }, {
          data: randomData(),
          label: "Page Views"
        }
      ], {
        series: {
          lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
              colors: [
                {
                  opacity: 0.3
                }, {
                  opacity: 0.3
                }
              ]
            }
          },
          points: {
            show: true
          },
          shadowSize: 2
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: EmVars.colors.light.color,
          borderWidth: 0
        },
        colors: [EmVars.colors.success.color, EmVars.colors.primary.color],
        xaxis: {
          ticks: 15,
          tickDecimals: 0
        },
        yaxis: {
          ticks: 10,
          tickDecimals: 0
        },
        tooltip: true,
        tooltipOpts: {
          content: "'%s' of %x.1 is %y.4",
          defaultTheme: false,
          shifts: {
            x: 0,
            y: 20
          }
        }
      });
    });
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    var baseColor, colors, data;
    data = _.map([40, 10, 20, 12, 18], function(n, i) {
      return {
        label: EmVars.helpers.words[i],
        data: n
      };
    });
    baseColor = EmVars.colors.info.color;
    colors = _.map([1, 2, 3, 4, 5], function(i) {
      return EmVars.dk(baseColor, 10 * i);
    });
    $('.flot-pie-donut').each(function() {
      return $.plot($(this), data, {
        series: {
          pie: {
            innerRadius: 0.4,
            show: true,
            stroke: {
              width: 0
            },
            label: {
              show: true,
              threshold: 0.05
            }
          }
        },
        colors: colors,
        grid: {
          hoverable: true,
          clickable: false
        },
        tooltip: true,
        tooltipOpts: {
          content: "%s: %p.0%",
          defaultTheme: false,
          shifts: {
            x: 0,
            y: 20
          }
        }
      });
    });
    return $('.flot-pie').each(function() {
      return $.plot($(this), data, {
        series: {
          pie: {
            combine: {
              color: EmVars.colors.textColor,
              threshold: 0.05
            },
            show: true
          }
        },
        colors: colors,
        legend: {
          show: false
        },
        grid: {
          hoverable: true,
          clickable: false
        },
        tooltip: true,
        tooltipOpts: {
          content: "%s: %p.0%",
          defaultTheme: false,
          shifts: {
            x: 0,
            y: 20
          }
        }
      });
    });
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    var randomData;
    randomData = function() {
      return _.map([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], function(i) {
        return [i, parseInt((Math.floor(Math.random() * (1 + 30 - 10))) + 10)];
      });
    };
    return $('.flot-spline').each(function() {
      return $.plot($(this), [randomData(), randomData()], {
        series: {
          lines: {
            show: false
          },
          splines: {
            show: true,
            tension: 0.4,
            lineWidth: 1,
            fill: 0.4
          },
          points: {
            radius: 0,
            show: true
          },
          shadowSize: 2
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: EmVars.colors.light.color,
          borderWidth: 1,
          color: EmVars.colors.light.color
        },
        colors: [EmVars.colors.success.color, EmVars.colors.primary.color],
        xaxis: {},
        yaxis: {
          ticks: 4
        },
        tooltip: true,
        tooltipOpts: {
          content: "%x.1 = %y.4",
          defaultTheme: false,
          shifts: {
            x: 0,
            y: 20
          }
        }
      });
    });
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    var days, noTextFormatter, randomData, roundFormatter;
    days = EmVars.helpers.abbrDays;
    randomData = function() {
      var _i, _ref, _results;
      return _.map((function() {
        _results = [];
        for (var _i = 0, _ref = days.length; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this), function(i) {
        return [i, parseInt((Math.floor(Math.random() * (1 + 20 - 10))) + 10)];
      });
    };
    roundFormatter = function(val, axis) {
      return Math.round(val);
    };
    noTextFormatter = function() {
      return '';
    };
    return $('.flot-transparent-line').each(function() {
      var $el, axisOptions, data, lineColor, minY, transparentLineColor, xAxisOptions, yAxisOptions;
      $el = $(this);
      axisOptions = {
        useXAxisLines: true,
        useXAxisLabels: true,
        useYAxisLines: true,
        useYAxisLabels: true
      };
      if (($el.data('flot-no-x-lines') != null) || ($el.data('flot-no-lines') != null)) {
        axisOptions.useXAxisLines = false;
      }
      if (($el.data('flot-no-x-labels') != null) || ($el.data('flot-no-labels') != null)) {
        axisOptions.useXAxisLabels = false;
      }
      if (($el.data('flot-no-y-lines') != null) || ($el.data('flot-no-lines') != null)) {
        axisOptions.useYAxisLines = false;
      }
      if (($el.data('flot-no-y-labels') != null) || ($el.data('flot-no-labels') != null)) {
        axisOptions.useYAxisLabels = false;
      }
      data = randomData();
      minY = _.min(_.map(data, function(d) {
        return d[1];
      }));
      lineColor = EmVars.colorFromName($el.data('flot-line-color') || 'white');
      transparentLineColor = EmVars.adjustOpacity(lineColor, 0.3);
      xAxisOptions = {};
      xAxisOptions.tickColor = axisOptions.useXAxisLines ? transparentLineColor : 'transparent';
      if (axisOptions.useXAxisLabels) {
        xAxisOptions.ticks = _.map(data, function(d) {
          return [d[0], days[d[0]]];
        });
        xAxisOptions.font = {
          color: lineColor
        };
      } else {
        xAxisOptions.tickFormatter = noTextFormatter;
      }
      yAxisOptions = {
        min: minY - 5,
        ticks: 5
      };
      yAxisOptions.tickColor = axisOptions.useYAxisLines ? transparentLineColor : 'transparent';
      if (axisOptions.useYAxisLabels) {
        yAxisOptions.font = {
          color: lineColor
        };
        yAxisOptions.tickFormatter = roundFormatter;
      } else {
        yAxisOptions.tickFormatter = noTextFormatter;
      }
      return $.plot($el, [
        {
          data: data
        }
      ], {
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
            fillColor: 'white'
          },
          shadowSize: 0
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: transparentLineColor,
          borderWidth: 0,
          color: transparentLineColor
        },
        colors: [lineColor],
        xaxis: xAxisOptions,
        yaxis: yAxisOptions,
        tooltip: true,
        tooltipOpts: {
          content: "%y.1MB/s",
          defaultTheme: false,
          shifts: {
            x: 0,
            y: 20
          }
        }
      });
    });
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    return $('.em-knob').each(function() {
      var $el, color, max, min, val;
      $el = $(this);
      color = EmVars.colorFromName($el.data('color') || 'info');
      min = -50;
      max = 50;
      val = EmVars.rand(min, max);
      $el.val(val);
      return $el.knob({
        width: 100,
        height: 100,
        thickness: .2,
        fgColor: color,
        min: min,
        max: max
      });
    });
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    return $(".sparkline-bar").each(function() {
      var $el, barSpacing, barWidth, color, height;
      $el = $(this);
      color = EmVars.colorFromName($el.data("color") || "danger");
      height = '18px';
      barWidth = '6px';
      barSpacing = '1px';
      height = '30px';
      return $el.sparkline('html', {
        type: 'bar',
        barColor: color,
        height: height,
        barWidth: barWidth,
        barSpacing: barSpacing,
        zeroAxis: false
      });
    });
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    var data1, data2, el;
    el = $('.sparkline-composite');
    if (el.length) {
      data1 = _.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function() {
        return EmVars.rand(1, 6);
      });
      data2 = _.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function() {
        return EmVars.rand(1, 6);
      });
      el.sparklineResponsive(data1, {
        type: "line",
        width: "100%",
        height: "200px",
        fillColor: EmVars.adjustOpacity(EmVars.colorFromName('light-dk'), 0.5),
        lineColor: EmVars.colors.white.color,
        spotRadius: 4,
        valueSpots: data1,
        minSpotColor: EmVars.colors.light.color,
        maxSpotColor: EmVars.colors.light.color,
        highlightSpotColor: EmVars.colors.light.color,
        highlightLineColor: EmVars.colorFromName('light-dk'),
        normalRangeMin: 0,
        tooltipClassname: 'em-sparkline-tooltip'
      });
      return el.sparklineResponsive(data2, {
        type: "line",
        composite: true,
        width: "100%",
        fillColor: EmVars.adjustOpacity(EmVars.colors.primary.color, 0.1),
        lineColor: EmVars.colors.white.color,
        minSpotColor: EmVars.colors.primary.color,
        maxSpotColor: EmVars.colors.primary.color,
        highlightSpotColor: EmVars.colors.info.color,
        highlightLineColor: EmVars.colorFromName('light-dk'),
        spotRadius: 4,
        valueSpots: data2,
        normalRangeMin: 0,
        tooltipClassname: 'em-sparkline-tooltip',
        responsive: true
      });
    }
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    var data, el;
    el = $('.sparkline-line');
    data = function() {
      return _.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function() {
        return EmVars.rand(1, 6);
      });
    };
    return el.each(function() {
      var $el, height;
      $el = $(this);
      height = "100px";
      if ($el.data('height')) {
        height = "" + ($el.data('height')) + "px";
      }
      return $el.sparklineResponsive(data(), {
        type: "line",
        width: "100%",
        height: height,
        lineColor: EmVars.colors.white.color,
        lineWidth: 2,
        fillColor: 'transparent',
        spotColor: EmVars.colors.white.color,
        minSpotColor: EmVars.colors.white.color,
        maxSpotColor: EmVars.colors.white.color,
        highlightLineColor: EmVars.colors.white.color,
        highlightSpotColor: EmVars.colors.white.color,
        spotRadius: 4,
        normalRangeMin: 1
      });
    });
  });

}).call(this);
(function() {
  $(document).on('ready page:load', function() {
    var colors, el;
    el = $('.sparkline-pie');
    if (el.length) {
      colors = [EmVars.colors.light.color, EmVars.colorFromName('success-lt'), EmVars.colorFromName('primary-lt')];
      return el.sparklineResponsive([6, 3, 5], {
        type: 'pie',
        width: '100%',
        height: '200px',
        sliceColors: colors,
        offset: 10,
        borderWidth: 0,
        tooltipClassname: 'em-sparkline-tooltip'
      });
    }
  });

}).call(this);
/**
Address editable input.
Internally value stored as {city: "Moscow", street: "Lenina", building: "15"}

@class address
@extends abstractinput
@final
@example
<a href="#" id="address" data-type="address" data-pk="1">awesome</a>
<script>
$(function(){
    $('#address').editable({
        url: '/post',
        title: 'Enter city, street and building #',
        value: {
            city: "Moscow", 
            street: "Lenina", 
            building: "15"
        }
    });
});
</script>
**/

(function ($) {
    "use strict";
    
    var Address = function (options) {
        this.init('address', options, Address.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Address, $.fn.editabletypes.abstractinput);

    $.extend(Address.prototype, {
        /**
        Renders input from tpl

        @method render() 
        **/        
        render: function() {
           this.$input = this.$tpl.find('input');
        },
        
        /**
        Default method to show value in element. Can be overwritten by display option.
        
        @method value2html(value, element) 
        **/
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return; 
            }
            var html = $('<div>').text(value.city).html() + ', ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
            $(element).html(html); 
        },
        
        /**
        Gets value from element's html
        
        @method html2value(html) 
        **/        
        html2value: function(html) {        
          /*
            you may write parsing method to get value by element's html
            e.g. "Moscow, st. Lenina, bld. 15" => {city: "Moscow", street: "Lenina", building: "15"}
            but for complex structures it's not recommended.
            Better set value directly via javascript, e.g. 
            editable({
                value: {
                    city: "Moscow", 
                    street: "Lenina", 
                    building: "15"
                }
            });
          */ 
          return null;  
        },
      
       /**
        Converts value to string. 
        It is used in internal comparing (not for sending to server).
        
        @method value2str(value)  
       **/
       value2str: function(value) {
           var str = '';
           if(value) {
               for(var k in value) {
                   str = str + k + ':' + value[k] + ';';  
               }
           }
           return str;
       }, 
       
       /*
        Converts string to value. Used for reading value from 'data-value' attribute.
        
        @method str2value(str)  
       */
       str2value: function(str) {
           /*
           this is mainly for parsing value defined in data-value attribute. 
           If you will always set value by javascript, no need to overwrite it
           */
           return str;
       },                
       
       /**
        Sets value of input.
        
        @method value2input(value) 
        @param {mixed} value
       **/         
       value2input: function(value) {
           if(!value) {
             return;
           }
           this.$input.filter('[name="city"]').val(value.city);
           this.$input.filter('[name="street"]').val(value.street);
           this.$input.filter('[name="building"]').val(value.building);
       },       
       
       /**
        Returns value of input.
        
        @method input2value() 
       **/          
       input2value: function() { 
           return {
              city: this.$input.filter('[name="city"]').val(), 
              street: this.$input.filter('[name="street"]').val(), 
              building: this.$input.filter('[name="building"]').val()
           };
       },        
       
        /**
        Activates input: sets focus on the first field.
        
        @method activate() 
       **/        
       activate: function() {
            this.$input.filter('[name="city"]').focus();
       },  
       
       /**
        Attaches handler to submit form in case of 'showbuttons=false' mode
        
        @method autosubmit() 
       **/       
       autosubmit: function() {
           this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
           });
       }       
    });

    Address.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="editable-address"><label><span>City: </span><input type="text" name="city" class="input-small form-control"></label></div>'+
             '<div class="editable-address"><label><span>Street: </span><input type="text" name="street" class="input-small form-control"></label></div>'+
             '<div class="editable-address"><label><span>Building: </span><input type="text" name="building" class="input-mini form-control"></label></div>',
             
        inputclass: ''
    });

    $.fn.editabletypes.address = Address;

}(window.jQuery));
(function() {


}).call(this);
