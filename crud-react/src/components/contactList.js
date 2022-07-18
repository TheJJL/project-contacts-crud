import React from "react";

const ContactList = ({contacts, setListUpdated, setUpdate, setSearch}) => {
    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE',
        };
        fetch('http://localhost:8080/api/contacts/' + id, requestInit)
        .then(res => res.json())
        .then(res => console.log(res))
        setListUpdated(true)
    };
    const openModalUpdate = id => {
        fetch('http://localhost:8080/api/contacts/' + id)
        .then(res => res.json())
        .then(res => setSearch(res))
        setUpdate(true)
    };
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Celular</th>
                    <th>Dirección</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.surname}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.cellphone}</td>
                        <td>{contact.address}</td>
                        <td>{contact.age}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(contact.id)} className="btn btn-danger">Eliminar</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => openModalUpdate(contact.id)} className="btn btn-primary">Editar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ContactList