import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: "",
        address: "",
        age: ""
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    };

    handleOnChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: this.getRndInteger(10, 20) + this.getRndInteger(10, 20),
            name: this.state.name,
            age: this.state.age
        })
    };

    getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // JSX
    render() {
        return (
            <div>
                <p>
                    My name is {this.state.name} and I'm {this.state.age}
                </p>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your Name: </label>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
                    <br />
                    <label>Your Address: </label>
                    <input value={this.state.address} type="text" onChange={(event) => this.handleOnChangeAddress(event)} />
                    <br />
                    <label>Your Age: </label>
                    <input value={this.state.age} type="text" onChange={(event) => this.handleOnChangeAge(event)} />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfor;
