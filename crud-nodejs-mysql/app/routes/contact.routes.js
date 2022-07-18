module.exports = app => {
    const contacts = require("../controllers/contact.controller.js");
    const { validateCreate } = require("../validators/contact.controllers")
    var router = require("express").Router();
    // Login
    router.get("/", contacts.login);
    // Crear un nuevo contacto
    router.post("/contacts", validateCreate, contacts.create);
    // Mostrar todos los contactos
    router.get("/contacts", contacts.findAll);
    // Mostrar un solo contacto por id
    router.get("/contacts/:id", contacts.findOne);
    // Actualizar un contacto por id
    router.put("/contacts/:id", contacts.update);
    // Borrar un contacto por id
    router.delete("/contacts/:id", contacts.delete);
    app.use('/api/', router);
  };