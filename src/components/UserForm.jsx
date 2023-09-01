import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        console.log("Welcome", newUser);// newUser is a JS object that holds all of the form values 
    };
    return(
        <div className='form-box'>
            <div className="inner-box">
                <form onSubmit={ createUser }>
                    <div className='mb-3'>
                        <label className='form-label'>First Name: </label>
                        <input className='form-control' type="text" onChange={ (e) => setFirstName(e.target.value)} value={firstName}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Last Name: </label>
                        <input className='form-control' type="text" onChange={ (e) => setLastName(e.target.value)} value={lastName}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Email: </label>
                        <input className='form-control' type="text" onChange={ (e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Password: </label>
                        <input className='form-control' type="password" onChange={ (e) => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Confirm Password: </label>
                        <input className='form-control' type="password" onChange={ (e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                    </div>
                    <input className="form-btn" type="submit" value="Create user" />
                </form>
            </div>

            <div className="card">
                <div className="card-body">
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>First Name</th><td>{firstName}</td>
                            </tr>
                            <tr>
                                <th>Last Name</th><td>{lastName}</td>
                            </tr>
                            <tr>
                                <th>Email</th><td>{email}</td>
                            </tr>
                            <tr>
                                <th>Password</th><td>{password}</td>
                            </tr>
                            <tr>
                                <th>Confirm Password</th><td>{confirmPassword}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
