import React, {Component} from 'react';
import {FaDoorOpen} from "react-icons/fa"
import {BiLogOut} from "react-icons/bi"
import {IconContext} from "react-icons"
import {IoMdArrowDropdown, IoMdArrowDropleft} from "react-icons/io"
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/userActions'

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
        if(this.state.toggleDropdown) {
            this.setState({ toggleDropdown: false })
        } else {
            this.setState({ toggleDropdown: true })
        }
        
    }

    getActiveClass = _ => {
        if(this.state.flag) {
            return 'rotate down'
        } else {
            return 'rotate'
        }
    }

    handleRotation = _ => {
        if(this.state.flag) {
            this.setState({ flag: false })
        } else {
            this.setState({ flag: true })
        }
    }

    render() {
        return (
            <div>
                <div className="upside-bar">
                    <div className="menu-buttons">
                        <span className="title">POKEDEX!</span>
                        <Link to="/" className="menu-button">Inicio</Link>
                        <Link to="/pokemons" className="menu-button">Pokemons</Link>
                    </div>
                    <div className="dropdown-menu">
                        <div className="toggle-dropdown" onClick={this.handleDropdown} style={this.state.toggleDropdown ? {borderTopLeftRadius:'20px', borderTopRightRadius:'20px', backgroundColor:'#1C377B'} : {borderRadius:'50px'}}>
                            <img className="dropdown-avatar" src={this.props.user.avatar} />
                            <IconContext.Provider value={{style: {marginRight:'10px', color:'white', fontSize:'20px' }}}> { this.state.toggleDropdown ? <IoMdArrowDropleft/> : <IoMdArrowDropdown/> } </IconContext.Provider>
                        </div>
                        { this.state.toggleDropdown ? 
                            <div className="dropdown-div">
                                <button className="dropdown-button" style={{marginBottom:'10px'}}>Perfil</button>
                                <button className="dropdown-button">Logout</button>
                            </div>
                        : null }
                    </div>
                    
                    
                    {/*<button onClick={this.handleLogout} className="logout-button"><IconContext.Provider value={{style: {marginRight:'10px'}}}><BiLogOut/></IconContext.Provider>Logout</button>*/}
                </div>
                <div className="landing-page">
                    <h1>SLIDER</h1>
                    <a onClick={this.handleRotation}><IconContext.Provider value={{style: {marginRight:'10px', color:'black', fontSize:'50px' }}} className={this.getActiveClass} > <IoMdArrowDropdown className="animation"/> </IconContext.Provider></a>    
                    <button className={this.getActiveClass} onClick={this.handleRotation}>hola</button>
                </div>
                <div className="menu-bar">
                    
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