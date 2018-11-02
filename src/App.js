import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import AppRouter from "./routes";

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<AppRouter/>
			</React.Fragment>
		);
	}
}
export default App;

// class ParamsExample extends React.Component {
// 	constructor(props) {
// 	    super(props);
// 	    this.state = {
// 	    	jwt: localStorage.getItem('jwt')
// 	    };
// 	}

	
// 	render() {
// 		if (this.state.jwt) {
// 			return (
// 				<Router>
// 				    <div>
// 				      	<ul>
// 				        	<li>
// 				          		<Link to="/">Home</Link>
// 				        	</li>
// 				        	<li>
// 				          		<Link to="/topics">Topics</Link>
// 				        	</li>
// 				      	</ul>

// 				      	<hr />
// 					    <Route exact path="/" component={Home} />
// 					    <Route path="/about" component={About} />    
// 				    </div>
// 				</Router>
// 			);
// 		} else {
// 			return <Redirect to='/login'/>;
// 		}
// 	}


// 	render() {
// 		return (
// 			<AppRouter />
// 		);
// 	}
// }

// export default ParamsExample;

// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <h2>Content</h2>
//             <p>The content text!!!</p>
//          </div>
//       );
//    }
// }
// export default Content;