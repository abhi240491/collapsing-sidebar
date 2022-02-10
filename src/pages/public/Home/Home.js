import React from 'react';
import './Home.css';
import Navbar from '../../../components/Navbar/Navbar'
import Sidebar from '../../../components/Sidebar/Sidebar';
function Home() {
  return (
    <>
  <Navbar/>
  <Sidebar/>
    <div className='home'>
      <h1>Home</h1>
    </div>
    </>
  );
}

export default Home;