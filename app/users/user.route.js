const Router = require('express');
const route = Router();
const controller = require('./user.controller');

route.route('/').get(controller.findAll)
.post(controller.addOne);

route.route('/:id').get(controller.getone);

route.route('/:id').delete(controller.deleteOne);


module.exports= route;