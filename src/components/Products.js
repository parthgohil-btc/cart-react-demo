import React, { Component } from 'react';
import { connect } from 'react-redux'

class Products extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.productData)
	}
	createQty = (qty, index) => {
		var qantity = [];
		for (var i = 1; i < qty; i++) {
    		qantity.push(<option id={'qty-' + index+'-'+i}>{i}</option>);
    	}
        return qantity;
    }
    render() {
	    return (
	    	<div>
	            <h3>Products</h3>
					<div>
						{this.props.productList.map((product, index) => (
							<div key={product.Name}>
								<h5>Name: {product.Name}</h5>
								<p>Price: {product.price}</p>
								<p>Location: {product.Location}</p>
								<p>
									{(product.qty === 0) ? <div style={{color: 'red'}}>Sold Out</div> : 
										// <select id={'qty-' + index}>
										// 	{this.createQty(product.qty, index)}
										// </select>
										<button type="button" id={'add-to-cart-'+index} key={'add-to-cart-'+index} onClick={this.props.handleClick.bind(this, product.Name)} >Add to cart</button>
									}
								</p>
							</div>
						))}
					</div>
	        </div>
	    );
    }
}
const mapStateToProps = state => {
	return {
		productList: state.productData
	}
}
const mapDispatchToProps = dispatch => {
	return {
		handleClick: (val) => dispatch({type: "ADDTOCART", val: val})
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);