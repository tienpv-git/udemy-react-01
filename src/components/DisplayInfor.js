import React from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'

// class DisplayInfor extends React.Component {
//     // JSX
//     render() {
//         console.log("--> call render");
//         const { listUsers } = this.props;
//         // props => viết tắt của properties
//         return (
//             <div className="display-infor-container">
//                 {true &&
//                     <div>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={user.age > 18 ? "green" : "red"}>
//                                     <div>User id number: {user.id}</div>
//                                     <div>
//                                         <div>- User name: {user.name}</div>
//                                         <div>- User Address: {user.address}</div>
//                                         <div>- User age: {user.age}</div>
//                                     </div>
//                                     <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                     <br />
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 }
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    // props => viết tắt của properties
    return (
        <div className="display-infor-container">
            {true &&
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
