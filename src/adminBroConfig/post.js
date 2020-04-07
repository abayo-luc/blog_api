import AdminBro from 'admin-bro';
import { sort, timestamps } from './sort';
export default {
	name: 'Poems & Articles',
	sort,
	properties: {
		...timestamps,
		id: {
			isVisible: false,
		},
		content: {
			type: 'richtext',
			isVisible: {
				list: false,
				filter: false,
				show: true,
				edit: true,
			},
		},
		userId: {
			type: 'reference',
		},
		categoryId: {
			type: 'reference',
		},
	},
};
