import { useState, useEffect, createContext } from 'react'
import ProductCard from './components/ProductCard.jsx'
import Navbar from './components/Navbar.jsx'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Row, Container } from 'react-bootstrap';
import ErrorModal from './components/ErrorModal.jsx'
export const ProductsContext = createContext({})
function App() {
  const [products, setProducts] = useState([])
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({status: '', message: ''})
  useEffect(()=>{
     axios.get('http://localhost:8080/api/products/')
      .then((response)=>{
        setProducts(response.data.data)
        setShowError(false)
      }).catch(error=>{
        setErrorMessage({message:error.message, status: error.status})
        setShowError(true)
      })
  }, [])
  return (
    <>
        <ProductsContext.Provider value={{products, setProducts}}>
          <div className='p-3 mb-2 bg-secondary text-dark'>
          <Container>
            <Navbar setShowError={setShowError} setErrorMessage={setErrorMessage}/>
          </Container>
          </div>
        </ProductsContext.Provider>
      <Container>
          <Row>
              {products.map(
            product => <ProductCard 
              products={products}
              key={product._id}
              id={product._id}
              data={product}
              setProducts={setProducts}
              setShowError={setShowError}
              setErrorMessage={setErrorMessage}
          />)}

          </Row>
      </Container>
      {showError && <ErrorModal heading={`Error: ${errorMessage.status}`} content={`${errorMessage.message}`} setShowError={setShowError}/>}
    </>
  )
}

export default App
