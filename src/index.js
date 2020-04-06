import React from "react";
import {Provider} from 'react-redux'
import store from './redux/store'
import ReactDOM from "react-dom";

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider>
        <TodoApp />
    </Provider>, rootElement);
