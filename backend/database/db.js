const pgp = require('pg-promise')();
const cn = ""
const db = pgp(cn)

module.exports = db;