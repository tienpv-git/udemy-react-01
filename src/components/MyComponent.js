import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
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
        ],
    };

    handleAddNewUser = (objUser) => {
        this.setState({
            listUsers: [objUser, ...this.state.listUsers]
        })
    };

    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUsers]
        listUserClone = listUserClone.filter(item => item.id !== userId)
        this.setState({
            listUsers: listUserClone
        })
    }

    // JSX
    render() {
        return (
            <>
                <div className='a'>
                </div>
                <div className='b'>
                </div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <br />
                <DisplayInfor listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </>
        );
    }
}
export default MyComponent;
