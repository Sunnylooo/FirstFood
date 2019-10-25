import express from "express";
import db from "../db/database";
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* POST users listing. */
router.post('/',(req, res) => {
  res.send('request /POST');
});
/* PUT users listing. */
router.put('/',(req, res) => {
  res.send('request /PUT');
});
/* DELETE users listing. */
router.delete('/',(req, res) => {
  res.send('request /DELETE');
});

module.exports = router;
