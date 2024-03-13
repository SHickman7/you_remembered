const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET Route to get existing occasions

router.get('/', (req, res) => {
  // GET route code here
  pool.query('SELECT * FROM "occasion";').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error GET /api/occasion', error);
    res.sendStatus(500);  
  });
})


//POST route to add an Occasion

router.post('/', (req, res) => {
  // POST route code here
  console.log(req.body);

    const addOccasionQuery = `
    INSERT INTO "occasion"
    ("occasion_name", "occasion_notes", "user_id")
    VALUES
    ($1, $2, $3);
`;
    pool.query(addOccasionQuery)
});


module.exports = router;
