import React from 'react';
import styled from 'styled-components';
import { normalizeFont, colors } from '../../../config';

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Message = styled.Text`
	font-size: ${normalizeFont(16)};
	color: ${colors.greyDark}
`;

export default ({ message }) => (
	<Container>
		<Message>{message}</Message>
	</Container>
);
