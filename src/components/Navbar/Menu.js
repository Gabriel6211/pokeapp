import React, {Component} from 'react';
import {Link} from "react-router-dom"
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { logout } from '../../actions/userActions'
import classNames  from "classnames"
import Card from '../Card/Card'

import {IconContext} from "react-icons"
import { ImUser } from "react-icons/im"
import { RiLogoutBoxFill } from "react-icons/ri"

import './menu.scss';

class Menu extends Component {

    state = {
        toggleDropdown: false,
        flag: false
    };

    handleLogout = _ => {
        this.props.logout()
    }

    handleDropdown = _ => {
        this.setState({ toggleDropdown: !this.state.toggleDropdown })  
    }

    render() {
        const toggleDropdown = classNames('toggle-dropdown', { 'toggled': this.state.toggleDropdown })
        const dropdownDiv = classNames('dropdown-div', { 'animation': this.state.toggleDropdown})

        return (
            <div className="upside-bar">
                <div className="menu-buttons">
                    <span className="title">POKEDEX!</span>
                    <Link to="/" className="menu-button">Inicio</Link>
                    <Link to="/pokemons" className="menu-button">Pokemons</Link>
                </div>
                <div className="dropdown-menu">
                    <div className={toggleDropdown} onClick={this.handleDropdown} >
                        <img alt="avatar" className="dropdown-avatar" src={this.props.user.avatar} />
                    </div>
                        <Card className={dropdownDiv}>
                            <Link className="profile-button" to="/perfil"> 
                                <IconContext.Provider value={{style: {fontSize:'20px', marginRight:'10px' }}}> 
                                    <ImUser/> 
                                </IconContext.Provider>
                                <span>Perfil</span>
                            </Link>
                            <hr/>
                            <button onClick={this.handleLogout}> 
                                <IconContext.Provider value={{style: {fontSize:'20px', marginRight:'10px' }}}> 
                                    <RiLogoutBoxFill/> 
                                </IconContext.Provider> 
                                <span>Logout</span>
                            </button>
                        </Card> 
                </div>
            </div>
        )
    }
}

Menu.propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
}

const mapStateToProps = (state) => ({ user: state.user })

const mapDispatchToProps = {logout} 

export default connect(mapStateToProps, mapDispatchToProps)(Menu);