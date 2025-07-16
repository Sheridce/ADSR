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
    const {angler, trip, fish} = req.body;
    const client = await pool.connect();
    try{

        const checkAnglers = await client.query(
            pool.query (
                "SELECT id FROM angler WHERE email = $1",
                [email]
            )
        )
            if (checkAnglers.rows.length > 0) {
                anglerID = checkAnglers.row[0];
                console.log("found angler with id: ", anglerID);
            } else {
                const anglerResult = await client.query(
                    "INSERT INTO angler (email, name_first, name_last), VALUES ($1, $2, $3) RETURNING angler_id"
                    [email, name_first, name_last]
                );
            }
            const anglerID = anglerResult.rows[0].angler_id;
            const tripResult = await client.query(
                "INSERT INTO trip (anglerID, trip_date, area_fished, bait_type, fishing_type, fishing_time, target_trout, trout_time, target_bass, basss_time, target_pike, pike_time, target_yp, yp_time, target_wp, wp_time, target_sunfish, sunfish_time, target_bullhead, bullhead_time, no_fish, personal_notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22) RETURNING trip_id",
                [anglerID, trip_date, area_fished, bait_type, fishing_type, fishing_time, target_trout, trout_time, target_bass, basss_time, target_pike, pike_time, target_yp, yp_time, target_wp, wp_time, target_sunfish, sunfish_time, target_bullhead, bullhead_time, no_fish, personal_notes]
            )
            const tripID = tripResult.rows[0].trip_id;
            for (const f of fish){
                await client.query(
                    "INSERT INTO fish (tripID, species, length, kept, released) VALUES ($1, $2, $3, $4, $5) RETURNING *",
                    [tripIP, species, length, kept, returned]
                );
            }
            await client.query("COMMIT");
            res.status(201).json({ message: "Submission complete" });
    }
    catch (err) {
        await client.query("ROLLBACK");
        console.error("Error submitting form:", err);
        res.status(500).json({ error: "Submission failed" });
    }
    finally{
        client.release();
    }
});