import {React, useState} from 'react';
import Card from '../UI/Card.js'
import Button from '../UI/Button.js'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal.js'

const AddUser = props => {
  const [ernteredUsername, setEneredUserName] = useState('');
  const [ernteredage, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(ernteredUsername.trim().length === 0 || ernteredage.trim().length === 0 ) {
      setError({
        title: 'Invalid Input',
        message: 'Please Enter a valid name and age (non-empty values)'
      });
      return
    }
    if(+ernteredage < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please Enter a valid age (> 0)'
      });
      return
    }
    props.onAddUser(ernteredUsername, ernteredage)
    setEneredUserName("")
    setEnteredAge("")
  }

  const usernameChangeHandler = (event) => {
    setEneredUserName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const clearError = () => {
    setError(null);
  }

  return (
    <div>
       { error && <ErrorModal onClearError={clearError} title={error.title} message={error.message}/> }
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username"> Username </label>
            <input 
              id="username" 
              type="text" 
              value={ ernteredUsername } 
              onChange={usernameChangeHandler}
            />
            <label htmlFor="age"> Age (Years) </label>
            <input 
              id="age" 
              type="number" 
              value={ ernteredage } 
              onChange={ageChangeHandler}
            />
            <Button type="submit" onClick={addUserHandler}>
              Add User
            </Button>
          </form>
        </Card>
    </div>
  )
};

export default AddUser;