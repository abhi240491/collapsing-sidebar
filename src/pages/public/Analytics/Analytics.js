import React from 'react';
import Navbar from '../../../components/Navbar/Navbar'
import Sidebar from '../../../components/Sidebar/Sidebar';
import './Analytics.css';
function Analytics() {
  return (
  <>
  <Navbar/>
  <Sidebar/>
  <div className='analytics'>
      <h1>Analytics</h1>
  </div>
  </>);
}

export default Analytics;
