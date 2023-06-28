// chứa các reducers trong redux.
import {ADD_CARD_ITEM} from "../const";

const INITIAL_STATE = {
    cardItems: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CARD_ITEM:
            return {
                ...state,
                cardItems: [...state.cardItems, action.item]
            }
        default:
            return state
    }
}
