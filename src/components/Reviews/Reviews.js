import React, { useEffect, useState } from 'react';
import useReview from '../../hooks/useReview';
import ReviewPost from '../ReviewPost/ReviewPost';

const Reviews = () => {
    // custom hook useReview is called
    const [reviews] = useReview();

    return (
        <div>
            <h1 className='text-3xl font-bold text-purple-600 mt-10'>Customer Reviews</h1>
            <div className='grid grid-cols-3 gap-4 m-5'>
                {
                    reviews.map(review => <ReviewPost
                        key={review.id}
                        review={review}
                    ></ReviewPost>)
                }
            </div>
        </div>
    );
};

export default Reviews;