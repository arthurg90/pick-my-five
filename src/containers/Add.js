import { connect } from "react-redux";
import Add from "../components/Add";
import { addPlayer } from "../data/actions/actions";

const mapDispatchToProps = dispatch => {
    return {
        // onSubmit is a function which dispatches an action "add"
        onSubmit: () => dispatch({ type: "ADD_PLAYER" }),
    };
};



// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add props are now controlled by this file
export default connect(null, mapDispatchToProps)(Add); //(Add)

//
// onSubmit: (data) => {
//   let action = addPlayer(data);
//   dispatch(action);
