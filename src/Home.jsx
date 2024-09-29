import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import logo from './assets/logo.png';
import MoneyPlant from './MoneyPlant.jsx';
import Peperomia from './Peperomia.jsx';
import cartIcon from './assets/cart.png'; 
import Snake from './Snake.jsx';
import Temple from './Temple.jsx';
import Philodendron from './Philodendron.jsx';
import Jasmine from './Jasmine.jsx';

function Home({ cart = [], addToCart }) { // Set a default value for cart as an empty array
    const navigate = useNavigate(); // Use the navigate hook

    // Calculate the total quantity of items in the cart
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="home-root">
            <nav id="Head">
                <div className="branding">
                    <img id="logo" src={logo} alt="Logo" />
                    <div>
                        <h1>Paradise Nursery</h1>
                        <p>Where Green Meets Serenity</p>
                    </div>
                </div>

                <div className="center-title">
                    <h1>Plants</h1>
                </div>

                {/* Cart Icon with total items */}
                <div id="cart-icon">
                    <button id="cartButton" onClick={() => navigate('/cart')}>
                        <img src={cartIcon} alt="Cart" />
                        <span>{totalItems}</span> {/* Display total items in cart */}
                    </button>
                </div>
            </nav>

            <div className="home-root" id="Body">
                <hr /><br /><label id="Plant-Type">Air Purifying Plants</label><br /><hr /><br />
                <div id="Cards">
                    <MoneyPlant addToCart={addToCart} />
                    <Peperomia addToCart={addToCart} />
                    <Snake addToCart={addToCart} />
                </div>

                <hr /><br /><label id="Plant-Type">Aromatic Plants</label><br /><hr /><br />
                <div id="Cards">
                    <Temple addToCart={addToCart} />
                    <Philodendron addToCart={addToCart} />
                    <Jasmine addToCart={addToCart} />
                </div>
            </div>
        </div>
    );
}

export default Home;
