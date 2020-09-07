import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class CartItem extends Component{
    constructor(props) {
        super(props);
        this.state={
            number:this.props.item.totalNum
        }
    }

    reduce = () => {
        let data = {
            "useruss": "test",
            "itemId": this.props.item.id,
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
                    this.setState({
                        number: res.data.totalNum
                    })
                }
            })
    }

    add = () => {
        let data = {
            "useruss": "test",
            "itemId": this.props.item.id,
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
                    this.setState({
                        number: res.data.totalNum
                    })
                }
            })
    }

    render() {
        return(
            <div>
                <div>
                    名称: {this.props.item.name}
                </div>
                <div>
                    价格: {this.props.item.price}
                </div>
                <div>
                    原价: {this.props.item.originPrice}
                </div>
                <div>

                    数目: <button onClick={this.reduce}>-</button>
                    {this.state.number}
                    <button onClick={this.add}>+</button>
                </div>
                <div>
                    自营: {this.props.item.spName}
                </div>
                <div>
                    <img src={this.props.item.img}/>
                </div>
            </div>
        )
    }
}

export default withRouter(CartItem)