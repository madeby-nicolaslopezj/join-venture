/**
 * This file is intended to be used only locally.
 * Do not put sensitive data on shared code, even
 * if it's inside "Meteor.isServer"
 */

if (Meteor.isServer) {

	process.env.AWS_KEY = 'AKIAJER2ANLASXVA4OTA';
	process.env.AWS_SECRET = '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';
	process.env.AWS_BUCKET = 'meteor-cms-default';

}

SimpleSchema.debug = true