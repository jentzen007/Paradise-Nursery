import image from './assets/temple.jpg';

function Temple() {

    return(
        <div className="Temple">
            <img src={image} alt="Temple Tree Champa" />
            <h2>Temple Tree Champa</h2>
            <p>Champa is considered to be auspicious and can be planted outside your home. They are highly fragrant and bloom freely from spring through fall in multiple colors like white, yellow, pink, and red.

            </p>
            <br /><label id="price-tag">$9.99</label><br /><br />
            <button>Add to Cart</button>
        </div>
    );
}

export default Temple;