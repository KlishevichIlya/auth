import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        await fetch("https://localhost:7179/api/Auth/register", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name, email, password})
        });
        setRedirect(true);
    }
    if(redirect){
        return <Redirect to="/login" />;
    }

    return (
        <form className="form-signin text-center" onSubmit={submit}>
            <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
                 width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>

            <input className="form-control" placeholder="Name" required
                   onChange={e => setName(e.target.value)}
            />

            <input type="email" className="form-control" placeholder="Email address" required
                   onChange={e => setEmail(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />

            <div className="col-md-12 text-center">
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
            </div>

        </form>
    );
};

export default Register;