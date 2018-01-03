import { connect } from "react-redux";
import TeamA from "../components/Teams/TeamA";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { players }) => {
  return {
      players: state.get("players"),
      teamA: state.get("teamA")
  };
};

// connect up mapStateToProps with the Teams component
// Teams's props are now controlled by this file
export default connect(mapStateToProps)(TeamA);
