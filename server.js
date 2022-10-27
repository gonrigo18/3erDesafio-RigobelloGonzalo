const {promises: fs} = require ('fs')
const express = require ( 'express' );
const { request } = require('http');
const app = express();

app.get('/products', (req, res) => {
    res.send(__dirname + "/products.txt");
});

const products = JSON.parse( await fs.readFile("./products.txt", 'utf-8'));
console.log(products);

app.get('/productsRandom',(req, res) =>{
    const random = parseInt(Math.random() * products.length)
    res.send(products[random])
});



const port = 8080;

const server = app.listen ( port, () => {
    console.log(`Server up in http://localhost:${port}`);
});

server.on('error', (err)=> console.log (`Server error: ${err}`));
