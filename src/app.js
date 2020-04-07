if (process.env.ADMIN_BRO_DEV_ENV) {
	require('@babel/register')({
		presets: [
			require.resolve('@babel/preset-react'),
			require.resolve('@babel/preset-env'),
			require.resolve('@babel/preset-typescript'),
		],
		plugins: [require.resolve('babel-plugin-styled-components')],
		extensions: ['.jsx', '.js', '.ts', '.tsx'],
		only: ['../src/adminBroConfig'],
	});
}

import app from './index';

const PORT = process.env.PORT || 3000;

app.listen(
	PORT,
	() =>
		process.env.NODE_ENV === 'development' &&
		console.log(`Listening on port ${PORT}`)
);
