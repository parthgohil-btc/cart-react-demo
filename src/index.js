import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import productData from './data/products';

const initialState = {
	productData: productData,
	cartData: [],
	totalAmount: 0,
}
const calculateTotal = (cartData) => {
	let total = 0; 
	cartData.map((product, index) => (
		total = total + (product.price * product.qty)
	))
	return total;
}
const reducer = (state = initialState, action) => {
	console.log(action)
	if(action.type === "ADDTOCART") {
		let product = {};
		product = state.productData.find(pdt => pdt.Name === action.val);
		let cardProduct = state.cartData.find(pdt => pdt.Name === action.val);
		if(!cardProduct) {
			const cartData = [...state.cartData];
			cartData.push({ Name: product.Name, qty: 1, price: product.price });
			let totalAmount = calculateTotal(cartData);
			return {
				cartData: cartData,
				productData: state.productData,
				totalAmount: totalAmount
			}
		}
	} else if(action.type === "UPDATEQTY") {
		const cardProduct = [...state.cartData];
		let objIndex = cardProduct.findIndex(pdt => pdt.Name === action.val);
		cardProduct[objIndex].qty = action.qty;
		let totalAmount = calculateTotal(cardProduct);
		return {
			cartData: cardProduct,
			productData: state.productData,
			totalAmount: totalAmount
		}
	} else if(action.type === "BUYPRODUCTS") {
		const products = [...state.productData];
		// state.cartData.map((product, index) => (
		// 	objIndex = products.findIndex(pdt => pdt.Name === product.Name);
		// 	products[objIndex].qty = products[objIndex].qty - product.qty;
		// ))
		
		return {
			cartData: [],
			productData: products,
			totalAmount: 0
		}
	}
	return state
}

const store = createStore(reducer, (applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>	, document.getElementById('root'));
registerServiceWorker();
