import {React, useState, useRef } from 'react';
import Card from '../UI/Card.js'
import Button from '../UI/Button.js'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal.js'
import Wrapper from '../Helper/Wrapper.js'

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 ) {
      setError({
        title: 'Invalid Input',
        message: 'Please Enter a valid name and age (non-empty values)'
      });
      return
    }
    if(+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please Enter a valid age (> 0)'
      });
      return
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const clearError = () => {
    setError(null);
  }

  return (
    <Wrapper>
       { error && <ErrorModal onClearError={clearError} title={error.title} message={error.message}/> }
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username"> Username </label>
            <input 
              id="username" 
              type="text"
              ref={ nameInputRef }
            />
            <label htmlFor="age"> Age (Years) </label>
            <input 
              id="age" 
              type="number"
              ref={ ageInputRef }
            />
            <Button type="submit" onClick={addUserHandler}>
              Add User
            </Button>
          </form>
        </Card>
    </Wrapper>
  )
};

export default AddUser;