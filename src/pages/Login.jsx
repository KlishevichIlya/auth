import React, {Component, useState} from "react";
import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            redirect:'',
            credentials: {
                email: '',
                password:''
            }
        }
    }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let email = this.state.credentials.email;
        let password = this.state.credentials.password;

        fetch("https://localhost:7179/api/Auth/login", {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    credentials: 'include',
                    body: JSON.stringify({email, password})
                })
            .then((response) => response.json())
            .then(userInfo => {this.setState({user: userInfo})})
            .then(() => localStorage.setItem("loginResponse", JSON.stringify(this.state.user)), () => {console.log(this.state)});


            return <Redirect to={'/home'} />

    }

    handleEmailChanged = (e) => {
        this.setState({credentials: {...this.state.credentials, email:e.target.value}});
    }

    handlePasswordChanged = (e) =>{
        this.setState({credentials: {...this.state.credentials, password:e.target.value}});
    }

    handleButtonClicked = () => {
        console.log(this.state.user);
    }

    render(){
        return(
            <form className="form-signin text-center" onSubmit={this.submit}>
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
                     width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                <input type="email" className="form-control" placeholder="Email address" required=""
                       onChange={this.handleEmailChanged} value={this.state.credentials.email}
                />

                <input type="password" className="form-control" placeholder="Password" required=""
                       onChange={this.handlePasswordChanged} value={this.state.credentials.password}
                />

                <div className="col-md-12 text-center">
                    <button className="btn btn-lg btn-primary btn-block"
                            type="submit"
                            onClick={this.handleButtonClicked}
                    >
                        Sign in
                    </button>
                </div>

            </form>
        );
    }
};

export default Login;