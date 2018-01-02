import { connect } from "react-redux";

import Players from "../components/Players";

const mapStateToProps = state => {
	return {
		players: state.get("players"),
	};
};

// const mapDispatchToProps = (dispatch, { id }) => {
// 	return {
// 		onDelete: () => dispatch(deletePlayer(id)),    //dispatches an action to delete the player
// 		onLoad: () => dispatch(setPlayer(id)),
// 	};
// };


export default connect(mapStateToProps)(Players);
