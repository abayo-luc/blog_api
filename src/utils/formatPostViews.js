export default (data) =>
	Object.values(
		data.reduce(
			(prev, current) => ({
				...prev,
				[current.country]: {
					name: current.country,
					views: prev[current.country] ? prev[current.country].views + 1 : 1,
				},
			}),
			{}
		)
	).filter((item) => item.views !== 0);
