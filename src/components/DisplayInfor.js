import React from "react";

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    };

    // JSX
    render() {
        const { listUsers } = this.props;
        // props => viết tắt của properties
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>Hide list user:</span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default DisplayInfor;