import dotenv from 'dotenv';
import theme from 'admin-bro-theme-dark';
import db from '../models';
import postOptions from './post';
import userOptions from './user';
import categoryOptions from './category';
import commentOptions from './comment';
import postViewOptions from './postView';
import AdminBro from 'admin-bro';
dotenv.config();
const { FRONT_END_URL } = process.env;
const menu = {
	others: { name: 'Data', icon: 'Sql' },
	customized: { name: 'Resources', icon: 'NoodleBowl' },
};

export default {
	resources: [
		{
			resource: db.Post,
			options: {
				parent: menu.customized,
				...postOptions,
			},
		},
		{
			resource: db.User,
			options: {
				parent: menu.customized,
				...userOptions,
			},
		},
		{
			resource: db.Category,
			options: {
				parent: menu.customized,
				...categoryOptions,
			},
		},
		{
			resource: db.Comment,
			options: {
				parent: menu.customized,
				...commentOptions,
			},
		},
		{
			resource: db.PostView,
			options: {
				parent: menu.others,
				...postViewOptions,
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
				PostViews: 'Views',
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
				frontEndUrl: FRONT_END_URL,
			};
		},
		component: AdminBro.bundle('./components/Dashboard'),
	},
};
