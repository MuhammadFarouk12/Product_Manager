import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function UpdateModal(props) {
  const [show, setShow] = useState(false);
  const products = props.products
  const setProdcuts = props.setProducts
  // const [{name, image, price}, setProductDetails] = useState({name: props.data.name , image: props.data.image, price: props.data.price})
  const nameRef = useRef(null)
  const imageRef = useRef(null)
  const priceRef = useRef(null)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(e){
    handleClose(e)
    const productId = props.data._id
    const updatedProduct = {
      name: nameRef.current.value,
      image: imageRef.current.value,
      price: priceRef.current.value,
    }
    axios.patch(`http://localhost:8080/api/products/edit/${productId}`, updatedProduct)
    .then((response)=>{
    const updatedProductFromResponse = response.data.data
    const targetProductIndex = products.findIndex(product=>product._id == productId)
    const updatedArray = products.with(targetProductIndex, updatedProductFromResponse)
    setProdcuts(updatedArray)
    props.setShowError(false)
    })
    .catch(error=>{
        props.setShowError(true)
        props.setErrorMessage({message: error.message, status: error.status})
      })

  }

  
  return (
    <>
      <Button variant="warning" onClick={handleShow}><i className="bi bi-pencil-square"></i></Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit A Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                defaultValue={props.data.name}
                // onChange={handleNameChange}
                ref={nameRef}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Image</Form.Label>
              <Form.Control 
                // onChange={handleImageChange}
                ref={imageRef}
                rows={3}
                defaultValue={props.data.image}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Price</Form.Label>
              <Form.Control 
                type='number'
                rows={3}
                defaultValue={props.data.price}
                ref={priceRef}
                // onChange={handlePriceChange}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
