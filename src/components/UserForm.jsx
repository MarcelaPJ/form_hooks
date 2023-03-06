import { useState } from "react";
import UserData from "./UserData";


const UserForm = () => {
    const [ state, setState ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        pass: '',
        confirmPass: '',
    })

    const changeUser = (e) => {
        setState({
            ...state, 
            [e.name] : e.value
        })
    }

    const addUser = (e) => {
        e.preventDefault();
            
        setState("");
    }

    return (
        <div>
            <form className="formulario" onSubmit={addUser}>
                <div className="data">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" value={state.firstName} onChange={ (e) => changeUser(e.target) }/>
                </div>
                <div className="data">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" value={state.lastName} onChange= { (e) => changeUser(e.target) } />
                </div>
                <div className="data">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={state.email} onChange={(e) => changeUser(e.target)}/>
                </div>
                <div className="data">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="pass" value={state.pass} onChange={(e) => changeUser(e.target)}/>
                </div>
                <div className="data">
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPass" value={state.confirmPass} onChange={(e) => changeUser(e.target)}/>
                </div>
            </form>
            <hr/>
            <div>
                <UserData datos={state}/>
            </div>
        </div>
    )
}

export default UserForm;