import { connect } from "react-redux";
import Add from "../components/Add";
import { addPlayer } from "../data/actions/state";

const mapDispatchToProps = dispatch => {
    return {
        // onSubmit is a function which dispatches an action "add"
        onSubmit: data => dispatch(addPlayer(data)),
    };
};

// connect up mapDispatchToProps with the Add component
export default connect(null, mapDispatchToProps)(Add); 
