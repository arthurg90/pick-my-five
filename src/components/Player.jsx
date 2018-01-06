import React from 'react';

const Player = ({ player, onDelete }) => (
          <li className="list-group-item" key={ player.get("id") }>
            { player.get("player") }
            <button onClick={ onDelete } type="button" className="btn-del">✖</button>
          </li>
);


export default Player;
