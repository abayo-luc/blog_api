import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	Box,
	ApiClient,
	useNotice,
	H4,
	H5,
	Text,
	Illustration,
	ViewHelpers,
	useTranslation,
	Button,
} from 'admin-bro';
import DashboardHeader from './DashboardHeader';
import ViewsChart from './ViewsChart';
const api = new ApiClient();

const boxes = ({ translateMessage }) => [
	{
		variant: 'DocumentCheck',
		title: translateMessage('customizeResources_title'),
		subtitle: translateMessage('customizeResources_subtitle'),
	},
	{
		variant: 'DocumentSearch',
		title: 'Daily visit',
		subtitle: "Total number of people who visited Kunda's cook",
	},
];
const Image = styled.img`
	height: 55px;
`;
const Card = styled(Box)`
	display: ${({ flex }) => (flex ? 'flex' : 'block')};
	color: ${({ theme }) => theme.colors.grey100};
	text-decoration: none;
	border: 1px solid transparent;
	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.primary100};
		box-shadow: ${({ theme }) => theme.shadows.cardHover};
	}
`;

Card.defaultProps = {
	variant: 'white',
	boxShadow: 'card',
};
const Dashboard = () => {
	const [data, setData] = useState({
		categories: [],
		postsCount: 0,
		usersCount: 0,
		monthlyViews: {
			views: 0,
			data: [],
		},
		frontEndUrl: null,
	});
	const vHelpers = new ViewHelpers();
	useEffect(() => {
		api.getDashboard({ test: 1 }).then((response) => {
			setData(response.data);
		});
	}, []);

	return (
		<Box>
			<DashboardHeader />
			<Box
				mt={['xl', 'xl', '-100px']}
				mb='xl'
				mx={[0, 0, 0, 'auto']}
				px={['default', 'lg', 'xxl', '0']}
				position='relative'
				flex
				flexDirection='row'
				flexWrap='wrap'
				width={[1, 1, 1, 1024]}>
				<Box width={[1, 1, 1 / 2]} p='lg'>
					<Card
						as='a'
						flex
						href={vHelpers.resourceUrl({ resourceId: 'Posts' })}>
						<Box flexShrink={0}>
							<Image
								src='https://res.cloudinary.com/dghepsznx/image/upload/v1586274114/sideprojects/blog.png'
								alt='a'
							/>
						</Box>
						<Box ml='xl'>
							<Text>Total posts</Text>
							<H4>{data.postsCount}</H4>
						</Box>
					</Card>
				</Box>
				<Box width={[1, 1, 1 / 2]} p='lg'>
					<Card
						as='a'
						flex
						href={vHelpers.resourceUrl({ resourceId: 'Users' })}>
						<Box flexShrink={0}>
							<Image
								src='https://res.cloudinary.com/dghepsznx/image/upload/v1586274010/sideprojects/teacher.png'
								alt='a'
							/>
						</Box>
						<Box ml='xl'>
							<Text>Total users</Text>
							<H4>{data.usersCount}</H4>
						</Box>
					</Card>
				</Box>

				<Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p='lg'>
					<Card>
						<Text textAlign='center'>
							<H4 mt='lg'>{data.monthlyViews.views}</H4>
							<Text>Total monthly visit</Text>
						</Text>
					</Card>
				</Box>
				<Box width={[1, 1, 1, 1 / 1.5]} p='lg'>
					<Card>
						<Text textAlign='center'>
							<H4>Monthly Visits / Country</H4>
							<ViewsChart data={data.monthlyViews.data} />
						</Text>
					</Card>
				</Box>
				<Box variant='white' boxShadow='card' width={1} m='lg'>
					<Text textAlign='center'>
						<Image src='https://res.cloudinary.com/dghepsznx/image/upload/v1586257320/sideprojects/poem.png' />
						<H4>Kunda's Cook Blog</H4>
						<Text mt='xxl'>
							<Button
								as='a'
								size='sm'
								variant='primary'
								href={data.frontEndUrl}>
								View Blog
							</Button>
						</Text>
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
