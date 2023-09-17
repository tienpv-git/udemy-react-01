import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: "",
//         address: "",
//         age: ""
//     };

//     handleOnChangeName = (event) => {
//         this.setState({
//             name: event.target.value,
//         });
//     };

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value,
//         });
//     };

//     handleOnChangeAddress = (event) => {
//         this.setState({
//             address: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: this.getRndInteger(10, 100),
//             name: this.state.name,
//             age: this.state.age
//         })
//     };

//     getRndInteger = (min, max) => {
//         return Math.floor(Math.random() * (max - min)) + min;
//     }

//     // JSX
//     render() {
//         return (
//             <div>
//                 <p>
//                     My name is {this.state.name} and I'm {this.state.age}
//                 </p>
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your Name: </label>
//                     <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
//                     <br />
//                     <label>Your Address: </label>
//                     <input value={this.state.address} type="text" onChange={(event) => this.handleOnChangeAddress(event)} />
//                     <br />
//                     <label>Your Age: </label>
//                     <input value={this.state.age} type="text" onChange={(event) => this.handleOnChangeAge(event)} />
//                     <br />
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfor = (props) => {
    const [getUser, setUser] = useState({
        name: "",
        address: "",
        age: ""
    });


    const handleOnChangeName = (event) => {
        setUser({
            name: event.target.value,
        });
    };

    const handleOnChangeAge = (event) => {
        setUser({
            age: event.target.value,
        });
    };

    const handleOnChangeAddress = (event) => {
        setUser({
            address: event.target.value
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: getRndInteger(10, 100),
            name: getUser.name,
            age: getUser.age
        })
    };

    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // JSX
    return (
        <div>
            <p>
                My name is {getUser.name} and I'm {getUser.age}
            </p>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your Name: </label>
                <input value={getUser.name} type="text" onChange={(event) => handleOnChangeName(event)} />
                <br />
                <label>Your Address: </label>
                <input value={getUser.address} type="text" onChange={(event) => handleOnChangeAddress(event)} />
                <br />
                <label>Your Age: </label>
                <input value={getUser.age} type="text" onChange={(event) => handleOnChangeAge(event)} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default AddUserInfor;
