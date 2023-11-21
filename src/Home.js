import React from 'react';
import { UserCard } from './components/Users/UserCard';
const Home = () => {
    return (
        <div className='home-container'>
            <div className='mt-5'>
                <UserCard />
            </div>
        </div>
    );
};

export default Home;