import AdminBro from 'admin-bro';
import { sort, timestamps } from './sort';
export default {
	name: 'Categories',
	sort,
	properties: {
		...timestamps,
		id: {
			isVisible: false,
		},
		name: {
			components: {
				show: AdminBro.bundle('./components/ShowItem'),
			},
		},
	},
	actions: {
		edit: {
			showInDrawer: true,
		},
		new: {
			showInDrawer: true,
		},
	},
};
