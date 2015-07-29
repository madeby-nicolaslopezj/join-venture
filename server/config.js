S3.config = {
	key: process.env.AWS_KEY || 'thisisnotasecret',
	secret: process.env.AWS_SECRET || 'thisisasecret',
	bucket: process.env.AWS_BUCKET || 'buckername',
	region: process.env.AWS_REGION || 'us-east-1'
};

if (Meteor.settings.google) {
	ServiceConfiguration.configurations.upsert({ service: 'google' }, { $set: Meteor.settings.google });
}
