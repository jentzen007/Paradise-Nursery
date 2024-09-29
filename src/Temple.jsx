import image from './assets/temple.jpg';

function Temple({ addToCart }) {

    const plant = {
        name: 'Temple Tree Champa',
        price: 9.99,
        description: "Champa is considered to be auspicious and can be planted outside your home. They are highly fragrant and bloom freely from spring through fall in multiple colors like white, yellow, pink, and red.",
        image: image
    }
    return(
        <div className="Temple">
            <img src={image} alt="Temple Tree Champa" />
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <br /><label id="price-tag">${plant.price}</label><br /><br />
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
    );
}

export default Temple;