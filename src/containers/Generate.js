import { connect } from "react-redux";
import Generate from "../components/Generate";

const mapStateToProps = state => {
    return {
        players: state.get("players"),
    };
};

// Add props are now controlled by this file
export default connect(mapStateToProps)(Generate); //
