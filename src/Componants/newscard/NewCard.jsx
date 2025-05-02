import React, { useState } from 'react';
import { IoShareSocialOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BiBook } from 'react-icons/bi';
import { BsBookmarks } from 'react-icons/bs';

const NewCard = ({ single }) => {
    // console.log(single);
    const {author, details, image_url, 
        rating, thumbnail_url, title,
         total_view} = single

        //  const [show , setShow] = useState('')

        //     setShow(details)
        //     console.log(show);

    return (
        <div>
              <div className="max-w-md mx-auto bg-white border-2 rounded-2xl overflow-hidden">

                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded-full" src={author.img} alt="Shirin Akter" />
                            <div className="text-sm">
                                <p className="text-gray-900 font-semibold">{author.name}</p>
                                <p className="text-gray-500 text-xs">{author.published_date}</p>
                            </div>
                    </div>
                    <button className="flex items-center gap-3 text-gray-400 hover:text-gray-600">
                      
                        <BsBookmarks></BsBookmarks>
                        <IoShareSocialOutline />
                    </button>
                </div>


                <img className="w-full h-56 object-cover" src={image_url} alt="Bangladesh Exports" />


                    <div className="p-4">
                        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
                        <p className="text-gray-600 text-sm mb-3">
                           {
                            details.length > 200 ? (<>
                                {details.slice(0, 200)}...<span className='text-base text-red-500 font-semibold, hover:underline'>
                                    Read More
                                </span>
                            </>) :
                             (details)
                           }
                        </p>


                        <div className="flex justify-between">
                            <div className='flex '> 
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <p> {rating.number}</p></div>

                            <div>{total_view}</div>
                        </div>
                    </div>
            </div> 
           


        </div>
    );
};

export default NewCard;