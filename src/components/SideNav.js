import React, {Component} from "react";
import "./SideNav.css";
import Content from "./Content";
import {loadProducts} from "../redux/cartSlice";
import {connect} from "react-redux";
import ProgressBar from 'react-bootstrap/ProgressBar'

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classifyList: [],
            index: 0,
            rendering: true
        }
    }

    componentDidMount() {
        this.props.loadProducts();
        this.setState({
            rendering: false
        })
    }


    classChange = (index) => {
        if (!this.state.rendering) {
            this.setState({
                index: index
            })
        }
    }

    render() {
        return (
            <>
                {this.props.categories.length ?
                    <div>
                        <div className={"sideNav"}>
                            {
                                this.props.categories.map((classify, index) => {
                                    return (
                                        <div
                                            className={index === this.state.index ? "item-btn btn chosen" : "item-btn btn"}
                                            style={{border:"none"}}
                                            tabIndex={"0"} key={index} onClick={() => {
                                            this.classChange(index)
                                        }}>
                                            {classify.name}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Content id={this.state.index} searchResult={this.props.searchResult}/>
                    </div>
                    : <ProgressBar animated now={100} variant="success" />
                }
            </>
        );
    }
}

const mapStateToProps = (state, ownProp) => {
    return {
        categories: state.store.categories
    }
}

const mapDispatchToProps = {
    loadProducts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideNav)
