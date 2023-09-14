import React from "react";

class DisplayInfor extends React.Component {
    // JSX
    render() {
        const { listUsers } = this.props;
        // props => viết tắt của properties
        return (
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DisplayInfor;
