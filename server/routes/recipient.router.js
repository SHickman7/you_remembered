const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


// GET Route to get existing recipients

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  pool.query(`SELECT "recipient_fullname", "phone_number","email", "address", "recipient_notes", "user_id" FROM "recipient";`).then((result) => {
    res.send(result.rows);
    console.log('result.rows', result.rows);
  }).catch((error) => {
    console.log('Error GET /api/recipient', error);
    res.sendStatus(500);  
  });
})


//POST route to add a recipient

router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  //console.log(req.body);
    console.log(req.body);
    const recipient = req.body;

    const addRecipientQuery = `
    INSERT INTO "recipient"
    ("recipient_fullname", "phone_number","email", "address", "recipient_notes", "user_id")
    VALUES
    ($1, $2, $3, $4, $5, $6);
`;
    pool.query(addRecipientQuery, [recipient.recipient_fullname, recipient.phone_number, recipient.email, recipient.address, recipient.recipient_notes, req.user_id])
        .then((result) => {
            console.log(`Added this recipient to the database:`, recipient);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${addRecipientQuery}:`, error);
            res.sendStatus(500);
        })
});


//Delete route to delete an occasion

router.delete('/:id',rejectUnauthenticated, (req, res) => {
    console.log('we are here');
    console.log ('req.params.id', req.params.id);
    
    const queryText = `DELETE FROM "recipient" WHERE "id" = $1;`;

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