import { connect } from "react-redux";
import Generate from "../components/Generate";
import { fetchPlayers } from "../data/actions/state";


const mapStateToProps = state => {
    return {
        players: state.get("players"),
    };
};
//
// const mapDispatchToProps = (dispatch, {players}) => {
// 	return {
// 		onLoad: () => {
// 			dispatch(fetchPlayers(players));
// 		},
// 	};
// };

// connect up mapDispatchToProps with the Generate component
// Add props are now controlled by this file
export default connect(mapStateToProps)(Generate); //

// export default connect(mapStateToProps, mapDispatchToProps)(Generate); //
