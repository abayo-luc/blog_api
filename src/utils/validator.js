import Joi from '@hapi/joi';

export const validateComment = Joi.object({
	username: Joi.string().required(),
	content: Joi.string()
		.max(500)
		.message('Comment must be less tan 500 characters')
		.required(),
});

export const validateView = Joi.object({
	country: Joi.string().required(),
	city: Joi.string(),
	postId: Joi.string()
		.guid({
			version: ['uuidv4', 'uuidv5'],
		})
		.required(),
});
