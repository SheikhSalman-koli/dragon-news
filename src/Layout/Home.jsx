import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Componants/Header/Header';
import Running from '../Componants/marquee/Running';
import Navber from '../Componants/Nav/Navber';
import Left from '../Componants/Left';
import Right from '../Componants/Right';
import Loader from '../Componants/Loader';


const Home = () => {

    const {state} = useNavigation
    return (
        <div className='max-w-9/12 mx-auto py-8'>
            <header>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section>
                   <Running></Running>
                </section>
                <section>
                    <Navber></Navber>
                </section>
            </header>

            <main className='grid grid-cols-12 gap-3 mt-6'>

                <aside className='col-span-3 sticky top-0 h-fit'>
                    <Left></Left>
                </aside>

                <section className='col-span-6 '>
                   {state === "loading" ?  <Loader></Loader> : <Outlet></Outlet> } 
                </section>

              <aside className='col-span-3 sticky top-0 h-fit'>
                <Right></Right>
              </aside>

            </main>
        </div>
    );
};

export default Home;