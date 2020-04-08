import AdminBro from 'admin-bro';
export const timestamps = {
	updatedAt: {
		isVisible: { edit: false, show: true, list: true },
		components: {
			show: AdminBro.bundle('./components/ShowItem'),
		},
	},
	createdAt: {
		isVisible: { edit: false, show: true, list: true },
		components: {
			show: AdminBro.bundle('./components/ShowItem'),
		},
	},
};

export const sort = {
	direction: 'desc',
	sortBy: 'createdAt',
};
