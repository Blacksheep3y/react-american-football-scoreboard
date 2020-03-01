import React, { useState } from "react";
import "./App.css";

function BottomRow() {
 //stretch for Quarter State and Values
 const [quarterValue, setQuarter] = useState(1);
 const changeQuarter = quarterShown => {setQuarter (quarterValue + quarterShown);};
 
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>    
        {/* //STRETCH GOAL -  Add a button that changes which quarter the game is in, and then render the state quarter value on the scoreboard */}
        {/* replace the class of quarter_value text with variable to make dynamic (just in case the team that is playing changes)  */}
        <div className="quarter__value">{quarterValue}</div>
        {/* <div className="quarter__value">4</div> */}
      </div>
      <div className="changeQuarterButton">
          {/* add the onClick listener for changeQuarter buttons to adjust the Quarter */}
            <button onClick={() => {
              if (quarterValue <= 3) {
              changeQuarter(1)
            }}
            } className="awayButtons__fieldGoal">Change Quarter</button>
        </div>
    </div>
  );
};

export default BottomRow;
