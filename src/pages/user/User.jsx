import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import "./user.css"
export default function User() {
    const {REACT_APP_PROFILE_AVATAR}=process.env;

    return (
        <div className="user">

            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
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
                    <div className="userShowButton">
                        <span className="userShowTitle">Account Details</span>
                        <div className="usershowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="usershowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>
                        <div className="usershowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+1 123 456 7890</span>
                        </div>
                        <div className="usershowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">annabeck99@email.com</span>
                        </div>
                        <div className="usershowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="annabeck99" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>E-Mail</label>
                                <input type="email" placeholder="annabeck99@email.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="tel" placeholder="+1 123 456 7890" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="address" placeholder="New York | USA" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src={REACT_APP_PROFILE_AVATAR} alt="someImg" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}
