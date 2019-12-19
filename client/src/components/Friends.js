import React, {useState, useEffect, useContext} from 'react';
import User from './User';
import { CardGroup, Header, Divider } from 'semantic-ui-react';
import {AuthContext, } from '../providers/AuthProvider';
import axios from 'axios';

const Friends = (props) => {
	const {user} = useContext(AuthContext);
	const [friends, setFriends] = useState([]);
	useEffect( ()=> {
		let unmounted = false;
		console.log()
		if(!unmounted) {
			axios.get('/api/friends')
				.then(res =>{
					setFriends(res.data);
				})
				.catch(err =>{
					console.log(err);
				})
		}
		return () => {unmounted=true;};
	}, [user]);

	const toggleFriend = (use) => {
		setFriends(friends.map(u => {
			if(u.id === use.id) props.updateFriend(use.id);
			return u;
		}));
	}

	return(
		<>
			<Header>All Friends</Header>
			<Divider/>
			{ friends.length <= 1 ?
				 <Header textAlign='center' as="h1">Whoops, You are a friendless loser :( </Header>
				 :
				<CardGroup>
					{friends.map(u => {
						if(u.id !== user.id)
						return <User 
											key={u.id} 
											user={u} 
											toggleFriend={toggleFriend}
										/>
					return null
					})}
				</CardGroup>
			}
		</>
	);
};

export default Friends;