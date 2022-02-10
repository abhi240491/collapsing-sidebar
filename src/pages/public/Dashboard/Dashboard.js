import React from 'react';
import Navbar from '../../../components/Navbar/Navbar'
import Sidebar from '../../../components/Sidebar/Sidebar';
import './Dashboard.css'
function Dashboard() {
  return (
  <>
  <Navbar/>
  <Sidebar/>
  <div className='dashboard'>
      <h1>Dashboard</h1>
  </div>
  </>
  );
}

export default Dashboard;
