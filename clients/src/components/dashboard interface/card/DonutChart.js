import React,{useEffect,useState} from 'react';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios'
ChartJS.register(ArcElement, Title, Tooltip, Legend);



export default function DonutChart() {
  const [accepted,setAccepted]=useState(0)
  const [refuse,setRefuse]=useState(0)
  const [attente,setAttente]=useState(0)
    useEffect(()=>{
      axios.post('http://localhost:5000/users/findcount',{status:"accepted",isAdmin:"stagiaire"})
      .then(res=>setAccepted(res.data.length))
      .catch(err=>console.error(err))
      axios.post('http://localhost:5000/users/findcount',{status:"En attente",isAdmin:"stagiaire"})
      .then(res=>setAttente(res.data.length))
      .catch(err=>console.error(err))
      
    },[])
    const options ={
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        title: {
            display: true,
            position:"bottom",
            text: 'Taux des demandes',
          },
    }};
    const data = {
        labels: ['Demande refusée', 'Demande en attente', 'Demande accéptée'],
        datasets: [
          {
            label: '# of Votes',
            data: [refuse,attente, accepted],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgb(162, 225, 162)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
             
            ],
            borderWidth: 1,
          },
        ],
      };

  return (
      <>
      <div style={{width:"400px"}}>
      <Doughnut options={options} data={data} />
      </div>
      </>
  )
}
