import React from 'react';
import swem from '../assets/swimming.png'
import classroom from '../assets/class.png'
import ground from '../assets/playground.png'

const Qzone = () => {
    return (
        <div className='mt-4'>
            <div className='p-2 bg-gray-200 space-y-6'>
                <h3 className='text-base font-bold'>Qzone</h3>
                <img src={swem} alt="" />
                <img src={classroom} alt="" />
                <img src={ground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;