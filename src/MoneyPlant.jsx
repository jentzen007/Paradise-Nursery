import image from './assets/MoneyPlant.jpg';

function MoneyPlant() {
    return(
        <div className="Money">
            <img src={image} alt="Money Plant" />
            <h2>Money Plant</h2>
            <p>One of the most common air purifying plants in almost every household. The prime reason for this plant's extreme popularity is its name, and the second because it is an extremely low maintenance plant.</p>
            <br /><label id="price-tag">$19.90</label><br /><br />
            <button>Add to Cart</button>
        </div>
    );
}

export default MoneyPlant;