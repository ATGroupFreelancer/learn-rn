//  chứa các actions dùng để truyền vào hàm dispatch.
import {ADD_CARD_ITEM} from "../const";

export const addCardItem = (item) => {
    return {
        type: ADD_CARD_ITEM,
        item
    }
}
