import { Map, List } from "immutable";

const addPlayer = (state, {value}) => state.update("players", players => players.push(value)) ;

// const setPlayer = (state, { player }) => state.update("players", players => {
// 	let exists = players.find(p => p.get("id") === player.get("id"));
// 	if (!exists) {
// 		return players.push(player);
// 	}
// 	return players.map(p => p.get("id") === player.get("id") ? player : p)
// });

// const setPlayers = (state, { players }) => state.set("players", players);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        // case "SET_PLAYERS": return setPlayers(state, action);
        // case "SET_PLAYER": return setPlayer(state, action);
        // case "generateTeams": return
        default: return state;
    }
};

export default reducer;
