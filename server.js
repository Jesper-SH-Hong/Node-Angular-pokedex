const express = require('express')
const app = express()

//port for my backendAPI(node)
const port = 5000
const cors = require('cors');
const bodyparser = require("body-parser");

app.use(cors());

//to translate encoded data and JSON data in HTTP request body
app.use(bodyparser.urlencoded({
    extended: true
}));
var jsonParser = bodyparser.json();

// fixing "413 Request Entity Too Large" errors for line39
app.use(express.json({
    limit: "10mb",
    extended: true
}))

app.use(express.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000
}))

//dist folder for Angular build
app.use(express.static(process.cwd() + "/pokedex-app/dist/pokedex-app/"));

app.listen(port, function (err) {
    console.log("server listenig to 5000!")
    if (err) console.log(err);
})

//default route
app.get('/', function (req, res) {
    // res.send('GET request to my homepage')
    res.sendFile(process.cwd() + "/pokedex-app/dist/pokedex-app/index.html")
})





const mongoose = require('mongoose');
var conn_cart = mongoose.createConnection('mongodb://localhost:27017/cartDB');


//create schema for collection 'carts'
const cartModel = conn_cart.model('carts', new mongoose.Schema({
    'name': String,
    'pokeID': Number,
    'qty': Number,
    'price': Number
}));


app.post('/api/post/cart', jsonParser, function (req, res) {
    console.log("SERVER: got a request to add item in cart")
    console.log(req.body.id)


    cartModel.create({
        'name': req.body.name,
        'pokeID': req.body.id,
        'qty': 1,
        'price': req.body.id
    }, function (err, data) {
        console.log("SERVER: cart Data created\n" + data)
    })
})


app.get('/api/get/cart', function (req, res) {
    cartModel.find({}, function (err, data) {
        if (err) {
            console.log("SERVER: Error " + err);
        } else {
            console.log("SERVER: Data " + data);
        }
        res.json(data);
    });
})


app.delete('/api/delete/cart', function (req, res) {
    cartModel.deleteMany({}, function (err, data) {
        if (err) {
            console.log("SERVER: Error " + err);
        } else {
            console.log("SERVER: Data " + data);
        }
        res.json(data);
    });
})