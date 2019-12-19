import {AuthContext} from '../providers/AuthProvider';
import React, { useContext, useEffect } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import axios from 'axios';


const Posts = () => {
	const {user} = useContext(AuthContext);
	const [posts, setPosts] = useState([]);

	useEffect(()=> {
		axios.get('')
	},[]);

	return (
		<>
			<Grid columns={3} padded>
				{ 
					<GridColumn>
						<Post/>
					</GridColumn>
				}
			</Grid>
		</>
	)
}

export default Posts;