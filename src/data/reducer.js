import { Map } from "immutable";

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

//if player value is not "" then, add the player to the list
const addPlayer = (state, data) => data.player !== ' ' ? state.update("players", players => (
		players.push(Map(createPlayer(data))
	))) : state ;

const deletePlayer = (state, { id }) => {
	return state.update("players", players => {
    return players.filter(( p ) => p.get("id") !== +id)
  });
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        case "DELETE_PLAYER": return deletePlayer(state, action);
        default: return state;
    }
};

export default reducer;
