const AdminBro = require('admin-bro');
const { sort, timestamps } = require('./sort');

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
		avatar: {
			isVisible: {
				list: false,
				filter: false,
				show: true,
				edit: true,
			},
		},
		blocked: {
			isVisible: false,
		},
	},
	actions: {
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
