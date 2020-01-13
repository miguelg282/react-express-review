const controller = require('./controller');
const router = require('express').Router();
//==========expressjs Guide/Routing
//==========separate files used for separation of concerns.
router
    .route('/')
    .get(controller.get)
    .post(controller.post)

router
    .route('/:index')
    .delete(controller.delete);

module.exports = router;