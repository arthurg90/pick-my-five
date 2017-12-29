import { Map, List } from "immutable";

const addPlayer = (state, value) => state.update("players", players => players.push(value));


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        // case "generateTeams": return
        default: return state;
    }
};

export default reducer;
