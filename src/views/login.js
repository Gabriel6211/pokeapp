import React, {Component} from 'react';

import LoginCard from "../components/LoginCard/LoginCard.js"

import "../assets/styles.scss"

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