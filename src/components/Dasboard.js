import React, { Component } from 'react';
import Cart from './Cart';
import Products from './Products';
class Dasboard extends Component {
	constructor(props) {
		super(props);
		if(!localStorage.getItem('userId')) {
      		this.props.history.replace('/');
		}
	}
	logoutHandle(e) {
		e.preventDefault();
		localStorage.removeItem('userId');
  		this.props.history.replace('/');
	}
    render() {
	    return (
	    	<div>
	    		<div>
	    			<a href="/" onClick={this.logoutHandle.bind(this)}>Logout</a>
	    		</div>
				<div style={{width:'70%', float: 'left'}}>
					<Products />
				</div>
				<div style={{width:'30%', float: 'right'}}>
					<Cart />
				</div>
	        </div>
	    );
    }
}
export default Dasboard;