import {cardReducer} from "./card.reducer";
import {combineReducers} from "redux";
import {numberReducer} from "./number.reducer";
import { ProductReducer } from "./product.reducer";

export default combineReducers({
    card: cardReducer,
    num: numberReducer,
    product: ProductReducer
});