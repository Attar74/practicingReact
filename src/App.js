import React, { useState, Fragment } from 'react';
import AddUser from '../src/components/Users/AddUser'
import UserList from './components/Users/UserList';

function App() {

  const [usersList, updateUsersList] = useState([])

  const updateUsersListHandler = (userName, userAge) => {
    updateUsersList((prev) => {
      return [...prev, {
        id: Math.random().toString(),
        name: userName,
        age: userAge
      }]
    })
  }
  return (
    <Fragment>
      <AddUser onAddUser={ updateUsersListHandler } />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
