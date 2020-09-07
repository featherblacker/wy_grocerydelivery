import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Nav1.css";

class Nav1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"navLeft"}>
                <a className={"tag btn"} href={'/'}>
                    <img className={"tag_img"} src={"./img/woy.png"} alt={"Woying's tag"} height={"55px"}/>
                </a>


                <div className={"search"}>
                    <a className={"search_block"} type={""}>
                        <input type={"text"} className={"search-content"} placeholder={"请输入商品名称："}/>
                    </a>
                    <a className={"search_button btn"} type={"button"}>
                        <input className={"searchButton"} value={"搜索"} type={"submit"}/>
                    </a>
                </div>
            </div>
        );
    }
}

export default withRouter(Nav1);
