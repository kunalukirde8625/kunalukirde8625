require("dotenv").config();

const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();

const connectDB = require('./db/connect');

const products_routes = require('./routes/products');

app.get('/' , (req,res) => {
    res.send('Hi, I Am Live..');
});

// middleware or to set router
app.use("/api/products" , products_routes)





const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT , () => { console.log(` ${PORT} Yes, I Am Connected`);
    });
    } catch (error) 
    {
        console.log(error);
    }
}


start();