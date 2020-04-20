import React, { PureComponent } from 'react';
import {
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	ComposedChart,
} from 'recharts';
import formatPostViews from '../../utils/formatPostViews';

const ViewsChart = ({ data }) => {
	const chartData = formatPostViews(data);
	return (
		<div style={{ width: '100%', height: 300 }}>
			<ResponsiveContainer>
				<ComposedChart
					data={chartData}
					margin={{
						top: 5,
						bottom: 5,
					}}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey='views' fill='#8884d8' />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ViewsChart;
