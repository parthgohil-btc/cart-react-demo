import React, { Component } from 'react';
import users from '../data/users';
class Login extends Component {
	constructor(props) {
		super(props);
		if(localStorage.getItem('userId')) {
      		this.props.history.replace('/dasboard');
		}
	}
	state = {
		email: '',
		password: ''
	};

	handleSubmit(e) {
		e.preventDefault();
		if (!this.state.email) {
			alert("Please enter email id");
			return null;
		}
		if (!this.state.password) {
			alert("Please enter password");
			return null;
		}
		let user = users.find(u => u.email === this.state.email && u.password === this.state.password);
		if(user) {
			localStorage.setItem('userId', user.id);
      		this.props.history.replace('/dasboard');
		} else {
			alert("Invalid details.");
		}
	}

	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		});
	};

	handlePasswordChange(e) {
		this.setState({
			password: e.target.value
		});
	};

    render() {
	    return (
	        <div>
	    		<form id="loginForm" onSubmit={this.handleSubmit.bind(this)}>
					<p><input type='text' id="email" placeholder="email id" defaultValue={ this.state.email } onChange={ this.handleEmailChange.bind(this) } /></p>
					<p><input type='text' id="password" placeholder="password" defaultValue={ this.state.password } onChange={ this.handlePasswordChange.bind(this) } /></p>
					<p><input type='submit' id="loginSubmit" value="Signin" /></p>
		    	</form>
	        </div>
	    );
    }
};
export default Login;