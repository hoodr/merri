import React from 'react';
import HomeComponent from '../components/home';
import HomeHeader from '../components/ui/header';
import './Screen.css';

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <div className="screen">
        <HomeComponent />
      </div>
    </div>
  )
}

export default Home;
