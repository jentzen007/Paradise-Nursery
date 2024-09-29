import image from './assets/MoneyPlant.jpg';

function MoneyPlant({ addToCart }) {

    const plant = {
        name: 'Money Plant',
        price: 19.99,
        description: "One of the most common air purifying plants in almost every household. The prime reason for this plant's extreme popularity is its name, and the second because it is an extremely low maintenance plant.",
        image: image
    }
    return(
        <div className="Money">
            <img src={image} alt="Money Plant" />
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <br /><label id="price-tag">${plant.price}</label><br /><br />
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
    );
}

export default MoneyPlant;