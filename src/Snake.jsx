import image from './assets/Snake.jpg';

function Snake({ addToCart }) {
    const plant = {
        name: 'Snake Plant',
        price: 16.99,
        description: "One of the most attractive and highly hardy indoor plants. It can easily thrive in low to extreme light conditions. This plant can survive without water, even for weeks. This plant has a funny nickname - Mother-in-law's tongue.",
        image: image
    }
    return(
        <div className="Snake">
            <img src={image} alt="Snake Plant" />
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <br /><label id="price-tag">${plant.price}</label><br /><br />
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
    );
}

export default Snake;