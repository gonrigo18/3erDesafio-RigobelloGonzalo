const express = require ( 'express' );
const fs = require ('fs');
const app = express();


async function readFile(){
    try{
        const data = await fs.readFileSync ('./products.txt', 'utf-8');
        return JSON.parse(data);
    }catch(err){
        console.log(err);
    }
}

app.get('/products', (req, res) => {
    res.sendFile(__dirname + "/products.txt");
});


app.get('/productsRandom', async (req, res) =>{
    const product = await readFile();
    const random = parseInt(Math.random() * product.length)
    res.send(product[random])
});


const port = 8080;

const server = app.listen ( port, () => {
    console.log(`Server up in http://localhost:${port}`);
});

server.on('error', (err)=> console.log (`Server error: ${err}`));
