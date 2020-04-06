import AdminBro from 'admin-bro';
import { sort, timestamps } from './sort';
export default {
	name: 'Post',
	sort,
	properties: {
		...timestamps,
		id: {
			isVisible: false,
		},
		content: {
			type: 'richtext',
			component: {
				list: AdminBro.bundle('./components/example'),
			},
			isVisible: {
				list: false,
				filter: false,
				show: true,
				edit: true,
			},
		},
	},
	// actions: {
	// 	show: {
	// 		isAccessible: true,
	// 	},
	// 	new: {
	// 		isAccessible: true,
	// 	},
	// 	edit: {
	// 		isAccessible: true,
	// 	},
	// 	list: {
	// 		showFilter: false,
	// 		after: (data) => {
	// 			return {
	// 				meta: data.meta,
	// 				records: [
	// 					{
	// 						params: {
	// 							title: 'Some hardcoded data',
	// 							content: 'Content',
	// 							category: '',
	// 						},
	// 						populated: {},
	// 						recordActions: [],
	// 						bulkActions: [],
	// 					},
	// 				],
	// 			};
	// 		},
	// 	},
	// 	delete: {
	// 		isAccessible: false,
	// 	},
	// },
};
