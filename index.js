const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const path = require('path')

mongoose.connect('mongodb://localhost:27017/login', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connected') })
    .catch((err) => { console.log(err) })

app.use(bodyParser.urlencoded({ extended: false }));

const scheme_data = mongoose.Schema({
    username: String,
    name: String,
    phone: Number,
    password: String,
    email: String
})

var data = mongoose.model('user_info', scheme_data);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/sign_up.html')
});

app.post('/signup', (req, res) => {
    var user = {
        username: `${req.body.username}`,
        name: `${req.body.name}`,
        phone: `${req.body.phone}`,
        password: `${req.body.password}`,
        email: `${req.body.email}`
    }

    const fun = async () => {
        const result = await data.insertMany(user)
        console.log(result)
        res.send('Signup Successfully')
    }
    fun()
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})

app.post('/login', (req, res) => {
    const fun = async () => {
        const result = await data.find({ username: `${req.body.username}` })
        console.log(result)
        if (result.length > 0) {
            for (let x in result) {
                if (req.body.username === result[x].username && req.body.password === result[x].password) {
                    res.send('SuccessFully Login')
                }
                else {
                    res.send('not login')
                }
            }
        }
        else {
            res.send('Not Login')
        }
    }
    fun()
});

app.listen(8080, () => { console.log('server is runnig') })