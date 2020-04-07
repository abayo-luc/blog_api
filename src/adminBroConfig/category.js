import { sort, timestamps } from './sort';
export default {
	name: 'Categories',
	sort,
	properties: {
		...timestamps,
		id: {
			isVisible: false,
		},
	},
};
