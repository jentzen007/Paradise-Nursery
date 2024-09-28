import React from 'react';
import logo from './assets/logo.png';
import MoneyPlant from './MoneyPlant.jsx';
import Peperomia from './Peperomia.jsx';
import cartIcon from './assets/cart.png'; 
import Snake from './Snake.jsx';
import Temple from './Temple.jsx';
import Philodendron from './Philodendron.jsx';
import Jasmine from './Jasmine.jsx';

function Home() {
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

                <div id="cart-icon">
                    <img src={cartIcon} alt="Cart" />
                    <span>0</span> 
                </div>
            </nav>
            <div className="home-root" id="Body">
                <hr /><br /><label id="Plant-Type">Air Purifying Plants</label><br /><hr /><br />
                <div id="Cards">
                <MoneyPlant/>
                <Peperomia/>
                <Snake/>
                </div>
                <hr /><br /><label id="Plant-Type">Aromatic Plants</label><br /><hr /><br />
                <div id="Cards">
                <Temple/>
                <Philodendron/>
                <Jasmine/>
                </div>

            </div>
            

        </div>
    );
}

export default Home;
