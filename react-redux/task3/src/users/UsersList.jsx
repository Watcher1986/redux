import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from './counter.actions';
import Pagination from './Pagination';
import User from './User';

const ITEMSPERPAGE = 3;

const UsersList = ({ users, goPrev, goNext }) => {
  const { usersList, currentPage } = users;

  const startIndex = (currentPage - 1) * ITEMSPERPAGE;
  const endIndex = startIndex + ITEMSPERPAGE;
  const usersToRender = usersList.slice(startIndex, endIndex);
  return (
    <div>
      <Pagination
        totalItems={usersList.length}
        itemsPerPage={ITEMSPERPAGE}
        currentPage={currentPage}
        goNext={goNext}
        goPrev={goPrev}
      />
      <ul className="users">
        {usersToRender.map(user => {
          return <User key={user.id} {...user} />;
        })}
      </ul>
    </div>
  );
};

const mapDispatch = {
  goPrev: counterActions.decrement,
  goNext: counterActions.increment,
};

const mapState = state => {
  return {
    users: state,
  };
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(UsersList);

export default ConnectedUsers;
