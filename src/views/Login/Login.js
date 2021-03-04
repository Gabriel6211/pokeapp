import React, {Component} from 'react';

import LoginCard from "../../components/LoginCard/LoginCard.js"

import "./login.scss"

class Login extends Component {
    render() {
        return (
            <div className="background">
                <LoginCard/>
            </div>
        )
    }
}


export default Login;