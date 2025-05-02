import React from 'react';
import Marquee from 'react-fast-marquee';

const Running = () => {
    return (
        <div className='flex gap-5 items-center bg-gray-200 p-2 mt-4'>
            <button className='text-white bg-secondary p-2'>latest</button>
        <Marquee  pauseOnHover={true}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempore debitis at magni. Quis?</p>
        </Marquee>
        </div>
    );
};

export default Running;