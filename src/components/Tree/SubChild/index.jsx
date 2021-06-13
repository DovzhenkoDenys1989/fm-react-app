import React from 'react';
import UserCard from '../../UserCard';
import { UserContext } from '../../../contexts';

function SubChild (props) {
  const style = {
    border: '3px solid',
    padding: '20px',
  };
  return (
    <div style={style}>
      <UserContext.Consumer>
        {user => <UserCard user={user} />}
      </UserContext.Consumer>
    </div>
  );
}

export default SubChild;
