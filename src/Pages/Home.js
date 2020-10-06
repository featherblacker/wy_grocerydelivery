import React, {Component} from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {},
            searchResult: []
        }
    }

    handleChange = (searchResult) => {
        this.setState({
            searchResult: searchResult
        })

    }

    render() {
        return (
            <>
                <Header {...this.state}/>
                <TopNav handleChange={this.handleChange}/>
                <SideNav searchResult={this.state.searchResult}/>
            </>
        )
    }
}

export default Home