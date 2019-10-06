import React from 'react';
import HomeComponent from '../components/home';
import HomeHeader from '../components/ui/header';
import './Home.css';

const Home = () => {
  return (
    <div className="home-screen">
      <HomeHeader />
      <HomeComponent />
    </div>
  )
}

export default Home;
