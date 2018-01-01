// action creators go here - simple actions that are repeated over and over

export const addPlayer = ({player, id}) => {
	return {
		type: "ADD_PLAYER",
		player: player,
		id: id
	};
};

export const deletePlayer = (id) => {
	return {
		type: "DELETE_PLAYER",
		id: id,
	};
};

export const setPlayer = player => {
	return {
		type: "SET_PLAYER",
		player: player
	};
};

export const setPlayers = players => {
	return {
		type: "SET_PLAYERS",
		players: players
	};
};
