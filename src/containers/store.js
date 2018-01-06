import { createStore } from "redux";
import reducer from "../data/reducer";
import initial from
//Store for the app
const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

store.subscribe(() => {
  let names = store.getState().get("value");
});

store.dispatch({ type: "addPlayer" });
store.dispatch({ type: "generateTeams" });
