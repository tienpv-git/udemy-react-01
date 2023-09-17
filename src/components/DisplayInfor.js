import React, { useState } from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'



const DisplayInfor = (props) => {
    const [islistUserShow, setShowHideListUser] = useState(true);

    const handleOnShowHide = () => {
        setShowHideListUser(!islistUserShow)
    }

    const { listUsers } = props;
    // props => viết tắt của properties
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleOnShowHide()}>
                    {islistUserShow ? "Hidden list users" : "Show list users"}
                </span>
            </div>
            {islistUserShow &&
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
                                <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                <br />
                            </div>
                        );
                    })}
                </div>
            }
        </div>
    );
}

export default DisplayInfor;
