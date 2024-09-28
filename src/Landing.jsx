import React from 'react';
import background from './assets/background.png';

const But = () => {
    const handleClick = () => {
        window.location.href = '/home';
    };

    return (
        <button onClick={handleClick}>Get Started</button>
    );
};

function Landing() {
    return(
        <div className="landing-root"
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            height: '100vh',
        }}
        >
            <div className="container">
                <div id="left">
                    <h1>Welcome To Paradise Nursery</h1>
                    <hr />
                    <h3>Where Green Meets Serenity</h3>
                    <But />
                </div>
                <div id="right">
                    <h4>Welcome to Paradise Nursery, where green meets serenity!</h4>
                    <h4>At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.
                    Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.
                    Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.</h4>
                </div>
            </div>
        </div>
    );
}

export default Landing;
