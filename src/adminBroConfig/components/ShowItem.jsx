import React from 'react';
import { Link, ViewHelpers, H4 } from 'admin-bro';
import moment from 'moment';
import styled from 'styled-components';
const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

const CustomLInk = styled(Link)`
	display: block;
	font-family: 'Roboto', sans-serif;
	font-size: 12px;
	line-height: 16px;
	margin-bottom: 8px;
`;
const Text = styled.p`
	display: block;
	font-family: 'Roboto', sans-serif;
	font-size: 12px;
	line-height: 16px;
	margin-bottom: 8px;
	&.label {
		font-weight: 600;
		margin-right: 5px;
	}
`;

const CustomLink = ({ title, id: recordId, reference: resourceId }) => {
	const vH = new ViewHelpers();
	return (
		<CustomLInk
			href={vH.recordActionUrl({ resourceId, recordId, actionName: 'show' })}
			size='lg'
			variant='primary'>
			{title}
		</CustomLInk>
	);
};
const ShowItem = ({ property, record }) => {
	let associated;
	let reference;
	let id;
	let title;
	let label;
	switch (property.name) {
		case 'userId':
			label = 'Author';
			break;
		case 'categoryId':
			label = 'Category';
			break;
		case 'postId':
			label = 'Post';
			break;
		default:
			label = property.label;
			break;
	}
	if (record.populated?.[property.name]) {
		associated = record.populated?.[property.name];
		({ id, title } = associated);
		({ reference } = property);
	}
	let value = record.params[property.name];
	if (['createdAt', 'updatedAt'].includes(property.name)) {
		value = moment(value).format('MMMM Do YYYY, h:mm:ss a');
	}
	if (property.name == 'title') {
		return <H4>{value}</H4>;
	}
	return (
		<Container>
			<Text className='label'>{label}: </Text>
			<Text>
				{associated ? (
					<CustomLink title={title} id={id} reference={reference} />
				) : (
					value
				)}
			</Text>
		</Container>
	);
};

export default ShowItem;
