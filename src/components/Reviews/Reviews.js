import React, { useEffect, useState } from 'react';
import useReview from '../../hooks/useReview';
import ReviewPost from '../ReviewPost/ReviewPost';

const Reviews = () => {
    // custom hook useReview is called
    const [reviews] = useReview();

    return (
        <div className='grid grid-cols-3 gap-4 m-5'>
            {
                reviews.map(review => <ReviewPost
                    key = {review.id}
                    review = {review}
                ></ReviewPost>)
            }
        </div>
    );
};

export default Reviews;