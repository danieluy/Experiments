import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectUser } from '../actions/actions'

class UsersList extends Component {
  render() {
    console.log(this.props)
    return (
      <ul>
        {this.props.users.map((user, i) => {
          return (
            <li
              key={i}
              onClick={this.props.selectUser.bind(null, user)}
            >
              <p>{user.name} {user.lastname}</p>
            </li>
          )
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersList);