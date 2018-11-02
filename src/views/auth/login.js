import React, { Component } from 'react';
import { Redirect, NavLink  } from 'react-router-dom'

const login100_more = {
  "backgroundImage": "url(" + '/images/bg-01.jpg' + ")"
};

class Login extends Component {
	constructor(props) {
	    super(props);
	    this.state = {username: '', password: '', redirect: false};

	    this.login = this.login.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    // this.handleSubmit = this.handleSubmit.bind(this);
	 }

	handleChange(event) {
	    const target = event.target;
	    console.log(target.name, target.value);

	    this.setState({[target.name]: target.value });
	};

	login(e) {
		
		console.log(this.state, e)
		// this.setState({redirect: true });
		return <NavLink to="/dashboard"> Dashboard </NavLink>
	}
	// submit(){
	// 	const { history } = this.props;
	// 	abc.then(res => {
	// 		history.push(LOGIN_PATH)
	// 	})
	// }
	render() {
		// const { redirect } = this.state;

	 //     if (redirect) {
	 //       return <Redirect to='/dashboard'/>;
	 //     }
		return (
			<div className="wrapper-page">
				<div className="card-box">
					<div className="panel-heading">
						<h4 className="text-center"> Sign In to <strong className="text-custom">Admin</strong></h4>
					</div>
					<div className="p-20">
						<div className="form-horizontal m-t-20">
							<div className="form-group ">
								<div className="col-12">
									<input className="form-control" type="text" required="" placeholder="Username" name="username"
									value={this.state.username} onChange={this.handleChange}/>
								</div>
							</div>

							<div className="form-group">
								<div className="col-12">
									<input className="form-control" type="password" required="" placeholder="Password" name="password"
									value={this.state.password} onChange={this.handleChange}/> 
								</div>
							</div>

							<div className="form-group ">
								<div className="col-12">
									<div className="checkbox checkbox-primary">
										<input id="checkbox-signup" type="checkbox" />
										<label htmlFor="checkbox-signup"> Remember me </label>
									</div>

								</div>
							</div>

							<div className="form-group text-center m-t-40">
								<div className="col-12">
									<button className="btn btn-pink btn-block text-uppercase waves-effect waves-light" onClick={(e) => this.login(e)} >
										Log In
									</button>
								</div>
							</div>

							<div className="form-group m-t-20 m-b-0">
								<div className="col-12">
									<a href="page-recoverpw.html" className="text-dark"><i className="fa fa-lock m-r-5"></i> Forgot your password?</a>
								</div>
							</div>
							
							<div className="form-group m-t-20 m-b-0">
								<div className="col-12 text-center">
									<h5 className="font-18"><b>Sign in with</b></h5>
								</div>
							</div>
							
							<div className="form-group m-b-0 text-center">
								<div className="col-12">
									<button type="button" className="btn btn-sm btn-facebook waves-effect waves-light m-t-20">
			                           <i className="fa fa-facebook m-r-5"></i> Facebook
			                        </button>

			                        <button type="button" className="btn btn-sm btn-twitter waves-effect waves-light m-t-20">
			                           <i className="fa fa-twitter m-r-5"></i> Twitter
			                        </button>

			                        <button type="button" className="btn btn-sm btn-googleplus waves-effect waves-light m-t-20">
			                           <i className="fa fa-google-plus m-r-5"></i> Google+
			                        </button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)

		// const { history, match } = this.props;
		// return (
		// 	<div className="limiter">
		// 		<div className="container-login100">
		// 			<div className="wrap-login100">
		// 				<form className="login100-form validate-form">
		// 					<span className="login100-form-title p-b-43">Login to continue</span>
		// 					<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
		// 						<input className="input100" type="text" name="email" />
		// 						<span className="focus-input100"></span>
		// 						<span className="label-input100">Email</span>
		// 					</div>
		// 					<div className="wrap-input100 validate-input" data-validate="Password is required">
		// 						<input className="input100" type="password" name="pass" />
		// 						<span className="focus-input100"></span>
		// 						<span className="label-input100">Password</span>
		// 					</div>
		// 					<div className="container-login100-form-btn">
		// 						<button className="login100-form-btn">
		// 							Login
		// 						</button>
		// 					</div>
		// 					<div className="text-center p-t-46 p-b-20">
		// 						<span className="txt2">
		// 							or sign up using
		// 						</span>
		// 					</div>
		// 					<div className="login100-form-social flex-c-m">
		// 						<a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
		// 							<i className="fa fa-facebook-f" aria-hidden="true"></i>
		// 						</a>

		// 						<a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
		// 							<i className="fa fa-twitter" aria-hidden="true"></i>
		// 						</a>
		// 					</div>
		// 				</form>
		// 				<div className="login100-more" style={login100_more}>
		// 			</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// )
	}
}
export default Login;