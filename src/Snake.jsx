import image from './assets/Snake.jpg';

function Snake() {

    return(
        <div className="Snake">
            <img src={image} alt="Snake Plant" />
            <h2>Snake Plant</h2>
            <p>One of the most attractive and highly hardy indoor plants. It can easily thrive in low to extreme light conditions. This plant can survive without water, even for weeks. This plant has a funny nickname - Mother-in-law's tongue.

            </p>
            <br /><label id="price-tag">$14.99</label><br /><br />
            <button>Add to Cart</button>
        </div>
    );
}

export default Snake;