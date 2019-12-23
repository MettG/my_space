import {AuthContext} from '../providers/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import { Grid, GridColumn, Divider } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Post from './Post';
import PostForm from './PostForm';


const Posts = (props) => {
	const {user} = useContext(AuthContext);
	const [posts, setPosts] = useState([]);

	useEffect(()=> {
		const user_id = props.user === undefined ? user.id : props.user.id;
		axios.get(`/api/users/${user_id}/posts`)
			.then(res => {
				setPosts(res.data);
			})
			.catch(err => {
				console.log(err);
			})
	},[]);

	const add = (status) => {
		axios.post(`/api/users/${user.id}/posts`, {status, user_id: user.id})
			.then(res => {
				setPosts([...posts,res.data]);
			})
			.catch(err => {
				console.log(err);
			})
	}

	return (
		<>
			<Grid columns={3} padded>
				{ posts.map(post => 
					{
						return (<GridColumn key={post.id}>
							<Post  {...post}/>
						</GridColumn>
						)
					})
				}
			</Grid>
			<Divider hidden/>
			<PostForm addPost={add}/>
		</>
	)
}

export default withRouter(Posts);