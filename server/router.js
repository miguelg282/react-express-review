const controller = require('./controller');
const router = require('express').Router();

router
    .route('/')
    .get(controller.get)
    .post(controller.post)

router
    .route('/:index')
    .delete(controller.delete);

module.exports = router;