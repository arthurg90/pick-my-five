import { connect } from "react-redux";
import GenerateButton from "../components/GenerateButton";
//mapping state "players" to players prop to validate if the generate button is disabled or not 
const mapStateToProps = state => {
	return {
		players: state.get("players"),
	};
};

export default connect(mapStateToProps)(GenerateButton);
