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
app.use(express.json());



app.listen(8080, () => {
    console.log("server started on port 8080");
})

app.post("/api", async (req, res) => {
    const{trip_id, species, length, kept, released} = req.body;

    try{
        const result = await pool.query(
            "INSERT INTO fish (trip_id, species, length, kept, released) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [trip_id, species, length, kept, released]
        );
        console.log("Inserted row:", result.rows[0]);

        res.status(201).json({ message: "Fish added", trip: result.rows[0] });
    }
    catch (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({ error: "Database insert failed" });
    }
});