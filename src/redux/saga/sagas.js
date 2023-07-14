import {call, put, takeLatest, takeEvery, all} from 'redux-saga/effects';
import {getListProduct} from "../../services";
import {setListProductAction, setListProductErrorAction, addItemAction} from "../actions";

function* getProduct(action) {
    try {
        const product = yield call(getListProduct, action.payload)
        yield put(setListProductAction(product.data))
    } catch (e) {
        yield put(setListProductErrorAction(e))
    }
}

function* addItem(action) {
    try {
        const item = action.payload;
        yield put(addItemAction(item))
    } catch (error) {
        console.log(error);
    }
}

function* watchAddItem(action){
    yield takeEvery('ADD_ITEM', addItem);
}

function* watchFetchProductList() {
    yield takeLatest('PRODUCT_FETCH_REQUESTED', getProduct)
}

export default function* rootSaga() {
    yield all([
        watchFetchProductList(),
        watchAddItem()
    ])
}