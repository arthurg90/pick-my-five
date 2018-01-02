import { connect } from "react-redux";
import Player from "../components/Player";
import { deletePlayer, setPlayer } from "../data/actions/actions";

const mapDispatchToProps = (dispatch, { player } ) => {
	return {
		onDelete: () => dispatch(deletePlayer(player.get("id"))),
		onLoad: () => dispatch(setPlayer(player.get("id"))),
	}
}


export default connect(null , mapDispatchToProps)(Player);
