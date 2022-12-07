const router = require('express').Router();
let Regi = require('../models/regi.model');

router.route('/').get((req,res) => {
    Regi.find()
    .then(registrations => res.json(registrations))
    .catch(err => res.status(400).json('Error: '+ err));
});



module.exports = router;
