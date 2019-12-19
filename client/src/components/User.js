import React, { useState, useContext, useEffect } from 'react';
import {Card, CardContent, CardHeader, Button} from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const User = (props) => {
	const {user} = useContext(AuthContext);
	const [onUser, setUser] = useState({});
	const [clicked, setClicked] = useState(false);
	useEffect(() => {
		let unmount = false;
		if(!unmount) {
			axios.get(`/api/users/${props.user.id}`)
				.then(res => {
					setUser(res.data);
				})
				.catch(err =>{
					console.log(err);
				})
		}
		return () => {
			unmount = true;
		}
	}, [user])

	const setButton = () => {
		props.toggleFriend(onUser);
	}

	const getType = () => {
		if(user.id === onUser.id) return 0;
		else if (user.friends.includes(onUser.id))
			return 2;
		
			return 1;
	}

	const getButton = () => {
		const type = getType();
		if( type === 0) {
			return null;
		} else if (type === 1) {
			return(
				<Button 
					color="green"
					onClick={() =>
						{
							setButton();
						}
					}
				>Friend</Button>
			);
		}
		return(
			<Button 
				color="red"
				onClick={() => 
					{
						setButton();
					}
				}
			>UnFriend</Button>
		); 
	}

	return (
		<>
			<Card>
				<CardContent>
					<CardHeader>{props.user.username}</CardHeader>
				</CardContent>
				<CardContent>
					{
						getButton()
					}
				</CardContent>
			</Card>
		</>
	)
}

export default User;