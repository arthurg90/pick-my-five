// action creators go here - simple actions that are repeated over and over

export const addPlayer = (name) => {
	return {
		type: "ADD_PLAYER",
    name
	};
};

// export const generateTeams(data) => {
// 	return {
// 		type: "GENERATE_TEAMS",
//     data
// 	}
// }
