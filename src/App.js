import React from "react";
import "./App.css";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./Pages/Home.js"
import Login from "./Pages/Login";

import {Provider} from "react-redux";
import store from "./redux/store";
import ShoppingCart from "./Pages/ShoppingCart";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route path={'/'} exact>
                            <Home/>
                        </Route>
                        <Route path={'/login'} exact>
                            <Login/>
                        </Route>
                        <Route path={'/shopping'} exact>
                            <ShoppingCart/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
