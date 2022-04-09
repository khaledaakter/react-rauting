import React, { useState, useEffect } from 'react';
import './Reviews.css';



const Review = () => {
    const [Reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('Reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <>                
            <div className='cardWraper'>
                {
                    Reviews.map(Review => <div
                        key={Review.id}
                        to={`/posts/${Review.id}`}
                    >

                
                        <div className='card'>
                            <div className='cardImg'>
                                <img src={Review.img} alt="logo" />
                            </div> 
                            <div className='cardContent'>
                                <div className='cardContent'>
                                    <p>Name: <strong>{Review.name}</strong></p>
                                    <div className='ratting'>
                                        <input type="radio" id="star5" name="rate" value="5" />
                                        <label for="star5" title="text">5 stars</label>
                                        <input type="radio" id="star4" name="rate" value="4" />
                                        <label for="star4" title="text">4 stars</label>
                                        <input type="radio" id="star3" name="rate" value="3" />
                                        <label for="star3" title="text">3 stars</label>
                                        <input type="radio" id="star2" name="rate" value="2" />
                                        <label for="star2" title="text">2 stars</label>
                                        <input type="radio" id="star1" name="rate" value="1" />
                                        <label for="star1" title="text">1 star</label>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div>)
                }            
            </div>
        </>
    )
}

export default Review;