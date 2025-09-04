import { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { ProductsContext } from '../App.jsx'
import axios from 'axios'
export default function ModalShow() {
  const [show, setShow] = useState(false);
  const { products, setProducts } = useContext(ProductsContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [{name, image, price}, setProductDetails] = useState({name: '', image: '', price: 0})
  // const [setProductDetails, setProductDetails] = useState({name: '', image: '', price: 0})
  function handleNameChange(e){
    setProductDetails({name: e.target.value, image, price})
  }
  function handleImageChange(e){
    setProductDetails({name, image: e.target.value, price})
  }
  function handlePriceChange(e){
    setProductDetails({name, image, price: e.target.value})
  }

  function handleAddClick(e){
    handleClose(e)
    axios.post('http://localhost:8080/api/products/add', {name, image, price}).then(response=>{
    setProducts([...products, response.data.data])
    })
  }

  return (
    <>
      <Button className='text-warning' variant="outline-light" onClick={handleShow}>Add A Product</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter The Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="e.g Smart Screen"
                autoFocus
                onChange={handleNameChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Paste The Picture Link</Form.Label>
              <Form.Control rows={3} placeholder="e.g https://placehold.co/400x200" onChange={handleImageChange}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>How Much Does It Cost</Form.Label>
              <Form.Control type='number' rows={3} placeholder='price' onChange={handlePriceChange}/>
            </Form.Group>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>Discard</Button>
          <Button variant="success" onClick={handleAddClick}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

