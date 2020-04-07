import theme from 'admin-bro-theme-dark';
import db from '../models';
import postOptions from './post';
import userOptions from './user';
import categoryOptions from './category';
import commentOptions from './comment';
import AdminBro from 'admin-bro';
const menu = {
	customized: { name: 'Resources', icon: 'NoodleBowl' },
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
			resource: db.sequelize.models.Post,
			options: {
				parent: menu.customized,
				...postOptions,
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
			resource: db.sequelize.models.Comment,
			options: {
				parent: menu.customized,
				...commentOptions,
			},
		},
	],
	branding: {
		companyName: "Kunda's Cook",
		softwareBrothers: false,
		logo:
			'https://res.cloudinary.com/dghepsznx/image/upload/v1586257320/sideprojects/poem.png',
		theme,
	},
	locale: {
		translations: {
			messages: {
				loginWelcome: 'Please login to proceed to admin dashboard',
			},
			labels: {
				Users: 'Author',
				Posts: 'Poems & Articles',
				Categories: 'Categories',
			},
		},
	},
	version: {
		admin: false,
	},
	dashboard: {
		handler: async (request, response, data) => {
			return {
				usersCount: await db.User.findAndCountAll().then((res) => {
					const { count } = res;
					return count;
				}),
				postsCount: await db.Post.findAndCountAll().then((res) => {
					const { count } = res;
					return count;
				}),
				categories: await db.Category.findAll(),
			};
		},
		component: AdminBro.bundle('./components/Dashboard'),
	},
};
