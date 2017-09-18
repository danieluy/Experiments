import React, { Component } from 'react';
import { bindActionCreatiors } from 'redux'
import { connect } from 'react-redux'

class UsersList extends Component {
  render() {
    return (
      <div>
        UsersList Component
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UsersList);