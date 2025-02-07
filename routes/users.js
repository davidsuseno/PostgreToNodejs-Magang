const express = require('express');
const router = express.Router();
const db = require('../config/databasepg');
const Users = require('../models/Users');

//get list
router.get('/', (req, res) => 
// res.send('USERS'));
    Users.findAll({ where: { id: '6' } })
    .then(users => {
        console.log(users);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));

//Add a user 
router.get('/add', (req, res) => {
    const data = {
        id : '6',
        full_name : 'Felicia Wahyudi',
        address : 'Jl. Diponegoro No. 19, Malang, Jawa Timur',

    }

    let {id, full_name, address} = data;


//insert into table
Users.create({
        id,
        full_name,
        address,

    })
        .then(list => res.redirect('/users'))
        .catch(err => console.log(err))
})

module.exports = router;