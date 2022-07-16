import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.Module.css";
import Card from "./Card";
import Button from "./Button";
/////////////////////////////////////
const overlay = document.getElementById("overlay-root");
const backdrop = document.getElementById("backdrop-root");
/////////////////////////////////////
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  const { title, message, onConfirm } = props;
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm} />, backdrop)}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={onConfirm} title={title} message={message} />,
        overlay
      )}
    </Fragment>
  );
};
export default ErrorModal;
