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
                    Reviews.map(Review => <div className="postContainer"
                        key={Review.id}
                        to={`/posts/${Review.id}`}
                    >


                        <div className='card'>
                            <div className='cardImg'>
                                <img src={Review.img} alt="logo" />
                            </div>

                            <div className='cardContent'>
                                <p><strong>Name :</strong> {Review.name}</p>
                                <p className='reviewRatting'><strong>Review :</strong> <span>{Review.ratting}</span></p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    )
}

export default Review;