import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCartActions} from "../redux";

function HooksCart(props) {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(addCartActions(props.id, props.quantity))}>加入购物车</button>
        </div>
    )
}

export default HooksCart