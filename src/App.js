import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
    render() {
        return (
            <div className='app-container'>
                Hello world
                <MyComponent></MyComponent>
            </div>
        );
    }
}
//  sadsassddssaddas
export default App;
