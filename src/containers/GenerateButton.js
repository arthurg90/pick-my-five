import { connect } from "react-redux";

import GenerateButton from "../components/Teams/GenerateButton";

const mapStateToProps = state => {
	return {
		players: state.get("players"),
	};
};

export default connect(mapStateToProps)(GenerateButton);
