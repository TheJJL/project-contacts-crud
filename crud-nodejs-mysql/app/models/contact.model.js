module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      cellphone: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
    });
    return Contact;
  };