import React, {Component} from "react";
import "./Content.css";
import allProducts, {loadProducts} from "../redux/cartSlice";
import {connect} from "react-redux";

const {addToCart} = allProducts.actions

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allItems: {},
            itemList: [],
            cart: {},
            id: this.props.id
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id !== prevProps.id) {
            this.changeID(this.props.id)
        }
    }

    componentDidMount() {
        this.props.loadProducts();
    }

    changeID = (id) => {
        this.setState({
            id: id
        })
    }

    addToCart = (e) => {
        let name = e.target.name;
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
                    alert(`${name} 添加失败 \n reason:${res.msg}`)
                    console.log(res.msg)
                } else {
                    alert(`${name} 已加入购物车`)
                    this.setState({
                        cart: res.data,
                    })
                }
            })
    }

    render() {
        // let productResult = []
        // let searched = !!localStorage.getItem('searchResult');
        // if (searched){
        //     productResult = JSON.parse(localStorage.getItem('searchResult'))
        //     console.log(productResult)
        // }else{
        //     productResult = this.props.products[this.state.id]
        //     console.log(productResult)
        // }
        return (
            <div>
                <div className={"pro-col"}>
                    {
                    this.props.products[this.state.id].map((item, index) => {
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
                                        <button className={"btn add-btn"} id={item.id} name={item.name} onClick={this.addToCart}>加入购物车
                                        </button>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>


        );
    }
}

const mapStateToProps = (state, ownProp) => {
    return {
        categories: state.store.categories,
        products: state.store.products
    }
}

const mapDispatchToProps = {
    addToCart,
    loadProducts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)
