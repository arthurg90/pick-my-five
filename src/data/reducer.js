import { Map, List } from "immutable";

const createPlayer = ({ player, id }) => {
	return Map({
		player: player,
		id: id
	})
}

const addPlayer = (state, player) => state.update("players", players => players.push(Map(player)));

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
        case "DELETE_PLAYER": return deletePlayer(state, action);
        // case "generateTeams": return
        default: return state;
    }
};

export default reducer;
