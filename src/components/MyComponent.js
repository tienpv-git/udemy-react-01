import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            {
                id: 1,
                name: "Pham Tien",
                age: "23",
            },
            {
                id: 2,
                name: "Tran Doanh",
                age: "23",
            },
            {
                id: 3,
                name: "Hoang Ngoan",
                age: "22",
            },
        ],
    };

    // JSX
    render() {
        return (
            <div>
                <UserInfor />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    }
}
export default MyComponent;
