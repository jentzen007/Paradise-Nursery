import image from './assets/Pepper.jpg';

function Peperomia({ addToCart }) {
    const plant = {
        name: 'Peperomia obtusifolia',
        price: 21.00,
        description: "This indoor plant grows fastly and easily in indirect bright light or artificial lighting conditions. This requires frequent watering, but we are sure that you will get bowled over these plants.",
        image: image
    }
    return(
        <div className="Pepper">
            <img src={image} alt="Peperomia obtusifolia" />
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <br /><label id="price-tag">${plant.price}</label><br /><br />
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
    );
}

export default Peperomia;