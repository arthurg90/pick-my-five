// import { connect } from "react-redux";
// import Form from "../components/Form/Form";
// import { addPlayer, setPlayers } from "../data/actions/actions"
//
// // mapStateToProps is passed in the current state
// // it should return an object, which gets passed in as props to the connected component
// const mapStateToProps = state => {
//     return {
//         players: state.get("players"),
//     };
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         // onSubmit is a function which dispatches an action "add"
//         onSubmit: (data) => dispatch(addPlayer(data)),
//         onLoad: () => dispatch(setPlayers()),
//     };
// };
//
// // connect up mapStateToProps with the Form component
// // Forms' props are now controlled by this file
// export default connect(mapStateToProps, mapDispatchToProps)(Form);
