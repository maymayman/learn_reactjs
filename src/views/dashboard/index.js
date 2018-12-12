import React, { Component } from 'react';

class DashBoard extends Component {
	state {
		login: false;
	}
	componentDidMout() {
		set.state({
			login: false;
		});
	}
	render() {
		return (
			<div>
				Hello DashBoard
			</div>
		)
	}
}
export default DashBoard;