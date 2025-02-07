const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
// const client = require('./databasepg')


// Database
const db = require('./config/databasepg');

// Test db connection
db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch (error => console.log('Unable to connect to the database:'+ error))

// END POINT/ ROUTES/ URL

app.use(bodyParser.json())
app.get('/', (req, res) => {
    // client.query('select * from users', (err, result)=>{
    //     if(!err){
    //         console.log(result.rows);
    //     }else {
    //         console.log(err.message);
    //     }
    //     client.end;
    //     res.send(result)
    // })
    res.send('UTAMA')
  
})

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})