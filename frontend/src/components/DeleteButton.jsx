import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import DeletionModal from './DeletionModal.jsx'
export default function DeleteButton({ setProducts, products, id }){
  const [show, setShow] = useState(false);
  const [acceptedDeletion, setAcceptedDeletion] = useState(false);
  // console.log(products)
  useEffect(()=>{
    if(acceptedDeletion){
      axios.delete(`http://localhost:8080/api/products/delete/${id}`)
      setProducts(products.filter(product=>product._id!=id))
    }
  }, [acceptedDeletion])
  const handleShow = () => setShow(true);
  return(
    <div>
      <Button variant="danger" onClick={handleShow} ><i className="bi bi-trash"></i></Button>
      <DeletionModal show={show} setShow={setShow} acceptedDeletion={acceptedDeletion} setAcceptedDeletion={setAcceptedDeletion}/>
    </div>
  )
}
