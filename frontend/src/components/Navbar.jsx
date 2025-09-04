import ModalShow from './ModalShow';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Nav} from 'react-bootstrap';

export default function Navbar() {
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
        <ModalShow/>
      </Nav.Item>
    </Nav>
  );
}
