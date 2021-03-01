import React, {Component} from 'react' 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './profileCard.scss'

class ProfileCard extends Component {


  render() {

    console.log(this.props)
    return (
      <div className="profile-card">
        <div className="card-title">
          <img className="profile-pic" src={this.props.user.avatar}/>
          
        </div>
        <div className="card-info">
          <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
        </div>
      </div>
    )
    
  }
}

ProfileCard.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = (state) => ({ user: state.user })

export default connect(mapStateToProps)(ProfileCard);