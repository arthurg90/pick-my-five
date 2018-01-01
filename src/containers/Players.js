import { connect } from "react-redux";

import Players from "../components/Players";
// import { setPlayer } from "../data/actions/actions";

const mapStateToProps = state => {
	return {
		players: state.get("players"),
	};
};


// const mapDispatchToProps = (dispatch, { key }) => {
// 	return {
//
// 		addPlayer: (player) => dispatch(addPlayer(player)),
//
// 	};
// };

export default connect(mapStateToProps)(Players);
// export default connect(mapStateToProps, mapDispatchToProps)(Players);
