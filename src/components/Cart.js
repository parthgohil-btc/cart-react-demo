import React, { Component } from 'react';
import { connect } from 'react-redux'

class Cart extends Component {
	getQty = (qty, name) => {
		var qantity = [];
		let product = this.props.productData.find(pdt => pdt.Name === name);
		for (var i = 1; i < product.qty; i++) {
    		qantity.push(<option value={i} selected={i == qty} id={'cart-qty-' + i}>{i}</option>);
    	}
        return qantity;
    }
    updateProductQty(e) {
    	this.props.updateQty(e.target.getAttribute('productName'), e.target.value);
    }
    render() {
	    return (
	    	<div>
	            <h3>Cart</h3>
				{this.props.cartData.map((product, index) => (
					<div>
						<h5>Name: {product.Name}</h5>
						<p>Price: {product.price}</p>
						<p>
							<select productName={product.Name} value={product.qty} onChange={this.updateProductQty.bind(this)} id={'cart-qty-' + index}>
								{this.getQty(product.qty, product.Name)}
							</select>
						</p>
					</div>
				))}
	            <h4>Total: {this.props.totalAmount}</h4>
	        </div>
	    );
    }
}
const mapStateToProps = state => {
	return {
		productData: state.productData,
		cartData: state.cartData,
		totalAmount: state.totalAmount,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		updateQty: (val, qty) => dispatch({type: "UPDATEQTY", val: val, qty: qty})
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);