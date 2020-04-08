import React, { PureComponent } from 'react';
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

const data = [
	{
		name: 'Rwanda',
		views: 2400,
	},
	{
		name: 'Uganda',
		views: 11398,
	},
	{
		name: 'Kenya',
		views: 9800,
	},
	{
		name: 'US',
		views: 3908,
	},
	{
		name: 'UK',
		views: 4800,
	},
	{
		name: 'Others',
		views: 4300,
	},
];

const ViewsChart = () => {
	return (
		<BarChart
			width={500}
			height={300}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}>
			<CartesianGrid strokeDasharray='3 3' />
			<XAxis dataKey='name' />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey='views' fill='#8884d8' />
		</BarChart>
	);
};

export default ViewsChart;
