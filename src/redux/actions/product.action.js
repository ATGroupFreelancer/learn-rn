
export const fetchListProductAction = () => {
    return {type: 'PRODUCT_FETCH_REQUESTED'}
}

export const setListProductAction = (listProduct) => {
    return {type: 'SET_PRODUCT_LIST', payload: listProduct}
}

export const setListProductErrorAction = (error) => {
    return {type: 'FETCH_PRODUCT_ERROR', payload: error}
}

export const addItemAction = (item) => {
    return {type: 'ADD_ITEM', payload: item}
}