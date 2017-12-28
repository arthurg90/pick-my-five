import { ADD_PLAYER } from './actions/actions'
import { Map, List } from 'immutable';
import initial from './initial'


const addPlayer = (state = initial, name) => {
  return state.update("players", players => {
    return players.push(List(name))

  });
}


// const generateTeams




const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        // case "GENERATE_TEAMS": return generateTeams(state, action);
        default: return state;
    }
};

export default reducer;
