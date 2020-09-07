import {withRouter} from "react-router-dom";
import React from "react";

class Suggest extends React.Component {
    getValue() {
        return this.refs.lowlevelinput.value;
    }

    render() {
        const randomid = Math.random().toString(16).substring(2);
        return (
            <div>
                <input
                    list={randomid}
                    defaultValue={this.props.defaultValue}
                    placeholder={"State"}
                    ref='lowlevelinput'
                    id={this.props.id}
                />
                <datalist id={randomid}>
                    {this.props.options.map((item, idx) =>
                        <option value={item} key={idx}/>
                    )}</datalist>
            </div>
        );
    }
}

export default withRouter(Suggest)