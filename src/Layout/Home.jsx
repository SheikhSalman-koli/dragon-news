import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Componants/Header/Header';
import Running from '../Componants/marquee/Running';
import Navber from '../Componants/Nav/Navber';
import Left from '../Componants/Left';
import Right from '../Componants/Right';


const Home = () => {
    return (
        <div className='max-w-9/12 mx-auto py-8'>
            <header>
                <Header></Header>
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
                    <Outlet></Outlet>
                </section>

              <aside className='col-span-3 sticky top-0 h-fit'>
                <Right></Right>
              </aside>

            </main>
        </div>
    );
};

export default Home;