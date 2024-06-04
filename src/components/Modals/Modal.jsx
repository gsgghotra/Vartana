import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import faunadb from 'faunadb';
import NewErrorLog from '../../errorLogs/NewErrorLog';
var q = faunadb.query

var client = new faunadb.Client({
  secret: FAUNA_SECRET,
  // NOTE: Use the correct endpoint for your database's Region Group.
  endpoint: FAUNA_ENDPOINT,
})

const v_error = async () => {
  // (application, logLevel, errorCode, message, additionalInfo)
  NewErrorLog("Vartana", "error", "E602", "Unexpected error", {data:'Hello', type:'testing'})
};


function Example({ show, handleClose }) {

    const [product, setProduct] = useState({
      name: '',
      price: '',
      url: '',
      delivery:'',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can perform further actions here, such as sending the data to a server or processing it in some way.
      console.log('Product details submitted:', product);
      v_error();
    };

  return (
    <>

<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:'black'}}>
          I will not close if you click outside me. Do not even try to press
          escape key.

          <form onSubmit={handleSubmit}>
            <label>
              Product Name:
              <input type="text" name="name" value={product.name} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Price:
              <input type="text" name="price" value={product.price} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              URL:
              <input type="text" name="url" value={product.url} onChange={handleInputChange} />
            </label>
            <label>
              Delivery charges:
              <input type="text" name="delivery" value={product.delivery} onChange={handleInputChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='second-btn' onClick={handleClose}>
            Close
          </Button>
          <Button className='main-btn'>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;