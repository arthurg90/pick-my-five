const reducer = (state, action) => {
    switch (action.type) {
        case "addPlayer": return state.update("value", value => value + 1);
        // case "generateTeams": return
        default: return state;
    }
};

export default reducer;
