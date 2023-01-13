import { useState } from "react";

const FunctionBasedNameField = (props) => {

    const [user, setUser] = useState('new user');

    const handleChange = (e) => {
        setUser(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log(`New user name is ${user}`);
        e.preventDefault();
    }

    return (
        <div>
            <p>Good {props.timeOfDay}, {user}</p>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={user} onChange={e => handleChange(e)} />
                <button type="submit">Update user name</button>
            </form>
        </div>
    );
}

export default FunctionBasedNameField;