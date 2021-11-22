import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import { increment, decrement } from './counter.actions';
import { usersListSelector, currentPageSelector } from './users.selectors'

const ITEMSPERPAGE = 3;

const UsersList = ({ users, currentPage, goPrev, goNext }) => {

  const startIndex = (currentPage - 1) * ITEMSPERPAGE;
  const usersToRender = users.slice(startIndex, startIndex + ITEMSPERPAGE);
  return (
    <div>
      <Pagination
        totalItems={users.length}
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
  goPrev: decrement,
  goNext: increment,
};

const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state)
  };
};

export default connect(mapState, mapDispatch)(UsersList);
