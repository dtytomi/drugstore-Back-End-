var express = require('express'),
    drugController = require('../app/controllers/drugs.controller'),
    router = express.Router();

router.get('/', drugController.list);

router.post('/add', drugController.create);

router.put('/update/:id', drugController.update);

router.delete('/delete/:id', drugController.delete);

module.exports = router;