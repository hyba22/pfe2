import React from 'react';
import Chart from './card/Chart';
import DonutChart from './card/DonutChart';
import Cards from './cards/Cards';
import './mainDash.css';

function MainDashboard() {
  return (
    <div className="MainDash">
      <div className='title-dash'> 
        <h1>Dashboard</h1>
      </div>
      <Cards/>
     
      <div className='charts'>
         <DonutChart/>
         <Chart/>
      </div> 
    </div>
    
  )
}

export default MainDashboard