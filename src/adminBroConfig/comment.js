import AdminBro from 'admin-bro';
import { sort, timestamps } from './sort';
export default {
	name: 'Comments',
	sort,
	properties: {
		...timestamps,
		id: {
			isVisible: false,
		},
		postId: {
			position: 0,
			components: {
				show: AdminBro.bundle('./components/ShowItem'),
			},
		},
		username: {
			position: 1,
			components: {
				show: AdminBro.bundle('./components/ShowItem'),
			},
		},
		content: {
			position: -1,
		},
	},
	actions: {
		show: {
			isAccessible: true,
		},
		edit: {
			isAccessible: false,
		},
		new: {
			isAccessible: false,
		},
	},
};
