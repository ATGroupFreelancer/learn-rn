import {combineReducers, createStore} from 'redux';

// State
let appState = {
    number: 1,
    histories: [],
    errMsg: ''
}
// Action
const increaseAction = {type: 'ADD', value: 1}
const decreaseAction = {type: 'DEC', value: 1}
// Reducer
const reducer = (state = appState, action) => {
    switch (action.type) {
        case 'ADD':
            const newValue = state.number + action.value;
            return {
                ...state,
                histories: [...state.histories, newValue],
                number: newValue
            }
        case 'DEC':
            const newVal = state.number - action.value;
            return {
                ...state,
                histories: [...state.histories, newVal],
                number: newVal
            }
        default:
            return state
    }
}

const errReducer = (state = appState, action) => {
    switch (action.type) {
        case 'ERR':
            return {
                ...state,
                errMsg: 'Can not decrease number less than 0'
            }
        default:
            return state
    }
}

// Store
const rootReducer = combineReducers({number: reducer, errMsg: errReducer});
const store = createStore(rootReducer);

// Subscribe
store.subscribe(() => console.log(store.getState()));

// Dispatch
store.dispatch(increaseAction);

// Middleware
const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result
}

export default store;
