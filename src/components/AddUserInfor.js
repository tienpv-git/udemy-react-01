import React, { useState } from "react";

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
