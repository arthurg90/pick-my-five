import { Map, List } from "immutable";

let lastID = 0; //initiate the count for id to be assigned to players
// create a function that returns a new player Map
const createPlayer = ({ player, id }) => {
		// up the ID by 1 every time
    lastID += 1;
    return Map({
			player: player,
      id: lastID,
    });
};

const addPlayer = (state, data) => state.update("players", players => (
		players.push(Map(createPlayer(data))
	)));

const deletePlayer = (state, { id }) => {
	return state.update("players", players => {
    return players.filter(( p ) => p.get("id") !== +id)
  });
}

const shufflePlayers = (state, {players}) => {
  let currentIndex = players.length;

  while (0 !== currentIndex) {
    let random = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    let temporaryValue = players[random];
    players[random] = temporaryValue;
  }
  return players;
};




/*s
In order to generate Teams, there need to be some additional functions carried out to make changes to the State
1. get the "players" list from state, if there are 10 players in the array
2. apply randomisation logic to it so that the players are shuffled and assign the array to a new variable
3. push this new array into the "teams" state - the function needs to return the new teams array
4. teamA will take the first 5 players from this updated teams array
5. teamB will take the last 5 players from the updated teams array



Logic for shuffling players:
const shufflePlayers = ({players}) = {
let currentIndex = players.length,
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = players[currentIndex];
    players[currentIndex] = players[randomIndex];
    players[randomIndex] = temporaryValue;
    }
    return players;
  };

  let result = shuffle(playersCopy);
  return state.update({teams: result});
};

*/


const generateTeams = (state, {players}) => {
  const playersShuffled = shufflePlayers(players);
  return state.update("teams", teams => {
    return teams.push(playersShuffled)
  });
}


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        case "DELETE_PLAYER": return deletePlayer(state, action);
        case "GENERATE_TEAMS": return generateTeams(state, action);
        default: return state;
    }
};

export default reducer;

//TODO delete?


// case "SET_PLAYERS": return setPlayers(state, action);
// case "SET_PLAYER": return setPlayer(state, action);

// const setPlayers = (state, { players }) => state.get("players", players);

// const setPlayer = (state, { player }) => state.update("players", players => {
// 	let exists = players.find(( p ) => p.get("id") === player.get("id"));
// 	if (!exists) {
// 		return players.push(player);
// 	}
//
// 	return players.map(( p ) => p.get("id") === player.get("id") ? player : p)
// });
