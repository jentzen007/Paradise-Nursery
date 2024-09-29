import image from './assets/Pepper.jpg';
import React, { useState } from 'react';

function Peperomia({ addToCart }) {

    const [isAdded, setIsAdded] = useState(false);

    const plant = {
        name: 'Peperomia obtusifolia',
        price: 21.00,
        description: "This indoor plant grows fastly and easily in indirect bright light or artificial lighting conditions. This requires frequent watering, but we are sure that you will get bowled over these plants.",
        image: image
    }
    const handleAddToCart = () => {
        addToCart(plant);
        setIsAdded(true);
    };
    return(
        <div className="Pepper">
            <img src={image} alt="Peperomia obtusifolia" />
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <br /><label id="price-tag">${plant.price}</label><br /><br />
            <button onClick={handleAddToCart} disabled={isAdded}>
                {isAdded ? 'Added to Cart' : "Add to Cart"}
            </button>       
         </div>
    );
}

export default Peperomia;