import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';



const Find = () => {
    return (
        <div className='mt-6'>
            <h2 className='text-base font-bold'>Find us on</h2>

            <div className="join join-vertical w-full">
                <button className="btn join-item space-y-2 w-full justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item space-y-2 w-full justify-start"><FaTwitter></FaTwitter> TwitterButton</button>
                <button className="btn join-item space-y-2 w-full justify-start"><FaInstagram></FaInstagram> instagram</button>
            </div>

        </div>
    );
};

export default Find;