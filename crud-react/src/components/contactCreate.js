import React from "react";

const FormCreate = ({contact, setContact}) => {
    const handleChange = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = () => {
        const requestInit = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(contact)
        };
        fetch('http://localhost:8080/api/contacts', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))
        setContact({
            name: '',
            surname: '',
            email: '',
            phone: 0,
            cellphone: 0,
            address: '',
            age: 0
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlForm="name" className="form-label">Nombres</label>
                <input name="name" onChange={handleChange} type="text" id="name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlForm="surname" className="form-label">Apellidos</label>
                <input name="surname" onChange={handleChange} type="text" id="surname" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlForm="email" className="form-label">Email</label>
                <input name="email" onChange={handleChange} type="text" id="email" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlForm="phone" className="form-label">Teléfono</label>
                <input name="phone" onChange={handleChange} type="number" id="phone" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlForm="cellphone" className="form-label">Celular</label>
                <input name="cellphone" onChange={handleChange} type="number" id="cellphone" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlForm="address" className="form-label">Dirección</label>
                <input name="address" onChange={handleChange} type="text" id="address" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlForm="age" className="form-label">Edad</label>
                <input name="age" onChange={handleChange} type="number" id="age" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Insertar</button>
        </form>
    );
}

export default FormCreate;