import React from 'react';
import { Box } from 'admin-bro';
import styled from 'styled-components';
const ImageContainer = styled(Box)`
	width: 100px;
	height: 100px;
	background-color: green;
	& img {
		border-radius: 50px;
		width: 100px;
		height: 100px;
	}
`;
const ShowImage = ({ property, record }) => {
	const value = record.params[property.name];
	return (
		<ImageContainer pr='xl'>
			<img src={value} alt='avatar' srcset='' />
		</ImageContainer>
	);
};

export default ShowImage;
