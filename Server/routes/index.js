const express = require('express');
const router = express.Router();
const path = require('path')
const MongoClient = require('mongodb').MongoClient;
const { connectionUrl } = require('../appConfig')

/* GET home page. */
router.get('/', (req, res, next) => {
	MongoClient.connect(connectionUrl, (err, client) => {
		const collection = client.db("test").collection("devices");
		// perform actions on the collection object
		client.close();
	});
});

module.exports = router;
