import React from 'react';
import Posts from './Posts';
import { Header, Divider, } from 'semantic-ui-react';

const Home = () => (
	<>
		<Header as="h1" textAlign="center">Fake Space</Header>
		<Divider/>
		<Header as="h3">My Posts</Header>
		<Divider hidden />
		<Posts/>
	</>
)

export default Home;