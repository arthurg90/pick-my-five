import { connect } from "react-redux";

import AddButton from "../components/Form/AddButton";

const mapStateToProps = state => {
	return {
		players: state.get("players"),
	};
};

export default connect(mapStateToProps)(AddButton);
