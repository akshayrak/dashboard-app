import React from 'react'
import "./user.css"
export default function User() {
    const {REACT_APP_PROFILE_AVATAR}=process.env;

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={REACT_APP_PROFILE_AVATAR} alt="someImg" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Software Developer</span>
                        </div>
                    </div>
                    
                </div>
                <div className="userUpdate"></div>
            </div>
        </div>
    )
}
