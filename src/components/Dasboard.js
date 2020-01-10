import React, { Component } from 'react';
import Cart from './Cart';
import Products from './Products';
class Dasboard extends Component {
	constructor(props) {
		super(props);
	}
    render() {
	    return (
	    	<div>
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