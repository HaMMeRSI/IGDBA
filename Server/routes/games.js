const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const { connectionUrl } = require('../appConfig')

/* GET home page. */
router.get('/', (req, res, next) => {
	MongoClient.connect(connectionUrl, (err, client) => {
		const collection = client.db("IGDB").collection("GameCollection");

		client.close();
	});
});

module.exports = router;
