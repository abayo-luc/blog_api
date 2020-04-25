import AdminBro from 'admin-bro';
import { sort, timestamps } from './sort';
export default {
	name: 'Poems & Articles',
	sort,
	options: { showProperties: ['title', 'content', 'userId', 'authorId'] },
	properties: {
		...timestamps,
		id: {
			isVisible: false,
		},
		title: {
			position: -1,
			components: {
				show: AdminBro.bundle('./components/ShowItem'),
			},
		},
		content: {
			position: 0,
			type: 'richtext',
			isVisible: {
				list: false,
				filter: false,
				show: true,
				edit: true,
			},
			components: {
				edit: AdminBro.bundle('./components/EditContent'),
			},
		},
		userId: {
			position: 1,
			type: 'reference',
			label: 'Author',
			table: 'User',
			isVisible: {
				list: true,
				filter: true,
				show: true,
				edit: false,
			},
			components: {
				show: AdminBro.bundle('./components/ShowItem'),
			},
		},
		categoryId: {
			position: 2,
			type: 'reference',
			table: 'Category',
			components: {
				show: AdminBro.bundle('./components/ShowItem'),
			},
		},
	},
	actions: {
		new: {
			before: async (request) => {
				if (request.session.adminUser && !request.payload.userId) {
					request.payload = {
						...request.payload,
						userId: request.session.adminUser.id,
					};
				}
				return request;
			},
		},
	},
};
