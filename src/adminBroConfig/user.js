import AdminBro from 'admin-bro';
import { sort, timestamps } from './sort';

module.exports = {
	name: 'authors',
	sort,
	properties: {
		...timestamps,
		id: {
			isVisible: false,
		},
		password: {
			type: 'password',
		},
		firstName: {
			position: 0,
			components: {
				show: AdminBro.bundle('./components/ShowItem'),
			},
		},
		lastName: {
			position: 1,
			components: {
				show: AdminBro.bundle('./components/ShowItem'),
			},
		},
		email: {
			position: 2,
			components: {
				show: AdminBro.bundle('./components/ShowItem'),
			},
		},
		phoneNumber: {
			position: 3,
			components: {
				show: AdminBro.bundle('./components/ShowItem'),
			},
		},
		confirmed: {
			components: {
				show: AdminBro.bundle('./components/ShowItem'),
			},
		},
		role: {
			position: 100,
			components: {
				show: AdminBro.bundle('./components/ShowItem'),
			},
		},
		avatar: {
			position: -1,
			label: 'Profile',
			isVisible: {
				list: false,
				filter: false,
				show: true,
				edit: true,
			},
			components: {
				show: AdminBro.bundle('./components/ShowImage'),
			},
		},
		blocked: {
			isVisible: false,
		},
	},
	actions: {
		edit: {
			showInDrawer: true,
		},
		new: {
			showInDrawer: true,
		},

		// detailedStats: {
		// 	actionType: 'resource',
		// 	icon: 'fas fa-signal',
		// 	label: 'Resource statistics',
		// 	component: AdminBro.require('./components/detailedStats'),
		// 	handler: async (request, response, data) => {
		// 		return { true: 'ueas' };
		// 	},
		// },
		// dontTouchThis: {
		// 	actionType: 'record',
		// 	label: "don't touch this!!!",
		// 	icon: 'fas fa-exclamation',
		// 	guard: 'You can setup guards before an action - just in case.',
		// 	component: AdminBro.require('../components/dont-touch-this-action'),
		// 	handler: async (request, response, data) => {
		// 		return {
		// 			record: data.record.toJSON(),
		// 		};
		// 	},
		// },
	},
};
