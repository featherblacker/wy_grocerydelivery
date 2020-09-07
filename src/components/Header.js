import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            cart: this.props.cart
        }
    }


    render() {
        return (
            <>
                <div className={"topline"}>
                    <div className={"languages"}>
                        <a className={"english btn"} href={'#'}>
                            English
                        </a>
                        <a className={"chinese btn"} href={'#'}>
                            中文
                        </a>
                    </div>
                    <div className={"shopping"}>
                        <a className={"cart btn"} type={"button"} href={"/shopping"}>
                            <i className="fas fa-shopping-cart pr-2"/>
                        </a>
                        <a className={"account btn"} type={"button"} href={"/login"}>
                            <i className="fas fa-user-circle"/>
                        </a>
                    </div>
                </div>
                <div>

                </div>
            </>
        );
    }
}

export default withRouter(Header);
