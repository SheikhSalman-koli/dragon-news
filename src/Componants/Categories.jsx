import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json())

const Categories = () => {

    const categories = use(categoryPromise)

    return (
        <div>
           <h2 className='text-[20px]] font-bold'>All Categories</h2>
            <div className='grid grid-cols-1 gap-3 mt-3'>
                {
                    categories.map(category => <NavLink className='text-center btn btn-wide bg-white border-0' key={category.id} to={`/category/${category.id}`
                    }>
                        {category.name}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;