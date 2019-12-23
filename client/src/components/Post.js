import React from 'react';
import { Container, Header, Button, Icon, Divider } from 'semantic-ui-react';

const Post = (props) => {
const {status, likes, created_at} = props
const date = new Date(created_at);
	return(
		<>
			<Container>
				<Header>{date.toLocaleDateString()}</Header>
				<Container>
					{status}
				</Container>
				<Divider hidden/>
				<Button icon labelPosition="left"
					size="mini"
					color="red"
				>
					Delete
					<Icon corner name = "minus square"/>
				</Button>
			</Container>
		</>
	);
};

export default Post;