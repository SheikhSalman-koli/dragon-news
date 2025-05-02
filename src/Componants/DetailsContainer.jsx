import React from 'react';
import { Link } from 'react-router';

const DetailsContainer = ({ news }) => {

    const {image_url, title, details, category_id} = news
   // const { image_url, title, } = details
    // console.log(news);
    return (
        <div className='p-3 border-1 border-gray-100 space-y-4'>
            <img className='object-cover' src={image_url} alt="" />
            <h2 className='font-bold'>{title}</h2>
            <p>{details}</p>

            <Link to={`/category/${category_id}`}  className='text-white bg-secondary p-2'>All news in this category</Link>
        </div>
    );
};

export default DetailsContainer;