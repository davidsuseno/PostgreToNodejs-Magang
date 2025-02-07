const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');


// Database
const db = require('./config/databasepg');

// Test db connection
// db.authenticate()
//     .then(() => console.log('Connection has been established successfully.'))
//     .catch (error => console.log('Unable to connect to the database:'+ error))

// Set Pug sebagai template engine
app.set('view engine', 'pug');
app.set('views', './views'); // Direktori untuk file .pug

// END POINT/ ROUTES/ URL
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.render('users'); // Render file views/users.pug
  
});

// Users routes
app.use('/users', require('./routes/users'));

app.get('/hello', (req, res) => {
    console.log({ urlParam: req.query })
    res.send('Hello World papaw!')
  })

app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body })
    const username = req.body.username
    if (username === 'usernameFromDbExist') {
        res.status(400).send("username sudah digunakan")
    } 
    res.send("Login Success")
})

app.put('/username', (req, res) => {
    console.log({ updateData: req.body })
    res.send('Update berhasil')
  })

// Mulai server
app.listen(port, async () => {
  try {
    await db.authenticate();
    console.log('Koneksi ke database berhasil.');
    console.log(`Server berjalan di http://localhost:${port}`);
  } catch (err) {
    console.error('Gagal terhubung ke database:', err);
  }
});
