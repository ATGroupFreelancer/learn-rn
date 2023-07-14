const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';
const ADD_ITEM = 'ADD_ITEM';
const INIT_PRODUCT_LIST = {
    data: [],
    error: null
}

export const ProductReducer = (state = INIT_PRODUCT_LIST, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return {
                ...state,
                data: action.payload,
                error: null
            }
        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                data: [],
                error: action.payload
            }
        case ADD_ITEM:
            return {
                ...state,
                data: [...state.data, action.payload],
                error: null
            }
        default:
            return state
    }
}