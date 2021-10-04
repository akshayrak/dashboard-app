import React from 'react'
import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="jhon" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="jhon smit" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">E-Mail</label>
                    <input type="email" placeholder="jhon@email.com" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="password" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input type="tel" placeholder="+1 123 456 7890" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="New York | USA" className="newUserInput" />
                </div>
                <div className="newUserItem">
                <label htmlFor="">Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" className="newUsernameInput" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" className="newUsernameInput" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" className="newUsernameInput" />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
