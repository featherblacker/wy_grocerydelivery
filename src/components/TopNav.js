import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "./TopNav.css";

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: "",
            searchResult: []
        }
    }

    componentDidMount() {
        if (!this.state.word) {
            localStorage.removeItem("searchResult")
        }
    }

    handleChange = (e) => {
        let word = e.target.value
        if (word === "") {
            localStorage.removeItem("searchResult")
            this.setState({
                word: "",
                searchResult: []
            })
            this.props.handleChange({searchResult:[]})
            return
        }
        const url = `api/search?word=${word}`;
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "get",
        })
            .then(response => response.json())
            .then(res => {
                if (res.status) {
                    console.log(res.msg)
                } else {
                    localStorage.setItem("searchResult", JSON.stringify(res.data.itemList))
                    this.props.handleChange({searchResult:res.data.itemList})
                    this.setState({
                        word: word,
                        searchResult: res.data.itemList
                    })
                }
            })
    }

    render() {
        return (
            <div className={"navLeft"}>
                <a className={"tag btn"} href={'/'}>
                    <img className={"tag_img"} src={"./img/woy.png"} alt={"Woying's tag"} height={"55px"}/>
                </a>


                <div className={"search"}>
                    <a className={"search_block"} type={""}>
                        <input type={"text"} className={"search-content"} placeholder={"请输入商品名称："}
                               defaultValue={this.state.word}
                               onChange={this.handleChange}/>
                    </a>
                    <a className={"search_button btn"} type={"button"}>
                        <input className={"searchButton"} value={"搜索"} type={"submit"}/>
                    </a>
                </div>
            </div>
        );
    }
}

export default withRouter(TopNav);
