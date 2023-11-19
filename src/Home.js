import React from 'react';
import { UserCard } from './components/Users/UserCard';
const Home = () => {
    return (
        <div className='mx-10'>
            <div className='mt-5'>
                <UserCard />
            </div>
        </div>
    );
};

export default Home;