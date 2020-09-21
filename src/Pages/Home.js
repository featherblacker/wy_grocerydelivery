import React, {Component} from "react";
import Header from "../components/Header";
import Nav1 from "../components/Nav1";
import SideNav from "../components/SideNav"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {},
        }
    }

    render() {
        return (
            <>
                <Header {...this.state}/>
                <Nav1/>
                <SideNav {...this.state}/>
            </>
        )
    }
}

export default Home