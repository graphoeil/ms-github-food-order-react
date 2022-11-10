import React, { useState } from "react";
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Modal from "./components/UI/Modal";

function App() {

	// Show cart ?
	const [showCart, setShowCart] = useState(false);

	// Show / hide cart
	const showCartHandler = () => {
		setShowCart(true);
	};
	const hideCartHandler = () => {
		setShowCart(false);
	};

	// Return
	return (
		<CartProvider>
			{
				showCart && <div>Cart</div>
			}
			<Header onShowCart={ showCartHandler }/>
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
};

export default App;