import React, { Component } from 'react';
import { connect } from 'react-redux'

class Products extends Component {
    render() {
	    return (
	    	<div>
	            <h3>Products</h3>
					<div>
						{this.props.productList.map((product, index) => (
							<div key={'div-'+product.Name} id={'div-'+product.Name}>
								<h5>Name: {product.Name}</h5>
								<div>Price: {product.price}</div>
								<div>Location: {product.Location}</div>
								<div>
									{(product.qty === 0) ? <div style={{color: 'red'}}>Sold Out</div> : 
										<button type="button" id={'add-to-cart-'+index} key={'add-to-cart-'+index} onClick={this.props.handleClick.bind(this, product.Name)} >Add to cart</button>
									}
								</div>
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