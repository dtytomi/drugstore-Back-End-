var express = require('express'),
  roleController = require('../app/controllers/roles.controller'),
  router = express.Router();

router.get('/', roleController.create);

router.post('/add', roleController.create);

router.put('/update/:id', roleController.update);

router.delete('/delete/:id', roleController.delete);

module.exports = router;