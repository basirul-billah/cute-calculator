import React from 'react';

const ReviewPost = ({review}) => {
    const {name, img, comment, rating} = review;

    return (
        <div className='grid grid-cols-1 justify-items-center border p-10'>
            <img className='w-72 h-72' src={img} alt="" />
            <h1 className='text-lg font-bold'>{name}</h1>
            <p>{comment}</p>
            <p className='bg-red-600 px-4 py-2 rounded-lg text-white mt-5'>Rating: {rating}</p>
        </div>
    );
};

export default ReviewPost;