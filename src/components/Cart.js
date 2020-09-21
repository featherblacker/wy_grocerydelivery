import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "./Cart.css";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            arriveDate: ""
        }
        this.showCart()
    }

    showCart = () => {
        const url = `api/shoppinglist`;
        fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                useruss: "test",
            })
        }).then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.status) {
                    console.log(res.msg)
                } else {
                    this.setState({
                        cart: res.data.shoppingItemList,
                        arriveDate: res.data.arriveMsg
                    })
                    console.log(this.state)
                }
            })
    }

    reduce = (item) => {
        let data = {
            "useruss": "test",
            "itemId": item.id,
            "type": "reduce",
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
                if (res.status) {
                    console.log(res.msg)
                } else {
                    this.showCart();
                }
            })
    }

    add = (item) => {
        let data = {
            "useruss": "test",
            "itemId": item.id,
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
                if (res.status) {
                    console.log(res.msg)
                } else {
                    this.showCart()
                }
            })
    }


    render() {
        let sum = 0
        return (
            <div className={"content"}>
                <div className={"sCar"}>
                    <h1>购物车</h1>
                    <div className={"deliverDate"}>
                        <p style={{margin: 0}}>{this.state.cart.arriveMsg}</p>
                    </div>

                    <div className={"pro-col1"}> {
                        this.state.cart.map((item, index) => {
                            sum = sum + item.price * item.totalNum;
                            return (
                                <div key={index}>
                                    <div className={'shoppingList'}>
                                        <div className={'col1'}>
                                            <img className={'itemImage'} src={item.img}/>
                                        </div>
                                        <div className={'col2'}>
                                            <div className={'itemName'}>
                                                {item.name}
                                            </div>
                                            <div className={'priceClass'}>
                                                <span className={'itemPrice'}>{"$"}{item.price}</span>
                                                {" /" + `${item.unit === "" ? "份" : item.unit}`}&nbsp;&nbsp;&nbsp;
                                                <span className={'itemOrigPrice'}>{"$"}{item.originPrice}</span>
                                            </div>
                                        </div>
                                        <div className={'col3'}>
                                            <button className={'btn btn-success btt'} onClick={() => this.reduce(item)}>-</button>
                                            &nbsp;&nbsp;&nbsp;{item.totalNum}&nbsp;&nbsp;&nbsp;
                                            <button className={'btn btn-success btt'} onClick={() => this.add(item)}>+</button>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>

                    <div className={"summary"}>
                        <span className={"amount"}>总计：</span><span className={"amountSum"}>{sum} </span>
                        <span className={"amount"}>&nbsp;&nbsp;{'元'}&nbsp;&nbsp;{'(实际价格以小票为准)'}</span>
                        <button type="submit" className="btn goLogin">立即下单</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(Cart);