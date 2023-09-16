import React from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'

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
            <div className="display-infor-container">
                <img src={logo}></img>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser ? "Hide list users:" : "Show list users:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>User id number: {user.id}</div>
                                    <div>
                                        <div>- User name: {user.name}</div>
                                        <div>- User Address: {user.address}</div>
                                        <div>- User age: {user.age}</div>
                                    </div>
                                    <br />
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
