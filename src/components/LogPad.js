import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "./LogPad.css"

class LogPag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"login"}>
                <form className={"logInfo"}>
                    <div className="form-group info">
                        <label htmlFor="exampleInputEmail1">联系人</label>
                        <input type="text" className="form-control username"/>
                    </div>

                    <div className={"form-check form-check-inline info sex-box"}>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                   value="先生"/>
                            <label className="form-check-label sex" htmlFor="inlineRadio1">先生</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                   value="女士"/>
                            <label className="form-check-label sex" htmlFor="inlineRadio2">女士</label>
                        </div>
                    </div>

                    <div className="form-group info">
                        <label htmlFor="exampleInputPassword1">手机号</label>
                        <input type="text" className="form-control phone-number" pattern="[0-9]{10}"/>
                        <small className="form-text text-muted">请输入您的10位加拿大手机号</small>
                    </div>

                    <div className="form-group info">
                        <label htmlFor="exampleInputPassword1">邮箱地址</label>
                        <input type="email" className="form-control email" aria-describedby="emailHelp"/>
                    </div>

                    <div className="form-group info info">
                        <label htmlFor="exampleInputPassword1">邮编号码</label>
                        <input type="text" className="form-control post-code"
                               pattern={"^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[- ]{0,1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}"}/>
                    </div>

                    <div className="form-group info">
                        <label htmlFor="exampleInputPassword1">详细地址</label>
                        <input type="text" className="form-control address"/>
                    </div>


                    <div className="form-group info">
                        <label htmlFor="exampleInputPassword1">所在区域</label>
                        <select className="custom-select mr-sm-2 area">
                            <option selected>请选择</option>
                            <option value="OU">OU</option>
                            <option value="Downtown">Downtown</option>
                            <option value="Riverside">Riverside</option>
                            <option value="CU">CU</option>
                            <option value="Centerpoint">Centerpoint</option>
                            <option value="Hunt Club">Hunt Club</option>
                            <option value="Barrhaven">Barrhaven</option>
                            <option value="Kanata">Kanata</option>
                        </select>
                    </div>
                    <div className={"submit-button"}>
                        <button type="submit" className="btn btn-primary submit">提交</button>
                    </div>
                </form>
                <div className={"illusion"}>
                    <img className={"pic"} src={"./img/sapiens.png"} alt={"#"}/>
                </div>
            </div>
        );
    }
}

export default withRouter(LogPag);