import React from 'react';
import Card from './Card';
import Button from './Button.js'
import classes from './ErrorModal.module.css'

const ErrorMOdal = props => {

  return (
    <div>
        <div onClick={props.onClearError} className={ classes.backdrop }></div>
        <Card className= { classes.modal }>
            <header className= { classes.header }>
                <h2> { props.title } </h2>
            </header>
            <div  className= { classes.content }>
                <p> { props.message } </p>
            </div>
            <footer  className= { classes.actions }>
                <Button onClick={props.onClearError}>
                    Okay
                </Button>
            </footer>
        </Card>
    </div>
  )
};

export default ErrorMOdal;

