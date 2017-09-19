import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserDetails extends Component {
  render() {
    const user = this.props.user
    if (user)
      return (
        <div className="user-card">
          <img src={user.avatar} alt="Character avatar" style={{ width: 100, float: 'left' }} />
          <div className="user-card-info">
            <p><strong>{user.name} {user.lastname}</strong></p>
            <p>{user.age} years old</p>
            <p>{user.description}</p>
          </div>
        </div>
      )
    return user
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser
  }
}

export default connect(mapStateToProps)(UserDetails);