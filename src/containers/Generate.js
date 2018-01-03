import { connect } from "react-redux";
import Generate from "../components/Generate";
// import { generateTeams } from "../data/actions/state";

const mapStateToProps = state => {
    return {
        players: state.get("players"),
    };
};


// const mapDispatchToProps = dispatch => {
//     return {
//         // onSubmit is a function which dispatches an action "add"
//         onSubmit: data => dispatch(generateTeams(data)),
//     };
// };


// connect up mapDispatchToProps with the Add component
// Add props are now controlled by this file
export default connect(mapStateToProps)(Generate); //
