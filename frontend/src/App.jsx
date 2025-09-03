import { useState, useEffect } from 'react'
import ProductCard from './components/ProductCard.jsx'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Row } from 'react-bootstrap';
function App() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
     axios.get('http://localhost:8080/api/products')
      .then((response)=>{
        setProducts(response.data.data)
      })
  }, [])
  return (
    <>
      <Row>
          {products.map(product => <ProductCard products={products} key={product._id} id={product._id} data={product} setProducts={setProducts}/>)}
      </Row>
    </>
  )
}

export default App
