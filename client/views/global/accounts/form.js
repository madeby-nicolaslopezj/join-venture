// Simply 'inherites' helpers from AccountsTemplates
Template.accountsForm.helpers(AccountsTemplates.atFormHelpers);
Template.accountsForm.helpers(AccountsTemplates.atTitleHelpers);
Template.accountsForm.helpers(AccountsTemplates.atPwdFormHelpers);
Template.accountsForm.events(AccountsTemplates.atPwdFormEvents);
Template.accountsForm.helpers(AccountsTemplates.atPwdFormBtnHelpers);