const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: ["http://localhost:5173"]
};
require('@dotenvx/dotenvx').config()
const Pool = require('pg').Pool;

const pool = new Pool ({
    user: process.env.DB_USER,
    host: 'localhost',
    database: 'ads-db',
    password: process.env.DB_PASSWORD,
    port: 5432
})

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({"fruits": ["one", "two","three" ,"four", "five", "six", "seven"]});
     
})

app.listen(8080, () => {
    console.log("server started on port 8080");
})