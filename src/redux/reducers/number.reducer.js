import {ADD_CARD_ITEM} from "../const";

const INITIAL_STATE = {
    cardItems: [{}]
}
export const numberReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CARD_ITEM:
            return {
                ...state,
                cardItems: [...state.cardItems, action.payload]
            }
        default:
            return state
    }
}