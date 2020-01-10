import React, { Component } from 'react';
import { connect } from 'react-redux'

class Cart extends Component {
	getQty = (qty, name) => {
		var qantity = [];
		let product = this.props.productData.find(pdt => pdt.Name === name);
		for (var i = 1; i <= product.qty; i++) {
    		qantity.push(<option value={i} id={'cart-qty-' + i}>{i}</option>);
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
					<div key={'div-cart-'+index} id={'div-cart-'+index}>
						<h5>Name: {product.Name}</h5>
						<div>Price: {product.price}</div>
						<div>
							<select productName={product.Name} value={product.qty} onChange={this.updateProductQty.bind(this)} id={'cart-qty-' + index}>
								{this.getQty(product.qty, product.Name)}
							</select>
						</div>
					</div>
				))}
	            <h4>Total: {this.props.totalAmount}</h4>
	            <div>{(this.props.totalAmount !== 0) ? <input type="button" value="Buy" onClick={this.props.purchase.bind(this)} /> : ''}</div>
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
		updateQty: (val, qty) => dispatch({type: "UPDATEQTY", val: val, qty: qty}),
		purchase: () => dispatch({type: "BUYPRODUCTS"})
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);