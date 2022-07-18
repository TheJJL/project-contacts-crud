const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [
    check('name')
        .exists()
        .not()
        .isEmpty(),
    check('surname')
        .exists()
        .not()
        .isEmpty(),
    check('email')
        .exists()
        .isEmail(),
    check('phone')
        .exists()
        .isNumeric(),
    check('cellphone')
        .exists()
        .isNumeric(),
    check('address')
        .exists()
        .not()
        .isEmpty(),
    check('age')
        .exists()
        .isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = {validateCreate}