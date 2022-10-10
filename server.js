const express = require('express')
const app = express()
const port = 5000
//port for node

const cors = require('cors');
app.use(cors());

const bodyparser = require("body-parser");
// app.use(bodyparser.urlencoded({  //body parser 안에 어떤 데이터 타입을 넣으셨나요. 인코디드된거요 ㅇㅇ
//     extended: true
// }));


// fixing "413 Request Entity Too Large" errors for line37
app.use(express.json({
    limit: "10mb",
    extended: true
}))
app.use(express.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000
}))


var jsonParser = bodyparser.json();


app.use(express.static(process.cwd() + "/pokedex-app/dist/pokedex-app/"));


app.listen(port, function (err) {
    console.log("server listenig to 5000!")
    if (err) console.log(err);
})

app.get('/', function (req, res) {
    // res.send('GET request to ho!!mepage')
    res.sendFile(process.cwd() + "/pokedex-app/dist/pokedex-app/index.html")
})






const mongoose = require('mongoose');

var conn_cart = mongoose.createConnection('mongodb://localhost:27017/cartDB');



const cartModel = conn_cart.model('carts', new mongoose.Schema( //첫 변수는 콜렉션명
    {
        'name': String,
        'pokeID': Number,
        'qty': Number,
        'price': Number
    }));



app.post('/api/post/cart', jsonParser, function (req, res) {
    console.log("서버로 드디어 왔따")
    // console.log(req.body)
    console.log(req.body.id)
    // res.send("hi")


    cartModel.create({
        'name': req.body.name,
        'pokeID': req.body.id,
        'qty': 1,
        'price': req.body.id
    }, function (err, data) {
        console.log("cart Data created\n" + data)

        // res.send("cart insertion done")
    })
})



app.get('/api/get/cart', function(req, res) {
    cartModel.find({}, function(err, data){
        if (err){
          console.log("Error " + err);
        }else{
          console.log("Data "+ data); 
        }
        res.json(data);  
    });
  })


  app.get('/api/delete/cart', function(req, res) {
    cartModel.deleteMany({}, function(err, data){
        if (err){
          console.log("Error " + err);
        }else{
          console.log("Data "+ data); 
        }
        res.json(data);  
    });
  })