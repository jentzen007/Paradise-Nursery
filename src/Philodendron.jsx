import image from './assets/Philodendron.jpg';

function Philodendron() {

    return(
        <div className="Philodendron">
            <img src={image} alt="Philodendron Oxycordia Micans Plant Sapling " />
            <h2>Philodendron Oxycordia Micans Plant Sapling </h2>
            <p>Philodendron Oxycordia Micans Plant is known for its glossy silver leaves and is an easy-to-care and beautiful plant with heart-shaped leaves. Proving to be a good indoor as well as outdoor plant, it needs affordable care.

            </p>
            <br /><label id="price-tag">$19.99</label><br /><br />
            <button>Add to Cart</button>
        </div>
    );
}

export default Philodendron;