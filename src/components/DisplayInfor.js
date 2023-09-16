import React from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'

class DisplayInfor extends React.Component {

    constructor(props) {
        console.log("--> call constructer");
        super(props)
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log("--> call componentDidMount");
        setTimeout(() => {
            document.title = "New Document after submit"
        }, 3000)
    }

    componentDidUpdate() {

    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    };

    // JSX
    render() {
        console.log("--> call render");
        const { listUsers } = this.props;
        // props => viết tắt của properties
        return (
            <div className="display-infor-container">
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
                                    <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
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
