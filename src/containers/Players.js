import { connect } from "react-redux";

import Players from "../components/Players";
// import { setPlayer } from "../data/actions/actions";

const mapStateToProps = state => {
	return {
		players: state.get("players"),
	};
};



export default connect(mapStateToProps)(Players);
