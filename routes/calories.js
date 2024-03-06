//Yair Yatzkan 208959478
//Yarin Akiva 318424660

//Requiring modules
const express = require('express');
const { addCalories, report, about } = require('../controllers/calories');

//Setting router
const router = express.Router();

//Setting routers
router.post('/addcalories', addCalories);
router.get('/report', report);
router.get('/about', about);

//Exporting router
module.exports = router;
