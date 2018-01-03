import React from "react";
import Player from "../../containers/Player"

// a simple TeamA component
const TeamA = ({players, player}) => (
    <div>
      <h3>Team A:</h3>
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

export default TeamA;
