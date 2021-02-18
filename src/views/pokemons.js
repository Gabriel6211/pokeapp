import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Pokemons extends Component {
    render() {
        return (
            <div>
                {this.props.user.firstName}
            </div>
        )
    }
}

Pokemons.propTypes = {
    user: PropTypes.object
}
  

const mapStateToProps = (state) => ({ user: state.user })

export default connect(mapStateToProps)(Pokemons);