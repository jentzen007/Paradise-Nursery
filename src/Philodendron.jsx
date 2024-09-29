import image from './assets/Philodendron.jpg';

function Philodendron({ addToCart }) {

    const plant = {
        name: 'Philodendron Oxycordia Micans Plant Sapling',
        price: 19.99,
        description: "Philodendron Oxycordia Micans Plant is known for its glossy silver leaves and is an easy-to-care and beautiful plant with heart-shaped leaves. Proving to be a good indoor as well as outdoor plant, it needs affordable care.",
        image: image
    }
    return(
        <div className="Philodendron">
            <img src={image} alt="Snake Plant" />
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <br /><label id="price-tag">${plant.price}</label><br /><br />
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
    );
}

export default Philodendron;