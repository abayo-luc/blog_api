import { sort, timestamps } from './sort';
export default {
	name: 'Comments',
	sort,
	properties: {
		...timestamps,
		id: {
			isVisible: false,
		},
	},
};
