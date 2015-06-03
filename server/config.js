S3.config = {
	key: process.env.AWS_KEY || 'thisisnotasecret',
	secret: process.env.AWS_SECRET || 'thisisasecret',
	bucket: process.env.AWS_BUCKET || 'buckername'
};