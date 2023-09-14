import React from "react";

class UserInfor extends React.Component {
    state = {
        name: "tienpv",
        address: "Hoa Lac",
        age: 23,
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
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
                <p>
                    My name is {this.state.name} and I'm {this.state.age}
                </p>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your Name: </label>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeInput(event)} />
                    <button type="submit">Submit</button>
                    <br />
                    <label>Your Age: </label>
                    <input value={this.state.age} type="text" onChange={(event) => this.handleOnChangeAge(event)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfor;
