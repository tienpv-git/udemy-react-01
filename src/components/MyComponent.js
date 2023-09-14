import React from "react";
class MyComponent extends React.Component {
    state = {
        name: "tienpv",
        address: "Hoa Lac",
        age: 23,
    };
    handleClick = (event) => {
        this.setState({
            name: "tienpv-new-name",
            age: Math.floor(Math.random() * 100 + 1),
        });

        console.log("Event: click my button");
        console.log(`My name is ${this.state.name}`);
        console.log(`My age is ${this.state.age}`);
    };
    handleOnMouseOver = (event) => {
        console.log("Event: Hold my button");
        console.log(`My name is ${this.state.name}`);
    };
    render() {
        return (
            <div>
                My name is {this.state.name}. I am from {this.state.address}
                <br />
                <button onClick={this.handleClick}>Click me</button>
                <br />
                <button onMouseOver={this.handleOnMouseOver}>Hold me</button>
            </div>
        );
    }
}
export default MyComponent;
