import logo from '../Images/gfcard.png';
import React from 'react';
import './Home.css';
import CustomLink from '../CustomLink/CustomLink';
import Questions from '../Questions/Questions'
import Review from '../Review/Review';



const Home = () => {

    return (
        <>
            <div className="container">
                <div className="top-container-inner">
                    <div className="homeLeftText">
                        <h1>What is a Gift Card?</h1>
                        <p>A gift card is a prepaid debit card already loaded with money that is available for use for a variety of purchases at a specific brand, website, or restaurant.</p>

                        <p>As An Alternative Payment Method</p>

                        <p>Gift cards are digital assets that serve as a different form of payment at physical stores, gas stations, online, restaurants, etc. These are digital cash. They hold monetary values, but the only difference is that you can only redeem it at a designated brand. </p>
                        <button className="ic-btn">See More</button>
                    </div>

                    <div className="rightImage">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>

            <div className="customerReviews">
                <div className="container">
                    <h1>Customer Reviews</h1>

                    <div className="homeReviewsInner">
                        <Review></Review>
                    </div>

                    <div className='allCustomerReviews'>
                        <CustomLink to="/reviews" className="ic-btn">All Customer Reviews</CustomLink>
                    </div>

                </div>
            </div>

            <div className="container">
                <h1>Questions</h1>

                <Questions></Questions>

            </div>
        </>
    )
}

export default Home;