import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "./SideNav.css";
import Content from "./Content";

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classifyList: [],
            conditions: [],
            id: "3",
            cart: this.props.cart
        }
    }

    componentDidMount() {
        const url = `api/classifylist`;
        fetch(url, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors'
        })
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    classifyList: res.data.classifyList,
                    conditions: [true].concat(Array(res.data.classifyList.length - 1).fill(false)),
                    id: res.data.classifyList[0].id
                })
            });
    }


    classChange = (index) => {
        let conditions = Array(this.state.classifyList.length).fill(false)
        conditions[index] = true
        this.setState({
            conditions: conditions,
            id: this.state.classifyList[index].id
        })
    }

    render() {
        return (
            <>
                <div className={"sideNav"}>
                    {
                        this.state.classifyList.map((classify, index) => {
                            return (
                                <div
                                    className={this.state.conditions[index] === true ? "item-btn btn chosen" : "item-btn btn"}
                                    tabIndex={"0"} key={index} onClick={() => {
                                    this.classChange(index)
                                }}>
                                    {classify.name}
                                </div>
                            )
                        })
                    }
                </div>
                <Content id={this.state.id} {...this.props}/>
            </>
        );
    }
}

export default withRouter(SideNav);