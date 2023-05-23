import React from 'react';
import Card from '../UI/Card.js';
import classes from './UsersList.module.css';

const UserList = props => {

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.length ? props.users.map(user =>
          <li key={user.id}>{user.name} - {user.age}</li>
        ) : 'There is no users..!'}
      </ul>
    </Card>
  )
};

export default UserList;

