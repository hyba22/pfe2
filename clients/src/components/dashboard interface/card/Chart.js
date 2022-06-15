import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


 function Chart() {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: 'Taux des stagiaires par département',
          },
        },
      };
      
      const labels = ['étage 1', 'étage 2', 'étage 3', 'étage 4', 'étage 5', 'étage 6', 'étage 7', 'étage 8', 'étage 9'];
      
       const data = {
        labels,
        datasets: [
          {
            label: 'Stagiaire ',
            data: [10,20,30,40,50,60,7,45,10],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ]
      };

  return(
      <>
      <div style={{width:"800px" }}>
       <Bar options={options} data={data} />
       </div>
      </>
  
  )
}

export default Chart;