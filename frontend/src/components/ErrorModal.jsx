import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function ErrorModal(props) {

  // if (show) {
    return (
      <Alert variant="danger" onClose={() => props.setShowError(false)} dismissible>
        <Alert.Heading>{props.heading}</Alert.Heading>
        <p>{props.content}</p>
      </Alert>
    );
  // }

  // return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default ErrorModal;
