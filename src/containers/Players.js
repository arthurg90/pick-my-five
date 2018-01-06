import { connect } from "react-redux";
import Players from "../components/Players";
//this is the wrapped version of the Players component to be passed to App
const mapStateToProps = state => {
	return {
		players: state.get("players"),
	};
};

export default connect(mapStateToProps)(Players);
