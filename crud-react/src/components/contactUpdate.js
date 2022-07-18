import React from "react";

const FormUpdate = ({setContact, setListUpdated, setUpdate, search, setSearch}) => {
    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }
    const handleUpdate = id => {
        const requestInit = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(search)
        };
        fetch('http://localhost:8080/api/contacts/' + id, requestInit)
        .then(res => res.json())
        .then(res => console.log(res))
        setListUpdated(true)
        setUpdate(false)
    }

    return (
        <form onSubmit={() => handleUpdate(search.id)}>
            <div className="mb-3">
                <label htmlForm="name" className="form-label">Nombres</label>
                <input name="name" onChange={handleChange} type="text" id="name" className="form-control" value={search.name} required/>
            </div>
            <div div className="mb-3">
                <label htmlForm="surname" className="form-label">Apellidos</label>
                <input name="surname" onChange={handleChange} type="text" id="surname" className="form-control" value={search.surname} required/>
            </div>
            <div className="mb-3">
                <label htmlForm="email" className="form-label">Email</label>
                <input name="email" onChange={handleChange} type="email" id="email" className="form-control" value={search.email} required/>
            </div>
            <div className="mb-3">
                <label htmlForm="phone" className="form-label">Teléfono</label>
                <input name="phone" onChange={handleChange} type="number" id="phone" className="form-control" value={search.phone} required/>
            </div>
            <div className="mb-3">
                <label htmlForm="cellphone" className="form-label">Celular</label>
                <input name="cellphone" onChange={handleChange} type="number" id="cellphone" className="form-control" value={search.cellphone} required/>
            </div>
            <div className="mb-3">
                <label htmlForm="address" className="form-label">Dirección</label>
                <input name="address" onChange={handleChange} type="text" id="address" className="form-control" value={search.address} required/>
            </div>
            <div className="mb-3">
                <label htmlForm="age" className="form-label">Edad</label>
                <input name="age" onChange={handleChange} type="number" id="age" className="form-control" value={search.age} required/>
            </div>
            <button type="submit" className="btn btn-primary">Editar</button>
        </form>
    );
}

export default FormUpdate;