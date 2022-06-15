// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

  

  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Taux des damandes par an ",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 60,
      value: "45",
      options:{
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      png: UilUsdSquare,
      series: [
        {
          name: "Taux_demandes",
          data: [100, 40, 28, 51, 42, 109, 70],
        },
      ],
    },
    
    {
      title: "Spécialité des stagiaires accéptés",
      color: {
        backGround: 
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "6",
      png: UilClipboardAlt,
      series: [
        {
          name: "specialite",
          data: [25, 26, 15, 40, 12, 150, 200],
        },
      ],
    },
    {
      title: "Taux d'évaluation par mention",
      color: {
        backGround: "linear-gradient(rgb(150, 243, 156) -146.42%, rgb(84, 235, 111) -46.42%)",
        boxShadow: "0px 10px 20px 0px #29942b",
      },
      barValue: 60,
      value: "25",
      png: UilClipboardAlt,
      series: [
        {
          name: "Taux_evaluation",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  
  ];

 