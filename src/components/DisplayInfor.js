import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'

const DisplayInfor = (props) => {
    const { listUsers } = props;

    const [islistUserShow, setShowHideListUser] = useState(true);

    const handleOnShowHide = () => {
        setShowHideListUser(!islistUserShow)
    }

    console.log("--> Call me render")

    useEffect(() => {
        if (listUsers.length === 0) {
            alert("No more elements in listUsers!")
        }
        console.log("--> Call me useEffect")
    }, [listUsers])

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
