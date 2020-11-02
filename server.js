require('dotenv').config();

const express = require('express'); // how we import in node
const app = express();
const cors = require('cors');
 
app.use(cors()); // middleware -- add CORS (Cross-Origin) headers to every request

const port = process.env.PORT;

app.get('/', (req, res) => {
    console.log(new Date());
    res.json([
        {
            name: 'spot'
        },
        {
            name: 'rover'
        }
    ]);
});

app.get('/drinks', (req, res) => {
    const drinks = [
        {
            name: 'apple juice'
        }, 
        {
            name: 'beer'
        }, 
        {
            name: 'crystal diet pepsi'
        }
    ];

    res.json(drinks);    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});