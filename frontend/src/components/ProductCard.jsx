import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Card , ListGroup, Col} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import DeleteButton from './DeleteButton.jsx'
export default function ProductCard(props){

  const product = props.data
  if(product){
  return (
      <Col className='mb-4'>
        <Card style={{ width: '18rem' }}> 
          <Card.Img variant="top" src={props.data.image} />
          <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
            <ListGroup variant="flush">
                <ListGroup.Item>
                  Price: {props.data.price}
                </ListGroup.Item>
            </ListGroup>
            <DeleteButton setProducts={props.setProducts} products={props.products} id={props.id}/>
          </Card.Body>
        </Card>
       </Col>
  )}
}
