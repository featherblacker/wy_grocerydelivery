import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Header from "../components/Header";
import Nav1 from "../components/Nav1";
import Cart from "../components/Cart";
class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header/>
                <Nav1/>
                <Cart/>
            </>
        )
    }
}

export default withRouter(ShoppingCart);