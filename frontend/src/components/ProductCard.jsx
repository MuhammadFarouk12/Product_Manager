import { Card , ListGroup, Col} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import DeleteButton from './DeleteButton.jsx'
import UpdateButton from './UpdateModal.jsx'
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
            <div className="d-flex justify-content-between">
              <DeleteButton setProducts={props.setProducts} products={props.products} id={props.id}/>
              <UpdateButton setProducts={props.setProducts} products={props.products} data={props.data}/>
            </div>
          </Card.Body>
        </Card>
       </Col>
  )}
}
