import { React, Fragment } from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import Button from './Button.js';
import classes from './ErrorModal.module.css';


const Backdrop = props => {
  return <div onClick={props.onClearError} className={classes.backdrop}></div>
}

const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2> {props.title} </h2>
      </header>
      <div className={classes.content}>
        <p> {props.message} </p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClearError}>
          Okay
        </Button>
      </footer>
    </Card>)
}

const ErrorMOdal = props => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClearError={props.onClearError} />, 
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay title={props.title} message={props.message} onClearError={props.onClearError} />, 
        document.getElementById('overlay-root')
      )}
    </Fragment>
  )
};

export default ErrorMOdal;

