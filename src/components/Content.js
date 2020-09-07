import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "./Content.css";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allItems: {},
            itemList: [],
            cart: {}
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id !== prevProps.id) {
            this.changeID(this.props.id)
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
                    itemList: res.data.itemList
                })
            });
    }

    changeID = (id) => {
        let allItems = this.state.allItems;
        if (allItems.hasOwnProperty(id)) {
            this.setState({
                itemList: allItems[id]
            })
        } else {
            const url = `api/classifylist?classify_id=${id}`;
            fetch(url, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: 'cors'
            })
                .then((response) => response.json())
                .then((res) => {
                    allItems[id] = res.data.itemList
                    this.setState({
                        allItems: allItems,
                        itemList: res.data.itemList
                    })
                });
        }
    }

    addToCart = (e) => {
        let itemId = e.target.id;
        let data = {
            "useruss": "test",
            "itemId": itemId,
            "type": "add",
        };
        const url = `api/shoppingmodify`;
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.status) {
                    console.log(res.msg)
                } else {
                    this.setState({
                        cart: res.data,
                    })
                }
            })
    }


    render() {
        return (
            <div>
                <div className={"pro-col"}>
                    {
                        this.state.itemList.map((item, index) => {
                            return (
                                <div className={"merchandise"} key={index}>
                                    <img className={"picture"} src={item.img} alt='#'/>
                                    <div className={"name-des"}>
                                        <p className={"name"}>{item.name}</p>
                                        <p className={"description"}>{item.desc}</p>
                                    </div>
                                    <div className={"price-btn"}>
                                        <div className={"price"}>
                                            {item.recommended && <span className={"special"} color={"red"}>特价</span>}
                                            {" $    "}
                                            <span className={"price-number"}>{item.price}</span>
                                            {" /" + `${item.unit === "" ? "份" : item.unit}`}
                                        </div>
                                        <button className={"btn add-btn"} id={item.id} onClick={this.addToCart}>加入购物车
                                        </button>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
                <div>
                </div>
            </div>


        );
    }
}

export default withRouter(Content)
