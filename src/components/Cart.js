import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "./Cart.css";
import CartItem from "./CartItem";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            totalPrice: 0,
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
                        cart: res.data.shoppingItemList
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

    calculate(){
        let sum = 0;
        this.state.cart.map((item, index) => {
            sum = sum + item.price * item.totalNum;
        })
        console.log(this.state.cart)
        return sum
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
                                    <div>
                                        <div>
                                            名称: {item.name}
                                        </div>
                                        <div>
                                            价格: {item.price}
                                        </div>
                                        <div>
                                            原价: {item.originPrice}
                                        </div>
                                        <div>
                                            数目: <button onClick={() => this.reduce(item)}>-</button>
                                            {item.totalNum}
                                            <button onClick={() => this.add(item)}>+</button>
                                        </div>
                                        <div>
                                            自营: {item.spName}
                                        </div>
                                        <div>
                                            <img src={item.img}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>

                    <div className={"summary"}>
                        <p className={"amount"}>总计：{sum}元 (实际价格以小票为准)</p>
                        <button type="submit" className="btn goLogin">立即下单</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(Cart);