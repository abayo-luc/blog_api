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
		author: {
			type: 'reference',
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
