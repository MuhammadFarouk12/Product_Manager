import ModalShow from './ModalShow';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Nav} from 'react-bootstrap';

export default function Navbar({setShowError, setErrorMessage}) {
  return (
    <Nav
      className="justify-content-between"
      activeKey=""
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
       <Nav.Item>
        <Nav.Link className='text-white' eventKey="">Products Manager</Nav.Link>
      </Nav.Item>
 
      <Nav.Item>
        <ModalShow setShowError={setShowError} setErrorMessage={setErrorMessage}/>
      </Nav.Item>
    </Nav>
  );
}
