var express = require('express');
var router = express.Router();
const userQueries = require('../queries/users')
// const { loginRequired } = require('../auth/helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users route');
});


router.get('/all', /* loginRequired , */ async (req, res, next) => {
  try {
    let users = await userQueries.getAllUsers()
    res.json({
      payload: users,
      msg: "Retrieved all users",
      err: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      msg: "Failed retrieving all users",
      err: true
    })
  }
});


module.exports = router;
