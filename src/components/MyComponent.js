import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = () => {
    const [listUsers, setListUsers] = useState([
        {
            id: 1,
            name: "Pham Tien",
            address: "Bac Giang",
            age: "69",
        },
        {
            id: 2,
            name: "Tran Doanh",
            address: "Bac Giang",
            age: "26",
        },
        {
            id: 3,
            name: "Hoang Ngoan",
            address: "Bac Giang",
            age: "18",
        },
    ]);

    const handleAddNewUser = (objUser) => {
        setListUsers([objUser, ...listUsers])
    };

    const handleDeleteUser = (userId) => {
        let listUserClone = [...listUsers]
        listUserClone = listUserClone.filter(item => item.id !== userId)
        setListUsers(
            listUserClone
        )
    }
    return (
        <>
            <AddUserInfor handleAddNewUser={handleAddNewUser} />
            <br />
            <DisplayInfor listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </>
    );

}
export default MyComponent;
