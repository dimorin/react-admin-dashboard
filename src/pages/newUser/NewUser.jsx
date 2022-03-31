import React from 'react';
import './newUser.css';

const NewUser = (props) => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>UserName</label>
                    <input type="text" placeholder="" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="text" placeholder="" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="text" placeholder="" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">female</label>
                    </div>                    
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
};

export default NewUser;