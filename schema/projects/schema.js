doth = function() {
	var toLang = {};
	_.each(ProjectsDescriptionSchema.label(), function(label, key) {
		toLang[key] = { label: label }
	});
	return toLang;
}

Meteor.startup(function() {
	Router.route('asdf', function() {
		this.response.end(JSON.stringify(doth(), null, 2));
	}, { where: 'server' });
})

ProjectsDescriptionSchema = new SimpleSchema({
	name: {
		type: String,
		max: 50,
		autoform: {

		}
	},
	marketAndOpportunity: {
		type: Object,
		optional: true
	},
	'marketAndOpportunity.opportunity': {
		type: String,
		optional: true,
		max: 1200,
		autoform: {
			type: 'textarea'
		}
	},
	'marketAndOpportunity.industry': {
		type: String,
		optional: true,
		autoform: {
			noselect: true
		}
	},
	'marketAndOpportunity.referencesLinksOfTheMarket': {
		type: [Object],
		optional: true,
	},
	'marketAndOpportunity.referencesLinksOfTheMarket.$.link': {
		type: String,
		optional: true,
	},
	'marketAndOpportunity.referencesLinksOfTheMarket.$.description': {
		type: String,
		optional: true,
		autoform: {
			type: 'textarea'
		}
	},
	business: {
		type: Object,
		optional: true,
	},
	'business.logo': {
		type: String,
		optional: true,
		autoform: {
			type: 'venture_file'
		}
	},
	'business.tweet': {
		type: String,
		optional: true,
		max: 140,
		autoform: {
			type: 'textarea'
		}
	},
	'business.businessPresentation': {
		type: String,
		optional: true,
		autoform: {
			type: 'venture_file'
		}
	},
	'business.description': {
		type: String,
		optional: true,
		max: 1500,
		autoform: {
			type: 'textarea'
		}
	},
	team: {
		type: Object,
		optional: true,
	},
	'team.members': {
		type: [Object],
		optional: true
	},
	'team.members.$.firstName': {
		type: String,
		optional: true,
	},
	'team.members.$.lastName': {
		type: String,
		optional: true,
	},
	'team.members.$.rut': {
		type: String,
		optional: true,
	},
	'team.members.$.linkedin': {
		type: String,
		optional: true,
	},
	'team.members.$.role': {
		type: String,
		optional: true,
	},
	'team.members.$.experience': {
		type: Number,

		optional: true,
	},
	'team.members.$.relevantExperience': {
		type: String,
		optional: true,
		max: 1500,
		autoform: {
			type: 'textarea'
		}
	},
	'team.members.$.dedication': {
		type: Number,

		optional: true,
		max: 100,
		min: 1,
	},
	'team.members.$.profesion': {
		type: String,
		optional: true,
		autoform: {
			type: 'textarea'
		}
	},
	history: {
		type: Object,
		optional: true,

	},
	'history.founded': {
		type: Date,
		optional: true,
		autoform: {
			afFieldInput: {
				type: "bootstrap-datepicker"
			}
		}
	},
	'history.history': {
		type: String,
		optional: true,
		max: 1500,
		autoform: {
			type: 'textarea'
		}
	},
	'history.milestones': {
		type: [Object],
		optional: true
	},
	'history.milestones.$.date': {
		type: Date,
		optional: true,
		autoform: {
			afFieldInput: {
				type: "bootstrap-datepicker"
			}
		}
	},
	'history.milestones.$.description': {
		type: String,
		optional: true,
		max: 1500,
		autoform: {
			type: 'textarea'
		}
	},
	'history.interestingLinks': {
		type: [Object],
		optional: true,
	},
	'history.interestingLinks.$.link': {
		type: String,

		optional: true,
	},
	'history.interestingLinks.$.description': {
		type: String,

		optional: true,
		autoform: {
			type: 'textarea'
		}
	},
	'history.references': {
		type: [Object],
		optional: true,
	},
	'history.references.$.email': {
		type: String,

		optional: true,
	},
	'history.references.$.phone': {
		type: String,

		optional: true,
	},
	'history.references.$.description': {
		type: String,

		optional: true,
		autoform: {
			type: 'textarea'
		}
	},
	actualStateAndProyections: {
		type: Object,
		optional: true,

	},
	'actualStateAndProyections.commercialStrategy': {
		type: String,
		optional: true,
		max: 1500,
		autoform: {
			type: 'textarea'
		}
	},
	'actualStateAndProyections.investmentStage': {
		type: String,
		optional: true,
		autoform: {
			noselect: true
		}
	},
	'actualStateAndProyections.employeesNumber': {
		type: Number,
		optional: true,
	},
	'actualStateAndProyections.mensualIncome': {
		type: String,

		optional: true,
		autoform: {
			noselect: true,
			options: {
				'< $1MM': '< $1MM',
				'< $2MM': '< $2MM',
				'< $4MM': '< $4MM',
				'< $8MM': '< $8MM',
				'< $20MM': '< $20MM',
				'> $20MM': '< $20MM',
			}
		}
	},
	'actualStateAndProyections.numberOfClients': {
		type: String,
		optional: true,
		autoform: {
			noselect: true,
			options: {
				'0': '0',
				'1':'1',
				'1-5':'1-5',
				'5-10':'5-10',
				'10-20':'10-20',
				'20-40':'20-40',
				'40+':'40+',
			}
		}
	},
	'actualStateAndProyections.commercialStatus': {
		type: String,
		optional: true,
		autoform: {
			noselect: true
		}
	},
	finances: {
		type: Object,
		optional: true,

	},
	'finances.plansToSpendTheCapital': {
		type: [Object],
		optional: true,
	},
	'finances.plansToSpendTheCapital.$.plan': {
		type: String,
		optional: true
	},
	'finances.plansToSpendTheCapital.$.percentage': {
		type: Number,
		optional: true
	},
	'finances.businessModel': {
		type: String,
		optional: true,
		max: 1500,
		autoform: {
			type: 'textarea'
		}
	},
	'finances.payback': {
		type: Number,
		optional: true,

		min: 1,
		max: 60,
	},
	'finances.npd5YearsPercetage': {
		type: Number,
		optional: true,

		min: 1,
		max: 100,
	},
	'finances.npd5YearsNumber': {
		type: String,
		optional: true,

	},
	'finances.actualOperationalMargin': {
		type: Number,
		optional: true,
		min: 1,
		max: 100,
	},
	'finances.stableOperationalMargin': {
		type: Number,
		optional: true,
		min: 1,
		max: 100,
	},
	'finances.averageMonthlyClientsInTheLast12Months': {
		type: Number,
		optional: true,
	},
	'finances.averageMonthlyBillingInTheLast12Months': {
		type: Number,
		optional: true,
	},
	'finances.averageMonthlyCapitalBurnRate': {
		type: Number,
		optional: true,
	},
	'finances.eerr': {
		type: String,

		autoform: {
			type: 'venture_file'
		},
		optional: true,
	},
	'finances.balance': {
		type: String,
		autoform: {
			type: 'venture_file'
		},
		optional: true,
	},
	'finances.proyection': {
		type: String,
		autoform: {
			type: 'venture_file'
		},
		optional: true,
	},
	'finances.ivaPayment': {
		type: String,
		autoform: {
			type: 'venture_file'
		},
		optional: true,
	},
	'finances.fixedAssets': {
		type: Number,
		optional: true,
	},
	'finances.fixedAssetsFile': {
		type: String,
		autoform: {
			type: 'venture_file'
		},
		optional: true,
	},
	'finances.debts': {
		type: Number,
		optional: true,
	},
	'finances.debtsFile': {
		type: String,
		autoform: {
			type: 'venture_file'
		},
		optional: true,
	},
	offerToTheInvestors: {
		type: Object,
		optional: true,

	},
	'offerToTheInvestors.percentageToOffer': {
		type: String,
		optional: true,
	},
	'offerToTheInvestors.directorsToOffer': {
		type: String,

		optional: true,
	},
	'offerToTheInvestors.capitalToRaise': {
		type: String,
		optional: true,
	},
	'offerToTheInvestors.capitalContributionOfEntrepeneurs': {
		type: String,
		optional: true,
	},
	'offerToTheInvestors.workingHoursContributionOfEntrepeneursAtMarketPrice': {
		type: String,
		optional: true,
	},
	'offerToTheInvestors.dividendPerStatutes': {
		type: Number,
		optional: true,
		min: 1,
		max: 100,
	},
	legalBasics: {
		type: Object,

		optional: true,
	},
	'legalBasics.website': {
		type: String,
		optional: true,
	},
	'legalBasics.phone': {
		type: String,
		optional: true,
	},
	'legalBasics.legalName': {
		type: String,

		optional: true,
	},
	'legalBasics.direction': {
		type: String,
		optional: true,
	},
	'legalBasics.legalRepresentativeRut': {
		type: String,
		optional: true,
	},
	'legalBasics.legalRepresentativeName': {
		type: String,
		optional: true,
	},
	'legalBasics.razonSocial': {
		type: String,
		optional: true,
	},
	'legalBasics.enterpriseRut': {
		type: String,
		optional: true,
	},
	'legalBasics.shareHolders': {
		type: [Object],
		optional: true,
	},
	'legalBasics.shareHolders.$.name': {
		type: String,

	},
	'legalBasics.shareHolders.$.email': {
		type: String,

	},
	'legalBasics.shareHolders.$.shares': {
		type: String,

	},
	'legalBasics.shareHolders.$.percentage': {
		type: String,

	},
	'legalBasics.actualDirectors': {
		type: [String],
		optional: true,
	},
	legal: {
		type: Object,

		optional: true,
	},
	'legal.inscriptionInTheCommerce': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.societyVigency': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.authorizedCopyOfWriteOfConstitution': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.statutesInscriptionInTheCommerce': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.officialPublication': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.rutPhoto': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.antecedentsInvestors': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.antecedentsInvestorsJuridics': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.powersReduction': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.powersSubsidy': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.powersWritingReduction': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.investorsRegistry': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.tributaryCarole': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.antecedentsLaboral': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.pendingJudges': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.subjectsOrBusinessWithProblems': {
		type: String,

		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
})

ProjectsReviewStatusSchema = new SimpleSchema({
	analist: {
		type: Boolean
	},
	expert: {
		type: Boolean
	},
	comission: {
		type: Boolean
	}
})

ProjectsSchema = new SimpleSchema({
	reviewStatus: {
		type: ProjectsReviewStatusSchema
	},
	createdBy: {
		type: String
	},
	description: {
		type: ProjectsDescriptionSchema
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
})

Projects.attachSchema(ProjectsSchema);
