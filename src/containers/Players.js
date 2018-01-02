import { connect } from "react-redux";

import Players from "../components/Players";

const mapStateToProps = state => {
	return {
		players: state.get("players"),
	};
};

export default connect(mapStateToProps)(Players);
