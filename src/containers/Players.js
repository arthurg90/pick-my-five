import { connect } from "react-redux";

import Players from "../components/Players";
import { setPlayers } from "../data/actions/actions";

const mapStateToProps = state => {
	return {
		players: state.get("players"),
	};
};

const mapDispatchToProps = (dispatch, { key }) => {
	return {

		onLoad: () => dispatch(setPlayers()),

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
