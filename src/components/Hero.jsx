import React from 'react'

const Hero = () => {
  return (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.Shop NowCategory Also Available On </p>

            <div className="hero-button">
                <button>Shop Now</button>
                <button className="secondary-button">Category</button>
            </div>

            <div className="shopping">
                <p>Also Availble On</p>
            </div>
            
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon logo" />
                <img src="/images/flipkart.png" alt="flipkart logo" />
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero-image.png" alt="" />
        </div>
    </main>
  )
}

export default Hero