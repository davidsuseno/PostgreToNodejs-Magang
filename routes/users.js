const express = require('express');
const router = express.Router();
const db = require('../config/databasepg');
const Users = require('../models/Users');


// Route untuk menampilkan data users
router.get('/data', async (req, res) => {
    try {
      const users = await Users.findAll(); // Ambil data dari database
      console.log(users); // Log data ke terminal untuk debugging
  
      // Render file Pug dengan data
      res.render('users', { users }); // Pastikan data diteruskan dengan nama "users"
    } catch (err) {
      console.error(err);
      res.status(500).send('Terjadi kesalahan saat mengambil data.');
    }
  });


//Add a user 
router.get('/add', (req, res) => {
    const data = {
        id : '6',
        full_name : 'Elian Wahyudi',
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
});


module.exports = router;