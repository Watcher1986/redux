import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';

class Users extends Component {
  onCreateUser = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };
    this.props.createUser(newUser);
  };
  render() {
    const { users, deleteUser } = this.props;
    return (
      <div className="users">
        <button className="users__create-btn" onClick={this.onCreateUser}>
          Create User
        </button>
        <ul className="users__list">
          {users.map(user => (
            <li className="users__list-item" key={user.id}>
              <span>{user.name}</span>
              <button className="users__delete-btn"
              onClick={() => deleteUser(user.id)}>+</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatch = {
  createUser: userActions.addUser,
  deleteUser: userActions.deleteUser,
};

const mapState = state => {
  return {
    users: state.users.usersList,
  };
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers; // HOC
