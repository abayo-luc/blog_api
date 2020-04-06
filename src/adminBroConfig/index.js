import theme from 'admin-bro-theme-dark';
import db from '../models';
import postOptions from './post';
import userOptions from './user';
import categoryOptions from './category';
const menu = {
	customized: { name: 'Sequelize', icon: 'fas fa-marker' },
};

export default {
	resources: [
		{
			resource: db.sequelize.models.User,
			options: {
				parent: menu.customized,
				...userOptions,
			},
		},
		{
			resource: db.sequelize.models.Category,
			options: {
				parent: menu.customized,
				...categoryOptions,
			},
		},
		{
			resource: db.sequelize.models.Post,
			options: {
				parent: menu.customized,
				...postOptions,
			},
		},
	],
	branding: {
		companyName: "Kunda's Cook",
		theme,
	},
	locale: {
		translations: {
			labels: {
				Posts: 'Article & Poems',
				Categories: 'Categories',
				Users: 'Authors',
			},
		},
	},
	version: {
		admin: false,
	},
};
