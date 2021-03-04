import React from 'react' 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '../Card/Card'

import './profileCard.scss'

export const ProfileCard = ({ user, favoritePokemons }) => {
    return <div className="profile-container">
      <Card className="profile-card">
        <div className="profile-pic"/>
        <div className="card-info">
          <div className="username">
            <span>{user.first_name} {user.last_name}</span>
          </div>
          <div className="numbers-indicator">
            <div className="indicator">
              <strong>11</strong>
              <span>medallas</span>
            </div>
            <div className="indicator">
              <strong>{favoritePokemons.length}</strong>
              <span>pokemons</span>
            </div>
          </div>
        </div>
      </Card>

      <Card className="about-me">
        <p className="title">Información general</p>
        <p className="description">
            Me llamo Lucianito, voy a la escuela y tengo 7 años.
        </p>
      </Card>
    </div>
}

ProfileCard.propTypes = {
  user: PropTypes.object,
  favoritePokemons: PropTypes.array
}

const mapStateToProps = (state) => ({ user: state.user, favoritePokemons: state.pokemon.favoritePokemons })

export default connect(mapStateToProps)(ProfileCard);