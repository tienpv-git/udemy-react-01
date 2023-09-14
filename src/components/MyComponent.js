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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name}. I am from {this.state.address}
                <br />
                <button onClick={this.handleClick}>Click me</button>
                <br />
                <button onMouseOver={this.handleOnMouseOver}>Hold me</button>
                <br />
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeInput(event)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
export default MyComponent;
