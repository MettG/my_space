import React, {useState, useEffect, useContext} from 'react';
import User from './User';
import { CardGroup, Header, Divider } from 'semantic-ui-react';
import { AuthContext, } from '../providers/AuthProvider';
import axios from 'axios';

const Users = (props) => {
	const {user} = useContext(AuthContext);
	const [users, setUsers] = useState([]);
	useEffect( ()=> {
		let unmounted = false;
		if(!unmounted) {
			axios.get('/api/users')
				.then(res =>{
					setUsers(res.data);
				})
				.catch(err =>{
					console.log(err);
				})
		}
		return () => {unmounted=true;}
	}, [user]);

	const toggleFriend = (use) => {
		setUsers(users.map(u => {
			if(u.id === use.id) props.updateFriend(use.id);
			return u;
		}));
	}

	return(
		<>
			<Header>All Users</Header>
			<Divider/>
			<CardGroup>
				{users.map(u => {
					if(u.id !== user.id)
						return <User 
											key={u.id} 
											user={u} 
											toggleFriend={toggleFriend}
										/>
					return null
				})}
			</CardGroup>
		</>
	);
};

export default Users;