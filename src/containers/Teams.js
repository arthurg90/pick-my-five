import { connect } from "react-redux";
import Teams from "../components/Teams";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { players }) => {
  return {
      players: state.get("players"),
  };
};

// connect up mapStateToProps with the Teams component
// Teams's props are now controlled by this file
export default connect(mapStateToProps)(Teams);
