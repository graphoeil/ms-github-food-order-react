import React, { useState } from "react";
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from "./components/Cart/Cart";

function App() {

	// Show cart ?
	const [showCart, setShowCart] = useState(false);

	// Show cart
	const showCartHandler = () => {
		setShowCart(true);
	};

	// Hide cart
	const hideCartHandler = () => {
		setShowCart(false);
	};

	// Return
	return (
		<CartProvider>
			{
				showCart && <Cart onClose={ hideCartHandler }/>
			}
			<Header onShowCart={ showCartHandler }/>
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
};

export default App;