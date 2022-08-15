import {createStore} from "redux";
import {reducer, reducers} from "../reducers/reducer";

const store =createStore(
    reducers,

    window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;