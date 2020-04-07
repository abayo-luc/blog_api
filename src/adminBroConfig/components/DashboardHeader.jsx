import React from 'react';
import { Box, H2, Text, Illustration } from 'admin-bro';

const pageHeaderHeight = 284;
const pageHeaderPaddingY = 74;
const pageHeaderPaddingX = 250;

const DashboardHeader = () => {
	return (
		<Box position='relative' overflow='hidden'>
			<Box
				position='absolute'
				top={50}
				left={-10}
				opacity={[0.2, 0.4, 1]}
				animate>
				<Illustration variant='Astronaut' />
			</Box>
			<Box
				position='absolute'
				top={-70}
				right={-15}
				opacity={[0.2, 0.4, 1]}
				animate>
				<Illustration variant='Planet' />
			</Box>
			<Box
				bg='grey100'
				height={pageHeaderHeight}
				py={pageHeaderPaddingY}
				px={['default', 'lg', pageHeaderPaddingX]}>
				<Text textAlign='center' color='white'>
					<H2>Welcome !!</H2>
					<Text opacity='0.8'>This is Kunda's Cook, and home of poetry.</Text>
				</Text>
			</Box>
		</Box>
	);
};

export default DashboardHeader;
