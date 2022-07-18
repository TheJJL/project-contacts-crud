const db = require("../models");
const Contact = db.contacts;
// Login
exports.login = (req, res) => {
  res.json({ message: "Bienvenido a ContactApp." });
  };
// Crear y Guardar un nuevo contacto
exports.create = (req, res) => {
    // Crear un contacto
    const contact = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phone: req.body.phone,
      cellphone: req.body.cellphone,
      address: req.body.address,
      age: req.body.age,
    };
    // Guardar un contacto en la dataBase
    Contact.create(contact)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrió un error en la creación del contacto."
        });
      });
  };
// Mostrar todos los contactos de la dataBase
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Contact.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrió un error al traer los contactos."
        });
      });
  };
// Encontrar un solo contacto por id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Contact.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se pudo encontrar el contacto con id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error cargando contacto con id=" + id
        });
      });
  };
// Actualizar un contacto por id
exports.update = (req, res) => {
    const id = req.params.id;
    Contact.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Contacto actualizado correctamente."
          });
        } else {
          res.send({
            message: `No se pudo actualizar el contacto con id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error actulizando Contacto con id=" + id
        });
      });
  };
// Borrar un contacto por id
exports.delete = (req, res) => {
    const id = req.params.id;
    Contact.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Contacto eliminado correctamente."
          });
        } else {
          res.send({
            message: `No se pudo eliminar el contacto con id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ocurrió un error al querer eliminar el contacto con id=" + id
        });
      });
  };

