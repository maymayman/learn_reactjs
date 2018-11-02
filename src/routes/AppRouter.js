import React from "react";
import { ERROR, LOGIN_PATH, DASHBOARD_PATH } from "../config/path";
import {BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import LoginLayout from '../views/auth/login';
import DashboardLayout from '../views/dashboard/index';
// import AuthorizedRoute from './AuthorizedRoute';

const HANDLE_API = {
	hasLoggedIn: function(jwt) {
		return new Promise(function(resolve, reject) {
			if (jwt) {
				return resolve(true);
			} else {
				return resolve(false);
			}
		});
	}
};

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = (props) => {
// 	console.log(props)
// 	return (
// 		<div>
// 	    <h2>About</h2>
// 	  </div>)
// } 

class AppRouter extends React.Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = { loggedIn: null };
		// this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		const _this = this;

		return HANDLE_API.hasLoggedIn().then((result) => {
			_this.setState({ loggedIn: result });
		}).catch((error) => {
			console.error(error)
			this.setState({ loggedIn: false });
		});
	}

	render() {
		if (this.state.loggedIn == false) {
			return (
				<Router>
					<Switch>
						<Route path={DASHBOARD_PATH} component={DashboardLayout} />
						<Route path={LOGIN_PATH} component={LoginLayout} />
						<Redirect to={LOGIN_PATH} />
					</Switch>
				</Router>
			)
		} else if (this.state.loggedIn == true) {
			return (
				<Router>
					<Switch>
						<Route path={DASHBOARD_PATH} component={DashboardLayout} />
						<Redirect to={DASHBOARD_PATH} />
					</Switch>
				</Router>
			)
		} else {
			return (<h1> Something was wrong </h1>);
		}
	}

	// render() {
	// 	return (
	// 		<Router>
	// 			<Switch>
	// 			    <Route path={LOGIN_PATH} component={LoginLayout} />
	// 			    <Route path={DASHBOARD_PATH} component={DashboardLayout} />
	// 			    <Redirect to={LOGIN_PATH} />
	// 			  //   <Route path="/about" render={() => {
	// 			  //   	return (
	// 					// 	<LoginLayout someProp="2"/>				    		
	// 					// )
	// 			  //   }} /> 
	// 			</Switch>   
	// 		</Router>	
	// 	);	
	// }
}

export default AppRouter;