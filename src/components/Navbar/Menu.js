import React, {Component} from 'react';
import {IconContext} from "react-icons"
import { IoMdArrowDropdown } from "react-icons/io"
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/userActions'
import classNames  from "classnames"


import './menu.scss';
import '../../assets/styles.scss'


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

        const dropDownClass = classNames('rotate', { 'down': this.state.toggleDropdown })

        const dropdownDiv = classNames('dropdown-div', { 'animation': this.state.toggleDropdown })

        return (
            <div className="upside-bar">
                <div className="menu-buttons">
                    <span className="title">POKEDEX!</span>
                    <Link to="/" className="menu-button">Inicio</Link>
                    <Link to="/pokemons" className="menu-button">Pokemons</Link>
                </div>
                <div className="dropdown-menu">
                    <div className="toggle-dropdown" onClick={this.handleDropdown} style={this.state.toggleDropdown ? {borderTopLeftRadius:'20px', borderTopRightRadius:'20px', backgroundColor:'#1C377B'} : {borderRadius:'50px'}}>
                        <img className="dropdown-avatar" src={this.props.user.avatar} />
                        <IconContext.Provider value={{style: {marginRight:'10px', color:'white', fontSize:'20px' }}}> <IoMdArrowDropdown className={dropDownClass}/> </IconContext.Provider>
                    </div>
                        <div className={dropdownDiv}>
                            <button className="dropdown-button" style={{marginBottom:'10px'}}>Perfil</button>
                            <button className="dropdown-button">Logout</button>
                        </div>
                        
                </div>
                
                {/*<button onClick={this.handleLogout} className="logout-button"><IconContext.Provider value={{style: {marginRight:'10px'}}}><BiLogOut/></IconContext.Provider>Logout</button>*/}
            
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