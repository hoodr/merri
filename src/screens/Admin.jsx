import React from 'react';
import AdminComponent from '../components/admin';
import HomeHeader from '../components/ui/header';
import './Screen.css';

const Admin = () => {
  return (
    <div>
      <HomeHeader />
      <div className="screen">
        <AdminComponent />
      </div>
    </div>
  )
}

export default Admin;
