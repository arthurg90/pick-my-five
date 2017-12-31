// action creators go here - simple actions that are repeated over and over

export const addPlayer = players => {
	return {
		type: "ADD_PLAYER",
    players: players
	};
};

// export const generateTeams(data) => {
// 	return {
// 		type: "GENERATE_TEAMS",
//     data
// 	}
// }
