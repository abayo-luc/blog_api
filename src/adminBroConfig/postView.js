import { sort, timestamps } from './sort';
export default {
	name: 'Views',
	sort,
	properties: {
		...timestamps,
		id: {
			isVisible: false,
		},
		country: {
			position: -1,
		},
		postId: {
			position: 0,
		},
	},
	actions: {
		show: {
			isAccessible: false,
		},
		edit: {
			isAccessible: false,
		},
		new: {
			isAccessible: false,
		},
		delete: {
			isAccessible: false,
		},
		bulkDelete: {
			isAccessible: false,
		},
	},
};
