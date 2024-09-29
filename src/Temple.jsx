import image from './assets/temple.jpg';
import React, { useState } from 'react';


function Temple({ addToCart }) {

    const [isAdded, setIsAdded] = useState(false);


    const plant = {
        name: 'Temple Tree Champa',
        price: 9.99,
        description: "Champa is considered to be auspicious and can be planted outside your home. They are highly fragrant and bloom freely from spring through fall in multiple colors like white, yellow, pink, and red.",
        image: image
    }
    const handleAddToCart = () => {
        addToCart(plant);
        setIsAdded(true);
    };
    return(
        <div className="Temple">
            <img src={image} alt="Temple Tree Champa" />
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <br /><label id="price-tag">${plant.price}</label><br /><br />
            <button onClick={handleAddToCart} disabled={isAdded}>
                {isAdded ? 'Added to Cart' : "Add to Cart"}
            </button>
        </div>
    );
}

export default Temple;