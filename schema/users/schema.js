UsersProfileSchema = new SimpleSchema({
    firstName: {
        type: String,
        regEx: /^.{2,25}$/,
        optional: true
    },
    lastName: {
        type: String,
        regEx: /^.{2,25}$/,
        optional: true
    },
    country: {
        type: String,
        allowedValues: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
        ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands"
        ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
        ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
        ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
        ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
        ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
        ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
        ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
        ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
        ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
        ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
        ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia"
        ,"Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
        ,"Yemen","Zambia","Zimbabwe"],
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    rut: {
        type: String,
        regEx: /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/,
        optional: true
    },
    phone: {
        type: String,
        optional: true,
    },
    website: {
        type: String,
        optional: true
    },
    description: {
        type: String,
        optional: true,
        autoform: {
        	type: 'textarea'
        }
    },
    picture: {
        type: String,
        optional: true,
        autoform: {
            omit: true
        }
    },
});

UsersInvestorProfileSchema = new SimpleSchema({
    interestedProjects: {
        type: [String],
        optional: true,
        autoform: {
            omit: true
        }
    },
    investventRank: {
        type: String,
        optional: false,
        autoform: {
            noselect: true,
            options: {
                '< $10.000 USD': '< $10.000 USD',
                '< $25.000 USD': '< $25.000 USD',
                '< $50.000 USD': '< $50.000 USD',
                '< $100.000 USD': '< $100.000 USD',
                '< $500.000 USD': '< $500.000 USD',
                '> $500.000 USD': '> $500.000 USD',
            }
        }
    },
    projectsStatus: {
        type: [String],
        optional: false,
        autoform: {
          noselect: true
        }
    },
    employeesNumber: {
        type: String,
        optional: false,
        autoform: {
            noselect: true,
            options: {
                '1':'1',
                '3':'3',
                '5':'5',
                '10':'10',
                '10+':'10+',
            }
        }
    },
    mensualIncome: {
        type: String,
        optional: false,
        autoform: {
            noselect: true,
            options: {
                '< $1MM': '< $1MM',
                '< $2MM': '< $2MM',
                '< $4MM': '< $4MM',
                '< $8MM': '< $8MM',
                '< $20MM': '< $20MM',
                '> $20MM': '> $20MM',
            }
        }
    },
    commercialStatus: {
        type: [String],
        optional: false,
        autoform: {
            noselect: true,
            type: 'select-checkbox'
        }
    },
    interestAreas: {
        type: [String],
        optional: false,
        autoform: {
          noselect: true,
          type: 'select-checkbox'
        }
    },
    team: {
        type: [String],
        optional: false,
        autoform: {
            noselect: true,
            type: 'select-checkbox'
        }
    },
    experience: {
        type: Number,
        optional: false,
    },
    directory: {
        type: [String],
        optional: false,
        autoform: {
            noselect: true,
            type: 'select-checkbox'
        }
    },
    legal: {
        type: [String],
        optional: false,
        autoform: {
            noselect: true,
            type: 'select-checkbox'
        }
    },
    localization: {
        type: [String],
        optional: false,
        autoform: {
            noselect: true,
            type: 'select-checkbox'
        }
    },
    coInversion: {
        type: String,
        optional: false,
        autoform: {
            noselect: true
        }
    },
    investorType: {
        type: String,
        optional: false,
        autoform: {
            noselect: true
        }
    },
    anualRetability: {
        type: Number,
        min: 1,
        max: 100,
        optional: false,
    },
    payback: {
        type: Number,
        optional: false,
        min: 1,
        max: 60,
    },
    comment: {
        type: String,
        optional: true,
        autoform: {
            type: 'textarea'
        }
    }
});

UsersSchema = new SimpleSchema({
  username: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/,
    optional: true
  },
  emails: {
    type: [Object]
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: UsersProfileSchema,
    optional: true
  },
  investorProfile: {
    type: UsersInvestorProfileSchema,
    optional: true
  },
  viewableProjects: {
    type: [String],
    optional: true
  },
  status: {
    type: Object,
    optional: true,
    blackbox: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  roles: {
    type: Object,
    optional: true,
    blackbox: true
  }
})

Meteor.users.attachSchema(UsersSchema);
