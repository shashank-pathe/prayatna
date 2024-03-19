import React from 'react'
import "../styles/HeroSection.css"
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"


const HeroSection = () => {
    return (
        
        <div className='heroSecMainParent'>

            <p className='text-4xl mt-20 text-center welcomStore'>WELCOME TO OUR STORE</p>
            <br />
            <br />


            <p className='heroDescription relative text-xl flex flex-wrap'> Welcome to DiscountDash! 
            Step into a world of unbeatable deals, rewarding loyalty points, and seamless shopping experiences. Start saving, earning, and enjoying today! </p>


            <div className=' text-xl font-medium flex flex-row heroHeadingHold'>
                <p> Top Discounted Deals </p>
                <p> Loyalty Points </p>
                <p> Review Rewards </p>
            </div>

            <div className='heroDescHold flex-row flex relative text-base font-normal'>
                <p> Get ready for unbeatable savings! Explore our selection of top discounted deals and enjoy incredible discounts on your favorite products. </p><br />
                <p>Share your thoughts! Earn loyalty points by writing reviews and unlock exciting rewards including giveaways, coupons, and much more! </p><br />
                <p>Your satisfaction drives us! We prioritize your happiness, ensuring every experience is seamless, delightful, and tailored to exceed expectations. </p><br />
            </div>
        </div>
    
    )
}

export default HeroSection
