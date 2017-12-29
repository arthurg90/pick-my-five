import { connect } from "react-redux";

// import in the form component
import Form from "../components/Form";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        players: state.get("players"),
    };
};

// connect up mapStateToProps with the Form component
// Forms' props are now controlled by this file
export default connect(mapStateToProps)(Form);
