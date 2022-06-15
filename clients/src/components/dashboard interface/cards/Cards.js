import React from "react";
import "./cards.css";
import { cardsData, evaluationCard } from "../Data";

import Card from "../card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      <div className="section-cards">
        {cardsData.map((card, id) => {
       
            return (
              <div style={{margin: "10px"}} className="parentContainer" key={id}>
                <Card  className="card-class"
                  title={card.title}
                  color={card.color}
                  barValue={card.barValue}
                  value={card.value}
                  series={card.series}
                />
              </div>
            );
          
        })}
      </div>
 


    </div>
  );
};

export default Cards;
