import image from './assets/Pepper.jpg';

function Peperomia() {

    return(
        <div className="Pepper">
            <img src={image} alt="Peperomia obtusifolia" />
            <h2>Peperomia obtusifolia</h2>
            <p>This indoor plant grows fastly and easily in indirect bright light or artificial lighting conditions. This requires frequent watering, but we are sure that you will get bowled over these plants.
            </p>
            <br /><label id="price-tag">$21.00</label><br /><br />
            <button>Add to Cart</button>
        </div>
    );
}

export default Peperomia;