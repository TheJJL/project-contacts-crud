import React, { Fragment, useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Navbar from "./components/navbar";
import ContactList from "./components/contactList";
import FormCreate from "./components/contactCreate";
import FormUpdate from "./components/contactUpdate";

function App() {
  const [contact, setContact] = useState({
    name: '',
    surname: '',
    email: '',
    phone: 0,
    cellphone: 0,
    address: '',
    age: 0
  })
  const [contacts, setContacts] = useState([])
  const [listUpdated, setListUpdated] = useState(false)
  const [insert, setInsert] = useState(false)
  const [update, setUpdate] = useState(false)
  const [search, setSearch] = useState([])

  const openModalInsert = () => {
    setInsert(true)
  };
  const closeModalInsert = () => {
    setInsert(false)
  };
  const closeModalUpdate = () => {
    setUpdate(false)
  };

  useEffect(() => {
    const getContacts = () => {
      fetch('http://localhost:8080/api/contacts')
      .then(res => res.json())
      .then(res => setContacts(res))
    }
    getContacts()
    setListUpdated(false)
  }, [listUpdated])
  
  return (
    <Fragment>
      <Navbar brand='Contact App'/>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 style={{textAlign:"center"}}>Lista de contactos</h2>
            <ContactList contacts={contacts} setListUpdated={setListUpdated} setUpdate={setUpdate} setSearch={setSearch}/>
          </div>
          <div>
            <br/>
            <button onClick={() => openModalInsert()} className="btn btn-success">Agregar contacto</button>
            <br/>
          </div>
          <Modal isOpen={insert}>
            <ModalHeader>
              <div className="col">
                <h2 style={{textAlign:"center"}}>Agregar contacto</h2>
              </div>
            </ModalHeader>
            <ModalBody>
              <FormCreate contact={contact} setContact={setContact}/>
            </ModalBody>
            <ModalFooter>
              <button onClick={() => closeModalInsert()} className="btn btn-danger">Cancelar</button>
            </ModalFooter>
          </Modal>
          <Modal isOpen={update}>
            <ModalHeader>
              <div className="col">
                <h2 style={{textAlign:"center"}}>Editar contacto</h2>
              </div>
            </ModalHeader>
            <ModalBody>
              <FormUpdate setContact={setContact} setListUpdated={setListUpdated} setUpdate={setUpdate} search={search} setSearch={setSearch}/>
            </ModalBody>
            <ModalFooter>
              <button onClick={() => closeModalUpdate()} className="btn btn-danger">Cancelar</button>
            </ModalFooter>
          </Modal>
          </div>
      </div>
    </Fragment>
  );
}

export default App;
