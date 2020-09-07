import {ADD_TO_CART} from "./cartTypes";
import {SUB_TO_CART} from "./cartTypes";

export const addCartActions = (id, quantity) => {
    return {
        type: ADD_TO_CART,
        id: id,
        payload: quantity
    }
}

export const subCartActions = (id, quantity) => {
    return {
        type: SUB_TO_CART,
        id: id,
        payload: quantity
    }
}
