import React, {Component} from "react";
import Header from "../components/Header";
import {withRouter} from "react-router-dom";
import Nav1 from "../components/TopNav";
import LogPad from "../components/LogPad";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header/>
                <Nav1/>
                <LogPad/>
            </>
        )
    }
}

export default withRouter(Login);