import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeletionModal(props) {
  const {show, setShow, setAcceptedDeletion, acceptedDeletion} = props;
  const handleClose = () =>{
    setShow(false);
  }
  const handleAcception = () => {
    setShow(false);
    setAcceptedDeletion(true)
  }
  const handleRefusion = ()=>{
    setShow(false);
    setAcceptedDeletion(false)
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure You Want To Delete This Product</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRefusion}>No</Button>
          <Button variant="outline-danger" onClick={handleAcception}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
