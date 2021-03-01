import React, {Component} from 'react';

import '../assets/styles.scss'

import Menu from '../components/Navbar/Menu.js'    
import ProfileCard from '../components/ProfileCard/ProfileCard'

class Home extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <div className="container">
                    <ProfileCard/>
                </div>
            </div>
            
        )
    }
}


export default Home;