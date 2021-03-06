import React from 'react';
import PropTypes from 'prop-types'

import NavBar from '../Navbar/Menu'

export const Layout = ({children}) => {
    return <section>
        <NavBar/>
        {children}
    </section>
}

Layout.propTypes = {
    children: PropTypes.node
  }

export default Layout;