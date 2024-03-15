const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


// GET Route to get existing occasions

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  pool.query(`SELECT "occasion_name", "occasion_notes","id" FROM "occasion";`).then((result) => {
    res.send(result.rows);
    console.log('result.rows', result.rows);
  }).catch((error) => {
    console.log('Error GET /api/occasion', error);
    res.sendStatus(500);  
  });
})


//POST route to add an Occasion

router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  //console.log(req.body);
    console.log(req.body);
    const occasion = req.body;

    const addOccasionQuery = `
    INSERT INTO "occasion"
    ("occasion_name", "occasion_notes", "user_id")
    VALUES
    ($1, $2, $3);
`;
    pool.query(addOccasionQuery, [occasion.occasion_name, occasion.occasion_notes, req.user_id])
        .then((result) => {
            console.log(`Added this occasion to the database:`, occasion);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${addOccasionQuery}:`, error);
            res.sendStatus(500);
        })
});


//Delete route to delete an occasion

router.delete('/:id',rejectUnauthenticated, (req, res) => {
    console.log('we are here');
    console.log ('req.params.id', req.params.id);
    
    const queryText = `DELETE FROM "occasion" WHERE "id" = $1;`;

    pool.query(queryText, [req.params.id])
        .then(
            (result) => {
                console.log(`DELETE query worked! ${queryText}`, result);
                res.sendStatus(204);
            }
        )
        .catch(
            (error) => {
                console.log(`DELETE query failed, ${queryText}`, error);
                res.sendStatus(500);
            }
        );
        });



module.exports = router;
