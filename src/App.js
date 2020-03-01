//TODO: STEP 1 - Import the useState hook.
  import React, { useState } from "react";
  import "./App.css";
  import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

    //create the states of the teams' initial scores
    const [homeTeam, homeSetScore] = useState(0);
    const [awayTeam, awaySetScore] = useState(0);

    //create Team Constants
    const theHomeTeam = 'Lions';
    const theAwayTeam = 'Tigers';
    
    //adjust the teams' scores
    const homeTeamScore = score => {homeSetScore (homeTeam + score);};
    const awayTeamScore = score => {awaySetScore (awayTeam + score);};
  
  return (
    // the container
    <div className="container">
      {/* the scoreboard container   */}
      <section className="scoreboard">
        {/* the toprow container */}
        <div className="topRow">

          {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            {/* Create The Home Team container */}
            <div className="home">
            {/* replace the class of home_name text with variable to make dynamic (just in case the team that is playing changes)  */}
            <h2 className="home__name">{theHomeTeam}</h2>
            {/* make score adaptive for the homeTeam */}
            <div className="home__score">{homeTeam}</div>
            </div>

            {/* Create The Timer container */}
            <div className="timer">00:03</div>

            {/* Create The Away Team container */}
            <div className="away">
            {/* replace the class of away_name text with variable to make dynamic (just in case the team that is playing changes)  */}
            <h2 className="away__name">{theAwayTeam}</h2>
            {/* make score adaptive for the awayTeam */}
            <div className="away__score">{awayTeam}</div>
            </div>

        </div>
      {/* insert BottomRow */}
      <BottomRow />
      </section>

  {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

    {/* The Buttons Section | and HomeButtons container and AwayButtons container */}
      <section className="buttons">
        <div className="homeButtons">
          {/* add the onClick listener for home buttons to adjust scores for a touchdown with an extra point +7, and the second button for a field goal +3 points. */}
            <button onClick={() => homeTeamScore(7)} className="homeButtons__touchdown">Home Touchdown</button>
            <button onClick={() => homeTeamScore(3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          {/* add the onClick listener for away buttons to adjust scores for a touchdown with an extra point +7, and the second button for a field goal +3 points. */}
            <button onClick={() => awayTeamScore(7)} className="awayButtons__touchdown">Away Touchdown</button>
            <button onClick={() => awayTeamScore(3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
    );
}

export default App;
