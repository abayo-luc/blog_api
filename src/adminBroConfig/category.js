import { sort, timestamps } from './sort';
export default {
	name: 'Post',
	sort,
	properties: {
		...timestamps,
		id: {
			isVisible: false,
		},
	},
};
