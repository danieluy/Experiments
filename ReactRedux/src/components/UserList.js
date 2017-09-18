// importamos el decorador @connect de react-redux
import { connect } from 'react-redux';
import React, { Component } from 'react';
import UserItem from './UserItem';
// aplicamos el decorador @connect a nuestro componente
@connect(mapStateToProps)
class UserList extends Component {
  render() {
    // renderizamos el listado de usuarios que
    // recibimos como props del Store
    return (
      <section>
        {
          this.props.users
            .map(user => <UserItem {...user} key={user.id} />)
        }
      </section>
    );
  }
}
export default UserList;

function mapStateToProps(state, props) {
  // armamos un objeto solo con los
  // datos del store que nos interesan
  // y lo devolvemos
  return {
    users: state.users,
  };
}