import { connect } from "react-redux";
import Generate from "../components/Generate";
//this is the wrapped version of the Generate component to be used in App
const mapStateToProps = state => {
    return {
        players: state.get("players"),
    };
};

export default connect(mapStateToProps)(Generate);
