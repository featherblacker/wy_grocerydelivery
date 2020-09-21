import React from "react";
import "./App.css";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./Pages/Home.js"
import Login from "./Pages/Login";
import allProducts, {loadProducts} from "./redux/cartSlice";

import {Provider} from "react-redux";
import ShoppingCart from "./Pages/ShoppingCart";
import {combineReducers, configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    store: allProducts.reducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

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
