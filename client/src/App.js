import React, {useContext, } from 'react';
import FetchUser from './components/FetchUser';
import Friends from './components/Friends';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import { Switch, Route, } from 'react-router-dom';
import { Container, Divider} from "semantic-ui-react";
import ProtectedRoute from './components/ProtectedRoute';
import axios from 'axios';
import { AuthContext } from './providers/AuthProvider';

const App = () => {
	const {user, setUser} = useContext(AuthContext);
	const updateFriend = (id) => {
		axios.put(`/api/users/${id}`)
			.then(res =>
				setUser(res.data)
			)
			.catch(err=>{
				console.log(err);
			})
	};

	return(
		<>
			<Navbar />
			<Divider hidden/>
			<FetchUser> 
				<Container>
					<Switch>
						<ProtectedRoute exact path="/" component={Home} />
						<Route 
							exact path='/users' 
							render={
								(props)=> <Users {...props} updateFriend={updateFriend}/>
							}
							/>
						<Route exact path="/friends"
							render={
								(props)=> <Friends {...props} updateFriend={updateFriend}/>
							}
						/>
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route component={NoMatch} />
					</Switch>
				</Container>
			</FetchUser>
		</>
	);
}

export default App;
