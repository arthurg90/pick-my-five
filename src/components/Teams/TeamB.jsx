import React from "react";
import Player from "../../containers/Player"


// a simple TeamA component
const TeamB = ({players, player}) => (
    <div>
      <h3>Team B:</h3>
      { players.count() >= 10 ?
        <ul className="list-group">
          { players.map(player => (
              <Player key={ player.get("id") } player={ player } />
          ))}
        </ul>
      :
      <p>Less than 10 players have been entered</p>
      }

    </div>
);

export default TeamB;
