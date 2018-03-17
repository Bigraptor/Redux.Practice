import { combineReducers } from "redux";
import counter from "./counter.js";
import ui from "./ui.js";

const reducers = combineReducers({
    counter, ui
});

export default reducers;