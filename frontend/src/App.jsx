import { useState, useEffect, createContext } from 'react'
import ProductCard from './components/ProductCard.jsx'
import Navbar from './components/Navbar.jsx'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Row, Container } from 'react-bootstrap';
export const ProductsContext = createContext({})
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
        <ProductsContext.Provider value={{products, setProducts}}>
          <div className='p-3 mb-2 bg-secondary text-dark'>
          <Container>
            <Navbar/>
          </Container>
          </div>
        </ProductsContext.Provider>
      <Container>
          <Row>
              {products.map(product => <ProductCard products={products} key={product._id} id={product._id} data={product} setProducts={setProducts}/>)}
          </Row>
      </Container>
      
    </>
  )
}

export default App
