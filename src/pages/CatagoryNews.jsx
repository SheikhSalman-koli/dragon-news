import React, { useEffect, useState} from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewCard from '../Componants/newscard/NewCard';

const CatagoryNews = () => {

  const {id} = useParams()
  const data = useLoaderData()

  // console.log(id, data);

   const[categories, setCategories] = useState([])

  useEffect(()=>{

    if(id == '0' ){
      setCategories(data)
      return
    }
    else if(id == '1' ){
      const filteredData = data.filter((news)=> news.others.is_today_pick == true)
     setCategories(filteredData)
    }
    else{
      const filteredData = data.filter((news )=> news.category_id == id)
       setCategories(filteredData)
      // console.log(filteredData);
    }

  },[data, id])

    return (
        <div>
         <h2 className='text-[17px] font-bold pl-3 mb-4'>Dragon News Home</h2>
         <div className='grid grid-cols-1 gap-5'>
          {
            categories.map((single => <NewCard key={single.id} single={single}></NewCard>))
          }
         </div>
        </div>
    );
};

export default CatagoryNews;