import { combineReducers } from "redux";
import kunyeReducer from "./reducers/kunyeReducer";

// stateleri topladığım yer

const rootReducer = combineReducers({
    kunye : kunyeReducer,
})

export default rootReducer;