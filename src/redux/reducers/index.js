import {cardReducer} from "./card.reducer";
import {combineReducers} from "redux";
import {numberReducer} from "./number.reducer";

export default combineReducers({
    card: cardReducer,
    num: numberReducer,
});