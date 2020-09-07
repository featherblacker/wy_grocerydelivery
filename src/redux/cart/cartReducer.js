import {ADD_TO_CART} from "./cartTypes";
import {SUB_TO_CART} from "./cartTypes";

const initialState = {
    cart: {}
}

const cartReducer = (state = initialState, action) => {
    const id = action.id;
    const quantity = action.payload
    switch (action.type) {
        case ADD_TO_CART:
            if (state.cart.hasOwnProperty(id)) {
                state.cart[id] += quantity;
            } else {
                state.cart[id] = quantity;
            }
            return state;
        case SUB_TO_CART:
            if (state.hasOwnProperty(id)) {
                if (state[id] - quantity > 0) {
                    state[id] -= quantity;
                } else {
                    delete state[id]
                }
            }
            return state;
        default:
            return state;
    }
}
export default cartReducer;