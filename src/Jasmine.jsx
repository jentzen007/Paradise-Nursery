import image from './assets/Jasmine.jpg';

function Jasmine() {
    return(
        <div className="Jasmine">
            <img src={image} alt="Minima Jasmine Summer Sunset" />
            <h2>Minima Jasmine Summer Sunset</h2>
            <p>The Minima Jasmine Summer Sunset plant is perfect for evergreen and colorful beauty on your balcony. It’s a fast-growing plant that is easier to care for. </p>
            <br /><label id="price-tag">$29.90</label><br /><br />
            <button>Add to Cart</button>
        </div>
    );
}

export default Jasmine;