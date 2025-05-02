import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Right from '../Componants/Right';
import Header from '../Componants/Header/Header';
import DetailsContainer from '../Componants/DetailsContainer';

const Details = () => {

    const {id} = useParams()
    const data = useLoaderData()
     
    // console.log(data, id);
    const [news, setNews] = useState({})

    useEffect(()=>{
        const matchedData = data.find(singleData => singleData.id == id)
        // console.log(matchedData);
        setNews(matchedData)
    },[data, id])

    return (
        <div  className='max-w-9/12 mx-auto py-4'>
           <nav>
            <Header></Header>
           </nav>
           <main className='grid grid-cols-12 gap-3 mt-8'>
             <section className='col-span-9'>
             <h2 className='text-2xl font-bold'>dragon News</h2>
              {
                  <DetailsContainer news={news}></DetailsContainer>
              }
             </section>
             <aside className='col-span-3'>
                <Right></Right>
             </aside>
           </main>
            
        </div>
    );
};

export default Details;