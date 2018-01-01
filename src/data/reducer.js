import { Map, List } from "immutable";

let lastID = 0; //initiate the count for id to be assigned to players

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

const setPlayers = (state, { players }) => state.get("players", players);

const setPlayer = (state, { player }) => state.update("players", players => {
	let exists = players.find(p => p.get("id") === player.get("id"));
	if (!exists) {
		return players.push(player);
	}
	return players.map(p => p.get("id") === player.get("id") ? player : p)
});

const deletePlayer = (state, { id }) => {
	return state.update("players", players => {
		return players.filter(( p ) => p.get("id") !== +id)
	});
}


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        // case "SET_PLAYERS": return setPlayers(state, action);
        // case "SET_PLAYER": return setPlayer(state, action);
        // case "DELETE_PLAYER": return deletePlayer(state, action);
        // case "generateTeams": return
        default: return state;
    }
};

export default reducer;
