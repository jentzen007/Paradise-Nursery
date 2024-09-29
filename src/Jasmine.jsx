import image from './assets/Jasmine.jpg';
import React, { useState } from 'react';

function Jasmine({ addToCart }) {

    const [isAdded, setIsAdded] = useState(false);

    const plant = {
        name: 'Minima Jasmine Summer Sunset',
        price: 29.99,
        description: 'The Minima Jasmine Summer Sunset plant is perfect for evergreen and colorful beauty on your balcony. It’s a fast-growing plant that is easier to care for.',
        image: image
    };

    const handleAddToCart = () => {
        addToCart(plant);
        setIsAdded(true);
    };
    return(
        <div className="Jasmine">
            <img src={image} alt="Minima Jasmine Summer Sunset" />
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <br /><label id="price-tag">${plant.price}</label><br /><br />
            <button onClick={handleAddToCart} disabled={isAdded}>
                {isAdded ? 'Added to Cart' : "Add to Cart"}
            </button>
        </div>
    );
}

export default Jasmine;