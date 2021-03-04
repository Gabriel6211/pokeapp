import React, {Component} from 'react';
import axios from 'axios';
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { ToastContainer, toast } from 'react-toastify';
import {FaEnvelope} from 'react-icons/fa';
import {FaKey} from 'react-icons/fa';
import {IconContext} from "react-icons";
import { login } from '../../actions/userActions'

import "./loginCard.scss"
import 'react-toastify/dist/ReactToastify.css';

class LoginCard extends Component {

    state = {
        email: '',
        password: '',
        loginSuccesfull: false
    };


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (event) => {
        try {
            const { email, password } = this.state
            const { login, history } = this.props

            event.preventDefault();
            if(email && password) {
                await axios.post('https://reqres.in/api/login',  {email , password});
                const user = await axios.get('https://reqres.in/api/users/4')
                login(user.data.data) // cityslicka
                toast.success("Inicio sesión satisfactoriamente.")
                history.push('/home')
            } else {
                toast.error("Complete todos los datos.")
            }
        } catch (error) {
            toast.error("No se pudo iniciar sesión.")
        }
        
    }

    render() {
        return (
            <div className="login-card">
                <div className="card-top">
                    <span className="title">Inicio de Sesion</span>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input">
                            <div className="icon-holder">
                                <IconContext.Provider value={{style: {color:'white'}}}><FaEnvelope/></IconContext.Provider>
                            </div>
                            <input className="mail" placeholder="Mail" name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="input">
                            <div className="icon-holder">
                                <IconContext.Provider value={{style: {color:'white'}}}><FaKey/></IconContext.Provider>
                            </div>
                            <input className="mail" placeholder="Contraseña" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <input className="login-button" type="submit" value="Iniciar sesión"/> 
                    </form>
                    <ToastContainer position="bottom-center"/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ user: state.user })
  
const mapDispatchToProps = {login} 

LoginCard.propTypes = {
    login: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginCard));