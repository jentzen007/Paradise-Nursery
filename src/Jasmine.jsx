import image from './assets/Jasmine.jpg';

function Jasmine({ addToCart }) {

    const plant = {
        name: 'Minima Jasmine Summer Sunset',
        price: 29.99,
        description: 'The Minima Jasmine Summer Sunset plant is perfect for evergreen and colorful beauty on your balcony. It’s a fast-growing plant that is easier to care for.',
        image: image
    }
    return(
        <div className="Jasmine">
            <img src={image} alt="Minima Jasmine Summer Sunset" />
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <br /><label id="price-tag">${plant.price}</label><br /><br />
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
    );
}

export default Jasmine;