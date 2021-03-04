import React, {Component, Fragment} from 'react';

import Menu from '../../components/Navbar/Menu.js'    
import Profile from '../Profile/Profile'

class Home extends Component {
    render() {
        return <Fragment>
            <Menu/>
            <Profile/>
        </Fragment>
    }
}


export default Home;