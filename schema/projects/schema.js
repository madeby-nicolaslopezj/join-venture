ProjectsDescriptionSchema = new SimpleSchema({
	name: {
		type: String,
		max: 50,
		autoform: {
			label: false
		}
	},
	marketAndOportunity: {
		type: Object,
		optional: true,
		label: 'Market and Oportunity'
	},
	'marketAndOportunity.oportunity': {
		type: String,
		optional: true,
		label: 'Describe the oportunity',
		max: 1200,
		autoform: {
			type: 'textarea'
		}
	},
	'marketAndOportunity.industry': {
		type: String,
		optional: true,
		autoform: {
			noselect: true,
			options: {
				'Retail': 'Retail',
				'services': 'Services',
				'Biotecnology': 'Biotecnology',
				'Health': 'Health',
				'Basic Services': 'Basic Services',
				'Energy Efficiency': 'Energy Efficiency',
				'General Services': 'General Services',
				'TICS': 'TICS'
			}
		}
	},
	'marketAndOportunity.referencesLinksOfTheMarket': {
		type: [Object],
		optional: true,
	},
	'marketAndOportunity.referencesLinksOfTheMarket.$.link': {
		type: String,
		label: "Link",
		optional: true,
	},
	'marketAndOportunity.referencesLinksOfTheMarket.$.description': {
		type: String,
		label: "Description",
		optional: true,
		autoform: {
			type: 'textarea'
		}
	},
	business: {
		type: Object,
		optional: true,
		label: 'Business',
	},
	'business.tweet': {
		type: String,
		label: "Tweet of the business",
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
		label: "Describe the business shortly",
		optional: true,
		max: 1500,
		autoform: {
			type: 'textarea'
		}
	},
	team: {
		type: Object,
		label: 'Team',
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
		label: 'Years of experience',
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
		label: 'Dedication (min 1%, max 100%)',
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
		label: 'Milestones and Relevant History',
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
		label: "Link",
		optional: true,
	},
	'history.interestingLinks.$.description': {
		type: String,
		label: "Description",
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
		label: "Email",
		optional: true,
	},
	'history.references.$.phone': {
		type: String,
		label: "Phone",
		optional: true,
	},
	'history.references.$.description': {
		type: String,
		label: "Description",
		optional: true,
		autoform: {
			type: 'textarea'
		}
	},
	actualStateAndProyections: {
		type: Object,
		optional: true,
		label: 'Actual State and Proyections',
	},
	'actualStateAndProyections.commercialStrategy': {
		type: String,
		optional: true,
		max: 1500,
		autoform: {
			type: 'textarea'
		}
	},
	'actualStateAndProyections.inversionStage': {
		type: String,
		optional: true,
		autoform: {
			noselect: true,
			options: {
				'Concept': 'Concept',
				'Seed': 'Seed (prototype)',
				'Early Stage': 'Early Stage',
				'Growing': 'Growing',
				'Consolidated': 'Consolidated',
			}
		}
	},
	'actualStateAndProyections.employeesNumber': {
		type: Number,
		label: 'Employees Number',
		optional: true,
	},
	'actualStateAndProyections.mensualIncome': {
		type: String,
		label: 'Mensual Income of the last 12 months',
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
			noselect: true,
			options: {
				'No Sales': 'No Sales',
				'First Sales': 'First Sales',
				'Breakeven': 'Breakeven',
				'Rentable': 'Rentable',
				'Growing': 'Growing',
			}
		}
	},
	finances: {
		type: Object,
		optional: true,
		label: 'Finances',
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
		label: 'Payback in months',
		min: 1,
		max: 60,
	},
	'finances.npd5YearsPercetage': {
		type: Number,
		optional: true,
		label: 'Net Present Value (rate of discount)',
		min: 1,
		max: 100,
	},
	'finances.npd5YearsNumber': {
		type: String,
		optional: true,
		label: 'Net Present Value',
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
		label: 'EERR',
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
		label: 'Offer to the investors',
	},
	'offerToTheInvestors.percentageToOffer': {
		type: String,
		optional: true,
	},
	'offerToTheInvestors.directorsToOffer': {
		type: String,
		label: 'Directors to offer (Example: 1 of 3)',
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
		label: 'Legal Basics',
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
		label: 'Legal Company Name',
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
	'legalBasics.actualDirectors': {
		type: [String],
		optional: true,
	},
	legal: {
		type: Object,
		label: 'Legal Specific',
		optional: true,
	},
	'legal.inscriptionInTheCommerce': {
		type: String,
		label: 'Inscripción en el Registro de Comercio con vigencia, del  extracto de escritura de constitución (Máximo 30 día de antigüedad)*',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.societyVigency': {
		type: String,
		label: 'Certificado de vigencia de la sociedad*',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.authorizedCopyOfWriteOfConstitution': {
		type: String,
		label: 'Copia autorizada Escritura de Constitución**',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.statutesInscriptionInTheCommerce': {
		type: String,
		label: 'Inscripción en Registro de Comercio*',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.officialPublication': {
		type: String,
		label: 'Publicación en Diario Oficial',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.rutPhoto': {
		type: String,
		label: 'Fotocopia del RUT',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.antecedentsInvestors': {
		type: String,
		label: 'Antecedentes accionistas personas naturales (RUT, Estado civil, Certificado de matrimonio, Profesión u oficio)',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.antecedentsInvestorsJuridics': {
		type: String,
		label: 'Antecedentes accionistas personas jurídicas (Copia autorizada Escritura de Constitución**, Inscripción en Registro de Comercio*, Publicación en Diario Oficial, RUT)',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.powersReduction': {
		type: String,
		label: 'Reducción a escritura pública Junta de Accionistas donde consta la composición del Directorio que otorgó poderes',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.powersSubsidy': {
		type: String,
		label: 'En subsidio de lo anterior, certificado del gerente general, otorgado en virtud del art. 135 L. 18.046 que de cuenta de la composición del Directorio que otorgó poderes',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.powersWritingReduction': {
		type: String,
		label: 'Reducción a escritura pública del acta de Directorio en que se otorgaron poderes',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.investorsRegistry': {
		type: String,
		label: 'Registro de accionistas',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.tributaryCarole': {
		type: String,
		label: 'Cartola de situación tributaria***',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.antecedentsLaboral': {
		type: String,
		label: 'Antecedentes laborales y previsionales (Certificado de Antecedentes Laborales y Previsionales, Certificado de Cumplimiento de Obligaciones laborales y Previsionales)',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.pendingJudges': {
		type: String,
		label: 'Juicios Pendientes',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
	'legal.subjectsOrBusinessWithProblems': {
		type: String,
		label: 'Asuntos o negocios que potencialmente pueden dar lugar a un litigio con terceros',
		optional: true,
		autoform: {
			type: 'venture_file'
		},
	},
})

ProjectsReviewStatusSchema = new SimpleSchema({
	analist: {
		type: Boolean,
		label: "Analist Approved"
	},
	expert: {
		type: Boolean,
		label: "Expert Approved"
	},
	comission: {
		type: Boolean,
		label: "Comission Approved"
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